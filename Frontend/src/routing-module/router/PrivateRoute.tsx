import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Check if the token exists
  };
  
  const PrivateRoute: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/LoginUser" />;
  };
  
export default PrivateRoute;
