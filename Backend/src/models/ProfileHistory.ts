import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IProfileHistory extends Document {
  createdAt: Date;
  CV: string;
  extractedData: string;
}

const profileHistorySchema = new Schema<IProfileHistory>({
  createdAt: { type: Date, default: Date.now },
  CV: { type: String, required: true },
  extractedData: { type: String, required: true }
}, {
  timestamps: true
});

const ProfileHistory: Model<IProfileHistory> = mongoose.model<IProfileHistory>('ProfileHistory', profileHistorySchema);
export default ProfileHistory; 