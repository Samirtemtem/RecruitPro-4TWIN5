import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Education Document
export interface IEducation extends Document {
  user: Schema.Types.ObjectId;
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

// Define Education Schema
const educationSchema = new Schema<IEducation>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  institution: { type: String, required: true },
  diploma: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true }
}, {
  timestamps: true
});

// Export the Education model
const Education: Model<IEducation> = mongoose.model<IEducation>('Education', educationSchema);
export default Education; 