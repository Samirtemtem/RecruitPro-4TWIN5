import React from 'react'
import { Link } from 'react-router-dom'
import Table from "../../core/common/dataTable/index";
import { termination_table } from '../../core/data/json/termination_table';
import { all_routes } from '../router/all_routes';
import ImageWithBasePath from '../../core/common/imageWithBasePath';
import { termination, terminationtype } from '../../core/common/selectoption/selectoption';
import CommonSelect from '../../core/common/commonSelect';
import { DatePicker } from "antd";
import CollapseHeader from '../../core/common/collapse-header/collapse-header';

const Termination = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };


  const data = termination_table;
  const columns = [
    {
      title: "Resigning Employee",
      dataIndex: "ResigningEmployee",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center">
          <Link to={all_routes.invoiceDetails} className="avatar avatar-md me-2">
            <ImageWithBasePath
              src={`assets/img/users/${record.Image}`}
              className="rounded-circle"
              alt="user"
            />
          </Link>
          <h6 className="fw-medium">
            <Link to={all_routes.invoiceDetails}>{record.Resigning_Employee}</Link>
          </h6>
        </div>


      ),
      sorter: (a: any, b: any) => a.ResigningEmployee.length - b.ResigningEmployee.length,
    },
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a: any, b: any) => a.Department.length - b.Department.length,
    },
    {
      title: "Termination Type",
      dataIndex: "Termination_Type",
      sorter: (a: any, b: any) => a.Termination_Type.length - b.Termination_Type.length,
    },
    {
      title: "Notice Date",
      dataIndex: "Notice_Date",
      sorter: (a: any, b: any) => a.Notice_Date.length - b.Notice_Date.length,
    },
    {
      title: "Reason",
      dataIndex: "Reason",
      sorter: (a: any, b: any) => a.Reason.length - b.Reason.length,
    },
    {
      title: "Resignation Date",
      dataIndex: "Resignation_Date",
      sorter: (a: any, b: any) => a.Resignation_Date.length - b.Resignation_Date.length,
    },
    {
      title: "",
      dataIndex: "actions",
      render: () => (
        <div className="action-icon d-inline-flex">
          <Link
            to="#"
            className="me-2"
            data-bs-toggle="modal" data-inert={true}
            data-bs-target="#edit_termination"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#delete_modal">
            <i className="ti ti-trash" />
          </Link>
        </div>


      ),
    },
  ]
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Termination</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Performance</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Termination
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <Link
                  to="#"
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#new_termination"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Termination
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Termination List */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h5 className="d-flex align-items-center">Termination List</h5>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="input-icon position-relative me-2">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                      <input
                        type="text"
                        className="form-control date-range bookingrange"
                        placeholder="dd/mm/yyyy - dd/mm/yyyy "
                      />
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center fs-12"
                        data-bs-toggle="dropdown"
                      >
                        <p className="fs-12 d-inline-flex me-1">Sort By : </p>
                        Last 7 Days
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <Table dataSource={data} columns={columns} Selection={true} />
                </div>
              </div>
            </div>
          </div>
          {/* /Termination List  */}
        </div>
        {/* Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white border-top p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
        {/* /Footer */}
      </div>
      {/* /Page Wrapper */}
      <>
        {/* Add Termination */}
        <div className="modal fade" id="new_termination">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Termination</h4>
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
                        <label className="form-label">
                          Terminated Employee&nbsp;
                        </label>
                        <CommonSelect
                          className="select"
                          options={termination}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Termination Type</label>
                        <CommonSelect
                          className="select"
                          options={terminationtype}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Notice Date</label>
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
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Reason</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Resignation Date</label>
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
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                    Add Termination
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Termination */}
        {/* Edit Termination */}
        <div className="modal fade" id="edit_termination">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Termination</h4>
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
                        <label className="form-label">
                          Terminated Employee&nbsp;
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Anthony Lewis"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Termination Type</label>
                        <CommonSelect
                          className="select"
                          defaultValue={terminationtype[1]}
                          options={terminationtype}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Notice Date</label>
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
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Reason</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={"Employee retires"}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Resignation Date</label>
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
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edi Termination */}
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
                  <Link to={all_routes.termination} className="btn btn-danger">
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>

    </>
  )
}

export default Termination
