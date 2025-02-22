import { Socials } from './types';

export interface SocialLinks {
  id: string;
  type: Socials;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

// Input type for creating/updating
export interface SocialLinksInput extends Omit<SocialLinks, 'id' | 'createdAt' | 'updatedAt'> {} 