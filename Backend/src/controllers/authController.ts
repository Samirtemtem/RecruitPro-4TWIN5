import { NextFunction, Request, Response } from 'express';
import User, { IUser } from '../models/User';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail, sendPasswordEmail } from '../utils/emailService';
import { generateToken, generateRandomPassword } from '../utils/generateToken';
import bcrypt from 'bcrypt';
import Profile from '../models/Profile';
import Education from '../models/Education';
import Experience from '../models/Experience';
import Skill from '../models/Skill';
import { uploadToCloudinary } from '../utils/cloudinary';
import fs from 'fs/promises';

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
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      education,
      experience,
      skills,
      socialLinks
    } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, 400, 'User already exists');
    }

    // Handle file uploads if they exist
    let profileImageUrl = '';
    let cvUrl = '';

    if (req.files) {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      
      try {
        // Upload profile image to Cloudinary
        if (files.profileImage?.[0]) {
          profileImageUrl = await uploadToCloudinary(files.profileImage[0], 'profile-images');
          // Delete temp file
          await fs.unlink(files.profileImage[0].path);
        }
        
        // Upload CV to Cloudinary
        if (files.cv?.[0]) {
          cvUrl = await uploadToCloudinary(files.cv[0], 'cvs');
          // Delete temp file
          await fs.unlink(files.cv[0].path);
        }
      } catch (error) {
        // Clean up any remaining temp files
        for (const fieldname in files) {
          for (const file of files[fieldname]) {
            try {
              await fs.unlink(file.path);
            } catch (unlinkError) {
              console.error('Error deleting temp file:', unlinkError);
            }
          }
        }
        throw error;
      }
    }

    // Generate verification token
    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    // Create new user
    const user = new User({
      email,
      password,
      verificationToken,
      provider: 'local',
      isVerified: false
    });

    await user.save();

    // Create profile
    const profile = new Profile({
      user: user._id,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      profileImage: profileImageUrl,
      cv: cvUrl,
      socialLinks: JSON.parse(typeof socialLinks === 'string' ? socialLinks : JSON.stringify(socialLinks))
    });

    await profile.save();

    // Parse and validate education data
    if (education) {
      const educationData = typeof education === 'string' ? JSON.parse(education) : education;
      if (Array.isArray(educationData) && educationData.length > 0) {
        const educationPromises = educationData.map(edu => {
          const newEducation = new Education({
            user: user._id,
            ...edu
          });
          return newEducation.save();
        });
        await Promise.all(educationPromises);
      }
    }

    // Parse and validate experience data
    if (experience) {
      const experienceData = typeof experience === 'string' ? JSON.parse(experience) : experience;
      if (Array.isArray(experienceData) && experienceData.length > 0) {
        const experiencePromises = experienceData.map(exp => {
          const newExperience = new Experience({
            user: user._id,
            ...exp
          });
          return newExperience.save();
        });
        await Promise.all(experiencePromises);
      }
    }

    // Parse and validate skills data
    if (skills) {
      const skillsData = typeof skills === 'string' ? JSON.parse(skills) : skills;
      if (Array.isArray(skillsData) && skillsData.length > 0) {
        const skillPromises = skillsData.map(skill => {
          const newSkill = new Skill({
            user: user._id,
            ...skill
          });
          return newSkill.save();
        });
        await Promise.all(skillPromises);
      }
    }

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ 
      message: 'Registration successful. Please check your email to verify your account.',
      user: {
        id: user._id,
        email: user.email,
        profile: {
          firstName,
          lastName,
          phoneNumber,
          address,
          profileImage: profileImageUrl,
          cv: cvUrl
        }
      }
    });

  } catch (error) {
    console.error('Error in registration:', error);
    return errorResponse(res, 500, 'Server error during registration');
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




/*
/////////////////////////////////////////////////////////// Forgot Password //////////////////////////////////////////////////

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return errorResponse(res, 404, 'User not found');

    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    user.resetToken = resetToken;
    await user.save();

    await sendPasswordResetEmail(email, resetToken);
    res.json({ message: 'Reset instructions sent to email' });
  } catch (error) {
    errorResponse(res, 500, 'Server error');
  }
};

/////////////////////////////////////////////////////////// Reset Password //////////////////////////////////////////////////

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };

    const user = await User.findOne({ _id: decoded.userId, resetToken: token });
    if (!user) return errorResponse(res, 400, 'Invalid token');

    user.password = await argon2.hash(newPassword);
    user.resetToken = undefined;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    errorResponse(res, 400, 'Invalid or expired token');
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

*/
