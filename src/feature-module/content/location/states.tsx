import React from "react";
import { Link } from "react-router-dom";
import CommonSelect from "../../../core/common/commonSelect";
import {
  status,
} from "../../../core/common/selectoption/selectoption";
import Table from "../../../core/common/dataTable/index";
import { states_data } from "../../../core/data/json/states_data";
import { TableData } from "../../../core/data/interface";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const States = () => {

  const countryName = [
    { value: "Select", label: "Select" },
    { value: "United States", label: "United States" },
    { value: "Germany", label: "Germany" },
    { value: "Canada", label: "Canada" },

  ];

  const data = states_data;
  const columns = [
    {
      title: "State Name",
      dataIndex: "stateName",
      render: (text: String) => (
        <>
          <span className="text-dark">{text}</span>
        </>
      ),
      sorter: (a: TableData, b: TableData) =>
        a.stateName.length - b.stateName.length,
    },
    {
      title: "Country Name",
      dataIndex: "countryName",
      sorter: (a: TableData, b: TableData) =>
        a.countryName.length - b.countryName.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a: TableData, b: TableData) => a.status.length - b.status.length,
      render: (status: any) => (
        <span className="badge badge-soft-success d-inline-flex align-items-center">
          <i className="ti ti-circle-filled fs-5 me-1" />
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: any) => (
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <Link
              to="#"
              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots-vertical fs-14" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-right p-3">
              <li>
                <Link
                  className="dropdown-item rounded-1"
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#edit_state"
                >
                  <i className="ti ti-edit-circle me-2" />
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item rounded-1"
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#delete-modal"
                >
                  <i className="ti ti-trash-x me-2" />
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      {" "}
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Breadcrumb */}
            <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
              <div className="my-auto mb-2">
                <h2 className="mb-1">States</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={all_routes.adminDashboard}>
                        <i className="ti ti-smart-home" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Content</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      States
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                <div className="mb-2">
                  <Link
                    to="#"
                    data-bs-toggle="modal" data-inert={true}
                    data-bs-target="#add_state"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <i className="ti ti-circle-plus me-2" />
                    Add New State
                  </Link>
                </div>
                <div className="head-icons ms-2">
                  <CollapseHeader />
                </div>
              </div>
            </div>
            {/* /Breadcrumb */}
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <h5>States List</h5>
                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Sort By : Last 7 Days
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Recently Added
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Ascending
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Desending
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last Month
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 7 Days
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <Table dataSource={data} columns={columns} Selection={true} />
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
        {/* Add City */}
        <div className="modal fade" id="add_state">
          <div className="modal-dialog modal-dialog-centered modal-mg w-100">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add State</h4>
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
                        <label className="form-label">State Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Country Name</label>
                        <CommonSelect
                          className="select"
                          options={countryName}
                          defaultValue={countryName[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          className="select"
                          options={status}
                          defaultValue={status[0]}
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
                    Add State
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add City */}
      </>
      <>
        {/* Edit City */}
        <div className="modal fade" id="edit_state">
          <div className="modal-dialog modal-dialog-centered modal-mg w-100">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit State</h4>
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
                        <label className="form-label">State Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="California"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Country Name</label>
                        <CommonSelect
                          className="select"
                          options={countryName}
                          defaultValue={countryName[1]}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          className="select"
                          options={status}
                          defaultValue={status[1]}
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
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit City */}
      </>

    </div>
  );
};

export default States;
