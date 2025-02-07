import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const BanIpAddress = () => {
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
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Storage
                      </Link>
                      <Link
                        to={routes.banIpAddress}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
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
                  <div className="card-header px-0 mx-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4>Ban IP Address</h4>
                      <Link
                        to="#"
                        className="btn btn-primary btn-sm d-flex align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#add_ban"
                      >
                        <i className="ti ti-circle-plus me-2" />
                        Add IP Address
                      </Link>
                    </div>
                  </div>
                  <div className="card-body pb-0 ">
                    <div className="row bx-3">
                      <div className="col-lg-6">
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                              <div className="d-flex align-items-center">
                                <span className="d-inline-flex me-2">
                                  <i className="ti ti-ban" />
                                </span>
                                <p className="fs-14 fw-medium text-dark">
                                  198.120.16.01
                                </p>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="link-default me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_ban"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="link-default"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div>
                              <p>
                                <span className="me-2">
                                  <i className="ti ti-info-circle" />
                                </span>
                                Temporarily block to protect user accounts from
                                internet fraudsters
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                              <div className="d-flex align-items-center">
                                <span className="d-inline-flex me-2">
                                  <i className="ti ti-ban" />
                                </span>
                                <p className="fs-14 fw-medium text-dark">
                                  198.160.11.20
                                </p>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="link-default me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_ban"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="link-default"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div>
                              <p>
                                <span className="me-2">
                                  <i className="ti ti-info-circle" />
                                </span>
                                Unauthorized access attempts, or other signs of a
                                potential security
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                              <div className="d-flex align-items-center">
                                <span className="d-inline-flex me-2">
                                  <i className="ti ti-ban" />
                                </span>
                                <p className="fs-14 fw-medium text-dark">
                                  198.123.10.2
                                </p>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="link-default me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_ban"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="link-default"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div>
                              <p>
                                <span className="me-2">
                                  <i className="ti ti-info-circle" />
                                </span>
                                Attempts to scrape large amounts of HR data from the
                                system without authorization.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                              <div className="d-flex align-items-center">
                                <span className="d-inline-flex me-2">
                                  <i className="ti ti-ban" />
                                </span>
                                <p className="fs-14 fw-medium text-dark">
                                  198.110.01.05
                                </p>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="link-default me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_ban"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="link-default"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div>
                              <p>
                                <span className="me-2">
                                  <i className="ti ti-info-circle" />
                                </span>
                                Found downloading or uploading inappropriate content
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

      <>
        {/* Add New IP Addres */}
        <div className="modal fade" id="add_ban">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New IP Address</h4>
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
                        <label className="form-label">IP Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Currency Name"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Reason</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link to="#" className="btn btn-light me-2" data-bs-dismiss="modal">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Add IP Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add New Currency */}
        {/* Edit IP Address */}
        <div className="modal fade" id="edit_ban">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit IP Address</h4>
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
                        <label className="form-label">IP Address</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="198.120.16.01"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Reason</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "Temporarily block to protect user accounts from internet fraudsters"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link to="#" className="btn btn-light me-2" data-bs-dismiss="modal">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit IP Address */}
        {/* Delete Modal */}
        <div className="modal fade" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                  <i className="ti ti-trash-x fs-36" />
                </span>
                <h4 className="mb-1">Confirm Deletion</h4>
                <p className="mb-3">
                  You want to delete all the marked items, this cant be undone once
                  you delete.
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link to={routes.banIpAddress} className="btn btn-danger">
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>

    </div>
  );
};

export default BanIpAddress;
