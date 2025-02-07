import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes';
import Table from "../../../core/common/dataTable/index";
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import CommonSelect from '../../../core/common/commonSelect';
import { DatePicker } from 'antd';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { overtime_details } from '../../../core/data/json/overtime_details';
import PredefinedDateRanges from '../../../core/common/datePicker';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const OverTime = () => {

  const data = overtime_details;
  const columns = [
    {
      title: "Employee",
      dataIndex: "Employee",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md border avatar-rounded">
            <ImageWithBasePath src={`assets/img/users/${record.EmpImage}`} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{record.Employee}</Link>
            </h6>
            <span className="fs-12 fw-normal ">{record.Role}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Employee.length - b.Employee.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      title: "Overtime Hours",
      dataIndex: "OvertimeHours",
      sorter: (a: any, b: any) => a.OvertimeHours.length - b.OvertimeHours.length,
    },
    {
      title: "Project",
      dataIndex: "Project",
      render: (text: String, record: any) => (
        <p className="fs-14 fw-medium text-gray-9 d-flex align-items-center">
          {record.Project}
          <Link
            to="#"
            className="ms-1"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="Worked on the Management
												design & Development"
          >
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="collapse-tooltip">Worked on the Management
                design & Development</Tooltip>}
            >
              <i className="ti ti-info-circle text-info"></i>
            </OverlayTrigger>

          </Link>
        </p>

      ),
      sorter: (a: any, b: any) => a.Project.length - b.Project.length,
    },
    {
      title: "Approved By",
      dataIndex: "Name",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md border avatar-rounded">
            <ImageWithBasePath src={`assets/img/users/${record.Image}`} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{record.Name}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: String, record: any) => (
        <span className={`badge  d-inline-flex align-items-center badge-xs ${text === 'Accepted' ? 'badge-success' : 'badge-danger'}`}>
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>

      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
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
            data-bs-target="#edit_overtime"
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
  const employeeName = [
    { value: "Anthony Lewis", label: "Anthony Lewis" },
    { value: "Brian Villalobos", label: "Brian Villalobos" },
    { value: "Harvey Smith", label: "Harvey Smith" },
  ];
  const statusChoose = [
    { value: "Accepted", label: "Accepted" },
    { value: "Rejected", label: "Rejected" },
  ];

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const getModalContainer2 = () => {
    const modalElement = document.getElementById('modal_datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Overtime</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="index.html">
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Employee</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Overtime
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-file-export me-1" />
                    Export
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        <i className="ti ti-file-type-pdf me-1" />
                        Export as PDF
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        <i className="ti ti-file-type-xls me-1" />
                        Export as Excel{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <Link
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_overtime"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Overtime
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Overtime Counts */}
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <div>
                      <p className="fs-12 fw-medium mb-0 text-gray-5">
                        Overtime Employee
                      </p>
                      <h4>12</h4>
                    </div>
                    <div>
                      <span className="p-2 br-10 bg-transparent-primary border border-primary d-flex align-items-center justify-content-center">
                        <i className="ti ti-user-check text-primary fs-18" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <div>
                      <p className="fs-12 fw-medium mb-0 text-gray-5">
                        Overtime Hours
                      </p>
                      <h4>118</h4>
                    </div>
                    <div>
                      <span className="p-2 br-10 bg-pink-transparent border border-pink d-flex align-items-center justify-content-center">
                        <i className="ti ti-user-edit text-pink fs-18" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <div>
                      <p className="fs-12 fw-medium mb-0 text-gray-5">
                        Pending Request
                      </p>
                      <h4>23</h4>
                    </div>
                    <div>
                      <span className="p-2 br-10 bg-transparent-purple border border-purple d-flex align-items-center justify-content-center">
                        <i className="ti ti-user-exclamation text-purple fs-18" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <div>
                      <p className="fs-12 fw-medium mb-0 text-gray-5">Rejected</p>
                      <h4>5</h4>
                    </div>
                    <div>
                      <span className="p-2 br-10 bg-skyblue-transparent border border-skyblue d-flex align-items-center justify-content-center">
                        <i className="ti ti-user-exclamation text-skyblue fs-18" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Overtime Counts */}
          {/* Performance Indicator list */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Overtime</h5>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="me-3">
                  <div className="input-icon-end position-relative">
                    <PredefinedDateRanges />
                    <span className="input-icon-addon">
                      <i className="ti ti-chevron-down" />
                    </span>
                  </div>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Employee
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Anthony Lewis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Brian Villalobos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Harvey Smith
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Project
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Office Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Project Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Hospital Administration
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Accepted
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Rejected
                      </Link>
                    </li>
                  </ul>
                </div>
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
              <Table dataSource={data} columns={columns} Selection={false} />
            </div>
          </div>
          {/* /Performance Indicator list */}
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
      {/* Add Overtime */}
      <div className="modal fade" id="add_overtime">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Overtime</h4>
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
                        Employee<span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={employeeName}
                        defaultValue={employeeName[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Overtime date <span className="text-danger"> *</span>
                      </label>
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
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Overtime<span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Remaining Hours<span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Status<span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={statusChoose}
                        defaultValue={statusChoose[0]}
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
                  Add Overtime
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Overtime */}
      {/* Edit Overtime */}
      <div className="modal fade" id="edit_overtime">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Overtime</h4>
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
                        Employee * <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={employeeName}
                        defaultValue={employeeName[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Overtime date <span className="text-danger"> *</span>
                      </label>
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
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Overtime<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={8}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Remaining Hours<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={2}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Status<span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={statusChoose}
                        defaultValue={statusChoose[1]}
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
                  Add Overtime
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Overtime */}
      {/* Overtime Details */}
      <div className="modal fade" id="overtime_details">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Overtime Details</h4>
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
                      <div className="p-3 mb-3 br-5 bg-transparent-light">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <ImageWithBasePath
                                  src="assets/img/users/user-32.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-14">
                                  <Link to="#">Anthony Lewis</Link>
                                </h6>
                                <span className="fs-12 fw-normal ">UI/UX Team</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <p className="fs-14 fw-normal mb-1">Hours Worked</p>
                              <h6 className="fs-14 fw-medium">32</h6>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <p className="fs-14 fw-normal mb-1">Date</p>
                              <h6 className="fs-14 fw-medium">15 Apr 2024</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <h6 className="fs-14 fw-medium">Office Management</h6>
                      <p className="fs-12 fw-normal">
                        Worked on the Management design &amp; Development
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Select Status <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={statusChoose}
                        defaultValue={statusChoose[0]}
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Overtime Details */}
    </>

  )
}

export default OverTime
