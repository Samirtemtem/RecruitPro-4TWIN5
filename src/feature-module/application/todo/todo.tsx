import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoModal from "../../../core/modals/todoModal";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { route } from "../../../core/common/selectoption/selectoption";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";



const Todo = () => {

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
                  <Link to={all_routes.TodoList} className="btn btn-icon btn-sm">
                    <i className="ti ti-list-tree" />
                  </Link>
                  <Link
                    to={all_routes.todo}
                    className="btn btn-icon btn-sm active bg-primary text-white"
                  >
                    <i className="ti ti-table" />
                  </Link>
                </div>
                <div className="">
                  <div className="input-icon-start position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Todo List"
                    />
                  </div>
                </div>
                <div className="ms-2 mb-0 head-icons">
                  <CollapseHeader />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row gy-3 mb-3">
                  <div className="col-sm-4">
                    <div className="d-flex align-items-center">
                      <h4>Total Todo</h4>
                      <span className="badge badge-dark rounded-pill badge-xs ms-2">
                        +1
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="d-flex align-items-center justify-content-end">
                      <p className="mb-0 me-3 pe-3 border-end fs-14">
                        Total Task : <span className="text-dark"> 55 </span>
                      </p>
                      <p className="mb-0 me-3 pe-3 border-end fs-14">
                        Pending : <span className="text-dark"> 15 </span>
                      </p>
                      <p className="mb-0 fs-14">
                        Completed : <span className="text-dark"> 40 </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn bg-primary-transparent border-dashed border-primary w-100 text-start"
                    data-bs-toggle="modal" data-inert={true}
                    data-bs-target="#add_todo"
                  >
                    <i className="ti ti-plus me-2" />
                    New task
                  </button>
                </div>
                <div className="row border-bottom mb-3">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                      <h6 className="me-2">Priority</h6>
                      <ul
                        className="nav nav-pills border d-inline-flex p-1 rounded bg-light todo-tabs"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto active"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-selected="true"
                          >
                            All
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            High
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-medium"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            Medium
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-low"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            Low
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center justify-content-lg-end flex-wrap row-gap-3 mb-3">
                      <div className="input-icon w-120 position-relative me-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-9" />
                        </span>
                        <input
                          type="text"
                          className="form-control datetimepicker"
                          placeholder="Due Date"
                        />
                      </div>
                      <div className="dropdown me-2">
                        <Link
                          to="#"
                          className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          All Tags
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
                              Internal
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Projects
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Meetings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Reminder
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Research
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="d-inline-flex me-2">Sort By : </span>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn btn-white d-inline-flex align-items-center border-0 bg-transparent p-0 text-dark"
                            data-bs-toggle="dropdown"
                          >
                            Created Date
                          </Link>
                          <ul className="dropdown-menu  dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                Created Date
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                Priority
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                Due Date
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                  >
                    <div className="accordion todo-accordion" id="accordionExample">
                      <div className="accordion-item mb-3">
                        <div className="row align-items-center mb-3 row-gap-3">
                          <div className="col-lg-4 col-sm-6">
                            <div className="accordion-header" id="headingTwo">
                              <div
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-controls="collapseTwo"
                              >
                                <div className="d-flex align-items-center w-100">
                                  <div className="me-2">
                                    <Link to="#">
                                      <span>
                                        <i className="fas fa-chevron-down" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <i className="ti ti-square-rounded text-purple me-2" />
                                    </span>
                                    <h5 className="fw-semibold">High</h5>
                                    <span className="badge bg-light rounded-pill ms-2">
                                      15
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-6">
                            <div className="d-flex align-items-center justify-content-sm-end">
                              <Link
                                to="#"
                                className="btn btn-light me-2"
                                data-bs-toggle="modal" data-inert={true}
                                data-bs-target="#add_todo"
                              >
                                <i className="ti ti-circle-plus me-2" />
                                Add New
                              </Link>
                              <Link to="#" className="btn btn-outline-light border">
                                See All <i className="ti ti-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="list-group list-group-flush border-bottom pb-2">
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          onChange={() => toggleTodo(0)}
                                        />
                                      </div>
                                      <span className="me-2 d-flex align-items-center rating-select">
                                        <i className="ti ti-star-filled filled" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Finalize project proposal
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        15 Jan 2025
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-success me-3">
                                        Projects
                                      </span>
                                      <span className="badge bg-soft-pink d-inline-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Onhold
                                      </span>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-list-stacked avatar-group-sm">
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
                                          <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                              className="border border-white"
                                              src="assets/img/profiles/avatar-15.jpg"
                                              alt="img"
                                            />
                                          </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Submit to supervisor by EOD
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        25 May 2024
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-danger me-3">
                                        Internal
                                      </span>
                                      <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Inprogress
                                      </span>
                                      <div className="d-flex align-items-center">
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
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultChecked
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Prepare presentation slides
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        15 Jan 2025
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-secondary me-3">
                                        Reminder
                                      </span>
                                      <span className="badge badge-secondary-transparent d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Pending
                                      </span>
                                      <div className="d-flex align-items-center">
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
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3">
                        <div className="row align-items-center mb-3 row-gap-3">
                          <div className="col-lg-4 col-sm-6">
                            <div className="accordion-header" id="headingThree">
                              <div
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-controls="collapseThree"
                              >
                                <div className="d-flex align-items-center w-100">
                                  <div className="me-2">
                                    <Link to="#">
                                      <span>
                                        <i className="fas fa-chevron-down" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <i className="ti ti-square-rounded text-warning me-2" />
                                    </span>
                                    <h5 className="fw-semibold">Medium</h5>
                                    <span className="badge bg-light rounded-pill ms-2">
                                      05
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-6">
                            <div className="d-flex align-items-center justify-content-sm-end">
                              <Link
                                to="#"
                                className="btn btn-light me-2"
                                data-bs-toggle="modal" data-inert={true}
                                data-bs-target="#add_todo"
                              >
                                <i className="ti ti-circle-plus me-2" />
                                Add New
                              </Link>
                              <Link to="#" className="btn btn-outline-light border">
                                See All <i className="ti ti-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="list-group list-group-flush border-bottom pb-2">
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Check and respond to emails
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        Tomorrow
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-secondary me-3">
                                        Reminder
                                      </span>
                                      <span className="badge badge-soft-success align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Completed
                                      </span>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                          <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                              className="border border-white"
                                              src="assets/img/profiles/avatar-28.jpg"
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
                                              src="assets/img/profiles/avatar-24.jpg"
                                              alt="img"
                                            />
                                          </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Coordinate with department head on progress
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        25 May 2024
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-danger me-3">
                                        Internal
                                      </span>
                                      <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Inprogress
                                      </span>
                                      <div className="d-flex align-items-center">
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
                                              src="assets/img/profiles/avatar-09.jpg"
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
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3">
                        <div className="row align-items-center mb-3 row-gap-3">
                          <div className="col-lg-4 col-sm-6">
                            <div className="accordion-header" id="headingFour">
                              <div
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-controls="collapseFour"
                              >
                                <div className="d-flex align-items-center w-100">
                                  <div className="me-2">
                                    <Link to="#">
                                      <span>
                                        <i className="fas fa-chevron-down" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <i className="ti ti-square-rounded text-success me-2" />
                                    </span>
                                    <h5 className="fw-semibold">Low</h5>
                                    <span className="badge bg-light rounded-pill ms-2">
                                      24
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-6">
                            <div className="d-flex align-items-center justify-content-sm-end">
                              <Link
                                to="#"
                                className="btn btn-light me-2"
                                data-bs-toggle="modal" data-inert={true}
                                data-bs-target="#add_todo"
                              >
                                <i className="ti ti-circle-plus me-2" />
                                Add New
                              </Link>
                              <Link to="#" className="btn btn-outline-light border">
                                See All <i className="ti ti-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="list-group list-group-flush">
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Plan tasks for the next day
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        Today
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-info me-3">
                                        Social
                                      </span>
                                      <span className="badge badge-soft-secondary d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Pending
                                      </span>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                          <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                              className="border border-white"
                                              src="assets/img/profiles/avatar-28.jpg"
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
                                              src="assets/img/profiles/avatar-24.jpg"
                                              alt="img"
                                            />
                                          </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel">
                    <div className="accordion todo-accordion">
                      <div className="accordion-item mb-3">
                        <div className="row align-items-center mb-3 row-gap-3">
                          <div className="col-lg-4 col-sm-6">
                            <div className="accordion-header" id="headingSix">
                              <div
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-controls="collapseSix"
                              >
                                <div className="d-flex align-items-center w-100">
                                  <div className="me-2">
                                    <Link to="#">
                                      <span>
                                        <i className="fas fa-chevron-down" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <i className="ti ti-square-rounded text-purple me-2" />
                                    </span>
                                    <h5 className="fw-semibold">High</h5>
                                    <span className="badge bg-light rounded-pill ms-2">
                                      15
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-6">
                            <div className="d-flex align-items-center justify-content-sm-end">
                              <Link
                                to="#"
                                className="btn btn-light me-2"
                                data-bs-toggle="modal" data-inert={true}
                                data-bs-target="#add_todo"
                              >
                                <i className="ti ti-circle-plus me-2" />
                                Add New
                              </Link>
                              <Link to="#" className="btn btn-outline-light border">
                                See All <i className="ti ti-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingSix"
                        >
                          <div className="accordion-body">
                            <div className="list-group list-group-flush">
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star-filled filled" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Finalize project proposal
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        15 Jan 2025
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-success me-3">
                                        Projects
                                      </span>
                                      <span className="badge bg-soft-pink d-inline-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Onhold
                                      </span>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-list-stacked avatar-group-sm">
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
                                          <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                              className="border border-white"
                                              src="assets/img/profiles/avatar-15.jpg"
                                              alt="img"
                                            />
                                          </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Submit to supervisor by EOD
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        25 May 2024
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-danger me-3">
                                        Internal
                                      </span>
                                      <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Inprogress
                                      </span>
                                      <div className="d-flex align-items-center">
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
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          defaultChecked
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Prepare presentation slides
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        15 Jan 2025
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-secondary me-3">
                                        Reminder
                                      </span>
                                      <span className="badge badge-secondary-transparent d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Pending
                                      </span>
                                      <div className="d-flex align-items-center">
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
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-medium" role="tabpanel">
                    <div className="accordion todo-accordion">
                      <div className="accordion-item mb-3">
                        <div className="row align-items-center mb-3 row-gap-3">
                          <div className="col-lg-4 col-sm-6">
                            <div className="accordion-header" id="headingSeven">
                              <div
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-controls="collapseSeven"
                              >
                                <div className="d-flex align-items-center w-100">
                                  <div className="me-2">
                                    <Link to="#">
                                      <span>
                                        <i className="fas fa-chevron-down" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <i className="ti ti-square-rounded text-warning me-2" />
                                    </span>
                                    <h5 className="fw-semibold">Medium</h5>
                                    <span className="badge bg-light rounded-pill ms-2">
                                      05
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-6">
                            <div className="d-flex align-items-center justify-content-sm-end">
                              <Link
                                to="#"
                                className="btn btn-light me-2"
                                data-bs-toggle="modal" data-inert={true}
                                data-bs-target="#add_todo"
                              >
                                <i className="ti ti-circle-plus me-2" />
                                Add New
                              </Link>
                              <Link to="#" className="btn btn-outline-light border">
                                See All <i className="ti ti-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingSeven"
                        >
                          <div className="accordion-body">
                            <div className="list-group list-group-flush">
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Check and respond to emails
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        Tomorrow
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-secondary me-3">
                                        Reminder
                                      </span>
                                      <span className="badge badge-soft-success align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Completed
                                      </span>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                          <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                              className="border border-white"
                                              src="assets/img/profiles/avatar-28.jpg"
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
                                              src="assets/img/profiles/avatar-24.jpg"
                                              alt="img"
                                            />
                                          </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Coordinate with department head on progress
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        25 May 2024
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-danger me-3">
                                        Internal
                                      </span>
                                      <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Inprogress
                                      </span>
                                      <div className="d-flex align-items-center">
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
                                              src="assets/img/profiles/avatar-09.jpg"
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
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-low" role="tabpanel">
                    <div className="accordion todo-accordion">
                      <div className="accordion-item mb-3">
                        <div className="row align-items-center mb-3 row-gap-3">
                          <div className="col-lg-4 col-sm-6">
                            <div className="accordion-header" id="headingEight">
                              <div
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEight"
                                aria-controls="collapseEight"
                              >
                                <div className="d-flex align-items-center w-100">
                                  <div className="me-2">
                                    <Link to="#">
                                      <span>
                                        <i className="fas fa-chevron-down" />
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <i className="ti ti-square-rounded text-success me-2" />
                                    </span>
                                    <h5 className="fw-semibold">Low</h5>
                                    <span className="badge bg-light rounded-pill ms-2">
                                      24
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-sm-6">
                            <div className="d-flex align-items-center justify-content-sm-end">
                              <Link
                                to="#"
                                className="btn btn-light me-2"
                                data-bs-toggle="modal" data-inert={true}
                                data-bs-target="#add_todo"
                              >
                                <i className="ti ti-circle-plus me-2" />
                                Add New
                              </Link>
                              <Link to="#" className="btn btn-outline-light border">
                                See All <i className="ti ti-arrow-right ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingEight"
                        >
                          <div className="accordion-body">
                            <div className="list-group list-group-flush">
                              <div className="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                                <div className="row align-items-center row-gap-3">
                                  <div className="col-lg-6 col-md-7">
                                    <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                      <span className="me-2 d-flex align-items-center">
                                        <i className="ti ti-grid-dots text-dark" />
                                      </span>
                                      <div className="form-check form-check-md me-2">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                        />
                                      </div>
                                      <span className="me-2 rating-select d-flex align-items-center">
                                        <i className="ti ti-star" />
                                      </span>
                                      <div className="strike-info">
                                        <h4 className="fs-14">
                                          Plan tasks for the next day
                                        </h4>
                                      </div>
                                      <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                        <i className="ti ti-calendar me-1" />
                                        Today
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-5">
                                    <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                      <span className="badge badge-info me-3">
                                        Social
                                      </span>
                                      <span className="badge badge-soft-secondary d-flex align-items-center me-3">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        Pending
                                      </span>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                          <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                              className="border border-white"
                                              src="assets/img/profiles/avatar-28.jpg"
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
                                              src="assets/img/profiles/avatar-24.jpg"
                                              alt="img"
                                            />
                                          </span>
                                        </div>
                                        <div className="dropdown ms-2">
                                          <Link
                                            to="#"
                                            className="d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                          >
                                            <i className="ti ti-dots-vertical" />
                                          </Link>
                                          <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#add_todo"
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
                                                <i className="ti ti-trash me-2" />
                                                Delete
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#view_todo"
                                              >
                                                <i className="ti ti-eye me-2" />
                                                View
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Link to="#" className="btn btn-primary">
                    <i className="ti ti-loader me-2" />
                    Load More
                  </Link>
                </div>
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

export default Todo;
