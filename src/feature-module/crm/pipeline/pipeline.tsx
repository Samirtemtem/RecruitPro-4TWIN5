import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes';
import { pipelineData } from '../../../core/data/json/pipelineData';
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
import PredefinedDateRanges from "../../../core/common/datePicker";
import Table from "../../../core/common/dataTable/index";
import CrmsModal from '../../../core/modals/crms_modal';
const Pipeline = () => {
  const routes = all_routes;
  const data = pipelineData;
  const columns = [
    {
      title: "Pipeline Name",
      dataIndex: "Pipeline_Name",
      render: (text: string, record: any) => (
        <h6 className="fs-14 fw-medium">{text}</h6>
      ),
      sorter: (a: any, b: any) => a.Pipeline_Name.length - b.Pipeline_Name.length,
    },
    {
      title: "Total_Deal_Value",
      dataIndex: "Total_Deal_Value",
      sorter: (a: any, b: any) => a.Total_Deal_Value.length - b.Total_Deal_Value.length,
    },
    {
      title: "No_of_Deals",
      dataIndex: "No_of_Deals",
      sorter: (a: any, b: any) => a.No_of_Deals.length - b.No_of_Deals.length,
    },
    {
      title: "Stages",
      dataIndex: "Stages",
      render: (text: string) => (
        <div className=" d-flex align-items-center">
                      <div
                        className="progress me-2"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ height: 5, minWidth: 80 }}
                      >
                        <div
                          className={`progress-bar  ${text === 'Won'?'bg-success':text === 'In Pipeline'?'bg-purple':text === 'Conversation'?'bg-skyblue':text === 'Follow Up'?'bg-warning':text === 'Schedule servise'?'bg-pink':'bg-danger'}`}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <span className="fs-14 fw-normal">{text}</span>
                    </div>
      ),
      sorter: (a: any, b: any) => a.Stages.length - b.Stages.length,
    },
    {
      title: "Created Date",
      dataIndex: "Created_Date",
      sorter: (a: any, b: any) => a.Created_Date.length - b.Created_Date.length,
    },
   
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <>
          <span
            className={`badge d-inline-flex align-items-center badge-xs ${
              text === "Active" ? "badge-success" : "badge-danger"
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
      title: "",
      dataIndex: "actions",
      render: () => (
        <div className="action-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_pipeline"
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
  ];
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h2 className="mb-1">Pipeline</h2>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to={routes.adminDashboard}>
                  <i className="ti ti-smart-home" />
                </Link>
              </li>
              <li className="breadcrumb-item">CRM</li>
              <li className="breadcrumb-item active" aria-current="page">
                Pipeline List
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
              data-bs-target="#add_pipeline"
              className="btn btn-primary d-flex align-items-center"
            >
              <i className="ti ti-circle-plus me-2" />
              Add Pipeline
            </Link>
          </div>
          <div className="head-icons ms-2">
            <CollapseHeader/>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Leads List */}
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Pipeline List</h5>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="me-3">
              <div className="input-icon-end position-relative">
               <PredefinedDateRanges/>
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
                Stage
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Won
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    In Pipeline
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Conversation
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Follow Up
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
                $0.00 - $0.00
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    $10 - $20
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    $20 - $30
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    $40 - $50
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
                    InActive
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
      {/* /Leads List */}
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

export default Pipeline