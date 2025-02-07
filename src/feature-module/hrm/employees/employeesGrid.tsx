import React, { useState } from 'react'
import { all_routes } from '../../router/all_routes'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import CommonSelect from '../../../core/common/commonSelect';
import { DatePicker } from 'antd';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';
type PasswordField = "password" | "confirmPassword";

const EmployeesGrid = () => {

    const department = [
        { value: "Select", label: "Select" },
        { value: "All Department", label: "All Department" },
        { value: "Finance", label: "Finance" },
        { value: "Developer", label: "Developer" },
        { value: "Executive", label: "Executive" },
    ];
    const designation = [
        { value: "Select", label: "Select" },
        { value: "Finance", label: "Finance" },
        { value: "Developer", label: "Developer" },
        { value: "Executive", label: "Executive" },
    ];

    const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };

    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field: PasswordField) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Employee</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Employee</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Employee Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="me-2 mb-2">
                                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                                    <Link to={all_routes.employeeList} className="btn btn-icon btn-sm me-1">
                                        <i className="ti ti-list-tree" />
                                    </Link>
                                    <Link
                                        to={all_routes.employeeGrid}
                                        className="btn btn-icon btn-sm active bg-primary text-white"
                                    >
                                        <i className="ti ti-layout-grid" />
                                    </Link>
                                </div>
                            </div>
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
                                    data-bs-target="#add_employee"
                                    className="btn btn-primary d-flex align-items-center"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Add Employee
                                </Link>
                            </div>
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    <div className="row">
                        {/* Total Plans */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <div>
                                            <span className="avatar avatar-lg bg-dark rounded-circle">
                                                <i className="ti ti-users" />
                                            </span>
                                        </div>
                                        <div className="ms-2 overflow-hidden">
                                            <p className="fs-12 fw-medium mb-1 text-truncate">
                                                Total Employee
                                            </p>
                                            <h4>1007</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="badge badge-soft-purple badge-sm fw-normal">
                                            <i className="ti ti-arrow-wave-right-down" />
                                            +19.01%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Total Plans */}
                        {/* Total Plans */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <div>
                                            <span className="avatar avatar-lg bg-success rounded-circle">
                                                <i className="ti ti-user-share" />
                                            </span>
                                        </div>
                                        <div className="ms-2 overflow-hidden">
                                            <p className="fs-12 fw-medium mb-1 text-truncate">Active</p>
                                            <h4>1007</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="badge badge-soft-primary badge-sm fw-normal">
                                            <i className="ti ti-arrow-wave-right-down" />
                                            +19.01%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Total Plans */}
                        {/* Inactive Plans */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <div>
                                            <span className="avatar avatar-lg bg-danger rounded-circle">
                                                <i className="ti ti-user-pause" />
                                            </span>
                                        </div>
                                        <div className="ms-2 overflow-hidden">
                                            <p className="fs-12 fw-medium mb-1 text-truncate">InActive</p>
                                            <h4>1007</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="badge badge-soft-dark badge-sm fw-normal">
                                            <i className="ti ti-arrow-wave-right-down" />
                                            +19.01%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Inactive Companies */}
                        {/* No of Plans  */}
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center overflow-hidden">
                                        <div>
                                            <span className="avatar avatar-lg bg-info rounded-circle">
                                                <i className="ti ti-user-plus" />
                                            </span>
                                        </div>
                                        <div className="ms-2 overflow-hidden">
                                            <p className="fs-12 fw-medium mb-1 text-truncate">
                                                New Joiners
                                            </p>
                                            <h4>67</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="badge badge-soft-secondary badge-sm fw-normal">
                                            <i className="ti ti-arrow-wave-right-down" />
                                            +19.01%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /No of Plans */}
                    </div>
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                <h5>Employees Grid</h5>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                    <div className="dropdown me-3">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            Designation
                                        </Link>
                                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Finance
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Developer
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Executive
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
                                                    Last 7 Days
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Clients Grid */}
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-32.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Anthony Lewis</Link>
                                        </h6>
                                        <span className="badge bg-pink-transparent fs-10 fw-medium">
                                            Software Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">20</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">13</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">7</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-purple"> 65%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-purple"
                                            role="progressbar"
                                            style={{ width: "65%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-09.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Brian Villalobos</Link>
                                        </h6>
                                        <span className="badge badge-purple-transparent fs-10 fw-medium">
                                            Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">30</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">10</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">20</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-warning"> 30%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: "30%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-01.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Harvey Smith</Link>
                                        </h6>
                                        <span className="badge badge-purple-transparent fs-10 fw-medium">
                                            Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">25</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">7</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">18</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-danger"> 20%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: "20%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-33.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Stephan Peralt</Link>
                                        </h6>
                                        <span className="badge badge-dark-transparent fs-10 fw-medium">
                                            Software Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">15</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">13</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">2</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-success"> 90%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "90%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-34.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Doglas Martini</Link>
                                        </h6>
                                        <span className="badge badge-secondary-transparent fs-10 fw-medium">
                                            Full Stack Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">15</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">2</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">13</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-danger"> 10%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: "10%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-02.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Linda Ray</Link>
                                        </h6>
                                        <span className="badge bg-pink-transparent fs-10 fw-medium">
                                            Software Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">20</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">10</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">10</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-purple"> 50%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-purple"
                                            role="progressbar"
                                            style={{ width: "50%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-35.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Elliot Murray</Link>
                                        </h6>
                                        <span className="badge badge-purple-transparent fs-10 fw-medium">
                                            Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">40</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">35</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">5</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-success"> 93%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "93%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-36.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Rebecca Smtih</Link>
                                        </h6>
                                        <span className="badge badge-soft-skyblue fs-10 fw-medium">
                                            Tester
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">30</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">22</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">8</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-pink"> 80%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-pink"
                                            role="progressbar"
                                            style={{ width: "80%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-37.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Connie Waters</Link>
                                        </h6>
                                        <span className="badge bg-pink-transparent fs-10 fw-medium">
                                            Software Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">25</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">11</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">14</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-warning"> 35%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            style={{ width: "35%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-38.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Lori Broaddus</Link>
                                        </h6>
                                        <span className="badge badge-secondary-transparent fs-10 fw-medium">
                                            Full Stack Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">40</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">27</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">16</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-pink"> 75%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-pink"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-30.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Trent Frazier</Link>
                                        </h6>
                                        <span className="badge bg-pink-transparent fs-10 fw-medium">
                                            Software Developer
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">30</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">17</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">13</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-purple"> 60%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-purple"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="form-check form-check-md">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <div>
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="avatar avatar-xl avatar-rounded online border p-1 border-primary rounded-circle"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-31.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-icon btn-sm rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#edit_employee"
                                                    >
                                                        <i className="ti ti-edit me-1" />
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="dropdown-item rounded-1"
                                                        to="#"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                    >
                                                        <i className="ti ti-trash me-1" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mb-3">
                                        <h6 className="mb-1">
                                            <Link to={all_routes.employeedetails}>Norene Valle</Link>
                                        </h6>
                                        <span className="badge bg-danger-transparent fs-10 fw-medium">
                                            Trainee
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Projects</span>
                                                <h6 className="fw-medium">10</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Done</span>
                                                <h6 className="fw-medium">1</h6>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="mb-3">
                                                <span className="fs-12">Progress</span>
                                                <h6 className="fw-medium">9</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-center">
                                        Productivity : <span className="text-danger"> 10%</span>
                                    </p>
                                    <div className="progress progress-xs mb-2">
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: "10%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="text-center mb-4">
                                <Link to="#" className="btn btn-primary">
                                    <i className="ti ti-loader-3 me-1" />
                                    Load More
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /Clients Grid */}
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
            {/* Add Employee */}
            <div className="modal fade" id="add_employee">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="d-flex align-items-center">
                                <h4 className="modal-title me-2">Add New Employee</h4>
                                <span>Employee ID : EMP -0024</span>
                            </div>
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
                            <div className="contact-grids-tab">
                                <ul className="nav nav-underline" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="info-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#basic-info"
                                            type="button"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            Basic Information
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="address-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#address"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Permissions
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="basic-info"
                                    role="tabpanel"
                                    aria-labelledby="info-tab"
                                    tabIndex={0}
                                >
                                    <div className="modal-body pb-0 ">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                                        <i className="ti ti-photo text-gray-2 fs-16" />
                                                    </div>
                                                    <div className="profile-upload">
                                                        <div className="mb-2">
                                                            <h6 className="mb-1">Upload Profile Image</h6>
                                                            <p className="fs-12">Image should be below 4 mb</p>
                                                        </div>
                                                        <div className="profile-uploader d-flex align-items-center">
                                                            <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                                                Upload
                                                                <input
                                                                    type="file"
                                                                    className="form-control image-sign"
                                                                    multiple
                                                                />
                                                            </div>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-light btn-sm"
                                                            >
                                                                Cancel
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        First Name <span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Employee ID <span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Joining Date <span className="text-danger"> *</span>
                                                    </label>
                                                    <div className="input-icon-end position-relative">
                                                        <DatePicker
                                                            className="form-control datetimepicker"
                                                            format={{
                                                                format: "DD-MM-YYYY",
                                                                type: "mask",
                                                            }}
                                                            getPopupContainer={getModalContainer}
                                                            placeholder="DD-MM-YYYY"
                                                        />
                                                        <span className="input-icon-addon">
                                                            <i className="ti ti-calendar text-gray-7" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Username <span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Email <span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3 ">
                                                    <label className="form-label">
                                                        Password <span className="text-danger"> *</span>
                                                    </label>
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
                                                <div className="mb-3 ">
                                                    <label className="form-label">
                                                        Confirm Password <span className="text-danger"> *</span>
                                                    </label>
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
                                                    <label className="form-label">
                                                        Phone Number <span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Company<span className="text-danger"> *</span>
                                                    </label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Department</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={department}
                                                        defaultValue={department[0]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Designation</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={designation}
                                                        defaultValue={designation[0]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        About <span className="text-danger"> *</span>
                                                    </label>
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
                                        <button
                                            type="button"
                                            className="btn btn-outline-light border me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>
                                        <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                            Save{" "}
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="address"
                                    role="tabpanel"
                                    aria-labelledby="address-tab"
                                    tabIndex={0}
                                >
                                    <div className="modal-body">
                                        <div className="card bg-light-500 shadow-none">
                                            <div className="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                <h6>Enable Options</h6>
                                                <div className="d-flex align-items-center justify-content-end">
                                                    <div className="form-check form-switch me-2">
                                                        <label className="form-check-label mt-0">
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                role="switch"
                                                            />
                                                            Enable all Module
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <label className="form-check-label mt-0">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultChecked
                                                            />
                                                            Select All
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive border rounded">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        defaultChecked
                                                                    />
                                                                    Holidays
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Leaves
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Clients
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Projects
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Tasks
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Chats
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        defaultChecked
                                                                    />
                                                                    Assets
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Timing Sheets
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-outline-light border me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal" data-inert={true}
                                            data-bs-target="#success_modal"
                                        >
                                            Save{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Employee */}
            {/* Edit Employee */}
            <div className="modal fade" id="edit_employee">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="d-flex align-items-center">
                                <h4 className="modal-title me-2">Edit Employee</h4>
                                <span>Employee ID : EMP -0024</span>
                            </div>
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
                            <div className="contact-grids-tab">
                                <ul className="nav nav-underline" id="myTab2" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="info-tab2"
                                            data-bs-toggle="tab"
                                            data-bs-target="#basic-info2"
                                            type="button"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            Basic Information
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="address-tab2"
                                            data-bs-toggle="tab"
                                            data-bs-target="#address2"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Permissions
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent2">
                                <div
                                    className="tab-pane fade show active"
                                    id="basic-info2"
                                    role="tabpanel"
                                    aria-labelledby="info-tab2"
                                    tabIndex={0}
                                >
                                    <div className="modal-body pb-0 ">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                                        <ImageWithBasePath
                                                            src="assets/img/users/user-13.jpg"
                                                            alt="img"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                    <div className="profile-upload">
                                                        <div className="mb-2">
                                                            <h6 className="mb-1">Upload Profile Image</h6>
                                                            <p className="fs-12">Image should be below 4 mb</p>
                                                        </div>
                                                        <div className="profile-uploader d-flex align-items-center">
                                                            <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                                                Upload
                                                                <input
                                                                    type="file"
                                                                    className="form-control image-sign"
                                                                    multiple
                                                                />
                                                            </div>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-light btn-sm"
                                                            >
                                                                Cancel
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        First Name <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Anthony"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        defaultValue="Lewis"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Employee ID <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Emp-001"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Joining Date <span className="text-danger"> *</span>
                                                    </label>
                                                    <div className="input-icon-end position-relative">
                                                        <DatePicker
                                                            className="form-control datetimepicker"
                                                            format={{
                                                                format: "DD-MM-YYYY",
                                                                type: "mask",
                                                            }}
                                                            getPopupContainer={getModalContainer}
                                                            placeholder="DD-MM-YYYY"
                                                        />
                                                        <span className="input-icon-addon">
                                                            <i className="ti ti-calendar text-gray-7" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Username <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Anthony"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Email <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        defaultValue="anthony@example.com	"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3 ">
                                                    <label className="form-label">
                                                        Password <span className="text-danger"> *</span>
                                                    </label>
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
                                                <div className="mb-3 ">
                                                    <label className="form-label">
                                                        Confirm Password <span className="text-danger"> *</span>
                                                    </label>
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
                                                    <label className="form-label">
                                                        Phone Number <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="(123) 4567 890"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Company<span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Abac Company"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Department</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={department}
                                                        defaultValue={department[1]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Designation</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={designation}
                                                        defaultValue={designation[1]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        About <span className="text-danger"> *</span>
                                                    </label>
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
                                        <button
                                            type="button"
                                            className="btn btn-outline-light border me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>
                                        <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                            Save{" "}
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="address2"
                                    role="tabpanel"
                                    aria-labelledby="address-tab2"
                                    tabIndex={0}
                                >
                                    <div className="modal-body">
                                        <div className="card bg-light-500 shadow-none">
                                            <div className="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                <h6>Enable Options</h6>
                                                <div className="d-flex align-items-center justify-content-end">
                                                    <div className="form-check form-switch me-2">
                                                        <label className="form-check-label mt-0">
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                role="switch"
                                                            />
                                                            Enable all Module
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <label className="form-check-label mt-0">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultChecked
                                                            />
                                                            Select All
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive border rounded">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        defaultChecked
                                                                    />
                                                                    Holidays
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Leaves
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Clients
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Projects
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Tasks
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Chats
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        defaultChecked
                                                                    />
                                                                    Assets
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Timing Sheets
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-outline-light border me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal" data-inert={true}
                                            data-bs-target="#success_modal"
                                        >
                                            Save{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Employee */}
            {/* Add Employee Success */}
            <div className="modal fade" id="success_modal" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-3">
                                <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
                                    <i className="ti ti-check fs-24" />
                                </span>
                                <h5 className="mb-2">Employee Added Successfully</h5>
                                <p className="mb-3">
                                    Stephan Peralt has been added with Client ID :{" "}
                                    <span className="text-primary">#EMP - 0001</span>
                                </p>
                                <div>
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <Link to={all_routes.employeeList} className="btn btn-dark w-100">
                                                Back to List
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="btn btn-primary w-100"
                                            >
                                                Detail Page
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Client Success */}
        </>

    )
}

export default EmployeesGrid
