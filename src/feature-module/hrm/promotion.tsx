import React from 'react'
import { Link } from 'react-router-dom'
import Table from "../../core/common/dataTable/index";
import { promotion_table } from '../../core/data/json/promotion_table';
import { all_routes } from '../router/all_routes';
import ImageWithBasePath from '../../core/common/imageWithBasePath';
import { promotionto, promotiontype, termination, terminationtype } from '../../core/common/selectoption/selectoption';
import CommonSelect from '../../core/common/commonSelect';
import { DatePicker } from "antd";
import CollapseHeader from '../../core/common/collapse-header/collapse-header';

const Promotion = () => {
    const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };


    const data = promotion_table;
    const columns = [
        {
            title: "Promoted Employee",
            dataIndex: "Promoted_Employee",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center">
                    <Link to={all_routes.invoiceDetails} className="avatar avatar-md me-2">
                        <ImageWithBasePath
                            src={`assets/img/users/${record.Image}`}
                            className="rounded-circle"
                            alt="user"
                        />
                    </Link>
                    <h6 className="fw-medium">
                        <Link to={all_routes.invoiceDetails}>{record.Promoted_Employee}</Link>
                    </h6>
                </div>


            ),
            sorter: (a: any, b: any) => a.Promoted_Employee.length - b.Promoted_Employee.length,
        },
        {
            title: "Department",
            dataIndex: "Department",
            sorter: (a: any, b: any) => a.Department.length - b.Department.length,
        },
        {
            title: "Designation From",
            dataIndex: "Designation_From",
            sorter: (a: any, b: any) => a.Designation_From.length - b.Designation_From.length,
        },
        {
            title: "Designation From",
            dataIndex: "Designation_To",
            sorter: (a: any, b: any) => a.Designation_To.length - b.Designation_To.length,
        },
        {
            title: "Promotion Date",
            dataIndex: "Promotion_Date",
            sorter: (a: any, b: any) => a.Promotion_Date.length - b.Promotion_Date.length,
        },
        {
            title: "",
            dataIndex: "actions",
            render: () => (
                <div className="action-icon d-inline-flex">
                    <Link to="#" className="me-2">
                        <i
                            className="ti ti-edit"
                            data-bs-toggle="modal" data-inert={true}
                            data-bs-target="#edit_promotion"
                        />
                    </Link>
                    <Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#delete_modal">
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
                            <h2 className="mb-1">Promotion</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Performance</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Promotion
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="mb-2">
                                <Link
                                    to="#"
                                    className="btn btn-primary d-flex align-items-center"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#new_promotion"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Add Promotion
                                </Link>
                            </div>
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Promotion List */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                    <h5 className="d-flex align-items-center">Promotion List</h5>
                                    <div className="d-flex align-items-center flex-wrap row-gap-3">
                                        <div className="input-icon position-relative me-2">
                                            <span className="input-icon-addon">
                                                <i className="ti ti-calendar" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control date-range bookingrange"
                                                placeholder="dd/mm/yyyy - dd/mm/yyyy "
                                            />
                                        </div>
                                        <div className="dropdown">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center fs-12"
                                                data-bs-toggle="dropdown"
                                            >
                                                <p className="fs-12 d-inline-flex me-1">Sort By : </p>
                                                Last 7 Days
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <Table dataSource={data} columns={columns} Selection={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Promotion List  */}
                </div>
                {/* Footer */}
                <div className="footer d-sm-flex align-items-center justify-content-between bg-white border-top p-3">
                    <p className="mb-0">2014 - 2025 © SmartHR.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            Dreams
                        </Link>
                    </p>
                </div>
                {/* /Footer */}
            </div>
            {/* /Page Wrapper */}
            <>
                {/* Add Promotion */}
                <div className="modal fade" id="new_promotion">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Promotion</h4>
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
                                <div className="modal-body pb-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion For</label>
                                                <CommonSelect
                                                    className="select"
                                                    options={termination}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion From</label>
                                                <CommonSelect
                                                    className="select"
                                                    options={promotiontype}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion To</label>
                                                <CommonSelect
                                                    className="select"
                                                    options={promotionto}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion Date</label>
                                                <div className="input-icon-end position-relative">
                                                    <DatePicker
                                                        className="form-control datetimepicker"
                                                        format={{
                                                            format: "DD-MM-YYYY",
                                                            type: "mask",
                                                        }}
                                                        getPopupContainer={getModalContainer}
                                                        placeholder="DD-MM-YYYY"
                                                    />
                                                    <span className="input-icon-addon">
                                                        <i className="ti ti-calendar text-gray-7" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-white border me-2"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                        Add Promotion
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Add Promotion */}
                {/* Edit Promotion */}
                <div className="modal fade" id="edit_promotion">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Promotion</h4>
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
                                <div className="modal-body pb-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion For</label>
                                                <CommonSelect
                                                    className="select"
                                                    defaultValue={terminationtype[1]}
                                                    options={terminationtype}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion From</label>
                                                <CommonSelect
                                                    className="select"
                                                    defaultValue={promotiontype[1]}
                                                    options={promotiontype}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion To</label>
                                                <CommonSelect
                                                    className="select"
                                                    defaultValue={promotionto[1]}
                                                    options={promotionto}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Promotion Date</label>
                                                <div className="input-icon-end position-relative">
                                                    <DatePicker
                                                        className="form-control datetimepicker"
                                                        format={{
                                                            format: "DD-MM-YYYY",
                                                            type: "mask",
                                                        }}
                                                        getPopupContainer={getModalContainer}
                                                        placeholder="DD-MM-YYYY"
                                                    />
                                                    <span className="input-icon-addon">
                                                        <i className="ti ti-calendar text-gray-7" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-white border me-2"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Edit Promotion */}
                {/* Delete Modal */}
                <div className="modal fade" id="delete_modal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                                    <i className="ti ti-trash-x fs-36" />
                                </span>
                                <h4 className="mb-1">Confirm Delete</h4>
                                <p className="mb-3">
                                    You want to delete all the marked items, this cant be undone once
                                    you delete.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Link
                                        to="#"
                                        className="btn btn-light me-3"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link to={all_routes.promotion} className="btn btn-danger">
                                        Yes, Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Delete Modal */}
            </>

        </>

    )
}

export default Promotion
