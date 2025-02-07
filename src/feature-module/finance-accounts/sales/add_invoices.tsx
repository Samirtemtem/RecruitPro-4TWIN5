import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import { estimate_details } from '../../../core/data/json/estimates-details';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import { label } from 'yet-another-react-lightbox/*';
import CommonSelect from '../../../core/common/commonSelect';
import { DatePicker } from 'antd';
type PasswordField = "password" | "confirmPassword";

const AddInvoice = () => {

    const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };
    const paymenttypeChoose = [
        { value: "Select", label: "Select" },
        { value: "Credit", label: "Credit" },
        { value: "Debit", label: "Debit" },
    ];
    const bankChoose = [
        { value: "Select", label: "Select" },
        { value: "Bank of America", label: "Bank of America" },
        { value: "U.S. Bank", label: "U.S. Bank" },
    ];

    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field: PasswordField) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row align-items-center">
                        <div className="col-md-10 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <Link
                                            to={all_routes.invoices}
                                            className="back-icon align-items-center fs-14 d-inline-flex fw-medium"
                                        >
                                            <span className=" d-flex justify-content-center align-items-center rounded-circle me-2">
                                                <i className="ti ti-arrow-left fs-12" />
                                            </span>
                                            Back to List
                                        </Link>
                                        <Link
                                            to="#"
                                            className="text-primary text-decoration-underline"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_preview"
                                        >
                                            Preview
                                        </Link>
                                    </div>
                                    {/* My details */}
                                    <div className="bg-light p-3 rounded mb-3">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h5>From</h5>
                                            <Link to="#" className="text-dark fw-medium">
                                                <span className="text-gray me-2">
                                                    <i className="ti ti-edit" />
                                                </span>
                                                Edit Details
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="mb-1">Thomas Lawler</h4>
                                            <p className="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                                            <p className="mb-1">
                                                Email :{" "}
                                                <span className="text-dark">Tarala2445@example.com</span>
                                            </p>
                                            <p>
                                                Phone : <span className="text-dark">+1 987 654 3210</span>
                                            </p>
                                        </div>
                                    </div>
                                    {/* /My details */}
                                    {/* Invoice Details*/}
                                    <div className="border-bottom mb-3">
                                        <h4 className="mb-2">Invoice Details</h4>
                                        <div className="mb-2">
                                            <label className="form-label">Invoice Title</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Invoice No</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Invoice Date</label>
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
                                            <div className="col-md-4 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Due Date</label>
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
                                    </div>
                                    {/* /Invoice Details*/}
                                    {/* Payment Details*/}
                                    <div className="border-bottom mb-3">
                                        <h4 className="mb-2">Payment Details</h4>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <label className="form-label">Customer</label>
                                                        <Link
                                                            to="#"
                                                            className="text-primary fw-medium d-flex align-items-center"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#add_customer"
                                                        >
                                                            <i className="ti ti-plus me-2" />
                                                            Add New
                                                        </Link>
                                                    </div>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Reference Number</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Select Payment Type</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={paymenttypeChoose}
                                                        defaultValue={paymenttypeChoose[0]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Bank Details</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={bankChoose}
                                                        defaultValue={bankChoose[0]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Payment Details*/}
                                    {/* Add Items*/}
                                    <div className="border-bottom mb-3">
                                        <h4 className="mb-2">Add Items</h4>
                                        <div className="border rounded p-3 mb-3">
                                            <div className="add-description-info">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Description</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Qty</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Discount</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Rate</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to="#"
                                                className="text-primary add-more-description fw-medium d-flex align-items-center"
                                            >
                                                <i className="ti ti-plus me-2" />
                                                Add New
                                            </Link>
                                        </div>
                                    </div>
                                    {/* /Add Items*/}
                                    {/* Additional Details*/}
                                    <div>
                                        <h4 className="mb-2">Additional Details</h4>
                                        <div className="mb-3">
                                            <label className="form-label"> Description</label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Notes</label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    {/* Additional Details*/}
                                    <div className="d-flex justify-content-end align-items-center flex-wrap row-gap-3">
                                        <Link
                                            to="#"
                                            className="btn btn-dark d-flex justify-content-center align-items-center"
                                        >
                                            <i className="ti ti-printer me-2" />
                                            Save as Draft
                                        </Link>
                                        <Link
                                            to="#"
                                            className="btn btn-primary d-flex justify-content-center align-items-center  ms-2"
                                        >
                                            <i className="ti ti-copy me-2" />
                                            Save &amp; Send
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
            {/* Invoice Preview */}
            <div className="modal fade" id="invoice_preview">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <div className="invoice-content">
                                {/* Invoices */}
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="flex-fill">
                                        <div className="row justify-content-between align-items-center border-bottom mb-3">
                                            <div className="col-md-6">
                                                <div className="mb-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/logo.svg"
                                                        className="img-fluid"
                                                        alt="logo"
                                                    />
                                                </div>
                                                <p>3099 Kennedy Court Framingham, MA 01702</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className=" text-end mb-3">
                                                    <h5 className="text-gray mb-1">
                                                        Invoice No{" "}
                                                        <span className="text-primary">#INV0001</span>
                                                    </h5>
                                                    <p className="mb-1 fw-medium">
                                                        Created Date :{" "}
                                                        <span className="text-dark">Sep 24, 2023</span>{" "}
                                                    </p>
                                                    <p className="fw-medium">
                                                        Due Date :{" "}
                                                        <span className="text-dark">Sep 30, 2023</span>{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row border-bottom mb-3">
                                            <div className="col-md-5">
                                                <p className="text-dark mb-2 fw-semibold">From</p>
                                                <div>
                                                    <h4 className="mb-1">Thomas Lawler</h4>
                                                    <p className="mb-1">
                                                        2077 Chicago Avenue Orosi, CA 93647
                                                    </p>
                                                    <p className="mb-1">
                                                        Email :{" "}
                                                        <span className="text-dark">
                                                            Tarala2445@example.com
                                                        </span>
                                                    </p>
                                                    <p>
                                                        Phone :{" "}
                                                        <span className="text-dark">+1 987 654 3210</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <p className="text-dark mb-2 fw-semibold">To</p>
                                                <div>
                                                    <h4 className="mb-1">Sara Inc,.</h4>
                                                    <p className="mb-1">
                                                        3103 Trainer Avenue Peoria, IL 61602
                                                    </p>
                                                    <p className="mb-1">
                                                        Email :{" "}
                                                        <span className="text-dark">
                                                            Sara_inc34@example.com
                                                        </span>
                                                    </p>
                                                    <p>
                                                        Phone :{" "}
                                                        <span className="text-dark">+1 987 471 6589</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="mb-3">
                                                    <p className="text-title mb-2 fw-medium">
                                                        Payment Status{" "}
                                                    </p>
                                                    <span className="badge badge-danger align-items-center mb-3">
                                                        <i className="ti ti-point-filled " />
                                                        Due in 10 Days
                                                    </span>
                                                    <div>
                                                        <ImageWithBasePath
                                                            src="assets/img/qr.svg"
                                                            className="img-fluid"
                                                            alt="QR"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="fw-medium">
                                                Invoice For :{" "}
                                                <span className="text-dark fw-medium">
                                                    Design &amp; development of Website
                                                </span>
                                            </p>
                                            <div className="table-responsive mb-3">
                                                <table className="table">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>Job Description</th>
                                                            <th className="text-end">Qty</th>
                                                            <th className="text-end">Cost</th>
                                                            <th className="text-end">Discount</th>
                                                            <th className="text-end">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h6>UX Strategy</h6>
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">1</td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $500
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $100
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $500
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>Design System</h6>
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">1</td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $5000
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $100
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $5000
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>Brand Guidellines</h6>
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">1</td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $5000
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $100
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $5000
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>Social Media Template</h6>
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">1</td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $5000
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $100
                                                            </td>
                                                            <td className="text-gray-9 fw-medium text-end">
                                                                $5000
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row border-bottom mb-3">
                                            <div className="col-md-7">
                                                <div className="py-4">
                                                    <div className="mb-3">
                                                        <h6 className="mb-1">Terms and Conditions</h6>
                                                        <p>
                                                            Please pay within 15 days from the date of invoice,
                                                            overdue interest @ 14% will be charged on delayed
                                                            payments.
                                                        </p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <h6 className="mb-1">Notes</h6>
                                                        <p>Please quote invoice number when remitting funds.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                                                    <p className="mb-0">Sub Total</p>
                                                    <p className="text-dark fw-medium mb-2">$5500</p>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">
                                                    <p className="mb-0">Discount(0%)</p>
                                                    <p className="text-dark fw-medium mb-2">$400</p>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                                                    <p className="mb-0">VAT(5%)</p>
                                                    <p className="text-dark fw-medium mb-2">$54</p>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                                                    <h5>Total Amount</h5>
                                                    <h5>$5775</h5>
                                                </div>
                                                <p className="fs-12">
                                                    Amount in Words : Dollar Five thousand Seven Seventy Five
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-end align-items-end text-end border-bottom mb-3">
                                            <div className="col-md-3">
                                                <div className="text-end">
                                                    <ImageWithBasePath
                                                        src="assets/img/sign.svg"
                                                        className="img-fluid"
                                                        alt="sign"
                                                    />
                                                </div>
                                                <div className="text-end mb-3">
                                                    <h6 className="fs-14 fw-medium pe-3">Ted M. Davis</h6>
                                                    <p>Assistant Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="mb-3">
                                                <ImageWithBasePath
                                                    src="assets/img/logo.svg"
                                                    className="img-fluid"
                                                    alt="logo"
                                                />
                                            </div>
                                            <p className="text-dark mb-1">
                                                Payment Made Via bank transfer / Cheque in the name of
                                                Thomas Lawler
                                            </p>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <p className="fs-12 mb-0 me-3">
                                                    Bank Name : <span className="text-dark">HDFC Bank</span>
                                                </p>
                                                <p className="fs-12 mb-0 me-3">
                                                    Account Number :{" "}
                                                    <span className="text-dark">45366287987</span>
                                                </p>
                                                <p className="fs-12">
                                                    IFSC : <span className="text-dark">HDFC0018159</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Invoices */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Invoice Preview */}
            {/* Add Customer */}
            <div className="modal fade" id="add_customer">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Customer</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="add-invoices.html">
                            <div className="modal-body">
                                <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                        <i className="ti ti-photo-plus fs-16" />
                                    </div>
                                    <div className="profile-upload">
                                        <div className="mb-2">
                                            <h6 className="mb-1">Upload Profile Image</h6>
                                            <p className="fs-12">Image should be below 4 mb</p>
                                        </div>
                                        <div className="profile-uploader d-flex align-items-center">
                                            <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                                Upload
                                                <input
                                                    type="file"
                                                    className="form-control image-sign"
                                                    multiple
                                                />
                                            </div>
                                            <Link
                                                to="#"
                                                className="btn btn-light btn-sm"
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                First Name <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Last Name <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                User Name <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Email <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3 ">
                                            <label className="form-label">
                                                Password <span className="text-danger"> *</span>
                                            </label>
                                            <div className="pass-group">
                                                <input
                                                    type={
                                                        passwordVisibility.password
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    className="pass-input form-control"
                                                />
                                                <span
                                                    className={`ti toggle-passwords ${passwordVisibility.password
                                                        ? "ti-eye"
                                                        : "ti-eye-off"
                                                        }`}
                                                    onClick={() =>
                                                        togglePasswordVisibility("password")
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3 ">
                                            <label className="form-label">
                                                Confirm Password <span className="text-danger"> *</span>
                                            </label>
                                            <div className="pass-group">
                                                <input
                                                    type={
                                                        passwordVisibility.confirmPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    className="pass-input form-control"
                                                />
                                                <span
                                                    className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                                                        ? "ti-eye"
                                                        : "ti-eye-off"
                                                        }`}
                                                    onClick={() =>
                                                        togglePasswordVisibility("confirmPassword")
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Phone Number <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Company <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-0">
                                            <label className="form-label">
                                                Address <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="d-flex align-items-center justify-content-end m-0">
                                    <button
                                        className="btn btn-outline border me-2"
                                        type="button"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Customer */}
        </>


    )
}

export default AddInvoice
