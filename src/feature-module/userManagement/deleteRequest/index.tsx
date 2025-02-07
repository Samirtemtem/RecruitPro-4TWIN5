import React from "react";
import { deleteRequestData } from "../../../core/data/json/deleteaRequest";
import { TableData } from "../../../core/data/interface";
import Table from "../../../core/common/dataTable/index";
import PredefinedDateRanges from "../../../core/common/datePicker";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import TooltipOption from "../../../core/common/tooltipOption";
import { all_routes } from "../../router/all_routes";

const DeleteRequest = () => {
  const data = deleteRequestData;
  const routes = all_routes;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text: string, record: any, index: number) => (
        <>
         <Link to="#" className="link-primary">{record.id}</Link>
        </>
      ),
      sorter: (a: TableData, b: TableData) => a.id.length - b.id.length,
    },

    {
      title: "Name",
      dataIndex: "name",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
            <Link to="#" className="avatar avatar-md">
                <ImageWithBasePath
                    src={record.img}
                    className="img-fluid rounded-circle"
                    alt="img"
                />
            </Link>
            <div className="ms-2">
                <p className="text-dark mb-0">
                
                    <Link to={'#'}>{text}</Link>
                </p>
               
            </div>
        </div>
    ),
      sorter: (a: TableData, b: TableData) => a.name.length - b.name.length,
    },
    {
      title: "Requisition Date",
      dataIndex: "requisitionDate",
      sorter: (a: TableData, b: TableData) => a.requisitionDate.length - b.requisitionDate.length,
    },
    {
      title: "Delete RequestDate",
      dataIndex: "deleteRequestDate",
      sorter: (a: TableData, b: TableData) => a.deleteRequestDate.length - b.deleteRequestDate.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
          <>
          {text === "Confirm" ? (
            <span
              className="badge badge-soft-success d-inline-flex align-items-center"
            >
              <i className='ti ti-circle-filled fs-5 me-1'></i>{text}
            </span>
          ):
          (
            <span
              className="badge badge-soft-danger d-inline-flex align-items-center"
            >
              <i className='ti ti-circle-filled fs-5 me-1'></i>{text}
            </span>
          )}
        </>
      ),
      sorter: (a: any, b: any) => a.status.length - b.status.length,
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
                <h3 className="page-title mb-1">Delete Account Request</h3>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">User Management</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Delete Account Request
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <TooltipOption />
              </div>
            </div>
            {/* Page Header */}
            {/* Filter Section */}
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
                <h4 className="mb-3">Delete Account Request List</h4>
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
                        <Link
                          to="#"
                          className="dropdown-item rounded-1 active"
                        >
                          Ascending
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Descending
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Recently Viewed
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Recently Added
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-0 py-3">
                {/* Delete Account List */}
                <Table columns={columns} dataSource={data} Selection={true}/>
                {/* /Delete Account List */}
              </div>
            </div>
            {/* /Filter Section */}
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="datatable-paginate mt-4" />
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
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
                    <button type="submit" className="btn btn-danger">
                      Yes, Delete
                    </button>
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

export default DeleteRequest;
