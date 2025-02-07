import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import { schudeSet } from "../../../core/common/selectoption/selectoption";
import { DatePicker, TimePicker } from "antd";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;

const Cronjob = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const getModalContainer2 = () => {
    const modalElement = document.getElementById('modal_datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
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
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
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
                  <div className="card-header px-0 mx-3">
                    <div className="row g-3 align-items-center">
                      <div className="col-md-6 col-sm-4">
                        <h4>Cronjob</h4>
                      </div>
                      <div className="col-md-6 col-sm-8">
                        <div className="d-flex justify-content-sm-end align-items-center flex-wrap row-gap-2">
                          <Link
                            to={routes.Cronjobschedule}
                            className="btn btn-dark me-2"
                          >
                            <i className="ti ti-clock-hour-4 me-2" />
                            Cron Schedule
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add_cronjob"
                          >
                            <i className="ti ti-circle-plus me-2" />
                            Add Cronjob
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pb-0">
                    <div className="card mb-3">
                      <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <h5>Cronjob List</h5>
                      </div>
                      <div className="card-body p-0">
                        <div className="custom-datatable-filter table-responsive">
                          <table className="table">
                            <thead className="thead-light">
                              <tr>
                                <th className="no-sort">
                                  <div className="form-check form-check-md">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="select-all"
                                    />
                                  </div>
                                </th>
                                <th>Name</th>
                                <th>Schedule</th>
                                <th>Next Run</th>
                                <th>Last Run</th>
                                <th>Status</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check form-check-md">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <h6 className="fw-medium">
                                    Report Generation Cron
                                  </h6>
                                </td>
                                <td>5 minutes</td>
                                <td>
                                  <div>
                                    <p className="mb-0">09 Sep 2024</p>
                                    <p className="mb-0">10:15:38</p>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p className="mb-0">09 Sep 2024</p>
                                    <p className="mb-0">10:28:38</p>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge badge-success d-flex align-items-center badge-xs">
                                    <i className="ti ti-point-filled me-1" />
                                    Running
                                  </span>
                                </td>
                                <td>
                                  <div className="action-icon d-inline-flex">
                                    <Link to="#" className="me-2">
                                      <i className="ti ti-player-pause" />
                                    </Link>
                                    <Link
                                      to="#"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_cronjob"
                                    >
                                      <i className="ti ti-edit" />
                                    </Link>
                                    <Link to="#" className="">
                                      <i className="ti ti-clock-bolt" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check form-check-md">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <h6 className="fw-medium">Job Expired Cron</h6>
                                </td>
                                <td>3 minutes</td>
                                <td>
                                  <div>
                                    <p className="mb-0">09 Sep 2024</p>
                                    <p className="mb-0">10:15:38</p>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <p className="mb-0">09 Sep 2024</p>
                                    <p className="mb-0">10:28:38</p>
                                  </div>
                                </td>
                                <td>
                                  <span className="badge badge-success d-flex align-items-center badge-xs">
                                    <i className="ti ti-point-filled me-1" />
                                    Running
                                  </span>
                                </td>
                                <td>
                                  <div className="action-icon d-inline-flex">
                                    <Link to="#" className="me-2">
                                      <i className="ti ti-player-pause" />
                                    </Link>
                                    <Link
                                      to="#"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_cronjob"
                                    >
                                      <i className="ti ti-edit" />
                                    </Link>
                                    <Link to="#" className="">
                                      <i className="ti ti-clock-bolt" />
                                    </Link>
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
        <div className="modal fade" id="add_cronjob">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Cronjob</h4>
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
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Schedule</label>
                        <CommonSelect
                          className="select"
                          options={schudeSet}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row ">
                        <div className="col-md-2 d-flex align-items-center">
                          <div className="mb-3">
                            <label className="form-label">Next Run</label>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mb-3">
                            <div className="input-icon-end position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                format={{
                                  format: "DD-MM-YYYY",
                                  type: "mask",
                                }}
                                getPopupContainer={getModalContainer}
                                placeholder="DD-MM-YYYY"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mb-3">
                            <div className="input-icon-end position-relative">
                              <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">URL</label>
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
                    Add Cronjob
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Cronjob */}
        {/* Edit Cronjob */}
        <div className="modal fade" id="edit_cronjob">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Cronjob</h4>
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
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Report Generation Cron"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Schedule</label>
                        <CommonSelect
                          className="select"
                          defaultValue={schudeSet[1]}
                          options={schudeSet}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row ">
                        <div className="col-md-2 d-flex align-items-center">
                          <div className="mb-3">
                            <label className="form-label">Next Run</label>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mb-3">
                            <div className="input-icon-end position-relative">
                              <DatePicker
                                className="form-control datetimepicker"
                                format={{
                                  format: "DD-MM-YYYY",
                                  type: "mask",
                                }}
                                getPopupContainer={getModalContainer}
                                placeholder="DD-MM-YYYY"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-calendar text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mb-3">
                            <div className="input-icon-end position-relative">
                              <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">URL</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="www.example.com"
                        />
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
                    Save Cronjob
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Cronjob */}
      </>


    </div>
  );
};

export default Cronjob;
