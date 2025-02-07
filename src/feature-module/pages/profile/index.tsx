import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
type PasswordField =
  | "oldPassword"
  | "newPassword"
  | "confirmPassword"
  | "currentPassword";

const Profile = () => {
  const route = all_routes;
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
    currentPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const countryChoose = [
    { value: "Select", label: "Select" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
  ];
  const stateChoose = [
    { value: "Select", label: "Select" },
    { value: "california", label: "california" },
    { value: "Texas", label: "Texas" },
    { value: "New York", label: "New York" },
    { value: "Florida", label: "Florida" },
  ];
  const cityChoose = [
    { value: "Select", label: "Select" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "San Diego", label: "San Diego" },
    { value: "Fresno", label: "Fresno" },
  ];
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Profile </h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="index.html">
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Pages</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Profile{" "}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="head-icons ms-2">
              <CollapseHeader />
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h4>Profile </h4>
              </div>
              <form action="profile.html">
                <div className="border-bottom mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <h6 className="mb-3">Basic Information</h6>
                        <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                          <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                            <i className="ti ti-photo text-gray-3 fs-16" />
                          </div>
                          <div className="profile-upload">
                            <div className="mb-2">
                              <h6 className="mb-1">Profile Photo</h6>
                              <p className="fs-12">
                                Recommended image size is 40px x 40px
                              </p>
                            </div>
                            <div className="profile-uploader d-flex align-items-center">
                              <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                Upload
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  multiple
                                />
                              </div>
                              <Link
                                to="#"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </div>
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
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="form-label mb-md-0">Last Name</label>
                        </div>
                        <div className="col-md-8">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="form-label mb-md-0">Email</label>
                        </div>
                        <div className="col-md-8">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="form-label mb-md-0">Phone</label>
                        </div>
                        <div className="col-md-8">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom mb-3">
                  <h6 className="mb-3">Address Information</h6>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-2">
                          <label className="form-label mb-md-0">Address</label>
                        </div>
                        <div className="col-md-10">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="form-label mb-md-0">Country</label>
                        </div>
                        <div className="col-md-8">
                          <CommonSelect
                            className="select"
                            options={countryChoose}
                            defaultValue={countryChoose[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="form-label mb-md-0">State</label>
                        </div>
                        <div className="col-md-8">
                          <div>
                            <CommonSelect
                              className="select"
                              options={stateChoose}
                              defaultValue={stateChoose[0]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="form-label mb-md-0">City</label>
                        </div>
                        <div className="col-md-8">
                          <div>
                            <CommonSelect
                              className="select"
                              options={cityChoose}
                              defaultValue={cityChoose[0]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-4">
                          <label className="form-label mb-md-0">Postal Code</label>
                        </div>
                        <div className="col-md-8">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom mb-3">
                  <h6 className="mb-3">Change Password</h6>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-5">
                          <label className="form-label mb-md-0">
                            Current Password
                          </label>
                        </div>
                        <div className="col-md-7">
                          <div className="pass-group">
                            <input
                              type={
                                passwordVisibility.currentPassword
                                  ? "text"
                                  : "password"
                              }
                              className="pass-input form-control"
                            />
                            <span
                              className={`ti toggle-passwords ${passwordVisibility.currentPassword
                                ? "ti-eye"
                                : "ti-eye-off"
                                }`}
                              onClick={() =>
                                togglePasswordVisibility("currentPassword")
                              }
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-5">
                          <label className="form-label mb-md-0">New Password</label>
                        </div>
                        <div className="col-md-7">
                          <div className="pass-group">
                            <input
                              type={
                                passwordVisibility.newPassword
                                  ? "text"
                                  : "password"
                              }
                              className="pass-input form-control"
                            />
                            <span
                              className={`ti toggle-passwords ${passwordVisibility.newPassword
                                ? "ti-eye"
                                : "ti-eye-off"
                                }`}
                              onClick={() =>
                                togglePasswordVisibility("newPassword")
                              }
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row align-items-center mb-3">
                        <div className="col-md-5">
                          <label className="form-label mb-md-0">
                            Confirm Password
                          </label>
                        </div>
                        <div className="col-md-7">
                          <div className="pass-group">
                            <input
                              type={
                                passwordVisibility.confirmPassword
                                  ? "text"
                                  : "password"
                              }
                              className="pass-input form-control"
                            />
                            <span
                              className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                                ? "ti-eye"
                                : "ti-eye-off"
                                }`}
                              onClick={() =>
                                togglePasswordVisibility("confirmPassword")
                              }
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-light border me-3"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>

  );
};

export default Profile;
