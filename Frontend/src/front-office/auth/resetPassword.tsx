import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import axios from "axios";

declare global {
  interface Window {
    env?: {
      API_URL: string;
    };
  }
}

const ResetPassword = () => {
  const routes = all_routes;
  const navigation = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [passwordResponse, setPasswordResponse] = useState({
    passwordResponseText: "Use 8 or more characters with a mix of letters, numbers, and symbols.",
    passwordResponseKey: "",
  });

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const onChangePassword = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    if (password.match(/^$|\s+/)) {
      setPasswordResponse({
        passwordResponseText: "Use 8 or more characters with a mix of letters, numbers & symbols",
        passwordResponseKey: "",
      });
    } else if (password.length === 0) {
      setPasswordResponse({
        passwordResponseText: "",
        passwordResponseKey: "",
      });
    } else if (password.length < 8) {
      setPasswordResponse({
        passwordResponseText: "Weak. Must contain at least 8 characters",
        passwordResponseKey: "0",
      });
    } else if (
      password.search(/[a-z]/) < 0 ||
      password.search(/[A-Z]/) < 0 ||
      password.search(/[0-9]/) < 0
    ) {
      setPasswordResponse({
        passwordResponseText: "Average. Must contain at least 1 upper case and number",
        passwordResponseKey: "1",
      });
    } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      setPasswordResponse({
        passwordResponseText: "Almost. Must contain a special symbol",
        passwordResponseKey: "2",
      });
    } else {
      setPasswordResponse({
        passwordResponseText: "Awesome! You have a secure password.",
        passwordResponseKey: "3",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Get token from URL
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    if (!token) {
      setError("Invalid reset link. Please request a new password reset.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (passwordResponse.passwordResponseKey !== "3") {
      setError("Please ensure your password meets all security requirements");
      return;
    }

    try {
      setIsLoading(true);
      const API_URL = window.env?.API_URL || 'http://localhost:5000/api';
      const response = await axios.post(`${API_URL}/auth/reset-password`, {
        token,
        newPassword: formData.password
      });

      setSuccess("Password reset successful! Redirecting to login...");
      setTimeout(() => {
        navigation(routes.resetPasswordSuccess);
      }, 2000);
    } catch (err: any) {
      setError(err.response?.data?.error || "An error occurred while resetting your password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-5">
            <div className="d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100">
              <div>
                <ImageWithBasePath src="assets/img/bg/rp.svg" alt="Img" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <div className="col-md-7 mx-auto vh-100">
                <form className="vh-100" onSubmit={handleSubmit}>
                  <div className="vh-100 d-flex flex-column justify-content-between p-4 pb-0">
                    <div className="mx-auto mb-5 text-center">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="">
                      <div className="text-center mb-3">
                        <h2 className="mb-2">Reset Password</h2>
                        <p className="mb-0">
                          Your new password must be different from previous used
                          passwords.
                        </p>
                      </div>
                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}
                      {success && (
                        <div className="alert alert-success" role="alert">
                          {success}
                        </div>
                      )}
                      <div>
                        <div className="input-block mb-3">
                          <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="pass-group" id="passwordInput">
                              <input
                                type={passwordVisibility.password ? "text" : "password"}
                                value={formData.password}
                                onChange={(e) => onChangePassword(e.target.value)}
                                className="form-control pass-input"
                                placeholder="Enter your password"
                              />
                              <span
                                className={`ti toggle-passwords ${passwordVisibility.password ? "ti-eye" : "ti-eye-off"}`}
                                onClick={() => togglePasswordVisibility("password")}
                                style={{ cursor: "pointer" }}
                              ></span>
                            </div>
                          </div>
                          <div
                            className={`password-strength d-flex ${
                              passwordResponse.passwordResponseKey === "0"
                                ? "poor-active"
                                : passwordResponse.passwordResponseKey === "1"
                                ? "avg-active"
                                : passwordResponse.passwordResponseKey === "2"
                                ? "strong-active"
                                : passwordResponse.passwordResponseKey === "3"
                                ? "heavy-active"
                                : ""
                            }`}
                            id="passwordStrength"
                          >
                            <span id="poor" className="active" />
                            <span id="weak" className="active" />
                            <span id="strong" className="active" />
                            <span id="heavy" className="active" />
                          </div>
                        </div>
                        <p className="fs-12">{passwordResponse.passwordResponseText}</p>
                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <div className="pass-group">
                            <input
                              type={passwordVisibility.confirmPassword ? "text" : "password"}
                              value={formData.confirmPassword}
                              onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                              className="pass-input form-control"
                              placeholder="Confirm your password"
                            />
                            <span
                              className={`ti toggle-passwords ${
                                passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                              }`}
                              onClick={() => togglePasswordVisibility("confirmPassword")}
                              style={{ cursor: "pointer" }}
                            ></span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <button 
                            type="submit" 
                            className="btn btn-primary w-100"
                            disabled={isLoading}
                          >
                            {isLoading ? "Resetting Password..." : "Reset Password"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 pb-4 text-center">
                      <p className="mb-0 text-gray-9">Copyright © 2025 - RECRUITPRO</p>
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

export default ResetPassword;
