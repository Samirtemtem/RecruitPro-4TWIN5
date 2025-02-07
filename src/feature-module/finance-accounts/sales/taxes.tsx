import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { estimate_details } from "../../../core/data/json/estimates-details";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Table from "../../../core/common/dataTable/index";
import PredefinedDateRanges from "../../../core/common/datePicker";
import { payment_details } from "../../../core/data/json/payments_details";
import { expenses_details } from "../../../core/data/json/expenses_details";
import { DatePicker } from "antd";
import CommonSelect from "../../../core/common/commonSelect";
import { provident_funds } from "../../../core/data/json/provident_funds_details";
import { taxs_details } from "../../../core/data/json/taxs_details";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const Taxes = () => {
    const getModalContainer = () => {
        const modalElement = document.getElementById("modal-datepicker");
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };

    const data = taxs_details;
    const columns = [
        {
            title: "Tax Name",
            dataIndex: "Tax_Name",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center">
                    <h6 className="fs-14 fw-medium text-gray-9 me-2">{text}</h6>
                    <Link
                        to="#"
                        className="text-info"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Comprehensive tax on the supply of goods and services."
                    >
                        <i className="ti ti-info-circle" />
                    </Link>
                </div>

            ),
            sorter: (a: any, b: any) =>
                a.Tax_Name.length - b.Tax_Name.length,
        },
        {
            title: "Tax Percentage(%)",
            dataIndex: "Tax_Percentage",
            sorter: (a: any, b: any) =>
                a.Tax_Percentage.length - b.Tax_Percentage.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text: String, record: any) => (
                <div className="dropdown">
                    <Link
                        to="#"
                        className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                    >
                        <span className={`rounded-circle ${text === 'Active' ? 'bg-transparent-success' : 'bg-transparent-danger'} d-flex justify-content-center align-items-center me-2`}>
                            <i className={`ti ti-point-filled ${text === 'Active' ? ' text-success' : 'text-danger'}`} />
                        </span>{" "}
                        {text}
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                            >
                                <span className="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2">
                                    <i className="ti ti-point-filled text-success" />
                                </span>
                                Active
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                            >
                                <span className="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2">
                                    <i className="ti ti-point-filled text-danger" />
                                </span>
                                Inactive
                            </Link>
                        </li>
                    </ul>
                </div>

            ),
            sorter: (a: any, b: any) => a.Status.length - b.Status.length,
        },
        {
            title: "",
            dataIndex: "action",
            render: (text: String, record: any) => (
                <div className="action-icon d-inline-flex">
                    <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_tax"
                    >
                        <i className="ti ti-edit" />
                    </Link>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#delete_modal">
                        <i className="ti ti-trash" />
                    </Link>
                </div>

            ),
            sorter: (a: any, b: any) => a.action.length - b.action.length,
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
                            <h2 className="mb-1">Taxes</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Taxes
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
                                    data-bs-target="#add_tax"
                                    className="btn btn-primary d-flex align-items-center"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Add Tax
                                </Link>
                            </div>
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Policy list */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Tax List</h5>
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
                                        Taxes List
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                VAT
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                GST
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
                    {/* /Policylist list */}
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
            {/* Add Policy */}
            <div className="modal fade" id="add_tax">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Tax</h4>
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
                                            <label className="form-label">Tax Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Tax Percentage(%)</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" defaultValue={""} />
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
                                    Add Tax
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Policy */}
            {/* Edit  Policy */}
            <div className="modal fade" id="edit_tax">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Tax</h4>
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
                                            <label className="form-label">Tax Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="VAT"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Tax Percentage(%)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="20%"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                defaultValue={
                                                    "Comprehensive tax on the supply of goods and services."
                                                }
                                            />
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
                                    Save Tax
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit  Policy */}
        </>

    );
};

export default Taxes;
