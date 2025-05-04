import mongoose, { Document, Schema } from 'mongoose';

interface IJobPost extends Document {
  title: string;
  description: string;
  requirements: string[];
  department?: 'ELECTROMECANIQUE' | 'GENIE-CIVIL' | 'TIC' | 'OTHER';
  status?: 'OPEN' | 'CLOSED' | 'PENDING';
  publishDate?: Date;
  deadline: Date;
  experience: number;
  image?: string;
  applications: Schema.Types.ObjectId[];  // References to Applications
  interviews: Schema.Types.ObjectId[];  // References to Interviews
  employmentOffers: Schema.Types.ObjectId[];  // References to EmploymentOffers
  typeContrat?: 'PERMANENT' | 'VACATAIRE'; // Added optional typeContrat
}

const JobPostSchema: Schema<IJobPost> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    department: { type: String, enum: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC', 'OTHER'] },
    status: { type: String, enum: ['OPEN', 'CLOSED', 'PENDING'], default: 'OPEN' },
    publishDate: { type: Date, default: Date.now },
    deadline: { type: Date, required: true },
    experience: { type: Number, required: true },
    image: { type: String, default: 'images/logo.png' },
    typeContrat: { type: String, enum: ['PERMANENT', 'VACATAIRE'], default: 'PERMANENT' } // Added typeContrat with default
}, { timestamps: true });

const JobPost = mongoose.model<IJobPost>('JobPost', JobPostSchema);

export default JobPost;