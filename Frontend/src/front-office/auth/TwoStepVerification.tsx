// Frontend/src/front-office/auth/TwoStepVerification.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { all_routes } from "../../routing-module/router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { InputOtp } from "primereact/inputotp";
import { Link } from "react-router-dom";
import { useContext } from "react";  

import { AuthContext } from "../../routing-module/AuthContext";  
import axios from "axios";

const TwoStepVerification = () => {
  const routes = all_routes;
  const navigation = useNavigate();
  const [email, setEmail] = useState<string>(""); // Add state for email
  const [token, setTokens] = useState<string>("");
  const userEmail = localStorage.getItem("userEmail");
    const { setToken, setRole } = useContext(AuthContext); // Use context inside the component
  
  const verifyOtp = async (email: string | null	, otp: string) => {
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp });
      if (response.status === 200) {
        localStorage.setItem("OTPbypass", "true");
        localStorage.setItem("userRole", response.data.user.role);
        localStorage.setItem("token", response.data.token);
        
      // Store token & role in AuthContext
      setToken(response.data.token);
      setRole(response.data.user.role); 

      // Also persist in localStorage (optional)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userRole", response.data.user.role);
        navigation(routes.DashboardCandidate); // Redirect to UserHome on success
      }
    } catch (err) {
      console.error("Invalid OTP:", err);
      alert("Invalid OTP. Please try again."); // Notify the user of an invalid OTP
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    verifyOtp(userEmail, token); // Call verifyOtp with email and token
  };

  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-5">
            <div className="d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100">
              <div>
                <ImageWithBasePath src="assets/img/bg/2sv.svg" alt="Img" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
              <div className="col-md-7 mx-auto p-4">
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className=" mx-auto mb-5 text-center">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="">
                      <div className="text-center mb-3">
                        <h2 className="mb-2">2 Step Verification</h2>
                        <p className="mb-0">
                          Please enter the OTP received to confirm your account
                          ownership. A code has been sent to {email}
                        </p>
                      </div>
                      <div className="text-center otp-input">
                        <InputOtp value={token} onChange={(e) => setTokens(e.value?.toString() || "")} integerOnly />
                        <div className="mb-3">
                          <button type="submit" className="btn btn-primary w-100" disabled={!token}>
                            Verify &amp; Proceed
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 text-center">
                        <p className="mb-0 text-gray-9">Copyright © 2025 - RECRUITPRO</p>
                      </div>
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

export default TwoStepVerification;