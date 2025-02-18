import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import './loginuser.scss';
import axios from "axios";
import { all_routes } from "../../routing-module/router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
  });
  const navigate = useNavigate();
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
  
      localStorage.setItem("token", response.data.token);
      navigate(all_routes.UserHome);
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
  const togglePasswordVisibility = (field: "password") => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (
    <div className="container-fluid bg-white">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          {/* Left Side - Image */}
          <div className="col-lg-5">
            <div className="d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 bg-primary-transparent">
              <div>
                <ImageWithBasePath src="assets/img/bg/authentication-bg-03.svg" alt="Background"/>
              </div>
            </div>
          </div>
          
          {/* Right Side - Login */}
          <div className="col-lg-7 col-md-12 col-sm-12 ps-0">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <div className="col-md-7 mx-auto vh-100">
                <form className="vh-100" onSubmit={handleLogin}>
                  <div className="vh-100 d-flex flex-column justify-content-between p-4 pb-0">
                    {/* Logo */}
                    <div className="mx-auto mb-5 text-center">
                      <ImageWithBasePath
                        src="assets/img/RecruitProX.png"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    
                    <div>
                      <div className="text-center mb-4">
                        <h2 className="mb-3">Sign In</h2>
                        <p className="text-muted">Please enter your details to sign in</p>
                      </div>
                      
                      {error && <div className="alert alert-danger">{error}</div>}
                      {/* Email Input */}
                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control border-end-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <span className="input-group-text border-start-0">
                            <i className="ti ti-mail" />
                          </span>
                        </div>
                      </div>
                      {/* Password Input */}
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="pass-group">
                          <input
                            type={passwordVisibility.password ? "text" : "password"}
                            className="pass-input form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <span
                            className={`ti toggle-passwords ${
                              passwordVisibility.password 
                                ? "ti-eye" 
                                : "ti-eye-off"
                            }`}
                            onClick={() => togglePasswordVisibility("password")}
                          ></span>
                        </div>
                      </div>
                      {/* Remember Me & Forgot Password */}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check form-check-md mb-0">
                            <input
                              className="form-check-input"
                              id="remember_me"
                              type="checkbox"
                            />
                            <label 
                              htmlFor="remember_me" 
                              className="form-check-label mt-0"
                            >
                              Remember Me
                            </label>
                          </div>
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
                      <div className="text-center">
                        <h6 className="fw-normal text-dark mb-0">
                          Don’t have an account?
                          <Link to={all_routes.register} className="hover-a">
                            {" "}
                            Create Account
                          </Link>
                        </h6>
                      </div>
                      {/* Social Login Separator */}
                      <div className="login-or">
                        <span className="span-or">Or</span>
                      </div>
                      {/* Social Login Buttons */}
                      <div className="mt-2">
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                          {/* Google Login */}
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to=""
                              type="button"
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
                          <div className="text-center  flex-fill">
                            <Link
                              to=""
                              type="button"
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
                        </div>
                      </div>
                    </div>
                    {/* Footer */}
                    <div className="mt-5 pb-4 text-center">
                      {/*<p className="mb-0 text-gray-9">Copyright © 2024 - Smarthr</p>*/}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginUser; 