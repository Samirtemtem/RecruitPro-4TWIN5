import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import Table from "../../../core/common/dataTable/index";
import { all_routes } from '../../router/all_routes';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import { employeereportDetails } from '../../../core/data/json/employeereportDetails';
import ReactApexChart from 'react-apexcharts';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const EmployeeReports = () => {

    const data = employeereportDetails;
    const columns = [
        {
            title: "Emp ID",
            dataIndex: "EmpID",
            render: (text: String, record: any) => (
                <Link to={all_routes.employeedetails} className="link-default">Emp-001</Link>

            ),
            sorter: (a: any, b: any) => a.EmpID.length - b.EmpID.length,
        },
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
            title: "Email",
            dataIndex: "Email",
            sorter: (a: any, b: any) => a.Email.length - b.Email.length,
        },
        {
            title: "Department",
            dataIndex: "Department",
            sorter: (a: any, b: any) => a.Department.length - b.Department.length,
        },
        {
            title: "Phone",
            dataIndex: "Phone",
            sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
        },
        {
            title: "Joining Date",
            dataIndex: "JoiningDate",
            sorter: (a: any, b: any) => a.JoiningDate.length - b.JoiningDate.length,
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
    const [employeechart] = useState<any>({
        series: [{
            name: 'Active Employees',
            data: [50, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Inactive Employees',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        chart: {
            type: 'bar',
            height: 180
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        colors: ['#03C95A', '#E8E9EA'], // Active Employees - Green, Inactive Employees - Gray
        dataLabels: {
            enabled: false, // Disable data labels
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        }, yaxis: {
            labels: {
                offsetX: -15,
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false
        },
        tooltip: {
            y: {
                formatter: function (val: string) {
                    return "$ " + val + " thousands";
                }
            }
        }
    });

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Employee Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Employee Report
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
                                            <div className="overflow-hidden d-flex mb-2 align-items-center">
                                                <span className="me-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/reports-img/employee-report-icon.svg"
                                                        alt="Img"
                                                        className="img-fluid"
                                                    />
                                                </span>
                                                <div>
                                                    <p className="fs-14 fw-normal mb-1 text-truncate">
                                                        Total Employee
                                                    </p>
                                                    <h5>600</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate ">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last week
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
                                            <div className="overflow-hidden d-flex mb-2 align-items-center">
                                                <span className="me-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/reports-img/employee-report-success.svg"
                                                        alt="Img"
                                                        className="img-fluid"
                                                    />
                                                </span>
                                                <div>
                                                    <p className="fs-14 fw-normal mb-1 text-truncate">
                                                        Active Employee
                                                    </p>
                                                    <h5>600</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate ">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last week
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
                                            <div className="overflow-hidden d-flex mb-2 align-items-center">
                                                <span className="me-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/reports-img/employee-report-info.svg"
                                                        alt="Img"
                                                        className="img-fluid"
                                                    />
                                                </span>
                                                <div>
                                                    <p className="fs-14 fw-normal mb-1 text-truncate">
                                                        New Employee
                                                    </p>
                                                    <h5>600</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate ">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last week
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
                                            <div className="overflow-hidden d-flex mb-2 align-items-center">
                                                <span className="me-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/reports-img/employee-report-danger.svg"
                                                        alt="Img"
                                                        className="img-fluid"
                                                    />
                                                </span>
                                                <div>
                                                    <p className="fs-14 fw-normal mb-1 text-truncate">
                                                        Inactive Employee
                                                    </p>
                                                    <h5>600</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate ">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>
                                                    from last week
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Company Location */}
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center row-gap-2">
                                        <div className="d-flex align-items-center ">
                                            <span className="me-2">
                                                <i className="ti ti-chart-bar text-danger" />
                                            </span>
                                            <h5>Employee </h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="d-inline-flex align-items-center me-3 mb-0">
                                                <i className="ti ti-square-filled fs-12 text-success me-2" />
                                                Active Employees
                                            </p>
                                            <p className="d-inline-flex align-items-center">
                                                <i className="ti ti-square-filled fs-12 text-gray-1 me-2 mb-0" />
                                                Inactive Employees
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
                                        id="employee-reports"
                                        options={employeechart}
                                        series={employeechart.series}
                                        type="bar"
                                        height={180}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Employees List</h5>
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
                                        Designation
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

export default EmployeeReports
