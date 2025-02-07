import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const Languageweb = () => {
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
                                <Link className="nav-link" to={routes.profilesettings}>
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
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
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
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >

                                                AI Settings
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="card">
                                    <div className="card-header px-0 mx-3">
                                        <h4>Language</h4>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="card mb-3">
                                            <div className="card-header">
                                                <div className="row align-items-center g-3">
                                                    <div className="col-lg-6 col-sm-4">
                                                        <h6>Language</h6>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-8">
                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                            <Link
                                                                to={routes.language}
                                                                className="btn btn-sm btn-primary d-inline-flex align-items-center me-3"
                                                            >
                                                                <i className="ti ti-arrow-left me-2" />
                                                                Back to Translations
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-sm btn-outline-dark d-inline-flex align-items-center"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/flags/ae.png"
                                                                    className="me-2 avatar avatar-sm avatar-rounded"
                                                                    alt="Img"
                                                                />
                                                                Arabic
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th className="no-sort">
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id="select-all"
                                                                        />
                                                                    </div>
                                                                </th>
                                                                <th>Module Name</th>
                                                                <th>Total</th>
                                                                <th>Complete</th>
                                                                <th>Progress </th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6 className="fw-medium fs-14">Employees</h6>
                                                                </td>
                                                                <td>1620</td>
                                                                <td>1296</td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div
                                                                            className="progress progress-xs"
                                                                            style={{ width: 120 }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-success rounded"
                                                                                role="progressbar"
                                                                                style={{ width: "100%" }}
                                                                                aria-valuenow={100}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                        <span className="d-inline-flex fs-12 ms-2">
                                                                            100%
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to={routes.addLanguage}
                                                                        className="btn btn-sm btn-icon border btn-light"
                                                                    >
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6 className="fw-medium fs-14">Clients</h6>
                                                                </td>
                                                                <td>1620</td>
                                                                <td>972</td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div
                                                                            className="progress progress-xs"
                                                                            style={{ width: 120 }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-pink rounded"
                                                                                role="progressbar"
                                                                                style={{ width: "70%" }}
                                                                                aria-valuenow={80}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                        <span className="d-inline-flex fs-12 ms-2">
                                                                            70%
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to={routes.addLanguage}
                                                                        className="btn btn-sm btn-icon border btn-light"
                                                                    >
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6 className="fw-medium fs-14">Projects</h6>
                                                                </td>
                                                                <td>1620</td>
                                                                <td>810</td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div
                                                                            className="progress progress-xs"
                                                                            style={{ width: 120 }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-purple rounded"
                                                                                role="progressbar"
                                                                                style={{ width: "40%" }}
                                                                                aria-valuenow={40}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                        <span className="d-inline-flex fs-12 ms-2">
                                                                            40%
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to={routes.addLanguage}
                                                                        className="btn btn-sm btn-icon border btn-light"
                                                                    >
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6 className="fw-medium fs-14">Tasks</h6>
                                                                </td>
                                                                <td>1620</td>
                                                                <td>324</td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div
                                                                            className="progress progress-xs"
                                                                            style={{ width: 120 }}
                                                                        >
                                                                            <div
                                                                                className="progress-bar bg-skyblue rounded"
                                                                                role="progressbar"
                                                                                style={{ width: "60%" }}
                                                                                aria-valuenow={40}
                                                                                aria-valuemin={0}
                                                                                aria-valuemax={100}
                                                                            />
                                                                        </div>
                                                                        <span className="d-inline-flex fs-12 ms-2">
                                                                            60%
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to={routes.addLanguage}
                                                                        className="btn btn-sm btn-icon border btn-light"
                                                                    >
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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
    )
}


export default Languageweb;
