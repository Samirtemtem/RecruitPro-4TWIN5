import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Profile Document
export interface IProfile extends Document {
  user: Schema.Types.ObjectId;  // Reference to User
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  profileImage: string;
  cv: string;
  education: Schema.Types.ObjectId[];  // References to Education
  experience: Schema.Types.ObjectId[];  // References to Experience
  skills: Schema.Types.ObjectId[];  // References to Skills
  socialLinks: Schema.Types.ObjectId[];  // References to SocialLinks
  profileHistory: {
    timestamp: Date;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    profileImage: string;
    cv: string;
    education: {
      institution: string;
      diploma: string;
      startDate: Date;
      endDate: Date;
      description: string;
      location: string;
    }[];
    experience: {
      position: string;
      enterprise: string;
      startDate: Date;
      endDate: Date;
      description: string;
      location: string;
    }[];
    skills: {
      name: string;
      degree: string;
    }[];
    socialLinks: {
      type: string;
      link: string;
    }[];
  }[];
}

// Define Profile Schema
const profileSchema = new Schema<IProfile>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  profileImage: { type: String },
  cv: { type: String },
  education: [{ type: Schema.Types.ObjectId, ref: 'Education' }],
  experience: [{ type: Schema.Types.ObjectId, ref: 'Experience' }],
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  socialLinks: [{ type: Schema.Types.ObjectId, ref: 'SocialLinks' }],
  profileHistory: [{
    timestamp: { type: Date, default: Date.now },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    profileImage: { type: String },
    cv: { type: String },
    education: [{
      institution: { type: String },
      diploma: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      description: { type: String },
      location: { type: String }
    }],
    experience: [{
      position: { type: String },
      enterprise: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      description: { type: String },
      location: { type: String }
    }],
    skills: [{
      name: { type: String },
      degree: { type: String }
    }],
    socialLinks: [{
      type: { type: String },
      link: { type: String }
    }]
  }]
}, {
  timestamps: true
});

// Export the Profile model
const Profile: Model<IProfile> = mongoose.model<IProfile>('Profile', profileSchema);
export default Profile; 