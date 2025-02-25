import { NextFunction, Request, Response } from 'express';
import { User, IUser } from '../models/User';
import Profile from '../models/Profile';
import Education from '../models/Education';
import Experience from '../models/Experience';
import Skill from '../models/Skill';
import SocialLinks from '../models/SocialLinks';
import { Role } from '../models/types';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail, sendPasswordEmail } from '../utils/emailService';
import { generateToken, generateRandomPassword } from '../utils/generateToken';
import { uploadToCloudinary } from '../utils/cloudinary';
import fs from 'fs/promises';
import { Schema } from 'mongoose';

// Helper function for error responses
const errorResponse = (res: Response, statusCode: number, message: string, code?: string) => {
  return res.status(statusCode).json({ error: message, code });
};

/////////////////////////////////////////////////////////// Login //////////////////////////////////////////////////
/*
export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, 400, 'Email and password are required', 'INVALID_CREDENTIALS');
    }

    const user = await User.findOne({ email }).populate('profile');

    if (!user) {
      return errorResponse(res, 401, 'User not found. Please register first.', 'USER_NOT_FOUND');
    }

    if ((user.provider === 'linkedin' || user.provider === 'google') && !user.password) {
      const randomPassword = generateRandomPassword();
      user.password = randomPassword;
      await user.save();
      await sendPasswordEmail(user.email, randomPassword);
      return errorResponse(res, 403, 'You have not set a password yet. Please check your email. A new password will be sent to you.', 'USER_PASSWORD_EMAIL');
    }

    if (!user.isVerified) {
      return errorResponse(res, 403, 'Email not verified. Please verify your email.', 'EMAIL_NOT_VERIFIED');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return errorResponse(res, 401, 'Incorrect password. Please try again.', 'INCORRECT_PASSWORD');
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user.id);
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        image: user.image,
        profile: user.profile,
        createDate: user.createDate,
        lastLogin: user.lastLogin,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return errorResponse(res, 500, 'An internal server error occurred', 'SERVER_ERROR');
  }
};*/

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

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !phoneNumber || !address) {
      return errorResponse(res, 400, 'All required fields must be provided', 'MISSING_FIELDS');
    }

    // Validate field lengths and formats
    if (firstName.length < 2 || firstName.length > 50) {
      return errorResponse(res, 400, 'First name must be between 2 and 50 characters', 'INVALID_FIRSTNAME');
    }

    if (lastName.length < 2 || lastName.length > 50) {
      return errorResponse(res, 400, 'Last name must be between 2 and 50 characters', 'INVALID_LASTNAME');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return errorResponse(res, 400, 'Please enter a valid email address', 'INVALID_EMAIL');
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return errorResponse(res, 400, 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number', 'INVALID_PASSWORD');
    }

    // Validate phone number (11 digits)
    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phoneNumber.replace(/\D/g, ''))) {
      return errorResponse(res, 400, 'Please enter a valid 11-digit phone number', 'INVALID_PHONE');
    }

    // Validate address length
    if (address.length < 5) {
      return errorResponse(res, 400, 'Address must be at least 5 characters', 'INVALID_ADDRESS');
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, 400, 'User already exists', 'USER_EXISTS');
    }

    // Handle file uploads if they exist
    let profileImageUrl = '';
    let cvUrl = '';

    if (req.files) {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      
      // Validate CV file if provided
      if (files.cv?.[0]) {
        const cvFile = files.cv[0];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (!allowedTypes.includes(cvFile.mimetype)) {
          return errorResponse(res, 400, 'Only PDF and Word documents are allowed for CV', 'INVALID_CV_TYPE');
        }
        
        if (cvFile.size > 5 * 1024 * 1024) {
          return errorResponse(res, 400, 'CV file size must be less than 5MB', 'INVALID_CV_SIZE');
        }
        
        try {
          cvFile.mimetype = 'application/pdf';
          cvUrl = await uploadToCloudinary(cvFile, 'cvs');
        } catch (error) {
          return errorResponse(res, 500, 'Error uploading CV', 'CV_UPLOAD_ERROR');
        }
      }
      
      // Validate profile image if provided
      if (files.profileImage?.[0]) {
        const profileFile = files.profileImage[0];
        
        if (!profileFile.mimetype.startsWith('image/')) {
          return errorResponse(res, 400, 'Only image files are allowed for profile picture', 'INVALID_IMAGE_TYPE');
        }
        
        if (profileFile.size > 5 * 1024 * 1024) {
          return errorResponse(res, 400, 'Profile image size must be less than 5MB', 'INVALID_IMAGE_SIZE');
        }
        
        try {
          profileFile.mimetype = 'image/jpeg';
          profileImageUrl = await uploadToCloudinary(profileFile, 'profile-images');
        } catch (error) {
          return errorResponse(res, 500, 'Error uploading profile image', 'IMAGE_UPLOAD_ERROR');
        }
      }
    }

    // Generate verification token
    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      role: Role.CANDIDATE, 
      phoneNumber,
      createDate: new Date(),
      image: profileImageUrl,
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
      cv: cvUrl
    });

    await profile.save();

    // Update user with profile reference
    user.profile = profile._id as Schema.Types.ObjectId;
    await user.save();

    // Parse and create social links
    if (socialLinks) {
      try {
        const socialLinksData = typeof socialLinks === 'string' ? JSON.parse(socialLinks) : socialLinks;
        if (Array.isArray(socialLinksData) && socialLinksData.length > 0) {
          const validSocialLinks = socialLinksData.filter(social => social.link && social.link.trim() !== '');
          
          if (validSocialLinks.length > 0) {
            const socialLinksPromises = validSocialLinks.map(async (social) => {
              try {
                const newSocialLink = new SocialLinks({
                  type: social.type,
                  link: social.link.trim()
                });
                return await newSocialLink.save();
              } catch (error) {
                console.warn('Error saving social link:', error);
                return null;
              }
            });
            
            const savedSocialLinks = (await Promise.all(socialLinksPromises)).filter(link => link !== null);
            if (savedSocialLinks.length > 0) {
              profile.socialLinks = savedSocialLinks.map(link => link!._id) as Schema.Types.ObjectId[];
              await profile.save();
            }
          }
        }
      } catch (error) {
        console.warn('Error processing social links:', error);
        // Continue with registration even if social links fail
      }
    }

    // Parse and create education records
    if (education) {
      const educationData = typeof education === 'string' ? JSON.parse(education) : education;
      if (Array.isArray(educationData) && educationData.length > 0) {
        // Filter out empty education entries
        const validEducation = educationData.filter(edu => 
          edu.institution && edu.diploma && edu.startDate && 
          edu.endDate && edu.description && edu.location
        );
        
        if (validEducation.length > 0) {
          const educationPromises = validEducation.map(edu => {
            const newEducation = new Education({
              institution: edu.institution,
              diploma: edu.diploma,
              startDate: edu.startDate,
              endDate: edu.endDate,
              description: edu.description,
              location: edu.location
            });
            return newEducation.save();
          });
          const savedEducation = await Promise.all(educationPromises);
          profile.education = savedEducation.map(edu => edu._id) as Schema.Types.ObjectId[];
          await profile.save();
        }
      }
    }

    // Parse and create experience records
    if (experience) {
      const experienceData = typeof experience === 'string' ? JSON.parse(experience) : experience;
      if (Array.isArray(experienceData) && experienceData.length > 0) {
        // Filter out empty experience entries
        const validExperience = experienceData.filter(exp => 
          exp.position && exp.enterprise && exp.startDate && 
          exp.endDate && exp.description && exp.location
        );

        if (validExperience.length > 0) {
          const experiencePromises = validExperience.map(exp => {
            const newExperience = new Experience({
              position: exp.position,
              enterprise: exp.enterprise,
              startDate: exp.startDate,
              endDate: exp.endDate,
              description: exp.description,
              location: exp.location
            });
            return newExperience.save();
          });
          const savedExperience = await Promise.all(experiencePromises);
          profile.experience = savedExperience.map(exp => exp._id) as Schema.Types.ObjectId[];
          await profile.save();
        }
      }
    }

    // Parse and create skills
    if (skills) {
      const skillsData = typeof skills === 'string' ? JSON.parse(skills) : skills;
      if (Array.isArray(skillsData) && skillsData.length > 0) {
        // Filter out empty skill entries
        const validSkills = skillsData.filter(skill => 
          skill.name && skill.degree
        );

        if (validSkills.length > 0) {
          const skillPromises = validSkills.map(skill => {
            const newSkill = new Skill({
              name: skill.name,
              degree: skill.degree
            });
            return newSkill.save();
          });
          const savedSkills = await Promise.all(skillPromises);
          profile.skills = savedSkills.map(skill => skill._id) as Schema.Types.ObjectId[];
          await profile.save();
        }
      }
    }

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ 
      message: 'Registration successful. Please check your email to verify your account.',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        image: user.image,
        profile: {
          id: profile._id,
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

    // Verify JWT
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET!) as { email: string };
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

    res.status(200).json({ message: "Email verified successfully. You can now log in." });
  } catch (error: unknown) {
    console.error("Verification error:", error);

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(400).json({ message: "Token has expired. Please request a new verification email." });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ message: "Invalid token. Please request a new verification email." });
    } else {
      return res.status(500).json({ message: "An unexpected error occurred. Please try again later." });
    }
  }
};

/////////////////////////////////////////////////////////// Get User By Email //////////////////////////////////////////////////

export const getUserByEmail = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const { email } = req.params;

    if (!email) {
      return errorResponse(res, 400, 'Email is required', 'INVALID_REQUEST');
    }

    const user = await User.findOne({ email })
      .populate({
        path: 'profile',
        populate: [
          { path: 'education', model: 'Education' },
          { path: 'experience', model: 'Experience' },
          { path: 'skills', model: 'Skill' },
          { path: 'socialLinks', model: 'SocialLinks' }
        ]
      })
      .lean();

    if (!user) {
      return errorResponse(res, 404, 'User not found', 'USER_NOT_FOUND');
    }

    res.json({
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        image: user.image,
        profile: user.profile,
        createDate: user.createDate,
        lastLogin: user.lastLogin,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    console.error('Get user by email error:', error);
    return errorResponse(res, 500, 'An internal server error occurred', 'SERVER_ERROR');
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
