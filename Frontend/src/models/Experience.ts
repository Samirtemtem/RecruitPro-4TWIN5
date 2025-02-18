export interface Experience {
  id: number;
  userId?: string;
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ExperienceInput {
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
} 