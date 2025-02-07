import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import {
  customeFieldsOne,
  customeFieldsTwo,
  status,
} from "../../../core/common/selectoption/selectoption";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const CustomFields = () => {
  return (
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
              <Link className="nav-link" to={routes.bussinessSettings}>
                <i className="ti ti-world-cog me-2" />
                Website Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={routes.salarySettings}>
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
                      to={routes.salarySettings}
                      className="d-inline-flex align-items-center rounded py-2 px-3"
                    >
                      Salary Settings
                    </Link>
                    <Link
                      to={routes.approvalSettings}
                      className="d-inline-flex align-items-center rounded py-2 px-3"
                    >
                      Approval Settings
                    </Link>
                    <Link
                      to={routes.approvalSettings}
                      className="d-inline-flex align-items-center rounded py-2 px-3"
                    >
                      Invoice Settings
                    </Link>
                    <Link
                      to={routes.leaveType}
                      className="d-inline-flex align-items-center rounded py-2 px-3"
                    >
                      Leave Type
                    </Link>
                    <Link
                      to={routes.customFields}
                      className="d-inline-flex align-items-center rounded active py-2 px-3"
                    >
                      <i className="ti ti-arrow-badge-right me-2" />
                      Custom Fields
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Custom Fields</h4>
                    <Link
                      to="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#new-field"
                    >
                      <i className="ti ti-circle-plus me-2" />
                      Add Fields
                    </Link>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
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
                          <th className="fw-semibold">Module</th>
                          <th className="fw-semibold">Label</th>
                          <th className="fw-semibold">Type</th>
                          <th className="fw-semibold">Default Value</th>
                          <th className="fw-semibold">Required/Disable</th>
                          <th className="fw-semibold">Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="no-sort">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </th>
                          <th>Employee</th>
                          <th className="text-gray fw-normal">
                            Preferred Language
                          </th>
                          <th className="text-gray fw-normal">Select</th>
                          <th className="text-gray fw-normal">English</th>
                          <th className="text-gray fw-normal">Required</th>
                          <th className="d-flex">
                            <span className="badge badge-success badge-sm d-flex align-items-center">
                              <i className="ti ti-point-filled" />
                              Active
                            </span>
                          </th>
                          <th>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="text-gray"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-field"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <th className="no-sort">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </th>
                          <th>Projects</th>
                          <th className="text-gray fw-normal">Project Type</th>
                          <th className="text-gray fw-normal">Select</th>
                          <th className="text-gray fw-normal">Internal</th>
                          <th className="text-gray fw-normal">Required</th>
                          <th className="d-flex">
                            <span className="badge badge-success badge-sm d-flex align-items-center">
                              <i className="ti ti-point-filled" />
                              Active
                            </span>
                          </th>
                          <th>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="text-gray"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-field"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <th className="no-sort">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </th>
                          <th>Tasks</th>
                          <th className="text-gray fw-normal">Task Type</th>
                          <th className="text-gray fw-normal">Select</th>
                          <th className="text-gray fw-normal">Design</th>
                          <th className="text-gray fw-normal">Required</th>
                          <th className="d-flex">
                            <span className="badge badge-success badge-sm d-flex align-items-center">
                              <i className="ti ti-point-filled" />
                              Active
                            </span>
                          </th>
                          <th>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="text-gray"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-field"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </th>
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
      <>
        {/* Add New Fields */}
        <div className="modal fade" id="new-field">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Custom Field</h4>
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
                        <label className="form-label">Module</label>
                        <CommonSelect
                          className="select"
                          options={customeFieldsOne}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Label</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Default Value</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Input Type</label>
                        <CommonSelect
                          className="select"
                          options={customeFieldsTwo}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex mb-3">
                        <label className="form-label me-3">Required</label>
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="required"
                            id="required1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="required1">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="required"
                            type="radio"
                            id="required2"
                          />
                          <label className="form-check-label" htmlFor="required2">
                            No
                          </label>
                        </div>
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
                  <div className="row g-3">
                    <div className="col-6">
                      <Link
                        to="#"
                        className="btn btn-outline-primary w-100"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </Link>
                    </div>
                    <div className="col-6">
                      <button type="submit" data-bs-dismiss="modal" className="btn btn-primary w-100">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add New Fields */}
        {/* Edit New Fields */}
        <div className="modal fade" id="edit-field">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Custom Field</h4>
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
                        <label className="form-label">Module</label>
                        <CommonSelect
                          className="select"
                          options={customeFieldsOne}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Label</label>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue="Middle Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Default Value</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Input Type</label>
                        <CommonSelect
                          className="select"
                          defaultValue={customeFieldsTwo[1]}
                          options={customeFieldsTwo}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex mb-3">
                        <label className="form-label me-3">Required</label>
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="required"
                            id="required3"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="required3">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="required"
                            type="radio"
                            id="required4"
                          />
                          <label className="form-check-label" htmlFor="required4">
                            No
                          </label>
                        </div>
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
                  <div className="row g-3">
                    <div className="col-6">
                      <Link
                        to="#"
                        className="btn btn-outline-primary w-100"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </Link>
                    </div>
                    <div className="col-6">
                      <button type="button" className="btn btn-primary w-100" data-bs-dismiss="modal">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit New Fields */}
      </>

    </>

  );
};

export default CustomFields;
