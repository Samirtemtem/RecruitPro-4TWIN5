export interface Education {
  id: number;
  userId?: string;
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EducationInput {
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
} 