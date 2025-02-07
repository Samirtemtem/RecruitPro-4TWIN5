import React from "react";
import { Link } from "react-router-dom";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
import { all_routes } from "../router/all_routes";
import Table from "../../core/common/dataTable/index";
import { HolidaysData } from "../../core/data/json/holidaysData";
import HolidaysModal from "../../core/modals/holidaysModal";

const Holidays = () => {
    const routes = all_routes;
    const data = HolidaysData;
    const columns = [
        {
          title: "Title",
          dataIndex: "Title",
          render: (text: string) => (
            <h6 className="fw-medium">
                <Link to="#">{text}</Link>
            </h6>
          ),
          sorter: (a: any, b: any) => a.Title.length - b.Title.length,
        },
        {
            title: "Date",
            dataIndex: "Date",
            sorter: (a: any, b: any) => a.Date.length - b.Date.length,
        },
        {
            title: "Description",
            dataIndex: "Description",
            sorter: (a: any, b: any) => a.Description.length - b.Description.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text: string) => (
                <span className="badge badge-success d-inline-flex align-items-center badge-sm">
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
                        data-bs-target="#edit_holiday"
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
    ];
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Holidays</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Employee</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Holidays
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <Link
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_holiday"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Holiday
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Holidays List</h5>
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

      <HolidaysModal />
    </>
  );
};

export default Holidays;
