import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import Table from "../../../core/common/dataTable/index";
import { projectlistdetails } from '../../../core/data/json/projectlistdetails';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const ProjectList = () => {
  const data = projectlistdetails;
  const columns = [
    {
      title: "Project ID",
      dataIndex: "ProjectID",
      render: (text: String, record: any) => (
        <Link to={all_routes.projectdetails}>{record.ProjectID}</Link>
      ),
      sorter: (a: any, b: any) => a.ProjectID.length - b.ProjectID.length,
    },
    {
      title: "Project Name",
      dataIndex: "ProjectName",
      render: (text: string, record: any) => (
        <h6 className="fw-medium"><Link to={all_routes.projectdetails}>Office Management App</Link></h6>
      ),
      sorter: (a: any, b: any) => a.ProjectName.length - b.ProjectName.length,
    },
    {
      title: "Leader",
      dataIndex: "Leader",
      render: (text: String, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link
            to="#"
            className="avatar avatar-sm border avatar-rounded"
          >
            <ImageWithBasePath src={`assets/img/users/${record.UserImg}`} className="img-fluid" alt="img" />
          </Link>
          <div className="ms-2">
            <h6 className="fw-normal">
              <Link to="#">{text}</Link>
            </h6>
          </div>
        </div>

      ),
      sorter: (a: any, b: any) => a.Leader.length - b.Leader.length,
    },
    {
      title: "Team",
      dataIndex: "Team",
      render: (text: String, record: any) => (
        <div className="avatar-list-stacked avatar-group-sm">
          <span className="avatar avatar-rounded">
            <ImageWithBasePath
              className="border border-white"
              src={`assets/img/profiles/${record.share[0]}`}
              alt="img"
            />
          </span>
          <span className="avatar avatar-rounded">
            <ImageWithBasePath
              className="border border-white"
              src={`assets/img/profiles/${record.share[1]}`}
              alt="img"
            />
          </span>
          <span className="avatar avatar-rounded">
            <ImageWithBasePath
              className="border border-white"
              src={`assets/img/profiles/${record.share[2]}`}
              alt="img"
            />
          </span>
          <Link
            className="avatar bg-primary avatar-rounded text-fixed-white fs-12 fw-medium"
            to="#"
          >
            {record.Team}
          </Link>
        </div>

      ),
      sorter: (a: any, b: any) => a.Team.length - b.Team.length,
    },
    {
      title: "Deadline",
      dataIndex: "Deadline",
      sorter: (a: any, b: any) => a.Deadline.length - b.Deadline.length,
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      render: (text: String, record: any) => (
        <div className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            <span className={`rounded-circle  d-flex justify-content-center align-items-center me-2${text === 'High' ? 'bg-transparent-danger' : text === 'Low' ? 'bg-transparent-success' : 'bg-transparent-warning'}`}>
              <i className={`ti ti-point-filled ${text === 'High' ? 'text-danger' : text === 'Low' ? 'text-success' : 'text-warning'}`} />
            </span>{" "}
            {text}
          </Link>
          <ul className="dropdown-menu  dropdown-menu-end p-3">
            <li>
              <Link
                to="#"
                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
              >
                <span className="rounded-circle d-flex justify-content-center align-items-center me-2">
                  <i className="ti ti-point-filled text-danger" />
                </span>
                High
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
              >
                <span className="rounded-circle bg-transparent-warning d-flex justify-content-center align-items-center me-2">
                  <i className="ti ti-point-filled text-warning" />
                </span>
                Medium
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
              >
                <span className="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2">
                  <i className="ti ti-point-filled text-success" />
                </span>
                Low
              </Link>
            </li>
          </ul>
        </div>

      ),
      sorter: (a: any, b: any) => a.Priority.length - b.Priority.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string, record: any) => (
        <span className={`badge  ${text === 'Active' ? 'badge-success' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
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
            data-bs-toggle="modal" data-inert={true}
            data-bs-target="#edit_client"
          >
            <i className="ti ti-edit" />
          </Link>
          <Link
            to="#"
            data-bs-toggle="modal" data-inert={true}
            data-bs-target="#delete_modal"
          >
            <i className="ti ti-trash" />
          </Link>
        </div>

      ),
    },
  ]
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
                      Projects
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                <div className="me-2 mb-2">
                  <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                    <Link
                      to={all_routes.projectlist}
                      className="btn btn-icon btn-sm active bg-primary text-white me-1"
                    >
                      <i className="ti ti-list-tree" />
                    </Link>
                    <Link to={all_routes.project} className="btn btn-icon btn-sm">
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
            {/* Project list */}
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <h5>Project List</h5>
                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
            {/* / Project list  */}
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
                            <select className="select">
                              <option>Select</option>
                              <option>Anthony Lewis</option>
                              <option>Brian Villalobos</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Start Date</label>
                                <div className="input-icon-end position-relative">
                                  <input
                                    type="text"
                                    className="form-control datetimepicker"
                                    placeholder="dd/mm/yyyy"
                                    defaultValue="02-05-2024"
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
                                  <input
                                    type="text"
                                    className="form-control datetimepicker"
                                    placeholder="dd/mm/yyyy"
                                    defaultValue="02-05-2024"
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
                                <select className="select">
                                  <option>Select</option>
                                  <option>High</option>
                                  <option>Medium</option>
                                  <option>Low</option>
                                </select>
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
                            <div className="summernote" />
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
                        <button className="btn btn-primary" type="submit">
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
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Jerald,Andrew,Philip,Davis"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">Team Leader</label>
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Hendry,James"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">
                              Project Manager
                            </label>
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Dwight"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div>
                            <label className="form-label">Tags</label>
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Collab,Promotion,Rated"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
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
                            <select className="select">
                              <option>Select</option>
                              <option>Anthony Lewis</option>
                              <option>Brian Villalobos</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Start Date</label>
                                <div className="input-icon-end position-relative">
                                  <input
                                    type="text"
                                    className="form-control datetimepicker"
                                    placeholder="dd/mm/yyyy"
                                    defaultValue="02-05-2024"
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
                                  <input
                                    type="text"
                                    className="form-control datetimepicker"
                                    placeholder="dd/mm/yyyy"
                                    defaultValue="02-05-2024"
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
                                <select className="select">
                                  <option>Select</option>
                                  <option>High</option>
                                  <option>Medium</option>
                                  <option>Low</option>
                                </select>
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
                            <div className="summernote" />
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
                        <button className="btn btn-primary" type="submit">
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
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Jerald,Andrew,Philip,Davis"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">Team Leader</label>
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Hendry,James"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label me-2">
                              Project Manager
                            </label>
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Dwight"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div>
                            <label className="form-label">Tags</label>
                            <input
                              className="input-tags form-control"
                              placeholder="Add new"
                              type="text"
                              data-role="tagsinput"
                              name="Label"
                              defaultValue="Collab,Promotion,Rated"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select className="select">
                              <option>Select</option>
                              <option>Active</option>
                              <option>Inactive</option>
                            </select>
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

export default ProjectList
