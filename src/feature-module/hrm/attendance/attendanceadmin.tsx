import React from 'react'
import { Link } from 'react-router-dom'
import { attendance_admin_details } from '../../../core/data/json/attendanceadmin';
import { all_routes } from '../../router/all_routes';
import PredefinedDateRanges from '../../../core/common/datePicker';
import Table from "../../../core/common/dataTable/index";
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import CommonSelect from '../../../core/common/commonSelect';
import { DatePicker, TimePicker } from 'antd';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const AttendanceAdmin = () => {

  const data = attendance_admin_details;
  const columns = [
    {
      title: "Employee",
      dataIndex: "Employee",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md border avatar-rounded">
            <ImageWithBasePath src={`assets/img/users/${record.Image}`} className="img-fluid" alt="img" />
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
      title: "Status",
      dataIndex: "Status",
      render: (text: String, record: any) => (
        <span className={`badge ${text === 'Present' ? 'badge-success-transparent' : 'badge-danger-transparent'} d-inline-flex align-items-center`}>
          <i className="ti ti-point-filled me-1" />
          {record.Status}
        </span>

      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "Check In",
      dataIndex: "CheckIn",
      sorter: (a: any, b: any) => a.CheckIn.length - b.CheckIn.length,
    },
    {
      title: "Check Out",
      dataIndex: "CheckOut",
      sorter: (a: any, b: any) => a.CheckOut.length - b.CheckOut.length,
    },
    {
      title: "Break",
      dataIndex: "Break",
      sorter: (a: any, b: any) => a.Break.length - b.Break.length,
    },
    {
      title: "Late",
      dataIndex: "Late",
      sorter: (a: any, b: any) => a.Late.length - b.Late.length,
    },
    {
      title: "Production Hours",
      dataIndex: "ProductionHours",
      render: (text: String, record: any) => (
        <span className={`badge d-inline-flex align-items-center badge-sm ${record.ProductionHours < '8.00'
          ? 'badge-danger'
          : record.ProductionHours >= '8.00' && record.ProductionHours <= '9.00'
            ? 'badge-success'
            : 'badge-info'
          }`}
        >
          <i className="ti ti-clock-hour-11 me-1"></i>{record.ProductionHours}
        </span>
      ),
      sorter: (a: any, b: any) => a.ProductionHours.length - b.ProductionHours.length,
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
            data-bs-target="#edit_attendance"
          >
            <i className="ti ti-edit" />
          </Link>
        </div>

      ),
    },
  ]
  const statusChoose = [
    { value: "Select", label: "Select" },
    { value: "Present", label: "Present" },
    { value: "Absent", label: "Absent" },
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
              <h2 className="mb-1">Attendance Admin</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Employee</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Attendance Admin
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                  <Link
                    to={all_routes.attendanceemployee}
                    className="btn btn-icon btn-sm  me-1"
                  >
                    <i className="ti ti-brand-days-counter" />
                  </Link>
                  <Link
                    to={all_routes.attendanceadmin}
                    className="btn btn-icon btn-sm active bg-primary text-white"
                  >
                    <i className="ti ti-calendar-event" />
                  </Link>
                </div>
              </div>
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
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-target="#attendance_report"
                  data-bs-toggle="modal" data-inert={true}
                >
                  <i className="ti ti-file-analytics me-2" />
                  Report
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card border-0">
            <div className="card-body">
              <div className="row align-items-center mb-4">
                <div className="col-md-5">
                  <div className="mb-3 mb-md-0">
                    <h4 className="mb-1">Attendance Details Today</h4>
                    <p>Data from the 800+ total no of employees</p>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex align-items-center justify-content-md-end">
                    <h6>Total Absenties today</h6>
                    <div className="avatar-list-stacked avatar-group-sm ms-4">
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-06.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <ImageWithBasePath
                          className="border border-white"
                          src="assets/img/profiles/avatar-07.jpg"
                          alt="img"
                        />
                      </span>
                      <Link
                        className="avatar bg-primary avatar-rounded text-fixed-white fs-12"
                        to="#"
                      >
                        +1
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded">
                <div className="row gx-0">
                  <div className="col-md col-sm-4 border-end">
                    <div className="p-3">
                      <span className="fw-medium mb-1 d-block">Present</span>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>250</h5>
                        <span className="badge badge-success d-inline-flex align-items-center">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          +1%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md col-sm-4 border-end">
                    <div className="p-3">
                      <span className="fw-medium mb-1 d-block">Late Login</span>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>45</h5>
                        <span className="badge badge-danger d-inline-flex align-items-center">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          -1%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md col-sm-4 border-end">
                    <div className="p-3">
                      <span className="fw-medium mb-1 d-block">Uninformed</span>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>15</h5>
                        <span className="badge badge-danger d-inline-flex align-items-center">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          -12%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md col-sm-4 border-end">
                    <div className="p-3">
                      <span className="fw-medium mb-1 d-block">Permisson</span>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>03</h5>
                        <span className="badge badge-success d-inline-flex align-items-center">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          +1%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md col-sm-4">
                    <div className="p-3">
                      <span className="fw-medium mb-1 d-block">Absent</span>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>12</h5>
                        <span className="badge badge-danger d-inline-flex align-items-center">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          -19%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Admin Attendance</h5>
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
                    Department
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Finance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Application Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        IT Management
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
                        Present
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Absent
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
      {/* Edit Attendance */}
      <div className="modal fade" id="edit_attendance">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Attendance</h4>
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
                      <label className="form-label">Date</label>
                      <div className="input-icon input-icon-new position-relative w-100 me-2">
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
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Check In</label>
                      <div className="input-icon input-icon-new position-relative w-100">
                        <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                        <span className="input-icon-addon">
                          <i className="ti ti-clock-hour-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Check Out</label>
                      <div className="input-icon input-icon-new position-relative w-100">
                        <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                        <span className="input-icon-addon">
                          <i className="ti ti-clock-hour-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Break</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="30 Min	"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Late</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="32 Min"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Production Hours</label>
                      <div className="input-icon input-icon-new position-relative w-100">
                        <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                        <span className="input-icon-addon">
                          <i className="ti ti-clock-hour-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3 ">
                      <label className="form-label">Status</label>
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
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Attendance */}
      {/* Attendance Report */}
      <div className="modal fade" id="attendance_report">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Attendance</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="card shadow-none bg-transparent-light">
                <div className="card-body pb-1">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="d-flex align-items-center mb-3">
                        <span className="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="Img" />
                        </span>
                        <div>
                          <h6 className="fw-medium">Anthony Lewis</h6>
                          <span>UI/UX Team</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="mb-3 text-sm-end">
                            <span>Date</span>
                            <p className="text-gray-9 fw-medium">15 Apr 2025</p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-3 text-sm-end">
                            <span>Punch in at</span>
                            <p className="text-gray-9 fw-medium">09:00 AM</p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-3 text-sm-end">
                            <span>Punch out at</span>
                            <p className="text-gray-9 fw-medium">06:45 PM</p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-3 text-sm-end">
                            <span>Status</span>
                            <p className="text-gray-9 fw-medium">Present</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-none border mb-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-3">
                      <div className="mb-4">
                        <p className="d-flex align-items-center mb-1">
                          <i className="ti ti-point-filled text-dark-transparent me-1" />
                          Total Working hours
                        </p>
                        <h3>12h 36m</h3>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="mb-4">
                        <p className="d-flex align-items-center mb-1">
                          <i className="ti ti-point-filled text-success me-1" />
                          Productive Hours
                        </p>
                        <h3>08h 36m</h3>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="mb-4">
                        <p className="d-flex align-items-center mb-1">
                          <i className="ti ti-point-filled text-warning me-1" />
                          Break hours
                        </p>
                        <h3>22m 15s</h3>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="mb-4">
                        <p className="d-flex align-items-center mb-1">
                          <i className="ti ti-point-filled text-info me-1" />
                          Overtime
                        </p>
                        <h3>02h 15m</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <div
                        className="progress bg-transparent-dark mb-3"
                        style={{ height: 24 }}
                      >
                        <div
                          className="progress-bar bg-success rounded me-2"
                          role="progressbar"
                          style={{ width: "18%" }}
                        />
                        <div
                          className="progress-bar bg-warning rounded me-2"
                          role="progressbar"
                          style={{ width: "5%" }}
                        />
                        <div
                          className="progress-bar bg-success rounded me-2"
                          role="progressbar"
                          style={{ width: "28%" }}
                        />
                        <div
                          className="progress-bar bg-warning rounded me-2"
                          role="progressbar"
                          style={{ width: "17%" }}
                        />
                        <div
                          className="progress-bar bg-success rounded me-2"
                          role="progressbar"
                          style={{ width: "22%" }}
                        />
                        <div
                          className="progress-bar bg-warning rounded me-2"
                          role="progressbar"
                          style={{ width: "5%" }}
                        />
                        <div
                          className="progress-bar bg-info rounded me-2"
                          role="progressbar"
                          style={{ width: "3%" }}
                        />
                        <div
                          className="progress-bar bg-info rounded"
                          role="progressbar"
                          style={{ width: "2%" }}
                        />
                      </div>
                    </div>
                    <div className="co-md-12">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fs-10">06:00</span>
                        <span className="fs-10">07:00</span>
                        <span className="fs-10">08:00</span>
                        <span className="fs-10">09:00</span>
                        <span className="fs-10">10:00</span>
                        <span className="fs-10">11:00</span>
                        <span className="fs-10">12:00</span>
                        <span className="fs-10">01:00</span>
                        <span className="fs-10">02:00</span>
                        <span className="fs-10">03:00</span>
                        <span className="fs-10">04:00</span>
                        <span className="fs-10">05:00</span>
                        <span className="fs-10">06:00</span>
                        <span className="fs-10">07:00</span>
                        <span className="fs-10">08:00</span>
                        <span className="fs-10">09:00</span>
                        <span className="fs-10">10:00</span>
                        <span className="fs-10">11:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Attendance Report */}
    </>




  )
}

export default AttendanceAdmin
