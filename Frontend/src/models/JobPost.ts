import { Department, JobPostingStatus, ApplicationStatus, InterviewType, InterviewStatus, OfferStatus } from './types';

export interface JobPost {
  id: string;
  creatorId: string;  // Reference to User (HR or Department Manager)
  title: string;
  description: string;
  requirements: string[];
  department: Department;
  status: JobPostingStatus;
  publishDate: Date;
  deadline: Date;
  applicationIds: string[];  // References to Applications
  interviewIds: string[];  // References to Interviews
  employmentOfferIds: string[];  // References to EmploymentOffers
  createdAt: Date;
  updatedAt: Date;

  // Methods
  publish(): Promise<void>;
  unpublish(): Promise<void>;
  modify(): Promise<void>;
}

export interface Application {
  id: string;
  submissionDate: Date;
  status: ApplicationStatus;
  CV: string;
  compatibilityScore: number;

  // Methods
  evaluateApplication(): Promise<void>;
  updateStatus(): Promise<void>;
}

export interface Interview {
  id: string;
  type: InterviewType;
  date: Date;
  status: InterviewStatus;

  // Methods
  schedule(): Promise<void>;
  provideFeedback(): Promise<void>;
  updateStatus(): Promise<void>;
}

export interface EmploymentOffer {
  id: string;
  salary: number;
  benefits: string;
  contractType: string;
  status: OfferStatus;
  validUntil: Date;

  // Methods
  send(): Promise<void>;
  finalize(): Promise<void>;
}

export interface Feedback {
  id: string;
  description: string;
  date: Date;
}

export interface Candidate {
  id: string;
  currentCV: Document;
  lastUpdateTime: Date;

  // Methods
  signUp(): Promise<void>;
  consultJobOffers(): Promise<void>;
  submitApplication(): Promise<void>;
  respondOffer(): Promise<void>;
}

export interface matchingAnalysis {
  // This appears to be a utility class, implementation details not shown in diagram
  // You might want to add specific matching algorithm methods here
}

// Input type for creating/updating
export interface JobPostInput extends Omit<JobPost, 'id' | 'publishDate' | 'createdAt' | 'updatedAt'> {}
export interface ApplicationInput extends Omit<Application, 'id' | 'submissionDate' | 'compatibilityScore'> {}
export interface InterviewInput extends Omit<Interview, 'id'> {}
export interface FeedbackInput extends Omit<Feedback, 'id'> {}
export interface EmploymentOfferInput extends Omit<EmploymentOffer, 'id'> {} 