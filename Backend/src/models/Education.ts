import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Education Document
export interface IEducation extends Document {
  institution: string;
  diploma: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
}

// Define Education Schema
const educationSchema = new Schema<IEducation>({
  institution: { type: String, required: true },
  diploma: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true }
}, {
  timestamps: true
});

// Export the Education model
const Education: Model<IEducation> = mongoose.model<IEducation>('Education', educationSchema);
export default Education; 