import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import { approval } from "../../../core/common/selectoption/selectoption";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const Approvalsettings = () => {
    const routes = all_routes;
    return (
        <div>
            <>
                {/* Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content">
                        {/* Breadcrumb */}
                        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                            <div className="my-auto mb-2">
                                <h2 className="mb-1">Settings</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <Link to={routes.adminDashboard}>
                                                <i className="ti ti-smart-home" />
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item">Administration</li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Settings
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="head-icons ms-2">
                            <CollapseHeader />
                            </div>
                        </div>
                        {/* /Breadcrumb */}
                        <ul className="nav nav-tabs nav-tabs-solid bg-transparent border-bottom mb-3">
                            <li className="nav-item">
                                <Link className="nav-link " to={routes.profilesettings}>
                                    <i className="ti ti-settings me-2" />
                                    General Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={routes.bussinessSettings}>
                                    <i className="ti ti-world-cog me-2" />
                                    Website Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={routes.salarySettings}>
                                    <i className="ti ti-device-ipad-horizontal-cog me-2" />
                                    App Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={routes.emailSettings}>
                                    <i className="ti ti-server-cog me-2" />
                                    System Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={routes.paymentGateways}>
                                    <i className="ti ti-settings-dollar me-2" />
                                    Financial Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={routes.customCss}>
                                    <i className="ti ti-settings-2 me-2" />
                                    Other Settings
                                </Link>
                            </li>
                        </ul>
                        <div className="row">
                            <div className="col-xl-3 theiaStickySidebar">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column list-group settings-list">
                                            <Link
                                                to={routes.salarySettings}
                                                className="d-inline-flex align-items-center rounded  py-2 px-3"
                                            >
                                                Salary Settings
                                            </Link>
                                            <Link
                                                to={routes.approvalSettings}
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
                                                Approval Settings
                                            </Link>
                                            <Link
                                                to={routes.approvalSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Invoice Settings
                                            </Link>
                                            <Link
                                                to={routes.leaveType}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Leave Type
                                            </Link>
                                            <Link
                                                to={routes.customFields}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Custom Fields
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border-bottom mb-3 pb-3">
                                            <h4>Approval Settings</h4>
                                        </div>
                                        <form>
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-12 d-flex">
                                                        <div className="flex-fill">
                                                            <h6 className="mb-3">Expense Approval</h6>
                                                            <div className="d-flex justify align-items-start flex-wrap row-gap-3 pb-2 mb-2">
                                                                <h5>Default Expense Approval</h5>
                                                                <div className="form-check ms-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="exampleRadios"
                                                                        id="exampleRadios1"
                                                                        defaultValue="option1"
                                                                        defaultChecked
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="exampleRadios1"
                                                                    >
                                                                        Sequence Approval (Chain)
                                                                    </label>
                                                                </div>
                                                                <div className="form-check ms-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="exampleRadios"
                                                                        id="exampleRadios2"
                                                                        defaultValue="option1"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="exampleRadios2"
                                                                    >
                                                                        Simultaneous Approval
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="d-flex align-items-center flex-wrap roe-gap-3 mb-3">
                                                                    <div className="me-3">
                                                                        <label className="form-label mb-0">
                                                                            Expense Approvers
                                                                        </label>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <CommonSelect
                                                                            className="select"
                                                                            options={approval}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-12 d-flex">
                                                        <div className="flex-fill">
                                                            <h6 className="mb-3">Leave Approval</h6>
                                                            <div className="d-flex justify align-items-start flex-wrap row-gap-3 pb-2 mb-2">
                                                                <h5>Default Expense Approval</h5>
                                                                <div className="form-check ms-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="exampleRadioss"
                                                                        id="sequence"
                                                                        defaultValue="option1"
                                                                        defaultChecked
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="sequence"
                                                                    >
                                                                        Sequence Approval (Chain)
                                                                    </label>
                                                                </div>
                                                                <div className="form-check ms-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="exampleRadioss"
                                                                        id="sequence1"
                                                                        defaultValue="option1"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="sequence1"
                                                                    >
                                                                        Simultaneous Approval
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="d-flex align-items-center flex-wrap roe-gap-3 mb-3">
                                                                    <div className="me-3">
                                                                        <label className="form-label mb-0">
                                                                            Leave Approvers
                                                                        </label>
                                                                    </div>
                                                                    <div className="flex-fill">
                                                                        <CommonSelect
                                                                            className="select"
                                                                            options={approval}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-12 d-flex">
                                                        <div className="flex-fill">
                                                            <h6 className="mb-3">Offer Approval</h6>
                                                            <div className="d-flex justify align-items-start flex-wrap row-gap-3 pb-2 mb-2">
                                                                <h5>Default Expense Approval</h5>
                                                                <div className="form-check ms-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="exampleRadioss"
                                                                        id="sequence3"
                                                                        defaultValue="option1"
                                                                        defaultChecked
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="sequence3"
                                                                    >
                                                                        Sequence Approval (Chain)
                                                                    </label>
                                                                </div>
                                                                <div className="form-check ms-3">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="exampleRadioss"
                                                                        id="sequence4"
                                                                        defaultValue="option1"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="sequence4"
                                                                    >
                                                                        Simultaneous Approval
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-light border me-3"
                                                >
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
            </>

        </div>
    )
}


export default Approvalsettings;
