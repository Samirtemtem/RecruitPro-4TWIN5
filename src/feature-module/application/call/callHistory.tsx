import React from "react";
import { Link } from "react-router-dom";
import { callhistorydata } from "../../../core/data/json/callHistoryData";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Table from "../../../core/common/dataTable/index";
import { all_routes } from "../../router/all_routes";
import { TableData } from "../../../core/data/interface";
import PredefinedDateRanges from "../../../core/common/datePicker";
import CallerDetails from "../../../core/modals/callerDetailsModal";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const CallHistory = () => {
  const data = callhistorydata;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
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
      sorter: (a: TableData, b: TableData) => a.name.length - b.name.length,
    },
    {
      title: "Phone",
      dataIndex: "phone_number",
      sorter: (a: any, b: any) => a.phone_number.length - b.phone_number.length,
    },

    {
      title: "Call Type",
      dataIndex: "call_type",
      render: (text: string,record:any) => (
        <>
          <div className="d-inline-flex align-items-center">
            <i className={`ti ti-${record?.icon}  ${text === "Incoming" ?'text-success': text === "Outgoing" ?'text-success': 'text-danger'} me-2`}></i>{text}
          </div>

        </>
      ),
      sorter: (a: any, b: any) => a.call_type.length - b.call_type.length,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      sorter: (a: any, b: any) => a.duration.length - b.duration.length,
    },
    {
      title: "Date & Time",
      dataIndex: "date_time",
      sorter: (a: any, b: any) => a.duration.length - b.duration.length,
    },
    {
      title: "",
      dataIndex: "actions",
      render: () => (
        <div>
          <div className="action-icon d-inline-flex">
            <Link
              to="#"
              className="me-2"
              data-bs-toggle="modal" data-inert={true} data-bs-target="#call_history"
            >
              <i className="ti ti-eye"></i>
            </Link>
          </div>
          <div className="action-icon d-inline-flex">
            <Link
              to="#"
              className="me-2"
              data-bs-toggle="modal" data-inert={true} data-bs-target="#delete_modal"
            >
              <i className="ti ti-trash"></i>
            </Link>
          </div>
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
              <h2 className="mb-1">Call History</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Call History
                  </li>
                </ol>
              </nav>
            </div>
            <div className="head-icons">
              <CollapseHeader/>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Call History List</h5>
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
                    Call Type
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Incoming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Outgoing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Missed Call
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
      <CallerDetails />

      {/* /Page Wrapper */}
    </>

  );
};
export default CallHistory;


