import { NextFunction, Request, Response } from 'express';
import User, { IUser } from '../models/User';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail, sendPasswordEmail,sendPasswordResetEmail, sendPasswordResetSuccessEmail } from '../utils/emailService';
import { generateToken,generateRandomPassword } from '../utils/generateToken';
import bcrypt from 'bcrypt';

// Helper function for error responses
const errorResponse = (res: Response, statusCode: number, message: string, code?: string) => {
  return res.status(statusCode).json({ error: message, code });
};

/////////////////////////////////////////////////////////// Login //////////////////////////////////////////////////

export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, 400, 'Email and password are required', 'INVALID_CREDENTIALS');
    }

    const user = await User.findOne({ email });

    if (!user) {
      return errorResponse(res, 401, 'User not found. Please register first.', 'USER_NOT_FOUND');
    }

    if ((user.provider === 'linkedin' || user.provider === 'google')&& !user.password) {
      const randomPassword = generateRandomPassword();
      user.password = randomPassword;
      await user.save();
      await sendPasswordEmail(user.email, randomPassword);
     // return res.status(200).json({ message: "Please check your email for a new password." });
      return errorResponse(res, 403, 'You have not set a password yet. Please check your email. A new password will be sent to you.', 'USER_PASSWORD_EMAIL');
    }


    if (!user.isVerified) {
      return errorResponse(res, 403, 'Email not verified. Please verify your email.', 'EMAIL_NOT_VERIFIED');
    }

    const isMatch = await bcrypt.compare(password, user.password!);
    if (!isMatch) {
      return errorResponse(res, 401, 'Incorrect password. Please try again.', 'INCORRECT_PASSWORD');
    }

    const token = generateToken(user.id);
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return errorResponse(res, 500, 'An internal server error occurred', 'SERVER_ERROR');
  }
};


/////////////////////////////////////////////////////////// Register //////////////////////////////////////////////////

export const register = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { email, password,provider,role } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      errorResponse(res, 400, 'User already exists');
      return;
    }

    // Hash the password
    // password is hashed in user model
    //const saltRounds = 10;
    //const hashedPassword = await bcrypt.hash(password, saltRounds);

    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    console.log("JWT_SECRET in registration:", process.env.JWT_SECRET);

    const user = new User({
      email,
      password: password,
      verificationToken,
      role,
      provider,
    });

    await user.save();
    await sendVerificationEmail(email, verificationToken);
    res.status(201).json({ message: 'Verification email sent' });
  } catch (error) {
    console.error('Error in registration:', error);
    errorResponse(res, 500, 'Server error');
    return;
  }
};

/////////////////////////////////////////////////////////// Verify Email //////////////////////////////////////////////////

export const verifyEmail = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Missing token" });
    }

    console.log(`Token received: ${token}`);

    // Verify JWT
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET!) as { email: string };
    console.log(`Decoded token: ${JSON.stringify(decoded)}`);
    
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "Email already verified." });
    }

    // Update user verification status
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    console.log("User verification successful");
    res.status(200).json({ message: "Email verified successfully. You can now log in." });
  } catch (error: unknown) {
    console.error("Caught error:", error);

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(400).json({ message: "Token has expired. Please request a new verification email." });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ message: "Invalid token. Please request a new verification email." });
    } else if (error instanceof Error) {
      return res.status(500).json({ message: "An unexpected error occurred. Please try again later." });
    } else {
      return res.status(500).json({ message: "An unexpected error occurred. Please try again later." });
    }
  }
};





/////////////////////////////////////////////////////////// Forgot Password //////////////////////////////////////////////////

export const forgotPassword = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) return errorResponse(res, 404, 'User not found');

    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    user.resetToken = resetToken;
    await user.save();

    await sendPasswordResetEmail(email, resetToken);
    return res.json({ message: 'Reset instructions sent to email' });
  } catch (error) {
    return errorResponse(res, 500, 'Server error');
  }
};

/////////////////////////////////////////////////////////// Reset Password //////////////////////////////////////////////////

export const resetPassword = async (req: Request, res: Response): Promise<any> => {
  try {
    const { token, newPassword } = req.body;
    console.log(req.body);
    if (!token || !newPassword) {
      return errorResponse(res, 400, 'Token and new password are required');
    }
    console.log("here");

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const userc = await User.findOne({ _id: decoded.userId });
    console.log(userc);
    const user = await User.findOne({ _id: decoded.userId, resetToken: token });
    console.log(decoded);
    console.log(user);

    if (!user) {
      return errorResponse(res, 400, 'Invalid or expired reset token');
    }

    // Hash and update password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    await user.save();

    // Send success email
    await sendPasswordResetSuccessEmail(user.email);

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return errorResponse(res, 400, 'Reset token has expired');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return errorResponse(res, 400, 'Invalid reset token');
    }
    return errorResponse(res, 500, 'An error occurred while resetting password');
  }
};

/////////////////////////////////////////////////////////// Get All Users //////////////////////////////////////////////////

export const getAll = async (req: Request, res: Response) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
