import React from 'react'
import { Link } from 'react-router-dom'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'

const PaySlip = () => {

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Payslip</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="index.html">
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Payslip
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
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Invoices */}
                    <div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row justify-content-between align-items-center border-bottom mb-3">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <div className="mb-2">
                                                        <ImageWithBasePath
                                                            src="assets/img/logo.svg"
                                                            className="img-fluid"
                                                            alt="logo"
                                                        />
                                                    </div>
                                                    <p>3099 Kennedy Court Framingham, MA 01702</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className=" text-end mb-3">
                                                    <h5 className="text-gray mb-1">
                                                        Payslip No{" "}
                                                        <span className="text-primary"> #PS4283</span>
                                                    </h5>
                                                    <p className="fw-medium">
                                                        Salary Month :{" "}
                                                        <span className="text-dark">October 2024</span>{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row border-bottom align-items-center mb-3">
                                            <div className="col-md-5">
                                                <div className="mb-3">
                                                    <p className="text-dark mb-2 fw-semibold">From</p>
                                                    <div>
                                                        <h4 className="mb-1">XYZ Technologies</h4>
                                                        <p className="mb-1">
                                                            2077 Chicago Avenue Orosi, CA 93647
                                                        </p>
                                                        <p className="mb-1">
                                                            Email :{" "}
                                                            <span className="text-dark">xyztech@example.com</span>
                                                        </p>
                                                        <p>
                                                            Phone :{" "}
                                                            <span className="text-dark">+1 987 654 3210</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="mb-3">
                                                    <p className="text-dark mb-2 fw-semibold">To</p>
                                                    <div>
                                                        <h4 className="mb-1">Anthony Lewis</h4>
                                                        <p className="mb-1">Web Designer</p>
                                                        <p className="mb-1">
                                                            Email :{" "}
                                                            <span className="text-dark">anthony@example.com</span>
                                                        </p>
                                                        <p>
                                                            Phone :{" "}
                                                            <span className="text-dark">+1 458 268 4738</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-center mb-4">
                                                Payslip for the moth of October 2024
                                            </h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="list-group mb-3">
                                                        <div className="list-group-item bg-light p-3 border-bottom-0">
                                                            <h6>Earnings</h6>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">Basic Salary</p>
                                                                <h6 className="fw-medium">$3000</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">
                                                                    House Rent Allowance (H.R.A.)
                                                                </p>
                                                                <h6 className="fw-medium">$1000</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">Conveyance</p>
                                                                <h6 className="fw-medium">$200</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">Other Allowance</p>
                                                                <h6 className="fw-medium">$100</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">Total Earnings</p>
                                                                <h6 className="fw-medium">$4300</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="list-group mb-3">
                                                        <div className="list-group-item bg-light p-3 border-bottom-0">
                                                            <h6>Deductions</h6>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">
                                                                    Tax Deducted at Source (T.D.S.)
                                                                </p>
                                                                <h6 className="fw-medium">$200</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">Provident Fund</p>
                                                                <h6 className="fw-medium">$300</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">ESI</p>
                                                                <h6 className="fw-medium">$150</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">Loan</p>
                                                                <h6 className="fw-medium">$50</h6>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="mb-0">Total Earnings</p>
                                                                <h6 className="fw-medium">$700</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    Net Salary :{" "}
                                                    <span className="text-gray-9 fw-medium">
                                                        {" "}
                                                        $3600(Three thousand six hundred only)
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Invoices */}
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

export default PaySlip
