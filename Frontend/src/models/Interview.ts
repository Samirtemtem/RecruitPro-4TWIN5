import { InterviewType, InterviewStatus } from './types';

export interface Interview {
  id: string;
  applicationId: string;  // Reference to Application
  interviewerId: string;  // Reference to User (HR/Admin)
  candidateId: string;  // Reference to User (Candidate)
  type: InterviewType;
  status: InterviewStatus;
  scheduledDate: Date;
  duration: number;  // in minutes
  location: string;  // URL for online or physical address
  notes: string;
  feedbackIds: string[];  // References to Feedback
  createdAt: Date;
  updatedAt: Date;
}

// Input type for creating/updating
export interface InterviewInput extends Omit<Interview, 'id' | 'createdAt' | 'updatedAt'> {} 