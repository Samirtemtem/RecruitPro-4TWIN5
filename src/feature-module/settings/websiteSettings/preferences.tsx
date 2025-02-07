import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const Preference = () => {
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
                <Link className="nav-link" to={routes.profilesettings}>
                  <i className="ti ti-settings me-2" />
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={routes.bussinessSettings}>
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
                        to={routes.bussinessSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Business Settings
                      </Link>
                      <Link
                        to={routes.seoSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        SEO Settings
                      </Link>
                      <Link
                        to={routes.localizationSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Localization
                      </Link>
                      <Link
                        to={routes.prefixes}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Prefixes
                      </Link>
                      <Link
                        to={routes.preference}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Preferences
                      </Link>
                      <Link
                        to={routes.appearance}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Appearance
                      </Link>
                      <Link
                        to={routes.language}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Language
                      </Link>
                      <Link
                        to={routes.authenticationSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Authentication Settings
                      </Link>
                      <Link
                        to={routes.aiSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        AI Settings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body pb-1">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Preferences</h4>
                    </div>
                    <div className="row">
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Employees</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user1"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user1" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Clients</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user2"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user2" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Projects</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user3"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user3" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Contacts</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user4"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user4" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Companies</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user5"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user5" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Deals</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user6"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user6" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Leads</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user12"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user12" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Pipeline</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user7"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user7" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Activities</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user8"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user8" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Sales</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user9"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user9" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Accounting</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user10"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user10" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-xl-4 col-sm-6">
                        <div className="d-md-flex justify-content-between align-items-center border rounded bg-white p-3 mb-3">
                          <h5 className="fw-medium fs-14">Reports</h5>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="user11"
                              className="check"
                              defaultChecked
                            />
                            <label htmlFor="user11" className="checktoggle">
                              {" "}
                            </label>
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

export default Preference;
