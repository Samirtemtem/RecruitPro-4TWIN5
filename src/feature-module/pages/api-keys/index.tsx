import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { apiKeyDetails } from "../../../core/data/json/apiKeyDetails";
import Table from "../../../core/common/dataTable/index";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import PredefinedDateRanges from "../../../core/common/datePicker";
import AddKeyModal from "./addKeyModal";
import EditKeyModal from "./editKeyModal copy";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const ApiKeys = () => {

  const data = apiKeyDetails;
  const columns = [
    {
      title: "Service Name",
      dataIndex: "service_name",
      sorter: (a: any, b: any) => a.service_name.length - b.service_name.length,
    },
    {
      title: "Created By",
      dataIndex: "created_by",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md" data-bs-toggle="modal" data-inert={true} data-bs-target="#view_details">
            <ImageWithBasePath src={record.image_url} className="img-fluid rounded-circle" alt="img" />
          </Link>
          <div className="ms-2">
            <p className="text-dark fw-medium mb-0"><Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#view_details">{text}</Link></p>
            <span className="fs-12">{record.text}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.created_by.length - b.created_by.length,
    },
    {
      title: "Api Key",
      dataIndex: "api_key",
      render: (text: string, record: any) => (
        <>
          <div className="d-flex align-items-center">
            <p className="me-2 mb-0">{text}</p>
            <span><i className="ti ti-clipboard"></i></span>
          </div></>
      ),
      sorter: (a: any, b: any) => a.api_key.length - b.api_key.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string, record: any) => (
        <>
          <span
            className={`badge d-inline-flex align-items-center badge-xs ${text === 'Success'
              ? 'badge-success'
              : text === 'Warning'
                ? 'badge-warning'
                : 'badge-danger'
              }`}
          >
            <i className="ti ti-point-filled me-1"></i>
            {text}
          </span>
        </>
      ),
      sorter: (a: any, b: any) => a.status.length - b.status.length,
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      sorter: (a: any, b: any) => a.created_date.length - b.created_date.length,
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
            data-bs-target="#edit_key"
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
              <h2 className="mb-1">API Keys</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Content</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    API Keys
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
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
                  data-bs-target="#add_key"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Key
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>API Keys List</h5>
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
                    Employee
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Anthony Lewis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Brian Villalobos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Harvey Smith
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
                        Success
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Rejected
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Warning
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
      <AddKeyModal />
      <EditKeyModal />
    </>





  );
};

export default ApiKeys;
