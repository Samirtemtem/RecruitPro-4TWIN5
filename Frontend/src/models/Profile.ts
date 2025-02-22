import { Socials, NotificationType } from './types';

export type SocialPlatform = 'LINKEDIN' | 'GITHUB' | 'PORTFOLIO' | 'OTHER';

export interface SocialLink {
  id: string;
  type: Socials;
  link: string;
}

export interface Profile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  image: string | null;
  department: 'ELECTROMECANIQUE' | 'GENIE-CIVIL' | 'TIC' | 'REGULAR';
  role: 'DEPARTMENT-MANAGER' | 'HR-MANAGER' | 'EMPLOYEE';
  privilege: 'JOB-POSTING' | 'REGULAR';
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfileFormData extends Omit<Profile, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'image'> {
  image?: File | string | null;
}

export interface SocialLinks {
  id: string;
  type: Socials;
  link: string;
}

export interface ProfileHistory {
  id: string;
  createdAt: Date;
  CV: string;
  extractedData: string;
}

export interface Education {
  id: string;
  institution: string;
  diploma: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
}

export interface Experience {
  id: string;
  position: string;
  enterprise: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
}

export interface Skill {
  id: string;
  name: string;
  degree: string;
}

export interface Notification {
  id: string;
  text: string;
  type: NotificationType;
  link: string;
}

// Input types for creating/updating
export interface ProfileHistoryInput extends Omit<ProfileHistory, 'id' | 'createdAt'> {}
export interface EducationInput extends Omit<Education, 'id'> {}
export interface ExperienceInput extends Omit<Experience, 'id'> {}
export interface SkillInput extends Omit<Skill, 'id'> {}
export interface SocialLinkInput extends Omit<SocialLink, 'id'> {}
export interface NotificationInput extends Omit<Notification, 'id'> {} 