import React from "react";
import { rolesPermissionsData } from "../../core/data/json/rolesPermissions";
import Table from "../../core/common/dataTable/index";
import { TableData } from "../../core/data/interface";
import PredefinedDateRanges from "../../core/common/datePicker";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";

const RolesPermissions = () => {
  const routes = all_routes
  const data = rolesPermissionsData;
  const columns = [
    {
      title: "Role Name",
      dataIndex: "roleName",
      sorter: (a: TableData, b: TableData) =>
        a.roleName.length - b.roleName.length,
    },

    {
      title: "Created On",
      dataIndex: "createdOn",
      sorter: (a: TableData, b: TableData) =>
        a.createdOn.length - b.createdOn.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <>
          <div className="d-flex align-items-center">
            <Link
              to="#"
              className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
              data-bs-toggle="modal"
              data-bs-target="#edit_role"
            >
              <i className="ti ti-edit-circle text-primary" />
            </Link>
            <Link
              to={routes.permissions}
              className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle  p-0 me-2"
            >
              <i className="ti ti-shield text-skyblue" />
            </Link>
            <Link
              to="#"
              className="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-3"
              data-bs-toggle="modal"
              data-bs-target="#delete-modal"
            >
              <i className="ti ti-trash-x text-danger" />
            </Link>
          </div>
        </>
      ),
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
                {/* Role Permission List */}
                <Table columns={columns} dataSource={data} Selection={true} />
                {/* /Role Permission List */}
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
              <form >
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-0">
                        <label className="form-label">Role Name</label>
                        <input type="text" className="form-control" />
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
                  <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                    Add Role
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Role */}
        {/* Edit Role */}
        <div className="modal fade" id="edit_role">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Role</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form >
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-0">
                        <label className="col-form-label">Role Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Admin"
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
                  <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Role */}
        {/* Delete Modal */}
        <div className="modal fade" id="delete-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form >
                <div className="modal-body text-center">
                  <span className="delete-icon">
                    <i className="ti ti-trash-x" />
                  </span>
                  <h4>Confirm Deletion</h4>
                  <p>
                    You want to delete all the marked items, this cant be undone
                    once you delete.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-light me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <Link to="#" className="btn btn-danger" data-bs-dismiss="modal">
                      Yes, Delete
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>
    </div>
  );
};

export default RolesPermissions;
