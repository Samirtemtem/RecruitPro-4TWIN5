import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Table from "../../../core/common/dataTable/index";
import { DatePicker } from "antd";
import { invoice_details } from "../../../core/data/json/invoices_details";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const Invoices = () => {
  const data = invoice_details;

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
 
  const columns = [
    {
      title: "Invoice",
      dataIndex: "Invoice",
      render: (text: String, record: any) => (
        <Link to={all_routes.invoiceDetails} className="tb-data">
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.Invoice.length - b.Invoice.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.invoiceDetails}
            className="avatar avatar-lg me-2"
          >
            <ImageWithBasePath
              src={`assets/img/users/${record.Image}`}
              className="rounded-circle"
              alt="user"
            />
          </Link>
          <div>
            <h6 className="fw-medium">
              <Link to={all_routes.invoiceDetails}>{record.Name}</Link>
            </h6>
            <span className="fs-12">{record.Roll}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Created On",
      dataIndex: "Created_On",
      sorter: (a: any, b: any) => a.Created_On.length - b.Created_On.length,
    },
    {
      title: "Total",
      dataIndex: "Total",
      sorter: (a: any, b: any) => a.Total.length - b.Total.length,
    },
    {
      title: "Amount Due",
      dataIndex: "Amount_Due",
      sorter: (a: any, b: any) => a.Amount_Due.length - b.Amount_Due.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: String, record: any) => (
        <span
          className={`badge ${
            text === "Paid"
              ? "badge-soft-success"
              : text === "Pending"
              ? "badge-soft-purple"
              : text === "Draft"
              ? "badge-soft-warning"
              : "badge-soft-danger"
          } d-inline-flex align-items-center`}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      dataIndex: "action",
      render: (text: String, record: any) => (
        <div className="action-icon d-inline-flex">
          <Link to={all_routes.invoicesdetails} className="me-2">
            <i className="ti ti-eye" />
          </Link>
          <Link to={all_routes.editinvoice} className="me-2">
            <i className="ti ti-edit" />
          </Link>
          <Link
            to="#delete_modal"
            className=""
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.action.length - b.action.length,
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
              <h2 className="mb-1">Invoices</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Invoices
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
                    <i className="ti ti-file-export me-2" />
                    Export
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        <i className="ti ti-file-type-pdf me-1" />
                        Export as PDF
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        <i className="ti ti-file-type-xls me-1" />
                        Export as Excel{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <Link
                  to={all_routes.addinvoice}
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Invoice
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Invoice Data */}
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center overflow-hidden mb-2">
                    <div>
                      <p className="fs-12 fw-normal mb-1 text-truncate">
                        Total Invoice
                      </p>
                      <h5>$3,237.94</h5>
                    </div>
                  </div>
                  <div className="attendance-report-bar mb-2">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ height: 5 }}
                    >
                      <div
                        className="progress-bar bg-pink"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                      <span className="text-success fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        +32.40%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center overflow-hidden mb-2">
                    <div>
                      <p className="fs-12 fw-normal mb-1 text-truncate">
                        Outstanding
                      </p>
                      <h5>$3,237.94</h5>
                    </div>
                  </div>
                  <div className="attendance-report-bar mb-2">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ height: 5 }}
                    >
                      <div
                        className="progress-bar bg-purple"
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                      <span className="text-danger fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        -4.40%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center overflow-hidden mb-2">
                    <div>
                      <p className="fs-12 fw-normal mb-1 text-truncate">
                        Draft
                      </p>
                      <h5>$3,237.94</h5>
                    </div>
                  </div>
                  <div className="attendance-report-bar mb-2">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ height: 5 }}
                    >
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "30%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                      <span className="text-success fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        12%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center overflow-hidden mb-2">
                    <div>
                      <p className="fs-12 fw-normal mb-1 text-truncate">
                        Total Overdue
                      </p>
                      <h5>$3,237.94</h5>
                    </div>
                  </div>
                  <div className="attendance-report-bar mb-2">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ height: 5 }}
                    >
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "20%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                      <span className="text-danger fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        -15.40%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Invoice Data */}
          {/* Invoice DataTable */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h5 className="d-flex align-items-center">
                    Invoices
                    <span className="badge badge-dark-transparent ms-2">
                      2000 Invoices
                    </span>
                  </h5>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="input-icon position-relative w-120 me-2">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                      <DatePicker
                        className="form-control datetimepicker"
                        format={{
                          format: "DD-MM-YYYY",
                          type: "mask",
                        }}
                        getPopupContainer={getModalContainer}
                        placeholder="Created Date"
                      />
                    </div>
                    <div className="input-icon position-relative w-120 me-2">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar" />
                      </span>
                      <DatePicker
                        className="form-control datetimepicker"
                        format={{
                          format: "DD-MM-YYYY",
                          type: "mask",
                        }}
                        getPopupContainer={getModalContainer}
                        placeholder="Due Date"
                      />
                    </div>
                    <div className="dropdown me-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        Select Status
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Paid
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Overdue
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Pending
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Draft
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center fs-12"
                        data-bs-toggle="dropdown"
                      >
                        <span className="fs-12 d-inline-flex me-1">
                          Sort By :{" "}
                        </span>
                        Last 7 Days
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Last 7 Days
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Created Date
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Due Date
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
          </div>
          {/* /Invoice DataTable */}
        </div>
        {/* Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white border-top p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
        {/* /Footer */}
        {/* /Page Wrapper */}
      </div>
    </>
  );
};

export default Invoices;
