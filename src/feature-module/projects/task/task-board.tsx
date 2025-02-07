import React, { useEffect, useRef, useState } from 'react'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import CommonSelect from '../../../core/common/commonSelect'
import { label } from 'yet-another-react-lightbox/*'
import { DatePicker } from 'antd'
import CommonTagsInput from '../../../core/common/Taginput'
import CommonTextEditor from '../../../core/common/textEditor'
import dragula, { Drake } from "dragula";
import "dragula/dist/dragula.css";
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'

const TaskBoard = () => {

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

    const container1Ref = useRef<HTMLDivElement>(null);
    const container2Ref = useRef<HTMLDivElement>(null);
    const container3Ref = useRef<HTMLDivElement>(null);
    const container4Ref = useRef<HTMLDivElement>(null);
    const container5Ref = useRef<HTMLDivElement>(null);
    const container6Ref = useRef<HTMLDivElement>(null);
    const container7Ref = useRef<HTMLDivElement>(null);
    const container8Ref = useRef<HTMLDivElement>(null);
    const container9Ref = useRef<HTMLDivElement>(null);
    const container10Ref = useRef<HTMLDivElement>(null);
    const container11Ref = useRef<HTMLDivElement>(null);
    const container12Ref = useRef<HTMLDivElement>(null);
    const container13Ref = useRef<HTMLDivElement>(null);
    const container14Ref = useRef<HTMLDivElement>(null);
    const container15Ref = useRef<HTMLDivElement>(null);
    const container16Ref = useRef<HTMLDivElement>(null);
    const container17Ref = useRef<HTMLDivElement>(null);
    const container18Ref = useRef<HTMLDivElement>(null);
    const container19Ref = useRef<HTMLDivElement>(null);
    const container20Ref = useRef<HTMLDivElement>(null);
    const container21Ref = useRef<HTMLDivElement>(null);
    const container22Ref = useRef<HTMLDivElement>(null);
    const container23Ref = useRef<HTMLDivElement>(null);
    const container24Ref = useRef<HTMLDivElement>(null);
    const container25Ref = useRef<HTMLDivElement>(null);
    const container26Ref = useRef<HTMLDivElement>(null);
    const container27Ref = useRef<HTMLDivElement>(null);
    const container28Ref = useRef<HTMLDivElement>(null);
    const container29Ref = useRef<HTMLDivElement>(null);
    const container30Ref = useRef<HTMLDivElement>(null);
    const container31Ref = useRef<HTMLDivElement>(null);
    const container32Ref = useRef<HTMLDivElement>(null);
    const container33Ref = useRef<HTMLDivElement>(null);
    const container34Ref = useRef<HTMLDivElement>(null);
    const container35Ref = useRef<HTMLDivElement>(null);
    const container36Ref = useRef<HTMLDivElement>(null);
    const container37Ref = useRef<HTMLDivElement>(null);
    const container38Ref = useRef<HTMLDivElement>(null);
    const container39Ref = useRef<HTMLDivElement>(null);
    const container40Ref = useRef<HTMLDivElement>(null);
    const container41Ref = useRef<HTMLDivElement>(null);
    const container42Ref = useRef<HTMLDivElement>(null);
    const container43Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const containers = [
            container1Ref.current as HTMLDivElement,
            container2Ref.current as HTMLDivElement,
            container3Ref.current as HTMLDivElement,
            container4Ref.current as HTMLDivElement,
            container5Ref.current as HTMLDivElement,
            container6Ref.current as HTMLDivElement,
            container7Ref.current as HTMLDivElement,
            container8Ref.current as HTMLDivElement,
            container9Ref.current as HTMLDivElement,
            container10Ref.current as HTMLDivElement,
            container11Ref.current as HTMLDivElement,
            container12Ref.current as HTMLDivElement,
            container13Ref.current as HTMLDivElement,
            container14Ref.current as HTMLDivElement,
            container15Ref.current as HTMLDivElement,
            container16Ref.current as HTMLDivElement,
            container17Ref.current as HTMLDivElement,
            container18Ref.current as HTMLDivElement,
            container19Ref.current as HTMLDivElement,
            container20Ref.current as HTMLDivElement,
            container21Ref.current as HTMLDivElement,
            container22Ref.current as HTMLDivElement,
            container23Ref.current as HTMLDivElement,
            container24Ref.current as HTMLDivElement,
            container25Ref.current as HTMLDivElement,
            container26Ref.current as HTMLDivElement,
            container27Ref.current as HTMLDivElement,
            container28Ref.current as HTMLDivElement,
            container29Ref.current as HTMLDivElement,
            container30Ref.current as HTMLDivElement,
            container31Ref.current as HTMLDivElement,
            container32Ref.current as HTMLDivElement,
            container33Ref.current as HTMLDivElement,
            container34Ref.current as HTMLDivElement,
            container35Ref.current as HTMLDivElement,
            container36Ref.current as HTMLDivElement,
            container37Ref.current as HTMLDivElement,
            container38Ref.current as HTMLDivElement,
            container39Ref.current as HTMLDivElement,
            container40Ref.current as HTMLDivElement,
            container41Ref.current as HTMLDivElement,
            container42Ref.current as HTMLDivElement,
            container43Ref.current as HTMLDivElement,
        ].filter((container) => container !== null);

        const drake: Drake = dragula(containers);
        return () => {
            drake.destroy();
        };
    }, []);


    return (
        <>

            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Task Board</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="index.html">
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Projects</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Task Board
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="dropdown me-2">
                                <Link
                                    to="#"
                                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="ti ti-file-export me-2" /> Export
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
                            <Link
                                to="#"
                                className="btn btn-primary d-inline-flex align-items-center"
                                data-bs-toggle="modal" 
                                data-inert={true}
                                data-bs-target="#add_board"
                            >
                                <i className="ti ti-circle-plus me-1" />
                                Add Board
                            </Link>
                            <div className="head-icons ms-2 mb-0">
                            <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h4>Hospital Administration</h4>
                            <div className="d-flex align-items-center flex-wrap row-gap-3">
                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-19.jpg"
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
                                            src="assets/img/profiles/avatar-16.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded bg-primary fs-12">1+</span>
                                </div>
                                <div className="d-flex align-items-center me-3">
                                    <p className="mb-0 me-3 pe-3 border-end fs-14">
                                        Total Task : <span className="text-dark"> 55 </span>
                                    </p>
                                    <p className="mb-0 me-3 pe-3 border-end fs-14">
                                        Pending : <span className="text-dark"> 15 </span>
                                    </p>
                                    <p className="mb-0 fs-14">
                                        Completed : <span className="text-dark"> 40 </span>
                                    </p>
                                </div>
                                <div className="input-icon-start position-relative">
                                    <span className="input-icon-addon">
                                        <i className="ti ti-search" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Project"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                                        <h6 className="me-2">Priority</h6>
                                        <ul
                                            className="nav nav-pills border d-inline-flex p-1 rounded bg-light todo-tabs"
                                            id="pills-tab"
                                            role="tablist"
                                        >
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto active"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    All
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-contact"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    High
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-medium"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Medium
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-low"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Low
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="d-flex align-items-center justify-content-lg-end flex-wrap row-gap-3 mb-3">
                                        <div className="dropdown me-2">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                            >
                                                Clients
                                            </Link>
                                            <ul className="dropdown-menu  dropdown-menu-end p-3">
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Clients
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Sophie
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Cameron
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Doris
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="input-icon w-120 position-relative me-2">
                                            <span className="input-icon-addon">
                                                <i className="ti ti-calendar" />
                                            </span>
                                            <DatePicker
                                                className="form-control datetimepicker"
                                                format={{
                                                    format: "DD-MM-YYYY",
                                                    type: "mask",
                                                }}
                                                getPopupContainer={getModalContainer}
                                                placeholder="Created Date"
                                            />
                                        </div>
                                        <div className="input-icon w-120 position-relative me-2">
                                            <span className="input-icon-addon">
                                                <i className="ti ti-calendar" />
                                            </span>
                                            <DatePicker
                                                className="form-control datetimepicker"
                                                format={{
                                                    format: "DD-MM-YYYY",
                                                    type: "mask",
                                                }}
                                                getPopupContainer={getModalContainer}
                                                placeholder="Due Date"
                                            />
                                        </div>
                                        <div className="dropdown me-2">
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
                                                        Inprogress
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        On-hold
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        Completed
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex align-items-center border rounded p-2">
                                            <span className="d-inline-flex me-2">Sort By : </span>
                                            <div className="dropdown">
                                                <Link
                                                    to="#"
                                                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center border-0 bg-transparent p-0 text-dark"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    Created Date
                                                </Link>
                                                <ul className="dropdown-menu  dropdown-menu-end p-3">
                                                    <li>
                                                        <Link
                                                            to="#"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            Created Date
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="#"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            High
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="#"
                                                            className="dropdown-item rounded-1"
                                                        >
                                                            Medium
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                >
                                    <div className="d-flex align-items-start overflow-auto project-status pb-4">
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-transparent-purple p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-purple rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">To Do</h5>
                                                        <span className="badge bg-light rounded-pill">02</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container1Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 18 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
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
                                                                            src="assets/img/profiles/avatar-16.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container2Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-pink rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Pending</h5>
                                                        <span className="badge bg-light rounded-pill">13</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container3Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container4Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                            src="assets/img/profiles/avatar-11.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Inprogress</h5>
                                                        <span className="badge bg-light rounded-pill">04</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container5Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Doctor Module
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "35%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    35%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 20 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-17.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-18.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container6Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Inventory and Supplies
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-purple"
                                                                        style={{ width: "60%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    60%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 21 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-success rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Completed</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container7Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Billing and Payments
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-25.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-26.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-warning p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-warning rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">On-hold</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container8Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "15%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    15%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container9Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Telemedicine Implementation
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Review</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container10Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 16 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container11Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Appointment Scheduling
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 24 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel">
                                    <div className="d-flex align-items-start overflow-auto project-status pb-4">
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-transparent-purple p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-purple rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">To Do</h5>
                                                        <span className="badge bg-light rounded-pill">02</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container12Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 18 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
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
                                                                            src="assets/img/profiles/avatar-16.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container13Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-pink rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Pending</h5>
                                                        <span className="badge bg-light rounded-pill">13</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container14Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container15Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                            src="assets/img/profiles/avatar-11.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Inprogress</h5>
                                                        <span className="badge bg-light rounded-pill">04</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container16Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Doctor Module
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "35%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    35%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 20 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-17.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-18.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container17Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Inventory and Supplies
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-purple"
                                                                        style={{ width: "60%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    60%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 21 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-success rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Completed</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container18Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Billing and Payments
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-25.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-26.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-warning p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-warning rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">On-hold</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container19Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "15%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    15%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container20Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Telemedicine Implementation
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Review</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container21Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 16 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container22Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Appointment Scheduling
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 24 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-medium" role="tabpanel">
                                    <div className="d-flex align-items-start overflow-auto project-status pb-4">
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-transparent-purple p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-purple rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">To Do</h5>
                                                        <span className="badge bg-light rounded-pill">02</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container23Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 18 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
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
                                                                            src="assets/img/profiles/avatar-16.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container24Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-pink rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Pending</h5>
                                                        <span className="badge bg-light rounded-pill">13</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container25Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container26Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                            src="assets/img/profiles/avatar-11.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Inprogress</h5>
                                                        <span className="badge bg-light rounded-pill">04</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container27Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Doctor Module
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "35%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    35%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 20 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-17.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-18.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container28Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Inventory and Supplies
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-purple"
                                                                        style={{ width: "60%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    60%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 21 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-success rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Completed</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container29Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Billing and Payments
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-25.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-26.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-warning p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-warning rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">On-hold</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container30Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "15%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    15%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container31Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Telemedicine Implementation
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Review</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container32Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 16 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container33Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Appointment Scheduling
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 24 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-low" role="tabpanel">
                                    <div className="d-flex align-items-start overflow-auto project-status pb-4">
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-transparent-purple p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-purple rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">To Do</h5>
                                                        <span className="badge bg-light rounded-pill">02</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container34Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 18 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
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
                                                                            src="assets/img/profiles/avatar-16.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container35Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-pink rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Pending</h5>
                                                        <span className="badge bg-light rounded-pill">13</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container36Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient appointment booking
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "20%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    20%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                            src="assets/img/profiles/avatar-04.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container37Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Payment Gateway
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 15 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                            src="assets/img/profiles/avatar-11.jpg"
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Inprogress</h5>
                                                        <span className="badge bg-light rounded-pill">04</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container38Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Doctor Module
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "35%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    35%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 20 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-17.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-18.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-19.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container39Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Inventory and Supplies
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-purple"
                                                                        style={{ width: "60%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    60%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 21 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-success p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-success rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Completed</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container40Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Billing and Payments
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-25.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-26.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-warning p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-warning rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">On-hold</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container41Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{ width: "15%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    15%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2">
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-success badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Low
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Telemedicine Implementation
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        style={{ width: "40%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    40%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 22 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="p-3 rounded bg-transparent-secondary w-100">
                                            <div className="bg-white p-2 rounded mb-2">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <span className="bg-soft-skyblue p-1 d-flex rounded-circle me-2">
                                                            <span className="bg-skyblue rounded-circle d-block p-1" />
                                                        </span>
                                                        <h5 className="me-2">Review</h5>
                                                        <span className="badge bg-light rounded-pill">10</span>
                                                    </div>
                                                    <div className="dropdown">
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
                                                                    data-bs-target="#edit_task"
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kanban-drag-wrap">
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container42Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-warning badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        Medium
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Patient Feedback
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 16 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-30.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-31.jpg"
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
                                                                            src="assets/img/profiles/avatar-09.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded">
                                                                        <ImageWithBasePath
                                                                            className="border border-white"
                                                                            src="assets/img/profiles/avatar-11.jpg"
                                                                            alt="img"
                                                                        />
                                                                    </span>
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="card kanban-card mb-2" ref={container43Ref}>
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="badge bg-outline-dark me-2">
                                                                        Web Layout
                                                                    </span>
                                                                    <span className="badge bg-danger badge-xs d-flex align-items-center justify-content-center">
                                                                        <i className="fas fa-circle fs-6 me-1" />
                                                                        High
                                                                    </span>
                                                                </div>
                                                                <div className="dropdown">
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
                                                                                data-bs-target="#edit_task"
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
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="mb-2">
                                                                <h6 className="d-flex align-items-center">
                                                                    Appointment Scheduling
                                                                </h6>
                                                            </div>
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    className="progress progress-sm flex-fill"
                                                                    role="progressbar"
                                                                    aria-label="Basic example"
                                                                    aria-valuenow={0}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={20}
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-success"
                                                                        style={{ width: "100%" }}
                                                                    />
                                                                </div>
                                                                <span className="d-block ms-2 text-gray-9 fw-medium">
                                                                    100%
                                                                </span>
                                                            </div>
                                                            <p className="fw-medium mb-0">
                                                                Due on :{" "}
                                                                <span className="text-gray-9"> 24 Apr 2024</span>
                                                            </p>
                                                            <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-2">
                                                                <div className="avatar-list-stacked avatar-group-sm me-3">
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
                                                                    <span className="avatar avatar-rounded bg-primary fs-12">
                                                                        1+
                                                                    </span>
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark me-2"
                                                                    >
                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="d-flex align-items-center text-dark"
                                                                    >
                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                        14
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2">
                                                <Link
                                                    to="#"
                                                    className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                                    data-bs-toggle="modal" data-inert={true}
                                                    data-bs-target="#add_task"
                                                >
                                                    <i className="ti ti-plus me-2" /> New Task
                                                </Link>
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


            {/* Add Task */}
            <div className="modal fade" id="add_task">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Task</h4>
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
                                            <label className="form-label">Title</label>
                                            <input type="text" className="form-control" />
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
                                            <CommonTextEditor />
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
                                    Add New Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Task */}
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
                        <form>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input type="text" className="form-control" />
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

            {/* Add Board */}
            <div className="modal fade" id="add_board">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Board</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="task-board.html">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Board Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <label className="form-label">Board Color</label>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
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
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Add New Board
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Board */}


        </>

    )
}

export default TaskBoard
