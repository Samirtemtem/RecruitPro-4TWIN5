import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes';
import PredefinedDateRanges from '../../../core/common/datePicker';
import { attendance_employee_details } from '../../../core/data/json/attendanceemployee';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const AttendanceEmployee = () => {

  const data = attendance_employee_details;
  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      title: "Check In",
      dataIndex: "CheckIn",
      sorter: (a: any, b: any) => a.CheckIn.length - b.CheckIn.length,
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
      title: "Overtime",
      dataIndex: "Overtime",
      sorter: (a: any, b: any) => a.Overtime.length - b.Overtime.length,
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
  ]

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Employee Attendance</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Employee</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Employee Attendance
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                  <Link
                    to={all_routes.attendanceemployee}
                    className="btn btn-icon btn-sm active bg-primary text-white me-1"
                  >
                    <i className="ti ti-brand-days-counter" />
                  </Link>
                  <Link to={all_routes.attendanceadmin} className="btn btn-icon btn-sm">
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
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#attendance_report"
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
          <div className="row">
            <div className="col-xl-3 col-lg-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="mb-3 text-center">
                    <h6 className="fw-medium text-gray-5 mb-2">
                      Good Morning, Adrian
                    </h6>
                    <h4>08:35 AM, 11 Mar 2025</h4>
                  </div>
                  <div
                    className="attendance-circle-progress mx-auto mb-3"
                    data-value={65}
                  >
                    <span className="progress-left">
                      <span className="progress-bar border-success" />
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar border-success" />
                    </span>
                    <div className="avatar avatar-xxl avatar-rounded">
                      <ImageWithBasePath src="assets/img/profiles/avatar-27.jpg" alt="Img" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="badge badge-md badge-primary mb-3">
                      Production : 3.45 hrs
                    </div>
                    <h6 className="fw-medium d-flex align-items-center justify-content-center mb-3">
                      <i className="ti ti-fingerprint text-primary me-1" />
                      Punch In at 10.00 AM
                    </h6>
                    <Link to="#" className="btn btn-dark w-100">
                      Punch Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 d-flex">
              <div className="row flex-fill">
                <div className="col-xl-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom mb-2 pb-2">
                        <span className="avatar avatar-sm bg-primary mb-2">
                          <i className="ti ti-clock-stop" />
                        </span>
                        <h2 className="mb-2">
                          8.36 / <span className="fs-20 text-gray-5"> 9</span>
                        </h2>
                        <p className="fw-medium text-truncate">Total Hours Today</p>
                      </div>
                      <div>
                        <p className="d-flex align-items-center fs-13">
                          <span className="avatar avatar-xs rounded-circle bg-success flex-shrink-0 me-2">
                            <i className="ti ti-arrow-up fs-12" />
                          </span>
                          <span>5% This Week</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom mb-2 pb-2">
                        <span className="avatar avatar-sm bg-dark mb-2">
                          <i className="ti ti-clock-up" />
                        </span>
                        <h2 className="mb-2">
                          10 / <span className="fs-20 text-gray-5"> 40</span>
                        </h2>
                        <p className="fw-medium text-truncate">Total Hours Week</p>
                      </div>
                      <div>
                        <p className="d-flex align-items-center fs-13">
                          <span className="avatar avatar-xs rounded-circle bg-success flex-shrink-0 me-2">
                            <i className="ti ti-arrow-up fs-12" />
                          </span>
                          <span>7% Last Week</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom mb-2 pb-2">
                        <span className="avatar avatar-sm bg-info mb-2">
                          <i className="ti ti-calendar-up" />
                        </span>
                        <h2 className="mb-2">
                          75 / <span className="fs-20 text-gray-5"> 98</span>
                        </h2>
                        <p className="fw-medium text-truncate">Total Hours Month</p>
                      </div>
                      <div>
                        <p className="d-flex align-items-center fs-13 text-truncate">
                          <span className="avatar avatar-xs rounded-circle bg-danger flex-shrink-0 me-2">
                            <i className="ti ti-arrow-down fs-12" />
                          </span>
                          <span>8% Last Month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom mb-2 pb-2">
                        <span className="avatar avatar-sm bg-pink mb-2">
                          <i className="ti ti-calendar-star" />
                        </span>
                        <h2 className="mb-2">
                          16 / <span className="fs-20 text-gray-5"> 28</span>
                        </h2>
                        <p className="fw-medium text-truncate">
                          Overtime this Month
                        </p>
                      </div>
                      <div>
                        <p className="d-flex align-items-center fs-13 text-truncate">
                          <span className="avatar avatar-xs rounded-circle bg-danger flex-shrink-0 me-2">
                            <i className="ti ti-arrow-down fs-12" />
                          </span>
                          <span>6% Last Month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-3">
                          <div className="mb-3">
                            <p className="d-flex align-items-center mb-1">
                              <i className="ti ti-point-filled text-dark-transparent me-1" />
                              Total Working hours
                            </p>
                            <h3>12h 36m</h3>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="mb-3">
                            <p className="d-flex align-items-center mb-1">
                              <i className="ti ti-point-filled text-success me-1" />
                              Productive Hours
                            </p>
                            <h3>08h 36m</h3>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="mb-3">
                            <p className="d-flex align-items-center mb-1">
                              <i className="ti ti-point-filled text-warning me-1" />
                              Break hours
                            </p>
                            <h3>22m 15s</h3>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="mb-3">
                            <p className="d-flex align-items-center mb-1">
                              <i className="ti ti-point-filled text-info me-1" />
                              Overtime
                            </p>
                            <h3>02h 15m</h3>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="progress bg-transparent-dark mb-3"
                            style={{ height: 24 }}
                          >
                            <div
                              className="progress-bar bg-white rounded"
                              role="progressbar"
                              style={{ width: "18%" }}
                            />
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
                            <div
                              className="progress-bar bg-white rounded"
                              role="progressbar"
                              style={{ width: "18%" }}
                            />
                          </div>
                        </div>
                        <div className="co-md-12">
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
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
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Employee Attendance</h5>
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
              <Table dataSource={data} columns={columns} Selection={false} />
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
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="mb-3">
                        <span>Date</span>
                        <p className="text-gray-9 fw-medium">15 Apr 2025</p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-3">
                        <span>Punch in at</span>
                        <p className="text-gray-9 fw-medium">09:00 AM</p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-3">
                        <span>Punch out at</span>
                        <p className="text-gray-9 fw-medium">06:45 PM</p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="mb-3">
                        <span>Status</span>
                        <p className="text-gray-9 fw-medium">Present</p>
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

export default AttendanceEmployee
