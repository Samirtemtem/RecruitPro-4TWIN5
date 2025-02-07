import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonTextEditor from "../../../core/common/textEditor";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const Maintenancemode = () => {
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
                                <Link className="nav-link" to={routes.salarySettings}>
                                    <i className="ti ti-device-ipad-horizontal-cog me-2" />
                                    App Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={routes.emailSettings}>
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
                                                to={routes.emailSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >

                                                Email Settings
                                            </Link>
                                            <Link
                                                to={routes.emailTemplates}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Email Templates
                                            </Link>
                                            <Link
                                                to={routes.smsSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                SMS Settings
                                            </Link>
                                            <Link
                                                to={routes.smsTemplate}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                SMS Templates
                                            </Link>
                                            <Link
                                                to={routes.otpSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >

                                                OTP
                                            </Link>
                                            <Link
                                                to={routes.gdprCookies}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >

                                                GDPR Cookies
                                            </Link>
                                            <Link
                                                to={routes.maintenanceMode}
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
                                                Maintenance Mode
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border-bottom mb-3 pb-3">
                                            <h4>Maintenance Mode</h4>
                                        </div>
                                        <form>
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="mb-3">
                                                                    <h6 className="fw-medium">Image</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="mb-3">
                                                                    <div className="d-flex align-items-center flex-wrap row-gap-3 w-100 rounded mb-4">
                                                                        <div className="d-flex align-items-center justify-content-center og-upload rounded border border-dashed me-2 flex-shrink-0 text-dark frames">
                                                                            <i className="ti ti-photo text-gray-3 fs-16" />
                                                                        </div>
                                                                        <div className="input-block mb-3 row">
                                                                            <div className="col-lg-12">
                                                                                <input type="file" className="form-control" />
                                                                                <span className="form-text text-muted">
                                                                                    Recommended image size is 600px * 400px
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="mb-3">
                                                                    <h6 className="fw-medium">Description</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="mb-3">
                                                                    <CommonTextEditor />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4">
                                                                <div className="mb-3">
                                                                    <h6 className="fw-medium">Status</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="form-check form-switch mb-0">
                                                                    <input
                                                                        className="form-check-input mb-3"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
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
    );
};

export default Maintenancemode;
