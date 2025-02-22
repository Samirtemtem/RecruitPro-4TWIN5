import mongoose, { Document, Schema, Model } from 'mongoose';
import { Department, JobPostingStatus } from './types';

export interface IJobPost extends Document {
  creator: Schema.Types.ObjectId;  // Reference to User (HR or Department Manager)
  title: string;
  description: string;
  requirements: string[];
  department: Department;
  status: JobPostingStatus;
  publishDate: Date;
  deadline: Date;
  applications: Schema.Types.ObjectId[];  // References to Applications
  interviews: Schema.Types.ObjectId[];  // References to Interviews
  employmentOffers: Schema.Types.ObjectId[];  // References to EmploymentOffers

  // Methods
  publish(): Promise<void>;
  unpublish(): Promise<void>;
  modify(data: Partial<IJobPost>): Promise<void>;
}

const jobPostSchema = new Schema<IJobPost>({
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [{ type: String }],
  department: { type: String, enum: Object.values(Department), required: true },
  status: { type: String, enum: Object.values(JobPostingStatus), default: JobPostingStatus.CLOSED },
  publishDate: { type: Date },
  deadline: { type: Date, required: true },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  interviews: [{ type: Schema.Types.ObjectId, ref: 'Interview' }],
  employmentOffers: [{ type: Schema.Types.ObjectId, ref: 'EmploymentOffer' }]
}, {
  timestamps: true
});

// Methods
jobPostSchema.methods.publish = async function(): Promise<void> {
  this.status = JobPostingStatus.PUBLISHED;
  this.publishDate = new Date();
  await this.save();
};

jobPostSchema.methods.unpublish = async function(): Promise<void> {
  this.status = JobPostingStatus.CLOSED;
  await this.save();
};

jobPostSchema.methods.modify = async function(data: Partial<IJobPost>): Promise<void> {
  Object.assign(this, data);
  await this.save();
};

const JobPost: Model<IJobPost> = mongoose.model<IJobPost>('JobPost', jobPostSchema);
export default JobPost; 