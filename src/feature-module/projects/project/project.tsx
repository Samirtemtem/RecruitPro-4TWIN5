import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import CommonSelect from '../../../core/common/commonSelect'
import { DatePicker } from 'antd'
import { priority } from '../../../core/common/selectoption/selectoption'
import CommonTagsInput from '../../../core/common/Taginput'
import CommonTextEditor from '../../../core/common/textEditor'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'

const Project = () => {

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [tags, setTags] = useState<string[]>(["Jerald", "Andrew", "Philip", "Davis"]);
  const [tags1, setTags1] = useState<string[]>(["Hendry", "James"]);
  const [tags2, setTags2] = useState<string[]>(["Dwight"]);
  const [tags3, setTags3] = useState<string[]>(["Collab", "Promotion", "Rated"]);

  const clinetChoose = [
    { value: "Anthony Lewis", label: "Anthony Lewis" },
    { value: "Brian Villalobos", label: "Brian Villalobos" },
  ];
  const statusChoose = [
    { value: "Select", label: "Select" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const priorityChoose = [
    { value: "Select", label: "Select" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  return (
    <>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Breadcrumb */}
            <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
              <div className="my-auto mb-2">
                <h2 className="mb-1">Projects</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={all_routes.adminDashboard}>
                        <i className="ti ti-smart-home" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Employee</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Projects Grid
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                <div className="me-2 mb-2">
                  <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                    <Link to={all_routes.projectlist} className="btn btn-icon btn-sm me-1">
                      <i className="ti ti-list-tree" />
                    </Link>
                    <Link
                      to={all_routes.project}
                      className="btn btn-icon btn-sm active bg-primary text-white"
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
                    data-bs-toggle="modal" data-inert={true}
                    data-bs-target="#add_project"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <i className="ti ti-circle-plus me-2" />
                    Add Project
                  </Link>
                </div>
                <div className="ms-2 head-icons">
                <CollapseHeader />
                </div>
              </div>
            </div>
            {/* /Breadcrumb */}
            <div className="card">
              <div className="card-body p-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h5>Projects Grid</h5>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
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
                            Select Status
                          </Link>
                        </li>
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
            {/* Project Grid */}
            <div className="row">
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Office Management</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        An office management app project streamlines administrative
                        tasks by integrating tools for scheduling, communication, and
                        task management, enhancing overall productivity and
                        efficiency.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-39.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Anthony Lewis</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">14 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">6</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +1
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Clinic Management </Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        A clinic management project streamlines patient records,
                        appointments, and billing processes to improve operational
                        efficiency.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-40.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Sophie Headrick</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">15 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">7</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Educational Platform</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        An educational platform project provides a centralized space
                        for delivering online courses, tracking progress, and managing
                        student assessments.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-41.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Cameron Drake</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">16 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">5</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-09.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-11.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}> Chat &amp; Call Mobile App</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        A chat and call mobile app enables users to send messages,
                        make voice and video calls, and share media seamlessly across
                        devices.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-42.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Doris Crowley</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">17 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">6</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-12.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-13.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-14.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Travel Planning Website</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        A travel planning website helps users explore destinations,
                        compare flights and accommodations, and create personalized
                        itineraries.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-43.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Thomas Bordelon</Link>
                          </h6>
                          <span className="fs-12 fw-normal">Manager</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">18 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">8</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-15.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-16.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-17.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Service Booking Software</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        Service booking software enables users to schedule
                        appointments, manage bookings, and handle payments for various
                        services.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-45.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Kathleen Gutierrez</Link>
                          </h6>
                          <span className="fs-12 fw-normal">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">19 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">8</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-18.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-19.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-20.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Hotel Booking App</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        A hotel booking app allows users to search, compare, and book
                        accommodations with ease, offering a wide range of options.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-46.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Bruce Wright</Link>
                          </h6>
                          <span className="fs-12 fw-normal">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">20 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">8</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-24.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-23.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-22.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +1
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>
                          Car &amp; Bike Rental Software
                        </Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        Car and bike rental software allows users to browse, reserve,
                        and rent vehicles efficiently through an online platform.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-47.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Rebecca Smtih</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">17 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">6</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-12.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-13.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-14.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Navigation and Safety App</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        A navigation and safety app provides real-time GPS guidance,
                        traffic updates, and route optimization to help users reach
                        their destinations efficiently.A navigation and safety app
                        provides real-time GPS guidance, traffic updates, and route
                        optimization to help users reach their destinations
                        efficiently.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-28.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Connie Waters</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">14 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">6</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +1
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>Food Order App</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        A food order app allows users to browse menus, place orders,
                        and track delivery from their favorite restaurants with ease.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-42.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Lori Broaddus</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">15 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">7</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>POS Admin Software</Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        POS admin software enables businesses to manage sales, track
                        inventory, and process transactions efficiently through a
                        centralized platform.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-48.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Stephen Dias</Link>
                          </h6>
                          <span className="fs-12 fw-normal ">CEO</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">22 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">5</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-26.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-27.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-28.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h6>
                        <Link to={all_routes.projectdetails}>
                          Invoicing &amp; Billing Software
                        </Link>
                      </h6>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_project"
                            >
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3 pb-3 border-bottom">
                      <p className="text-truncate line-clamb-3 mb-0">
                        Invoicing and billing software automates the creation,
                        sending, and tracking of invoices, making payment processes
                        quicker and more efficient.
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                      <div className="d-flex align-items-center file-name-icon">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-50.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2">
                          <h6 className="fw-normal fs-12">
                            <Link to="#">Angela Thomas</Link>
                          </h6>
                          <span className="fs-12 fw-normal">Project Leader</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="fs-12 fw-normal ">Deadline</span>
                          <p className="mb-0 fs-12">23 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-sm avatar-rounded bg-success-transparent flex-shrink-0 me-2">
                          <i className="ti ti-checklist text-success fs-16" />
                        </span>
                        <p>
                          <small>Tasks : </small>
                          <span className="text-dark">8</span>/10
                        </p>
                      </div>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-29.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-30.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="img"
                          />
                        </span>
                        <Link
                          className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
                          to="#"
                        >
                          +2
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-center mb-4">
                  <Link to="#" className="btn btn-primary">
                    <i className="ti ti-loader-3 me-1" />
                    Load More
                  </Link>
                </div>
              </div>
            </div>
            {/* / Project Grid */}
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

      {/* Add Project */}
      <div className="modal fade" id="add_project" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header header-border align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="modal-title me-2">Add Project </h5>
                <p className="text-dark">Project ID : PRO-0004</p>
              </div>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="add-info-fieldset ">
              <div className="contact-grids-tab p-3 pb-0">
                <ul className="nav nav-underline" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="basic-tab"
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
                      id="member-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#member"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Members
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="basic-info"
                  role="tabpanel"
                  aria-labelledby="basic-tab"
                  tabIndex={0}
                >
                  <form>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                              <i className="ti ti-photo text-gray-2 fs-16" />
                            </div>
                            <div className="profile-upload">
                              <div className="mb-2">
                                <h6 className="mb-1">Upload Project Logo</h6>
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
                            <label className="form-label">Project Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Client</label>
                            <CommonSelect
                              className='select'
                              options={clinetChoose}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Start Date</label>
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
                                <label className="form-label">End Date</label>
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
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Priority</label>
                                <CommonSelect
                                  className='select'
                                  options={priority}
                                  defaultValue={priority[0]}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Project Value</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="$"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Price Type</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Description</label>
                            <CommonTextEditor />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block mb-0">
                            <label className="form-label">Upload Files</label>
                            <input className="form-control" type="file" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="d-flex align-items-center justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-light border me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="member"
                  role="tabpanel"
                  aria-labelledby="member-tab"
                  tabIndex={0}
                >
                  <form>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">Team Members</label>
                            <CommonTagsInput
                              value={tags}
                              onChange={setTags}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">Team Leader</label>
                            <CommonTagsInput
                              value={tags1}
                              onChange={setTags1}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">
                              Project Manager
                            </label>
                            <CommonTagsInput
                              value={tags2}
                              onChange={setTags2}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div>
                            <label className="form-label">Tags</label>
                            <CommonTagsInput
                              value={tags3}
                              onChange={setTags3}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
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
                      <div className="d-flex align-items-center justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-light border me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-toggle="modal" data-inert={true}
                          data-bs-target="#success_modal"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Project */}
      {/* Edit Project */}
      <div className="modal fade" id="edit_project" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header header-border align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="modal-title me-2">Edit Project </h5>
                <p className="text-dark">Project ID : PRO-0004</p>
              </div>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="add-info-fieldset ">
              <div className="contact-grids-tab p-3 pb-0">
                <ul className="nav nav-underline" id="myTab1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="basic-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#basic-info1"
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
                      id="member-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#member1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Members
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent1">
                <div
                  className="tab-pane fade show active"
                  id="basic-info1"
                  role="tabpanel"
                  aria-labelledby="basic-tab1"
                  tabIndex={0}
                >
                  <form>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                            <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                              <i className="ti ti-photo text-gray-2 fs-16" />
                            </div>
                            <div className="profile-upload">
                              <div className="mb-2">
                                <h6 className="mb-1">Upload Project Logo</h6>
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
                            <label className="form-label">Project Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Office Management"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Client</label>
                            <CommonSelect
                              className='select'
                              options={clinetChoose}
                              defaultValue={clinetChoose[1]}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Start Date</label>
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
                                <label className="form-label">End Date</label>
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
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Priority</label>
                                <CommonSelect
                                  className='select'
                                  options={priorityChoose}
                                  defaultValue={priorityChoose[1]}
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Project Value</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="$"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3">
                                <label className="form-label">Price Type</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Description</label>
                            <CommonTextEditor />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block mb-0">
                            <label className="form-label">Upload Files</label>
                            <input className="form-control" type="file" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="d-flex align-items-center justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-light border me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="member1"
                  role="tabpanel"
                  aria-labelledby="member-tab1"
                  tabIndex={0}
                >
                  <form>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">Team Members</label>
                            <CommonTagsInput
                              value={tags}
                              onChange={setTags}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">Team Leader</label>
                            <CommonTagsInput
                              value={tags1}
                              onChange={setTags1}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">
                              Project Manager
                            </label>
                            <CommonTagsInput
                              value={tags2}
                              onChange={setTags2}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div>
                            <label className="form-label">Tags</label>
                            <CommonTagsInput
                              value={tags3}
                              onChange={setTags3}
                              placeholder="Add new"
                              className="custom-input-class" // Optional custom class
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
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
                      <div className="d-flex align-items-center justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-light border me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-toggle="modal" data-inert={true}
                          data-bs-target="#success_modal"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Project */}
      {/* Add Project Success */}
      <div className="modal fade" id="success_modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center p-3">
                <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
                  <i className="ti ti-check fs-24" />
                </span>
                <h5 className="mb-2">Project Added Successfully</h5>
                <p className="mb-3">
                  Stephan Peralt has been added with Client ID :{" "}
                  <span className="text-primary">#pro - 0004</span>
                </p>
                <div>
                  <div className="row g-2">
                    <div className="col-6">
                      <Link to={all_routes.project} className="btn btn-dark w-100">
                        Back to List
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to={all_routes.projectdetails}
                        className="btn btn-primary w-100"
                      >
                        Detail Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Project Success */}
    </>

  )
}

export default Project
