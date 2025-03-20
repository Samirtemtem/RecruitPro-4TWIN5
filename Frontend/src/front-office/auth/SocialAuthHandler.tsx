import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import { AuthContext } from "../../routing-module/AuthContext"; // Import AuthContext
import axios from "axios";

const SocialAuthHandler = () => {
  const navigate = useNavigate();
  const { setToken, setRole, setUserId, updateProfileData, setUser } = useContext(AuthContext); 
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const userRole = params.get("role");
        const userId = params.get("userId"); // Get userId from URL params if available

        if (!token || !userRole) {
          setError("Authentication failed. Missing credentials.");
          setLoading(false);
          return;
        }

        console.log("Social Auth Handler - Received credentials:", { 
          token: token ? "Present" : "Missing", 
          role: userRole,
          userId: userId || "Not in URL params"
        });

        // Store token and role in AuthContext
        setToken(token);
        setRole(userRole);

        // Persist token and role in sessionStorage for session
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userRole", userRole);

        // Get user ID if not provided in URL params
        let userIdToUse = userId;
        if (!userIdToUse) {
          // Fetch user details using the token to get the user ID
          console.log("Fetching user details to get ID");
          const userResponse = await axios.get(`http://localhost:5000/api/auth/user/${token}`);
          userIdToUse = userResponse.data.user.id || userResponse.data.user._id;
          console.log("Retrieved user ID:", userIdToUse);
          
          if (userIdToUse) { // Only create userObject if we have a valid userId
            // Store the complete user object in AuthContext
            const userData = userResponse.data.user;
            
            const userObject = {
              id: userIdToUse, // Now userIdToUse is guaranteed to be a string
              _id: userData._id || userData.id,
              firstName: userData.firstName || "",
              lastName: userData.lastName || "",
              email: userData.email,
              role: userRole,
              phoneNumber: userData.phoneNumber || "",
              is2FAEnabled: userData.is2FAEnabled || false,
              image: userData.image || "",
              createDate: userData.createDate,
              lastLogin: userData.lastLogin,
              isVerified: userData.isVerified
            };
            
            // Store the complete user object
            setUser(userObject);
            sessionStorage.setItem("user", JSON.stringify(userObject));
            console.log("User object stored:", userObject);
          }
        } else {
          // If userId is provided but we don't have user details,
          // fetch them to get the complete user object
          const userResponse = await axios.get(`http://localhost:5000/api/auth/user/${token}`);
          const userData = userResponse.data.user;
          
          const userObject = {
            id: userIdToUse, // Here userIdToUse is guaranteed to be a string
            _id: userData._id || userData.id,
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            email: userData.email,
            role: userRole,
            phoneNumber: userData.phoneNumber || "",
            is2FAEnabled: userData.is2FAEnabled || false,
            image: userData.image || "",
            createDate: userData.createDate,
            lastLogin: userData.lastLogin,
            isVerified: userData.isVerified
          };
          
          // Store the complete user object
          setUser(userObject);
          sessionStorage.setItem("user", JSON.stringify(userObject));
          console.log("User object stored:", userObject);
        }

        if (!userIdToUse) {
          throw new Error("Could not determine user ID");
        }

        // Set userId in context and sessionStorage
        setUserId(userIdToUse);
        sessionStorage.setItem("userId", userIdToUse);
        console.log("User ID stored:", userIdToUse);

        // Fetch profile data
        console.log("Fetching profile data for social login user");
        const profileResponse = await axios.post('http://localhost:5000/api/profile/me', {
          userId: userIdToUse
        });

        console.log("Profile data received:", !!profileResponse.data);
        
        // Save profile data in context and session storage
        const profileData = {
          ...profileResponse.data,
          id: userIdToUse,
          _id: profileResponse.data._id || userIdToUse
        };
        
        updateProfileData(profileData);
        sessionStorage.setItem("profileData", JSON.stringify(profileData));
        console.log("Profile data stored successfully");

        // Delay the navigation and show loading spinner
        setTimeout(() => {
          switch (userRole) {
            case "ADMIN":
              navigate(all_routes.adminDashboard);
              break;
            case "CANDIDATE":
              navigate(all_routes.DashboardCandidate);
              break;
            case "HR-MANAGER":
              navigate(all_routes.employeeDashboard);
              break;
            default:
              navigate(all_routes.LoginUser);
          }
          setLoading(false);
        }, 0); // 1 second delay for user experience
      } catch (err) {
        console.error("Error in social authentication:", err);
        setError("Authentication failed. Please try again.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate, setToken, setRole, setUserId, updateProfileData, setUser]);

  // Loading and error UI
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Completing authentication, please wait...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-danger" role="alert">
          {error}
          <div className="mt-3">
            <button 
              className="btn btn-primary"
              onClick={() => navigate(all_routes.LoginUser)}
            >
              Return to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null; // Will redirect before showing this
};

export default SocialAuthHandler;
