import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../routing-module/router/all_routes";
import CollapseHeader from "../core/common/collapse-header/collapse-header";

interface User {
  id: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  image: string;
  department: string;
  team: string;
  role: string;
  is2FAEnabled: boolean;
  isVerified: boolean;
  createDate: string;
}

const Profilesettings = () => {
  const routes = all_routes;
  const API_BASE_URL = "http://localhost:5000/api/user";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: null as File | null,
    department: "",
    team: "",
    role: "",
  });
  const [originalData, setOriginalData] = useState<User | null>(null);
  const [passwordData, setPasswordData] = useState({ password: "", confirmPassword: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [view, setView] = useState<"profile" | "password">("profile");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    const userId = localStorage.getItem("userId");
    if (token && userData && userId) {
      try {
        const user: User = JSON.parse(userData);
        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          image: null,
          department: user.department || "",
          team: user.team || "",
          role: user.role || "",
        });
        setOriginalData(user);
      } catch {
        handleAuthError("Error loading user data.");
      }
    } else {
      handleAuthError("Please log in to view your profile settings.");
    }
  }, []);

  const handleAuthError = (message: string) => {
    setError(message);
    setTimeout(() => {
      localStorage.clear();
      window.location.href = "/login";
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token || !userId) return handleAuthError("Missing token or user ID.");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("userId", userId);
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "image" && value) formDataToSend.append(key, value);
      });
      if (formData.image) formDataToSend.append("image", formData.image);

      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formDataToSend,
      });
      const responseData = await response.json();

      if (!response.ok) {
        if (["Unauthorized: No user ID found", "Invalid token", "User not found"].includes(responseData.message)) {
          return handleAuthError("Session expired or invalid user.");
        }
        throw new Error(responseData.message || "Failed to update profile.");
      }

      localStorage.setItem("user", JSON.stringify(responseData.user));
      setOriginalData(responseData.user);
      setFormData((prev) => ({ ...prev, image: null }));
      setSuccess("Profile updated successfully!");
    } catch (err: any) {
      setError(err.message || "Failed to update profile.");
    } finally {
      setIsLoading(false);
    }
  };




 const handlePasswordSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");
  setSuccess("");

  if (!passwordData.password || !passwordData.confirmPassword) {
    setError("Please fill in both password fields.");
    setIsLoading(false);
    return;
  }
  if (passwordData.password !== passwordData.confirmPassword) {
    setError("Passwords do not match.");
    setIsLoading(false);
    return;
  }
  if (passwordData.password.length < 8) {
    setError("Password must be at least 8 characters long.");
    setIsLoading(false);
    return;
  }

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId"); // Retrieve userId
  if (!token || !userId) return handleAuthError("Missing token or user ID.");

  try {
    const response = await fetch(`${API_BASE_URL}/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId, // Include userId
        password: passwordData.password,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      if (["Unauthorized: No user ID found", "Invalid token", "User not found"].includes(responseData.message)) {
        return handleAuthError("Session expired or invalid user.");
      }
      throw new Error(responseData.message || "Failed to update password.");
    }

    setSuccess("Password updated successfully!");
    setPasswordData({ password: "", confirmPassword: "" });
    setView("profile");
  } catch (err: any) {
    console.error("Password update error:", err); // Add console logging for debugging
    setError(err.message || "Failed to update password.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="d-md-flex align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Settings</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>
                    <i className="ti ti-smart-home" />
                  </Link>
                </li>
                <li className="breadcrumb-item">Administration</li>
                <li className="breadcrumb-item active">Settings</li>
              </ol>
            </nav>
          </div>
          <div className="head-icons ms-2">
            <CollapseHeader />
          </div>
        </div>
        <ul className="nav nav-tabs nav-tabs-solid bg-transparent border-bottom mb-3">
          <li className="nav-item">
            <Link className="nav-link active" to={routes.profilesettings}>
              <i className="ti ti-settings me-2" />
              General Settings
            </Link>
          </li>
        </ul>
        <div className="row">
          <div className="col-xl-3 theiaStickySidebar">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column list-group settings-list">
                  <Link
                    to={routes.profilesettings}
                    className={`d-inline-flex align-items-center rounded py-2 px-3 ${view === "profile" ? "active" : ""}`}
                    onClick={() => setView("profile")}
                  >
                    <i className="ti ti-arrow-badge-right me-2" />
                    Profile Settings
                  </Link>
                  
                  <Link
                    to="#"
                    className={`d-inline-flex align-items-center rounded py-2 px-3 ${view === "password" ? "active" : ""}`}
                    onClick={() => setView("password")}
                  >
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="border-bottom mb-3 pb-3">
                  <h4>{view === "profile" ? "Profile Settings" : "Change Password"}</h4>
                </div>
                {success && <div className="alert alert-success">{success}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {view === "profile" ? (
                  <form onSubmit={handleSubmit}>
                    <div className="border-bottom mb-3">
                      <div className="row">
                        <div className="col-md-12">
                          <h6 className="mb-3">Basic Information</h6>
                          <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                              {formData.image ? (
                                <img
                                  src={URL.createObjectURL(formData.image)}
                                  alt="Profile"
                                  className="rounded-circle w-100 h-100"
                                  style={{ objectFit: "cover" }}
                                />
                              ) : originalData?.image ? (
                                <img
                                  src={originalData.image}
                                  alt="Profile"
                                  className="rounded-circle w-100 h-100"
                                  style={{ objectFit: "cover" }}
                                />
                              ) : (
                                <i className="ti ti-photo text-gray-3 fs-16" />
                              )}
                            </div>
                            <div className="profile-upload">
                              <div className="mb-2">
                                <h6 className="mb-1">Profile Photo</h6>
                                <p className="fs-12">Recommended image size is 40px x 40px</p>
                              </div>
                              <div className="profile-uploader d-flex align-items-center">
                                <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                  Upload
                                  <input
                                    type="file"
                                    className="form-control image-sign"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    disabled={isLoading}
                                  />
                                </div>
                                <Link
                                  to="#"
                                  className="btn btn-light btn-sm"
                                  onClick={() => setFormData((prev) => ({ ...prev, image: null }))}
                                >
                                  Cancel
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">First Name</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">Last Name</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">Email</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">Phone</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">Department</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                name="department"
                                value={formData.department}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">Role</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                className="form-control"
                                name="role"
                                value={formData.role}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        {formData.role === "TEAM-LEAD" && (
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">Team</label>
                              </div>
                              <div className="col-md-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="team"
                                  value={formData.team}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-light border me-3"
                        onClick={() =>
                          setFormData({
                            firstName: originalData?.firstName || "",
                            lastName: originalData?.lastName || "",
                            email: originalData?.email || "",
                            phoneNumber: originalData?.phoneNumber || "",
                            image: null,
                            department: originalData?.department || "",
                            team: originalData?.team || "",
                            role: originalData?.role || "",
                          })
                        }
                        disabled={isLoading}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handlePasswordSubmit}>
                    <div className="border-bottom mb-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">New Password</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={passwordData.password}
                                onChange={handlePasswordChange}
                                disabled={isLoading}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row align-items-center mb-3">
                            <div className="col-md-4">
                              <label className="form-label mb-md-0">Confirm Password</label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                value={passwordData.confirmPassword}
                                onChange={handlePasswordChange}
                                disabled={isLoading}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-light border me-3"
                        onClick={() => {
                          setPasswordData({ password: "", confirmPassword: "" });
                          setView("profile");
                        }}
                        disabled={isLoading}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2025 © RecruitPro.</p>
        <p>
          Designed & Developed By{" "}
          <Link to="#" className="text-primary">
            InfiniteLoopers
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Profilesettings;