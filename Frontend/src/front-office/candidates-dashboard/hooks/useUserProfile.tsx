import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Socials } from '../../../models/types';
import { AuthContext, UserProfileData } from '../../../routing-module/AuthContext';

// Re-export UserProfileData for backward compatibility with existing components
export type { UserProfileData };

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

export const useUserProfile = () => {
  const { profileData, isProfileLoaded, fetchProfileData, updateProfileData } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debug log whenever profile data changes
  useEffect(() => {
    console.log("🔄 useUserProfile - Context state:", {
      hasProfileData: !!profileData,
      isProfileLoaded,
      isLoading
    });
  }, [profileData, isProfileLoaded, isLoading]);

  const formatDate = (isoDate: string) => {
    if (!isoDate) return '';
    return new Date(isoDate).toISOString().split('T')[0];
  };

  const refreshUserProfile = async () => {
    try {
      console.log("🔄 useUserProfile - Starting profile refresh");
      setIsLoading(true);
      setError(null);
      
      // Get the user ID and token from sessionStorage to check if they're available
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
      
      console.log("🔑 useUserProfile - Auth credentials:", { 
        hasToken: !!token, 
        hasUserId: !!userId,
        userId
      });
      
      if (!token || !userId) {
        console.log("❌ useUserProfile - Cannot fetch profile: No authentication credentials available");
        setError("Login required to view profile");
        return null;
      }
      
      // Use the fetchProfileData method from AuthContext
      console.log("📡 useUserProfile - Calling fetchProfileData from AuthContext");
      const data = await fetchProfileData();
      console.log("✅ useUserProfile - Profile data fetch complete:", !!data);
      
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load profile data';
      console.error("❌ useUserProfile - Profile fetch error:", errorMessage);
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch profile data if it's not already loaded
  useEffect(() => {
    const hasAuthCredentials = sessionStorage.getItem("token") && sessionStorage.getItem("userId");
    
    console.log("🔍 useUserProfile - Checking if profile should be loaded:", {
      isProfileLoaded,
      isLoading,
      hasAuthCredentials
    });
    
    // Only attempt to fetch profile if authentication credentials exist
    if (!isProfileLoaded && !isLoading && hasAuthCredentials) {
      console.log("🚀 useUserProfile - Initiating profile data fetch");
      refreshUserProfile();
    }
  }, [isProfileLoaded]);

  // Utility function to update profile sections with API and update AuthContext
  const updateProfileSection = async (
    endpoint: string, 
    data: any, 
    section: keyof UserProfileData
  ) => {
    try {
      setIsLoading(true);
      
      if (!profileData?.id) {
        throw new Error('User ID not found');
      }
      
      const response = await fetch(`http://localhost:5000/api/profile/${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          userId: profileData.id
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to update ${section}`);
      }

      const updatedData = await response.json();
      
      // Update the specific section in the context
      updateProfileData({
        [section]: updatedData[section] || updatedData
      });
      
      return { success: true, data: updatedData };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : `Failed to update ${section}`;
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    userData: profileData,
    isLoading: isLoading || !isProfileLoaded,
    error,
    formatDate,
    refreshUserProfile,
    updateProfileData,
    updateProfileSection
  };
}; 