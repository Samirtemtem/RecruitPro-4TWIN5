import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';

// Import the UserProfileData interface from useUserProfile
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
  type: string;
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

// Add user interface to store the complete user object
interface User {
  id: string;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber: string;
  is2FAEnabled: boolean;
  image?: string;
  createDate?: Date;
  lastLogin?: Date;
  isVerified?: boolean;
}

interface AuthContextType {
  token: string | null;
  role: string | null;
  userId: string | null;
  user: User | null; // Add the complete user object
  profileData: UserProfileData | null;
  isProfileLoaded: boolean;
  setToken: (token: string | null) => void;
  setRole: (role: string | null) => void;
  setUserId: (userId: string | null) => void;
  setUser: (user: User | null) => void; // Add setter for user object
  logout: () => void;
  fetchProfileData: () => Promise<UserProfileData | null>;
  setProfileData: (data: UserProfileData | null) => void;
  updateProfileData: (updatedData: Partial<UserProfileData>) => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  role: null,
  userId: null,
  user: null, // Add user property
  profileData: null,
  isProfileLoaded: false,
  setToken: () => {},
  setRole: () => {},
  setUserId: () => {},
  setUser: () => {}, // Add setUser function
  logout: () => {},
  fetchProfileData: async () => null,
  setProfileData: () => {},
  updateProfileData: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [role, setRole] = useState<string | null>(localStorage.getItem("role"));
  const [userId, setUserId] = useState<string | null>(localStorage.getItem("userId"));
  const [user, setUser] = useState<User | null>(null); // Add user state
  const [profileData, setProfileData] = useState<UserProfileData | null>(null);
  const [isProfileLoaded, setIsProfileLoaded] = useState<boolean>(false);

  // Debug log for auth state changes
  useEffect(() => {
    console.log("🔐 AuthContext - Auth state:", { 
      hasToken: !!token,
      role,
      hasUserId: !!userId,
      hasUser: !!user, // Log user state
      isProfileLoaded,
      hasProfileData: !!profileData
    });
  }, [token, role, userId, user, isProfileLoaded, profileData]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedUserId = localStorage.getItem("userId");
    const storedUser = localStorage.getItem("user"); // Get stored user
    
    console.log("📱 AuthContext - Initializing from localStorage:", {
      hasToken: !!storedToken,
      hasRole: !!storedRole,
      hasUserId: !!storedUserId,
      hasUser: !!storedUser
    });
    
    setToken(storedToken);
    setRole(storedRole);
    setUserId(storedUserId);

    // Try to load user data from localStorage if it exists
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        localStorage.removeItem("user");
      }
    }
    
    // Try to load profile data from localStorage if it exists
    const storedProfileData = localStorage.getItem("profileData");
    if (storedProfileData) {
      try {
        console.log("📂 AuthContext - Found profile data in localStorage");
        const parsedData = JSON.parse(storedProfileData);
        setProfileData(parsedData);
        setIsProfileLoaded(true);
        console.log("✅ AuthContext - Successfully loaded profile from localStorage");
      } catch (error) {
        console.error("❌ AuthContext - Failed to parse stored profile data:", error);
        localStorage.removeItem("profileData");
      }
    } else {
      console.log("ℹ️ AuthContext - No profile data found in localStorage");
    }
  }, []);

  const handleSetToken = (newToken: string | null) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  const handleSetRole = (newRole: string | null) => {
    setRole(newRole);
    if (newRole) {
      localStorage.setItem("role", newRole);
    } else {
      localStorage.removeItem("role");
    }
  };

  const handleSetUserId = (newUserId: string | null) => {
    setUserId(newUserId);
    if (newUserId) {
      localStorage.setItem("userId", newUserId);
    } else {
      localStorage.removeItem("userId");
    }
  };

  // Add a handler for setting the user object
  const handleSetUser = (newUser: User | null) => {
    setUser(newUser);
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  const fetchProfileData = async (): Promise<UserProfileData | null> => {
    try {
      console.log("🔄 AuthContext - fetchProfileData started");
      setIsProfileLoaded(false);
      
      // Check if we have userId and token - if not, don't throw an error but return null gracefully
      if (!userId || !token) {
        console.log("⚠️ AuthContext - Profile fetch skipped: No user ID or token available yet");
        console.log("Current userId in context:", userId);
        console.log("localStorage userId:", localStorage.getItem("userId"));
        setIsProfileLoaded(true); // Still mark as loaded to prevent continuous retries
        return null;
      }

      console.log("📡 AuthContext - Fetching profile data for user ID:", userId);
      const { data } = await axios.post(`http://localhost:5000/api/profile/me`, {
        userId
      });

      console.log("✅ AuthContext - Profile data received from API:", !!data);
      console.log("Raw profile data:", data);
      
      // Ensure we have the proper ID format
      const profileWithId = { 
        ...data, 
        id: userId,
        // Ensure _id exists for components that expect it
        _id: data._id || userId
      };
      
      setProfileData(profileWithId);
      setIsProfileLoaded(true);
      
      // Store in session storage for persistence
      localStorage.setItem("profileData", JSON.stringify(profileWithId));
      console.log("💾 AuthContext - Profile data saved to localStorage");
      
      return profileWithId;
    } catch (error) {
      console.error("❌ AuthContext - Failed to fetch profile data:", error);
      setIsProfileLoaded(true); // Set to true even on error to indicate fetch attempt was completed
      return null;
    }
  };

  const updateProfileData = (updatedData: Partial<UserProfileData>) => {
    if (!profileData) return;
    
    const newProfileData = { ...profileData, ...updatedData };
    setProfileData(newProfileData);
    localStorage.setItem("profileData", JSON.stringify(newProfileData));
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    setUserId(null);
    setUser(null); // Clear user data
    setProfileData(null);
    setIsProfileLoaded(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("user"); // Remove user from localStorage
    localStorage.removeItem("profileData");
  };

  return (
    <AuthContext.Provider 
      value={{ 
        token, 
        role, 
        userId,
        user, // Provide user in context
        profileData,
        isProfileLoaded,
        setToken: handleSetToken, 
        setRole: handleSetRole,
        setUserId: handleSetUserId,
        setUser: handleSetUser, // Provide setUser function
        logout,
        fetchProfileData,
        setProfileData,
        updateProfileData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export default AuthProvider;
