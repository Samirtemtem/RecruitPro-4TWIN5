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
  position: { type: String, required: true },
  enterprise: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true }
}, {
  timestamps: true
});

// Export the Experience model
const Experience: Model<IExperience> = mongoose.model<IExperience>('Experience', experienceSchema);
export default Experience; 