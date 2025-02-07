import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes';
import Table from "../../../../core/common/dataTable/index";
import CommonSelect from '../../../../core/common/commonSelect';
import PredefinedDateRanges from '../../../../core/common/datePicker';
import ImageWithBasePath from '../../../../core/common/imageWithBasePath';
import { DatePicker } from 'antd';
import { leaveemployee_details } from '../../../../core/data/json/leaveemployee_details';
import CollapseHeader from '../../../../core/common/collapse-header/collapse-header';

const LeaveEmployee = () => {

  const data = leaveemployee_details;
  const columns = [
    {
      title: "Leave Type",
      dataIndex: "LeaveType",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center">
          <p className="fs-14 fw-medium d-flex align-items-center mb-0">
            {record.LeaveType}
          </p>
          <Link
            to="#"
            className="ms-2"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="I am currently experiencing a fever and
                                          feeling unwell."
          >
            <i className="ti ti-info-circle text-info" />
          </Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.LeaveType.length - b.LeaveType.length,
    },
    {
      title: "From",
      dataIndex: "From",
      sorter: (a: any, b: any) => a.From.length - b.From.length,
    },
    {
      title: "Approved By",
      dataIndex: "ApprovedBy",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link
            to="#"
            className="avatar avatar-md border avatar-rounded"
          >
            <ImageWithBasePath src={`assets/img/users/${record.Image}`} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{record.ApprovedBy}</Link>
            </h6>
            <span className="fs-12 fw-normal ">{record.Roll}</span>
          </div>
        </div>

      ),
      sorter: (a: any, b: any) => a.ApprovedBy.length - b.ApprovedBy.length,
    },
    {
      title: "To",
      dataIndex: "To",
      sorter: (a: any, b: any) => a.To.length - b.To.length,
    },
    {
      title: "No of Days",
      dataIndex: "NoOfDays",
      sorter: (a: any, b: any) => a.NoOfDays.length - b.NoOfDays.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: String, record: any) => (
        <div className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            <span className={`rounded-circle ${text === 'Approved' ? 'bg-transparent-success' : text === 'New' ? 'bg-transparent-purple' : 'bg-transparent-danger'} d-flex justify-content-center align-items-center me-2`}>
              <i className={`ti ti-point-filled ${text === 'Approved' ? 'text-success' : text === 'New' ? 'text-purple' : 'text-danger'}`} />
            </span>{" "}
            {text}
          </Link>
          <ul className="dropdown-menu  dropdown-menu-end p-3">
            <li>
              <Link
                to="#"
                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
              >
                <span className="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2">
                  <i className="ti ti-point-filled text-success" />
                </span>
                Approved
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
              >
                <span className="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2">
                  <i className="ti ti-point-filled text-danger" />
                </span>
                Declined
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
              >
                <span className="rounded-circle bg-transparent-purple d-flex justify-content-center align-items-center me-2">
                  <i className="ti ti-point-filled text-purple" />
                </span>
                New
              </Link>
            </li>
          </ul>
        </div>

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
            data-bs-target="#edit_leaves"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            to="#"
            data-bs-toggle="modal" data-inert={true}
            data-bs-target="#delete_modal"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
    },
  ]

  const leavetype = [
    { value: "Select", label: "Select" },
    { value: "Medical Leave", label: "Medical Leave" },
    { value: "Casual Leave", label: "Casual Leave" },
    { value: "Annual Leave", label: "Annual Leave" },
  ];
  const selectChoose = [
    { value: "Select", label: "Select" },
    { value: "Full Day", label: "Full Day" },
    { value: "First Half", label: "First Half" },
    { value: "Second Half", label: "Second Half" },
  ];

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
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
              <h2 className="mb-1">Leaves</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Employee</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Leaves
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
                  data-bs-target="#add_leaves"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Leave
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Leaves Info */}
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card bg-black-le">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <p className="mb-1">Annual Leaves</p>
                      <h4>05</h4>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-2">
                        <span className="avatar avatar-md d-flex">
                          <i className="ti ti-calendar-event fs-32" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="badge bg-secondary-transparent">
                    Remaining Leaves : 07
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-blue-le">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <p className="mb-1">Medical Leaves</p>
                      <h4>11</h4>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-2">
                        <span className="avatar avatar-md d-flex">
                          <i className="ti ti-vaccine fs-32" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="badge bg-info-transparent">
                    Remaining Leaves : 01
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-purple-le">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <p className="mb-1">Casual Leaves</p>
                      <h4>02</h4>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-2">
                        <span className="avatar avatar-md d-flex">
                          <i className="ti ti-hexagon-letter-c fs-32" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="badge bg-transparent-purple">
                    Remaining Leaves : 10
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-pink-le">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <p className="mb-1">Other Leaves</p>
                      <h4>07</h4>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-2">
                        <span className="avatar avatar-md d-flex">
                          <i className="ti ti-hexagonal-prism-plus fs-32" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="badge bg-pink-transparent">
                    Remaining Leaves : 05
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* /Leaves Info */}
          {/* Leaves list */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="d-flex">
                <h5 className="me-2">Leave List</h5>
                <span className="badge bg-primary-transparent me-2">
                  Total Leaves : 48
                </span>
                <span className="badge bg-secondary-transparent">
                  Total Remaining Leaves : 23
                </span>
              </div>
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
                    className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Leave Type
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Medical Leave
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Casual Leave
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Annual Leave
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Approved By
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Doglas Martini
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Warren Morales
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Doglas Martini
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                      >
                        <span className="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2">
                          <i className="ti ti-point-filled text-success" />
                        </span>
                        Approved
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                      >
                        <span className="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2">
                          <i className="ti ti-point-filled text-danger" />
                        </span>
                        Declined
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                      >
                        <span className="rounded-circle bg-transparent-purple d-flex justify-content-center align-items-center me-2">
                          <i className="ti ti-point-filled text-purple" />
                        </span>
                        New
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
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
          {/* /Leaves list */}
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
      {/* Add Leaves */}
      <div className="modal fade" id="add_leaves">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Leave</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form >
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Leave Type</label>
                      <CommonSelect
                        className='select'
                        options={leavetype}
                        defaultValue={leavetype[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">From </label>
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
                      <label className="form-label">To </label>
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
                      <CommonSelect
                        className='select'
                        options={selectChoose}
                        defaultValue={selectChoose[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">No of Days</label>
                      <input type="text" className="form-control" disabled />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Remaining Days</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={8}
                        disabled
                      />
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
                  Add Leave
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Leaves */}
      {/* Edit Leaves */}
      <div className="modal fade" id="edit_leaves">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Leave</h4>
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
                      <label className="form-label">Leave Type</label>
                      <CommonSelect
                        className='select'
                        options={leavetype}
                        defaultValue={leavetype[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">From </label>
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
                      <label className="form-label">To </label>
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
                      <div className="input-icon-end position-relative">
                        <input
                          type="text"
                          className="form-control datetimepicker"
                          defaultValue="15/01/24"
                          disabled
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <CommonSelect
                        className='select'
                        options={selectChoose}
                        defaultValue={selectChoose[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">No of Days</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={'01'}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Remaining Days</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={'07'}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex align-items-center mb-3">
                      <div className="form-check me-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="leave1"
                          defaultValue="option4"
                          id="leave6"
                        />
                        <label className="form-check-label" htmlFor="leave6">
                          Full Day
                        </label>
                      </div>
                      <div className="form-check me-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="leave1"
                          defaultValue="option5"
                          id="leave5"
                        />
                        <label className="form-check-label" htmlFor="leave5">
                          First Half
                        </label>
                      </div>
                      <div className="form-check me-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="leave1"
                          defaultValue="option6"
                          id="leave4"
                        />
                        <label className="form-check-label" htmlFor="leave4">
                          Second Half
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Reason</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={" Going to Hospital "}
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
      {/* /Edit Leaves */}
    </>



  )
}

export default LeaveEmployee
