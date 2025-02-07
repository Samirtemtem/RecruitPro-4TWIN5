import React, { useState } from 'react'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import CommonSelect from '../../../core/common/commonSelect'
import { label } from 'yet-another-react-lightbox/*'
import { DatePicker } from 'antd'
import CommonTagsInput from '../../../core/common/Taginput'
import CommonTextEditor from '../../../core/common/textEditor'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'

const TaskDetails = () => {

    const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };

    const projectChoose = [
        { value: "Select", label: "Select" },
        { value: "Office Management", label: "Office Management" },
        { value: "Clinic Management", label: "Clinic Management" },
        { value: "Educational Platform", label: "Educational Platform" },

    ];
    const statusChoose = [
        { value: "Select", label: "Select" },
        { value: "Inprogress", label: "Inprogress" },
        { value: "Completed", label: "Completed" },
        { value: "Pending", label: "Pending" },
        { value: "Onhold", label: "Onhold" },

    ];
    const priorityChoose = [
        { value: "Select", label: "Select" },
        { value: "Medium", label: "Medium" },
        { value: "High", label: "High" },
        { value: "Low", label: "Low" },

    ];
    const [tags, setTags] = useState<string[]>(["Jerald", "Andrew", "Philip", "Davis"]);
    const [tags1, setTags1] = useState<string[]>(["Collab", "Rated"]);
    return (
        <>

            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="row align-items-center mb-4">
                        <div className="d-md-flex d-sm-block justify-content-between align-items-center flex-wrap">
                            <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                                <Link to={all_routes.tasks}>
                                    <i className="ti ti-arrow-left me-2" />
                                    Back to List
                                </Link>
                            </h6>
                            <div className="d-flex">
                                <div className="text-end">
                                    <Link
                                        to="#"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_task"
                                    >
                                        <i className="ti ti-edit me-1" />
                                        Edit Task
                                    </Link>
                                </div>
                                <div className="head-icons ms-2 text-end">
                                <CollapseHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body pb-1">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
                                        <div>
                                            <h4 className="mb-1">
                                                Patient and Doctor video conferencing Module
                                            </h4>
                                            <p>
                                                Priority :{" "}
                                                <span className="badge badge-danger">
                                                    <i className="ti ti-point-filled me-1" />
                                                    High
                                                </span>
                                            </p>
                                        </div>
                                        <div className="dropdown">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ti ti-file-export me-1" /> Mark All as
                                                Completed
                                            </Link>
                                            <ul className="dropdown-menu  dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        All Tags
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Internal
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Projects
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Meetings
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Reminder
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Research
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <h6 className="mb-1">Description</h6>
                                                <p>
                                                    The Enhanced Patient Management System (EPMS) project aims
                                                    to modernize and streamline the patient management
                                                    processes within. By integrating advanced technologies and
                                                    optimizing existing workflows, the project seeks to
                                                    improve patient care, enhance operational efficiency, and
                                                    ensure compliance with regulatory standards.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-users-group me-2" />
                                                Team
                                            </p>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-gray-100 p-1 rounded d-flex align-items-center me-2">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded border border-white flex-shrink-0 me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-12.jpg"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Lewis</Link>
                                                    </h6>
                                                </div>
                                                <div className="bg-gray-100 p-1 rounded d-flex align-items-center me-2">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded border border-white flex-shrink-0 me-2"
                                                    >
                                                        <ImageWithBasePath src="assets/img/users/user-19.jpg" alt="Img" />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Leona</Link>
                                                    </h6>
                                                </div>
                                                <div className="bg-gray-100 p-1 rounded d-flex align-items-center me-2">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded border border-white flex-shrink-0 me-2"
                                                    >
                                                        <ImageWithBasePath src="assets/img/users/user-33.jpg" alt="Img" />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Pineiro</Link>
                                                    </h6>
                                                </div>
                                                <div className="bg-gray-100 p-1 rounded d-flex align-items-center me-2">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded border border-white flex-shrink-0 me-2"
                                                    >
                                                        <ImageWithBasePath src="assets/img/users/user-37.jpg" alt="Img" />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Moseley</Link>
                                                    </h6>
                                                </div>
                                                <div>
                                                    <Link to="#" className="d-flex align-items-center fs-12">
                                                        <i className="ti ti-circle-plus me-1" />
                                                        Add New
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-user-shield me-2" />
                                                Assignee
                                            </p>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-gray-100 p-1 rounded d-flex align-items-center me-2">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded border border-white flex-shrink-0 me-2"
                                                    >
                                                        <ImageWithBasePath src="assets/img/users/user-42.jpg" alt="Img" />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Ruth</Link>
                                                    </h6>
                                                </div>
                                                <div>
                                                    <Link to="#" className="d-flex align-items-center fs-12">
                                                        <i className="ti ti-circle-plus me-1" />
                                                        Add New
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-bookmark me-2" />
                                                Tags
                                            </p>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="d-flex align-items-center mb-3">
                                                <Link
                                                    to="#"
                                                    className="badge task-tag bg-pink rounded-pill me-2"
                                                >
                                                    Admin Panel
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="badge task-tag badge-info rounded-pill"
                                                >
                                                    High Tech
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-accordion-items">
                                <div className="accordion accordions-items-seperate">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingFour">
                                            <div className="accordion-button">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <h5>Files</h5>
                                                    <div className=" ms-auto d-flex align-items-center">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-primary btn-xs d-inline-flex align-items-center me-3"
                                                        >
                                                            <i className="ti ti-square-rounded-plus-filled me-1" />
                                                            Add New
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="d-flex align-items-center collapse-arrow"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#primaryBorderFour"
                                                            aria-expanded="true"
                                                            aria-controls="primaryBorderFour"
                                                        >
                                                            <i className="ti ti-chevron-down fs-18" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="primaryBorderFour"
                                            className="accordion-collapse collapse show border-top"
                                            aria-labelledby="headingFour"
                                        >
                                            <div className="accordion-body">
                                                <div className="files-carousel owl-carousel">
                                                    <div className="card shadow-none mb-0">
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                                                <div className="d-flex align-items-center overflow-hidden">
                                                                    <Link
                                                                        to="#"
                                                                        className="avatar avatar-md bg-light me-2"
                                                                    >
                                                                        <ImageWithBasePath
                                                                            src="assets/img/icons/file-02.svg"
                                                                            className="w-auto h-auto"
                                                                            alt="img"
                                                                        />
                                                                    </Link>
                                                                    <div className="overflow-hidden">
                                                                        <h6 className="mb-1 text-truncate">
                                                                            Project_1.docx
                                                                        </h6>
                                                                        <span>7.6 MB</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link to="#" className="btn btn-sm btn-icon">
                                                                        <i className="ti ti-download" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-sm btn-icon">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="fw-medium mb-0">
                                                                    15 May 2024, 6:53 PM
                                                                </p>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-02.jpg"
                                                                        alt="Img"
                                                                    />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card shadow-none mb-0">
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                                                <div className="d-flex align-items-center overflow-hidden">
                                                                    <Link
                                                                        to="#"
                                                                        className="avatar avatar-md bg-light me-2"
                                                                    >
                                                                        <ImageWithBasePath
                                                                            src="assets/img/icons/file-01.svg"
                                                                            className="w-auto h-auto"
                                                                            alt="img"
                                                                        />
                                                                    </Link>
                                                                    <div className="overflow-hidden">
                                                                        <h6 className="mb-1 text-truncate">
                                                                            Proposal.pdf
                                                                        </h6>
                                                                        <span>12.6 MB</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link to="#" className="btn btn-sm btn-icon">
                                                                        <i className="ti ti-download" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-sm btn-icon">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="fw-medium mb-0">
                                                                    16 Jan 2025, 7:25 PM
                                                                </p>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/users/user-19.jpg"
                                                                        alt="Img"
                                                                    />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card shadow-none mb-0">
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                                                                <div className="d-flex align-items-center overflow-hidden">
                                                                    <Link
                                                                        to="#"
                                                                        className="avatar avatar-md bg-light me-2"
                                                                    >
                                                                        <ImageWithBasePath
                                                                            src="assets/img/icons/file-04.svg"
                                                                            className="w-auto h-auto"
                                                                            alt="img"
                                                                        />
                                                                    </Link>
                                                                    <div className="overflow-hidden">
                                                                        <h6 className="mb-1 text-truncate">
                                                                            Logo-Img.zip
                                                                        </h6>
                                                                        <span>6.2 MB</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link to="#" className="btn btn-sm btn-icon">
                                                                        <i className="ti ti-download" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-sm btn-icon">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <p className="fw-medium mb-0">
                                                                    31 July 2025, 8:40 AM
                                                                </p>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/users/user-20.jpg"
                                                                        alt="Img"
                                                                    />
                                                                </span>
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
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                                            <p className="mb-0">Project</p>
                                            <h6 className="fw-normal">Hospital Administration</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                                            <p className="mb-0">Created on</p>
                                            <h6 className="fw-normal">14 Nov 2026</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                                            <p className="mb-0">Started on</p>
                                            <h6 className="fw-normal">15 Jan 2026</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between p-3">
                                            <p className="mb-0">Due Date</p>
                                            <h6 className="fw-normal">15 Nov 2026</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-accordion-items">
                                <div className="accordion accordions-items-seperate">
                                    <div className="accordion-item flex-fill">
                                        <div className="accordion-header" id="headingSix">
                                            <div className="accordion-button">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <h5>Activity</h5>
                                                    <div className="d-flex align-items-center ms-auto">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-primary btn-xs d-inline-flex align-items-center me-3"
                                                        >
                                                            <i className="ti ti-square-rounded-plus-filled me-1" />
                                                            Add New
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="d-flex align-items-center collapse-arrow"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#primaryBorderSix"
                                                            aria-expanded="true"
                                                            aria-controls="primaryBorderSix"
                                                        >
                                                            <i className="ti ti-chevron-down fs-18" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="primaryBorderSix"
                                            className="accordion-collapse collapse show border-top"
                                            aria-labelledby="headingSix"
                                        >
                                            <div className="accordion-body">
                                                <div className="notice-widget">
                                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                                        <div className="d-flex overflow-hidden">
                                                            <span className="bg-info avatar avatar-md me-3 rounded-circle flex-shrink-0">
                                                                <i className="ti ti-checkup-list fs-16" />
                                                            </span>
                                                            <div className="overflow-hidden">
                                                                <p className="text-truncate mb-1">
                                                                    <span className="text-gray-9 fw-medium">
                                                                        Andrew
                                                                    </span>
                                                                    added a New Task
                                                                </p>
                                                                <p className="mb-1">15 May 2024, 6:53 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                                        <div className="d-flex overflow-hidden me-2">
                                                            <span className="bg-warning avatar avatar-md me-3 rounded-circle flex-shrink-0">
                                                                <i className="ti ti-circle-dot fs-16" />
                                                            </span>
                                                            <div className="overflow-hidden">
                                                                <p className="text-truncate mb-1">
                                                                    <span className="text-gray-9 fw-medium">
                                                                        Jermai{" "}
                                                                    </span>
                                                                    Moved task{" "}
                                                                    <span className="text-gray-9 fw-medium">
                                                                        {" "}
                                                                        “Private chat module”
                                                                    </span>
                                                                </p>
                                                                <p className="mb-1">15 May 2024, 6:53 PM</p>
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge badge-success me-2">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Completed
                                                                    </span>
                                                                    <span>
                                                                        <i className="ti ti-arrows-left-right me-2" />
                                                                    </span>
                                                                    <span className="badge badge-purple">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Inprogress
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                                        <div className="d-flex overflow-hidden me-2">
                                                            <span className="bg-purple avatar avatar-md me-3 rounded-circle flex-shrink-0">
                                                                <i className="ti ti-checkup-list fs-16" />
                                                            </span>
                                                            <div className="overflow-hidden">
                                                                <p className="text-truncate mb-1">
                                                                    <span className="text-gray-9 fw-medium">
                                                                        Jermai{" "}
                                                                    </span>
                                                                    Created task{" "}
                                                                    <span className="text-gray-9 fw-medium">
                                                                        {" "}
                                                                        “Private chat module”
                                                                    </span>
                                                                </p>
                                                                <p className="mb-1">15 May 2024, 6:53 PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex overflow-hidden">
                                                            <span className="bg-secondary avatar avatar-md me-3 rounded-circle flex-shrink-0">
                                                                <i className="ti ti-photo fs-16" />
                                                            </span>
                                                            <div className="overflow-hidden">
                                                                <p className="text-truncate mb-1">
                                                                    <span className="text-gray-9 fw-medium">
                                                                        Hendry
                                                                    </span>{" "}
                                                                    Updated Image{" "}
                                                                    <span className="text-gray-9 fw-medium">
                                                                        {" "}
                                                                        “logo.jpg”{" "}
                                                                    </span>
                                                                </p>
                                                                <p className="mb-1">15 May 2024, 6:53 PM</p>
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

            {/* Edit Task */}
            <div className="modal fade" id="edit_task">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Task</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action={all_routes.tasks}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input type="text" className="form-control" value="Patient appointment booking" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Due Date</label>
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
                                            <label className="form-label">Project</label>
                                            <CommonSelect
                                                className='select'
                                                options={projectChoose}
                                                defaultValue={projectChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label me-2">Team Members</label>
                                            <CommonTagsInput
                                                value={tags}
                                                onChange={setTags}
                                                placeholder="Add new"
                                                className="custom-input-class" // Optional custom class
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Tag</label>
                                            <CommonTagsInput
                                                value={tags1}
                                                onChange={setTags1}
                                                placeholder="Add new"
                                                className="custom-input-class" // Optional custom class
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Status</label>
                                            <CommonSelect
                                                className='select'
                                                options={statusChoose}
                                                defaultValue={statusChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Priority</label>
                                            <CommonSelect
                                                className='select'
                                                options={priorityChoose}
                                                defaultValue={priorityChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Who Can See this Task?</label>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="form-check me-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label
                                                    className="form-check-label text-dark"
                                                    htmlFor="flexRadioDefault1"
                                                >
                                                    Public
                                                </label>
                                            </div>
                                            <div className="form-check me-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                    defaultChecked
                                                />
                                                <label
                                                    className="form-check-label text-dark"
                                                    htmlFor="flexRadioDefault2"
                                                >
                                                    Private
                                                </label>
                                            </div>
                                            <div className="form-check ">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault3"
                                                    defaultChecked
                                                />
                                                <label
                                                    className="form-check-label text-dark"
                                                    htmlFor="flexRadioDefault3"
                                                >
                                                    Admin Only
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Descriptions</label>
                                            <div className="summernote" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Upload Attachment</label>
                                        <div className="bg-light rounded p-2">
                                            <div className="profile-uploader border-bottom mb-2 pb-2">
                                                <div className="drag-upload-btn btn btn-sm btn-white border px-3">
                                                    Select File
                                                    <input
                                                        type="file"
                                                        className="form-control image-sign"
                                                        multiple
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                                                <div className="d-flex align-items-center">
                                                    <h6 className="fs-12 fw-medium me-1">Logo.zip</h6>
                                                    <span className="badge badge-soft-info">21MB </span>
                                                </div>
                                                <Link to="#" className="btn btn-sm btn-icon">
                                                    <i className="ti ti-trash" />
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h6 className="fs-12 fw-medium me-1">Files.zip</h6>
                                                    <span className="badge badge-soft-info">25MB </span>
                                                </div>
                                                <Link to="#" className="btn btn-sm btn-icon">
                                                    <i className="ti ti-trash" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Task */}
        </>

    )
}

export default TaskDetails
