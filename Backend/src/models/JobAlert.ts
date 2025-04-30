import mongoose, { Document, Schema } from 'mongoose';
import { NotificationType } from './types';

interface IJobAlert extends Document {
  userId: string;
  jobId: Schema.Types.ObjectId;  // Reference to JobPost
  criteria: string;
  notifyVia: string[]; // 'email', 'web', etc.
  relevanceScore: number;
  isRead: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobAlertSchema: Schema<IJobAlert> = new Schema({
  userId: { type: String, required: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'JobPost', required: true },
  criteria: { type: String, required: true },
  notifyVia: { type: [String], enum: ['email', 'web'], default: ['web'] },
  relevanceScore: { type: Number, default: 0 },
  isRead: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// Create a compound index to ensure a user doesn't get duplicate alerts for the same job
JobAlertSchema.index({ userId: 1, jobId: 1 }, { unique: true });

const JobAlert = mongoose.model<IJobAlert>('jobAlerts', JobAlertSchema,'jobAlerts');

export default JobAlert; 