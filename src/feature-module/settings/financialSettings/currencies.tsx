import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import {
    status,
} from "../../../core/common/selectoption/selectoption";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const Currencies = () => {
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
                                <Link className="nav-link " to={routes.salarySettings}>
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
                                <Link className="nav-link active" to={routes.paymentGateways}>
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
                                                to={routes.paymentGateways}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >
                                                Payment Gateways
                                            </Link>
                                            <Link
                                                to={routes.taxRates}
                                                className="d-inline-flex align-items-center rounded py-2 px-3"
                                            >

                                                Tax Rates
                                            </Link>
                                            <Link
                                                to={routes.currencies}
                                                className="d-inline-flex align-items-center rounded active py-2 px-3"
                                            >
                                                <i className="ti ti-arrow-badge-right me-2" />
                                                Currencies
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
                                                <h4>Currencies</h4>
                                            </div>
                                            <div className="col-md-6 col-sm-8">
                                                <div className="d-flex justify-content-sm-end align-items-center flex-wrap row-gap-2">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#add_new_currency"
                                                    >
                                                        <i className="ti ti-circle-plus me-2" />
                                                        Add Currency
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pb-0">
                                        <div className="card mb-3">
                                            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                <h5>Currencies List</h5>
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
                                                                <th>Currency</th>
                                                                <th>Currency Symbol</th>
                                                                <th>Currency Position</th>
                                                                <th>Currency Code</th>
                                                                <th>Status</th>
                                                                <th />
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
                                                                    <h6 className="d-flex align-items-center fw-medium">
                                                                        Dollar
                                                                    </h6>
                                                                </td>
                                                                <td>$</td>
                                                                <td>Front</td>
                                                                <td>INR</td>
                                                                <td>
                                                                    <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Active
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <div className="action-icon d-inline-flex">
                                                                        <Link
                                                                            to="#"
                                                                            className="me-2"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_new_currency"
                                                                        >
                                                                            <i className="ti ti-edit" />
                                                                        </Link>
                                                                        <Link
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"
                                                                        >
                                                                            <i className="ti ti-trash" />
                                                                        </Link>
                                                                    </div>
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
                                                                    <h6 className="d-flex align-items-center fw-medium">
                                                                        Rupee
                                                                    </h6>
                                                                </td>
                                                                <td>₹</td>
                                                                <td>Front</td>
                                                                <td>USD</td>
                                                                <td>
                                                                    <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Active
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <div className="action-icon d-inline-flex">
                                                                        <Link
                                                                            to="#"
                                                                            className="me-2"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_new_currency"
                                                                        >
                                                                            <i className="ti ti-edit" />
                                                                        </Link>
                                                                        <Link
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"
                                                                        >
                                                                            <i className="ti ti-trash" />
                                                                        </Link>
                                                                    </div>
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

            <>
                {/* Add New Currency */}
                <div className="modal fade" id="add_new_currency">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add New Currency</h4>
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
                                <div className="modal-body pb-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Currency Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Currency Symbol</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Currency Code</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="d-flex mb-3">
                                                <label className="form-label me-3">Currency Position</label>
                                                <div className="form-check me-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="required"
                                                        id="required1"
                                                        defaultChecked
                                                    />
                                                    <label className="form-check-label" htmlFor="required1">
                                                        Front
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        name="required"
                                                        type="radio"
                                                        id="required2"
                                                    />
                                                    <label className="form-check-label" htmlFor="required2">
                                                        Behind
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Status</label>
                                                <CommonSelect
                                                    className="select"
                                                    options={status}
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
                                        Add Tax Rate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Add New Currency */}
                {/* Edit New Currency */}
                <div className="modal fade" id="edit_new_currency">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit New Currency</h4>
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
                                <div className="modal-body pb-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Currency Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Currency Name"
                                                    defaultValue="Dollar"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Currency Symbol</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Currency Symbol"
                                                    defaultValue="$"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Currency Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Currency Code"
                                                    defaultValue="INR"
                                                />
                                            </div>
                                            <div className="d-flex mb-3">
                                                <label className="form-label me-3">Currency Position</label>
                                                <div className="form-check me-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="required"
                                                        id="required3"
                                                        defaultChecked
                                                    />
                                                    <label className="form-check-label" htmlFor="required3">
                                                        Front
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        name="required"
                                                        type="radio"
                                                        id="required4"
                                                    />
                                                    <label className="form-check-label" htmlFor="required4">
                                                        Behind
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Status</label>
                                                <CommonSelect
                                                    className="select"
                                                    defaultValue={status[1]}
                                                    options={status}
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
                {/* /Edit New Currency */}
                {/* Delete Modal */}
                <div className="modal fade" id="delete_modal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                                    <i className="ti ti-trash-x fs-36" />
                                </span>
                                <h4 className="mb-1">Confirm Delete</h4>
                                <p className="mb-3">
                                    You want to delete all the marked items, this cant be undone once
                                    you delete.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Link
                                        to="#"
                                        className="btn btn-light me-3"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link to={routes.currencies} data-bs-dismiss="modal" className="btn btn-danger">
                                        Yes, Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Delete Modal */}
            </>


        </div>
    );
};

export default Currencies;
