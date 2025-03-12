import React from "react";
import { Outlet } from "react-router-dom";
//import "../../public/scss/main.scss"; // Import separate styles
import "./AuthFeautureFront.scss"; // Import separate styles

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Navigate, useLocation , useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react"; // Add useContext to the import statement
// Import AuthProvider for managing authentication
import { AuthContext, useAuth } from "./AuthContext";

const AuthFeatureFront: React.FC = () => {

/*  const { token } = useContext(AuthContext); // Use token from AuthContext
  const navigate = useNavigate();
  const location = useLocation();

  const [showLoader, setShowLoader] = useState(true);

  // Redirect to login if no token is found
  useEffect(() => {
    if (!token) {
      navigate("/LoginUser", { replace: true });
    }
  }, [token, navigate]);

  // Theme and layout settings logic (unchanged)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
*/
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const { token } = useAuth();
  
  return token ?  <div className="auth-feature-front">
      
  <Outlet />

</div> : <Navigate to="/loginuser" />;
};

export default AuthFeatureFront;
