import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const Storage = () => {
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
                <Link className="nav-link active" to={routes.customCss}>
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
                        to={routes.customCss}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >

                        Custom CSS
                      </Link>
                      <Link
                        to={routes.customJs}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >

                        Custom JS
                      </Link>
                      <Link
                        to={routes.cronjob}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Cronjob
                      </Link>
                      <Link
                        to={routes.storage}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Storage
                      </Link>
                      <Link
                        to={routes.banIpAddress}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Ban IP Address
                      </Link>
                      <Link
                        to={routes.backup}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Backup
                      </Link>
                      <Link
                        to={routes.clearcache}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Clear Cache
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Storage</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/icons/storage-icon-03.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Local Storage</h5>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link to="#" className="btn btn-icon btn-sm me-2">
                                  <i className="ti ti-settings fs-20" />
                                </Link>
                                <div className="form-check form-check-md form-switch">
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/icons/aws.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h5>AWS</h5>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="btn btn-icon btn-sm me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#aws_settings"
                                >
                                  <i className="ti ti-settings fs-20" />
                                </Link>
                                <div className="form-check form-check-md form-switch">
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    role="switch"
                                  />
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
        {/*Add Cronjob */}
        <div className="modal fade" id="aws_settings">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">AWS</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form>
                <div className="modal-body pb-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">AWS Access Key</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">AWS Secret Key</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Bucket Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Region</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">AWS Base URL</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Cronjob */}
      </>

    </div>
  );
};

export default Storage;
