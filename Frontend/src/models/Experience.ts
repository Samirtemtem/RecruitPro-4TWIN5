export interface Experience {
  id: string;
  userId: string;
  position: string;
  enterprise: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExperienceInput extends Omit<Experience, 'id' | 'userId' | 'createdAt' | 'updatedAt'> {} 