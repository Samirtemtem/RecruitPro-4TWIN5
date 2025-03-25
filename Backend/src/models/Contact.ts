// models/ContactMessage.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IContactMessage extends Document {
  username: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMessageSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactMessage = mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);

export default ContactMessage;