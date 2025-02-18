export interface User {
  id: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  isVerified: boolean;
  verificationToken?: string;
  googleId?: string;
  linkedinId?: string;
  provider: 'local' | 'google' | 'linkedin';
  role: 'admin' | 'user';
  cvLink?: string;
}

export type UserRole = 'admin' | 'user';
export type AuthProvider = 'local' | 'google' | 'linkedin'; 