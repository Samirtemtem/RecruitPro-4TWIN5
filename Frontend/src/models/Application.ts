import { ApplicationStatus } from './types';

export interface Application {
  id: string;
  candidateId: string;  // Reference to User (Candidate)
  jobPostId: string;  // Reference to JobPost
  submissionDate: Date;
  status: ApplicationStatus;
  CV: string;
  compatibilityScore: number;
  interviewIds: string[];  // References to Interviews
  feedbackIds: string[];  // References to Feedback
  employmentOfferId?: string;  // Reference to EmploymentOffer
  createdAt: Date;
  updatedAt: Date;
}

// Input type for creating/updating
export interface ApplicationInput extends Omit<Application, 'id' | 'submissionDate' | 'compatibilityScore' | 'createdAt' | 'updatedAt'> {} 