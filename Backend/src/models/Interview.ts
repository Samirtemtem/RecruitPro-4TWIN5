import mongoose, { Document, Schema, Model } from 'mongoose';
import { InterviewType, InterviewStatus } from './types';

export interface IInterview extends Document {
  application: Schema.Types.ObjectId;  // Reference to Application
  interviewer: Schema.Types.ObjectId;  // Reference to User (HR/Admin)
  candidate: Schema.Types.ObjectId;  // Reference to User (Candidate)
  type: InterviewType;
  status: InterviewStatus;
  scheduledDate: Date;
  duration: number;  // in minutes
  location: string;  // URL for online or physical address
  notes: string;
  feedback: Schema.Types.ObjectId[];  // References to Feedback

  // Methods
  reschedule(newDate: Date): Promise<void>;
  updateStatus(newStatus: InterviewStatus): Promise<void>;
}

const interviewSchema = new Schema<IInterview>({
  application: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
  interviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: Object.values(InterviewType), required: true },
  status: { type: String, enum: Object.values(InterviewStatus), default: InterviewStatus.SCHEDULED },
  scheduledDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  location: { type: String, required: true },
  notes: { type: String },
  feedback: [{ type: Schema.Types.ObjectId, ref: 'Feedback' }]
}, {
  timestamps: true
});

// Methods
interviewSchema.methods.reschedule = async function(newDate: Date): Promise<void> {
  this.scheduledDate = newDate;
  this.status = InterviewStatus.SCHEDULED;
  await this.save();
};

interviewSchema.methods.updateStatus = async function(newStatus: InterviewStatus): Promise<void> {
  this.status = newStatus;
  await this.save();
};

const Interview: Model<IInterview> = mongoose.model<IInterview>('Interview', interviewSchema);
export default Interview; 