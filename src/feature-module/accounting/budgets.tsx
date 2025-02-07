import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import { budgetsData } from "../../core/data/json/budgetsData";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
import Table from "../../core/common/dataTable/index";
import PredefinedDateRanges from "../../core/common/datePicker";
import BudgetsModal from "../../core/modals/budgetsModal";

const Budgets = () => {
  const routes = all_routes;
  const data = budgetsData;
  const columns = [
    {
      title: "Budget Title",
      dataIndex: "BudgetTitle",
      render: (text: string) => (
        <h6 className="fw-medium">
          <Link to="#">{text}</Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.BudgetTitle.length - b.BudgetTitle.length,
    },
    {
      title: "Budget Type",
      dataIndex: "BudgetType",
      sorter: (a: any, b: any) => a.BudgetType.length - b.BudgetType.length,
    },
    {
      title: "Start Date",
      dataIndex: "StartDate",
      sorter: (a: any, b: any) => a.StartDate.length - b.StartDate.length,
    },
    {
      title: "End Date",
      dataIndex: "StartDate",
      sorter: (a: any, b: any) => a.EndDate.length - b.EndDate.length,
    },
    {
      title: "Total Revenue",
      dataIndex: "TotalRevenue",
      sorter: (a: any, b: any) => a.TotalRevenue.length - b.TotalRevenue.length,
    },
    {
      title: "Total Expense",
      dataIndex: "TotalExpense",
      sorter: (a: any, b: any) => a.TotalExpense.length - b.TotalExpense.length,
    },
    {
      title: "Tax Amount",
      dataIndex: "TaxAmount",
      sorter: (a: any, b: any) => a.TaxAmount.length - b.TaxAmount.length,
    },
    {
      title: "Budget Amount",
      dataIndex: "BudgetAmount",
      sorter: (a: any, b: any) => a.BudgetAmount.length - b.BudgetAmount.length,
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
              data-bs-toggle="modal" data-inert={true}
              data-bs-target="#edit_budgets"
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
              <h2 className="mb-1">Budgets</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">HR</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Budgets
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
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_budgets"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Budget
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Budgets list */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Budget List</h5>
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
                    className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    $0.00 - $00
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        15000 - 20000
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        20000 - 25000
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        25000 - 30000
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Budget Title
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Office Supplies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Recruitment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Tender
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Budget Type
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Category
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Category
                      </Link>
                    </li>
                  </ul>
                </div>
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
            <div className="card-body p-0">
              <Table dataSource={data} columns={columns} Selection={true} />
            </div>
          </div>
          {/* /Budgets list */}
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

      <BudgetsModal />
    </>
  );
};

export default Budgets;
