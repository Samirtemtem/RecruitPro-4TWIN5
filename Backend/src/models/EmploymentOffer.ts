import mongoose, { Document, Schema, Model } from 'mongoose';
import { OfferStatus } from './types';

export interface IEmploymentOffer extends Document {
  application: Schema.Types.ObjectId;  // Reference to Application
  jobPost: Schema.Types.ObjectId;  // Reference to JobPost
  candidate: Schema.Types.ObjectId;  // Reference to User (Candidate)
  hr: Schema.Types.ObjectId;  // Reference to User (HR)
  status: OfferStatus;
  salary: number;
  startDate: Date;
  expiryDate: Date;
  benefits: string[];
  additionalNotes: string;
  responseDate?: Date;
  rejectionReason?: string;

  // Methods
  accept(): Promise<void>;
  reject(reason: string): Promise<void>;
  updateOffer(updates: Partial<IEmploymentOffer>): Promise<void>;
}

const employmentOfferSchema = new Schema<IEmploymentOffer>({
  application: { type: Schema.Types.ObjectId, ref: 'Application', required: true },
  jobPost: { type: Schema.Types.ObjectId, ref: 'JobPost', required: true },
  candidate: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  hr: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: Object.values(OfferStatus), default: OfferStatus.PENDING },
  salary: { type: Number, required: true },
  startDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  benefits: [{ type: String }],
  additionalNotes: { type: String },
  responseDate: { type: Date },
  rejectionReason: { type: String }
}, {
  timestamps: true
});

// Methods
employmentOfferSchema.methods.accept = async function(): Promise<void> {
  this.status = OfferStatus.ACCEPTED;
  await this.save();
};

employmentOfferSchema.methods.reject = async function(reason: string): Promise<void> {
  this.status = OfferStatus.REJECTED;
  this.rejectionReason = reason;
  await this.save();
};

employmentOfferSchema.methods.updateOffer = async function(updates: Partial<IEmploymentOffer>): Promise<void> {
  Object.assign(this, updates);
  await this.save();
};

const EmploymentOffer: Model<IEmploymentOffer> = mongoose.model<IEmploymentOffer>('EmploymentOffer', employmentOfferSchema);
export default EmploymentOffer; 