import React from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'

const CandidateGrid = () => {

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Candidates</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Administration</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Candidates Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="me-2 mb-2">
                                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                                    <Link
                                        to={all_routes.candidateskanban}
                                        className="btn btn-icon btn-sm me-1"
                                    >
                                        <i className="ti ti-layout-kanban" />
                                    </Link>
                                    <Link to={all_routes.candidateslist} className="btn btn-icon btn-sm me-1">
                                        <i className="ti ti-list-tree" />
                                    </Link>
                                    <Link
                                        to={all_routes.candidatesGrid}
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
                            <div className="head-icons ms-2">
                            <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                <h5>Candidates Grid</h5>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
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
                                                    Accountant
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    App Developer
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Technician
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
                                            Select Status
                                        </Link>
                                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Select Status
                                                </Link>
                                            </li>
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
                        </div>
                    </div>
                    {/* Candidates Grid */}
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-39.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Harold Gaynor
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-001
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    harold@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">Accountant</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-purple">
                                                {" "}
                                                <i className="ti ti-point-filled" /> New
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-40.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        {" "}
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Sandra Ornellas
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-002
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    sandra@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">Accountant</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-pink">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Scheduled
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-41.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            John Harris
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-003
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    john@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">Technician</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-info">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Interviewed
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-42.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Carole Langan
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-004
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    carole@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">
                                                Web Developer
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-warning">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Offered
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-44.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Charles Marks
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-005
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    charles@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">SEO</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-success">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Hired
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-43.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Kerry Drake
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-006
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    kerry@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">Designer</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-danger">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Rejected
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-46.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            David Carmona
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-007
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    david@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">
                                                Account Manager
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-success">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Hired
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-45.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Margaret Soto
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-008
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    margaret@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">SEO Analyst</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-pink">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Scheduled
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-48.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Jeffrey Thaler
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-009
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    jeffrey@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">Admin</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-purple">
                                                {" "}
                                                <i className="ti ti-point-filled" /> New
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-47.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Joyce Golston
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-010
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    joyce@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">
                                                Business Analyst
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-success">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Hired
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-49.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Cedric Rosalez
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-011
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    cedric@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">
                                                Financial Analyst
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-purple">
                                                {" "}
                                                <i className="ti ti-point-filled" /> New
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex align-items-center flex-shrink-0">
                                            <Link
                                                to="#"
                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#candidate_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-50.jpg"
                                                    className="img-fluid h-auto w-auto"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="d-flex flex-column">
                                                <div className="d-flex flex-wrap mb-1">
                                                    <h6 className="fs-16 fw-semibold me-1">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#candidate_details"
                                                        >
                                                            Lillie Diaz
                                                        </Link>
                                                    </h6>
                                                    <span className="badge bg-primary-transparent">
                                                        Cand-012
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-13 fw-normal">
                                                    lillie@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light rounder p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                            <span className="text-dark fs-14 fw-medium">
                                                Receptionist
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                            <span className="text-dark fs-14 fw-medium">12 Sep 2024</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="text-gray fs-14 fw-normal">Status</h6>
                                            <span className="fs-10 fw-medium badge bg-danger">
                                                {" "}
                                                <i className="ti ti-point-filled" /> Rejected
                                            </span>
                                        </div>
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
                    {/* /Candidates Grid */}
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
            {/* Candidate Details */}
            <div
                className="offcanvas offcanvas-end offcanvas-large"
                tabIndex={-1}
                id="candidate_details"
            >
                <div className="offcanvas-header border-bottom">
                    <h4 className="d-flex align-items-center">
                        Candidate Details
                        <span className="badge bg-primary-transparent fw-medium ms-2">
                            Cand-001
                        </span>
                    </h4>
                    <button
                        type="button"
                        className="btn-close custom-btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <i className="ti ti-x" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap flex-md-nowrap row-gap-3">
                                <span className="avatar avatar-xxxl candidate-img flex-shrink-0 me-3">
                                    <ImageWithBasePath src="assets/img/users/user-03.jpg" alt="Img" />
                                </span>
                                <div className="flex-fill border rounded p-3 pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Candiate Name</p>
                                                <h6 className="fw-normal">Harold Gaynor</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Role</p>
                                                <h6 className="fw-normal">Accountant</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Date</p>
                                                <h6 className="fw-normal">12 Sep 2024</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Email</p>
                                                <h6 className="fw-normal">harold@example.com</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Recruiter</p>
                                                <h6 className="fw-normal d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded me-1">
                                                        <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                                                    </span>
                                                    Anthony Lewis
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Recruiter</p>
                                                <span className="badge badge-purple d-inline-flex align-items-center">
                                                    <i className="ti ti-point-filled me-1" />
                                                    New
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-grids-tab p-0 mb-3">
                        <ul className="nav nav-underline" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active pt-0"
                                    id="info-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#basic-info"
                                    type="button"
                                    role="tab"
                                    aria-selected="true"
                                >
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link pt-0"
                                    id="address-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#address"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    Hiring Pipeline
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link pt-0"
                                    id="address-tab2"
                                    data-bs-toggle="tab"
                                    data-bs-target="#address2"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    Notes
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
                            <div className="card">
                                <div className="card-header">
                                    <h5>Personal Information</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Candiate Name</p>
                                                <h6 className="fw-normal">Harold Gaynor</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Phone</p>
                                                <h6 className="fw-normal">(146) 8964 278</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Gender</p>
                                                <h6 className="fw-normal">Male</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Date of Birth</p>
                                                <h6 className="fw-normal">23 Oct 2000</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Email</p>
                                                <h6 className="fw-normal">harold@example.com</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Nationality</p>
                                                <h6 className="fw-normal">Indian</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Religion</p>
                                                <h6 className="fw-normal">Christianity</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Marital status</p>
                                                <h6 className="fw-normal">No</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Address Information</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Address</p>
                                                <h6 className="fw-normal">1861 Bayonne Ave</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">City</p>
                                                <h6 className="fw-normal">New York</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">State</p>
                                                <h6 className="fw-normal">New York</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Country</p>
                                                <h6 className="fw-normal">United States Of America</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Resume</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="avatar avatar-lg bg-light-500 border text-dark me-2">
                                                    <i className="ti ti-file-description fs-24" />
                                                </span>
                                                <div>
                                                    <h6 className="fw-medium">Resume.doc</h6>
                                                    <span>120 KB</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3 text-md-end">
                                                <Link
                                                    to="#"
                                                    className="btn btn-dark d-inline-flex align-items-center"
                                                >
                                                    <i className="ti ti-download me-1" />
                                                    Download
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="address"
                            role="tabpanel"
                            aria-labelledby="address-tab"
                            tabIndex={0}
                        >
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="fw-medium mb-2">Candidate Pipeline Stage</h5>
                                    <div className="pipeline-list candidates border-0 mb-0">
                                        <ul className="mb-0">
                                            <li>
                                                <Link to="#" className="bg-purple">
                                                    New
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-gray-100">
                                                    Scheduled
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-grat-100">
                                                    Interviewed
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-gray-100">
                                                    Offered
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-gray-100">
                                                    Hired / Rejected
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Details</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Current Status</p>
                                                <span className="badge badge-soft-purple d-inline-flex align-items-center">
                                                    <i className="ti ti-point-filled me-1" />
                                                    New
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Role</p>
                                                <h6 className="fw-normal">Accountant</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Date</p>
                                                <h6 className="fw-normal">12 Sep 2024</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Recruiter</p>
                                                <div className="d-flex align-items-center">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded me-2"
                                                    >
                                                        <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Anthony Lewis</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <Link to="#" className="btn btn-dark me-3">
                                            Reject
                                        </Link>
                                        <Link to="#" className="btn btn-primary">
                                            Move to Next Stage
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="address2"
                            role="tabpanel"
                            aria-labelledby="address-tab2"
                            tabIndex={0}
                        >
                            <div className="card">
                                <div className="card-header">
                                    <h5>Notes</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Harold Gaynor is a detail-oriented and highly motivated
                                        accountant with 4 years of experience in financial reporting,
                                        auditing, and tax preparation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Candidate Details */}
        </>


    )
}

export default CandidateGrid
