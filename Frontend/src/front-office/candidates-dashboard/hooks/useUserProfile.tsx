import { useState, useEffect } from 'react';
import axios from 'axios';
import { Socials } from '../../../models/types';

interface Education {
  _id: string;
  institution: string;
  diploma: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
}

interface Experience {
  _id: string;
  position: string;
  enterprise: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location: string;
}

interface Skill {
  _id: string;
  name: string;
  degree: string;
}

interface SocialLink {
  _id: string;
  type: Socials;
  link?: string;
}

export interface UserProfileData {
  id: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  profileImage?: string;
  cv?: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  socialLinks: SocialLink[];
  createdAt: string;
  updatedAt: string;
  user: string;
}

export const useUserProfile = () => {
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (isoDate: string) => {
    if (!isoDate) return '';
    return new Date(isoDate).toISOString().split('T')[0];
  };

  const fetchUserProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error('No authentication token found');
      }

      const authResponse = await axios.get(`http://localhost:5000/api/auth/user/${token}`);
      const userId = authResponse.data.user.id;

      const { data } = await axios.post(`http://localhost:5000/api/profile/me`, {
        userId
      });

      setUserData({ ...data, id: userId });
      return { ...data, id: userId };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load profile data';
      setError(errorMessage);
      //toast.error(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return {
    userData,
    isLoading,
    error,
    formatDate,
    refreshUserProfile: fetchUserProfile
  };
}; 