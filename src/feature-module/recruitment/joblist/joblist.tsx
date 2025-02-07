import React from 'react'
import { all_routes } from '../../router/all_routes';
import { Link } from 'react-router-dom';
import PredefinedDateRanges from '../../../core/common/datePicker';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import { DatePicker } from "antd";
import CommonSelect from '../../../core/common/commonSelect';
import { joblistdetails } from './joblistdetails';
import Table from "../../../core/common/dataTable/index";
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';


const JobList = () => {

  const data = joblistdetails;
  const columns = [
    {
      title: "Job ID",
      dataIndex: "Job_ID",
      sorter: (a: any, b: any) => a.Job_ID.length - b.Job_ID.length,
    },
    {
      title: "Job Title",
      dataIndex: "Job_Title",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-md bg-light rounded">
            <ImageWithBasePath
              src={`assets/img/icons/${record.Image}`}
              className="img-fluid rounded-circle"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{record.Job_Title}</Link>
            </h6>
            <span className="d-block mt-1">{record.Roll}</span>
          </div>
        </div>

      ),
      sorter: (a: any, b: any) => a.Job_Title.length - b.Job_Title.length,
    },
    {
      title: "Category",
      dataIndex: "Category",
      sorter: (a: any, b: any) => a.Category.length - b.Category.length,
    },
    {
      title: "Location",
      dataIndex: "Location",
      sorter: (a: any, b: any) => a.Location.length - b.Location.length,
    },
    {
      title: "Salary Range",
      dataIndex: "Salary_Range",
      sorter: (a: any, b: any) => a.Salary_Range.length - b.Salary_Range.length,
    },
    {
      title: "Posted Date",
      dataIndex: "Posted_Date",
      sorter: (a: any, b: any) => a.Posted_Date.length - b.Posted_Date.length,
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
            data-bs-target="#edit_post"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link to="#" data-bs-toggle="modal" data-bs-target="#delete_modal">
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
    },
  ]

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const jobCategory = [
    { value: "Select", label: "Select" },
    { value: "IOS", label: "IOS" },
    { value: "Web & Application", label: "Web & Application" },
    { value: "Networking", label: "Networking" },
  ];
  const jobtype = [
    { value: "Select", label: "Select" },
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
  ];
  const joblevel = [
    { value: "Select", label: "Select" },
    { value: "Team Lead", label: "Team Lead" },
    { value: "Manager", label: "Manager" },
    { value: "Senior", label: "Senior" },
  ];
  const experience = [
    { value: "Select", label: "Select" },
    { value: "Entry Level", label: "Entry Level" },
    { value: "Mid Level", label: "Mid Level" },
    { value: "Expert", label: "Expert" },
  ];
  const qualification = [
    { value: "Select", label: "Select" },
    { value: "Bachelore Degree", label: "Bachelore Degree" },
    { value: "Master Degree", label: "Master Degree" },
    { value: "Others", label: "Others" },
  ];
  const genderChoose = [
    { value: "Select", label: "Select" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const sallary = [
    { value: "Select", label: "Select" },
    { value: "10k - 15k", label: "10k - 15k" },
    { value: "15k -20k", label: "15k -20k" },
  ];
  const maxsallary = [
    { value: "Select", label: "Select" },
    { value: "40k - 50k", label: "40k - 50k" },
    { value: "50k - 60k", label: "50k - 60k" },
  ];
  const country = [
    { value: "Select", label: "Select" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
  ];
  const state = [
    { value: "Select", label: "Select" },
    { value: "California", label: "California" },
    { value: "New York", label: "New York" },
    { value: "Texas", label: "Texas" },
    { value: "Florida", label: "Florida" },
  ];
  const city = [
    { value: "Select", label: "Select" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "San Diego", label: "San Diego" },
    { value: "Fresno", label: "Fresno" },
    { value: "San Francisco", label: "San Francisco" },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Jobs</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Administration</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Jobs
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                  <Link
                    to={all_routes.joblist}
                    className="btn btn-icon btn-sm active bg-primary text-white me-1"
                  >
                    <i className="ti ti-list-tree" />
                  </Link>
                  <Link to={all_routes.jobgrid} className="btn btn-icon btn-sm">
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
                  data-bs-target="#add_post"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Post job
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Job List</h5>
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
                    Role
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Senior IOS Developer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Junior PHP Developer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Network Engineer
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
                        Accepted
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        sent
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Expired
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Declined
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
      {/* Add Post */}
      <div className="modal fade" id="add_post">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Post Job</h4>
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
                  <div className="contact-grids-tab pt-0">
                    <ul className="nav nav-underline" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="info-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#basic-info"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          Basic Information
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="address-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#address"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Location
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="basic-info"
                      role="tabpanel"
                      aria-labelledby="info-tab"
                      tabIndex={0}
                    >
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
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Title <span className="text-danger"> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Description{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <textarea
                              rows={3}
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Category <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={jobCategory}
                              defaultValue={jobCategory[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Type <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={jobtype}
                              defaultValue={jobtype[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Level <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={joblevel}
                              defaultValue={joblevel[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Experience <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={experience}
                              defaultValue={experience[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Qualification <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={qualification}
                              defaultValue={qualification[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Gender <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={genderChoose}
                              defaultValue={genderChoose[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Min. Sallary <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={sallary}
                              defaultValue={sallary[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Max. Sallary <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={maxsallary}
                              defaultValue={maxsallary[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3 ">
                            <label className="form-label">
                              Job Expired Date{" "}
                              <span className="text-danger"> *</span>
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
                            <label className="form-label">Required Skills</label>
                            <input type="text" className="form-control" />
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#success_modal"
                        >
                          Save &amp; Next
                        </button>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="address"
                      role="tabpanel"
                      aria-labelledby="address-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Address <span className="text-danger"> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Country <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={country}
                              defaultValue={country[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              State <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={state}
                              defaultValue={state[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              City <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={city}
                              defaultValue={city[0]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Zip Code <span className="text-danger"> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="map-grid mb-3">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="w-100"
                            />
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#success_modal"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Post Job */}
      {/* Add Job Success */}
      <div className="modal fade" id="success_modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-xm">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center p-3">
                <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
                  <i className="ti ti-check fs-24" />
                </span>
                <h5 className="mb-2">Job Posted Successfully</h5>
                <div>
                  <div className="row g-2">
                    <div className="col-12">
                      <Link to={all_routes.jobgrid} data-bs-dismiss="modal" className="btn btn-dark w-100">
                        Back to List
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Client Success */}
      {/* Edit Post */}
      <div className="modal fade" id="edit_post">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Job</h4>
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
                  <div className="contact-grids-tab pt-0">
                    <ul className="nav nav-underline" id="myTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="info-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#basic-infos"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          Basic Information
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="address-tabs"
                          data-bs-toggle="tab"
                          data-bs-target="#addresss"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Location
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContents">
                    <div
                      className="tab-pane fade show active"
                      id="basic-infos"
                      role="tabpanel"
                      aria-labelledby="info-tab"
                      tabIndex={0}
                    >
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
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Title <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Senior IOS Developer"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Description{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <textarea
                              rows={3}
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Category <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={jobCategory}
                              defaultValue={jobCategory[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Type <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={jobtype}
                              defaultValue={jobtype[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Job Level <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={joblevel}
                              defaultValue={joblevel[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Experience <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={experience}
                              defaultValue={experience[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Qualification <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={qualification}
                              defaultValue={qualification[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Gender <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={genderChoose}
                              defaultValue={genderChoose[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Min. Sallary <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={sallary}
                              defaultValue={sallary[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Max. Sallary <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={maxsallary}
                              defaultValue={maxsallary[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3 ">
                            <label className="form-label">
                              Job Expired Date{" "}
                              <span className="text-danger"> *</span>
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
                            <label className="form-label">Required Skills</label>
                            <input type="text" className="form-control" />
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#success_modal"
                        >
                          Save &amp; Next
                        </button>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="addresss"
                      role="tabpanel"
                      aria-labelledby="address-tab"
                      tabIndex={0}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Address <span className="text-danger"> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Country <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={country}
                              defaultValue={country[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              State <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={state}
                              defaultValue={state[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              City <span className="text-danger"> *</span>
                            </label>
                            <CommonSelect
                              className='select'
                              options={city}
                              defaultValue={city[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Zip Code <span className="text-danger"> *</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="map-grid mb-3">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="w-100"
                            />
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#success_modal"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Post Job */}
    </>


  )
}

export default JobList
