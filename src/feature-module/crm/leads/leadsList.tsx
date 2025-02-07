import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import PredefinedDateRanges from '../../../core/common/datePicker'
import Table from "../../../core/common/dataTable/index";
import { leadsDataList } from '../../../core/data/json/leadsList'
import CrmsModal from '../../../core/modals/crms_modal'
const LeadsList = () => {
  const routes = all_routes;
  const data = leadsDataList;
  const columns = [
    {
      title: "Lead Name",
      dataIndex: "LeadName",
      render: (text: string) => (
        <h6 className="fw-medium fs-14">
        <Link to={routes.leadsDetails}>{text}</Link>
      </h6>
      ),
      sorter: (a: any, b: any) => a.LeadName.length - b.LeadName.length,
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link
            to={routes.companiesDetails}
            className="avatar avatar-md border rounded-circle"
          >
            <ImageWithBasePath
              src={`assets/img/company/${record.Image}`}
              className="img-fluid"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to={routes.companiesDetails}>{text}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.DealName.length - b.DealName.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      render: (text: string) => (
        <span className={`badge  ${text === 'Closed'? 'badge-info-transparent':text === 'Not Contacted'? 'badge-warning-transparent':text === 'Lost'? 'badge-danger-transparent':'badge-purple-transparent'}`}>
        {text}
      </span>
      ),
      sorter: (a: any, b: any) => a.Tags.length - b.Tags.length,
    },
    {
      title: "CreatedDate",
      dataIndex: "CreatedDate",
      sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Lead Owner",
      dataIndex: "LeadOwner",
      sorter: (a: any, b: any) => a.LeadOwner.length - b.LeadOwner.length,
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
                Contacts List
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="me-2 mb-2">
            <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
              <Link
                to={routes.leadsList}
                className="btn btn-icon btn-sm active bg-primary text-white me-1"
              >
                <i className="ti ti-list-tree" />
              </Link>
              <Link to={routes.leadsGrid} className="btn btn-icon btn-sm">
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
      {/* Leads List */}
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
          <h5>Leads List</h5>
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
                Tags
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Closed
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Contacted
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Lost
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Not Contacted
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

export default LeadsList