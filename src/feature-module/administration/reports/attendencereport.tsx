import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from "../../../core/common/dataTable/index";
import { all_routes } from '../../router/all_routes';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import { attendencereportDetails } from '../../../core/data/json/attendencereportDetails';
import PredefinedDateRanges from '../../../core/common/datePicker';
import ReactApexChart from 'react-apexcharts';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const AttendanceReport = () => {

    const data = attendencereportDetails;
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center">
                    <Link
                        to="#"
                        className="avatar avatar-md"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#view_details"
                    >
                        <ImageWithBasePath
                            src={`assets/img/users/${record.Image}`}
                            className="img-fluid rounded-circle"
                            alt="img"
                        />
                    </Link>
                    <div className="ms-2">
                        <p className="text-dark mb-0">
                            <Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#view_details">
                                {record.Name}
                            </Link>
                        </p>
                        <span className="fs-12">{record.Role}</span>
                    </div>
                </div>


            ),
            sorter: (a: any, b: any) => a.Name.length - b.Name.length,
        },
        {
            title: "Date",
            dataIndex: "Date",
            sorter: (a: any, b: any) => a.Date.length - b.Date.length,
        },
        {
            title: "Check in",
            dataIndex: "CheckIn",
            sorter: (a: any, b: any) => a.CheckIn.length - b.CheckIn.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text: String, record: any) => (
                <span className={`badge  d-inline-flex align-items-center badge-xs ${text === 'Present' ? 'badge-soft-success' : 'badge-soft-danger'}`}>
                    <i className="ti ti-point-filled me-1" />
                    {text}
                </span>

            ),
            sorter: (a: any, b: any) => a.Status.length - b.Status.length,
        },
        {
            title: "Check Out",
            dataIndex: "CheckOut",
            sorter: (a: any, b: any) => a.CheckOut.length - b.CheckOut.length,
        },
        {
            title: "Break",
            dataIndex: "Break",
            sorter: (a: any, b: any) => a.Break.length - b.Break.length,
        },
        {
            title: "Late",
            dataIndex: "Late",
            sorter: (a: any, b: any) => a.Late.length - b.Late.length,
        },
        {
            title: "Overtime",
            dataIndex: "Overtime",
            sorter: (a: any, b: any) => a.Overtime.length - b.Overtime.length,
        },
        {
            title: "Production Hours",
            dataIndex: "ProductionHours",
            render: (text: String, record: any) => (
                <span className={`badge d-inline-flex align-items-center badge-sm ${record.ProductionHours < '8.00'
                    ? 'badge-danger'
                    : record.ProductionHours >= '8.00' && record.ProductionHours <= '9.00'
                        ? 'badge-success'
                        : 'badge-info'
                    }`}
                >
                    <i className="ti ti-clock-hour-11 me-1"></i>{record.ProductionHours}
                </span>
            ),
            sorter: (a: any, b: any) => a.ProductionHours.length - b.ProductionHours.length,
        },
    ]
    //New Chart
    const [attendancechart] = useState<any>({
        series: [{
            name: "Present",
            data: [30, 65, 70, 75, 80, 95, 100, 70, 65] // Example data for Present
        }, {
            name: "Absent",
            data: [30, 55, 60, 65, 50, 70, 80, 60, 70] // Example data for Absent
        }],
        chart: {
            height: 200, // Change height here
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth' // Change to 'smooth' for a nicer appearance
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // alternating row colors
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }, yaxis: {
            labels: {
                offsetX: -15,
            }
        },
        colors: ['#28a745', '#ff69b4'] // Green for Present, Pink for Absent
    });

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Attendance Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Attendance Report
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
                                {/* Total Companies */}
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center overflow-hidden mb-2">
                                                <div className="attendence-icon">
                                                    <span>
                                                        <i className="ti ti-calendar text-primary" />
                                                    </span>
                                                </div>
                                                <div className="ms-2 overflow-hidden">
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Total Working Days
                                                    </p>
                                                    <h4>25</h4>
                                                </div>
                                            </div>
                                            <div className="attendance-report-bar mb-2">
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-success"
                                                        style={{ width: "85%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Total Companies */}
                                {/* Total Companies */}
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center overflow-hidden mb-2">
                                                <div className="attendence-icon">
                                                    <span>
                                                        <i className="ti ti-calendar text-info" />
                                                    </span>
                                                </div>
                                                <div className="ms-2 overflow-hidden">
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Total Leave Taken
                                                    </p>
                                                    <h4>12</h4>
                                                </div>
                                            </div>
                                            <div className="attendance-report-bar mb-2">
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-success"
                                                        style={{ width: "85%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Total Companies */}
                                {/* Inactive Companies */}
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center overflow-hidden mb-2">
                                                <div className="attendence-icon">
                                                    <span>
                                                        <i className="ti ti-calendar text-pink" />
                                                    </span>
                                                </div>
                                                <div className="ms-2 overflow-hidden">
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Total Holidays
                                                    </p>
                                                    <h4>6</h4>
                                                </div>
                                            </div>
                                            <div className="attendance-report-bar mb-2">
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-success"
                                                        style={{ width: "85%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Inactive Companies */}
                                {/* Company Location */}
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center overflow-hidden mb-2">
                                                <div className="attendence-icon">
                                                    <span>
                                                        <i className="ti ti-calendar text-warning" />
                                                    </span>
                                                </div>
                                                <div className="ms-2 overflow-hidden">
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Total Halfdays
                                                    </p>
                                                    <h4>5</h4>
                                                </div>
                                            </div>
                                            <div className="attendance-report-bar mb-2">
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Success example"
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-success"
                                                        style={{ width: "85%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Company Location */}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="d-flex align-items-center ">
                                            <span className="me-2">
                                                <i className="ti ti-chart-line text-danger" />
                                            </span>
                                            <h5>Attendance</h5>
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
                                <div className="card-body py-0 px-2">
                                    <ReactApexChart
                                        id="payslip-chart"
                                        options={attendancechart}
                                        series={attendancechart.series}
                                        type="line"
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Employee Attendance</h5>
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
                                        Select Status
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Present
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Absent
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

export default AttendanceReport
