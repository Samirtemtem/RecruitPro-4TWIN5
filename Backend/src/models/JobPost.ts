import mongoose, { Document, Schema } from 'mongoose';

interface IJobPost extends Document {
  title: string;
  description: string;
  requirements: string[];
  department?: 'ELECTROMECANIQUE' | 'GENIE-CIVIL' | 'TIC';
  status?: 'OPEN' | 'CLOSED' | 'PENDING';
  publishDate?: Date;
  deadline: Date;
  experience: number;
  image?: string;
}

const JobPostSchema: Schema<IJobPost> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    department: { type: String, enum: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC'] },
    status: { type: String, enum: ['OPEN', 'CLOSED', 'PENDING'], default: 'OPEN' },
    publishDate: { type: Date, default: Date.now },
    deadline: { type: Date, required: true },
    experience: { type: Number, required: true },
    image: { type: String, default: 'images/logo.png' }
}, { timestamps: true });

const JobPost = mongoose.model<IJobPost>('JobPost', JobPostSchema);

export default JobPost;