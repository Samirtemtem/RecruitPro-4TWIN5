import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const Notificationssettings = () => {
  const routes = all_routes;
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
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Security Settings
                      </Link>
                      <Link
                        to={routes.notificationssettings}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
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
                      <h4>Notifications</h4>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="w-75 ps-2 border-0">Modules</th>
                            <th className="border-0">Push</th>
                            <th className="border-0">SMS</th>
                            <th className="pe-0 border-0">Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="ps-0">
                              <h5 className="mb-1 fw-medium">
                                New Hire and Onboarding Notifications
                              </h5>
                              <p>Alerts when a new hire is added to the system.</p>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td className="pe-0">
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <h5 className="mb-1 fw-medium">
                                Time Off and Leave Requests
                              </h5>
                              <p>
                                Notifications when leave requests are approved or
                                rejected.
                              </p>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td className="pe-0">
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <h5 className="mb-1 fw-medium">
                                Employee Performance and Review Updates
                              </h5>
                              <p>
                                Notifications when leave requests are approved or
                                rejected.
                              </p>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td className="pe-0">
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <h5 className="mb-1 fw-medium">
                                Payroll and Compensation
                              </h5>
                              <p>
                                Alerts when payroll is processed or pending approval.
                              </p>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td className="pe-0">
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <h5 className="mb-1 fw-medium">
                                Job Applications and Recruitment
                              </h5>
                              <p>Alerts for new applications or stage updates.</p>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-check-md form-switch me-2">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td className="pe-0">
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

    </div>
  );
};

export default Notificationssettings;
