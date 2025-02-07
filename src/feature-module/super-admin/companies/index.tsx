import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import PredefinedDateRanges from '../../../core/common/datePicker'
import { companies_details } from '../../../core/data/json/companiesdetails'
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import CommonSelect from '../../../core/common/commonSelect'
import { DatePicker } from 'antd'
import ReactApexChart from 'react-apexcharts'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
type PasswordField = "password" | "confirmPassword";

const Companies = () => {
  const data = companies_details;
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
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Account URL",
      dataIndex: "AccountURL",
      sorter: (a: any, b: any) => a.AccountURL.length - b.AccountURL.length,
    },
    {
      title: "Plan",
      dataIndex: "Plan",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 me-2">{record.Plan}</p>
          <Link
            to="#"
            data-bs-toggle="modal"
            className="badge badge-purple badge-xs"
            data-bs-target="#upgrade_info"
          >
            Upgrade
          </Link>
        </div>

      ),
      sorter: (a: any, b: any) => a.Plan.length - b.Plan.length,
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string, record: any) => (
        <span className={`badge ${text === 'Active' ? 'badge-success' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>

      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      dataIndex: "actions",
      render: () => (
        <div className="action-icon d-inline-flex">
          <Link
            to="#"
            className="me-2"
            data-bs-toggle="modal"
            data-bs-target="#company_detail"
          >
            <i className="ti ti-eye" />
          </Link>
          <Link
            to="#"
            className="me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_company"
          >
            <i className="ti ti-edit" />
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
    },
  ]
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const planName = [
    { value: "Advanced", label: "Advanced" },
    { value: "Basic", label: "Basic" },
    { value: "Enterprise", label: "Enterprise" },
  ];
  const planType = [
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];
  const currency = [
    { value: "USD", label: "USD" },
    { value: "Euro", label: "Euro" },
  ];
  const language = [
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
  ];
  const statusChoose = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [totalChart] = React.useState<any>({
    series: [{
      name: "Messages",
      data: [25, 66, 41, 12, 36, 9, 21]
    }],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0    // End with 0 opacity (transparent)
      }
    },
    chart: {
      foreColor: '#fff',
      type: "area",
      width: 50,
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: !1
      },
      dropShadow: {
        enabled: 0,
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
      enabled: !1
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth"
    },
    colors: ["#F26522"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e: any) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    }
  })
  const [activeChart] = React.useState<any>({
    series: [{
      name: "Active Company",
      data: [25, 40, 35, 20, 36, 9, 21]
    }],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0    // End with 0 opacity (transparent)
      }
    },
    chart: {
      foreColor: '#fff',
      type: "area",
      width: 50,
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: !1
      },
      dropShadow: {
        enabled: 0,
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
      enabled: !1
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth"
    },
    colors: ["#F26522"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e: any) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    }
  })
  const [inactiveChart] = React.useState<any>({
    series: [{
      name: "Inactive Company",
      data: [25, 10, 35, 5, 25, 28, 21]
    }],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0    // End with 0 opacity (transparent)
      }
    },
    chart: {
      foreColor: '#fff',
      type: "area",
      width: 50,
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: !1
      },
      dropShadow: {
        enabled: 0,
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
      enabled: !1
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth"
    },
    colors: ["#F26522"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e: any) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    }
  })
  const [locationChart] = React.useState<any>({
    series: [{
      name: "Inactive Company",
      data: [30, 40, 15, 23, 20, 23, 25]
    }],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0, // Start with 0 opacity (transparent)
        opacityTo: 0    // End with 0 opacity (transparent)
      }
    },
    chart: {
      foreColor: '#fff',
      type: "area",
      width: 50,
      toolbar: {
        show: !1
      },
      zoom: {
        enabled: !1
      },
      dropShadow: {
        enabled: 0,
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
      enabled: !1
    },
    stroke: {
      show: !0,
      width: 2.5,
      curve: "smooth"
    },
    colors: ["#F26522"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e: any) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    }
  })

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Companies</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Companies List
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
                  data-bs-toggle="modal"
                  data-bs-target="#add_company"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Company
                </Link>
              </div>
              <div className="ms-2 head-icons">
              <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="row">
            {/* Total Companies */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-primary flex-shrink-0">
                      <i className="ti ti-building fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Total Companies
                      </p>
                      <h4>950</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={totalChart}
                    series={totalChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Total Companies */}
            {/* Total Companies */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-success flex-shrink-0">
                      <i className="ti ti-building fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Active Companies
                      </p>
                      <h4>920</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={activeChart}
                    series={activeChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Total Companies */}
            {/* Inactive Companies */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-danger flex-shrink-0">
                      <i className="ti ti-building fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Inactive Companies
                      </p>
                      <h4>30</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={inactiveChart}
                    series={inactiveChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Inactive Companies */}
            {/* Company Location */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <span className="avatar avatar-lg bg-skyblue flex-shrink-0">
                      <i className="ti ti-map-pin-check fs-16" />
                    </span>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Company Location
                      </p>
                      <h4>180</h4>
                    </div>
                  </div>
                  <ReactApexChart
                    options={locationChart}
                    series={locationChart.series}
                    type="area"
                    width={50}
                  />
                </div>
              </div>
            </div>
            {/* /Company Location */}
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Companies List</h5>
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
                        Advanced
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Basic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Enterprise
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
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Inactive
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
      {/* Add Company */}
      <div className="modal fade" id="add_company">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Company</h4>
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
                    <div className="mb-3">
                      <label className="form-label">
                        Name <span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Account URL</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Website</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.password
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${passwordVisibility.password
                            ? "ti-eye"
                            : "ti-eye-off"
                            }`}
                          onClick={() =>
                            togglePasswordVisibility("password")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Confirm Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.confirmPassword
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                            ? "ti-eye"
                            : "ti-eye-off"
                            }`}
                          onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Name <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
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
                        className='select'
                        options={planType}
                        defaultValue={planType[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Currency <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={currency}
                        defaultValue={currency[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Language <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={language}
                        defaultValue={language[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className='select'
                        options={statusChoose}
                        defaultValue={statusChoose[0]}
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Add Company
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Company */}
      {/* Edit Company */}
      <div className="modal fade" id="edit_company">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Company</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="companies.html">
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
                    <div className="mb-3">
                      <label className="form-label">
                        Name <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Stellar Dynamics"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="sophie@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Account URL</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="sd.example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="+1 895455450"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Website</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Admin Website"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.password
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${passwordVisibility.password
                            ? "ti-eye"
                            : "ti-eye-off"
                            }`}
                          onClick={() =>
                            togglePasswordVisibility("password")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Confirm Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                        <input
                          type={
                            passwordVisibility.confirmPassword
                              ? "text"
                              : "password"
                          }
                          className="pass-input form-control"
                        />
                        <span
                          className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                            ? "ti-eye"
                            : "ti-eye-off"
                            }`}
                          onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                          }
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Name <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={planName}
                        defaultValue={planName[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Type <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={planType}
                        defaultValue={planType[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Currency <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={currency}
                        defaultValue={currency[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Language <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={language}
                        defaultValue={language[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className='select'
                        options={statusChoose}
                        defaultValue={statusChoose[1]}
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Company */}
      {/* Upgrade Information */}
      <div className="modal fade" id="upgrade_info">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Upgrade Package</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="p-3 mb-1">
              <div className="rounded bg-light p-3">
                <h5 className="mb-3">Current Plan Details</h5>
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Company Name</p>
                      <p className="text-gray-9">BrightWave Innovations</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Plan Name</p>
                      <p className="text-gray-9">Advanced</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Plan Type</p>
                      <p className="text-gray-9">Monthly</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Price</p>
                      <p className="text-gray-9">200</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Register Date</p>
                      <p className="text-gray-9">12 Sep 2024</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="fs-12 mb-0">Expiring On</p>
                      <p className="text-gray-9">11 Oct 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form action="companies.html">
              <div className="modal-body pb-0">
                <h5 className="mb-4">Change Plan</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Name <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={planName}
                        defaultValue={planName[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Plan Type <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={planType}
                        defaultValue={planType[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Ammount<span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Payment Date <span className="text-danger">*</span>
                      </label>
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
                      <label className="form-label">
                        Next Payment Date <span className="text-danger">*</span>
                      </label>
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
                      <label className="form-label">
                        Expiring On <span className="text-danger">*</span>
                      </label>
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Upgrade Information */}
      {/* Company Detail */}
      <div className="modal fade" id="company_detail">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Company Detail</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="moday-body">
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center rounded bg-light p-3">
                  <div className="file-name-icon d-flex align-items-center">
                    <Link
                      to="#"
                      className="avatar avatar-md border rounded-circle flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-01.svg"
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <p className="text-gray-9 fw-medium mb-0">
                        BrightWave Innovations
                      </p>
                      <p>michael@example.com</p>
                    </div>
                  </div>
                  <span className="badge badge-success">
                    <i className="ti ti-point-filled" />
                    Active
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-gray-9 fw-medium">Basic Info</p>
                <div className="pb-1 border-bottom mb-4">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Account URL</p>
                        <p className="text-gray-9">bwi.example.com</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Phone Number</p>
                        <p className="text-gray-9">(163) 2459 315</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Website</p>
                        <p className="text-gray-9">www.exmple.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Currency</p>
                        <p className="text-gray-9">United Stated Dollar (USD)</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Language</p>
                        <p className="text-gray-9">English</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Addresss</p>
                        <p className="text-gray-9">
                          3705 Lynn Avenue, Phelps, WI 54554
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-9 fw-medium">Plan Details</p>
                <div>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Plan Name</p>
                        <p className="text-gray-9">Advanced</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Plan Type</p>
                        <p className="text-gray-9">Monthly</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Price</p>
                        <p className="text-gray-9">$200</p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Register Date</p>
                        <p className="text-gray-9">12 Sep 2024</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <p className="fs-12 mb-0">Expiring On</p>
                        <p className="text-gray-9">11 Oct 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Company Detail */}
    </>


  )
}

export default Companies