import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from "../../../core/common/dataTable/index";
import { all_routes } from '../../router/all_routes';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import { attendencereportDetails } from '../../../core/data/json/attendencereportDetails';
import PredefinedDateRanges from '../../../core/common/datePicker';
import { leavereportDetails } from '../../../core/data/json/leavereportDetails';
import ReactApexChart from 'react-apexcharts';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const LeaveReport = () => {

    const data = leavereportDetails;
    const columns = [
        {
            title: "Invoice ID",
            dataIndex: "InvoiceID",
            render: (text: String, record: any) => (
                <Link to={all_routes.invoiceDetails} className="link-default">{text}</Link>
            ),
            sorter: (a: any, b: any) => a.InvoiceID.length - b.InvoiceID.length,
        },
        {
            title: "Client Name",
            dataIndex: "ClientName",
            render: (text: String, record: any) => (

                <div className="d-flex align-items-center">
                    <Link
                        to="#"
                        className="avatar avatar-md"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#view_details"
                    >
                        <ImageWithBasePath
                            src={`assets/img/reports/${record.Image}`}
                            className="img-fluid rounded-circle"
                            alt="img"
                        />
                    </Link>
                    <div className="ms-2">
                        <p className="text-dark mb-0">
                            <Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#view_details">
                                {record.ClientName}
                            </Link>
                        </p>
                        <span className="fs-12">{record.Role}</span>
                    </div>
                </div>

            ),
            sorter: (a: any, b: any) => a.ClientName.length - b.ClientName.length,
        },
        {
            title: "Company Name",
            dataIndex: "CompanyName",
            sorter: (a: any, b: any) => a.CompanyName.length - b.CompanyName.length,
        },
        {
            title: "Created Date",
            dataIndex: "CreatedDate",
            sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
        },
        {
            title: "Due Date",
            dataIndex: "DueDate",
            sorter: (a: any, b: any) => a.DueDate.length - b.DueDate.length,
        },
        {
            title: "Amount",
            dataIndex: "Amount",
            sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
        },
        {
            title: "Status",
            dataIndex: "Status",
            render: (text: String, record: any) => (
                <span className={`badge  d-inline-flex align-items-center badge-xs ${text === 'Paid' ? 'badge-soft-success' : text === 'Sent' ? 'badge-soft-purple' : 'badge-soft-warning'}`}>
                    {text}
                </span>


            ),
            sorter: (a: any, b: any) => a.Status.length - b.Status.length,
        },
    ]
    //New Chart
    const [leavechart] = useState<any>({
        series: [{
            name: 'Annual Leave',
            data: [30, 40, 35, 50, 50, 60, 30, 40, 35, 50, 50, 60] // Replace with your data
        }, {
            name: 'Casual Leave',
            data: [20, 30, 25, 40, 50, 60, 20, 30, 25, 40, 50, 60] // Replace with your data
        }, {
            name: 'Medical Leave',
            data: [15, 10, 20, 15, 50, 60, 15, 10, 20, 15, 50, 60] // Replace with your data
        }, {
            name: 'Others',
            data: [25, 20, 30, 35, 50, 60, 25, 20, 30, 35, 50, 60] // Replace with your data
        },
        ],
        chart: {
            type: 'bar',
            height: 210, // Change this value to your desired height
            stacked: true,
            stackType: '100%'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',] // Update to match your time frame
        },
        yaxis: {
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
        colors: ['#03C95A', '#FFC107', '#0C4B5E', '#F26522'], // Set your colors here
        dataLabels: {
            enabled: false // Disable data labels
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
                            <h2 className="mb-1">Leave Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="index.html">
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Leave Report
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
                                            <div className="d-flex align-items-center justify-content-between mb-2 overflow-hidden">
                                                <div>
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Total Leaves
                                                    </p>
                                                    <h4>15</h4>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-primary bg-transparent-primary rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-calendar-x text-primary" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-2 bg-gray-100 br-5">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="fs-12 fw-normal mb-0">Last Month</p>
                                                    <span className="fs-12 fw-normal text-success d-flex align-items-center">
                                                        <i className="ti ti-arrow-wave-right-up text-success me-1" />
                                                        +17.02%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Total Companies */}
                                {/* Total Companies */}
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2 overflow-hidden">
                                                <div>
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Approved Leaves
                                                    </p>
                                                    <h4>15</h4>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-success bg-transparent-success rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-calendar-x text-success" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-2 bg-gray-100 br-5">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="fs-12 fw-normal mb-0">Last Month</p>
                                                    <span className="fs-12 fw-normal text-success d-flex align-items-center">
                                                        <i className="ti ti-arrow-wave-right-up text-success me-1" />
                                                        +17.02%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Total Companies */}
                                {/* Inactive Companies */}
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2 overflow-hidden">
                                                <div>
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Pending Requests
                                                    </p>
                                                    <h4>5</h4>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-skyblue bg-transparent-skyblue rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-calendar-x text-skyblue" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-2 bg-gray-100 br-5">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="fs-12 fw-normal mb-0">Last Month</p>
                                                    <span className="fs-12 fw-normal text-success d-flex align-items-center">
                                                        <i className="ti ti-arrow-wave-right-up text-success me-1" />
                                                        +17.02%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Inactive Companies */}
                                {/* Company Location */}
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2 overflow-hidden">
                                                <div>
                                                    <p className="fs-12 fw-normal mb-1 text-truncate">
                                                        Rejected Leaves
                                                    </p>
                                                    <h4>5</h4>
                                                </div>
                                                <div className="leave-report-icon">
                                                    <Link to="#">
                                                        <span className="p-2 border border-danger bg-transparent-danger rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ti ti-calendar-x text-danger" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-2 bg-gray-100 br-5">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="fs-12 fw-normal mb-0">Last Month</p>
                                                    <span className="fs-12 fw-normal text-success d-flex align-items-center">
                                                        <i className="ti ti-arrow-wave-right-up text-success me-1" />
                                                        +17.02%
                                                    </span>
                                                </div>
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
                                            <h5>Leaves </h5>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="d-inline-flex align-items-center me-2 mb-0">
                                                <i className="ti ti-square-filled fs-12 text-success me-2" />
                                                Annual
                                            </p>
                                            <p className="d-inline-flex align-items-center mb-0 me-2">
                                                <i className="ti ti-square-filled fs-12 text-warning me-2" />
                                                Casual
                                            </p>
                                            <p className="d-inline-flex align-items-center mb-0 me-2">
                                                <i className="ti ti-square-filled fs-12 text-dark me-2" />
                                                Medical
                                            </p>
                                            <p className="d-inline-flex align-items-center">
                                                <i className="ti ti-square-filled fs-12 text-primary me-2" />
                                                Others
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
                                        id="payslip-chart"
                                        options={leavechart}
                                        series={leavechart.series}
                                        type="bar"
                                        height={210}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Invoice List</h5>
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
                                        $0.00 - $0.00
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $3000
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $2500
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $2800
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
                                                Paid
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Sent
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Partially Paid
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

export default LeaveReport
