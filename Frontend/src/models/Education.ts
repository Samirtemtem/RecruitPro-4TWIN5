export interface Education {
  id: string;
  userId: string;
  institution: string;
  diploma: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EducationInput extends Omit<Education, 'id' | 'userId' | 'createdAt' | 'updatedAt'> {} 