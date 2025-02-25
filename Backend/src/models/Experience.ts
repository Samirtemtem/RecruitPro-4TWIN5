import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Experience Document
export interface IExperience extends Document {
  position: string;
  enterprise: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
}

// Define Experience Schema
const experienceSchema = new Schema<IExperience>({
  position: { type: String },
  enterprise: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String },
  location: { type: String }
}, {
  timestamps: true
});

// Export the Experience model
const Experience: Model<IExperience> = mongoose.model<IExperience>('Experience', experienceSchema);
export default Experience; 