import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const Clearcache = () => {
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
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
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
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
                                                Clear Cache
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="card">
                                    <div className="card-header px-0 mx-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>Clear Cache</h4>
                                        </div>
                                    </div>
                                    <div className="card-body pb-0 ">
                                        <div className="cache-content">
                                            <p className="fs-14 text-dark mb-3">
                                                {" "}
                                                <span className="me-2">
                                                    <i className="ti ti-info-circle text-danger" />
                                                </span>
                                                Clearing the cache may improve performance but will remove
                                                temporary files, stored preferences, and cached data from
                                                websites and applications.
                                            </p>
                                            <div className="d-flex align-items-center justify-content-end mb-3">
                                                <Link to="#" className="btn btn-outline-primary me-3">
                                                    Cancel
                                                </Link>
                                                <Link to="#" className="btn btn-primary">
                                                    Clear Cache
                                                </Link>
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


            <>
                {/* Add New IP Addres */}
                <div className="modal fade" id="add_ban">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add New IP Address</h4>
                                <button
                                    type="button"
                                    className="btn-close custom-btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="ti ti-x" />
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">IP Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Currency Name"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Reason</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={3}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Link to="#" className="btn btn-light me-2" data-bs-dismiss="modal">
                                        Cancel
                                    </Link>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                        Add IP Address
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Add New Currency */}
                {/* Edit IP Address */}
                <div className="modal fade" id="edit_ban">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit IP Address</h4>
                                <button
                                    type="button"
                                    className="btn-close custom-btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="ti ti-x" />
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">IP Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="198.120.16.01"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Reason</label>
                                                <textarea
                                                    className="form-control"
                                                    defaultValue={
                                                        "Temporarily block to protect user accounts from internet fraudsters"
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <Link to="#" className="btn btn-light me-2" data-bs-dismiss="modal">
                                        Cancel
                                    </Link>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Edit IP Address */}
            </>


        </div>
    );
};

export default Clearcache;
