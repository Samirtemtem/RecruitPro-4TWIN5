import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  type: string;
  picture: string;
}

const UserSchema: Schema<IUser> = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: String, required: true },
  picture: { type: String, required: false },
});

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;