import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

// Interface for User Document
export interface IUser extends Document {
  id: string; // Explicitly add the id field to the interface
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  isVerified: boolean;
  verificationToken?: string;
  googleId?: string;
  address?: string;
  phoneNumber?: string;
  role: 'DEPARTMENT-MANAGER' | 'HR-MANAGER' | 'EMPLOYEE';
  privilege: 'JOB-POSTING' | 'REGULAR';
  department: 'ELECTROMECANIQUE' | 'GENIE-CIVIL' | 'TIC';
  creationDate: Date;
  lastLogged?: Date ;
  linkedinId?: string;
  provider: 'local' | 'google' | 'linkedin';
 
  comparePassword: (password: string) => Promise<boolean>;
}


// Define User Schema
const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  image: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  googleId: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
  role: { 
    type: String, 
    enum: ['DEPARTMENT-MANAGER', 'HR-MANAGER', 'EMPLOYEE', 'CANDIDATE', 'ADMIN']
    , required: true 
  },
  privilege: { 
    type: String, 
    enum: ['JOB-POSTING', 'REGULAR']
    //, required: true 
  },
  department: { 
    type: String, 
    enum: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC']
    //, required: true 
  },
  creationDate: { type: Date, default: Date.now },
  lastLogged: { type: Date, default: null },
  linkedinId: { type: String },
  provider: { 
    type: String, 
    enum: ['local', 'google', 'linkedin'], 
    required: true 
  }
}, { timestamps: true });

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