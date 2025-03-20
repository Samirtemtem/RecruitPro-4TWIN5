import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IFeedback extends Document {
  interview: Schema.Types.ObjectId;  // Reference to Interview
  application: Schema.Types.ObjectId;  // Reference to Application
  evaluator: Schema.Types.ObjectId;  // Reference to User (HR/Admin)
  candidate: Schema.Types.ObjectId;  // Reference to User (Candidate)
  rating: number;  // 1-5 scale
  comments: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string;
  submissionDate: Date;

  // Methods
  updateFeedback(rating: number, comments: string): Promise<void>;
}

const feedbackSchema = new Schema<IFeedback>({
  interview: { type: Schema.Types.ObjectId, ref: 'Interview', required: true },
  application: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
  evaluator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comments: { type: String, required: true },
  strengths: [{ type: String }],
  weaknesses: [{ type: String }],
  recommendations: { type: String },
  submissionDate: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Feedback: Model<IFeedback> = mongoose.model<IFeedback>('Feedback', feedbackSchema);
export default Feedback; 