import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
//import './loginuser.scss';
import axios from "axios";
import { all_routes } from "../../routing-module/router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";

import { useContext } from "react";  
import { AuthContext } from "../../routing-module/AuthContext";  // Import your AuthContext

//const { setToken, setRole } = useContext(AuthContext);  // Extract setToken & setRole

//import AuthModal from "./components/AuthModal";
//import DefaulHeader2 from "./components/Header";

import AuthModal from "../../index/components/AuthModal";
import DefaulHeader2 from "../../common/Header";
import FooterDefault from "../../common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileMenu from "../../common/MobileMenu";
import Seo from "../../common/Seo";

const LoginUser = () => {
    useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true,     // Run animations only once
      });
    }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });
  const navigate = useNavigate();

    /////////////////////////////// cancel login with social error //////////////////////////////////////////////////////////
    const params = new URLSearchParams(window.location.search);
    const errorlogin = params.get('error');
    useEffect(() => {
    if (errorlogin === 'GoogleLoginCancelled') {
      alert('Google login was canceled. Please try again.');
    } else if (errorlogin === 'LinkedInLoginCancelled') {
      alert('LinkedIn login was canceled. Please try again.');
    }
  }, [errorlogin]);
  ////////////////////////////// auto redirect if user is already logged in////////////////////////////////////////////////////////
  const { token, setToken, setRole, setUserId, fetchProfileData, updateProfileData, setUser } = useContext(AuthContext); // Use context inside the component
  useEffect(() => {
    // Check if the user is already authenticated
    const token = localStorage.getItem("token");
    if (token) {
      // Check if we have a userId (needed for profile data)
      const userId = localStorage.getItem("userId");
      
      // Check if profile data exists in session storage
      const profileData = localStorage.getItem("profileData");
      
      // If we have a token and userId but no profile data, fetch it (this handles social login cases)
      if (userId && !profileData) {
        console.log("Social login detected - Fetching profile data for user:", userId);
        
        const fetchSocialLoginProfile = async () => {
          try {
            // Make POST request to /api/profile/me with userId
            const profileResponse = await axios.post('http://localhost:5000/api/profile/me', {
              userId
            });
            
            console.log("Social login - Profile API response:", profileResponse.data);
            
            // Add the userId to the profile data for consistency
            const profileData = {
              ...profileResponse.data,
              id: userId,
              _id: profileResponse.data._id || userId
            };
            
            // Save profile data in context and session storage
            localStorage.setItem("profileData", JSON.stringify(profileData));
            
            // Update the profile data in AuthContext
            updateProfileData(profileData);
            
            console.log("Social login - Profile data fetched and stored successfully");
          } catch (error) {
            console.error("Error fetching profile data after social login:", error);
          }
        };
        
        fetchSocialLoginProfile();
      }
      
      // If token exists, redirect to the appropriate dashboard based on the role
      const userRole = localStorage.getItem("userRole");
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
    }
  }, [token, navigate, updateProfileData]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
  
      if (!response.data.user.isVerified) {
        setError("Please verify your email before logging in.");
        return;
      }
      console.log(response.data.user);
      console.log("PRINTING IS2FAENABLED");
      console.log(response.data.user.is2FAEnabled);
      console.log(response.data.user.is2FAEnabled == true);
      // Generate OTP and redirect to TwoStepVerification
      if(response.data.user.is2FAEnabled){
        console.log("REDIRECTING IS2FAENABLED");
        localStorage.setItem("userEmail", response.data.user.email);
        localStorage.setItem("OTPbypass", "false");
           // Redirect to TwoStepVerification
        navigate(all_routes.TwostepVerification);
        return;

      }
      const { token, user } = response.data;
  
      // Extract the correct user ID (might be _id instead of id)
      const userId = user._id || user.id;
      
      if (!userId) {
        console.error("No user ID found in response!", user);
      } else {
        console.log("Using user ID:", userId);
      }
  
      // Store the complete user object in AuthContext
      const userObject = {
        id: userId,
        _id: user._id || user.id,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email,
        role: user.role,
        phoneNumber: user.phoneNumber || "",
        is2FAEnabled: user.is2FAEnabled || false,
        image: user.image || "",
        createDate: user.createDate,
        lastLogin: user.lastLogin,
        isVerified: user.isVerified
      };
  
      // Store token, role, userId and the complete user object in AuthContext
      setToken(token);
      setRole(user.role); 
      setUserId(userId);
      setUser(userObject);
  
      // Also persist in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("userId", userId);
      localStorage.setItem("user", JSON.stringify(userObject));
      
      console.log("Auth data stored:", { 
        token: token ? "Set" : "Not set", 
        role: user.role,
        userId,
        user: userObject
      });

      // Directly fetch profile data from the API instead of using AuthContext method
      try {
        console.log("Directly fetching profile data after login");
        
        // Make POST request to /api/profile/me with userId
        const profileResponse = await axios.post('http://localhost:5000/api/profile/me', {
          userId: userId
        });
        
        console.log("Profile API response:", profileResponse.data);

        // Add the userId to the profile data for consistency
        const profileData = {
          ...profileResponse.data,
          id: userId,
          _id: profileResponse.data._id || userId
        };
        
        // Save profile data in context and session storage
        localStorage.setItem("profileData", JSON.stringify(profileData));
        
        // If AuthContext has an updateProfileData method, use it
        if (typeof updateProfileData === 'function') {
          updateProfileData(profileData);
        }
        
        console.log("Profile data fetched and stored successfully");
      } catch (profileError) {
        console.error("Error fetching profile data:", profileError);
        // Continue with login even if profile fetch fails
      }

      // Redirect based on role
      if (user.role === "ADMIN") {
        navigate(all_routes.adminDashboard); 
      } else if (user.role === "CANDIDATE") {
        navigate(all_routes.DashboardCandidate);
      } else {
        navigate(all_routes.LoginUser); 
      }
      /////////////////////////////////////////////
    } catch (err: any) {
      const errorCode = err.response?.data?.code;
      switch (errorCode) {
        case 'INVALID_CREDENTIALS':
          setError("Email and password are required.");
          break;
        case 'USER_NOT_FOUND':
          setError("No account found with this email. Please register first.");
          break;
        case 'EMAIL_NOT_VERIFIED':
          setError("Your email is not verified. Please check your inbox.");
          break;
        case 'INCORRECT_PASSWORD':
          setError("The password you entered is incorrect.");
          break;
        case 'USER_PASSWORD_EMAIL':
          setError("You have not set a password yet. Please check your email. A new password will be sent to you.");
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  

    
  
  
  // Social Login Handlers
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };
  const handleLinkedInLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/linkedin";
  };
  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/github";
  };
  const togglePasswordVisibility = (field: "password") => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (

<>
    <AuthModal />
          {/* End Login Popup Modal */}
    
          <DefaulHeader2 />
          <Seo pageTitle="Login" /> 
      <MobileMenu />
      {/* End MobileMenu */}
      
          {/* End Header with upload cv btn */}
<section className="job-categories ui-job-categories" style={{ backgroundColor: '#FFFFFF' , margin:'-40px' }}>
  <div className="auto-container">


 
  <div className="container-fluid bg-white">
    <div className="w-100 overflow-hidden d-flex align-items-center justify-content-center vh-100">
        {/* Right Side - Login */}
        <div className="col-lg-8 col-md-10 col-sm-12 ps-0"> {/* Increased width here */}
            <div className="row justify-content-center align-items-center">
                <div className="col-md-10"> {/* Increased width here */}
                    <form onSubmit={handleLogin} className="p-4 mt-2"> {/* Decreased margin-top here */}
                        {/* Logo */}
                        <div className="text-center mb-5">
                            <ImageWithBasePath
                                src="assets/img/Logooo.png"
                                className="img-fluid"
                                id="LogoLogin"
                                alt="Logo"
                            />
                        </div>
                        
                        <div className="text-center mb-4">
                            <p className="text-muted">Please enter your details to sign in</p>
                        </div>
                        
                        {error && <div className="alert alert-danger">{error}</div>}
                        
                        {/* Email Input */}
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control border" // Added border class
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Password Input */}
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="pass-group">
                                <input
                                    type={passwordVisibility.password ? "text" : "password"}
                                    className="pass-input form-control border" // Added border class
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className={`ti toggle-passwords ${
                                        passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                                    }`}
                                    onClick={() => togglePasswordVisibility("password")}
                                ></span>
                            </div>
                        </div>
                        
                        {/* Remember Me & Forgot Password */}
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="form-check mb-0">
                                <input
                                    className="form-check-input"
                                    id="remember_me"
                                    type="checkbox"
                                />
                                <label htmlFor="remember_me" className="form-check-label mt-0">
                                    Remember Me
                                </label>
                            </div>
                            <div className="text-end">
                                <Link to={all_routes.forgotPassword} className="link-danger">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                        
                        {/* Submit Button */}
                        <div className="mb-3">
                            <button 
                                type="submit" 
                                className="btn btn-primary w-100"
                                disabled={loading}
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </div>
                        
                        {/* Registration Link */}
                        <div className="text-center mb-4">
                            <h6 className="fw-normal text-dark mb-0">
                                Don't have an account?
                                <Link to={all_routes.register} className="hover-a">
                                    {" "}Create Account
                                </Link>
                            </h6>
                        </div>
                        
                        {/* Social Login Separator */}
                        <div className="login-or text-center mb-4">
                            <span className="span-or">Or</span>
                        </div>
                        
                        {/* Social Login Buttons */}
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                            {/* Google Login */}
                            <div className="text-center me-2 flex-fill">
                                <Link
                                    to=""
                                    onClick={handleGoogleLogin}
                                    className="br-10 p-2 btn btn-outline-light border d-flex align-items-center justify-content-center"
                                >
                                    <ImageWithBasePath
                                        className="img-fluid m-1"
                                        src="assets/img/icons/google-logo.svg"
                                        alt="Google"
                                    />
                                </Link>
                            </div>
                            {/* LinkedIn Login */}
                            <div className="text-center me-2 flex-fill">
                                <Link
                                    to=""
                                    onClick={handleLinkedInLogin}
                                    className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                                >
                                    <ImageWithBasePath
                                        className="img-fluid m-1"
                                        src="assets/img/icons/LinkedIn-Logo.wine.svg"
                                        alt="LinkedIn"
                                    />
                                </Link>
                            </div>
                            {/* GitHub Login */}
                            <div className="text-center me-2 flex-fill">
                                <Link
                                    to=""
                                    onClick={handleGitHubLogin}
                                    className="br-10 p-2 btn btn-outline-dark border d-flex align-items-center justify-content-center"
                                >
                                    <ImageWithBasePath
                                        className="img-fluid m-1"
                                        src="assets/img/icons/github-logo.svg"
                                        alt="GitHub"
                                    />
                                </Link>
                            </div>
                           
                            {/* Face Recognition Button */}
                            <div className="text-center flex-fill">
                                <Link
                                    to="/face-recogn" // Redirect to the face recognition path
                                    className="br-10 p-2 btn btn-outline-dark border d-flex align-items-center justify-content-center"
                                >
                                    <ImageWithBasePath
                                        className="img-fluid m-1"
                                        src="assets/img/icons/face-id2.png"
                                        alt="Face Recognition"
                                    />
                                    
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>




  </div>
</section>
<FooterDefault />
    </>
  
  );
};
export default LoginUser; 