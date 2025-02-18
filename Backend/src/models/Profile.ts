import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Profile Document
export interface IProfile extends Document {
  user: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  profileImage?: string;  // URL to stored profile image
  cv?: string;           // URL to stored CV
  socialLinks: Array<{
    platform: 'LINKEDIN' | 'GITHUB' | 'PORTFOLIO' | 'OTHER';
    link: string;
  }>;
}

// Define Profile Schema
const profileSchema = new Schema<IProfile>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  profileImage: { type: String },
  cv: { type: String },
  socialLinks: [{
    platform: {
      type: String,
      enum: ['LINKEDIN', 'GITHUB', 'PORTFOLIO', 'OTHER'],
      required: true
    },
    link: { type: String, required: true }
  }]
}, {
  timestamps: true
});

// Export the Profile model
const Profile: Model<IProfile> = mongoose.model<IProfile>('Profile', profileSchema);
export default Profile; 