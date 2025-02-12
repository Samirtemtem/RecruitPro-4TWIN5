import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { all_routes } from "../../routing-module/router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import "./loginuser.scss"; // Use the same SCSS file for styling

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(10); // Countdown Timer

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
          setError("Invalid or missing token.");
          navigate(all_routes.register);
          return;
        }

        // Make the verification request
        const response = await axios.get(`http://localhost:5000/api/auth/verify-email?token=${token}`);

        setMessage(response.data.message);
      } catch (error: any) {
        console.error("Verification failed:", error.response?.data || error.message);
        setError("Invalid or expired token.");
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate(message ? all_routes.LoginUser : all_routes.register);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer on unmount
    }
  }, [loading, message, error]);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="col-lg-5 col-md-8 col-sm-10">
        <div className="login-form-wrapper">
          <div className="login-content text-center">
            <div className="card border-0 shadow p-4">
              <div className="card-body">
                {/* Logo */}
                <div className="mx-auto mb-4 text-center">
                  <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </div>

                {/* Verification Status */}
                <div className="text-center mb-4">
                  <h2 className="mb-3">Email Verification</h2>
                  <p className="text-muted">Verifying your email address...</p>
                </div>

                {loading && (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {!loading && message && (
                  <div className="alert alert-success">{message}</div>
                )}

                {!loading && error && (
                  <div className="alert alert-danger">{error}</div>
                )}

                {/* Redirect Info */}
                {!loading && (
                  <div className="text-center mt-4">
                    <p className="text-muted">
                      You will be redirected automatically.
                    </p>
                    <p className="fw-bold text-primary">Redirecting in {countdown} seconds...</p>
                  </div>
                )}

                {/* Footer 
                
                <div className="mt-4 pb-2 text-center">
                  <p className="mb-0 text-gray-9">Copyright © 2024 - Smarthr</p>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
