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
  institution: { type: String },
  diploma: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String },
  location: { type: String }
}, {
  timestamps: true
});

// Export the Education model
const Education: Model<IEducation> = mongoose.model<IEducation>('Education', educationSchema);
export default Education; 