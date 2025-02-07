import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { planDetails } from "../../../core/data/json/planDetails";
import { TableData } from "../../../core/data/interface";
import Table from "../../../core/common/dataTable/index";
import PredefinedDateRanges from "../../../core/common/datePicker";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import CommonSelect from "../../../core/common/commonSelect";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const Pricing = () => {
  const data = planDetails;
  const columns = [
    {
      title: "Plan",
      dataIndex: "plan",
      render: (text: string, record: any) => (
        <h6 className="fw-medium"><Link to="#">{text}</Link></h6>
      ),
      sorter: (a: TableData, b: TableData) => a.name.length - b.name.length,
    },
    {
      title: "Plan type",
      dataIndex: "plan_type",
      sorter: (a: any, b: any) => a.plan_type.length - b.plan_type.length,
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      sorter: (a: any, b: any) => a.created_date.length - b.created_date.length,
    },
    {
      title: "Modified Date",
      dataIndex: "modified_date",
      sorter: (a: any, b: any) => a.modified_date.length - b.modified_date.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: (a: any, b: any) => a.amount.length - b.amount.length,
    },
    {
      title: "Subscribed User",
      dataIndex: "subscribed_user",
      sorter: (a: any, b: any) => a.subscribed_user.length - b.subscribed_user.length,
    },
  ]

  const planName = [
    { value: "Select", label: "Select" },
    { value: "Advanced", label: "Advanced" },
    { value: "Basic", label: "Basic" },
    { value: "Enterprise", label: "Enterprise" },
  ];
  const planType = [
    { value: "Select", label: "Select" },
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];
  const planPosition = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  const planCurrency = [
    { value: "USD", label: "USD" },
    { value: "EURO", label: "EURO" },
  ];
  const planCurrencyType = [
    { value: "Fixed", label: "Fixed" },
    { value: "Percentage", label: "Percentage" },
  ];
  const discountType = [
    { value: "Fixed", label: "Fixed" },
    { value: "Percentage", label: "Percentage" },
  ];
  const status = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Pricing</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Pages</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pricing
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
              <div className="mb-2">
                <Link
                  to="#"
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_plans"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Plan
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Pricing */}
          <div className="card">
            <div className="card-body pb-1">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <p className="mb-0 me-2">Monthly</p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
                <p>Yearly</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="card">
                        <div className="card-body">
                          <h4>Basic</h4>
                          <h1>
                            $50
                            <span className="fs-14 fw-normal text-gray">
                              /monthly
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div className="pricing-content rounded bg-light mb-3">
                        <div className="price-hdr">
                          <h6 className="fs-14 fw-medium text-gray w-100">
                            Features Includes
                          </h6>
                        </div>
                        <div>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            10 Employees
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            50 Projects
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            50 Clients
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            50 GB Storage
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-circle-x-filled text-danger me-2" />
                            Voice &amp; Video Chat
                          </span>
                          <span className="text-dark d-flex align-items-center">
                            <i className="ti ti-circle-x-filled text-danger me-2" />
                            CRM
                          </span>
                        </div>
                      </div>
                      <Link to="#" className="btn btn-dark w-100">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="card">
                        <div className="card-body">
                          <h4>Professional</h4>
                          <h1>
                            $100
                            <span className="fs-14 fw-normal text-gray">
                              /monthly
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div className="pricing-content rounded bg-light mb-3">
                        <div className="price-hdr">
                          <h6 className="fs-14 fw-medium text-gray w-100">
                            Features Includes
                          </h6>
                        </div>
                        <div>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            50 Employees
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            100 Projects
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            100 Clients
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            50 GB Storage
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            Voice &amp; Video Chat
                          </span>
                          <span className="text-dark d-flex align-items-center">
                            <i className="ti ti-circle-x-filled text-danger me-2" />
                            CRM
                          </span>
                        </div>
                      </div>
                      <Link to="#" className="btn btn-dark w-100">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="card">
                        <div className="card-body">
                          <h4>Enterprise</h4>
                          <h1>
                            $200
                            <span className="fs-14 fw-normal text-gray">
                              /monthly
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div className="pricing-content rounded bg-light mb-3">
                        <div className="price-hdr">
                          <h6 className="fs-14 fw-medium text-gray w-100">
                            Features Includes
                          </h6>
                        </div>
                        <div>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            100 Employees
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            200 Projects
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            200 Clients
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            Unlimited Storage
                          </span>
                          <span className="text-dark d-flex align-items-center mb-3">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            Voice &amp; Video Chat
                          </span>
                          <span className="text-dark d-flex align-items-center">
                            <i className="ti ti-discount-check-filled text-success me-2" />
                            CRM
                          </span>
                        </div>
                      </div>
                      <Link to="#" className="btn btn-dark w-100">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Pricing */}
          {/* Pricing Table */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Plan Details</h5>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="me-3">
                  <div className="input-icon-end position-relative">
                    <PredefinedDateRanges />
                    <span className="input-icon-addon">
                      <i className="ti ti-chevron-down" />
                    </span>
                  </div>
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
          {/* /Pricing Table */}
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
        {/* Add Plan */}
        <div className="modal fade" id="add_plans">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Plan</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form action="pricing.html">
                <div className="modal-body pb-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-30.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="profile-upload">
                          <div className="mb-2">
                            <h6 className="mb-1">Upload Profile Image</h6>
                            <p className="fs-12">Image should be below 4 mb</p>
                          </div>
                          <div className="profile-uploader d-flex align-items-center">
                            <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                              Upload
                              <input
                                type="file"
                                className="form-control image-sign"
                                multiple
                              />
                            </div>
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Plan Name <span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className="select"
                          options={planName}
                          defaultValue={planName[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Plan Type <span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className="select"
                          options={planType}
                          defaultValue={planType[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Plan Position<span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className="select"
                          options={planPosition}
                          defaultValue={planPosition[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Plan Currency<span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className="select"
                          options={planCurrency}
                          defaultValue={planCurrency[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <div className="d-flex justify-content-between">
                          <label className="form-label">
                            Price<span className="text-danger"> *</span>
                          </label>
                          <span className="text-primary">
                            <i className="fa-solid fa-circle-exclamation me-2" />
                            Set 0 for free
                          </span>
                        </div>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Discount Type<span className="text-danger"> *</span>
                        </label>
                        <div className="pass-group">
                          <CommonSelect
                            className="select"
                            options={discountType}
                            defaultValue={discountType[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Discount<span className="text-danger"> *</span>
                        </label>
                        <div className="pass-group">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-3">
                        <label className="form-label">Limitations Invoices</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-3">
                        <label className="form-label">Max Customers</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-3">
                        <label className="form-label">Product</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="mb-3">
                        <label className="form-label">Supplier</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6>Plan Modules</h6>
                        <div className="form-check d-flex align-items-center">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Select All
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Employees
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Invoices
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Reports
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Contacts
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Clients
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Estimates
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Goals
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Deals
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Projects
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Payments
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Assets
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Leads
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Tickets
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Taxes
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Activities
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="form-check d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 text-dark fw-medium">
                            <input className="form-check-input" type="checkbox" />
                            Pipelines
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                          <label className="form-check-label mt-0 me-2 text-dark fw-medium">
                            Access Trial
                          </label>
                          <div className="form-check form-switch me-2">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              role="switch"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center gx-3">
                      <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-fill">
                            <label className="form-label">Trial Days</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="d-block align-items-center ms-3">
                          <label className="form-check-label mt-0 me-2 text-dark">
                            Is Recommended
                          </label>
                          <div className="form-check form-switch me-2">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              role="switch"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="mb-3 ">
                          <label className="form-label">
                            Status<span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className="select"
                            options={status}
                            defaultValue={status[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" defaultValue={""} />
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
                    Add Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Plan */}
      </>


    </>

  );
};

export default Pricing;
