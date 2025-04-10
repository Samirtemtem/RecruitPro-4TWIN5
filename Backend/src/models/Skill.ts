import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Skill Document
export interface ISkill extends Document {
  name: string;
  degree: string;
}

// Define Skill Schema
const skillSchema = new Schema<ISkill>({
  name: { type: String },
  degree: { type: String }
}, {
  timestamps: true
});
// Export the Skill model
const Skill: Model<ISkill> = mongoose.model<ISkill>('Skill', skillSchema);
export default Skill; 