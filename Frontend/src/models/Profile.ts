export type SocialPlatform = 'LINKEDIN' | 'GITHUB' | 'PORTFOLIO' | 'OTHER';

export interface SocialLink {
  id: number;
  platform: SocialPlatform;
  link: string;
}

export interface Profile {
  id?: string;  // Made optional as it's not used in initial registration
  userId?: string;  // Made optional as it's not used in initial registration
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  profileImage?: File | string;  // Changed to support both File object and URL string
  cv?: File | string;  // Changed to support both File object and URL string
  socialLinks: SocialLink[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProfileFormData extends Omit<Profile, 'profileImage' | 'cv'> {
  profileImage?: File;
  cv?: File;
} 