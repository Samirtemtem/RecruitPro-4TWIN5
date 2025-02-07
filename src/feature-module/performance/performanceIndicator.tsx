import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import { performanceIndicatorData } from "../../core/data/json/performanceIndicatorData";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import Table from "../../core/common/dataTable/index";
import PerformanceIndicatorModal from "../../core/modals/performanceIndicatorModal";

const PerformanceIndicator = () => {
    const routes = all_routes;
    const data = performanceIndicatorData;
    const columns = [
      {
        title: "Designation",
        dataIndex: "Designation",
        render: (text: string) => (
          <div className="d-flex align-items-center file-name-icon">
            <div className="ms-2">
              <h6 className="fw-medium">
                <Link to="#">{text}</Link>
              </h6>
            </div>
          </div>
        ),
        sorter: (a: any, b: any) => a.Designation.length - b.Designation.length,
      },
      {
        title: "Department",
        dataIndex: "Department",
        sorter: (a: any, b: any) => a.Department.length - b.Department.length,
      },
      {
        title: "Approved By",
        dataIndex: "ApprovedBy",
        render: (text: string, record: any) => (
          <div className="d-flex align-items-center file-name-icon">
            <Link
              to="#"
              className="avatar avatar-md avatar-rounded"
            >
              <ImageWithBasePath
                src={`assets/img/users/${record.Image}`}
                className="img-fluid"
                alt="img"
              />
            </Link>
            <div className="ms-2">
              <h6 className="fw-medium">
                <Link to="#">{text}</Link>
              </h6>
              <p className="fs-12">{record.Role}</p>
            </div>
          </div>
        ),
        sorter: (a: any, b: any) => a.ApprovedBy.length - b.ApprovedBy.length,
      },
      {
        title: "Created Date",
        dataIndex: "CreatedDate",
        sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
      },
      {
        title: "Status",
        dataIndex: "Status",
        render: (text: string) => (
          <span className="badge badge-success d-inline-flex align-items-center badge-xs">
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
              data-bs-target="#edit_performance-indicator"
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
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Performance Indicator</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Performance</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Performance Indicator
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <Link
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_performance_indicator"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Indicator
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Performance Indicator list */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Performance Indicator List</h5>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
          {/* /Performance Indicator list */}
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

      <PerformanceIndicatorModal />
    </>
  );
};

export default PerformanceIndicator;
