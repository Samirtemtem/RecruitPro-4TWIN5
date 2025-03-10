import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { Role, Department } from './types';

// Base User interface
export interface IUser extends Document {
  id: string; // Explicitly add the id field to the interface

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  phoneNumber: string;
  createDate: Date;
  lastLogin: Date;
  image: string;
  googleId: string;
  linkedinId: string;
  githubId: string;
  is2FAEnabled?: boolean;
  resetToken?:string;
  department?: 'ELECTROMECANIQUE' | 'GENIE-CIVIL' | 'TIC';
  OneTimePassword?: Number,
    profile: Schema.Types.ObjectId;  // Reference to Profile
  applications: Schema.Types.ObjectId[];  // References to Applications
  interviews: Schema.Types.ObjectId[];  // References to Interviews
  jobPosts: Schema.Types.ObjectId[];  // References to JobPosts
  provider?: 'local' | 'google' | 'linkedin' | 'github';
  isVerified: boolean;
  verificationToken?: string;

  // Methods
  comparePassword(password: string): Promise<boolean>;
  login(): Promise<void>;
  logout(): Promise<void>;
  updateProfile(data: Partial<IUser>): Promise<void>;
}

// Admin interface
export interface IAdmin extends IUser {
  createUser(): Promise<void>;
  assignRole(): Promise<void>;
  managePermission(): Promise<void>;
}

// Department Manager interface
export interface IDepartmentManager extends IUser {
  department: Department;
  createJobPosting(): Promise<void>;
  reviewApplications(): Promise<void>;
  conductInterviews(): Promise<void>;
  scheduleInterviews(): Promise<void>;
}

// HR Manager interface
export interface IHRManager extends IUser {
  createJobPosting(): Promise<void>;
  reviewApplications(): Promise<void>;
  conductInterviews(): Promise<void>;
  scheduleInterviews(): Promise<void>;
}

// Candidate interface
export interface ICandidate extends IUser {
  currency: number;
  startJobDate: Date;
  signUp(): Promise<void>;
  consultDocs(): Promise<void>;
  submitApplication(): Promise<void>;
  respondOffer(): Promise<void>;
}

// User Schema
const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true , default: 'SUPERSECRET'},
  role: { type: String, enum: Object.values(Role), default: Role.CANDIDATE },
  phoneNumber: { type: String, required: true, default: '0000000000' },
  createDate: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  department: { type: String, enum: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC'] },
  image: { type: String },
  googleId: { type: String },
  linkedinId: { type: String },
  githubId: { type: String },
  OneTimePassword: { type: Number },
  is2FAEnabled: {type: Boolean},
  resetToken: { type: String },
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  interviews: [{ type: Schema.Types.ObjectId, ref: 'Interview' }],
  jobPosts: [{ type: Schema.Types.ObjectId, ref: 'JobPost' }],
  provider: { type: String, enum: ['local', 'google', 'linkedin', 'github'] },
  isVerified: { type: Boolean, required: true },
  verificationToken: { type: String }
}, {
  timestamps: true,
  discriminatorKey: 'role' // This allows us to use inheritance
});

// Password hashing middleware
userSchema.pre<IUser>('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Methods
userSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.login = async function(): Promise<void> {
  this.lastLogin = new Date();
  await this.save();
};

userSchema.methods.logout = async function(): Promise<void> {
  // Implement logout logic if needed
};

userSchema.methods.updateProfile = async function(data: Partial<IUser>): Promise<void> {
  Object.assign(this, data);
  await this.save();
};

// Create the base User model
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

// Create discriminator models for different user types
const Admin = User.discriminator<IAdmin>('Admin', new Schema({
  // Admin specific fields if any
}));

const DepartmentManager = User.discriminator<IDepartmentManager>('DepartmentManager', new Schema({
  department: { type: String, enum: Object.values(Department), required: true }
}));

const HRManager = User.discriminator<IHRManager>('HRManager', new Schema({
  // HR Manager specific fields if any
}));

const Candidate = User.discriminator<ICandidate>('Candidate', new Schema({
  currency: { type: Number, required: true },
  startJobDate: { type: Date }
}));
// Custom toJSON method to include 'id' as a plain field
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();  // Adding 'id' as a string (no underscore)
    delete ret._id;               // Optionally remove the _id field
    return ret;
  }
});
export { User, Admin, DepartmentManager, HRManager, Candidate };
