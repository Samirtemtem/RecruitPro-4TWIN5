import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    const OTP = localStorage.getItem("OTPbypass") || null;
    let OTPstatus = true;
    if (OTP === "false") {
      OTPstatus = false;
    }
    return token !== null && OTPstatus === true; // Return true only if both token exists and OTP is verified
  };
  
  const PrivateRoute: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/LoginUser" />;
  };
  
export default PrivateRoute;
