import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const Aisettings = () => {
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
                                <Link className="nav-link active" to={routes.bussinessSettings}>
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
                                                to={routes.bussinessSettings}
                                                className="d-inline-flex align-items-center rounded  py-2 px-3"
                                            >
                                                Business Settings
                                            </Link>
                                            <Link
                                                to={routes.seoSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                SEO Settings
                                            </Link>
                                            <Link
                                                to={routes.localizationSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Localization
                                            </Link>
                                            <Link
                                                to={routes.prefixes}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Prefixes
                                            </Link>
                                            <Link
                                                to={routes.preference}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Preferences
                                            </Link>
                                            <Link
                                                to={routes.appearance}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Appearance
                                            </Link>
                                            <Link
                                                to={routes.language}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Language
                                            </Link>
                                            <Link
                                                to={routes.authenticationSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Authentication Settings
                                            </Link>
                                            <Link
                                                to={routes.aiSettings}
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
                                                AI Settings
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border-bottom mb-3 pb-3">
                                            <h4>AI Settings</h4>
                                        </div>
                                        <form>
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-4">
                                                                <label className="form-label mb-md-3">
                                                                    OpenAI API Key
                                                                </label>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="mb-3">
                                                                    <input type="text" className="form-control" />
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


export default Aisettings;
