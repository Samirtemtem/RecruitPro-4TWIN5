import React, { useState } from 'react'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import ReactApexChart from 'react-apexcharts'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'

const Analytics = () => {
  const routes = all_routes
  const [dealsStage] = useState<any>({
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
  })
  const [leadSource] = useState<any>({
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
              formatter: function () {
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
  })
  return (
    <div className="page-wrapper">
      <div className="content">

        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Analytics</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}><i className="ti ti-smart-home"></i></Link>
                </li>
                <li className="breadcrumb-item">
                  CRM
                </li>
                <li className="breadcrumb-item active" aria-current="page">Analytics</li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="me-2 mb-2">
              <div className="dropdown">
                <Link to="#" className="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                  <i className="ti ti-file-export me-1"></i>Export
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1"><i className="ti ti-file-type-pdf me-1"></i>Export as PDF</Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1"><i className="ti ti-file-type-xls me-1"></i>Export as Excel </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="input-icon w-120 position-relative mb-2">
              <span className="input-icon-addon">
                <i className="ti ti-calendar text-gray-9"></i>
              </span>
              <input type="text" className="form-control datetimepicker" value="15 Apr 2025" />
            </div>
            <div className="head-icons ms-2 ">
              <CollapseHeader />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h5>Recently Created Contacts</h5>
                  <div className="dropdown mb-2">
                    <Link to="#" className="btn btn-white border btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      <i className="ti ti-calendar me-1"></i>This Week
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Month</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Week</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">Last Week</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created at</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border avatar-rounded">
                              <ImageWithBasePath src="assets/img/users/user-49.jpg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Darlee Robertson</Link></h6>
                              <span className="fs-12 fw-normal ">Facility Manager</span>
                            </div>
                          </div>
                        </td>
                        <td>darlee@example.com	</td>
                        <td>(163) 2459 315</td>
                        <td>14 Jan 2024</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border avatar-rounded">
                              <ImageWithBasePath src="assets/img/users/user-50.jpg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Sharon Roy</Link></h6>
                              <span className="fs-12 fw-normal ">Installer</span>
                            </div>
                          </div>
                        </td>
                        <td>darlee@example.com	</td>
                        <td>(146) 1249 296	</td>
                        <td>15 Jan 2024</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border avatar-rounded">
                              <ImageWithBasePath src="assets/img/users/user-51.jpg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Vaughan Lewis</Link></h6>
                              <span className="fs-12 fw-normal ">Senior  Manager</span>
                            </div>
                          </div>
                        </td>
                        <td>vaughan@example.com	</td>
                        <td>(135) 3489 516</td>
                        <td>16 Jan 2024</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border avatar-rounded">
                              <ImageWithBasePath src="assets/img/users/user-02.jpg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Jessica Louise</Link></h6>
                              <span className="fs-12 fw-normal ">Test Engineer</span>
                            </div>
                          </div>
                        </td>
                        <td>jessica@example.com</td>
                        <td>jessica@example.com</td>
                        <td>17 Jan 2024</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border avatar-rounded">
                              <ImageWithBasePath src="assets/img/users/user-52.jpg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Carol Thomas</Link></h6>
                              <span className="fs-12 fw-normal ">UI /UX Designer</span>
                            </div>
                          </div>
                        </td>
                        <td>carol@example.com</td>
                        <td>(196) 4862 196</td>
                        <td>18 Jan 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h6>Won Deals Stage</h6>
                  <div className="dropdown">
                    <Link to="#" className="btn btn-white border-0 dropdown-toggle btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      Sales Pipeline
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Month</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Week</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">Last Week</Link>
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
                    <span className="badge badge-soft-danger border-danger border rounded-pill me-1">$45,899,79</span>
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
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                <h5>Recent Deals</h5>
                <div className="d-flex align-items-center">
                  <div>
                    <Link to={routes.dealsList} className="btn btn-sm btn-light px-3">View All</Link>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-nowrap mb-0">
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
                        <td><h6><Link to={routes.dealsDetails}>Collins</Link></h6></td>
                        <td>Quality To Buy</td>
                        <td>
                          $4,50,000
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath src="assets/img/users/user-32.jpg" alt="Img" />
                            </Link>
                            <h6><Link to="#">Anthony Lewis</Link></h6>
                          </div>
                        </td>
                        <td>14 Jan 2024</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.dealsDetails}>Konopelski</Link></h6></td>
                        <td>Proposal Made</td>
                        <td>
                          $3,15,000
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath src="assets/img/users/user-09.jpg" alt="Img" />
                            </Link>
                            <h6><Link to="#">Brian Villalobos</Link></h6>
                          </div>
                        </td>
                        <td>21 Jan 2024</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.dealsDetails}>Adams</Link></h6></td>
                        <td>Contact Made</td>
                        <td>
                          $8,40,000
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                            </Link>
                            <h6><Link to="#">Harvey Smith</Link></h6>
                          </div>
                        </td>
                        <td>20 Feb 2024</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.dealsDetails}>Schumm</Link></h6></td>
                        <td>Quality To Buy</td>
                        <td>
                          $6,10,000
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath src="assets/img/users/user-33.jpg" alt="Img" />
                            </Link>
                            <h6><Link to="#">Stephan Peralt</Link></h6>
                          </div>
                        </td>
                        <td>15 Mar 2024</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.dealsDetails}>Wisozk</Link></h6></td>
                        <td>Presentation</td>
                        <td>
                          $4,70,000
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath src="assets/img/users/user-34.jpg" alt="Img" />
                            </Link>
                            <h6><Link to="#">Doglas Martini</Link></h6>
                          </div>
                        </td>
                        <td>12 Apr 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                <h5>Recent Leads</h5>
                <div className="d-flex align-items-center">
                  <div>
                    <Link to={routes.leadsList} className="btn btn-sm btn-light px-3">View All</Link>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-nowrap mb-0">
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
                        <td><h6><Link to={routes.leadsDetails}>Collins</Link></h6></td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-01.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>BrightWave Innovations</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-secondary d-inline-flex align-items-center">
                            <i className="ti ti-point-filled me-1"></i>
                            Contacted
                          </span>
                        </td>
                        <td>
                          14 Jan 2024
                        </td>
                        <td>Hendry</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.leadsDetails}>Konopelski</Link></h6></td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-02.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Stellar Dynamics</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-success d-inline-flex align-items-center">
                            <i className="ti ti-point-filled me-1"></i>
                            Closed
                          </span>
                        </td>
                        <td>
                          21 Jan 2024
                        </td>
                        <td>Guilory</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.leadsDetails}>Adams</Link></h6></td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-03.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Quantum Nexus</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-danger d-inline-flex align-items-center">
                            <i className="ti ti-point-filled me-1"></i>
                            Lost
                          </span>
                        </td>
                        <td>
                          20 Feb 2024
                        </td>
                        <td>Jami</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.leadsDetails}>Schumm</Link></h6></td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-04.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>EcoVision Enterprises</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-purple d-inline-flex align-items-center">
                            <i className="ti ti-point-filled me-1"></i>
                            Not Contacted
                          </span>
                        </td>
                        <td>
                          15 Mar 2024
                        </td>
                        <td>Theresa</td>
                      </tr>
                      <tr>
                        <td><h6><Link to={routes.leadsDetails}>Wisozk</Link></h6></td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-05.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Aurora Technologies</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-success d-inline-flex align-items-center">
                            <i className="ti ti-point-filled me-1"></i>
                            Closed
                          </span>
                        </td>
                        <td>
                          12 Apr 2024
                        </td>
                        <td>Smith</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h6>Deals by Stage</h6>
                  <div className="dropdown">
                    <Link to="#" className="btn btn-white border btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      <i className="ti ti-calendar me-1"></i>This Week
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Month</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Week</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">Last Week</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body pb-0">
                <div>
                  <div className="d-flex align-items-center">
                    <h3 className="me-2">98%</h3>
                    <span className="badge badge-outline-success bg-success-transparent rounded-pill me-1">12%</span>
                    <span>vs last years</span>
                  </div>
                  <ReactApexChart
                    options={dealsStage}
                    series={dealsStage.series}
                    type="bar"
                    height={310}
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h6>Recent Activities</h6>
                  <div>
                    <Link to={routes.activity} className="btn btn-sm btn-light px-3">View All</Link>
                  </div>
                </div>
              </div>
              <div className="card-body schedule-timeline activity-timeline">
                <div className="d-flex align-items-start">
                  <div className="avatar avatar-md avatar-rounded bg-success flex-shrink-0">
                    <i className="ti ti-phone fs-20"></i>
                  </div>
                  <div className="flex-fill ps-3 pb-4 timeline-flow">
                    <p className="fw-medium text-gray-9 mb-1"><Link to={routes.activity}>Drain responded to your appointment schedule question.</Link></p>
                    <span>09:25 PM</span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="avatar avatar-md avatar-rounded bg-info flex-shrink-0">
                    <i className="ti ti-message-circle-2 fs-20"></i>
                  </div>
                  <div className="flex-fill ps-3 pb-4 timeline-flow">
                    <p className="fw-medium text-gray-9 mb-1"><Link to={routes.activity}>You sent 1 Message to the James.</Link></p>
                    <span>10:25 PM</span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="avatar avatar-md avatar-rounded bg-success flex-shrink-0">
                    <i className="ti ti-phone fs-20"></i>
                  </div>
                  <div className="flex-fill ps-3 pb-4 timeline-flow">
                    <p className="fw-medium text-gray-9 mb-1"><Link to={routes.activity}>Denwar responded to your appointment on 25 Jan 2025, 08:15 PM</Link></p>
                    <span>09:25 PM</span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="avatar avatar-md avatar-rounded bg-purple flex-shrink-0">
                    <i className="ti ti-user-circle fs-20"></i>
                  </div>
                  <div className="flex-fill ps-3 timeline-flow">
                    <p className="fw-medium text-gray-9 mb-1"><Link to="activity.html" className="d-flex align-items-center">Meeting With <ImageWithBasePath src="assets/img/users/user-58.jpg" className="avatar avatar-sm rounded-circle mx-2" alt="Img" />Abraham</Link></p>
                    <span>09:25 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flex-fill">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h6>Leads by Source</h6>
                  <div className="dropdown">
                    <Link to="#" className="btn btn-white border btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      <i className="ti ti-calendar me-1"></i>This Week
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Month</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Week</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">Last Week</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ReactApexChart
                  id="leads-chart"
                  options={leadSource}
                  series={leadSource.series}
                  type="donut"
                  height={185}
                />
                <div>
                  <h6 className="mb-3">Status</h6>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="f-13 mb-0"><i className="ti ti-circle-filled text-secondary me-1"></i>Google</p>
                    <p className="f-13 fw-medium text-gray-9">40%</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="f-13 mb-0"><i className="ti ti-circle-filled text-warning me-1"></i>Paid</p>
                    <p className="f-13 fw-medium text-gray-9">35%</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="f-13 mb-0"><i className="ti ti-circle-filled text-pink me-1"></i>Campaigns</p>
                    <p className="f-13 fw-medium text-gray-9">15%</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="f-13 mb-0"><i className="ti ti-circle-filled text-purple me-1"></i>Referals</p>
                    <p className="f-13 fw-medium text-gray-9">10%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                  <h5>Recently Created Companies</h5>
                  <div className="dropdown mb-2">
                    <Link to="#" className="btn btn-white border btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">
                      <i className="ti ti-calendar me-1"></i>This Week
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Month</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">This Week</Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">Last Week</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created at</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-01.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>BrightWave Innovations</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>darlee@example.com	</td>
                        <td>(163) 2459 315</td>
                        <td>14 Jan 2024</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-02.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Stellar Dynamics</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>darlee@example.com	</td>
                        <td>(146) 1249 296	</td>
                        <td>15 Jan 2024</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link to={routes.companiesDetails} className="avatar avatar-md border rounded-circle">
                              <ImageWithBasePath src="assets/img/company/company-03.svg" className="img-fluid" alt="img" />
                            </Link>
                            <div className="ms-2">
                              <h6 className="fw-medium"><Link to={routes.companiesDetails}>Quantum Nexus</Link></h6>
                            </div>
                          </div>
                        </td>
                        <td>jessica@example.com</td>
                        <td>(148) 1229 235</td>
                        <td>17 Jan 2024</td>
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
        <p className="mb-0">2014 - 2025 &copy; SmartHR.</p>
        <p>Designed &amp; Developed By <Link to="#" className="text-primary">Dreams</Link></p>
      </div>

    </div>
  )
}

export default Analytics