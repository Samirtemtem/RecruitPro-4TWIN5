import React from 'react'
import { all_routes } from '../../router/all_routes'
import { Link } from 'react-router-dom'
import Table from "../../../core/common/dataTable/index";
import PredefinedDateRanges from '../../../core/common/datePicker';
import { activityDetails } from '../../../core/data/json/activityDetails';
import CrmsModal from '../../../core/modals/crms_modal';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const Activity = () => {

    const data = activityDetails;
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            render: (text: String) => (
                <p className="fs-14 text-dark fw-medium">{text}</p>
            ),
            sorter: (a: any, b: any) => a.title.length - b.title.length,
        },
        {
            title: "Activity Type",
            dataIndex: "activity_type",
            render: (text: string, record: any) => (
                <span className={`badge ${text === 'Meeting' ? 'badge-pink-transparent' : text === 'Calls' ? 'badge-purple-transparent' : text === 'Tasks' ? 'badge-info-transparent' : 'badge-warning-transparent'}`}>
                    <i className={`ti  me-1 ${text === 'Meeting' ? 'ti-device-computer-camera' : text === 'Calls' ? 'ti-phone' : text === 'Tasks' ? 'ti-subtask' : 'ti-mail'}`} />
                    {text}
                </span>

            ),
            sorter: (a: any, b: any) => a.activity_type.length - b.activity_type.length,
        },
        {
            title: "Due Date",
            dataIndex: "due_date",
            sorter: (a: any, b: any) => a.due_date.length - b.due_date.length,
        },
        {
            title: "Owner",
            dataIndex: "owner",
            sorter: (a: any, b: any) => a.owner.length - b.owner.length,
        },
        {
            title: "Created Date",
            dataIndex: "created_date",
            sorter: (a: any, b: any) => a.created_date.length - b.created_date.length,
        },
        {
            title: "",
            dataIndex: "actions",
            render: () => (
                <div className="action-icon d-inline-flex">
                    <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_activity"
                    >
                        <i className="ti ti-edit" />
                    </Link>
                    <Link
                        to="#"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                    >
                        <i className="ti ti-trash" />
                    </Link>
                </div>
            ),
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
                            <h2 className="mb-1">Activity</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">CRM</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Activity List
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
                                    data-bs-target="#add_activity"
                                    className="btn btn-primary d-flex align-items-center"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Add Activity
                                </Link>
                            </div>
                            <div className="ms-2 head-icons">
                            <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Leads List */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Activity List</h5>
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
                                        Activity Type
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Meeting
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Calls
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Tasks
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Email
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
                    {/* /Leads List */}
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
            <CrmsModal/>
        </>
       

    )
}

export default Activity
