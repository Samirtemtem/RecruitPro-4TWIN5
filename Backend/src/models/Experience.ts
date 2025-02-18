import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Experience Document
export interface IExperience extends Document {
  user: Schema.Types.ObjectId;
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

// Define Experience Schema
const experienceSchema = new Schema<IExperience>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  position: { type: String, required: true },
  enterprise: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true }
}, {
  timestamps: true
});

// Export the Experience model
const Experience: Model<IExperience> = mongoose.model<IExperience>('Experience', experienceSchema);
export default Experience; 