import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoModal from "../../../core/modals/todoModal";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import PredefinedDateRanges from "../../../core/common/datePicker";
import { DatePicker } from "antd";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";



const TodoList = () => {

  const [isTodo, setIsTodo] = useState([false, false, false]);
  const toggleTodo = (index: number) => {
    setIsTodo((prevIsTodo) => {
      const newIsTodo = [...prevIsTodo];
      newIsTodo[index] = !newIsTodo[index];
      return newIsTodo;
    });
  };

  const options = [
    { value: "bulk-actions", label: "Bulk Actions" },
    { value: "delete-marked", label: "Delete Marked" },
    { value: "unmark-all", label: "Unmark All" },
    { value: "mark-all", label: "Mark All" },
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
                <h2 className="mb-1">Todo</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={all_routes.adminDashboard}>
                        <i className="ti ti-smart-home" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Application</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Todo
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                <div className="d-flex align-items-center border rounded p-1 me-2">
                  <Link
                    to={all_routes.TodoList}
                    className="btn btn-icon btn-sm active bg-primary text-white"
                  >
                    <i className="ti ti-list-tree" />
                  </Link>
                  <Link to={all_routes.todo} className="btn btn-icon btn-sm">
                    <i className="ti ti-table" />
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="#"
                    className="btn btn-primary d-flex align-items-center"
                    data-bs-toggle="modal" data-inert={true}
                    data-bs-target="#add_todo"
                  >
                    <i className="ti ti-circle-plus me-2" />
                    Create New
                  </Link>
                </div>
                <div className="ms-2 mb-0 head-icons">
                  <CollapseHeader />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <h5 className="d-flex align-items-center">
                  Todo Lists{" "}
                  <span className="badge bg-soft-pink ms-2">200 Employees</span>
                </h5>
                <div className="d-flex align-items-center flex-wrap row-gap-3">
                  <div className="me-3">
                    <div className="input-icon-end position-relative">
                      <PredefinedDateRanges />
                      <span className="input-icon-addon">
                        <i className="ti ti-chevron-down" />
                      </span>
                    </div>
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
                      placeholder="DD-MM-YYYY"
                    />
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Tags
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          All Tags
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Urgent
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          High
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Medium
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Assignee
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Sophie
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Cameron
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Doris
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Rufana
                        </Link>
                      </li>
                    </ul>
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
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Completed
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
                          Inprogress
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Onhold
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
                      <span className="fs-12 d-inline-flex me-1">Sort By : </span>
                      Last 7 Days
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 7 Days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 1 month
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 1 year
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                {/* Student List */}
                <div className="custom-datatable-filter table-responsive">
                  <table className="table datatable">
                    <thead className="thead-light">
                      <tr>
                        <th className="no-sort">
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="select-all"
                            />
                          </div>
                        </th>
                        <th>Company Name</th>
                        <th>Tags</th>
                        <th>Assignee</th>
                        <th>Created On</th>
                        <th>Progress</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th className="no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-danger me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Respond to any pending messages
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-info">Social</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
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
                                src="assets/img/profiles/avatar-29.jpg"
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
                          </div>
                        </td>
                        <td>14/01/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 100%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-success rounded"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>14/01/2024</td>
                        <td>
                          <span className="badge badge-soft-success d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star-filled filled" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Update calendar and schedule
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-purple">Meetings</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="img"
                              />
                            </span>
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
                          </div>
                        </td>
                        <td>21/01/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 15%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-danger rounded"
                              role="progressbar"
                              style={{ width: "15%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>21/01/2024</td>
                        <td>
                          <span className="badge badge-soft-dark d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Respond to any pending messages
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-pink">Research</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-04.jpg"
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
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-06.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>20/02/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 45%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-warning rounded"
                              role="progressbar"
                              style={{ width: "45%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>20/02/2024</td>
                        <td>
                          <span className="badge bg-transparent-purple d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Inprogress
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-warning me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Attend team meeting at 10:00 AM
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-skyblue">Web Design</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="img"
                              />
                            </span>
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
                          </div>
                        </td>
                        <td>15/03/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 40%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-warning rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>15/03/2024</td>
                        <td>
                          <span className="badge bg-transparent-purple d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Inprogress
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Check and respond to emails
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-secondary">Reminder</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-08.jpg"
                                alt="img"
                              />
                            </span>
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
                          </div>
                        </td>
                        <td>12/04/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 65%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-purple rounded"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>12/04/2024</td>
                        <td>
                          <span className="badge badge-soft-dark d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-warning me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Coordinate with department head
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-danger">Internal</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-11.jpg"
                                alt="img"
                              />
                            </span>
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
                          </div>
                        </td>
                        <td>20/05/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 85%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-pink rounded"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>20/05/2024</td>
                        <td>
                          <span className="badge bg-soft-pink d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Onhold
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-success me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Plan tasks for the next day
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-info">Social</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="img"
                              />
                            </span>
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
                          </div>
                        </td>
                        <td>06/07/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 100%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-success rounded"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>06/07/2024</td>
                        <td>
                          <span className="badge badge-soft-success d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Completed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-success me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Finalize project proposal
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-success">Projects</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-17.jpg"
                                alt="img"
                              />
                            </span>
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
                          </div>
                        </td>
                        <td>02/09/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 65%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-danger rounded"
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>02/09/2024</td>
                        <td>
                          <span className="badge bg-soft-pink d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Onhold
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-purple me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Submit to supervisor by EOD
                          </p>
                        </td>
                        <td>
                          <span className="badge badge-secondary">Reminder</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-20.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-21.jpg"
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
                          </div>
                        </td>
                        <td>15/11/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 75%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-purple rounded"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>15/11/2024</td>
                        <td>
                          <span className="badge bg-transparent-purple d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Inprogress
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="form-check form-check-md">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <span className="mx-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star" />
                            </span>
                            <span className="d-flex align-items-center">
                              <i className="ti ti-square-rounded text-success me-2" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <p className="fw-medium text-dark">
                            Prepare presentation slides
                          </p>
                        </td>
                        <td>
                          <span className="badge bg-pink">Research</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
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
                                src="assets/img/profiles/avatar-24.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-25.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>10/12/2024</td>
                        <td>
                          <span className="d-block mb-1">Progress : 90%</span>
                          <div
                            className="progress progress-xs flex-grow-1 mb-2"
                            style={{ width: 190 }}
                          >
                            <div
                              className="progress-bar bg-pink rounded"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>10/12/2024</td>
                        <td>
                          <span className="badge badge-soft-dark d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#edit_todo"
                            >
                              <i className="ti ti-edit" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm btn-icon"
                              data-bs-toggle="modal" data-inert={true}
                              data-bs-target="#delete_modal"
                            >
                              <i className="ti ti-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /Student List */}
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

      <TodoModal />
    </>
  );
};

export default TodoList;
