import React from "react";
import { Link } from "react-router-dom";
import PredefinedDateRanges from "../../core/common/datePicker";
import { TableData } from "../../core/data/interface";
import Table from "../../core/common/dataTable/index";
import { permission } from "../../core/data/json/permission";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";

const Permission = () => {
  const data = permission;
  const routes = all_routes;

  const columns = [
    {
      title: "Modules",
      dataIndex: "modules",
      sorter: (a: TableData, b: TableData) =>
        a.modules.length - b.modules.length,
    },
    {
      title: "Created",
      dataIndex: "created",
      render: (text: string, record: any, index: number) => (
        <>
          <label className="checkboxs">
            <input type="checkbox" />
            <span className="checkmarks" />
          </label>
        </>
      ),
      sorter: (a: TableData, b: TableData) =>
        a.created.length - b.created.length,
    },
    {
      title: "View",
      dataIndex: "view",
      render: (text: string, record: any, index: number) => (
        <>
          <label className="checkboxs">
            <input type="checkbox" />
            <span className="checkmarks" />
          </label>
        </>
      ),
      sorter: (a: TableData, b: TableData) => a.view.length - b.view.length,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (text: string, record: any, index: number) => (
        <>
          <label className="checkboxs">
            <input type="checkbox" />
            <span className="checkmarks" />
          </label>
        </>
      ),
      sorter: (a: TableData, b: TableData) => a.edit.length - b.edit.length,
    },
    {
      title: "Delete",
      dataIndex: "delete",
      render: (text: string, record: any, index: number) => (
        <>
          <label className="checkboxs">
            <input type="checkbox" />
            <span className="checkmarks" />
          </label>
        </>
      ),
      sorter: (a: TableData, b: TableData) => a.delete.length - b.delete.length,
    },
    {
      title: "AllowAll",
      dataIndex: "allowAll",
      render: (text: string, record: any, index: number) => (
        <>
          <label className="checkboxs">
            <input type="checkbox" />
            <span className="checkmarks" />
          </label>
        </>
      ),
      sorter: (a: TableData, b: TableData) =>
        a.allowAll.length - b.allowAll.length,
    },
  ];
  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
              <div className="my-auto mb-2">
                <h3 className="page-title mb-1">Roles &amp; Permissions</h3>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">User Management</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Roles &amp; Permissions
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                <TooltipOption />
                <div className="mb-2">
                  <Link
                    to="#"
                    className="btn btn-primary d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#add_role"
                  >
                    <i className="ti ti-square-rounded-plus me-2" />
                    Add Role
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Filter Section */}
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                <h4 className="mb-3">Roles &amp; Permissions List</h4>
                <div className="d-flex align-items-center flex-wrap">
                  <div className="input-icon-start mb-3 me-2 position-relative">
                    <PredefinedDateRanges />
                  </div>
                  <div className="dropdown mb-3">
                    <Link
                      to="#"
                      className="btn btn-outline-light bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-sort-ascending-2 me-2" />
                      Sort by A-Z
                    </Link>
                    <ul className="dropdown-menu p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1 active">
                          Ascending
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Descending
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Recently Viewed
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Recently Added
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0 py-3">
                {/* Student List */}
                <Table columns={columns} dataSource={data} Selection={true} />
                {/* /Student List */}
              </div>
            </div>
            {/* /Filter Section */}
          </div>
        </div>
        {/* /Page Wrapper */}
        {/* Add Role */}
        <div className="modal fade" id="add_role">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Role</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-0">
                        <label className="form-label">Role Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add Role
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Role */}
      </>
    </div>
  );
};

export default Permission;
