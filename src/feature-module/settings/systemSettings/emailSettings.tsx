import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const EmailSettings = () => {
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
                <Link className="nav-link " to={routes.profilesettings}>
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
                <Link className="nav-link active" to={routes.emailSettings}>
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
                        to={routes.emailSettings}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Email Settings
                      </Link>
                      <Link
                         to={routes.emailTemplates}
                        className="d-inline-flex align-items-center rounded   py-2 px-3"
                      >
                        Email Templates
                      </Link>
                      <Link
                        to={routes.smsSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        SMS Settings
                      </Link>
                      <Link
                        to={routes.smsTemplate}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        SMS Templates
                      </Link>
                      <Link
                        to={routes.otpSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        OTP
                      </Link>
                      <Link
                        to={routes.gdprCookies}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        GDPR Cookies
                      </Link>
                      <Link
                        to={routes.maintenanceMode}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Maintenance Mode
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Email Settings</h4>
                    </div>
                    <form>
                      <div className="border-bottom mb-3">
                        <div className="row"></div>
                        <div className="row">
                          <div className="col-md-6 d-flex">
                            <div className="card flex-fill">
                              <div className="card-body">
                                <div className="border-bottom pb-3 mb-3">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar avatar-xl p-2 me-2 bg-light flex-shrink-0">
                                        <ImageWithBasePath
                                          src="assets/img/settings/phpmail.svg"
                                          alt="Profile"
                                        />
                                      </span>
                                      <h5>PHP Mailer</h5>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault"
                                      />
                                    </div>
                                  </div>
                                  <p>
                                    Used to send emails safely and easily via PHP code
                                    from a web server.
                                  </p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                  <span className="btn btn-sm d-inline-flex align-items-center btn-dark">
                                    <i className="ti ti-checks me-1" />
                                    Connected
                                  </span>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#phpmailersettings"
                                    className="btn btn-icon btn-sm text-gray-5 fs-20"
                                  >
                                    <i className="ti ti-settings" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 d-flex">
                            <div className="card flex-fill">
                              <div className="card-body">
                                <div className="border-bottom pb-3 mb-3">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar avatar-xl me-2 p-2 bg-light flex-shrink-0">
                                        <ImageWithBasePath
                                          src="assets/img/settings/smtp.svg"
                                          alt="Profile"
                                        />
                                      </span>
                                      <h5>SMTP</h5>
                                    </div>
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault2"
                                      />
                                    </div>
                                  </div>
                                  <p>
                                    SMTP is used to send, relay or forward messages
                                    from a mail client.
                                  </p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                  <span className="btn btn-sm d-inline-flex align-items-center btn-light">
                                    <i className="ti ti-checks me-1" />
                                    Connected
                                  </span>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#smtpsettings"
                                    className="btn btn-icon btn-sm text-gray-5 fs-20"
                                  >
                                    <i className="ti ti-settings" />
                                  </Link>
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
        {/* Add php mailer */}
        <div className="modal fade" id="phpmailersettings">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">PHP Mailer</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">From Email Address</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Email Password</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">From Email Name</label>
                        <input className="form-control" type="text" />
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
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add php mailer */}
        {/* Add SMTP */}
        <div className="modal fade" id="smtpsettings">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">SMTP</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">From Email Address</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Email Password</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Email Host</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Port</label>
                        <input className="form-control" type="text" />
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
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add  SMTP */}
      </>

    </div>
  );
};

export default EmailSettings;
