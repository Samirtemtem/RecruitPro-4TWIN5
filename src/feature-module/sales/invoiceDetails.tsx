import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes'
import ImageWithBasePath from '../../core/common/imageWithBasePath'

const InvoiceDetails = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Invoices</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="index.html">
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Application</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Invoices
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="mb-2">
                                <Link to="#" className="btn btn-dark d-flex align-items-center">
                                    <i className="ti ti-download me-2" />
                                    Download
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Invoices */}
                    <div>
                        <div className="row">
                            <div className="col-sm-10 mx-auto">
                                <Link
                                    to={all_routes.invoice}
                                    className="back-icon d-flex align-items-center fs-12 fw-medium mb-3 d-inline-flex"
                                >
                                    <span className=" d-flex justify-content-center align-items-center rounded-circle me-2">
                                        <i className="ti ti-arrow-left" />
                                    </span>
                                    Back to List
                                </Link>
                                <div className="card">
                                    <div className="card-body">
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
                            </div>
                        </div>
                    </div>
                    {/* /Invoices */}
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <Link
                            to="#"
                            className="btn btn-primary d-flex justify-content-center align-items-center me-2"
                        >
                            <i className="ti ti-printer me-2" />
                            Print Invoice
                        </Link>
                        <Link
                            to="#"
                            className="btn btn-white d-flex justify-content-center align-items-center border"
                        >
                            <i className="ti ti-copy me-2" />
                            Clone Invoice
                        </Link>
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
        </>

    )
}

export default InvoiceDetails
