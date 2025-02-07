import { useEffect, useRef, useState } from "react";
import { Sliders, Upload } from "react-feather";
import Select from "react-select";
import { Link } from "react-router-dom";


import {
  Clock,
  File,
  Folder,
  FolderMinus,
  HardDrive,
  PlusCircle,
  Send,
  Settings,
  Star,
  UploadCloud,
  FileText,
  Target,
  Trash2,
} from "react-feather";

import FileContent from "./fileContent";
import FileModal from "./fileModal";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { salestypelist } from "../../core/common/selectoption/selectoption";
import { Calendar } from "primereact/calendar";
import { DatePicker } from "antd";
import dragula, { Drake } from "dragula";
import "dragula/dist/dragula.css";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";

const KanbanView = () => {

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const container3Ref = useRef<HTMLDivElement>(null);
  const container4Ref = useRef<HTMLDivElement>(null);
  const container5Ref = useRef<HTMLDivElement>(null);
  const container6Ref = useRef<HTMLDivElement>(null);
  const container7Ref = useRef<HTMLDivElement>(null);
  const container8Ref = useRef<HTMLDivElement>(null);
  const container9Ref = useRef<HTMLDivElement>(null);
  const container10Ref = useRef<HTMLDivElement>(null);
  const container11Ref = useRef<HTMLDivElement>(null);
  const container12Ref = useRef<HTMLDivElement>(null);
  const container13Ref = useRef<HTMLDivElement>(null);
  const container14Ref = useRef<HTMLDivElement>(null);
  const container15Ref = useRef<HTMLDivElement>(null);
  const container16Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = [
      container1Ref.current as HTMLDivElement,
      container2Ref.current as HTMLDivElement,
      container3Ref.current as HTMLDivElement,
      container4Ref.current as HTMLDivElement,
      container5Ref.current as HTMLDivElement,
      container6Ref.current as HTMLDivElement,
      container7Ref.current as HTMLDivElement,
      container8Ref.current as HTMLDivElement,
      container9Ref.current as HTMLDivElement,
      container10Ref.current as HTMLDivElement,
      container11Ref.current as HTMLDivElement,
      container12Ref.current as HTMLDivElement,
      container13Ref.current as HTMLDivElement,
      container14Ref.current as HTMLDivElement,
      container15Ref.current as HTMLDivElement,
      container16Ref.current as HTMLDivElement,
    ].filter((container) => container !== null);

    const drake: Drake = dragula(containers);
    return () => {
      drake.destroy();
    };
  }, []);

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Kanban View</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="index.html">
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Kanban View
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
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
              <div className="ms-2 mb-0 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h4>Projects</h4>
              <div className="d-flex align-items-center flex-wrap row-gap-3">
                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                  <span className="avatar avatar-rounded bg-primary fs-12">1+</span>
                </div>
                <div className="d-flex align-items-center me-3">
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
                <div className="input-icon-start position-relative">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Project"
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
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
                <div className="col-lg-8">
                  <div className="d-flex align-items-center justify-content-lg-end flex-wrap row-gap-3 mb-3">
                    <div className="dropdown me-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        Clients
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Clients
                          </Link>
                        </li>
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
                      </ul>
                    </div>
                    <div className="input-icon w-120 position-relative me-2">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar text-gray-9" />
                      </span>
                      <DatePicker
                        className="form-control datetimepicker"
                        format={{
                          format: "DD-MM-YYYY",
                          type: "mask",
                        }}
                        getPopupContainer={getModalContainer}
                        placeholder="Create Date"
                      />
                    </div>
                    <div className="input-icon w-120 position-relative me-2">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar text-gray-9" />
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
                            On-hold
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Completed
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center border p-2 rounded">
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
                              Last 7 Days
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
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">02</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container1Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">13</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container2Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-158
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">04</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container3Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-160
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">10</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container4Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel">
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">02</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container5Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">13</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container6Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">04</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container7Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">10</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container8Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-purple badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    High
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-medium" role="tabpanel">
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">02</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container9Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">13</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container10Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">04</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container11Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">10</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container12Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Medium
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-low" role="tabpanel">
                  <div className="d-flex align-items-start overflow-auto project-status pb-4">
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                              <span className="bg-pink rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">New</h5>
                            <span className="badge bg-light rounded-pill">02</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container13Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-154
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-155
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                              <span className="bg-skyblue rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Inprogress</h5>
                            <span className="badge bg-light rounded-pill">13</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container14Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-156
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-157
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-danger p-1 d-flex rounded-circle me-2">
                              <span className="bg-danger rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">On-hold</h5>
                            <span className="badge bg-light rounded-pill">04</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container15Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-159
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-transparent-secondary w-100">
                      <div className="bg-white p-2 rounded mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                              <span className="bg-success rounded-circle d-block p-1" />
                            </span>
                            <h5 className="me-2">Completed</h5>
                            <span className="badge bg-light rounded-pill">10</span>
                          </div>
                          <div className="dropdown">
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
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="kanban-drag-wrap" ref={container16Ref}>
                        <div>
                          <div className="card kanban-card mb-2">
                            <div className="card-body">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-outline-dark me-2">
                                    Web Layout
                                  </span>
                                  <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                    <i className="fas fa-circle fs-6 me-1" />
                                    Low
                                  </span>
                                </div>
                                <div className="dropdown">
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
                                  </ul>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/kanban-arrow.svg"
                                    className="w-auto h-auto"
                                    alt="Img"
                                  />
                                </span>
                                <h6 className="d-flex align-items-center">
                                  Project Title{" "}
                                  <span className="fs-12 ms-2 text-gray">
                                    PRJ-161
                                  </span>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Budget
                                  </span>
                                  <p className="fs-12 text-dark">$24,000</p>
                                </div>
                                <div className="me-3 pe-3 border-end">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Tasks
                                  </span>
                                  <p className="fs-12 text-dark">12/15</p>
                                </div>
                                <div className="">
                                  <span className="fw-medium fs-12 d-block mb-1">
                                    Due on
                                  </span>
                                  <p className="fs-12 text-dark">15/04/2024</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                  <Link
                                    to="#"
                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                  >
                                    1+
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark me-2"
                                  >
                                    <i className="ti ti-message-circle text-gray me-1" />
                                    14
                                  </Link>
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-dark"
                                  >
                                    <i className="ti ti-paperclip text-gray me-1" />
                                    14
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          to="#"
                          className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                        >
                          <i className="ti ti-plus me-2" />
                          New Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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

  );
};

export default KanbanView;
