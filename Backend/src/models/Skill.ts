import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for Skill Document
export interface ISkill extends Document {
  user: Schema.Types.ObjectId;
  name: string;
  degree: 'NOVICE' | 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
}

// Define Skill Schema
const skillSchema = new Schema<ISkill>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  degree: { 
    type: String,
    enum: ['NOVICE', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'],
    required: true
  }
}, {
  timestamps: true
});

// Create compound index to prevent duplicate skills for the same user
skillSchema.index({ user: 1, name: 1 }, { unique: true });

// Export the Skill model
const Skill: Model<ISkill> = mongoose.model<ISkill>('Skill', skillSchema);
export default Skill; 