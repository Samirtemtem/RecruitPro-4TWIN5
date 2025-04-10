import React, { useEffect } from "react";
import { useUserProfile, UserProfileData } from "../hooks/useUserProfile";
import { LogoUpload } from "./LogoUpload";
import { FormInfoBox } from "./FormInfoBox";
import { SocialNetworkBox } from "./SocialNetworkBox";
import { ContactInfoBox } from "./ContactInfoBox";

const MyProfile: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();

  // Add console logs to help debug profile data
  useEffect(() => {
    console.log("🔍 MyProfile - Profile data state:", {
      isAvailable: !!userData,
      isLoading,
      hasError: !!error,
      error
    });
    
    if (userData) {
      console.log("📋 MyProfile - UserProfileData:", {
        id: userData.id,
        _id: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        // Log other properties without overwhelming the console
        hasEducation: userData.education?.length > 0,
        educationCount: userData.education?.length || 0,
        hasExperience: userData.experience?.length > 0,
        experienceCount: userData.experience?.length || 0,
        hasSkills: userData.skills?.length > 0,
        skillsCount: userData.skills?.length || 0,
        hasSocialLinks: userData.socialLinks?.length > 0
      });
    }
  }, [userData, isLoading, error]);

  return (
    <div className="widget-content">
      <LogoUpload userData={userData} />
      {/* End logo upload component */}

      <FormInfoBox userData={userData} />
      {/* End form info box */}


      <SocialNetworkBox  />
      {/* End social network box */}
    </div>
  );
};

export { MyProfile }; 