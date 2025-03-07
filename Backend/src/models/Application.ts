import mongoose, { Document, Schema, Model } from 'mongoose';
import { ApplicationStatus } from './types';

export interface IApplication extends Document {
  candidate: Schema.Types.ObjectId;  // Reference to User (Candidate)
  jobPost: Schema.Types.ObjectId;  // Reference to JobPost
  submissionDate: Date;
  status: ApplicationStatus;
  CV: string; // URL to stored CV document
  compatibilityScore: number;
  interviews: Schema.Types.ObjectId[];  // References to Interviews
  feedback: Schema.Types.ObjectId[];  // References to Feedback
  employmentOffer: Schema.Types.ObjectId;  // Reference to EmploymentOffer

  // Methods
  evaluateApplication(): Promise<void>;
  updateStatus(newStatus: ApplicationStatus): Promise<void>;
}

const applicationSchema = new Schema<IApplication>({
  candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  jobPost: { type: Schema.Types.ObjectId, ref: 'JobPost', required: true },
  submissionDate: { type: Date, default: Date.now },
  status: { type: String, enum: Object.values(ApplicationStatus), default: ApplicationStatus.SUBMITTED },
  CV: { type: String, required: true },
  compatibilityScore: { type: Number, default: 0 },
  interviews: [{ type: Schema.Types.ObjectId, ref: 'Interview' }],
  feedback: [{ type: Schema.Types.ObjectId, ref: 'Feedback' }],
  employmentOffer: { type: Schema.Types.ObjectId, ref: 'EmploymentOffer' }
}, {
  timestamps: true
});

// Methods
applicationSchema.methods.evaluateApplication = async function(): Promise<void> {
  // Implement evaluation logic
  // This could include AI/ML scoring, keyword matching, etc.
  await this.save();
};

applicationSchema.methods.updateStatus = async function(newStatus: ApplicationStatus): Promise<void> {
  this.status = newStatus;
  await this.save();
};

const Application: Model<IApplication> = mongoose.model<IApplication>('Application', applicationSchema);
export default Application; 