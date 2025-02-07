import React, { useState } from 'react'
import CommonSelect from '../../../core/common/commonSelect'
import { all_routes } from '../../router/all_routes'
import { Link } from 'react-router-dom'
import Table from "../../../core/common/dataTable/index";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { usersDetails } from '../../../core/data/json/usersDetails';
import PredefinedDateRanges from '../../../core/common/datePicker';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';
type PasswordField = "password" | "confirmPassword";

const Users = () => {

    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const roleChoose = [
        { value: "Select", label: "Select" },
        { value: "Employee", label: "Employee" },
        { value: "Client", label: "Client" },
    ]

    const data = usersDetails;
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center file-name-icon">
                    <Link to="#" className="avatar avatar-md avatar-rounded">
                        <ImageWithBasePath src={record.image_url} className="img-fluid" alt="img" />
                    </Link>
                    <div className="ms-2">
                        <h6 className="fw-medium">
                            <Link to="#">{text}</Link>
                        </h6>
                    </div>
                </div>
            ),
            sorter: (a: any, b: any) => a.name.length - b.name.length,
        },
        {
            title: "Email",
            dataIndex: "email",
            sorter: (a: any, b: any) => a.email.length - b.email.length,
        },
        {
            title: "Created Date",
            dataIndex: "created_date",
            sorter: (a: any, b: any) => a.created_date.length - b.created_date.length,
        },
        {
            title: "Role",
            dataIndex: "role",
            render: (text: String, record: any) => (
                <span className={`badge badge-md p-2 fs-10  ${text === 'Employee' ? 'badge-pink-transparent' : 'badge-soft-purple'}`}>{text}</span>
            ),
            sorter: (a: any, b: any) => a.role.length - b.role.length,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text: string, record: any) => (
                <div className="action-icon d-inline-flex">
                    <Link to="#" className="me-2">
                        <i className="ti ti-shield" />
                    </Link>
                    <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_role"
                    >
                        <i className="ti ti-edit" />
                    </Link>
                    <Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#delete_modal">
                        <i className="ti ti-trash" />
                    </Link>
                </div>
            ),
            sorter: (a: any, b: any) => a.status.length - b.status.length,
        },
    ]

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Users</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Administration</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Users
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="me-2 mb-2">
                                <div className="dropdown">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ti ti-file-export me-1" />
                                        Export
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                <i className="ti ti-file-type-pdf me-1" />
                                                Export as PDF
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                <i className="ti ti-file-type-xls me-1" />
                                                Export as Excel{" "}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-2">
                                <Link
                                    to="#"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#add_users"
                                    className="btn btn-primary d-flex align-items-center"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Add New User
                                </Link>
                            </div>
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Performance Indicator list */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Users List</h5>
                            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                                <div className="me-3">
                                    <div className="input-icon-end position-relative">
                                        <PredefinedDateRanges />
                                        <span className="input-icon-addon">
                                            <i className="ti ti-chevron-down" />
                                        </span>
                                    </div>
                                </div>
                                <div className="dropdown me-3">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        Role
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Employee
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Client
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown me-3">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        Status
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Active
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Inactive
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        Sort By : Last 7 Days
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Recently Added
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Ascending
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Desending
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Last Month
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Last 7 Days
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <Table dataSource={data} columns={columns} Selection={true} />
                        </div>
                    </div>
                    {/* /Performance Indicator list */}
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
            {/* Add Users */}
            <div className="modal fade" id="add_users">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add User</h4>
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
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">User Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="pass-group">
                                                <input
                                                    type={
                                                        passwordVisibility.password
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    className="pass-input form-control"
                                                />
                                                <span
                                                    className={`ti toggle-passwords ${passwordVisibility.password
                                                        ? "ti-eye"
                                                        : "ti-eye-off"
                                                        }`}
                                                    onClick={() =>
                                                        togglePasswordVisibility("password")
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="pass-group">
                                                <input
                                                    type={
                                                        passwordVisibility.confirmPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    className="pass-input form-control"
                                                />
                                                <span
                                                    className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                                                        ? "ti-eye"
                                                        : "ti-eye-off"
                                                        }`}
                                                    onClick={() =>
                                                        togglePasswordVisibility("confirmPassword")
                                                    }
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <CommonSelect
                                                className='select'
                                                options={roleChoose}
                                                defaultValue={roleChoose[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <div className="table-responsive">
                                                    <table className="table ">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>Module Permissions</th>
                                                                <th>Read</th>
                                                                <th>Write</th>
                                                                <th>Create</th>
                                                                <th>Delete</th>
                                                                <th>Import</th>
                                                                <th>Export</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Employee
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Holidays
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Leaves
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Events
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
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
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-white border me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Users */}
            {/* Edit  Users */}
            <div className="modal fade" id="edit_user">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit User</h4>
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
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Anthony "
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue=" Lewis"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">User Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="anthony"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="anthony@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="pass-group">
                                                <input
                                                    type="password"
                                                    className="pass-input form-control"
                                                />
                                                <span className="ti toggle-password ti-eye-off" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="pass-group">
                                                <input
                                                    type="password"
                                                    className="pass-inputs form-control"
                                                />
                                                <span className="ti toggle-passwords ti-eye-off" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={988765544}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <CommonSelect
                                                className='select'
                                                options={roleChoose}
                                                defaultValue={roleChoose[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <div className="table-responsive">
                                                    <table className="table ">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>Module Permissions</th>
                                                                <th>Read</th>
                                                                <th>Write</th>
                                                                <th>Create</th>
                                                                <th>Delete</th>
                                                                <th>Import</th>
                                                                <th>Export</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Employee
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Holidays
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Leaves
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h6 className="fs-14 fw-normal text-gray-9">
                                                                        Events
                                                                    </h6>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="form-check form-check-md">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
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
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-white border me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit  Users */}
        </>

    )
}

export default Users
