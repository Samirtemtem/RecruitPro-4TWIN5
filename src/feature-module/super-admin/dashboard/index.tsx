import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import ReactApexChart from "react-apexcharts";

const SuperAdminDashboard = () => {
    const routes = all_routes
    const [CompanyChart] = React.useState<any>({
        chart: {
            height: 240,
            type: 'bar',
            toolbar: {
              show: false,
            }
          },
          colors: ['#212529'],
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
              borderRadius: 10, 
              borderRadiusWhenStacked: 'all',
              horizontal: false,
              endingShape: 'rounded',
              colors: {
                backgroundBarColors: ['#f3f4f5'], // Background color for bars
                backgroundBarOpacity: 0.5,
                hover: {
                  enabled: true,
                  borderColor: '#F26522', // Color when hovering over the bar
                }
              }
            },
          },
          series: [{
            name: 'Company',
            data: [40, 60, 20, 80, 60, 60, 60]
          }],
          xaxis: {
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
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
              show: false 
            }
          },
          grid: {
            borderColor: '#E5E7EB',
            strokeDashArray: 5,
            padding: {
              left: -8,
            },
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
      })
      const [RevenueChart] = React.useState<any>({
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
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
              formatter: function (value:any) {
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
              formatter: function (val:any) {
                return  val / 10 + " k"
              }
            }
          },
          fill: {
            opacity: 1
          },
      })
      const [PlanChart] = React.useState<any>({
        chart: {
            height: 240,
            type: 'donut',
            toolbar: {
              show: false,
            }
          },
          colors: ['#FFC107', '#1B84FF', '#F26522'],
          series: [20, 60, 20],
          labels: ['Enterprise', 'Premium', 'Basic'],
          plotOptions: {
            pie: {
              donut: {
                size: '50%',
                labels: {
                  show: false
                },
                borderRadius: 30
              }
            }
          },
          stroke: {
            lineCap: 'round',
            show: true,
            width: 0,    // Space between donut sections
            colors: '#fff'
          },
          dataLabels: {
            enabled: false
          },
          legend: { show: false },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                height: 180,
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
      })
      const [ApexChart] = React.useState<any>({
        series: [{
            name: "Messages",
            data: [5,10,7,5,10,7,5]
          }],
    
          chart: {
            type: 'bar',
            width: 70,
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
          colors: ["#FF6F28"],
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
      })
      const [ApexChart2] = React.useState<any>({
        series: [{
            name: "Messages",
            data: [5,3,7,6,3,10,5]
          }],
    
          chart: {
            type: 'bar',
            width: 70,
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
          colors: ["#4B3088"],
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
      })
      const [ApexChart3] = React.useState<any>({
        series: [{
            name: "Messages",
            data: [8,10,10,8,8,10,8]
          }],
    
          chart: {
            type: 'bar',
            width: 70,
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
          colors: ["#177DBC"],
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
      })
      const [ApexChart4] = React.useState<any>({
        series: [{
            name: "Messages",
            data: [5,10,7,5,10,7,5]
          }],
    
          chart: {
            type: 'bar',
            width: 70,
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
          colors: ["#2DCB73"],
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
      })
  return (
    <div className="page-wrapper">
  <div className="content">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Dashboard</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to={routes.adminDashboard}>
                <i className="ti ti-smart-home" />
              </Link>
            </li>
            <li className="breadcrumb-item">Superadmin</li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
        <div className="input-icon mb-2 position-relative">
          <span className="input-icon-addon">
            <i className="ti ti-calendar text-gray-9" />
          </span>
          <input
            type="text"
            className="form-control date-range bookingrange"
            placeholder="dd/mm/yyyy - dd/mm/yyyy"
          />
        </div>
        <div className="ms-2 head-icons">
          <CollapseHeader/>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Welcome Wrap */}
    <div className="welcome-wrap mb-4">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <div className="mb-3">
          <h2 className="mb-1 text-white">Welcome Back, Adrian</h2>
          <p className="text-light">14 New Companies Subscribed Today !!!</p>
        </div>
        <div className="d-flex align-items-center flex-wrap mb-1">
          <Link to={routes.superAdminCompanies} className="btn btn-dark btn-md me-2 mb-2">
            Companies
          </Link>
          <Link to={routes.superAdminPackages} className="btn btn-light btn-md mb-2">
            All Packages
          </Link>
        </div>
      </div>
      <div className="welcome-bg">
        <ImageWithBasePath
          src="assets/img/bg/welcome-bg-02.svg"
          alt="img"
          className="welcome-bg-01"
        />
        <ImageWithBasePath
          src="assets/img/bg/welcome-bg-03.svg"
          alt="img"
          className="welcome-bg-02"
        />
        <ImageWithBasePath
          src="assets/img/bg/welcome-bg-01.svg"
          alt="img"
          className="welcome-bg-03"
        />
      </div>
    </div>
    {/* /Welcome Wrap */}
    <div className="row">
      {/* Total Companies */}
      <div className="col-xl-3 col-sm-6 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <span className="avatar avatar-md bg-dark mb-3">
                <i className="ti ti-building fs-16" />
              </span>
              <span className="badge bg-success fw-normal mb-3">+19.01%</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="mb-1">5468</h2>
                <p className="fs-13">Total Companies</p>
              </div>
              <ReactApexChart
                    options={ApexChart}
                    series={ApexChart.series}
                    type="bar"
                    width={70}
                  />
            </div>
          </div>
        </div>
      </div>
      {/* /Total Companies */}
      {/* Active Companies */}
      <div className="col-xl-3 col-sm-6 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <span className="avatar avatar-md bg-dark mb-3">
                <i className="ti ti-carousel-vertical fs-16" />
              </span>
              <span className="badge bg-danger fw-normal mb-3">-12%</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="mb-1">4598</h2>
                <p className="fs-13">Active Companies</p>
              </div>
              <ReactApexChart
                    options={ApexChart2}
                    series={ApexChart2.series}
                    type="bar"
                    width={70}
                  />
            </div>
          </div>
        </div>
      </div>
      {/* /Active Companies */}
      {/* Total Subscribers */}
      <div className="col-xl-3 col-sm-6 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <span className="avatar avatar-md bg-dark mb-3">
                <i className="ti ti-chalkboard-off fs-16" />
              </span>
              <span className="badge bg-success fw-normal mb-3">+6%</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="mb-1">3698</h2>
                <p className="fs-13">Total Subscribers</p>
              </div>
              <ReactApexChart
                    options={ApexChart3}
                    series={ApexChart3.series}
                    type="bar"
                    width={70}
                  />
            </div>
          </div>
        </div>
      </div>
      {/* /Total Subscribers */}
      {/* Total Earnings */}
      <div className="col-xl-3 col-sm-6 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <span className="avatar avatar-md bg-dark mb-3">
                <i className="ti ti-businessplan fs-16" />
              </span>
              <span className="badge bg-danger fw-normal mb-3">-16%</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="mb-1">$89,878,58</h2>
                <p className="fs-13">Total Earnings</p>
              </div>
              <ReactApexChart
                    options={ApexChart4}
                    series={ApexChart4.series}
                    type="bar"
                    width={70}
                  />
            </div>
          </div>
        </div>
      </div>
      {/* /Total Earnings */}
    </div>
    <div className="row">
      {/* Companies */}
      <div className="col-xxl-3 col-lg-6 d-flex">
        <div className="card flex-fill">
          <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="mb-2">Companies</h5>
            <div className="dropdown mb-2">
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
                    Today
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
          <ReactApexChart
                    id="company-chart"
                    options={CompanyChart}
                    series={CompanyChart.series}
                    type="bar"
                    height={240}
                  />
            <p className="f-13 d-inline-flex align-items-center">
              <span className="badge badge-success me-1">+6%</span> 5 Companies
              from last month
            </p>
          </div>
        </div>
      </div>
      {/* /Companies */}
      {/* Revenue */}
      <div className="col-lg-6 d-flex">
        <div className="card flex-fill">
          <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="mb-2">Revenue</h5>
            <div className="dropdown mb-2">
              <Link
                to="#"
                className="btn btn-white border btn-sm d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-calendar me-1" />
                2025
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
                    2025
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
              </ul>
            </div>
          </div>
          <div className="card-body pb-0">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="mb-1">
                <h5 className="mb-1">$45787</h5>
                <p>
                  <span className="text-success fw-bold">+40%</span> increased
                  from last year
                </p>
              </div>
              <p className="fs-13 text-gray-9 d-flex align-items-center mb-1">
                <i className="ti ti-circle-filled me-1 fs-6 text-primary" />
                Revenue
              </p>
            </div>
            <ReactApexChart
                    id="revenue-income"
                    options={RevenueChart}
                    series={RevenueChart.series}
                    type="bar"
                    height={230}
                  />
          </div>
        </div>
      </div>
      {/* /Revenue */}
      {/* Top Plans */}
      <div className="col-xxl-3 col-xl-12 d-flex">
        <div className="card flex-fill">
          <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="mb-2">Top Plans</h5>
            <div className="dropdown mb-2">
              <Link
                to="#"
                className="btn btn-white border btn-sm d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-calendar me-1" />
                This Month
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
                    Today
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
          <ReactApexChart
                    options={PlanChart}
                    series={PlanChart.series}
                    type="donut"
                    height={240}
                  />
            <div className="d-flex align-items-center justify-content-between mb-2">
              <p className="f-13 mb-0">
                <i className="ti ti-circle-filled text-primary me-1" />
                Basic{" "}
              </p>
              <p className="f-13 fw-medium text-gray-9">60%</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <p className="f-13 mb-0">
                <i className="ti ti-circle-filled text-warning me-1" />
                Premium
              </p>
              <p className="f-13 fw-medium text-gray-9">20%</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-0">
              <p className="f-13 mb-0">
                <i className="ti ti-circle-filled text-info me-1" />
                Enterprise
              </p>
              <p className="f-13 fw-medium text-gray-9">20%</p>
            </div>
          </div>
        </div>
      </div>
      {/* /Top Plans */}
    </div>
    <div className="row">
      {/* Recent Transactions */}
      <div className="col-xxl-4 col-xl-12 d-flex">
        <div className="card flex-fill">
          <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="mb-2">Recent Transactions</h5>
            <Link
              to={routes.superAdminPurchaseTransaction}
              className="btn btn-light btn-md mb-2"
            >
              View All
            </Link>
          </div>
          <div className="card-body pb-2">
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-02.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Stellar Dynamics</Link>
                  </h6>
                  <p className="fs-13 d-inline-flex align-items-center">
                    <span className="text-info">#12457</span>
                    <i className="ti ti-circle-filled fs-4 text-primary mx-1" />
                    14 Jan 2025
                  </p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <h6 className="mb-1">+$245</h6>
                <p className="fs-13">Basic (Monthly)</p>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-03.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Quantum Nexus</Link>
                  </h6>
                  <p className="fs-13 d-inline-flex align-items-center">
                    <span className="text-info">#65974</span>
                    <i className="ti ti-circle-filled fs-4 text-primary mx-1" />
                    14 Jan 2025
                  </p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <h6 className="mb-1">+$395</h6>
                <p className="fs-13">Enterprise (Yearly)</p>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-05.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Aurora Technologies</Link>
                  </h6>
                  <p className="fs-13 d-inline-flex align-items-center">
                    <span className="text-info">#22457</span>
                    <i className="ti ti-circle-filled fs-4 text-primary mx-1" />
                    14 Jan 2025
                  </p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <h6 className="mb-1">+$145</h6>
                <p className="fs-13">Advanced (Monthly)</p>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-07.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">TerraFusion Energy</Link>
                  </h6>
                  <p className="fs-13 d-inline-flex align-items-center">
                    <span className="text-info">#43412</span>
                    <i className="ti ti-circle-filled fs-4 text-primary mx-1" />
                    14 Jan 2025
                  </p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <h6 className="mb-1">+$145</h6>
                <p className="fs-13">Enterprise (Monthly)</p>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-1">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-08.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Epicurean Delights</Link>
                  </h6>
                  <p className="fs-13 d-inline-flex align-items-center">
                    <span className="text-info">#43567</span>
                    <i className="ti ti-circle-filled fs-4 text-primary mx-1" />
                    14 Jan 2025
                  </p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <h6 className="mb-1">+$977</h6>
                <p className="fs-13">Premium (Yearly)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Recent Transactions */}
      {/* Recently Registered */}
      <div className="col-xxl-4 col-xl-6 d-flex">
        <div className="card flex-fill">
          <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="mb-2">Recently Registered</h5>
            <Link
              to={routes.superAdminPurchaseTransaction}
              className="btn btn-light btn-md mb-2"
            >
              View All
            </Link>
          </div>
          <div className="card-body pb-2">
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/icons/company-icon-11.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Pitch</Link>
                  </h6>
                  <p className="fs-13">Basic (Monthly)</p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <p className="fs-13 mb-1">150 Users</p>
                <h6 className="fs-13 fw-normal">pitch.example.com</h6>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/icons/company-icon-12.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Initech</Link>
                  </h6>
                  <p className="fs-13">Enterprise (Yearly)</p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <p className="fs-13 mb-1">200 Users</p>
                <h6 className="fs-13 fw-normal">initech.example.com</h6>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/icons/company-icon-13.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Umbrella Corp</Link>
                  </h6>
                  <p className="fs-13">Advanced (Monthly)</p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <p className="fs-13 mb-1">129 Users</p>
                <h6 className="fs-13 fw-normal">umbcorp.example.com</h6>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/icons/company-icon-14.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Capital Partners</Link>
                  </h6>
                  <p className="fs-13">Enterprise (Monthly)</p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <p className="fs-13 mb-1">103 Users</p>
                <h6 className="fs-13 fw-normal">capitalpart.example.com</h6>
              </div>
            </div>
            <div className="d-sm-flex justify-content-between flex-wrap mb-1">
              <div className="d-flex align-items-center mb-2">
                <Link
                  to="javscript:void(0);"
                  className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                >
                  <ImageWithBasePath
                    src="assets/img/icons/company-icon-15.svg"
                    className="img-fluid w-auto h-auto"
                    alt="img"
                  />
                </Link>
                <div className="ms-2 flex-fill">
                  <h6 className="fs-medium text-truncate mb-1">
                    <Link to="javscript:void(0);">Massive Dynamic</Link>
                  </h6>
                  <p className="fs-13">Premium (Yearly)</p>
                </div>
              </div>
              <div className="text-sm-end mb-2">
                <p className="fs-13 mb-1">108 Users</p>
                <h6 className="fs-13 fw-normal">msdynamic.example.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Recent Registered */}
      {/* Recent Plan Expired */}
      <div className="col-xxl-4 col-xl-6 d-flex">
        <div className="card flex-fill">
          <div className="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="mb-2">Recent Plan Expired</h5>
            <div className="dropdown mb-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white border btn-sm d-inline-flex align-items-center fs-13"
                data-bs-toggle="dropdown"
              >
                Expired
              </Link>
              <div className="dropdown-menu dropdown-menu-end p-3">
                <ul className="nav d-block">
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item d-block rounded-1"
                      data-bs-toggle="tab"
                      data-bs-target="#expired"
                    >
                      Expired
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item d-block rounded-1"
                      data-bs-toggle="tab"
                      data-bs-target="#request"
                    >
                      Request
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body pb-2">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="expired">
                <div className="d-sm-flex justify-content-between flex-wrap mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/icons/company-icon-16.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Silicon Corp</Link>
                      </h6>
                      <p className="fs-13">Expired : 10 Apr 2025</p>
                    </div>
                  </div>
                  <div className="text-sm-end mb-2">
                    <Link
                      to="#"
                      className="link-info text-decoration-underline d-block mb-1"
                    >
                      Send Reminder
                    </Link>
                    <p className="fs-13">Basic (Monthly)</p>
                  </div>
                </div>
                <div className="d-sm-flex justify-content-between flex-wrap mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/icons/company-icon-14.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Hubspot</Link>
                      </h6>
                      <p className="fs-13">Expired : 12 Jun 2025</p>
                    </div>
                  </div>
                  <div className="text-sm-end mb-2">
                    <Link
                      to="#"
                      className="link-info text-decoration-underline d-block mb-1"
                    >
                      Send Reminder
                    </Link>
                    <p className="fs-13">Enterprise (Yearly)</p>
                  </div>
                </div>
                <div className="d-sm-flex justify-content-between flex-wrap mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/icons/company-icon-18.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Licon Industries</Link>
                      </h6>
                      <p className="fs-13">Expired : 16 Jun 2025</p>
                    </div>
                  </div>
                  <div className="text-sm-end mb-2">
                    <Link
                      to="#"
                      className="link-info text-decoration-underline d-block mb-1"
                    >
                      Send Reminder
                    </Link>
                    <p className="fs-13">Advanced (Monthly)</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-07.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">TerraFusion Energy</Link>
                      </h6>
                      <p className="fs-13">Expired : 12 May 2025</p>
                    </div>
                  </div>
                  <div className="text-sm-end mb-2">
                    <Link
                      to="#"
                      className="link-info text-decoration-underline d-block mb-1"
                    >
                      Send Reminder
                    </Link>
                    <p className="fs-13">Enterprise (Monthly)</p>
                  </div>
                </div>
                <div className="d-sm-flex justify-content-between flex-wrap mb-1">
                  <div className="d-flex align-items-center mb-2">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-08.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Epicurean Delights</Link>
                      </h6>
                      <p className="fs-13">Expired : 15 May 2025</p>
                    </div>
                  </div>
                  <div className="text-sm-end mb-2">
                    <Link
                      to="#"
                      className="link-info text-decoration-underline d-block mb-1"
                    >
                      Send Reminder
                    </Link>
                    <p className="fs-13">Premium (Yearly)</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="request">
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center overflow-hidden">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/icons/company-icon-16.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill overflow-hidden">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Silicon Corp</Link>
                      </h6>
                      <p className="fs-13 text-info text-truncate">
                        silicon.example.com
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="link-success text-decoration-underline fs-13 fw-medium me-3"
                    >
                      Approve
                    </Link>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline fs-13 fw-medium"
                    >
                      Reject
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center overflow-hidden">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/icons/company-icon-14.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill overflow-hidden">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Hubspot</Link>
                      </h6>
                      <p className="fs-13 text-info text-truncate">
                        hubspot.example.com
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="link-success text-decoration-underline fs-13 fw-medium me-3"
                    >
                      Approve
                    </Link>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline fs-13 fw-medium"
                    >
                      Reject
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center overflow-hidden">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/icons/company-icon-18.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill overflow-hidden">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Licon Industries</Link>
                      </h6>
                      <p className="fs-13 text-info text-truncate">
                        licon.example.com
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="link-success text-decoration-underline fs-13 fw-medium me-3"
                    >
                      Approve
                    </Link>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline fs-13 fw-medium"
                    >
                      Reject
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex align-items-center overflow-hidden">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-07.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill overflow-hidden">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">TerraFusion Energy</Link>
                      </h6>
                      <p className="fs-13 text-info text-truncate">
                        fusion.example.com
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="link-success text-decoration-underline fs-13 fw-medium me-3"
                    >
                      Approve
                    </Link>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline fs-13 fw-medium"
                    >
                      Reject
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-0">
                  <div className="d-flex align-items-center overflow-hidden">
                    <Link
                      to="javscript:void(0);"
                      className="avatar avatar-md bg-gray-100 rounded-circle flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-08.svg"
                        className="img-fluid w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="ms-2 flex-fill overflow-hidden">
                      <h6 className="fs-medium text-truncate mb-1">
                        <Link to="javscript:void(0);">Epicurean Delights</Link>
                      </h6>
                      <p className="fs-13 text-info text-truncate">
                        epicuran.example.com
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="link-success text-decoration-underline fs-13 fw-medium me-3"
                    >
                      Approve
                    </Link>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline fs-13 fw-medium"
                    >
                      Reject
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Recent Plan Expired */}
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

  )
}

export default SuperAdminDashboard