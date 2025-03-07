import React from "react";
import { useUserProfile, UserProfileData } from "../hooks/useUserProfile";
import { LogoUpload } from "./LogoUpload";
import { FormInfoBox } from "./FormInfoBox";

const MyProfile: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();

  return (
    <div className="widget-content">
      <LogoUpload userData={userData} />
      {/* End logo upload component */}

      <FormInfoBox userData={userData} />
      {/* End form info box */}
    </div>
  );
};

export { MyProfile }; 