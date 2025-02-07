import React, { useState } from "react";
import { all_routes } from "../../router/all_routes";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import CommonSelect from "../../../core/common/commonSelect";
import CommonTextEditor from "../../../core/common/textEditor";
import CommonTagsInput from "../../../core/common/Taginput";
import { DatePicker } from "antd";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const ProjectDetails = () => {
    const getModalContainer = () => {
        const modalElement = document.getElementById("modal-datepicker");
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };
    const clientChoose = [
        { value: "Select", label: "Select" },
        { value: "Anthony Lewis", label: "Anthony Lewis" },
        { value: "Brian Villalobos", label: "Brian Villalobos" },
    ];
    const statusChoose = [
        { value: "Select", label: "Select" },
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
    ];
    const priorityChoose = [
        { value: "Select", label: "Select" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" },
        { value: "Low", label: "Low" },
    ];
    const tagChoose = [
        { value: "Select", label: "Select" },
        { value: "Internal", label: "Internal" },
        { value: "Projects", label: "Projects" },
        { value: "Meetings", label: "Meetings" },
        { value: "Reminder", label: "Reminder" },
    ];
    const assigneeChoose = [
        { value: "Select", label: "Select" },
        { value: "Sophie", label: "Sophie" },
        { value: "Cameron", label: "Cameron" },
        { value: "Doris", label: "Doris" },
        { value: "Rufana", label: "Rufana" },
    ];
    const status1choose = [
        { value: "Select", label: "Select" },
        { value: "Completed", label: "Completed" },
        { value: "Pending", label: "Pending" },
        { value: "Onhold", label: "Onhold" },
        { value: "Inprogress", label: "Inprogress" },
    ];
    const [tags, setTags] = useState<string[]>([
        "Jerald",
        "Andrew",
        "Philip",
        "Davis",
    ]);
    const [tags1, setTags1] = useState<string[]>(["Hendry", "James"]);
    const [tags2, setTags2] = useState<string[]>(["Dwight"]);
    const [tags3, setTags3] = useState<string[]>([
        "Collab",
        "Promotion",
        "Rated",
    ]);

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row align-items-center mb-4">
                        <div className="d-md-flex d-sm-block justify-content-between align-items-center flex-wrap">
                            <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                                <Link to={all_routes.projectlist}>
                                    <i className="ti ti-arrow-left me-2" />
                                    Back to List
                                </Link>
                            </h6>
                            <div className="d-flex">
                                <div className="text-end">
                                    <Link
                                        to="#"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal" data-inert={true}
                                        data-bs-target="#edit_project"
                                    >
                                        <i className="ti ti-edit me-1" />
                                        Edit Project
                                    </Link>
                                </div>
                                <div className="head-icons ms-2 text-end">
                                <CollapseHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 theiaStickySidebar">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="mb-3">Project Details</h5>
                                    <div className="list-group details-list-group mb-4">
                                        <div className="list-group-item">
                                            <span>Client</span>
                                            <p className="text-gray-9">EcoVision Enterprises</p>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Project Total Cost</span>
                                                <p className="text-gray-9">$1400</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Hours of Work</span>
                                                <p className="text-gray-9">150 hrs</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Created on</span>
                                                <p className="text-gray-9">14 Nov 2026</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Started on</span>
                                                <p className="text-gray-9">15 Jan 2026</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Due Date</span>
                                                <div className="d-flex align-items-center">
                                                    <p className="text-gray-9 mb-0">15 Nov 2026</p>
                                                    <span className="badge badge-danger d-inline-flex align-items-center ms-2">
                                                        <i className="ti ti-clock-stop" />1
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Created by</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm avatar-rounded me-2">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-02.jpg"
                                                            alt="Img"
                                                        />
                                                    </span>
                                                    <p className="text-gray-9 mb-0">Cameron</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Priority</span>
                                                <div className="dropdown">
                                                    <Link
                                                        to="#"
                                                        className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                                                        data-bs-toggle="dropdown"
                                                    >
                                                        <span className="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2">
                                                            <i className="ti ti-point-filled text-danger" />
                                                        </span>{" "}
                                                        High
                                                    </Link>
                                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                                                            >
                                                                <span className="rounded-circle bg-transparent-danger d-flex justify-content-center align-items-center me-2">
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                </span>
                                                                High
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                                                            >
                                                                <span className="rounded-circle bg-transparent-warning d-flex justify-content-center align-items-center me-2">
                                                                    <i className="ti ti-point-filled text-warning" />
                                                                </span>
                                                                Medium
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                                                            >
                                                                <span className="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2">
                                                                    <i className="ti ti-point-filled text-success" />
                                                                </span>
                                                                Low
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Tasks Details</h5>
                                    <div className="bg-light p-2 rounded">
                                        <span className="d-block mb-1">Tasks Done</span>
                                        <h4 className="mb-2">0 / 0</h4>
                                        <div className="progress progress-xs mb-2">
                                            <div className="progress-bar" role="progressbar" />
                                        </div>
                                        <p>0% Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-xl-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="bg-light rounded p-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <Link
                                                to={all_routes.projectdetails}
                                                className="flex-shrink-0 me-2"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/social/project-01.svg"
                                                    alt="Img"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="mb-1">
                                                    <Link to={all_routes.projectdetails}>
                                                        Hospital Administration
                                                    </Link>
                                                </h6>
                                                <p>
                                                    Project ID :{" "}
                                                    <span className="text-primary"> PRO-0004</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-square-rounded me-2" />
                                                Status
                                            </p>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="badge badge-soft-purple d-inline-flex align-items-center mb-3">
                                                <i className="ti ti-point-filled me-1" />
                                                InProgress
                                            </span>
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
                                                        <ImageWithBasePath
                                                            src="assets/img/users/user-19.jpg"
                                                            alt="Img"
                                                        />
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
                                                        <ImageWithBasePath
                                                            src="assets/img/users/user-33.jpg"
                                                            alt="Img"
                                                        />
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
                                                        <ImageWithBasePath
                                                            src="assets/img/users/user-37.jpg"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Moseley</Link>
                                                    </h6>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        className="d-flex align-items-center fs-12"
                                                    >
                                                        <i className="ti ti-circle-plus me-1" />
                                                        Add New
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-user-shield me-2" />
                                                Team Lead
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
                                                            src="assets/img/users/user-42.jpg"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Ruth</Link>
                                                    </h6>
                                                </div>
                                                <div className="bg-gray-100 p-1 rounded d-flex align-items-center me-2">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded border border-white flex-shrink-0 me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/users/user-44.jpg"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Meredith</Link>
                                                    </h6>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        className="d-flex align-items-center fs-12"
                                                    >
                                                        <i className="ti ti-circle-plus me-1" />
                                                        Add New
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-user-star me-2" />
                                                Project Manager
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
                                                            src="assets/img/users/user-45.jpg"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <h6 className="fs-12">
                                                        <Link to="#">Dwight</Link>
                                                    </h6>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        className="d-flex align-items-center fs-12"
                                                    >
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
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <h6 className="mb-1">Description</h6>
                                                <p>
                                                    The Enhanced Patient Management System (EPMS) project
                                                    aims to modernize and streamline the patient
                                                    management processes within. By integrating advanced
                                                    technologies and optimizing existing workflows, the
                                                    project seeks to improve patient care, enhance
                                                    operational efficiency, and ensure compliance with
                                                    regulatory standards.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="bg-soft-secondary p-3 rounded d-flex align-items-center justify-content-between">
                                                <p className="text-secondary mb-0">
                                                    Time Spent on this project
                                                </p>
                                                <h3 className="text-secondary">
                                                    65/120 <span className="fs-16">Hrs</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom-accordion-items">
                                <div
                                    className="accordion accordions-items-seperate"
                                    id="accordionExample"
                                >
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingTwo">
                                            <div className="accordion-button">
                                                <h5>Tasks</h5>
                                                <div className=" ms-auto">
                                                    <Link
                                                        to="#"
                                                        className="d-flex align-items-center collapsed collapse-arrow"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderTwo"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderTwo"
                                                    >
                                                        <i className="ti ti-chevron-down fs-18" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="primaryBorderTwo"
                                            className="accordion-collapse collapse show border-top"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <div className="list-group list-group-flush">
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center row-gap-3">
                                                            <div className="col-md-7">
                                                                <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                    <span>
                                                                        <i className="ti ti-grid-dots me-2" />
                                                                    </span>
                                                                    <div className="form-check form-check-md me-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                    <span className="me-2 d-flex align-items-center rating-select">
                                                                        <i className="ti ti-star-filled filled" />
                                                                    </span>
                                                                    <div className="strike-info">
                                                                        <h4 className="fs-14">
                                                                            Patient appointment booking
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                    <span className="badge bg-soft-pink d-inline-flex align-items-center me-3">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Onhold
                                                                    </span>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar-list-stacked avatar-group-sm">
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-13.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-14.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-15.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <div className="dropdown ms-2">
                                                                            <Link
                                                                                to="#"
                                                                                className="d-inline-flex align-items-center"
                                                                                data-bs-toggle="dropdown"
                                                                            >
                                                                                <i className="ti ti-dots-vertical" />
                                                                            </Link>
                                                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#edit_todo"
                                                                                    >
                                                                                        <i className="ti ti-edit me-2" />
                                                                                        Edit
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#delete_modal"
                                                                                    >
                                                                                        <i className="ti ti-trash me-2" />
                                                                                        Delete
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#view_todo"
                                                                                    >
                                                                                        <i className="ti ti-eye me-2" />
                                                                                        View
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center row-gap-3">
                                                            <div className="col-md-7">
                                                                <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                    <span>
                                                                        <i className="ti ti-grid-dots me-2" />
                                                                    </span>
                                                                    <div className="form-check form-check-md me-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                    <span className="me-2 rating-select d-flex align-items-center">
                                                                        <i className="ti ti-star" />
                                                                    </span>
                                                                    <div className="strike-info">
                                                                        <h4 className="fs-14">
                                                                            Appointment booking with payment gateway
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                    <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Inprogress
                                                                    </span>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar-list-stacked avatar-group-sm">
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-20.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-21.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <div className="dropdown ms-2">
                                                                            <Link
                                                                                to="#"
                                                                                className="d-inline-flex align-items-center"
                                                                                data-bs-toggle="dropdown"
                                                                            >
                                                                                <i className="ti ti-dots-vertical" />
                                                                            </Link>
                                                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#edit_todo"
                                                                                    >
                                                                                        <i className="ti ti-edit me-2" />
                                                                                        Edit
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#delete_modal"
                                                                                    >
                                                                                        <i className="ti ti-trash me-2" />
                                                                                        Delete
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#view_todo"
                                                                                    >
                                                                                        <i className="ti ti-eye me-2" />
                                                                                        View
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center row-gap-3">
                                                            <div className="col-md-7">
                                                                <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                    <span>
                                                                        <i className="ti ti-grid-dots me-2" />
                                                                    </span>
                                                                    <div className="form-check form-check-md me-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                    <span className="me-2 rating-select d-flex align-items-center">
                                                                        <i className="ti ti-star" />
                                                                    </span>
                                                                    <div className="strike-info">
                                                                        <h4 className="fs-14">
                                                                            Patient and Doctor video conferencing
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                    <span className="badge badge-soft-success align-items-center me-3">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Completed
                                                                    </span>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar-list-stacked avatar-group-sm">
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-28.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-29.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-24.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <div className="dropdown ms-2">
                                                                            <Link
                                                                                to="#"
                                                                                className="d-inline-flex align-items-center"
                                                                                data-bs-toggle="dropdown"
                                                                            >
                                                                                <i className="ti ti-dots-vertical" />
                                                                            </Link>
                                                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#edit_todo"
                                                                                    >
                                                                                        <i className="ti ti-edit me-2" />
                                                                                        Edit
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#delete_modal"
                                                                                    >
                                                                                        <i className="ti ti-trash me-2" />
                                                                                        Delete
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#view_todo"
                                                                                    >
                                                                                        <i className="ti ti-eye me-2" />
                                                                                        View
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center row-gap-3">
                                                            <div className="col-md-7">
                                                                <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                                                                    <span>
                                                                        <i className="ti ti-grid-dots me-2" />
                                                                    </span>
                                                                    <div className="form-check form-check-md me-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                    <span className="me-2 rating-select d-flex align-items-center">
                                                                        <i className="ti ti-star" />
                                                                    </span>
                                                                    <div className="strike-info">
                                                                        <h4 className="fs-14">
                                                                            Private chat module
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                    <span className="badge badge-secondary-transparent d-flex align-items-center me-3">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Pending
                                                                    </span>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar-list-stacked avatar-group-sm">
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-23.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-24.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-25.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <div className="dropdown ms-2">
                                                                            <Link
                                                                                to="#"
                                                                                className="d-inline-flex align-items-center"
                                                                                data-bs-toggle="dropdown"
                                                                            >
                                                                                <i className="ti ti-dots-vertical" />
                                                                            </Link>
                                                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#edit_todo"
                                                                                    >
                                                                                        <i className="ti ti-edit me-2" />
                                                                                        Edit
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#delete_modal"
                                                                                    >
                                                                                        <i className="ti ti-trash me-2" />
                                                                                        Delete
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#view_todo"
                                                                                    >
                                                                                        <i className="ti ti-eye me-2" />
                                                                                        View
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center row-gap-3">
                                                            <div className="col-md-7">
                                                                <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                    <span>
                                                                        <i className="ti ti-grid-dots me-2" />
                                                                    </span>
                                                                    <div className="form-check form-check-md me-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                        />
                                                                    </div>
                                                                    <span className="me-2 rating-select d-flex align-items-center">
                                                                        <i className="ti ti-star" />
                                                                    </span>
                                                                    <div className="strike-info">
                                                                        <h4 className="fs-14">
                                                                            Go-Live and Post-Implementation Support
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                    <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Inprogress
                                                                    </span>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="avatar-list-stacked avatar-group-sm">
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-28.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                            <span className="avatar avatar-rounded">
                                                                                <ImageWithBasePath
                                                                                    className="border border-white"
                                                                                    src="assets/img/profiles/avatar-29.jpg"
                                                                                    alt="img"
                                                                                />
                                                                            </span>
                                                                        </div>
                                                                        <div className="dropdown ms-2">
                                                                            <Link
                                                                                to="#"
                                                                                className="d-inline-flex align-items-center"
                                                                                data-bs-toggle="dropdown"
                                                                            >
                                                                                <i className="ti ti-dots-vertical" />
                                                                            </Link>
                                                                            <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#edit_todo"
                                                                                    >
                                                                                        <i className="ti ti-edit me-2" />
                                                                                        Edit
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#delete_modal"
                                                                                    >
                                                                                        <i className="ti ti-trash me-2" />
                                                                                        Delete
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="dropdown-item rounded-1"
                                                                                        data-bs-toggle="modal" data-inert={true}
                                                                                        data-bs-target="#view_todo"
                                                                                    >
                                                                                        <i className="ti ti-eye me-2" />
                                                                                        View
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="btn bg-primary-transparent border-dashed border-primary w-100 text-start"
                                                        data-bs-toggle="modal" data-inert={true}
                                                        data-bs-target="#add_todo"
                                                    >
                                                        <i className="ti ti-plus me-2" />
                                                        New task
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item ">
                                        <div className="accordion-header" id="headingThree">
                                            <div className="accordion-button">
                                                <div className="d-flex align-items-center flex-fill">
                                                    <h5>Images</h5>
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
                                                            className="d-flex align-items-center collapsed collapse-arrow"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#primaryBorderThree"
                                                            aria-expanded="false"
                                                            aria-controls="primaryBorderThree"
                                                        >
                                                            <i className="ti ti-chevron-down fs-18" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="primaryBorderThree"
                                            className="accordion-collapse collapse show border-top"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <div className="media-images-slider owl-carousel">
                                                    <Link
                                                        to="assets/img/media/media-big-08.jpg"
                                                        data-fancybox="gallery"
                                                        className="gallery-item"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/media/media-08.jpg"
                                                            className=" rounded"
                                                            alt="img"
                                                        />
                                                        <div className="d-flex align-items-center hover-links">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-maximize" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-link" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-trash" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        to="assets/img/media/media-big-09.jpg"
                                                        data-fancybox="gallery"
                                                        className="gallery-item"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/media/media-09.jpg"
                                                            className="rounded"
                                                            alt="img"
                                                        />
                                                        <div className="d-flex align-items-center hover-links">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-maximize" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-link" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-trash" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        to="assets/img/media/media-big-10.jpg"
                                                        data-fancybox="gallery"
                                                        className="gallery-item"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/media/media-10.jpg"
                                                            className="rounded"
                                                            alt="img"
                                                        />
                                                        <div className="d-flex align-items-center hover-links">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-maximize" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-link" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-trash" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        to="assets/img/media/media-big-11.jpg"
                                                        data-fancybox="gallery"
                                                        className="gallery-item"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/media/media-11.jpg"
                                                            className="rounded"
                                                            alt="img"
                                                        />
                                                        <div className="d-flex align-items-center hover-links">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-maximize" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-link" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-trash" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        to="assets/img/media/media-big-12.jpg"
                                                        data-fancybox="gallery"
                                                        className="gallery-item"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/media/media-12.jpg"
                                                            className="rounded"
                                                            alt="img"
                                                        />
                                                        <div className="d-flex align-items-center hover-links">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-maximize" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-link" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-trash" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        to="assets/img/media/media-big-13.jpg"
                                                        data-fancybox="gallery"
                                                        className="gallery-item"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/media/media-13.jpg"
                                                            className="rounded"
                                                            alt="img"
                                                        />
                                                        <div className="d-flex align-items-center hover-links">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-maximize" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-link" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-trash" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        to="assets/img/media/media-big-14.jpg"
                                                        data-fancybox="gallery"
                                                        className="gallery-item"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/media/media-14.jpg"
                                                            className="rounded"
                                                            alt="img"
                                                        />
                                                        <div className="d-flex align-items-center hover-links">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-maximize" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-link" />
                                                            </span>
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <i className="ti ti-trash" />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                            className="d-flex align-items-center collapsed collapse-arrow"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#primaryBorderFour"
                                                            aria-expanded="false"
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
                                                                <div className="d-flex align-items-center">
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
                                                                    <div>
                                                                        <h6 className="mb-1">Project_1.docx</h6>
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
                                                                <div className="d-flex align-items-center">
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
                                                                    <div>
                                                                        <h6 className="mb-1">Proposal.pdf</h6>
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
                                                                    15 May 2024, 6:53 PM
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
                                                                <div className="d-flex align-items-center">
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
                                                                    <div>
                                                                        <h6 className="mb-1">Logo-Img.zip</h6>
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
                                                                    15 May 2024, 6:53 PM
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
                                    <div className="row">
                                        <div className="col-xl-6 d-flex">
                                            <div className="accordion-item flex-fill">
                                                <div className="accordion-header" id="headingFive">
                                                    <div className="accordion-button">
                                                        <div className="d-flex align-items-center flex-fill">
                                                            <h5>Notes</h5>
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
                                                                    className="d-flex align-items-center collapsed collapse-arrow"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#primaryBorderFive"
                                                                    aria-expanded="false"
                                                                    aria-controls="primaryBorderFive"
                                                                >
                                                                    <i className="ti ti-chevron-down fs-18" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFive"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingFive"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                                    <h6 className="text-gray-5 fw-medium">
                                                                        15 May 2025
                                                                    </h6>
                                                                    <div className="dropdown">
                                                                        <Link
                                                                            to="#"
                                                                            className="d-inline-flex align-items-center"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    <i className="ti ti-trash me-1" />
                                                                                    Delete
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <h6 className="d-flex align-items-center mb-2">
                                                                    <i className="ti ti-point-filled text-primary me-1" />
                                                                    Changes &amp; design
                                                                </h6>
                                                                <p className="text-truncate line-clamb-3">
                                                                    An office management app project streamlines
                                                                    administrative tasks by integrating tools for
                                                                    scheduling, communication, and task
                                                                    management, enhancing overall productivity and
                                                                    efficiency.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-0">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                                    <h6 className="text-gray-5 fw-medium">
                                                                        15 May 2025
                                                                    </h6>
                                                                    <div className="dropdown">
                                                                        <Link
                                                                            to="#"
                                                                            className="d-inline-flex align-items-center"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    <i className="ti ti-trash me-1" />
                                                                                    Delete
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <h6 className="d-flex align-items-center mb-2">
                                                                    <i className="ti ti-point-filled text-primary me-1" />
                                                                    Changes &amp; design
                                                                </h6>
                                                                <p className="text-truncate line-clamb-3">
                                                                    An office management app project streamlines
                                                                    administrative tasks by integrating tools for
                                                                    scheduling, communication, and task
                                                                    management, enhancing overall productivity and
                                                                    efficiency.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 d-flex">
                                            <div className="accordion-item flex-fill">
                                                <div className="accordion-header" id="headingSix">
                                                    <div className="accordion-button">
                                                        <div className="d-flex align-items-center flex-fill">
                                                            <h5>Activity</h5>
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
                                                                    className="d-flex align-items-center collapsed collapse-arrow"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#primaryBorderSix"
                                                                    aria-expanded="false"
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
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="headingSeven">
                                            <div className="accordion-button">
                                                <h5>Invoices</h5>
                                                <div className=" ms-auto d-flex align-items-center">
                                                    <Link
                                                        to="#"
                                                        className="d-flex align-items-center collapsed collapse-arrow"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderSeven"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderSeven"
                                                    >
                                                        <i className="ti ti-chevron-down fs-18" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="primaryBorderSeven"
                                            className="accordion-collapse collapse show border-top"
                                            aria-labelledby="headingSeven"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <div className="list-group list-group-flush">
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center g-3">
                                                            <div className="col-sm-6">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                        <i className="ti ti-file-invoice text-dark fs-24" />
                                                                    </span>
                                                                    <div>
                                                                        <h6 className="fw-medium mb-1">
                                                                            Phase 2 Completion
                                                                        </h6>
                                                                        <p>
                                                                            <Link to="#" className="text-info">
                                                                                #INV-123{" "}
                                                                            </Link>{" "}
                                                                            11 Sep 2025, 05:35 pm
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div>
                                                                    <span>Amount</span>
                                                                    <p className="text-dark">$6,598</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="d-flex align-items-center justify-content-sm-end">
                                                                    <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Paid
                                                                    </span>
                                                                    <Link to="#" className="btn btn-icon btn-sm">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-icon btn-sm ">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center g-3">
                                                            <div className="col-sm-6">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                        <i className="ti ti-file-invoice text-dark fs-24" />
                                                                    </span>
                                                                    <div>
                                                                        <h6 className="fw-medium mb-1">
                                                                            Advance for Project
                                                                        </h6>
                                                                        <p>
                                                                            <Link to="#" className="text-info">
                                                                                #INV-124{" "}
                                                                            </Link>{" "}
                                                                            14 Sep 2025, 05:35 pm
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div>
                                                                    <span>Amount</span>
                                                                    <p className="text-dark">$3312</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="d-flex align-items-center justify-content-sm-end">
                                                                    <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Hold
                                                                    </span>
                                                                    <Link to="#" className="btn btn-icon btn-sm">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-icon btn-sm ">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center g-3">
                                                            <div className="col-sm-6">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                        <i className="ti ti-file-invoice text-dark fs-24" />
                                                                    </span>
                                                                    <div>
                                                                        <h6 className="fw-medium mb-1">
                                                                            Changes &amp; design Alignments
                                                                        </h6>
                                                                        <p>
                                                                            <Link to="#" className="text-info">
                                                                                #INV-125{" "}
                                                                            </Link>{" "}
                                                                            15 Sep 2025, 05:35 pm
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div>
                                                                    <span>Amount</span>
                                                                    <p className="text-dark">$4154</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="d-flex align-items-center justify-content-sm-end">
                                                                    <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Paid
                                                                    </span>
                                                                    <Link to="#" className="btn btn-icon btn-sm">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-icon btn-sm ">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded mb-2 p-2">
                                                        <div className="row align-items-center g-3">
                                                            <div className="col-sm-6">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                        <i className="ti ti-file-invoice text-dark fs-24" />
                                                                    </span>
                                                                    <div>
                                                                        <h6 className="fw-medium mb-1">
                                                                            Added New Functionality
                                                                        </h6>
                                                                        <p>
                                                                            <Link to="#" className="text-info">
                                                                                #INV-126{" "}
                                                                            </Link>{" "}
                                                                            16 Sep 2025, 05:35 pm
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div>
                                                                    <span>Amount</span>
                                                                    <p className="text-dark">$658</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="d-flex align-items-center justify-content-sm-end">
                                                                    <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        Paid
                                                                    </span>
                                                                    <Link to="#" className="btn btn-icon btn-sm">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-icon btn-sm ">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-group-item border rounded p-2">
                                                        <div className="row align-items-center g-3">
                                                            <div className="col-sm-6">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                        <i className="ti ti-file-invoice text-dark fs-24" />
                                                                    </span>
                                                                    <div>
                                                                        <h6 className="fw-medium mb-1">
                                                                            Phase 1 Completion
                                                                        </h6>
                                                                        <p>
                                                                            <Link to="#" className="text-info">
                                                                                #INV-127{" "}
                                                                            </Link>{" "}
                                                                            17 Sep 2025, 05:35 pm
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div>
                                                                    <span>Amount</span>
                                                                    <p className="text-dark">$1259</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="d-flex align-items-center justify-content-sm-end">
                                                                    <span className="badge badge-soft-danger d-inline-flex  align-items-center me-4">
                                                                        <i className="ti ti-point-filled me-1" />
                                                                        unpaid
                                                                    </span>
                                                                    <Link to="#" className="btn btn-icon btn-sm">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link to="#" className="btn btn-icon btn-sm ">
                                                                        <i className="ti ti-trash" />
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
                                <div className="text-end mb-4">
                                    <div className="dropdown">
                                        <Link
                                            to="#"
                                            className="d-inline-flex align-items-center avatar avatar-lg avatar-rounded bg-primary"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="ti ti-plus fs-24 text-white" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end bg-gray-900 dropdown-menu-md dropdown-menu-dark p-3">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-basket-code" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">
                                                            Add a Task
                                                        </h6>
                                                        <p className="text-white">
                                                            Create a new Priority tasks{" "}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">
                                                            Add Invoice
                                                        </h6>
                                                        <p className="text-white">Create a new Billing</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-file-description" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">Notes</h6>
                                                        <p className="text-white">
                                                            Create new note for you &amp; team
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-folder-open" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">
                                                            Add Files
                                                        </h6>
                                                        <p className="text-white">
                                                            Upload New files for this Client
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
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
            {/* Add Project */}
            <div className="modal fade" id="add_project" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header header-border align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <h5 className="modal-title me-2">Add Project </h5>
                                <p className="text-dark">Project ID : PRO-0004</p>
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
                        <div className="add-info-fieldset ">
                            <div className="contact-grids-tab p-3 pb-0">
                                <ul className="nav nav-underline" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="basic-tab"
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
                                            id="member-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#member"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Members
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="basic-info"
                                    role="tabpanel"
                                    aria-labelledby="basic-tab"
                                    tabIndex={0}
                                >
                                    <form>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                                            <i className="ti ti-photo text-gray-2 fs-16" />
                                                        </div>
                                                        <div className="profile-upload">
                                                            <div className="mb-2">
                                                                <h6 className="mb-1">Upload Project Logo</h6>
                                                                <p className="fs-12">
                                                                    Image should be below 4 mb
                                                                </p>
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
                                                                <Link to="#" className="btn btn-light btn-sm">
                                                                    Cancel
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Project Name</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Client</label>
                                                        <CommonSelect
                                                            className="select"
                                                            options={clientChoose}
                                                            defaultValue={clientChoose[0]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Start Date</label>
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
                                                                <label className="form-label">End Date</label>
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
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">Priority</label>
                                                                <CommonSelect
                                                                    className="select"
                                                                    options={priorityChoose}
                                                                    defaultValue={priorityChoose[0]}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Project Value
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="$"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">Price Type</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Description</label>
                                                        <CommonTextEditor />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input-block mb-0">
                                                        <label className="form-label">Upload Files</label>
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-light border me-2"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="btn btn-primary"
                                                    type="button"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="member"
                                    role="tabpanel"
                                    aria-labelledby="member-tab"
                                    tabIndex={0}
                                >
                                    <form>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label me-2">
                                                            Team Members
                                                        </label>
                                                        <CommonTagsInput
                                                            value={tags}
                                                            onChange={setTags}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label me-2">
                                                            Team Leader
                                                        </label>
                                                        <CommonTagsInput
                                                            value={tags1}
                                                            onChange={setTags1}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label me-2">
                                                            Project Manager
                                                        </label>
                                                        <CommonTagsInput
                                                            value={tags2}
                                                            onChange={setTags2}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div>
                                                        <label className="form-label">Tags</label>
                                                        <CommonTagsInput
                                                            value={tags3}
                                                            onChange={setTags3}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Status</label>
                                                        <CommonSelect
                                                            className="select"
                                                            options={statusChoose}
                                                            defaultValue={statusChoose[0]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-light border me-2"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="btn btn-primary"
                                                    type="button"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#success_modal"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Project */}
            {/* Edit Project */}
            <div className="modal fade" id="edit_project" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header header-border align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <h5 className="modal-title me-2">Edit Project </h5>
                                <p className="text-dark">Project ID : PRO-0004</p>
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
                        <div className="add-info-fieldset ">
                            <div className="contact-grids-tab p-3 pb-0">
                                <ul className="nav nav-underline" id="myTab1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="basic-tab1"
                                            data-bs-toggle="tab"
                                            data-bs-target="#basic-info1"
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
                                            id="member-tab1"
                                            data-bs-toggle="tab"
                                            data-bs-target="#member1"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Members
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent1">
                                <div
                                    className="tab-pane fade show active"
                                    id="basic-info1"
                                    role="tabpanel"
                                    aria-labelledby="basic-tab1"
                                    tabIndex={0}
                                >
                                    <form>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                                            <i className="ti ti-photo text-gray-2 fs-16" />
                                                        </div>
                                                        <div className="profile-upload">
                                                            <div className="mb-2">
                                                                <h6 className="mb-1">Upload Project Logo</h6>
                                                                <p className="fs-12">
                                                                    Image should be below 4 mb
                                                                </p>
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
                                                                <Link to="#" className="btn btn-light btn-sm">
                                                                    Cancel
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Project Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Office Management"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Client</label>
                                                        <CommonSelect
                                                            className="select"
                                                            options={clientChoose}
                                                            defaultValue={clientChoose[1]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Start Date</label>
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
                                                                <label className="form-label">End Date</label>
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
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">Priority</label>
                                                                <CommonSelect
                                                                    className="select"
                                                                    options={priorityChoose}
                                                                    defaultValue={priorityChoose[1]}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Project Value
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="$"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label">Price Type</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Description</label>
                                                        <CommonTextEditor />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="input-block mb-0">
                                                        <label className="form-label">Upload Files</label>
                                                        <input className="form-control" type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-light border me-2"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancel
                                                </button>
                                                <button className="btn btn-primary" type="submit">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="member1"
                                    role="tabpanel"
                                    aria-labelledby="member-tab1"
                                    tabIndex={0}
                                >
                                    <form>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label me-2">
                                                            Team Members
                                                        </label>
                                                        <CommonTagsInput
                                                            value={tags}
                                                            onChange={setTags}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label me-2">
                                                            Team Leader
                                                        </label>
                                                        <CommonTagsInput
                                                            value={tags1}
                                                            onChange={setTags1}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label me-2">
                                                            Project Manager
                                                        </label>
                                                        <CommonTagsInput
                                                            value={tags2}
                                                            onChange={setTags2}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div>
                                                        <label className="form-label">Tags</label>
                                                        <CommonTagsInput
                                                            value={tags3}
                                                            onChange={setTags3}
                                                            placeholder="Add new"
                                                            className="custom-input-class" // Optional custom class
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Status</label>
                                                        <CommonSelect
                                                            className="select"
                                                            options={statusChoose}
                                                            defaultValue={statusChoose[1]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="d-flex align-items-center justify-content-end">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-light border me-2"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="btn btn-primary"
                                                    type="button"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#success_modal"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Edit Project */}
            {/* Add Project Success */}
            <div className="modal fade" id="success_modal" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-3">
                                <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
                                    <i className="ti ti-check fs-24" />
                                </span>
                                <h5 className="mb-2">Project Added Successfully</h5>
                                <p className="mb-3">
                                    Stephan Peralt has been added with Client ID :{" "}
                                    <span className="text-primary">#pro - 0004</span>
                                </p>
                                <div>
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <Link
                                                to={all_routes.projectlist}
                                                className="btn btn-dark w-100"
                                            >
                                                Back to List
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                to={all_routes.projectdetails}
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
            {/* /Add Project Success */}
            {/* Edit Todo */}
            <div className="modal fade" id="edit_todo">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action={all_routes.projectdetails}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Todo Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Update calendar and schedule"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Tag</label>
                                            <CommonSelect
                                                className='select'
                                                options={tagChoose}
                                                defaultValue={tagChoose[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Priority</label>
                                            <CommonSelect
                                                className='select'
                                                options={priorityChoose}
                                                defaultValue={priorityChoose[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Descriptions</label>
                                            <CommonTextEditor />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Add Assignee</label>
                                            <select className="select">
                                                <option>Select</option>
                                                <option>Sophie</option>
                                                <option>Cameron</option>
                                                <option>Doris</option>
                                                <option>Rufana</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-0">
                                            <label className="form-label">Status</label>
                                            <select className="select">
                                                <option>Select</option>
                                                <option>Completed</option>
                                                <option>Pending</option>
                                                <option>Onhold</option>
                                                <option>Inprogress</option>
                                            </select>
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
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Todo */}
            {/* Todo Details */}
            <div className="modal fade" id="view_todo">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h4 className="modal-title text-white">
                                Respond to any pending messages
                            </h4>
                            <span className="badge badge-danger d-inline-flex align-items-center">
                                <i className="ti ti-square me-1" />
                                Urgent
                            </span>
                            <span>
                                <i className="ti ti-star-filled text-warning" />
                            </span>
                            <Link to="#">
                                <i className="ti ti-trash text-white" />
                            </Link>
                            <button
                                type="button"
                                className="btn-close custom-btn-close bg-transparent fs-16 text-white position-static"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="mb-2">Task Details</h5>
                            <div className="border rounded mb-3 p-2">
                                <div className="row row-gap-3">
                                    <div className="col-md-4">
                                        <div className="text-center">
                                            <span className="d-block mb-1">Created On</span>
                                            <p className="text-dark">22 July 2025</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center">
                                            <span className="d-block mb-1">Due Date</span>
                                            <p className="text-dark">22 July 2025</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center">
                                            <span className="d-block mb-1">Status</span>
                                            <span className="badge badge-soft-success d-inline-flex align-items-center">
                                                <i className="fas fa-circle fs-6 me-1" />
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-2">Description</h5>
                                <p>
                                    Hiking is a long, vigorous walk, usually on trails or
                                    footpaths in the countryside. Walking for pleasure developed
                                    in Europe during the eighteenth century. Religious pilgrimages
                                    have existed much longer but they involve walking long
                                    distances for a spiritual purpose associated with specific
                                    religions and also we achieve inner peace while we hike at a
                                    local park.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h5 className="mb-2">Tags</h5>
                                <div className="d-flex align-items-center">
                                    <span className="badge badge-danger me-2">Internal</span>
                                    <span className="badge badge-success me-2">Projects</span>
                                    <span className="badge badge-secondary">Reminder</span>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-2">Assignee</h5>
                                <div className="avatar-list-stacked avatar-group-sm">
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-23.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-24.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-25.jpg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Todo Details */}
            {/* Add Todo */}
            <div className="modal fade" id="add_todo">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Todo</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action={all_routes.projectdetails}>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Todo Title</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Tag</label>
                                            <CommonSelect
                                                className='select'
                                                options={tagChoose}
                                                defaultValue={tagChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Priority</label>
                                            <CommonSelect
                                                className='select'
                                                options={priorityChoose}
                                                defaultValue={priorityChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Descriptions</label>
                                            <CommonTextEditor />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Add Assignee</label>
                                            <CommonSelect
                                                className='select'
                                                options={assigneeChoose}
                                                defaultValue={assigneeChoose[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-0">
                                            <label className="form-label">Status</label>
                                            <CommonSelect
                                                className='select'
                                                options={status1choose}
                                                defaultValue={status1choose[1]}
                                            />
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
                                    Add New Todo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Todo */}
        </>
    );
};

export default ProjectDetails;
