import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const ConnectedApps = () => {
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
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Notifications
                      </Link>
                      <Link
                        to={routes.connectedApps}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Connected Apps
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Connectd Apps</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/settings/connected-app-01.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Slack</h5>
                              </div>
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-truncate line-clamb-2">
                                Team communication platform with channels for group
                                discussions and direct messaging.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/settings/connected-app-02.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Google Calendar</h5>
                              </div>
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-truncate line-clamb-2">
                                Google Calendar is a web-based scheduling tool that
                                allows users to create, manage, and share events.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/settings/connected-app-03.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Gmail</h5>
                              </div>
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-truncate line-clamb-2">
                                Gmail is a free email service by Google that offers
                                robust spam protection &amp; 15GB of storage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/settings/connected-app-04.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Github</h5>
                              </div>
                              <div className="form-check form-check-md form-switch">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  role="switch"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-truncate line-clamb-2">
                                Github is a web-based platform for version control and
                                collaboration, allowing developers to host &amp;
                                review code
                              </p>
                            </div>
                          </div>
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

    </div>
  );
};

export default ConnectedApps;
