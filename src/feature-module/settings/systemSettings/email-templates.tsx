import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import {
  status,
} from "../../../core/common/selectoption/selectoption";
import CommonTextEditor from "../../../core/common/textEditor";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const Emailtemplates = () => {
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
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >

                        Email Settings
                      </Link>
                      <Link
                        to={routes.emailTemplates}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
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
                    <div className="border-bottom d-flex align-items-center justify-content-between pb-3 mb-3">
                      <h4>Email Templates</h4>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addtemplate"
                      >
                        <i className="ti ti-circle-plus me-2" />
                        Add Template
                      </Link>
                    </div>
                    <form>
                      <div className="border-bottom mb-3">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <div className="card">
                                <div className="card-body p-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6>Email Verification</h6>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edittemplate"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <div className="card">
                                <div className="card-body p-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6>Welcome Email</h6>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edittemplate"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <div className="card">
                                <div className="card-body p-3">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6>Leave Request</h6>
                                    <div className="d-flex align-items-center">
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edittemplate"
                                      >
                                        <i className="ti ti-edit" />
                                      </Link>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-icon"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_modal"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="mb-3">
                                  <div className="card">
                                    <div className="card-body p-3">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <h6>Performance Review</h6>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="btn btn-sm btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edittemplate"
                                          >
                                            <i className="ti ti-edit" />
                                          </Link>
                                          <Link to="#" className="btn btn-sm btn-icon">
                                            <i className="ti ti-trash" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="mb-3">
                                  <div className="card">
                                    <div className="card-body p-3">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <h6>Training Session</h6>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="btn btn-sm btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edittemplate"
                                          >
                                            <i className="ti ti-edit" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="btn btn-sm btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="ti ti-trash" />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="mb-3">
                                  <div className="card">
                                    <div className="card-body p-3">
                                      <div className="d-flex align-items-center justify-content-between">
                                        <h6>Password Reset</h6>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="btn btn-sm btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edittemplate"
                                          >
                                            <i className="ti ti-edit" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="btn btn-sm btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="ti ti-trash" />
                                          </Link>
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
        {/* Add Promotion */}
        <div className="modal fade" id="addtemplate">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Template</h4>
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
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Template Content</label>
                        <CommonTextEditor />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          className="select"
                          options={status}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-white border me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Template
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Promotion */}
        {/* Edit Promotion */}
        <div className="modal fade" id="edittemplate">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Template</h4>
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
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Email Verification"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Template Content</label>
                        <CommonTextEditor />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          className="select"
                          defaultValue={status[1]}
                          options={status}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-white border me-2"
                    data-bs-dismiss="modal"
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
        {/* /Edit Promotion */}
        {/* Delete Modal */}
        <div className="modal fade" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                  <i className="ti ti-trash-x fs-36" />
                </span>
                <h4 className="mb-1">Confirm Delete</h4>
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
                  <Link to={routes.emailTemplates} className="btn btn-danger">
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

export default Emailtemplates;
