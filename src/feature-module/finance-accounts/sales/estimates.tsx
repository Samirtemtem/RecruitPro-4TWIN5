import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import { estimate_details } from '../../../core/data/json/estimates-details';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import { label } from 'yet-another-react-lightbox/*';
import CommonSelect from '../../../core/common/commonSelect';
import { DatePicker } from 'antd';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const Estimates = () => {

    const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };

    const data = estimate_details;
    const columns = [
        {
            title: "Client Name",
            dataIndex: "Client_Name",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center file-name-icon">
                    <Link to="#" className="avatar avatar-md avatar-rounded">
                        <ImageWithBasePath src={`assets/img/users/${record.Image}`} className="img-fluid" alt="img" />
                    </Link>
                    <div className="ms-2">
                        <h6 className="fw-medium">
                            <Link to="#">{record.Client_Name}</Link>
                        </h6>
                        <span className="d-block mt-1">{record.Roll}</span>
                    </div>
                </div>

            ),
            sorter: (a: any, b: any) => a.Client_Name.length - b.Client_Name.length,
        },
        {
            title: "Company Name",
            dataIndex: "Company_Name",
            sorter: (a: any, b: any) => a.Company_Name.length - b.Company_Name.length,
        },
        {
            title: "Estimate Date",
            dataIndex: "Estimate_Date",
            sorter: (a: any, b: any) => a.Estimate_Date.length - b.Estimate_Date.length,
        },
        {
            title: "Expiry Date",
            dataIndex: "Expiry_Date",
            sorter: (a: any, b: any) => a.Expiry_Date.length - b.Expiry_Date.length,
        },
        {
            title: "Amount",
            dataIndex: "Amount",
            sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text: String, record: any) => (
                <span className={`badge ${text === 'Accepted' ? 'badge-success' : text === 'Sent' ? 'badge-soft-purple' : text === 'Expired' ? 'badge-soft-warning' : 'badge-soft-danger'}`}>{text}</span>

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
                        data-bs-target="#edit_estimate"
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
            sorter: (a: any, b: any) => a.action.length - b.action.length,
        },
    ]

    const clientChoose = [
        { value: "Select", label: "Select" },
        { value: "Michael Walker", label: "Michael Walker" },
        { value: "Sophie Headrick", label: "Sophie Headrick" },
        { value: "Cameron Drake", label: "Cameron Drake" },
    ];
    const projectChoose = [
        { value: "Select", label: "Select" },
        { value: "Project Management", label: "Project Management" },
        { value: "Office Management", label: "Office Management" },
    ];
    const taxChoose = [
        { value: "Select", label: "Select" },
        { value: "VAT", label: "VAT" },
        { value: "GST", label: "GST" },
        { value: "No Tax", label: "No Tax" },
    ];



    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Estimates</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Estimates
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="mb-2">
                                <Link
                                    to="#"
                                    className="btn btn-primary d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_estimate"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Add Estimates
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
                            <h5>Estimates List</h5>
                            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
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
                                                Accepted
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                sent
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Expired
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Declined
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
            {/* /Page Wrapper */}
            {/* Add Estimate  */}
            <div className="modal fade" id="add_estimate">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Estimate</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="estimates.html">
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Client <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={clientChoose}
                                                defaultValue={clientChoose[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Project <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={projectChoose}
                                                defaultValue={projectChoose[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Email <span className="text-danger"> *</span>
                                            </label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Tax <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={taxChoose}
                                                defaultValue={taxChoose[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Client Address</label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Biling Address</label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Estimate Date</label>
                                            <div className="input-icon position-relative w-100 me-2">
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar" />
                                                </span>
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Expiry Date</label>
                                            <div className="input-icon position-relative w-100 me-2">
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar" />
                                                </span>
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h4 className="mb-2">Add Items</h4>
                                    <div className="border rounded p-3 mb-3">
                                        <div className="add-estimate-info">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Item</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Description</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Unit Cost</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Qty</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Amount</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="text-primary add-more-estimate fw-medium d-flex align-items-center mb-2"
                                        >
                                            <i className="ti ti-plus me-2" />
                                            Add New Item
                                        </Link>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Total </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Tax </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Discount(%) </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Grand Total </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Other Information</label>
                                        <textarea className="form-control" rows={3} defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Add Estimate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Estimate */}
            {/* Edit Estimate  */}
            <div className="modal fade" id="edit_estimate">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Estimate</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="estimates.html">
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Client <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={clientChoose}
                                                defaultValue={clientChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Project <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={projectChoose}
                                                defaultValue={projectChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Email <span className="text-danger"> *</span>
                                            </label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Tax <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={taxChoose}
                                                defaultValue={taxChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Client Address</label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Biling Address</label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Estimate Date</label>
                                            <div className="input-icon position-relative w-100 me-2">
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar" />
                                                </span>
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Expiry Date</label>
                                            <div className="input-icon position-relative w-100 me-2">
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar" />
                                                </span>
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h4 className="mb-2">Add Items</h4>
                                    <div className="border rounded p-3 mb-3">
                                        <div className="add-estimate-info">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Item</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Description</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Unit Cost</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Qty</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <label className="form-label">Amount</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="text-primary add-more-estimate fw-medium d-flex align-items-center mb-2"
                                        >
                                            <i className="ti ti-plus me-2" />
                                            Add New Item
                                        </Link>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Total </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Tax </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Discount(%) </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Grand Total </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Other Information</label>
                                        <textarea className="form-control" rows={3} defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
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
            {/* /Edit Estimate */}
        </>

    )
}

export default Estimates
