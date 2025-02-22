import mongoose, { Document, Schema, Model } from 'mongoose';
import { Socials } from './types';

export interface ISocialLinks extends Document {
  type: Socials;
  link: string;
}

const socialLinksSchema = new Schema<ISocialLinks>({
  type: { type: String, enum: Object.values(Socials), required: true },
  link: { type: String, required: true }
}, {
  timestamps: true
});

const SocialLinks: Model<ISocialLinks> = mongoose.model<ISocialLinks>('SocialLinks', socialLinksSchema);
export default SocialLinks; 