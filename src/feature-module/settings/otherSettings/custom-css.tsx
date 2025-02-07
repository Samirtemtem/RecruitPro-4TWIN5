import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const Customcss = () => {
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
                                <Link className="nav-link active" to={routes.customCss}>
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
                                                to={routes.customCss}
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
                                                Custom CSS
                                            </Link>
                                            <Link
                                                to={routes.customJs}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Custom JS
                                            </Link>
                                            <Link
                                                to={routes.cronjob}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Cronjob
                                            </Link>
                                            <Link
                                                to={routes.storage}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Storage
                                            </Link>
                                            <Link
                                                to={routes.banIpAddress}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Ban IP Address
                                            </Link>
                                            <Link
                                                to={routes.backup}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Backup
                                            </Link>
                                            <Link
                                                to={routes.clearcache}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Clear Cache
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="card">
                                    <div className="card-header px-0 mx-3">
                                        <div className="row g-3 align-items-center">
                                            <div className="col-md-6 col-sm-4">
                                                <h4>Custom CSS</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="mb-3">Write Custom CSS</h5>
                                        <div className="bg-dark text-gray-5">
                                            <pre className="language-markup mb-0">
                                                <code className="language-markup mb-0">
                                                    {"\n"}
                                                    {"    "}.section-header {"{"} {"\n"}
                                                    {"        "}margin-bottom: 50px;{"\n"}
                                                    {"    "}
                                                    {"}"}
                                                    {"\n"}
                                                    {"    "}.section-header h2{"{"}
                                                    {"\n"}
                                                    {"        "}font-size: 36px;{"\n"}
                                                    {"        "}font-weight: 700;{"\n"}
                                                    {"        "}color: #0A0A0A;{"\n"}
                                                    {"        "}margin-bottom: 14px;{"\n"}
                                                    {"    "}
                                                    {"}"}
                                                    {"\n"}
                                                    {"    "}.section-header h5 {"{"}
                                                    {"\n"}
                                                    {"        "}font-size: 18px;{"\n"}
                                                    {"        "}color: #680A83;{"\n"}
                                                    {"        "}font-weight: 600;{"\n"}
                                                    {"        "}text-align: center;{"\n"}
                                                    {"        "}margin-bottom: 8px;{"\n"}
                                                    {"    "}
                                                    {"}"}
                                                    {"\n"}
                                                </code>
                                                {"\n"}
                                            </pre>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end border-top mt-3 pt-3">
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

export default Customcss;
