import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const Salarysettings = () => {
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
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
                                                Salary Settings
                                            </Link>
                                            <Link
                                                to={routes.approvalSettings}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Approval Settings
                                            </Link>
                                            <Link
                                                to={routes.invoiceSettings}
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
                                            <h4>Salary Settings</h4>
                                        </div>
                                        <form>
                                            <div className="border-bottom mb-3">
                                                <div className="row"></div>
                                                <div className="row">
                                                    <div className="col-md-4 d-flex">
                                                        <div className="card flex-fill">
                                                            <div className="card-body pb-1">
                                                                <div className="content-head d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                                                                    <h5>DA &amp; HRA</h5>
                                                                    <div className="form-check form-switch">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            role="switch"
                                                                            id="flexSwitchCheckDefault"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label">DA (%)</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label">HRA (%)</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 d-flex">
                                                        <div className="card flex-fill">
                                                            <div className="card-body pb-1">
                                                                <div className="content-head d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                                                                    <h5>Provident Fund</h5>
                                                                    <div className="form-check form-switch">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            role="switch"
                                                                            id="flexSwitchCheckDefault2"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label">
                                                                        Employee Share (%)
                                                                    </label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label">
                                                                        Organization Share (%)
                                                                    </label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 d-flex">
                                                        <div className="card flex-fill">
                                                            <div className="card-body pb-1">
                                                                <div className="content-head d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                                                                    <h5>ESI</h5>
                                                                    <div className="form-check form-switch">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            role="switch"
                                                                            id="flexSwitchCheckDefault3"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label">
                                                                        Employee Share (%)
                                                                    </label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label">
                                                                        Organization Share (%)
                                                                    </label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-bottom mb-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card">
                                                            <div className="card-body pb-1">
                                                                <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                                                                    <h5>
                                                                        TDS <span> Annual Salary</span>
                                                                    </h5>
                                                                    <div className="form-check form-switch">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            role="switch"
                                                                            id="flexSwitchCheckDefault4"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="add-salary-info">
                                                                            <div className="row">
                                                                                <div className="col-md-4">
                                                                                    <div className="mb-3">
                                                                                        <label className="form-label">
                                                                                            Salary From
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <div className="mb-3">
                                                                                        <label className="form-label">
                                                                                            Salary To
                                                                                        </label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <div className="mb-3 flex-fill">
                                                                                            <label className="form-label">
                                                                                                Percentage
                                                                                            </label>
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control"
                                                                                            />
                                                                                        </div>
                                                                                        <div className="d-flex align-items-center pt-3 ms-3">
                                                                                            <Link
                                                                                                to="#"
                                                                                                className="avatar avatar-md rounded bg-gray add-salary-btn text-primary"
                                                                                            >
                                                                                                <i className="ti ti-plus" />
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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


export default Salarysettings;
