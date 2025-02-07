import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import ReactApexChart from "react-apexcharts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from "dayjs";
import { Chart } from "primereact/chart";
import PredefinedDateRanges from "../../../core/common/datePicker";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const DealsDashboard = () => {
  const routes = all_routes;


  const [pipeline_chart] = useState<any>({
    series: [
      {
        name: "",
        data: [1380, 1100, 990, 880, 740, 540],
      },
    ],
    chart: {
      type: 'bar',
      height: 280,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: [
      '#F26522',
      '#F37438',
      '#F5844E',
      '#F69364',
      '#F7A37A',
      '#F9B291'
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opt: { w: { globals: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      align: 'top',
    },
    xaxis: {
      categories: ['Marketing : 7,898', 'Sales : 4658', 'Email : 2898', 'Chat : 789', 'Operational : 655', 'Calls : 454'],
    },
    legend: {
      show: false,
    },
  });

  const [deals_stage] = useState<any>({
    chart: {
      height: 310,
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
        horizontal: false,
        endingShape: 'rounded'
      },
    },
    series: [{
      name: 'Income',
      data: [80, 40, 100, 20]
    }, {
      name: 'Expenses',
      data: [100, 100, 100, 100]
    }],
    xaxis: {
      categories: ['Inpipeline', 'Follow Up', 'Schedule', 'Conversion'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -15,
        style: {
          colors: '#6B7280',
          fontSize: '13px',
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

  //Attendance ChartJs
  const [CanvaData, setCanvaData] = useState({});
  const [CanvaOptions, setCanvaOptions] = useState({});
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ayg'], // Common labels for both series
      datasets: [
        {
          label: 'Email', // First series
          data: [40, 70, 20, 40, 40, 70, 40, 60],
          backgroundColor: '#2dcb73',
          borderColor: '#2dcb73',
          pointBackgroundColor: '#2dcb73',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.3,
        },
        {
          label: 'Chat', // Second series
          data: [30, 30, 90, 30, 60, 30, 60, 90],
          backgroundColor: '#4b3088',
          borderColor: '#4b3088',
          pointBackgroundColor: '#4b3088',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.4,
        },
        {
          label: 'Series 3', // Second series
          data: [70, 43, 70, 90, 30, 30, 30, 40],
          backgroundColor: '#F26522',
          borderColor: '#F26522',
          pointBackgroundColor: '#F26522',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.4,
        }
      ]
    };
    const options = {
      responsive: false,
      scales: {
        r: {
          angleLines: {
            display: true,
            color: '#e9e9e9' // Color of the radial lines
          },
          grid: {
            circular: true // Make the grid lines circular
          },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            stepSize: 30
          }
        }
      },
      plugins: {
        legend: {
          display: false // This hides the legend
        }
      }
    };

    setCanvaData(data);
    setCanvaOptions(options);
  }, []);


  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so we add 1
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${month}-${day}-${year}`;
  const defaultValue = dayjs(formattedDate);

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Deals Dashboard</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Deals Dashboard
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
            <div className="col-xl-6 d-flex">
              <div className="row flex-fill">
                <div className="col-sm-6">
                  <div className="card bg-linear-gradiant border-white border-2 overlay-bg-3 position-relative">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <div>
                          <p className="fw-medium mb-1">Total Deals</p>
                          <h5>$45,221,45</h5>
                        </div>
                        <div className="avatar avatar-md br-10 icon-rotate bg-primary">
                          <span className="d-flex align-items-center">
                            <i className="ti ti-delta text-white fs-16" />
                          </span>
                        </div>
                      </div>
                      <div className="progress progress-xs mb-2">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <p className="fw-medium fs-13">
                        <span className="text-danger fs-12">
                          <i className="ti ti-arrow-wave-right-up me-1" />
                          -4.01%{" "}
                        </span>{" "}
                        from last week
                      </p>
                    </div>
                  </div>
                  <div className="card bg-linear-gradiant border-white border-2 overlay-bg-3 position-relative">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <div>
                          <p className="fw-medium mb-1">Deal Value</p>
                          <h5>$12,545,68</h5>
                        </div>
                        <div className="avatar avatar-md br-10 icon-rotate bg-secondary">
                          <span className="d-flex align-items-center">
                            <i className="ti ti-currency text-white fs-16" />
                          </span>
                        </div>
                      </div>
                      <div className="progress progress-xs mb-2">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <p className="fw-medium fs-13">
                        <span className="text-success fs-12">
                          <i className="ti ti-arrow-wave-right-up me-1" />
                          +20.01%{" "}
                        </span>{" "}
                        from last week
                      </p>
                    </div>
                  </div>
                  <div className="card bg-linear-gradiant border-white border-2 overlay-bg-3 position-relative">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <div>
                          <p className="fw-medium mb-1">Revenue this month </p>
                          <h5>$46,548,48</h5>
                        </div>
                        <div className="avatar avatar-md br-10 icon-rotate bg-pink">
                          <span className="d-flex align-items-center">
                            <i className="ti ti-stairs-up text-white fs-16" />
                          </span>
                        </div>
                      </div>
                      <div className="progress progress-xs mb-2">
                        <div
                          className="progress-bar bg-pink"
                          role="progressbar"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <p className="fw-medium fs-13">
                        <span className="text-success fs-12">
                          <i className="ti ti-arrow-wave-right-up me-1" />
                          +55%{" "}
                        </span>{" "}
                        from last week
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card bg-linear-gradiant border-white border-2 overlay-bg-3 position-relative">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <div>
                          <p className="fw-medium mb-1">Total Customers</p>
                          <h5>9895</h5>
                        </div>
                        <div className="avatar avatar-md br-10 icon-rotate bg-purple">
                          <span className="d-flex align-items-center">
                            <i className="ti ti-users-group text-white fs-16" />
                          </span>
                        </div>
                      </div>
                      <div className="progress progress-xs mb-2">
                        <div
                          className="progress-bar bg-purple"
                          role="progressbar"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <p className="fw-medium fs-13">
                        <span className="text-success fs-12">
                          <i className="ti ti-arrow-wave-right-up me-1" />
                          +55%{" "}
                        </span>{" "}
                        from last week
                      </p>
                    </div>
                  </div>
                  <div className="card bg-linear-gradiant border-white border-2 overlay-bg-3 position-relative">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <div>
                          <p className="fw-medium mb-1">Conversion Rate</p>
                          <h5>51.96%</h5>
                        </div>
                        <div className="avatar avatar-md br-10 icon-rotate bg-info">
                          <span className="d-flex align-items-center">
                            <i className="ti ti-swipe text-white fs-16" />
                          </span>
                        </div>
                      </div>
                      <div className="progress progress-xs mb-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <p className="fw-medium fs-13">
                        <span className="text-danger fs-12">
                          <i className="ti ti-arrow-wave-right-up me-1" />
                          -6.01%{" "}
                        </span>{" "}
                        from last week
                      </p>
                    </div>
                  </div>
                  <div className="card bg-linear-gradiant border-white border-2 overlay-bg-3 position-relative">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <div>
                          <p className="fw-medium mb-1">Active Customers </p>
                          <h5>8987</h5>
                        </div>
                        <div className="avatar avatar-md br-10 icon-rotate bg-warning">
                          <span className="d-flex align-items-center">
                            <i className="ti ti-star text-white fs-16" />
                          </span>
                        </div>
                      </div>
                      <div className="progress progress-xs mb-2">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "40%" }}
                        />
                      </div>
                      <p className="fw-medium fs-13">
                        <span className="text-danger fs-12">
                          <i className="ti ti-arrow-wave-right-up me-1" />
                          -3.22%{" "}
                        </span>{" "}
                        from last week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>Pipeline Stages</h5>
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
                    id="pipeline_chart"
                    options={pipeline_chart}
                    series={pipeline_chart.series}
                    type="bar"
                    height={280}
                  />
                  <div>
                    <h6 className="mb-3">Leads Values By Stages</h6>
                    <div className="row g-2 justify-content-center">
                      <div className="col-md col-sm-4 col-6">
                        <div className="border rounded text-center p-2">
                          <p className="mb-1">
                            <i className="ti ti-point-filled text-primary" />
                            Marketing
                          </p>
                          <h6>$5,221,45</h6>
                        </div>
                      </div>
                      <div className="col-md col-sm-4 col-6">
                        <div className="border rounded text-center p-2">
                          <p className="mb-1">
                            <i className="ti ti-point-filled text-primary" />
                            Sales
                          </p>
                          <h6>$30,424</h6>
                        </div>
                      </div>
                      <div className="col-md col-sm-4 col-6">
                        <div className="border rounded text-center p-2">
                          <p className="mb-1">
                            <i className="ti ti-point-filled text-primary" />
                            Email
                          </p>
                          <h6>$21,135</h6>
                        </div>
                      </div>
                      <div className="col-md col-sm-4 col-6">
                        <div className="border rounded text-center p-2">
                          <p className="mb-1">
                            <i className="ti ti-point-filled text-primary" />
                            Chat
                          </p>
                          <h6>$15,235</h6>
                        </div>
                      </div>
                      <div className="col-md col-sm-4 col-6">
                        <div className="border rounded text-center p-2">
                          <p className="mb-1">
                            <i className="ti ti-point-filled text-primary" />
                            Operational
                          </p>
                          <h6>$10,557</h6>
                        </div>
                      </div>
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
                    <h5>Deals by Stage</h5>
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
                <div className="card-body pb-0">
                  <div>
                    <div className="d-flex align-items-center">
                      <h3 className="me-2">98%</h3>
                      <span className="badge badge-outline-success bg-success-transparent rounded-pill me-1">
                        12%
                      </span>
                      <span>vs last years</span>
                    </div>
                    <ReactApexChart
                      id="revenue-income"
                      options={deals_stage}
                      series={deals_stage.series}
                      type="bar"
                      height={310}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Deals By Companies</h5>
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
                            <p className="text-truncate">
                              Closing Deal date 05 April, 2025
                            </p>
                          </div>
                        </div>
                        <div>
                          <h6>$3655</h6>
                        </div>
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
                            <p className="text-truncate">
                              Closing Deal date 05 May, 2025
                            </p>
                          </div>
                        </div>
                        <div>
                          <h6>$2185</h6>
                        </div>
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
                            <p className="text-truncate">
                              Closing Deal date 29 April, 2025
                            </p>
                          </div>
                        </div>
                        <div>
                          <h6>$1583</h6>
                        </div>
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
                            <p className="text-truncate">
                              Closing Deal date 23 Mar, 2025
                            </p>
                          </div>
                        </div>
                        <div>
                          <h6>$6584</h6>
                        </div>
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
                            <p className="text-truncate">
                              Closing Deal date 23 Feb, 2025
                            </p>
                          </div>
                        </div>
                        <div>
                          <h6>$2153</h6>
                        </div>
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
                    <h5>Top Deals</h5>
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
                  <div className="text-center">
                    <Chart type="radar" data={CanvaData} options={CanvaData} className="mx-auto mb-3 canvachart" />
                  </div>
                  <div>
                    <h6 className="mb-3">Status</h6>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="f-13 mb-0">
                        <i className="ti ti-circle-filled text-primary me-1" />
                        Marketing
                      </p>
                      <p className="f-13 fw-medium text-gray-9">$5,69,877</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="f-13 mb-0">
                        <i className="ti ti-circle-filled text-purple me-1" />
                        Chat
                      </p>
                      <p className="f-13 fw-medium text-gray-9">$4,84,575</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="f-13 mb-0">
                        <i className="ti ti-circle-filled text-success me-1" />
                        Email
                      </p>
                      <p className="f-13 fw-medium text-gray-9">$1,84,575</p>
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
                    <h5>Deals By Country</h5>
                    <div>
                      <Link
                        to="countries.html"
                        className="btn btn-light btn-sm px-3"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body py-2">
                  <div className="table-responsive pt-1">
                    <table className="table table-nowrap table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center mb-2">
                              <Link
                                to="countries.html"
                                className="avatar rounded-circle border border-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/country-01.svg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium mb-1">
                                  <Link to="countries.html">USA</Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  Deals : 350
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center mb-2">
                              <span className="country-chart-1" data-width="100%">
                                0,3,0,2,1,3,1
                              </span>
                            </div>
                          </td>
                          <td className="px-0 text-end">
                            <div className="mb-2">
                              <p className="fs-13 mb-1">Total Value</p>
                              <h6 className="fw-medium">$1065.00</h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center mb-2">
                              <Link
                                to="countries.html"
                                className="avatar rounded-circle border border-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/country-02.svg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium mb-1">
                                  <Link to="countries.html">UAE</Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  Deals : 221
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center mb-2">
                              <span className="country-chart-1" data-width="100%">
                                0,3,0,2,1,3,1
                              </span>
                            </div>
                          </td>
                          <td className="px-0 text-end">
                            <div className="mb-2">
                              <p className="fs-13 mb-1">Total Value</p>
                              <h6 className="fw-medium">$966.00</h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center mb-2">
                              <Link
                                to="countries.html"
                                className="avatar rounded-circle border border-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/country-03.svg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium mb-1">
                                  <Link to="countries.html">Singapore</Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  Deals : 236
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center mb-2">
                              <span className="country-chart-2" data-width="100%">
                                0,3,0,2,1,3,1
                              </span>
                            </div>
                          </td>
                          <td className="px-0 text-end">
                            <div className="mb-2">
                              <p className="fs-13 mb-1">Total Value</p>
                              <h6 className="fw-medium">$959.00</h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center mb-2">
                              <Link
                                to="countries.html"
                                className="avatar rounded-circle border border-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/country-04.svg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium mb-1">
                                  <Link to="countries.html">France</Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  Deals : 589
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center mb-2">
                              <span className="country-chart-1" data-width="100%">
                                0,3,0,2,1,3,1
                              </span>
                            </div>
                          </td>
                          <td className="px-0 text-end">
                            <div className="mb-2">
                              <p className="fs-13 mb-1">Total Value</p>
                              <h6 className="fw-medium">$879.00</h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <Link
                                to="countries.html"
                                className="avatar rounded-circle border border-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/country-05.svg"
                                  className="img-fluid rounded-circle"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium mb-1">
                                  <Link to="countries.html">Norway</Link>
                                </h6>
                                <span className="fs-13 d-inline-flex align-items-center">
                                  Deals : 221
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              <span className="country-chart-2" data-width="100%">
                                0,3,0,2,1,3,1
                              </span>
                            </div>
                          </td>
                          <td className="px-0 text-end">
                            <p className="fs-13 mb-1">Total Value</p>
                            <h6 className="fw-medium">$632.00</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <h5>Won Deals Stage</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="btn btn-white border-0 dropdown-toggle btn-sm d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        Sales Pipeline
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
                  <div className="text-center mb-4">
                    <p className="mb-1 fw-medium">Stages Won This Year</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <h3 className="me-2">$45,899,79</h3>
                      <span className="badge badge-soft-danger border-danger border rounded-pill me-1">
                        $45,899,79
                      </span>
                    </div>
                  </div>
                  <div className="stage-chart-main">
                    <div className="deal-stage-chart">
                      <div className="text-center d-flex align-items-center justify-content-center flex-column bg-secondary rounded-circle chart-stage-1">
                        <span className="d-block text-white mb-1">Conversion</span>
                        <h6 className="text-white">48%</h6>
                      </div>
                      <div className="text-center d-flex align-items-center justify-content-center flex-column bg-danger rounded-circle chart-stage-2">
                        <span className="d-block text-white mb-1">Calls</span>
                        <h6 className="text-white">24%</h6>
                      </div>
                      <div className="text-center d-flex align-items-center justify-content-center flex-column bg-warning rounded-circle chart-stage-3">
                        <span className="d-block text-white mb-1">Email</span>
                        <h6 className="text-white">39%</h6>
                      </div>
                      <div className="text-center d-flex align-items-center justify-content-center flex-column bg-success rounded-circle chart-stage-4">
                        <span className="d-block text-white mb-1">Chats</span>
                        <h6 className="text-white">20%</h6>
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
                        <i className="ti ti-phone fs-16" />
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
                      <Link to="#" className="btn btn-light btn-icon btn-sm">
                        <i className="ti ti-brand-hipchat fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h5>Recent Deals</h5>
                  <div className="d-flex align-items-center">
                    <div>
                      <Link to="deals.html" className="btn btn-sm btn-light px-3">
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
                          <th>Deal Name</th>
                          <th>Stage</th>
                          <th>Deal Value</th>
                          <th>Owner</th>
                          <th>Closed Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="deals-details.html">Collins</Link>
                            </h6>
                          </td>
                          <td>Quality To Buy</td>
                          <td>$4,50,000</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <ImageWithBasePath src="assets/img/users/user-32.jpg" alt="Img" />
                              </Link>
                              <h6 className="fw-medium">
                                <Link to="#">Anthony Lewis</Link>
                              </h6>
                            </div>
                          </td>
                          <td>14/01/2024</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="deals-details.html">Konopelski</Link>
                            </h6>
                          </td>
                          <td>Proposal Made</td>
                          <td>$3,15,000</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <ImageWithBasePath src="assets/img/users/user-09.jpg" alt="Img" />
                              </Link>
                              <h6 className="fw-medium">
                                <Link to="#">Brian Villalobos</Link>
                              </h6>
                            </div>
                          </td>
                          <td>21/01/2024</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="deals-details.html">Adams</Link>
                            </h6>
                          </td>
                          <td>Contact Made</td>
                          <td>$8,40,000</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                              </Link>
                              <h6 className="fw-medium">
                                <Link to="#">Harvey Smith</Link>
                              </h6>
                            </div>
                          </td>
                          <td>20/02/2024</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="deals-details.html">Schumm</Link>
                            </h6>
                          </td>
                          <td>Quality To Buy</td>
                          <td>$6,10,000</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <ImageWithBasePath src="assets/img/users/user-33.jpg" alt="Img" />
                              </Link>
                              <h6 className="fw-medium">
                                <Link to="#">Stephan Peralt</Link>
                              </h6>
                            </div>
                          </td>
                          <td>15/03/2024</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="fw-medium">
                              <Link to="deals-details.html">Wisozk</Link>
                            </h6>
                          </td>
                          <td>Presentation</td>
                          <td>$4,70,000</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <ImageWithBasePath src="assets/img/users/user-34.jpg" alt="Img" />
                              </Link>
                              <h6 className="fw-medium">
                                <Link to="#">Doglas Martini</Link>
                              </h6>
                            </div>
                          </td>
                          <td>12/04/2024</td>
                        </tr>
                      </tbody>
                    </table>
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
                      <i className="ti ti-phone-filled fs-16" />
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
                      <i className="ti ti-message-circle-2-filled fs-16" />
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
                      <i className="ti ti-phone-filled fs-16" />
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
                      <i className="ti ti-user-circle fs-16" />
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

export default DealsDashboard;
