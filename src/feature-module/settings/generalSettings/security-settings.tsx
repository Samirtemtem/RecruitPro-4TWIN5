import React, { useState } from "react";
import { all_routes } from '../../router/all_routes';
import { Link } from 'react-router-dom';
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

type PasswordField = "password" | "confirmPassword" | "confirmPasswordOne";

const Securitysettings = () => {
  const routes = all_routes;
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
    confirmPasswordOne: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Breadcrumb */}
            <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
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
                    <li className="breadcrumb-item active" aria-current="page">
                      Settings
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
            {/* /Breadcrumb */}
            <ul className="nav nav-tabs nav-tabs-solid bg-transparent border-bottom mb-3">
              <li className="nav-item">
                <Link className="nav-link active" to={routes.profilesettings}>
                  <i className="ti ti-settings me-2" />
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.bussinessSettings}>
                  <i className="ti ti-world-cog me-2" />
                  Website Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.salarySettings}>
                  <i className="ti ti-device-ipad-horizontal-cog me-2" />
                  App Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.emailSettings}>
                  <i className="ti ti-server-cog me-2" />
                  System Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.paymentGateways}>
                  <i className="ti ti-settings-dollar me-2" />
                  Financial Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.customCss}>
                  <i className="ti ti-settings-2 me-2" />
                  Other Settings
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
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Profile Settings
                      </Link>
                      <Link
                        to={routes.securitysettings}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Security Settings
                      </Link>
                      <Link
                        to={routes.notificationssettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Notifications
                      </Link>
                      <Link
                        to={routes.connectedApps}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Connected Apps
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Security Settings</h4>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium mb-1">Password</h5>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-2 pe-2 border-end">
                              Set a unique password to protect the account
                            </p>
                            <p>Last Changed 03 Jan 2024, 09:00 AM</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <Link
                            to="#"
                            className="btn btn-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#change-password"
                          >
                            Change Pasword
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium mb-1">
                            Two Factor Authentication
                          </h5>
                          <p>Receive codes via SMS or email every time you login</p>
                        </div>
                        <div className="mb-3">
                          <Link to="#" className="btn btn-dark btn-sm">
                            Enable
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium d-flex align-items-center mb-1">
                            Google Authentication
                            <span className="badge badge-xs ms-2 bg-outline-success rounded-pill d-flex align-items-center">
                              <i className="ti ti-point-filled" />
                              Connected
                            </span>
                          </h5>
                          <p>Connect to Google</p>
                        </div>
                        <div className="mb-3">
                          <div className="form-check form-check-md form-switch me-2">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              role="switch"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium d-flex align-items-center mb-1">
                            Phone Number Verification{" "}
                            <span>
                              <i className="ti ti-discount-check-filled text-success ms-2" />
                            </span>
                          </h5>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-2 pe-2 border-end">
                              The Phone Number associated with the account
                            </p>
                            <p>Verified Mobile Number : +99264710583</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <Link
                            to="#"
                            className="btn btn-outline-light btn-sm border me-2"
                          >
                            Remove
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#change-phone"
                          >
                            Change{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium d-flex align-items-center mb-1">
                            Email Verification{" "}
                            <span>
                              <i className="ti ti-discount-check-filled text-success ms-2" />
                            </span>
                          </h5>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-2 pe-2 border-end">
                              The email address associated with the account
                            </p>
                            <p>Verified Email : info@example.com</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <Link
                            to="#"
                            className="btn btn-outline-light btn-sm border me-2"
                          >
                            Remove
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#change-email"
                          >
                            Change{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium mb-1">Device Management</h5>
                          <p>The devices associated with the account</p>
                        </div>
                        <div className="mb-3">
                          <Link
                            to="#"
                            className="btn btn-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#device_management"
                          >
                            Manage
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium mb-1">Account Activity</h5>
                          <p>The activities of the account</p>
                        </div>
                        <div className="mb-3">
                          <Link
                            to="#"
                            className="btn btn-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#account_activity"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom mb-3">
                        <div className="mb-3">
                          <h5 className="fw-medium mb-1">Deactivate Account</h5>
                          <p>
                            This will shutdown your account. Your account will be
                            reactive when you sign in again
                          </p>
                        </div>
                        <div className="mb-3">
                          <Link to="#" className="btn btn-dark btn-sm">
                            Deactivate
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                        <div>
                          <h5 className="fw-medium mb-1">Delete Account</h5>
                          <p>Your account will be permanently deleted</p>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="btn btn-dark btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#del-account"
                          >
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
      <>
        {/* Change Password */}
        <div className="modal fade custom-modal" id="change-password">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content doctor-profile">
              <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
                <h5 className="modal-title">Change Password</h5>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-circle-x-filled fs-20" />
                </Link>
              </div>
              <div className="modal-body p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label">
                      Current Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.password
                            ? "text"
                            : "password"
                        }
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords ${passwordVisibility.password
                          ? "ti-eye"
                          : "ti-eye-off"
                          }`}
                        onClick={() =>
                          togglePasswordVisibility("password")
                        }
                      ></span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Current Password<span className="text-danger">*</span>
                    </label>
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
                  <div className="mb-3">
                    <label className="form-label">
                      Confirm New Password<span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={
                          passwordVisibility.confirmPasswordOne
                            ? "text"
                            : "password"
                        }
                        className="pass-input form-control"
                      />
                      <span
                        className={`ti toggle-passwords ${passwordVisibility.confirmPasswordOne
                          ? "ti-eye"
                          : "ti-eye-off"
                          }`}
                        onClick={() =>
                          togglePasswordVisibility("confirmPasswordOne")
                        }
                      ></span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top">
                <div className="acc-submit">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button className="btn btn-primary" data-bs-dismiss="modal" type="button">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Change Password */}
        {/* Change Email */}
        <div className="modal fade custom-modal" id="change-email">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content doctor-profile">
              <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
                <h5 className="modal-title">Change Email</h5>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-circle-x-filled fs-20" />
                </Link>
              </div>
              <div className="modal-body p-4">
                <form>
                  <div className="wallet-add">
                    <div className="mb-3">
                      <label className="form-label">Current Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        New Email Address <span className="text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Confirm New Password<span className="text-danger">*</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.password
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${passwordVisibility.password
                            ? "ti-eye"
                            : "ti-eye-off"
                            }`}
                          onClick={() =>
                            togglePasswordVisibility("password")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top">
                <div className="acc-submit">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
                    Save Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Change Email */}
        {/* Change Phone */}
        <div className="modal fade custom-modal" id="change-phone">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content doctor-profile">
              <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
                <h5 className="modal-title">Change Phone Number</h5>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-circle-x-filled fs-20" />
                </Link>
              </div>
              <div className="modal-body p-4">
                <form>
                  <div className="wallet-add">
                    <div className="mb-3">
                      <label className="form-label">Current Phone Number</label>
                      <input
                        className="form-control form-control-lg group_formcontrol"
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        New Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control form-control-lg group_formcontrol"
                        id="phone1"
                        name="phone"
                        type="text"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Confirm New Password<span className="text-danger">*</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.password
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${passwordVisibility.password
                            ? "ti-eye"
                            : "ti-eye-off"
                            }`}
                          onClick={() =>
                            togglePasswordVisibility("password")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer border-top">
                <div className="acc-submit">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button className="btn btn-dark" data-bs-dismiss="modal" type="button">
                    Change Number
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Change Phone */}
        {/* Device Management */}
        <div className="modal fade custom-modal" id="device_management">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
                <h5 className="modal-title">Device Management</h5>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-circle-x-filled fs-20" />
                </Link>
              </div>
              <div className="modal-body">
                <div className="table">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>Device</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>IP Address</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chrome - Windows</td>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>New York / USA</td>
                        <td>232.222.12.72</td>
                        <td>
                          <span>
                            <i className="ti ti-trash text-gray-6" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>10 Apr 2025, 05:15 PM</td>
                        <td>New York / USA</td>
                        <td>224.111.12.75</td>
                        <td>
                          <span>
                            <i className="ti ti-trash text-gray-6" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Firefox Windows</td>
                        <td>15 Mar 2025, 02:40 PM</td>
                        <td>New York / USA</td>
                        <td>111.222.13.28</td>
                        <td>
                          <span>
                            <i className="ti ti-trash text-gray-6" />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>New York / USA</td>
                        <td>333.555.10.54</td>
                        <td>
                          <span>
                            <i className="ti ti-trash text-gray-6" />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Device Management */}
        {/* Activity Management */}
        <div className="modal fade custom-modal" id="account_activity">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
                <h5 className="modal-title">Account Activity</h5>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-circle-x-filled fs-20" />
                </Link>
              </div>
              <div className="modal-body">
                <div className="table">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>Device</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>IP Address</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chrome - Windows</td>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>New York / USA</td>
                        <td>232.222.12.72</td>
                        <td>
                          <span className="badge badge-sm badge-success">
                            <i className="ti ti-point-filled me-1" />
                            connect
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>10 Apr 2025, 05:15 PM</td>
                        <td>New York / USA</td>
                        <td>224.111.12.75</td>
                        <td>
                          <span className="badge badge-sm badge-success">
                            <i className="ti ti-point-filled me-1" />
                            connect
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Firefox Windows</td>
                        <td>15 Mar 2025, 02:40 PM</td>
                        <td>New York / USA</td>
                        <td>111.222.13.28</td>
                        <td>
                          <span className="badge badge-sm badge-success">
                            <i className="ti ti-point-filled me-1" />
                            connect
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>Safari Macos</td>
                        <td>15 May 2025, 10:30 AM</td>
                        <td>New York / USA</td>
                        <td>333.555.10.54</td>
                        <td>
                          <span className="badge badge-sm badge-success">
                            <i className="ti ti-point-filled me-1" />
                            connect
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Activity Management */}
      </>

    </div>
  )
}

export default Securitysettings

