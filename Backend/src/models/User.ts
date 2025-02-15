import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

// Interface for User Document
export interface IUser extends Document {
  id: string; // Explicitly add the id field to the interface
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  isVerified: boolean;
  verificationToken?: string;
  googleId?: string;
  linkedinId?: string;
  provider: 'local' | 'google' | 'linkedin';
  role: 'admin' | 'user';
  comparePassword: (password: string) => Promise<boolean>;
}

// Define User Schema
const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String},
  firstName: { type: String },
  lastName: { type: String },
  picture: { type: String },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  googleId: { type: String },
  linkedinId: { type: String },
  provider: { type: String, enum: ['local', 'google', 'linkedin'] },
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

// Password Hashing Middleware
userSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password') && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Add a method to compare passwords
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  if (!this.password) return false;
  return bcrypt.compare(password, this.password);
};

// Custom toJSON method to include 'id' as a plain field
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();  // Adding 'id' as a string (no underscore)
    delete ret._id;               // Optionally remove the _id field
    return ret;
  }
});

// Export the User model
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
