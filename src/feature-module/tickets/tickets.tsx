import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import ReactApexChart from "react-apexcharts";
import TicketListModal from "../../core/modals/ticketListModal";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";

const Tickets = () => {
  const routes = all_routes;

  const [Areachart] = useState<any>({
    series: [
      {
        name: "Messages",
        data: [8, 5, 6, 3, 4, 6, 7, 3, 8, 6, 4, 7],
      },
    ],

    chart: {
      type: "bar",
      width: 70,
      height: 70,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
        color: "#fff",
      },
      sparkline: {
        enabled: !0,
      },
    },
    markers: {
      size: 0,
      colors: ["#F26522"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "35%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth",
    },
    colors: ["#FF6F28"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        show: false,
      },
    },
    tooltip: {
      show: false,
      theme: "dark",
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },

      marker: {
        show: false,
      },
    },
  });
  const [Areachart1] = useState<any>({
    series: [{
        name: "Messages",
        data: [8,5,6,3,4,6,7,3,8,6,4,7]
      }],

      chart: {
        type: 'bar',
        width: 70,
        height:70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26512"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#AB47BC"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },

        marker: {
          show: false
        }
      }
  });
  const [Areachart2] = useState<any>({
    series: [{
        name: "Messages",
        data: [8,5,6,3,4,6,7,3,8,6,4,7]
      }],

      chart: {
        type: 'bar',
        width: 70,
        height:70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#02C95A"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },

        marker: {
          show: false
        }
      }
  });
  const [Areachart3] = useState<any>({
    series: [{
        name: "Messages",
        data: [8,5,6,3,4,6,7,3,8,6,4,7]
      }],

      chart: {
        type: 'bar',
        width: 70,
        height:70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#0DCAF0"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false,}
      },
      tooltip: {
        show:false,
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },

        marker: {
          show: false
        }
      }
  });

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Tickets</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Employee</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tickets
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                  <Link
                    to={routes.tickets}
                    className="btn btn-icon btn-sm active bg-primary text-white me-1"
                  >
                    <i className="ti ti-list-tree" />
                  </Link>
                  <Link
                    to={routes.ticketGrid}
                    className="btn btn-icon btn-sm"
                  >
                    <i className="ti ti-layout-grid" />
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
                  data-bs-toggle="modal"
                  data-bs-target="#add_ticket"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Ticket
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="row">
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 d-flex">
                      <div className="flex-fill">
                        <div className="border border-dashed border-primary rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                          <span className="avatar avatar-lg avatar-rounded bg-primary-transparent ">
                            <i className="ti ti-ticket fs-20" />
                          </span>
                        </div>
                        <p className="fw-medium fs-12 mb-1">New Tickets</p>
                        <h4>120</h4>
                      </div>
                    </div>
                    <div className="col-6 text-end d-flex">
                      <div className="d-flex flex-column justify-content-between align-items-end">
                        <span className="badge bg-transparent-purple d-inline-flex align-items-center mb-3">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          +19.01%
                        </span>
                        <ReactApexChart
                          options={Areachart}
                          series={Areachart.series}
                          type="bar"
                          height={70}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 d-flex">
                      <div className="flex-fill">
                        <div className="border border-dashed border-purple rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                          <span className="avatar avatar-lg avatar-rounded bg-transparent-purple">
                            <i className="ti ti-folder-open fs-20" />
                          </span>
                        </div>
                        <p className="fw-medium fs-12 mb-1">Open Tickets</p>
                        <h4>60</h4>
                      </div>
                    </div>
                    <div className="col-6 text-end d-flex">
                      <div className="d-flex flex-column justify-content-between align-items-end">
                        <span className="badge bg-transparent-dark text-dark d-inline-flex align-items-center mb-3">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          +19.01%
                        </span>
                        <ReactApexChart
                          options={Areachart1}
                          series={Areachart1.series}
                          type="bar"
                          height={70}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 d-flex">
                      <div className="flex-fill">
                        <div className="border border-dashed border-success rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                          <span className="avatar avatar-lg avatar-rounded bg-success-transparent">
                            <i className="ti ti-checks fs-20" />
                          </span>
                        </div>
                        <p className="fw-medium fs-12 mb-1">Solved Tickets</p>
                        <h4>50</h4>
                      </div>
                    </div>
                    <div className="col-6 text-end d-flex">
                      <div className="d-flex flex-column justify-content-between align-items-end">
                        <span className="badge bg-info-transparent d-inline-flex align-items-center mb-3">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          +19.01%
                        </span>
                        <ReactApexChart
                          options={Areachart2}
                          series={Areachart2.series}
                          type="bar"
                          height={70}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 d-flex">
                      <div className="flex-fill">
                        <div className="border border-dashed border-info rounded-circle d-inline-flex align-items-center justify-content-center p-1 mb-3">
                          <span className="avatar avatar-lg avatar-rounded bg-info-transparent">
                            <i className="ti ti-progress-alert fs-20" />
                          </span>
                        </div>
                        <p className="fw-medium fs-12 mb-1">
                          Pending Tickets
                        </p>
                        <h4>10</h4>
                      </div>
                    </div>
                    <div className="col-6 text-end d-flex">
                      <div className="d-flex flex-column justify-content-between align-items-end">
                        <span className="badge bg-secondary-transparent d-inline-flex align-items-center mb-3">
                          <i className="ti ti-arrow-wave-right-down me-1" />
                          +19.01%
                        </span>
                        <ReactApexChart
                          options={Areachart3}
                          series={Areachart3.series}
                          type="bar"
                          height={70}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <h5>Ticket List</h5>
                <div className="d-flex align-items-center flex-wrap row-gap-3">
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Priority
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Priority
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          High
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Low
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Medium
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown me-2">
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
                          className="dropdown-item rounded-1"
                        >
                          Open
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          On Hold
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Reopened
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
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h5 className="text-info fw-medium">IT Support</h5>
                  <div className="d-flex align-items-center">
                    <span className="badge badge-danger d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      High
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <span className="badge badge-info rounded-pill mb-2">
                      Tic - 001
                    </span>
                    <div className="d-flex align-items-center mb-2">
                      <h5 className="fw-semibold me-2">
                        <Link to={routes.ticketDetails}>Laptop Issue</Link>
                      </h5>
                      <span className="badge bg-outline-pink d-flex align-items-center ms-1">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Open
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                      <p className="d-flex align-items-center mb-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />{" "}
                        Assigned to{" "}
                        <span className="text-dark ms-1"> Edgar Hansel</span>
                      </p>
                      <p className="d-flex align-items-center mb-0 me-2">
                        <i className="ti ti-calendar-bolt me-1" />
                        Updated 10 hours ago
                      </p>
                      <p className="d-flex align-items-center mb-0">
                        <i className="ti ti-message-share me-1" />9 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h5 className="text-info fw-medium">IT Support</h5>
                  <div className="d-flex align-items-center">
                    <span className="badge badge-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Low
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <span className="badge badge-info rounded-pill mb-2">
                      Tic - 002
                    </span>
                    <div className="d-flex align-items-center mb-2">
                      <h5 className="fw-semibold me-2">
                        <Link to={routes.ticketDetails}>Payment Issue</Link>
                      </h5>
                      <span className="badge bg-outline-warning d-flex align-items-center ms-1">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        On Hold
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                      <p className="d-flex align-items-center mb-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />{" "}
                        Assigned to{" "}
                        <span className="text-dark ms-1">Ann Lynch</span>
                      </p>
                      <p className="d-flex align-items-center mb-0 me-2">
                        <i className="ti ti-calendar-bolt me-1" />
                        Updated 15 hours ago
                      </p>
                      <p className="d-flex align-items-center mb-0">
                        <i className="ti ti-message-share me-1" />9 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h5 className="text-info fw-medium">IT Support</h5>
                  <div className="d-flex align-items-center">
                    <span className="badge badge-warning d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Medium
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <span className="badge badge-info rounded-pill mb-2">
                      Tic - 003
                    </span>
                    <div className="d-flex align-items-center mb-2">
                      <h5 className="fw-semibold me-2">
                        <Link to={routes.ticketDetails}>Bug Report</Link>
                      </h5>
                      <span className="badge bg-outline-purple d-flex align-items-center ms-1">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Reopened
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                      <p className="d-flex align-items-center mb-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-06.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />{" "}
                        Assigned to{" "}
                        <span className="text-dark ms-1">Juan Hermann</span>
                      </p>
                      <p className="d-flex align-items-center mb-0 me-2">
                        <i className="ti ti-calendar-bolt me-1" />
                        Updated 20 hours ago
                      </p>
                      <p className="d-flex align-items-center mb-0">
                        <i className="ti ti-message-share me-1" />9 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h5 className="text-info fw-medium">IT Support</h5>
                  <div className="d-flex align-items-center">
                    <span className="badge badge-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Low
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <span className="badge badge-info rounded-pill mb-2">
                      Tic - 004
                    </span>
                    <div className="d-flex align-items-center mb-2">
                      <h5 className="fw-semibold me-2">
                        <Link to={routes.ticketDetails}>Access Denied</Link>
                      </h5>
                      <span className="badge bg-outline-pink d-flex align-items-center ms-1">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Open
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                      <p className="d-flex align-items-center mb-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-05.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />{" "}
                        Assigned to{" "}
                        <span className="text-dark ms-1">Jessie Otero</span>
                      </p>
                      <p className="d-flex align-items-center mb-0 me-2">
                        <i className="ti ti-calendar-bolt me-1" />
                        Updated 23 hours ago
                      </p>
                      <p className="d-flex align-items-center mb-0">
                        <i className="ti ti-message-share me-1" />9 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mb-4">
                <Link to="#" className="btn btn-primary">
                  <i className="ti ti-loader-3 me-1" />
                  Load More
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Ticket Categories</h4>
                </div>
                <div className="card-body p-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                      <Link to="#">Internet Issue</Link>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          0
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                      <Link to="#">Computer</Link>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                      <Link to="#">Redistribute</Link>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          0
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                      <Link to="#">Payment</Link>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-3">
                      <Link to="#">Complaint</Link>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Support Agents</h4>
                </div>
                <div className="card-body p-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                      <span className="d-flex align-items-center">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Edgar Hansel
                      </span>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          0
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                      <span className="d-flex align-items-center">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Ann Lynch
                      </span>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                      <span className="d-flex align-items-center">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Juan Hermann
                      </span>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          0
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-3">
                      <span className="d-flex align-items-center">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-04.jpg"
                          className="avatar avatar-xs rounded-circle me-2"
                          alt="img"
                        />
                        Jessie Otero
                      </span>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xs bg-dark rounded-circle">
                          2
                        </span>
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

      <TicketListModal />
    </>
  );
};

export default Tickets;
