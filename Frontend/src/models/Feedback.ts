export interface Feedback {
  id: string;
  interviewId: string;  // Reference to Interview
  applicationId: string;  // Reference to Application
  evaluatorId: string;  // Reference to User (HR/Admin)
  candidateId: string;  // Reference to User (Candidate)
  rating: number;  // 1-5 scale
  comments: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string;
  submissionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Input type for creating/updating
export interface FeedbackInput extends Omit<Feedback, 'id' | 'submissionDate' | 'createdAt' | 'updatedAt'> {} 