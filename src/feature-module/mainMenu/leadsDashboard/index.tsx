import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import ReactApexChart from "react-apexcharts";
import { Nullable } from "primereact/ts-helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from "dayjs";
import PredefinedDateRanges from "../../../core/common/datePicker";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const LeadsDasboard = () => {
  const routes = all_routes;
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so we add 1
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${month}-${day}-${year}`;
  const defaultValue = dayjs(formattedDate);
  const [date, setDate] = useState<Nullable<Date>>(null);

  const [revenue_income] = useState<any>({
    chart: {
      height: 230,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FF6F28', '#F8F9FA'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },
    series: [{
      name: 'Income',
      data: [40, 30, 45, 80, 85, 90, 80, 80, 80, 85, 20, 80]
    }, {
      name: 'Expenses',
      data: [60, 70, 55, 20, 15, 10, 20, 20, 20, 15, 80, 20]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      min: 0,    // Set the minimum value of the Y-axis to 0
      max: 100,
      labels: {
        offsetX: -15,
        style: {
          colors: '#6B7280',
          fontSize: '13px',
        },
        formatter: function (value: string) {
          return value + "K"; // Divide by 1000 and append 'K'
        }
      }
    },
    grid: {
      borderColor: 'transparent',
      strokeDashArray: 5,
      padding: {
        left: -8,
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val / 10 + " k"
        }
      }
    },
    fill: {
      opacity: 1
    },
  });
  const [heat_chart] = useState<any>({
    chart: {
      type: 'heatmap',
      height: 300,
    },
    colors: [
      "#9CA3AF",
      "#F37438",
      "#9CA3AF",
      "#F37438",
      "#9CA3AF",
      "#F37438",
    ],
    series: [
      {
        name: "0",
        data: [{
          x: 'Mon',
          y: 22
        },
        {
          x: 'Tue',
          y: 29
        },
        {
          x: 'Wed',
          y: 13
        },
        {
          x: 'Thu',
          y: 32
        },
        {
          x: 'Fri',
          y: 32
        },
        {
          x: 'Sat',
          y: 32
        },
        {
          x: 'Sun',
          y: 32
        },
        ]
      },
      {
        name: "20",
        data: [{
          x: 'Mon',
          y: 22,
          color: '#ff5722'
        },
        {
          x: 'Tue',
          y: 29
        },
        {
          x: 'Wed',
          y: 13
        },
        {
          x: 'Thu',
          y: 32
        },
        {
          x: 'Fri',
          y: 32
        },
        {
          x: 'Sat',
          y: 32
        },
        {
          x: 'Sun',
          y: 32
        },
        ]
      },
      {
        name: "40",
        data: [{
          x: 'Mon',
          y: 22
        },
        {
          x: 'Tue',
          y: 29
        },
        {
          x: 'Wed',
          y: 13
        },
        {
          x: 'Thu',
          y: 32
        },
        {
          x: 'Fri',
          y: 32
        },
        {
          x: 'Sat',
          y: 32
        },
        {
          x: 'Sun',
          y: 32
        },
        ]
      },
      {
        name: "60",
        data: [{
          x: 'Mon',
          y: 0
        },
        {
          x: 'Tue',
          y: 29
        },
        {
          x: 'Wed',
          y: 13
        },
        {
          x: 'Thu',
          y: 32
        },
        {
          x: 'Fri',
          y: 0
        },
        {
          x: 'Sat',
          y: 0
        },
        {
          x: 'Sun',
          y: 32
        },
        ]
      },
      {
        name: "80",
        data: [{
          x: 'Mon',
          y: 0
        },
        {
          x: 'Tue',
          y: 20
        },
        {
          x: 'Wed',
          y: 13
        },
        {
          x: 'Thu',
          y: 32
        },
        {
          x: 'Fri',
          y: 0
        },
        {
          x: 'Sat',
          y: 0
        },
        {
          x: 'Sun',
          y: 32
        },
        ]
      },
      {
        name: "120",
        data: [{
          x: 'Mon',
          y: 0
        },
        {
          x: 'Tue',
          y: 0
        },
        {
          x: 'Wed',
          y: 75
        },
        {
          x: 'Thu',
          y: 0
        },
        {
          x: 'Fri',
          y: 0
        },
        {
          x: 'Sat',
          y: 0
        },
        {
          x: 'Sun',
          y: 0
        },
        ]
      },
    ]
  });
  const [leads_stage] = useState<any>({
    chart: {
      height: 355,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FF6F28', '#F8F9FA'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        borderRadius: 5,
        borderRadiusWhenStacked: 'all',
        horizontal: false,
        endingShape: 'rounded'
      },
    },
    series: [{
      name: 'Income',
      data: [80, 40, 60, 40]
    }, {
      name: 'Expenses',
      data: [100, 100, 100, 100]
    }],
    xaxis: {
      categories: ['Competitor', 'Budget', 'Unresponsie', 'Timing'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '9px',
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -15,
        style: {
          colors: '#6B7280',
          fontSize: '10px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false // Disable data labels
    },
    fill: {
      opacity: 1
    },
  });
  const [donutchart2] = useState<any>({
    series: [25, 30, 10, 35], // Percentages for each section
    chart: {
      type: 'donut',
      height: 185,
    },
    labels: ['Paid', 'Google', 'Referals', 'Campaigns'], // Labels for the data
    colors: ['#FFC107', '#0C4B5E', '#AB47BC', '#FD3995'], // Colors from the image
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Google',
              formatter: function (w: any) {
                return '40%';
              }
            }
          }
        }
      }
    },
    stroke: {

      lineCap: 'round',
      show: true,
      width: 0,    // Space between donut sections
      colors: '#fff'
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    label: {
      show: false,
    }
  });
  const [donutchart3] = useState<any>({
    series: [15, 10, 5, 10, 60], // Percentages for each section
    chart: {
      type: 'donut',
      height: 167,
    },
    labels: ['Paid', 'Google', 'Referals', 'Campaigns', 'Campaigns'], // Labels for the data
    colors: ['#F26522', '#FFC107', '#E70D0D', '#1B84FF', '#0C4B5E'], // Colors from the image
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Leads',
              formatter: function (w: any) {
                return '589';
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    label: {
      show: false,
    }
  });

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Leads Dashboard</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Leads Dashboard
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
              <div className="input-icon mb-2 position-relative">
                <PredefinedDateRanges />
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card position-relative">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar avatar-md br-10 icon-rotate bg-primary flex-shrink-0">
                      <span className="d-flex align-items-center">
                        <i className="ti ti-delta text-white fs-16" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <p className="fw-medium text-truncate mb-1">
                        Total No of Leads
                      </p>
                      <h5>6000</h5>
                    </div>
                  </div>
                  <div className="progress progress-xs mb-2">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <p className="fw-medium fs-13 mb-0">
                    <span className="text-danger fs-12">
                      <i className="ti ti-arrow-wave-right-up me-1" />
                      -4.01%{" "}
                    </span>{" "}
                    from last week
                  </p>
                  <span className="position-absolute top-0 end-0">
                    <ImageWithBasePath src="assets/img/bg/card-bg-04.png" alt="Img" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card position-relative">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar avatar-md br-10 icon-rotate bg-secondary flex-shrink-0">
                      <span className="d-flex align-items-center">
                        <i className="ti ti-currency text-white fs-16" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <p className="fw-medium text-truncate mb-1">
                        No of New Leads
                      </p>
                      <h5>120</h5>
                    </div>
                  </div>
                  <div className="progress progress-xs mb-2">
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <p className="fw-medium fs-13 mb-0">
                    <span className="text-success fs-12">
                      <i className="ti ti-arrow-wave-right-up me-1" />
                      +20.01%{" "}
                    </span>{" "}
                    from last week
                  </p>
                  <span className="position-absolute top-0 end-0">
                    <ImageWithBasePath src="assets/img/bg/card-bg-04.png" alt="Img" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card position-relative">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar avatar-md br-10 icon-rotate bg-danger flex-shrink-0">
                      <span className="d-flex align-items-center">
                        <i className="ti ti-stairs-up text-white fs-16" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <p className="fw-medium text-truncate mb-1">
                        No of Lost Leads
                      </p>
                      <h5>30</h5>
                    </div>
                  </div>
                  <div className="progress progress-xs mb-2">
                    <div
                      className="progress-bar bg-pink"
                      role="progressbar"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <p className="fw-medium fs-13 mb-0">
                    <span className="text-success fs-12">
                      <i className="ti ti-arrow-wave-right-up me-1" />
                      +55%{" "}
                    </span>{" "}
                    from last week
                  </p>
                  <span className="position-absolute top-0 end-0">
                    <ImageWithBasePath src="assets/img/bg/card-bg-04.png" alt="Img" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card position-relative">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar avatar-md br-10 icon-rotate bg-purple flex-shrink-0">
                      <span className="d-flex align-items-center">
                        <i className="ti ti-users-group text-white fs-16" />
                      </span>
                    </div>
                    <div className="ms-3">
                      <p className="fw-medium text-truncate mb-1">
                        No of Total Customers
                      </p>
                      <h5>9895</h5>
                    </div>
                  </div>
                  <div className="progress progress-xs mb-2">
                    <div
                      className="progress-bar bg-purple"
                      role="progressbar"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <p className="fw-medium fs-13 mb-0">
                    <span className="text-success fs-12">
                      <i className="ti ti-arrow-wave-right-up me-1" />
                      +55%{" "}
                    </span>{" "}
                    from last week
                  </p>
                  <span className="position-absolute top-0 end-0">
                    <ImageWithBasePath src="assets/img/bg/card-bg-04.png" alt="Img" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Pipeline Stages</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        2023 - 2024
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2023 - 2024
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2022 - 2023
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            2021 - 2023
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="row g-2 justify-content-center mb-3">
                    <div className="col-md col-sm-4 col-6">
                      <div className="border rounded p-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled text-primary" />
                          Contacted
                        </p>
                        <h6>50000</h6>
                      </div>
                    </div>
                    <div className="col-md col-sm-4 col-6">
                      <div className="border rounded p-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled text-primary" />
                          Oppurtunity
                        </p>
                        <h6>25985</h6>
                      </div>
                    </div>
                    <div className="col-md col-sm-4 col-6">
                      <div className="border rounded p-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled text-primary" />
                          Not Contacted
                        </p>
                        <h6>12566</h6>
                      </div>
                    </div>
                    <div className="col-md col-sm-4 col-6">
                      <div className="border rounded p-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled text-primary" />
                          Closed
                        </p>
                        <h6>8965</h6>
                      </div>
                    </div>
                    <div className="col-md col-sm-4 col-6">
                      <div className="border rounded p-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled text-primary" />
                          Lost
                        </p>
                        <h6>2452</h6>
                      </div>
                    </div>
                  </div>
                  <ReactApexChart
                    id="revenue-income"
                    options={revenue_income}
                    series={revenue_income.series}
                    type="bar"
                    height={230}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>New Leads</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        This Week
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            This Week
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
                <div className="card-body pb-0">
                  <ReactApexChart
                    id="heat_chart"
                    options={heat_chart}
                    series={heat_chart.series}
                    type="heatmap"
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Lost Leads By Reason</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border-0 dropdown-toggle btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sales Pipeline
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
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
                            This Week
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Week
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body py-0">
                  <div>
                    <ReactApexChart
                      id="leads_stage"
                      options={leads_stage}
                      series={leads_stage.series}
                      type="bar"
                      height={355}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Leads By Companies</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        This Week
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
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
                            This Week
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Week
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
                          <Link
                            to="#"
                            className="avatar avatar-md rounded-circle bg-gray-100 flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/company/company-24.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1">Pitch</h6>
                            <p className="text-truncate">Value : $45,985</p>
                          </div>
                        </div>
                        <span className="badge badge-purple d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" /> Not Contacted
                        </span>
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-md rounded-circle bg-gray-100 flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/company/company-25.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1">Initech</h6>
                            <p className="text-truncate">Value : $21,145</p>
                          </div>
                        </div>
                        <span className="badge badge-success d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Closed
                        </span>
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-md rounded-circle bg-gray-100 flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/company/company-26.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1">Umbrella Corp</h6>
                            <p className="text-truncate">Value : $15,685</p>
                          </div>
                        </div>
                        <span className="badge badge-secondary d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Contacted
                        </span>
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-md rounded-circle bg-gray-100 flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/company/company-27.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1">Capital Partners</h6>
                            <p className="text-truncate">Value : $12,105</p>
                          </div>
                        </div>
                        <span className="badge badge-secondary d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Contacted
                        </span>
                      </div>
                    </div>
                    <div className="border border-dashed bg-transparent-light rounded p-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-md rounded-circle bg-gray-100 flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/company/company-28.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1">Massive Dynamic</h6>
                            <p className="text-truncate">Value : $2,546</p>
                          </div>
                        </div>
                        <span className="badge badge-danger d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Lost
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Leads by Source</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-calendar me-1" />
                        This Week
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
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
                            This Week
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Week
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <ReactApexChart
                    id="donut-chart-2"
                    options={donutchart2}
                    series={donutchart2.series}
                    type="donut"
                    height={185}
                  />
                  <div>
                    <h6 className="mb-3">Status</h6>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="f-13 mb-0">
                        <i className="ti ti-circle-filled text-secondary me-1" />
                        Google
                      </p>
                      <p className="f-13 fw-medium text-gray-9">40%</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="f-13 mb-0">
                        <i className="ti ti-circle-filled text-warning me-1" />
                        Paid
                      </p>
                      <p className="f-13 fw-medium text-gray-9">35%</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="f-13 mb-0">
                        <i className="ti ti-circle-filled text-pink me-1" />
                        Campaigns
                      </p>
                      <p className="f-13 fw-medium text-gray-9">15%</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="f-13 mb-0">
                        <i className="ti ti-circle-filled text-purple me-1" />
                        Referals
                      </p>
                      <p className="f-13 fw-medium text-gray-9">10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Recent Follow Up</h5>
                    <div>
                      <Link to="#" className="btn btn-light btn-sm px-3">
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
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-mail-bolt fs-16" />
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
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-phone-x fs-16" />
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
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-mail-bolt fs-16" />
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
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-45.jpg"
                          className="rounded-circle border border-2"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fs-14 fw-medium text-truncate mb-1">
                          <Link to="#">Doglas Martini</Link>
                        </h6>
                        <p className="fs-13">Team Lead</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
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
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Recent Activities</h5>
                    <div>
                      <Link to="activity.html" className="btn btn-sm btn-light px-3">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body schedule-timeline activity-timeline">
                  <div className="d-flex align-items-start">
                    <div className="avatar avatar-md avatar-rounded bg-success flex-shrink-0">
                      <i className="ti ti-phone fs-20" />
                    </div>
                    <div className="flex-fill ps-3 pb-4 timeline-flow">
                      <p className="fw-medium text-gray-9 mb-1">
                        <Link to="activity.html">
                          Drain responded to your appointment schedule question.
                        </Link>
                      </p>
                      <span>09:25 PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="avatar avatar-md avatar-rounded bg-info flex-shrink-0">
                      <i className="ti ti-message-circle-2 fs-20" />
                    </div>
                    <div className="flex-fill ps-3 pb-4 timeline-flow">
                      <p className="fw-medium text-gray-9 mb-1">
                        <Link to="activity.html">You sent 1 Message to the James.</Link>
                      </p>
                      <span>10:25 PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="avatar avatar-md avatar-rounded bg-success flex-shrink-0">
                      <i className="ti ti-phone fs-20" />
                    </div>
                    <div className="flex-fill ps-3 pb-4 timeline-flow">
                      <p className="fw-medium text-gray-9 mb-1">
                        <Link to="activity.html">
                          Denwar responded to your appointment on 25 Jan 2025, 08:15
                          PM
                        </Link>
                      </p>
                      <span>09:25 PM</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="avatar avatar-md avatar-rounded bg-purple flex-shrink-0">
                      <i className="ti ti-user-circle fs-20" />
                    </div>
                    <div className="flex-fill ps-3 timeline-flow">
                      <p className="fw-medium text-gray-9 mb-1">
                        <Link
                          to="activity.html"
                          className="d-flex align-items-center"
                        >
                          Meeting With{" "}
                          <ImageWithBasePath
                            src="assets/img/users/user-58.jpg"
                            className="avatar avatar-sm rounded-circle mx-2"
                            alt="Img"
                          />
                          Abraham
                        </Link>
                      </p>
                      <span>09:25 PM</span>
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
                      <Link to="#" className="btn btn-light btn-sm px-3">
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
          </div>
          <div className="row">
            <div className="col-xl-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Top Countries</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border-0 dropdown-toggle btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Referrals
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Referrals
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Sales Pipeline
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-xxl-5 col-sm-6">
                      <div className="pe-3 border-end">
                        <div className="d-flex align-items-center mb-4">
                          <span className="me-2">
                            <i className="ti ti-point-filled text-primary fs-16" />
                          </span>
                          <Link
                            to="countries.html"
                            className="avatar rounded-circle flex-shrink-0 border border-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/payment-gateway/country-03.svg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-medium text-truncate mb-1">
                              <Link to="countries.html">Singapore</Link>
                            </h6>
                            <span className="fs-13 text-truncate">Leads : 236</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                          <span className="me-2">
                            <i className="ti ti-point-filled text-secondary fs-16" />
                          </span>
                          <Link
                            to="countries.html"
                            className="avatar rounded-circle flex-shrink-0 border border-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/payment-gateway/country-04.svg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-medium text-truncate mb-1">
                              <Link to="countries.html">France</Link>
                            </h6>
                            <span className="fs-13 text-truncate">Leads : 589</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                          <span className="me-2">
                            <i className="ti ti-point-filled text-info fs-16" />
                          </span>
                          <Link
                            to="countries.html"
                            className="avatar rounded-circle flex-shrink-0 border border-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/payment-gateway/country-05.svg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-medium text-truncate mb-1">
                              <Link to="countries.html">Norway</Link>
                            </h6>
                            <span className="fs-13 text-truncate">Leads : 221</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                          <span className="me-2">
                            <i className="ti ti-point-filled text-danger fs-16" />
                          </span>
                          <Link
                            to="countries.html"
                            className="avatar rounded-circle flex-shrink-0 border border-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/payment-gateway/country-01.svg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-medium text-truncate mb-1">
                              <Link to="countries.html">USA</Link>
                            </h6>
                            <span className="fs-13 text-truncate">Leads : 350</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="me-2">
                            <i className="ti ti-point-filled text-warning fs-16" />
                          </span>
                          <Link
                            to="countries.html"
                            className="avatar rounded-circle flex-shrink-0 border border-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/payment-gateway/country-02.svg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-medium text-truncate mb-1">
                              <Link to="countries.html">UAE</Link>
                            </h6>
                            <span className="fs-13 text-truncate">Leads : 221</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-sm-6">
                      <ReactApexChart
                        id="donut-chart-3"
                        options={donutchart3}
                        series={donutchart3.series}
                        type="donut"
                        height={167}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h5>Recent Leads</h5>
                  <div className="d-flex align-items-center">
                    <div>
                      <Link to="leads.html" className="btn btn-sm btn-light px-3">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-nowrap dashboard-table mb-0">
                      <thead>
                        <tr>
                          <th>Lead Name</th>
                          <th>Company Name</th>
                          <th>Stage</th>
                          <th>Created Date</th>
                          <th>Lead Owner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="leads-details.html">Collins</Link>
                            </h6>
                          </td>
                          <td>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="company-details.html"
                                className="avatar border rounded-circle"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-01.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="company-details.html">
                                    BrightWave Innovations
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-secondary d-inline-flex align-items-center">
                              <i className="ti ti-point-filled me-1" />
                              Contacted
                            </span>
                          </td>
                          <td>14/01/2024</td>
                          <td>Hendry</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="leads-details.html">Konopelski</Link>
                            </h6>
                          </td>
                          <td>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="company-details.html"
                                className="avatar border rounded-circle"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-02.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="company-details.html">
                                    Stellar Dynamics
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-success d-inline-flex align-items-center">
                              <i className="ti ti-point-filled me-1" />
                              Closed
                            </span>
                          </td>
                          <td>21/01/2024</td>
                          <td>Guilory</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="leads-details.html">Adams</Link>
                            </h6>
                          </td>
                          <td>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="company-details.html"
                                className="avatar border rounded-circle"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-03.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="company-details.html">Quantum Nexus</Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-danger d-inline-flex align-items-center">
                              <i className="ti ti-point-filled me-1" />
                              Lost
                            </span>
                          </td>
                          <td>20/02/2024</td>
                          <td>Jami</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="leads-details.html">Schumm</Link>
                            </h6>
                          </td>
                          <td>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="company-details.html"
                                className="avatar border rounded-circle"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-04.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="company-details.html">
                                    EcoVision Enterprises
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-purple d-inline-flex align-items-center">
                              <i className="ti ti-point-filled me-1" />
                              Not Contacted
                            </span>
                          </td>
                          <td>15/03/2024</td>
                          <td>Theresa</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="leads-details.html">Wisozk</Link>
                            </h6>
                          </td>
                          <td>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="company-details.html"
                                className="avatar border rounded-circle"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-05.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium">
                                  <Link to="company-details.html">
                                    Aurora Technologies
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-success d-inline-flex align-items-center">
                              <i className="ti ti-point-filled me-1" />
                              Closed
                            </span>
                          </td>
                          <td>12/04/2024</td>
                          <td>Smith</td>
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
    </>

  );
};

export default LeadsDasboard;
