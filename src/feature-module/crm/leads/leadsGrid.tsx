import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import dragula, { Drake } from "dragula";
import "dragula/dist/dragula.css";
import CrmsModal from '../../../core/modals/crms_modal'
const LeadsGrid = () => {
  const routes = all_routes
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const container3Ref = useRef<HTMLDivElement>(null);
  const container4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containers = [
      container1Ref.current as HTMLDivElement,
      container2Ref.current as HTMLDivElement,
      container3Ref.current as HTMLDivElement,
      container4Ref.current as HTMLDivElement,
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
          <h2 className="mb-1">Leads</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to={routes.adminDashboard}>
                  <i className="ti ti-smart-home" />
                </Link>
              </li>
              <li className="breadcrumb-item">CRM</li>
              <li className="breadcrumb-item active" aria-current="page">
                Leads Grid
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="me-2 mb-2">
            <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
              <Link to={routes.leadsList} className="btn btn-icon btn-sm me-1">
                <i className="ti ti-list-tree" />
              </Link>
              <Link
                to={routes.leadsGrid}
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
              data-bs-toggle="modal"
              data-bs-target="#add_leads"
              className="btn btn-primary d-flex align-items-center"
            >
              <i className="ti ti-circle-plus me-2" />
              Add Lead
            </Link>
          </div>
          <div className="head-icons ms-2">
          <CollapseHeader/>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Leads Grid */}
      <div className="card">
        <div className="card-body p-3">
          <div className="d-flex align-items-center justify-content-between">
            <h5>Leads Grid</h5>
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
      {/* Leads Kanban */}
      <div className="d-flex overflow-x-auto align-items-start mb-4">
        <div className="kanban-list-items bg-white">
          <div className="card mb-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-semibold d-flex align-items-center mb-1">
                    <i className="ti ti-circle-filled fs-8 text-warning me-2" />
                    Contacted
                  </h4>
                  <span className="fw-medium text-default">
                    02 Leads - $7,50,000
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="action-icon d-inline-flex">
                    <Link to="#">
                      <i className="ti ti-circle-plus" />
                    </Link>
                    <Link
                      to="#"
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#edit_leads"
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
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-drag-wrap pt-4" ref={container2Ref}>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-warning border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">SM</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>Linda White</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $03,50,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      linda@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (193) 7839 748
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Austin, United States
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-04.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-warning border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">CJ</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>Chris Johnson</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $3,50,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      chris@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (162) 8920 713
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Atlanta, United States
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-07.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kanban-list-items bg-white">
          <div className="card mb-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-semibold d-flex align-items-center mb-1">
                    <i className="ti ti-circle-filled fs-8 text-purple me-2" />
                    Not Contacted
                  </h4>
                  <span className="fw-medium text-default">
                    02 Leads - $7,60,000
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="action-icon d-inline-flex">
                    <Link to="#">
                      <i className="ti ti-circle-plus" />
                    </Link>
                    <Link
                      to="#"
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#edit_leads"
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
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-drag-wrap pt-4" ref={container3Ref}>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-purple border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">EJ</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>Emily Johnson</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $3,50,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      emily@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (179) 7382 829
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Newyork, United States
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-06.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-purple border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">MG</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>Maria Garcia</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $4,10,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      maria@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (120) 3728 039
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Denver, United States
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-05.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kanban-list-items bg-white">
          <div className="card mb-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-semibold d-flex align-items-center mb-1">
                    <i className="ti ti-circle-filled fs-8 text-success me-2" />
                    Closed
                  </h4>
                  <span className="fw-medium text-default">
                    45 Leads - $15,44,540
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="action-icon d-inline-flex">
                    <Link to="#">
                      <i className="ti ti-circle-plus" />
                    </Link>
                    <Link
                      to="#"
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#edit_leads"
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
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-drag-wrap pt-4" ref={container4Ref}>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-success border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">JS</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>John Smith</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $3,20,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      john@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (123) 4567 890
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Chester, United Kingdom
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-01.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-success border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">DL</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>David Lee</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $3,10,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      david@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (183) 9302 890
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Charlotte, United States
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-08.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card kanban-card mb-0">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-success border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">RM</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>Robert Martinez</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $4,50,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      robert@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (163) 2459 315
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Bristol, United Kingdom
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-09.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kanban-list-items bg-white me-0">
          <div className="card mb-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-semibold d-flex align-items-center mb-1">
                    <i className="ti ti-circle-filled fs-8 text-danger me-2" />
                    Lost
                  </h4>
                  <span className="fw-medium text-default">
                    15 Leads - $14,89,543
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="action-icon d-inline-flex">
                    <Link to="#">
                      <i className="ti ti-circle-plus" />
                    </Link>
                    <Link
                      to="#"
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#edit_leads"
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
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-drag-wrap pt-4" ref={container1Ref}>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-danger border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">MB</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>Michael Brown</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $4,10,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      micael@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (184) 2719 738
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      London, United Kingdom
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-03.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card kanban-card">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-danger border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">KD</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>Karen Davis</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $4,00,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      darleeo@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (163) 2459 315
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Detroit, United States
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-02.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card kanban-card mb-0">
                <div className="card-body">
                  <div className="d-block">
                    <div className="border-danger border border-2 mb-3" />
                    <div className="d-flex align-items-center mb-3">
                      <Link
                        to={routes.leadsDetails}
                        className="avatar avatar-lg bg-gray flex-shrink-0 me-2"
                      >
                        <span className="avatar-title text-dark">JA</span>
                      </Link>
                      <h6 className="fw-medium">
                        <Link to={routes.leadsDetails}>James Anderson</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-report-money text-dark me-1" />
                      $3,40,000
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-mail text-dark me-1" />
                      james@gmail.com
                    </p>
                    <p className="text-default d-inline-flex align-items-center mb-2">
                      <i className="ti ti-phone text-dark me-1" />
                      (168) 8392 823
                    </p>
                    <p className="text-default d-inline-flex align-items-center">
                      <i className="ti ti-map-pin-pin text-dark me-1" />
                      Manchester, United Kingdom
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                    <Link
                      to="#"
                      className="avatar avatar-sm  avatar-rounded flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-03.svg"
                        alt="image"
                      />
                    </Link>
                    <div className="icons-social d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-phone-call" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center me-2"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-color-swatch" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Leads Kanban */}
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
  <CrmsModal/>
</>

  )
}

export default LeadsGrid