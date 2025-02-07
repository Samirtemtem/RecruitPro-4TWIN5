import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import PredefinedDateRanges from '../../../core/common/datePicker'
import { dealListData } from '../../../core/data/json/dealList'
import Table from "../../../core/common/dataTable/index";
import CrmsModal from '../../../core/modals/crms_modal'
const DealsList = () => {
  const routes = all_routes
  const data = dealListData;
  const columns = [
    {
      title: "Deal Name",
      dataIndex: "DealName",
      render: (text: string) => (
        <h6 className="fw-medium fs-14">
        <Link to={routes.dealsDetails}>{text}</Link>
      </h6>
      ),
      sorter: (a: any, b: any) => a.DealName.length - b.DealName.length,
    },
    {
      title: "Stage",
      dataIndex: "Stage",
      sorter: (a: any, b: any) => a.Stage.length - b.Stage.length,
    },
    {
      title: "Deal Value",
      dataIndex: "DealValue",
      sorter: (a: any, b: any) => a.DealValue.length - b.DealValue.length,
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      render: (text: string) => (
        <span className={`badge  ${text === 'Promotion'? 'badge-info-transparent':text === 'Rated'? 'badge-warning-transparent':text === 'Collab'? 'badge-pink-transparent':text === 'Rejected'? 'badge-danger-transparent':'badge-purple-transparent'}`}>
        {text}
      </span>
      ),
      sorter: (a: any, b: any) => a.Tags.length - b.Tags.length,
    },
    {
      title: "Expected Closed Date",
      dataIndex: "ExpectedClosedDate",
      sorter: (a: any, b: any) => a.ExpectedClosedDate.length - b.ExpectedClosedDate.length,
    },
    {
      title: "Owner",
      dataIndex: "Owner",
      sorter: (a: any, b: any) => a.Owner.length - b.Owner.length,
    },
    {
      title: "Probability",
      dataIndex: "Probability",
      sorter: (a: any, b: any) => a.Probability.length - b.Probability.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <>
          <span
            className={`badge d-inline-flex align-items-center badge-xs ${text === 'Won'
              ? 'badge-success'
                :text === 'Lost'? 'badge-danger':'badge-info'
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
            data-bs-target="#edit_deals"
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
  ]
  return (
    <>
    <div className="page-wrapper">
  <div className="content">
    {/* Breadcrumb */}
    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
      <div className="my-auto mb-2">
        <h2 className="mb-1">Deals</h2>
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to={routes.adminDashboard}>
                <i className="ti ti-smart-home" />
              </Link>
            </li>
            <li className="breadcrumb-item">CRM</li>
            <li className="breadcrumb-item active" aria-current="page">
              Deals List
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
        <div className="me-2 mb-2">
          <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
            <Link
              to={routes.dealsList}
              className="btn btn-icon btn-sm active bg-primary text-white me-1"
            >
              <i className="ti ti-list-tree" />
            </Link>
            <Link to={routes.dealsGrid} className="btn btn-icon btn-sm">
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
            data-bs-target="#add_deals"
            className="btn btn-primary d-flex align-items-center"
          >
            <i className="ti ti-circle-plus me-2" />
            Add Deal
          </Link>
        </div>
        <div className="head-icons ms-2">
        <CollapseHeader/>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Contact List */}
    <div className="card">
      <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <h5>Deal List</h5>
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
                  Quality To Buy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item rounded-1"
                >
                  Proposal Made
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
                  Inactive
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
    {/* /Contact List */}
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
<CrmsModal/>
    </>
  )
}

export default DealsList