import mongoose, { Document, Schema, Model } from 'mongoose';
import { NotificationType } from './types';

export interface INotification extends Document {
  text: string;
  type: NotificationType;
  link: string;
}

const notificationSchema = new Schema<INotification>({
  text: { type: String, required: true },
  type: { type: String, enum: Object.values(NotificationType), required: true },
  link: { type: String, required: true }
}, {
  timestamps: true
});

const Notification: Model<INotification> = mongoose.model<INotification>('Notification', notificationSchema);
export default Notification; 