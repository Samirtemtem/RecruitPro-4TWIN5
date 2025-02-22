import { OfferStatus } from './types';

export interface EmploymentOffer {
  id: string;
  applicationId: string;  // Reference to Application
  jobPostId: string;  // Reference to JobPost
  candidateId: string;  // Reference to User (Candidate)
  hrId: string;  // Reference to User (HR)
  status: OfferStatus;
  salary: number;
  startDate: Date;
  expiryDate: Date;
  benefits: string[];
  additionalNotes: string;
  responseDate?: Date;
  rejectionReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Input type for creating/updating
export interface EmploymentOfferInput extends Omit<EmploymentOffer, 'id' | 'responseDate' | 'rejectionReason' | 'createdAt' | 'updatedAt'> {} 