import mongoose, { Document, Schema, Model } from 'mongoose';
import { InterviewType, InterviewStatus } from './types';

export interface IInterview extends Document {
  application: Schema.Types.ObjectId;  // Reference to Application
  departmentManager: Schema.Types.ObjectId;  // Reference to User (Department Manager)
  teamLeads: Schema.Types.ObjectId[];  // References to Users (Team Leads)
  candidate: Schema.Types.ObjectId;  // Reference to User (Candidate)
  type: InterviewType;
  status: InterviewStatus;
  scheduledDate: Date;
  scheduledTime: string;  // Time in format HH:MM
  duration: number;  // in minutes
  location: string;  // URL for online or physical address
  meetUrl: string;   // Video conference URL
  googleCalendarEventId: string;  // Google Calendar event ID
  notes: string;
  feedback: Schema.Types.ObjectId[];  // References to Feedback

  // Methods
  reschedule(newDate: Date): Promise<void>;
  updateStatus(newStatus: InterviewStatus): Promise<void>;
}

const interviewSchema = new Schema<IInterview>({
  application: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
  departmentManager: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  teamLeads: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: Object.values(InterviewType), default: InterviewType.ONLINE },
  status: { type: String, enum: Object.values(InterviewStatus), default: InterviewStatus.SCHEDULED },
  scheduledDate: { type: Date, required: true },
  scheduledTime: { type: String, required: true }, // Time in format HH:MM
  duration: { type: Number, default: 60 },  // Default 60 minutes
  location: { type: String, default: 'Remote' },
  meetUrl: { type: String },  // Video conference URL
  googleCalendarEventId: { type: String },  // Google Calendar event ID
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