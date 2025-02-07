import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import Table from "../../../core/common/dataTable/index";
import { all_routes } from '../../router/all_routes';
import { userreportDetails } from '../../../core/data/json/userreportDetails';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import ReactApexChart from 'react-apexcharts';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const UserReports = () => {

    const data = userreportDetails;
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center file-name-icon">
                    <Link to="#" className="avatar avatar-md border avatar-rounded">
                        <ImageWithBasePath src={record.Image} className="img-fluid" alt="img" />
                    </Link>
                    <div className="ms-2">
                        <h6 className="fw-medium">
                            <Link to="#">{text}</Link>
                        </h6>
                    </div>
                </div>

            ),
            sorter: (a: any, b: any) => a.Name.length - b.Name.length,
        },
        {
            title: "Email",
            dataIndex: "Email",
            sorter: (a: any, b: any) => a.Email.length - b.Email.length,
        },
        {
            title: "Created Date",
            dataIndex: "CreatedDate",
            sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
        },
        {
            title: "Role",
            dataIndex: "Role",
            render: (text: String, record: any) => (
                <span className={`badge d-inline-flex align-items-center badge-xs ${text === 'Employee' ? 'badge-pink-transparent' : 'badge-soft-purple'}`}>
                    {text}
                </span>

            ),
            sorter: (a: any, b: any) => a.Role.length - b.Role.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text: String, record: any) => (
                <span className={`badge d-inline-flex align-items-center badge-xs ${text === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                    <i className="ti ti-point-filled me-1" />
                    {text}
                </span>

            ),
            sorter: (a: any, b: any) => a.Status.length - b.Status.length,
        },
    ]
    //New Chart
    const [userchart] = useState<any>({
        series: [{
            name: 'Data',
            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 29] // Sample data for each month
        }],
        chart: {
            type: 'bar',
            height: 185
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return val + " units";
                }
            }
        },
        colors: ['#00E396'] // Bar color (green in this case)
    });

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">User Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        User Report
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="mb-2">
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
                    <div className="row">
                        <div className="col-xl-6 d-flex">
                            <div className="row flex-fill">
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <p className="fs-12 fw-medium mb-1 text-truncate">
                                                            Total Users
                                                        </p>
                                                        <h4>800</h4>
                                                    </div>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-primary bg-transparent-primary rounded-3 d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-user text-primary" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                <span className="text-success fs-12 d-flex align-items-center me-1">
                                                    <i className="ti ti-arrow-wave-right-up me-1" />
                                                    +20.01%
                                                </span>{" "}
                                                from last week
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <p className="fs-12 fw-medium mb-1 text-truncate">
                                                            Active Users
                                                        </p>
                                                        <h4>750</h4>
                                                    </div>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-success bg-transparent-success rounded-3 d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-user-check text-success" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                <span className="text-success fs-12 d-flex align-items-center me-1">
                                                    <i className="ti ti-arrow-wave-right-up me-1" />
                                                    +17.02%
                                                </span>{" "}
                                                from last week
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <p className="fs-12 fw-medium mb-1 text-truncate">
                                                            New Users
                                                        </p>
                                                        <h4>100</h4>
                                                    </div>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-skyblue bg-transparent-skyblue rounded-3 d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-user-up text-skyblue" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                <span className="text-success fs-12 d-flex align-items-center me-1">
                                                    <i className="ti ti-arrow-wave-right-up me-1" />
                                                    +10.01%
                                                </span>{" "}
                                                from last week
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <p className="fs-12 fw-medium mb-1 text-truncate">
                                                            Inactive Users
                                                        </p>
                                                        <h4>50</h4>
                                                    </div>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-danger bg-transparent-danger rounded-3 d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-user-pause text-danger" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                <span className="text-danger fs-12 d-flex align-items-center me-1">
                                                    <i className="ti ti-arrow-wave-right-up me-1" />
                                                    -10.01%
                                                </span>{" "}
                                                from last week
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="d-flex align-items-center ">
                                            <span className="me-2">
                                                <i className="ti ti-chart-bar text-danger" />
                                            </span>
                                            <h5>Users</h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="d-inline-flex align-items-center me-2 mb-0">
                                                <i className="ti ti-square-filled fs-12 text-success me-2" />
                                                Active Users
                                            </p>
                                            <p className="d-inline-flex align-items-center mb-0 me-2">
                                                <i className="ti ti-square-filled fs-12 text-light me-2" />
                                                Inactive Users
                                            </p>
                                        </div>
                                        <div className="dropdown">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-sm fs-12 btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                            >
                                                This Year
                                            </Link>
                                            <ul className="dropdown-menu  dropdown-menu-end p-2">
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        2024
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        2023
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        2022
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body py-0">
                                    <ReactApexChart
                                        id="user-chart"
                                        options={userchart}
                                        series={userchart.series}
                                        type="bar"
                                        height={185}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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






    )
}

export default UserReports
