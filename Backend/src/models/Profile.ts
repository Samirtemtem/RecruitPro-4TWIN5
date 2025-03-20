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
  profileHistory: Schema.Types.ObjectId[];  // References to ProfileHistory
}

// Define Profile Schema
const profileSchema = new Schema<IProfile>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: false },
  profileImage: { type: String },
  cv: { type: String },
  education: [{ type: Schema.Types.ObjectId, ref: 'Education' }],
  experience: [{ type: Schema.Types.ObjectId, ref: 'Experience' }],
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  socialLinks: [{ type: Schema.Types.ObjectId, ref: 'SocialLink' }],
  profileHistory: [{ type: Schema.Types.ObjectId, ref: 'ProfileHistory' }]
}, {
  timestamps: true
});

// Export the Profile model
const Profile: Model<IProfile> = mongoose.model<IProfile>('Profile', profileSchema);
export default Profile; 