import { Request, Response } from 'express';
import Profile, { IProfile } from '../models/Profile';
import Education, { IEducation } from '../models/Education';
import Experience, { IExperience } from '../models/Experience';
import Skill, { ISkill } from '../models/Skill';
import SocialLinks, { ISocialLinks } from '../models/SocialLinks';
import { Socials } from '../models/types';
import { uploadToCloudinary } from '../utils/cloudinary';
import { Document } from 'mongoose';
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
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { firstName, lastName, email, phoneNumber, address },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

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
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { experience },
      { new: true }
    ).populate('experience');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile.experience);
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
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { skills },
      { new: true }
    ).populate('skills');

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile.skills);
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

    profile.skills = profile.skills.filter(skill => skill.toString() !== id);
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