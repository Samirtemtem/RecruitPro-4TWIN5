import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactApexChart from "react-apexcharts";
import CircleProgressSmall from "./circleProgressSmall";
import CircleProgress from "./circleProgress";
import { Calendar } from 'primereact/calendar';
import { DatePicker } from "antd";
import CommonSelect from "../../../core/common/commonSelect";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const EmployeeDashboard = () => {
  const routes = all_routes;

  const [date, setDate] = useState(new Date('2024'));

  //New Chart
  const [leavesChart] = useState<any>({
    chart: {
      height: 165,
      type: 'donut',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%'
      },
    },
    dataLabels: {
      enabled: false
    },

    series: [15, 10, 5, 10, 60],
    colors: ['#F26522', '#FFC107', '#E70D0D', '#03C95A', '#0C4B5E'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      show: false
    }
  })

  const [performance_chart2] = useState<any>({
    series: [{
      name: "performance",
      data: [20, 20, 35, 35, 40, 60, 60]
    }],
    chart: {
      height: 288,
      type: 'area',
      zoom: {
        enabled: false
      }
    },
    colors: ['#03C95A'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yaxis: {
      min: 10,
      max: 60,
      tickAmount: 5,
      labels: {
        formatter: (val: number) => {
          return val / 1 + 'K'
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  })

  const employeename = [
    { value: "Select", label: "Select" },
    { value: "Anthony Lewis", label: "Anthony Lewis" },
    { value: "Brian Villalobos", label: "Brian Villalobos" },
    { value: "Harvey Smith", label: "Harvey Smith" },
  ];
  const leaveType = [
    { value: "Select", label: "Select" },
    { value: "Medical Leave", label: "Medical Leave" },
    { value: "Casual Leave", label: "Casual Leave" },
    { value: "Annual Leave", label: "Annual Leave" },
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
              <h2 className="mb-1">Employee Dashboard</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Employee Dashboard
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
              <div className="input-icon w-120 position-relative mb-2">
                <span className="input-icon-addon">
                  <i className="ti ti-calendar text-gray-9" />
                </span>
                <Calendar value={date} onChange={(e: any) => setDate(e.value)} view="year" dateFormat="yy" className="Calendar-form" />
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="alert bg-secondary-transparent alert-dismissible fade show mb-4">
            Your Leave Request on“24th April 2024”has been Approved!!!
            <button
              type="button"
              className="btn-close fs-14"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              <i className="ti ti-x" />
            </button>
          </div>
          <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="card position-relative flex-fill">
                <div className="card-header bg-dark">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg avatar-rounded border border-white border-2 flex-shrink-0 me-2">
                      <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                    </span>
                    <div>
                      <h5 className="text-white mb-1">Stephan Peralt</h5>
                      <div className="d-flex align-items-center">
                        <p className="text-white fs-12 mb-0">
                          Senior Product Designer
                        </p>
                        <span className="mx-1">
                          <i className="ti ti-point-filled text-primary" />
                        </span>
                        <p className="fs-12">UI/UX Design</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-icon btn-sm text-white rounded-circle edit-top"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <span className="d-block mb-1 fs-13">Phone Number</span>
                    <p className="text-gray-9">+1 324 3453 545</p>
                  </div>
                  <div className="mb-3">
                    <span className="d-block mb-1 fs-13">Email Address</span>
                    <p className="text-gray-9">Steperde124@example.com</p>
                  </div>
                  <div className="mb-3">
                    <span className="d-block mb-1 fs-13">Report Office</span>
                    <p className="text-gray-9">Doglas Martini</p>
                  </div>
                  <div>
                    <span className="d-block mb-1 fs-13">Joined on</span>
                    <p className="text-gray-9">15 Jan 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Leave Details</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        2024
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2023
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2022
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <div className="mb-3">
                          <p className="d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-8 text-dark me-1" />
                            <span className="text-gray-9 fw-semibold me-1">
                              1254
                            </span>
                            on time
                          </p>
                        </div>
                        <div className="mb-3">
                          <p className="d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-8 text-success me-1" />
                            <span className="text-gray-9 fw-semibold me-1">32</span>
                            Late Attendance
                          </p>
                        </div>
                        <div className="mb-3">
                          <p className="d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-8 text-primary me-1" />
                            <span className="text-gray-9 fw-semibold me-1">
                              658
                            </span>
                            Work From Home
                          </p>
                        </div>
                        <div className="mb-3">
                          <p className="d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-8 text-danger me-1" />
                            <span className="text-gray-9 fw-semibold me-1">14</span>
                            Absent
                          </p>
                        </div>
                        <div>
                          <p className="d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-8 text-warning me-1" />
                            <span className="text-gray-9 fw-semibold me-1">68</span>
                            Sick Leave
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4 d-flex justify-content-md-end">
                        <ReactApexChart
                          id="leaves_chart"
                          options={leavesChart}
                          series={leavesChart.series}
                          type="donut"
                          height={165}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="todo1"
                        />
                        <label className="form-check-label" htmlFor="todo1">
                          Better than <span className="text-gray-9">85%</span> of
                          Employees
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Leave Details</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        2024
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2023
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2022
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <span className="d-block mb-1">Total Leaves</span>
                        <h4>16</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <span className="d-block mb-1">Taken</span>
                        <h4>10</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <span className="d-block mb-1">Absent</span>
                        <h4>2</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <span className="d-block mb-1">Request</span>
                        <h4>0</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <span className="d-block mb-1">Worked Days</span>
                        <h4>240</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <span className="d-block mb-1">Loss of Pay</span>
                        <h4>2</h4>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div>
                        <Link
                          to="#"
                          className="btn btn-dark w-100"
                          data-bs-toggle="modal" data-inert={true}
                          data-bs-target="#add_leaves"
                        >
                          Apply New Leave
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill border-primary attendance-bg">
                <div className="card-body">
                  <div className="mb-4 text-center">
                    <h6 className="fw-medium text-gray-5 mb-1">Attendance</h6>
                    <h4>08:35 AM, 11 Mar 2025</h4>
                  </div>
                  <CircleProgress value={65} />
                  <div className="text-center">
                    <div className="badge badge-dark badge-md mb-3">
                      Production : 3.45 hrs
                    </div>
                    <h6 className="fw-medium d-flex align-items-center justify-content-center mb-4">
                      <i className="ti ti-fingerprint text-primary me-1" />
                      Punch In at 10.00 AM
                    </h6>
                    <Link to="#" className="btn btn-primary w-100">
                      Punch Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 d-flex">
              <div className="row flex-fill">
                <div className="col-xl-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="border-bottom mb-3 pb-2">
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
                      <div className="border-bottom mb-3 pb-2">
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
                      <div className="border-bottom mb-3 pb-2">
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
                      <div className="border-bottom mb-3 pb-2">
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
          <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Projects</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border-0 dropdown-toggle border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        Ongoing Projects
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            All Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Ongoing Projects
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card mb-4 shadow-none mb-md-0">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h6>Office Management</h6>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#edit_task"
                                  >
                                    <i className="ti ti-edit me-2" />
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="d-flex align-items-center mb-3">
                              <Link to="#" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-32.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-normal">
                                  <Link to="#">Anthony Lewis</Link>
                                </h6>
                                <span className="fs-13 d-block">
                                  Project Leader
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                              <Link
                                to="#"
                                className="avatar bg-soft-primary rounded-circle"
                              >
                                <i className="ti ti-calendar text-primary fs-16" />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-normal">14/01/2024</h6>
                                <span className="fs-13 d-block">Deadline</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between bg-transparent-light border border-dashed rounded p-2 mb-3">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-sm bg-success-transparent rounded-circle me-1">
                                  <i className="ti ti-checklist fs-16" />
                                </span>
                                <p>
                                  Tasks : <span className="text-gray-9">6 </span>{" "}
                                  /10
                                </p>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
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
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-08.jpg"
                                    alt="img"
                                  />
                                </span>
                                <Link
                                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                                  to="#"
                                >
                                  +2
                                </Link>
                              </div>
                            </div>
                            <div className="bg-soft-secondary p-2 rounded d-flex align-items-center justify-content-between">
                              <p className="text-secondary mb-0 text-truncate">
                                Time Spent
                              </p>
                              <h5 className="text-secondary text-truncate">
                                65/120 <span className="fs-14 fw-normal">Hrs</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card shadow-none mb-0">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h6>Office Management</h6>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#edit_task"
                                  >
                                    <i className="ti ti-edit me-2" />
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="d-flex align-items-center mb-3">
                              <Link to="#" className="avatar">
                                <ImageWithBasePath
                                  src="assets/img/users/user-33.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-normal">
                                  <Link to="#">Anthony Lewis</Link>
                                </h6>
                                <span className="fs-13 d-block">
                                  Project Leader
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                              <Link
                                to="#"
                                className="avatar bg-soft-primary rounded-circle"
                              >
                                <i className="ti ti-calendar text-primary fs-16" />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-normal">14/01/2024</h6>
                                <span className="fs-13 d-block">Deadline</span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between bg-transparent-light border border-dashed rounded p-2 mb-3">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-sm bg-success-transparent rounded-circle me-1">
                                  <i className="ti ti-checklist fs-16" />
                                </span>
                                <p>
                                  Tasks : <span className="text-gray-9">6 </span>{" "}
                                  /10
                                </p>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
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
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-08.jpg"
                                    alt="img"
                                  />
                                </span>
                                <Link
                                  className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                                  to="#"
                                >
                                  +2
                                </Link>
                              </div>
                            </div>
                            <div className="bg-soft-secondary p-2 rounded d-flex align-items-center justify-content-between">
                              <p className="text-secondary mb-0 text-truncate">
                                Time Spent
                              </p>
                              <h5 className="text-secondary text-truncate">
                                65/120 <span className="fs-14 fw-normal">Hrs</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Tasks</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border-0 dropdown-toggle border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        All Projects
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            All Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Ongoing Projects
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item border rounded mb-3 p-2">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-md-8">
                          <div className="todo-inbox-check d-flex align-items-center">
                            <span>
                              <i className="ti ti-grid-dots me-2" />
                            </span>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="me-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star-filled filled" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 text-truncate">
                                Patient appointment booking
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-soft-pink d-inline-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Onhold
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-13.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-14.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-15.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border rounded mb-3 p-2">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-md-8">
                          <div className="todo-inbox-check d-flex align-items-center">
                            <span>
                              <i className="ti ti-grid-dots me-2" />
                            </span>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 text-truncate">
                                Appointment booking with payment
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-transparent-purple d-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Inprogress
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-20.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-21.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border rounded mb-3 p-2">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-md-8">
                          <div className="todo-inbox-check d-flex align-items-center">
                            <span>
                              <i className="ti ti-grid-dots me-2" />
                            </span>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 text-truncate">
                                Patient and Doctor video conferencing
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge badge-soft-success align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Completed
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-28.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-29.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-24.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border rounded mb-3 p-2">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-md-8">
                          <div className="todo-inbox-check d-flex align-items-center todo-strike-content">
                            <span>
                              <i className="ti ti-grid-dots me-2" />
                            </span>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              // defaultChecked=""
                              />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 text-truncate">
                                Private chat module
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge badge-secondary-transparent d-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Pending
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-23.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-24.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-25.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border rounded p-2">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-md-8">
                          <div className="todo-inbox-check d-flex align-items-center">
                            <span>
                              <i className="ti ti-grid-dots me-2" />
                            </span>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 text-truncate">
                                Go-Live and Post-Implementation Support
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-transparent-purple d-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Inprogress
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-28.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-29.jpg"
                                    alt="img"
                                  />
                                </span>
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
          </div>
          <div className="row">
            <div className="col-xl-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Performance</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        2024
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2023
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2022
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <div className="bg-light d-flex align-items-center rounded p-2">
                      <h3 className="me-2">98%</h3>
                      <span className="badge badge-outline-success bg-success-transparent rounded-pill me-1">
                        12%
                      </span>
                      <span>vs last years</span>
                    </div>
                    <ReactApexChart
                      id="performance_chart2"
                      options={performance_chart2}
                      series={performance_chart2.series}
                      type="area"
                      height={288}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>My Skills</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        2024
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2024
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2023
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2022
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <div className="border border-dashed bg-transparent-light rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-block border border-2 h-12 border-primary rounded-5 me-2" />
                          <div>
                            <h6 className="fw-medium mb-1">Figma</h6>
                            <p>Updated : 15 May 2025</p>
                          </div>
                        </div>
                        <CircleProgressSmall value={95} />
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-block border border-2 h-12 border-success rounded-5 me-2" />
                          <div>
                            <h6 className="fw-medium mb-1">HTML</h6>
                            <p>Updated : 12 May 2025</p>
                          </div>
                        </div>
                        <CircleProgressSmall value={85} />
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-block border border-2 h-12 border-purple rounded-5 me-2" />
                          <div>
                            <h6 className="fw-medium mb-1">CSS</h6>
                            <p>Updated : 12 May 2025</p>
                          </div>
                        </div>
                        <CircleProgressSmall value={70} />
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-block border border-2 h-12 border-info rounded-5 me-2" />
                          <div>
                            <h6 className="fw-medium mb-1">Wordpress</h6>
                            <p>Updated : 15 May 2025</p>
                          </div>
                        </div>
                        <CircleProgressSmall value={61} />
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-block border border-2 h-12 border-dark rounded-5 me-2" />
                          <div>
                            <h6 className="fw-medium mb-1">Javascript</h6>
                            <p>Updated : 13 May 2025</p>
                          </div>
                        </div>
                        <CircleProgressSmall value={58} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 d-flex">
              <div className="flex-fill">
                <div className="card card-bg-5 bg-dark mb-3">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="text-white mb-4">Team Birthday</h5>
                      <span className="avatar avatar-xl avatar-rounded mb-2">
                        <ImageWithBasePath src="assets/img/users/user-35.jpg" alt="Img" />
                      </span>
                      <div className="mb-3">
                        <h6 className="text-white fw-medium mb-1">Andrew Jermia</h6>
                        <p>IOS Developer</p>
                      </div>
                      <Link to="#" className="btn btn-sm btn-primary">
                        Send Wishes
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card bg-secondary mb-3">
                  <div className="card-body d-flex align-items-center justify-content-between p-3">
                    <div>
                      <h5 className="text-white mb-1">Leave Policy</h5>
                      <p className="text-white">Last Updated : Today</p>
                    </div>
                    <Link to="#" className="btn btn-white btn-sm px-3">
                      View All
                    </Link>
                  </div>
                </div>
                <div className="card bg-warning">
                  <div className="card-body d-flex align-items-center justify-content-between p-3">
                    <div>
                      <h5 className="mb-1">Next Holiday</h5>
                      <p className="text-gray-9">Diwali, 15 Sep 2025</p>
                    </div>
                    <Link to="holidays.html" className="btn btn-white btn-sm px-3">
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h5>Team Members</h5>
                    <div>
                      <Link to="#" className="btn btn-light btn-sm">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-27.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate mb-1">
                          <Link to="#">Alexander Jermai</Link>
                        </h6>
                        <p className="fs-13">UI/UX Designer</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-phone fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-mail-bolt fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-42.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate mb-1">
                          <Link to="#">Doglas Martini</Link>
                        </h6>
                        <p className="fs-13">Product Designer</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-phone fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-mail-bolt fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link to="#"
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-43.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate mb-1">
                          <Link to="#">Daniel Esbella</Link>
                        </h6>
                        <p className="fs-13">Project Manager</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-phone fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-mail-bolt fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link to="#"
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-11.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate mb-1">
                          <Link to="#">Daniel Esbella</Link>
                        </h6>
                        <p className="fs-13">Team Lead</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-phone fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-mail-bolt fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link to="#"
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-44.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate mb-1">
                          <Link to="#">Stephan Peralt</Link>
                        </h6>
                        <p className="fs-13">Team Lead</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-phone fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-mail-bolt fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link to="#"
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-54.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate mb-1">
                          <Link to="#">Andrew Jermia</Link>
                        </h6>
                        <p className="fs-13">Project Lead</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-phone fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm me-2">
                        <i className="ti ti-mail-bolt fs-16" />
                      </Link>
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h5>Notifications</h5>
                    <div>
                      <Link to="#" className="btn btn-light btn-sm">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-start mb-4">
                    <Link to="#" className="avatar flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/users/user-27.jpg"
                        className="rounded-circle border border-2"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2">
                      <h6 className="fs-14 fw-medium text-truncate mb-1">
                        Lex Murphy requested access to UNIX{" "}
                      </h6>
                      <p className="fs-13 mb-2">Today at 9:42 AM</p>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="avatar avatar-sm border flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/social/pdf-icon.svg"
                            className="w-auto h-auto"
                            alt="Img"
                          />
                        </Link>
                        <h6 className="fw-normal">
                          <Link to="#">EY_review.pdf</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <Link to="#" className="avatar flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/users/user-28.jpg"
                        className="rounded-circle border border-2"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2">
                      <h6 className="fs-14 fw-medium text-truncate mb-1">
                        Lex Murphy requested access to UNIX{" "}
                      </h6>
                      <p className="fs-13 mb-0">Today at 10:00 AM</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <Link to="#" className="avatar flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/users/user-29.jpg"
                        className="rounded-circle border border-2"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2">
                      <h6 className="fs-14 fw-medium text-truncate mb-1">
                        Lex Murphy requested access to UNIX{" "}
                      </h6>
                      <p className="fs-13 mb-2">Today at 10:50 AM</p>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="btn btn-primary btn-sm me-2">
                          Approve
                        </Link>
                        <Link to="#" className="btn btn-outline-primary btn-sm">
                          Decline
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <Link to="#" className="avatar flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/users/user-30.jpg"
                        className="rounded-circle border border-2"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2">
                      <h6 className="fs-14 fw-medium text-truncate mb-1">
                        Lex Murphy requested access to UNIX{" "}
                      </h6>
                      <p className="fs-13 mb-0">Today at 12:00 PM</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <Link to="#" className="avatar flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/users/user-33.jpg"
                        className="rounded-circle border border-2"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2">
                      <h6 className="fs-14 fw-medium text-truncate mb-1">
                        Lex Murphy requested access to UNIX{" "}
                      </h6>
                      <p className="fs-13 mb-0">Today at 05:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Meetings Schedule</h5>
                    <div className="dropdown">
                      <Link to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        Today
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body schedule-timeline">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center active-time">
                      <span>09:25 AM</span>
                      <span>
                        <i className="ti ti-point-filled text-primary fs-20" />
                      </span>
                    </div>
                    <div className="flex-fill ps-3 pb-4 timeline-flow">
                      <div className="bg-light p-2 rounded">
                        <p className="fw-medium text-gray-9 mb-1">
                          Marketing Strategy Presentation
                        </p>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center active-time">
                      <span>09:20 AM</span>
                      <span>
                        <i className="ti ti-point-filled text-secondary fs-20" />
                      </span>
                    </div>
                    <div className="flex-fill ps-3 pb-4 timeline-flow">
                      <div className="bg-light p-2 rounded">
                        <p className="fw-medium text-gray-9 mb-1">
                          Design Review Hospital, doctors Management Project
                        </p>
                        <span>Review</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center active-time">
                      <span>09:18 AM</span>
                      <span>
                        <i className="ti ti-point-filled text-warning fs-20" />
                      </span>
                    </div>
                    <div className="flex-fill ps-3 pb-4 timeline-flow">
                      <div className="bg-light p-2 rounded">
                        <p className="fw-medium text-gray-9 mb-1">
                          Birthday Celebration of Employee
                        </p>
                        <span>Celebration</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center active-time">
                      <span>09:10 AM</span>
                      <span>
                        <i className="ti ti-point-filled text-success fs-20" />
                      </span>
                    </div>
                    <div className="flex-fill ps-3 timeline-flow">
                      <div className="bg-light p-2 rounded">
                        <p className="fw-medium text-gray-9 mb-1">
                          Update of Project Flow
                        </p>
                        <span>Development</span>
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
      <>
        {/* Add Leaves */}
        <div className="modal fade" id="add_leaves">
          <div className="modal-dialog modal-dialog-centered modal-md">
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
              <form>
                <div className="modal-body pb-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Employee Name</label>
                        <CommonSelect
                          className="select"
                          options={employeename}
                          defaultValue={employeename[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Leave Type</label>
                        <CommonSelect
                          className="select"
                          options={leaveType}
                          defaultValue={leaveType[0]}
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
                        <label className="form-label">No of Days</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Remaining Days</label>
                        <input type="text" className="form-control" />
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
                  <button type="submit" className="btn btn-primary">
                    Add Leaves
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Leaves */}
      </>

    </>


  );
};

export default EmployeeDashboard;



