import React from "react";
import { Outlet } from "react-router-dom";
//import "../../public/scss/main.scss"; // Import separate styles
import "./AuthFeautureFront.scss"; // Import separate styles

const FeatureFront: React.FC = () => {
  return (
    <div className="auth-feature-front">
      
        <Outlet />
      
    </div>
  );
};

export default FeatureFront;
