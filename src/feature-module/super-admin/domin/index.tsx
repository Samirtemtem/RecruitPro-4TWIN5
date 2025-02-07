import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import PredefinedDateRanges from '../../../core/common/datePicker'
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import { domain_details } from '../../../core/data/json/domainDetails'

const Domain = () => {
  const data = domain_details;
  const columns = [
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md border rounded-circle">
            <ImageWithBasePath
              src={`assets/img/company/${record.Image}`}
              className="img-fluid"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{record.CompanyName}</Link>
            </h6>
          </div>
        </div>

      ),
      sorter: (a: any, b: any) => a.CompanyName.length - b.CompanyName.length,
    },
    {
      title: "Domain URL",
      dataIndex: "AccountURL",
      sorter: (a: any, b: any) => a.AccountURL.length - b.AccountURL.length,
    },
    {
      title: "Plan",
      dataIndex: "Plan",
      sorter: (a: any, b: any) => a.Plan.length - b.Plan.length,
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Status",
      dataIndex: "DomainStatus",
      render: (text: string, record: any) => (
        <Link
        to="#"
        className={`badge ${text==='Approved'?'badge-soft-success':text==='Pending'?'badge-soft-info':'badge-soft-danger'} d-inline-flex align-items-center badge-xs`}
      >
        <i className="ti ti-checks me-1" />
        {text}
      </Link>      
      ),
      sorter: (a: any, b: any) => a.DomainStatus.length - b.DomainStatus.length,
    },
    {
      title: "",
      dataIndex: "DomainStatus",
      render: (text:String) => (
        <div className="action-icon d-inline-flex">
          <Link
            to="#"
            className="me-2"
            data-bs-toggle="modal"
            data-bs-target={`${text==='Approved'?'#domain_approved':text==='Pending'?'#domain_pending':text==='Rejected'?'#domain_rejected':''}`}
          >
            <i className="ti ti-eye" />
          </Link>
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.DomainStatus.length - b.DomainStatus.length,
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Domain</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Superadmin</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Domain List
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
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Domain List</h5>
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
                    Select Plan
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Monthly
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Yearly
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
                        Approved
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Pending
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
      {/* Domain Details */}
      <div className="modal fade" id="domain_approved">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title d-flex align-items-center">
                Domain Detail
                <span className="badge bg-outline-success d-inline-flex align-items-center badge-xs ms-2">
                  <i className="ti ti-point-filled" />
                  Approved
                </span>
              </h4>
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
                          <div className="col-md-12">
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-01.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-14">
                                  <Link to="#">BrightWave Innovations</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Name</span>
                      <h6 className="fw-normal">Advanced</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Type</span>
                      <h6 className="fw-normal">Monthly</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Account URL</span>
                      <h6 className="fw-normal">bwi.example.com</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Price</span>
                      <h6 className="fw-normal">200</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Register Date</span>
                      <h6 className="fw-normal">12 Sep 2024</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Expiring On</span>
                      <h6 className="fw-normal">11 Oct 2024</h6>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Domain Details */}
      {/* Domain Details */}
      <div className="modal fade" id="domain_pending">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title d-flex align-items-center">
                Domain Detail
                <span className="badge bg-outline-skyblue d-inline-flex align-items-center badge-xs ms-2">
                  <i className="ti ti-point-filled" />
                  Pending
                </span>
              </h4>
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
                          <div className="col-md-6">
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-01.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-14">
                                  <Link to="#">BrightWave Innovations</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 text-end">
                            <span className="badge badge-success d-inline-flex align-items-center badge-xs ms-2">
                              <i className="ti ti-check me-1" />
                              Approve
                            </span>
                            <span className="badge badge-danger d-inline-flex align-items-center badge-xs ms-2">
                              <i className="ti ti-x me-1" />
                              Reject
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Name</span>
                      <h6 className="fw-normal">Advanced</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Type</span>
                      <h6 className="fw-normal">Monthly</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Account URL</span>
                      <h6 className="fw-normal">bwi.example.com</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Price</span>
                      <h6 className="fw-normal">200</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Register Date</span>
                      <h6 className="fw-normal">12 Sep 2024</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Expiring On</span>
                      <h6 className="fw-normal">11 Oct 2024</h6>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Domain Details */}
      {/* Domain Details */}
      <div className="modal fade" id="domain_rejected">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title d-flex align-items-center">
                Domain Detail
                <span className="badge bg-outline-danger d-inline-flex align-items-center badge-xs ms-2">
                  <i className="ti ti-point-filled" />
                  Rejected
                </span>
              </h4>
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
                          <div className="col-md-12">
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <ImageWithBasePath
                                  src="assets/img/company/company-01.svg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-14">
                                  <Link to="#">BrightWave Innovations</Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Name</span>
                      <h6 className="fw-normal">Advanced</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Plan Type</span>
                      <h6 className="fw-normal">Monthly</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Account URL</span>
                      <h6 className="fw-normal">bwi.example.com</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Price</span>
                      <h6 className="fw-normal">200</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Register Date</span>
                      <h6 className="fw-normal">12 Sep 2024</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <span className="fs-12">Expiring On</span>
                      <h6 className="fw-normal">11 Oct 2024</h6>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Domain Details */}
    </>



  )
}

export default Domain