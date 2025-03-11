import { Request, Response } from 'express';
import Profile from '../models/Profile';
import Education, { IEducation } from '../models/Education';
import Experience, { IExperience } from '../models/Experience';
import Skill, { ISkill } from '../models/Skill';
import SocialLinks, { ISocialLinks } from '../models/SocialLinks';
import { Socials } from '../models/types';
import { uploadToCloudinary } from '../utils/cloudinary';
import { Document, Schema } from 'mongoose';
import { User } from '../models/User';

// Extend Express Request type to include user
interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    role?: string;
  };
}

interface CVFile {
  id?: string;
  fileName: string;
  fileUrl: string;
  createdAt: string;
}

// Basic Profile Operations
export const getProfile = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    let profile = await Profile.findOne({ user: userId });

    // If no profile exists, create an empty one
    if (!profile) {
      profile = new Profile({
        user: userId,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        education: [],
        experience: [],
        skills: [],
        socialLinks: []
      });
    }

    // Safely populate references, handling cases where collections don't exist
    try {
      await profile.populate('education');
    } catch (err) {
      profile.education = [];
    }

    try {
      await profile.populate('experience'); 
    } catch (err) {
      profile.experience = [];
    }

    try {
      await profile.populate('skills');
    } catch (err) {
      profile.skills = [];
    }

    try {
      await profile.populate('socialLinks');
    } catch (err) {
      profile.socialLinks = [];
    }

    res.json(profile);

  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { userId, firstName, lastName, email, phoneNumber, address } = req.body;
    
    // First, update the Profile document
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { firstName, lastName, email, phoneNumber, address },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Now, also update the corresponding User document with the same information
    // Use the already imported User model
    
    // Update only the fields that should be synced between User and Profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { 
        firstName, 
        lastName, 
        email,
        phoneNumber
        // Note: We don't update address in User as it's only in the Profile model
      },
      { new: true }
    );

    if (!updatedUser) {
      console.warn(`Updated profile for userId ${userId}, but couldn't find corresponding user to update`);
    } else {
      console.log(`Successfully updated both profile and user for userId ${userId}`);
    }

    // Return the updated profile data
    res.json(profile);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Education Operations
export const getEducation = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const profile = await Profile.findOne({ user: userId }).populate('education');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile.education);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const addEducation = async (req: Request, res: Response) => {
  try {
    const { userId, education } = req.body;
    
    // Find the user's profile
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Create new education entry
    const newEducation = await Education.create({
      institution: education.institution,
      diploma: education.diploma,
      startDate: education.startDate,
      endDate: education.endDate,
      description: education.description,
      location: education.location
    });

    // Add the new education to the profile's education array
    profile.education.push(newEducation._id as unknown as Schema.Types.ObjectId);
    await profile.save();

    // Return the newly created education entry
    const populatedProfile = await Profile.findOne({ user: userId })
      .populate('education')
      .select('education');

    res.json(populatedProfile?.education);
  } catch (error) {
    console.error('Error adding education:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateEducation = async (req: Request, res: Response) => {
  try {
    const { userId, education } = req.body;
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Delete existing education entries
    await Education.deleteMany({ _id: { $in: profile.education } });

    // Create new education entries
    const educationDocs = await Education.create(education);
    const educationIds = Array.isArray(educationDocs) 
      ? educationDocs.map(doc => doc._id)
      : [educationDocs._id];
    
    profile.education = educationIds;
    await profile.save();

    res.json(educationDocs);
  } catch (error) {
    console.error('Error updating education:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteEducation = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    const educationId = req.params.id;
    await Education.findByIdAndDelete(educationId);

    profile.education = profile.education.filter(id => id.toString() !== educationId);
    await profile.save();

    res.json({ message: 'Education entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting education:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Experience Operations
export const getExperience = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const profile = await Profile.findOne({ user: userId }).populate('experience');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile.experience);
  } catch (error) {
    console.error('Error fetching experience:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateExperience = async (req: Request, res: Response) => {
  try {
    const { userId, experience } = req.body;
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Delete existing experience entries
    await Experience.deleteMany({ _id: { $in: profile.experience } });

    // Create new experience entries
    const experienceDocs = await Experience.create(experience);
    
    // Handle both single and multiple experience entries
    const experienceIds = Array.isArray(experienceDocs) 
      ? experienceDocs.map(doc => doc._id)
      : [experienceDocs._id];

    // Update profile with new experience IDs
    await Profile.findOneAndUpdate(
      { user: userId },
      { experience: experienceIds },
      { new: true }
    );

    // Return the newly created experience entries
    res.json(Array.isArray(experienceDocs) ? experienceDocs : [experienceDocs]);
  } catch (error) {
    console.error('Error updating experience:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    profile.experience = profile.experience.filter(exp => exp.toString() !== id);
    await profile.save();

    res.json({ message: 'Experience entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting experience:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Skills Operations
export const getSkills = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const profile = await Profile.findOne({ user: userId }).populate('skills');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile.skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSkills = async (req: Request, res: Response) => {
  try {
    const { userId, skills } = req.body;
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Delete existing skills entries
    await Skill.deleteMany({ _id: { $in: profile.skills } });

    // Create new skills entries
    const skillDocs = await Skill.create(skills);
    const skillIds = Array.isArray(skillDocs) 
      ? skillDocs.map(doc => doc._id)
      : [skillDocs._id];
    
    // Update profile with new skill IDs
    profile.skills = skillIds;
    await profile.save();

    // Return the newly created skills
    const populatedProfile = await Profile.findOne({ user: userId })
      .populate('skills')
      .select('skills');

    res.json(populatedProfile?.skills);
  } catch (error) {
    console.error('Error updating skills:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // First delete the skill document
    const deletedSkill = await Skill.findByIdAndDelete(id);
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    // Then remove the reference from the profile
    profile.skills = profile.skills.filter(skillId => skillId.toString() !== id);
    await profile.save();

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Social Links Operations
export const getSocialLinks = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const profile = await Profile.findOne({ user: userId }).populate('socialLinks');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile.socialLinks);
  } catch (error) {
    console.error('Error fetching social links:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSocialLinks = async (req: Request, res: Response) => {
  try {
    const { userId, socialLinks } = req.body;
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { socialLinks },
      { new: true }
    ).populate('socialLinks');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile.socialLinks);
  } catch (error) {
    console.error('Error updating social links:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteSocialLink = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    profile.socialLinks = profile.socialLinks.filter(link => link.toString() !== id);
    await profile.save();

    res.json({ message: 'Social link deleted successfully' });
  } catch (error) {
    console.error('Error deleting social link:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// CV Operations
export const uploadCV = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const files = req.files as Express.Multer.File[];
    
    if (!files || files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Process files and update profile
    // ... existing file processing logic ...

    res.json({ message: 'CV files uploaded successfully', cvFiles: files });
  } catch (error) {
    console.error('Error uploading CV:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const downloadCV = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { fileUrl } = req.params;
    
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Process download
    // ... existing download logic ...

    res.download(fileUrl);
  } catch (error) {
    console.error('Error downloading CV:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteCV = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Delete CV logic
    // ... existing delete logic ...

    res.json({ message: 'CV deleted successfully' });
  } catch (error) {
    console.error('Error deleting CV:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Profile Image Operations
export const uploadProfileImage = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const file = req.file;
    
    if (!file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    let profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    let user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    profile.profileImage = file.path;
    user.image = profile.profileImage;
    await profile.save();
    await user.save();
    
    console.log(file.path);
    console.log(user.image);
    console.log(profile.profileImage);
    console.log(user.profile);
    console.log(profile);

    res.json({ message: 'Profile image uploaded successfully', imageUrl: file.path });
  } catch (error) {
    console.error('Error uploading profile image:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add the new controller function for updating 2FA settings
export const update2FASettings = async (req: Request, res: Response) => {
  try {
    // Get the enabled value from the request body
    const { enabled } = req.body;
    
    if (typeof enabled !== 'boolean') {
      return res.status(400).json({ 
        success: false, 
        message: 'The enabled parameter must be a boolean value' 
      });
    }
    
    // Get the user ID from the token
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Authentication token is required' 
      });
    }
    
    // Verify the token and get the user ID
    const jwt = require('jsonwebtoken');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    
    // Update the user's 2FA settings
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { is2FAEnabled: enabled },
      { new: true }
    );
    
    if (!updatedUser) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: `Two-factor authentication ${enabled ? 'enabled' : 'disabled'} successfully`,
      is2FAEnabled: updatedUser.is2FAEnabled
    });
    
  } catch (error) {
    console.error('Error updating 2FA settings:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred while updating 2FA settings' 
    });
  }
};

// Add Experience
export const addExperience = async (req: Request, res: Response) => {
  try {
    const { userId, experience } = req.body;
    
    // Find the user's profile
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Create new experience entry
    const newExperience = await Experience.create({
      position: experience.position,
      enterprise: experience.enterprise,
      startDate: experience.startDate,
      endDate: experience.endDate,
      description: experience.description,
      location: experience.location
    });

    // Add the new experience to the profile's experience array
    profile.experience.push(newExperience._id as unknown as Schema.Types.ObjectId);
    await profile.save();

    // Return the newly created experience entry
    const populatedProfile = await Profile.findOne({ user: userId })
      .populate('experience')
      .select('experience');

    res.json(populatedProfile?.experience);
  } catch (error) {
    console.error('Error adding experience:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add Skills
export const addSkills = async (req: Request, res: Response) => {
  try {
    const { userId, skill } = req.body;
    
    // Find the user's profile
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Create new skill entry
    const newSkill = await Skill.create({
      name: skill.name,
      degree: skill.degree
    });

    // Add the new skill to the profile's skills array
    profile.skills.push(newSkill._id as unknown as Schema.Types.ObjectId);
    await profile.save();

    // Return the newly created skill entry
    const populatedProfile = await Profile.findOne({ user: userId })
      .populate('skills')
      .select('skills');

    res.json(populatedProfile?.skills);
  } catch (error) {
    console.error('Error adding skill:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add Social Links
export const addSocialLinks = async (req: Request, res: Response) => {
  try {
    const { userId, socialLink } = req.body;
    
    // Find the user's profile
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Create new social link entry
    const newSocialLink = await SocialLinks.create({
      type: socialLink.type,
      link: socialLink.link
    });

    // Add the new social link to the profile's socialLinks array
    profile.socialLinks.push(newSocialLink._id as unknown as Schema.Types.ObjectId);
    await profile.save();

    // Return the newly created social link entry
    const populatedProfile = await Profile.findOne({ user: userId })
      .populate('socialLinks')
      .select('socialLinks');

    res.json(populatedProfile?.socialLinks);
  } catch (error) {
    console.error('Error adding social link:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 