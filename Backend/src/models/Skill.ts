import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Skill Document
export interface ISkill extends Document {
  name: string;
  degree: string;
}

// Define Skill Schema
const skillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  degree: { type: String, required: true }
}, {
  timestamps: true
});

// Create compound index to prevent duplicate skills for the same user
skillSchema.index({ user: 1, name: 1 }, { unique: true });

// Export the Skill model
const Skill: Model<ISkill> = mongoose.model<ISkill>('Skill', skillSchema);
export default Skill; 