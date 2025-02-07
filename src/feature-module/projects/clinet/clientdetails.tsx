import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { label } from 'yet-another-react-lightbox/*'
import CommonSelect from '../../../core/common/commonSelect'
import CommonTextEditor from '../../../core/common/textEditor'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
type PasswordField = "password" | "confirmPassword";

const ClientDetails = () => {

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


    const tags = [
        { value: "Select", label: "Select" },
        { value: "Internal", label: "Internal" },
        { value: "Projects", label: "Projects" },
        { value: "Meetings", label: "Meetings" },
        { value: "Reminder", label: "Reminder" },
    ];
    const priority = [
        { value: "Select", label: "Select" },
        { value: "High", label: "High" },
        { value: "Medium", label: "Medium" },
        { value: "Low", label: "Low" },
    ];
    const addassignee = [
        { value: "Select", label: "Select" },
        { value: "Sophie", label: "Sophie" },
        { value: "Cameron", label: "Cameron" },
        { value: "Doris", label: "Doris" },
        { value: "Rufana", label: "Rufana" },
    ];
    const statusChoose = [
        { value: "Select", label: "Select" },
        { value: "Completed", label: "Completed" },
        { value: "Pending", label: "Pending" },
        { value: "Onhold", label: "Onhold" },
        { value: "Inprogress", label: "Inprogress" },
    ];

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row justify-content-between align-items-center mb-4">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                                    <Link to={all_routes.clientlist}>
                                        <i className="ti ti-arrow-left me-2" />
                                        Clients
                                    </Link>
                                </h6>
                                <div className="ms-2 head-icons">
                                    <CollapseHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 theiaStickySidebar">
                            <div className="card card-bg-1">
                                <div className="card-body p-0">
                                    <span className="avatar avatar-xl avatar-rounded border border-2 border-white m-auto d-flex mb-2">
                                        <ImageWithBasePath
                                            src="assets/img/users/user-13.jpg"
                                            className="w-auto h-auto"
                                            alt="Img"
                                        />
                                    </span>
                                    <div className="text-center px-3 pb-3 border-bottom">
                                        <div className="mb-3">
                                            <h5 className="d-flex align-items-center justify-content-center mb-1">
                                                Stephan Peralt
                                                <i className="ti ti-discount-check-filled text-success ms-1" />
                                            </h5>
                                            <p className="text-dark mb-1">EcoVision Enterprises</p>
                                            <span className="badge badge-soft-secondary fw-medium">
                                                Operational Manager
                                            </span>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-id me-2" />
                                                    Client ID
                                                </span>
                                                <p className="text-dark">CLT-0024</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-calendar-check me-2" />
                                                    Added on
                                                </span>
                                                <p className="text-dark">1st Jan 2023</p>
                                            </div>
                                            <div className="row gx-2 mt-3">
                                                <div className="col-6">
                                                    <div>
                                                        <Link
                                                            to={all_routes.voiceCall}
                                                            className="btn btn-dark w-100"
                                                        >
                                                            <i className="ti ti-phone-call me-1" />
                                                            Call
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div>
                                                        <Link to={all_routes.chat} className="btn btn-primary w-100">
                                                            <i className="ti ti-message-heart me-1" />
                                                            Message
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6>Basic information</h6>
                                            <Link
                                                to="to"
                                                className="btn btn-icon btn-sm"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#edit_client"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-phone me-2" />
                                                Phone
                                            </span>
                                            <p className="text-dark">(163) 2459 315</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-mail-check me-2" />
                                                Email
                                            </span>
                                            <Link
                                                to="to"
                                                className="text-info d-inline-flex align-items-center"
                                            >
                                                perralt12@example.com
                                                <i className="ti ti-copy text-dark ms-2" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-check me-2" />
                                                Address
                                            </span>
                                            <p className="text-dark text-end">
                                                1861 Bayonne Ave, <br /> Manchester, NJ, 08759
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6>Social Links</h6>
                                            <Link to="to" className="btn btn-icon btn-sm">
                                                <i className="ti ti-edit" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Link to="to" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-01.svg" alt="Img" />
                                            </Link>
                                            <Link to="to" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-06.svg" alt="Img" />
                                            </Link>
                                            <Link to="to" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-02.svg" alt="Img" />
                                            </Link>
                                            <Link to="to" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-03.svg" alt="Img" />
                                            </Link>
                                            <Link to="to" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-04.svg" alt="Img" />
                                            </Link>
                                            <Link to="to" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-05.svg" alt="Img" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div>
                                <div className="bg-white rounded">
                                    <ul
                                        className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap mb-4"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link active fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab1"
                                                data-bs-toggle="tab"
                                                aria-selected="false"
                                                role="tab"
                                            >
                                                <i className="ti ti-star me-1" />
                                                Overview
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab2"
                                                data-bs-toggle="tab"
                                                aria-selected="false"
                                                role="tab"
                                            >
                                                <i className="ti ti-box me-1" />
                                                Projects
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab3"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-basket-code me-1" />
                                                Tasks
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab4"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-file-invoice me-1" />
                                                Invoices
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab5"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-file-description me-1" />
                                                Notes
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab6"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-folder-open me-1" />
                                                Documents
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content custom-accordion-items client-accordion">
                                    <div
                                        className="tab-pane active show"
                                        id="bottom-justified-tab1"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="accordion accordions-items-seperate"
                                            id="accordionExample"
                                        >
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingOne">
                                                    <div
                                                        className="accordion-button bg-white"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderOne"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderOne"
                                                        role="button"
                                                    >
                                                        <h5>Projects</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderOne"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <div className="row">
                                                            <div className="col-xxl-6 col-lg-12 col-md-F6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-01.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Hospital Administration
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>8 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 &nbsp;Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">31 July 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$549987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Leona
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 565 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                495 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                70 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-02.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Video Calling App
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>22 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">16 Jan 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$279987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Mathis
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 700 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                605 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                95 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
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
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingTwo">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderTwo"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderTwo"
                                                        role="button"
                                                    >
                                                        <h5>Tasks</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderTwo"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="list-group list-group-flush">
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
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
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-22.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                            <div className="list-group-item border rounded p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
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
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingThree">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderThree"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderThree"
                                                    >
                                                        <h5>Invoices</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderThree"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingThree"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Invoice : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group list-group-flush mb-3">
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
                                                        <div className="text-center">
                                                            <Link to="#" className="btn btn-primary btn-sm">
                                                                Load More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFour">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFour"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderFour"
                                                    >
                                                        <h5>Notes</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFour"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingFour"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Notes : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                15 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
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
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                16 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
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
                                                                            <i className="ti ti-point-filled text-success me-1" />
                                                                            Phase 1 Completion
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
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                17 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
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
                                                                            <i className="ti ti-point-filled text-danger me-1" />
                                                                            Phase 2 Completion
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
                                                            <div className="col-md-12">
                                                                <div className="text-center">
                                                                    <Link to="#" className="btn btn-primary btn-sm">
                                                                        Load More
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFive">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFive"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderFive"
                                                    >
                                                        <h5>Documents</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFive"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingFive"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-4">
                                                                <h6>Total No of Documents : 45</h6>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="dropdown me-2">
                                                                        <Link
                                                                            to="to"
                                                                            className="dropdown-toggle btn btn-white"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            Sort By : Docs Type
                                                                        </Link>
                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Docs
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Pdf
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Image
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Folder
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Xml
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="position-relative input-icon flex-fill">
                                                                        <span className="input-icon-addon">
                                                                            <i className="ti ti-search" />
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Search"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="custom-datatable-filter table-responsive no-datatable-length border">
                                                            <table className="table datatable">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Size</th>
                                                                        <th>Type</th>
                                                                        <th>Modified</th>
                                                                        <th>Share</th>
                                                                        <th />
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-01.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Secret
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.6 MB</td>
                                                                        <td>Doc</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Mar 15, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-27.jpg"
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
                                                                                        src="assets/img/profiles/avatar-12.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-02.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Sophie Headrick
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.4 MB</td>
                                                                        <td>PDF</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 8, 2025</p>
                                                                            <span>08:20:13 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-16.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-03.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Gallery
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>6.1 MB</td>
                                                                        <td>Image</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Aug 6, 2025</p>
                                                                            <span>04:10:12 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-02.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-03.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-05.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <Link
                                                                                    className="avatar bg-primary avatar-rounded text-fixed-white"
                                                                                    to="to"
                                                                                >
                                                                                    +1
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-04.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Doris Crowley
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>5.2 MB</td>
                                                                        <td>Folder</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 6, 2025</p>
                                                                            <span>03:40:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-10.jpg"
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
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-05.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Cheat_codez
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>8 MB</td>
                                                                        <td>Xml</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Oct 12, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-04.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
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
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
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
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab2"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingOne2">
                                                    <div
                                                        className="accordion-button bg-white"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderOne2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderOne2"
                                                        role="button"
                                                    >
                                                        <h5>Projects</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderOne2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingOne2"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <div className="row">
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-01.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Hospital Administration
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>8 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 &nbsp;Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">31 July 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$549987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Leona
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 565 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                495 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                70 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-02.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Video Calling App
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>22 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">16 Jan 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$279987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Mathis
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 700 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                605 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                95 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
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
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab3"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingTwo2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderTwo2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderTwo2"
                                                    >
                                                        <h5>Tasks</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderTwo2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingTwo2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="list-group list-group-flush">
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
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
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-22.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                            <div className="list-group-item border rounded p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
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
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                                                                to="to"
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab4"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingThree2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderThree2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderThree2"
                                                    >
                                                        <h5>Invoices</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderThree2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingThree2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Invoice : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group list-group-flush mb-3">
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
                                                        <div className="text-center">
                                                            <Link to="#" className="btn btn-primary btn-sm">
                                                                Load More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab5"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFour2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFour2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderFour2"
                                                    >
                                                        <h5>Notes</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFour2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingFour2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Notes : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                15 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
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
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                16 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
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
                                                                            <i className="ti ti-point-filled text-success me-1" />
                                                                            Phase 1 Completion
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
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                17 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
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
                                                                            <i className="ti ti-point-filled text-danger me-1" />
                                                                            Phase 2 Completion
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
                                                            <div className="col-md-12">
                                                                <div className="text-center">
                                                                    <Link to="#" className="btn btn-primary btn-sm">
                                                                        Load More
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab6"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFive2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFive2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderFive2"
                                                    >
                                                        <h5>Documents</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFive2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingFive2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-4">
                                                                <h6>Total No of Documents : 45</h6>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="dropdown me-2">
                                                                        <Link
                                                                            to="to"
                                                                            className="dropdown-toggle btn btn-white"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            Sort By : Docs Type
                                                                        </Link>
                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Docs
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Pdf
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Image
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Folder
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Xml
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="position-relative input-icon flex-fill">
                                                                        <span className="input-icon-addon">
                                                                            <i className="ti ti-search" />
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Search"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="custom-datatable-filter table-responsive no-datatable-length border">
                                                            <table className="table datatable">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Size</th>
                                                                        <th>Type</th>
                                                                        <th>Modified</th>
                                                                        <th>Share</th>
                                                                        <th />
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-01.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Secret
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.6 MB</td>
                                                                        <td>Doc</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Mar 15, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-27.jpg"
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
                                                                                        src="assets/img/profiles/avatar-12.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-02.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Sophie Headrick
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.4 MB</td>
                                                                        <td>PDF</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 8, 2025</p>
                                                                            <span>08:20:13 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-16.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-03.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Gallery
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>6.1 MB</td>
                                                                        <td>Image</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Aug 6, 2025</p>
                                                                            <span>04:10:12 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-02.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-03.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-05.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <Link
                                                                                    className="avatar bg-primary avatar-rounded text-fixed-white"
                                                                                    to="to"
                                                                                >
                                                                                    +1
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-04.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Doris Crowley
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>5.2 MB</td>
                                                                        <td>Folder</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 6, 2025</p>
                                                                            <span>03:40:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-10.jpg"
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
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-05.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Cheat_codez
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>8 MB</td>
                                                                        <td>Xml</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Oct 12, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-04.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
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
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
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
                                <div className="text-end mb-4">
                                    <div className="dropdown">
                                        <Link
                                            to="to"
                                            className="d-inline-flex align-items-center avatar avatar-lg avatar-rounded bg-primary"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="ti ti-plus fs-24 text-white" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end bg-gray-900 dropdown-menu-md dropdown-menu-dark p-3">
                                            <li>
                                                <Link
                                                    to="to"
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
                                                    to="to"
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
                                                    to="to"
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
                                                    to="to"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-folder-open" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">Add Files</h6>
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
            {/* Edit Client */}
            <div className="modal fade" id="edit_client">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Client</h4>
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
                                                        <i className="ti ti-photo" />
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
                                                                to="to"
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
                                                        defaultValue="Michael"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        defaultValue="Walker"
                                                    />
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
                                                        defaultValue="Michael Walker"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Email<span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="michael@example.com"
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
                                                <div className="mb-3 ">
                                                    <label className="form-label">
                                                        Confirm Password <span className="text-danger"> *</span>
                                                    </label>
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
                                                    <label className="form-label">
                                                        Phone Number <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="(163) 2459 315"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Company</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="BrightWave Innovations"
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
                                    <div className="modal-body pb-0 ">
                                        <div className="card bg-light-500 shadow-none">
                                            <div className="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                <h6>Enable Options</h6>
                                                <div className="d-flex align-items-center justify-content-end">
                                                    <div className="form-check form-check-md form-switch me-2">
                                                        <label className="form-check-label mt-0">
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                role="switch"
                                                            />
                                                            Enable all Module
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-md d-flex align-items-center">
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
                                        <div className="table-responsive permission-table border rounded">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-check-md form-switch me-2">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-check-md form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        defaultChecked
                                                                    />
                                                                    Leaves
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div
                                                                className="form-check form-check-md d-flex align-items-center"
                                                            >
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md form-switch me-2">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md form-switch me-2">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md form-switch me-2">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md form-switch me-2">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Assets
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md form-switch me-2">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                                            <div className="form-check form-check-md d-flex align-items-center">
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
                                        <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                            Save{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Client */}
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
                        <form>
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
                                                options={tags}
                                                defaultValue={tags[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <label className="form-label">Priority</label>
                                            <CommonSelect
                                                className='select'
                                                options={priority}
                                                defaultValue={priority[1]}
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
                                                options={addassignee}
                                                defaultValue={addassignee[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-0">
                                            <label className="form-label">Status</label>
                                            <CommonSelect
                                                className='select'
                                                options={statusChoose}
                                                defaultValue={statusChoose[1]}
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
                                <button type="button" data-bs-dimiss="modal" className="btn btn-primary">
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
                                    Hiking is a long, vigorous walk, usually on trails or footpaths in
                                    the countryside. Walking for pleasure developed in Europe during
                                    the eighteenth century. Religious pilgrimages have existed much
                                    longer but they involve walking long distances for a spiritual
                                    purpose associated with specific religions and also we achieve
                                    inner peace while we hike at a local park.
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
            {/* Add Note */}
            <div className="modal fade" id="add_notes" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border align-items-center justify-content-between">
                            <h5 className="modal-title">Add New Note</h5>
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
                                <div className="mb-3">
                                    <label className="form-label">
                                        Title <span className="text-danger"> *</span>
                                    </label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Note <span className="text-danger"> *</span>
                                    </label>
                                    <textarea className="form-control" rows={4} defaultValue={""} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Attachment <span className="text-danger"> *</span>
                                    </label>
                                    <div className="d-flex align-items-center justify-content-center border border-dashed rounded p-3 flex-column">
                                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent mb-2">
                                            <i className="ti ti-folder-open fs-24" />
                                        </span>
                                        <p className="fs-14 text-center mb-2">
                                            Drag and drop your files
                                        </p>
                                        <div className="file-upload position-relative btn btn-sm btn-primary px-3 mb-2">
                                            <i className="ti ti-upload me-1" />
                                            Upload
                                            <input type="file" accept="video/image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <label className="form-label">Uploaded Files</label>
                                    <div className="border bg-light-500 rounded mb-3 p-3">
                                        <h6 className="fw-medium mb-1">Projectneonals teyys.xls</h6>
                                        <p className="mb-2">4.25 MB</p>
                                        <div className="progress progress-xs mb-2">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: "45%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p>45%</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between bg-light-500 rounded p-3">
                                        <div>
                                            <h6 className="fw-medium mb-1">tes.txt</h6>
                                            <p>1.2 MB</p>
                                        </div>
                                        <Link
                                            to="to"
                                            className="btn btn-sm btn-icon text-danger"
                                        >
                                            <i className="ti ti-trash fs-20" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="d-flex align-items-center justify-content-end m-0">
                                    <button
                                        type="button"
                                        className="btn btn-outline-light border me-2"
                                    >
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary" type="button" data-bs-dimiss="modal">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Note */}
        </>

    )
}

export default ClientDetails
