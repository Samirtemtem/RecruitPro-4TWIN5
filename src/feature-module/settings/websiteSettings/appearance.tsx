import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import { appearanceFam, appearanceSel } from "../../../core/common/selectoption/selectoption";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const Appearance = () => {
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
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
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
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
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
                                    <div className="card-body">
                                        <div className="border-bottom mb-3 pb-3">
                                            <h4>Appearance</h4>
                                        </div>
                                        <form>
                                            <div className="border-bottom mb-3">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-3 col-lg-12 col-md-3">
                                                        <div className="setting-info mb-4">
                                                            <h6 className="fs-14 fw-medium">Select Theme</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9 col-lg-12 col-md-9">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <div className="card shadow-none border-primary">
                                                                    <div className="card-body">
                                                                        <Link to="#">
                                                                            <div className="border rounded border-gray mb-2">
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/theme/light.svg"
                                                                                    className="img-fluid rounded"
                                                                                    alt="theme"
                                                                                />
                                                                            </div>
                                                                            <p className="text-dark text-center">Light</p>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="me-3">
                                                                <div className="card shadow-none">
                                                                    <div className="card-body">
                                                                        <Link to="#">
                                                                            <div className="border rounded border-gray mb-2">
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/theme/dark.svg"
                                                                                    className="img-fluid rounded"
                                                                                    alt="theme"
                                                                                />
                                                                            </div>
                                                                            <p className="text-dark text-center">Dark</p>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="card shadow-none">
                                                                    <div className="card-body">
                                                                        <Link to="#">
                                                                            <div className="border rounded border-gray mb-2">
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/theme/automatic.svg"
                                                                                    className="img-fluid rounded"
                                                                                    alt="theme"
                                                                                />
                                                                            </div>
                                                                            <p className="text-dark text-center">
                                                                                Automatic
                                                                            </p>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-xl-3 col-lg-12 col-md-3">
                                                        <div className="setting-info mb-4">
                                                            <h6 className="fs-14 fw-medium">Accent Color</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-12 col-md-4">
                                                        <div className="theme-colors mb-4">
                                                            <ul className="d-flex align-items-center">
                                                                <li>
                                                                    <span className="themecolorset">
                                                                        <span className="primecolor bg-primary">
                                                                            <span className="colorcheck text-white">
                                                                                <i className="ti ti-check text-primary fs-10" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="themecolorset">
                                                                        <span className="primecolor bg-secondary">
                                                                            <span className="colorcheck text-white">
                                                                                <i className="ti ti-check text-primary fs-10" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="themecolorset">
                                                                        <span className="primecolor bg-info">
                                                                            <span className="colorcheck text-white">
                                                                                <i className="ti ti-check text-primary fs-10" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="themecolorset">
                                                                        <span className="primecolor bg-purple">
                                                                            <span className="colorcheck text-white">
                                                                                <i className="ti ti-check text-primary fs-10" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="themecolorset">
                                                                        <span className="primecolor bg-pink">
                                                                            <span className="colorcheck text-white">
                                                                                <i className="ti ti-check text-primary fs-10" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="themecolorset">
                                                                        <span className="primecolor bg-warning">
                                                                            <span className="colorcheck text-white">
                                                                                <i className="ti ti-check text-primary fs-10" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="themecolorset active">
                                                                        <span className="primecolor bg-danger">
                                                                            <span className="colorcheck text-white">
                                                                                <i className="ti ti-check text-primary fs-10" />
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center mb-4">
                                                    <div className="col-xl-3 col-lg-12 col-md-3">
                                                        <div className="">
                                                            <h6 className="fs-14 fw-medium">Sidebar Size</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-12 col-md-3">
                                                        <CommonSelect
                                                            className="select"
                                                            options={appearanceSel}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col-xl-3 col-lg-12 col-md-3">
                                                        <div className="">
                                                            <h6 className="fs-14 fw-medium">Font Family</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-12 col-md-3">
                                                        <CommonSelect
                                                            className="select"
                                                            options={appearanceFam}
                                                        />
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

export default Appearance;
