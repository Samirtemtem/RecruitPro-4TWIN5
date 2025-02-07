import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import { invoiceDetails } from '../../../core/data/json/invoiceDetails';
import { all_routes } from '../../router/all_routes';
import ReactApexChart from 'react-apexcharts';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';


const InvoiceReport = () => {

    const data = invoiceDetails;
    const columns = [
        {
            title: "Invoice ID",
            dataIndex: "invoice_id",
            sorter: (a: any, b: any) => a.invoice_id.length - b.invoice_id.length,
        },
        {
            title: "Client Name",
            dataIndex: "client_name",
            render: (text: String, record: any) => (
                <><div className="d-flex align-items-center file-name-icon">
                    <Link to="#" className="avatar avatar-md border avatar-rounded">
                        <ImageWithBasePath src={record.image_url} className="img-fluid" alt="img" />
                    </Link>
                    <div className="ms-2">
                        <h6 className="fw-medium">
                            <Link to="#">{record.client_name}</Link>
                        </h6>
                        <span className="fs-12 fw-normal">{record.position}</span>
                    </div>
                </div>
                </>
            ),
            sorter: (a: any, b: any) => a.client_name.length - b.client_name.length,
        },
        {
            title: "Company Name",
            dataIndex: "company_name",
            sorter: (a: any, b: any) => a.company_name.length - b.company_name.length,
        },
        {
            title: "Created Date",
            dataIndex: "created_date",
            sorter: (a: any, b: any) => a.created_date.length - b.created_date.length,
        },
        {
            title: "Due Date",
            dataIndex: "due_date",
            sorter: (a: any, b: any) => a.due_date.length - b.due_date.length,
        },
        {
            title: "Amount",
            dataIndex: "amount",
            sorter: (a: any, b: any) => a.amount.length - b.amount.length,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text: String) => (
                <span className={`badge ${text === 'Paid' ? 'badge-success-transparent' : text === 'Sent' ? 'badge-purple-transparent' : 'badge-warning-transparent'}`}>{text}</span>

            ),
            sorter: (a: any, b: any) => a.status.length - b.status.length,
        },
    ]
    //New Chart
    const [invoicechart] = useState<any>({
        series: [
            {
                name: 'Total Invoices',
                data: [40, 30, 40, 30, 40, 30], // Ensure data length matches categories
            },
            {
                name: 'Paid Invoices',
                data: [20, 10, 20, 10, 20, 10], // Ensure data length matches categories
            },
        ],
        chart: {
            height: 250,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
        },
        xaxis: {
            type: 'category',
            categories: ['January', 'February', 'March', 'April', 'May', 'June'], // Match data points
        },
        yaxis: {
            labels: {
                offsetX: -15,
                formatter: function (value: number) {
                    return value + 'k'; // Ensure formatter returns a string
                },
            },
        },
        tooltip: {
            x: {
                formatter: function (value: string) {
                    return value; // Tooltip shows month labels
                },
            },
            y: {
                formatter: function (value: number) {
                    return value + 'k'; // Tooltip shows amounts with 'k' suffix
                },
            },
        },
        colors: ['#FD3995', '#FF9F43'],
    });

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Invoice Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Invoice Report
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
                        {/* Total Exponses */}
                        <div className="col-xl-7 d-flex">
                            <div className="row flex-fill">
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card invoice-report  flex-fill">
                                        <span className="invoice-report-badge"></span>
                                        <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span className="fs-14 fw-normal text-truncate mb-1">
                                                            Total Invoice
                                                        </span>
                                                        <h5>600</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <span className="badge badge-sm badge-success me-3">
                                                    +19.01%
                                                </span>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md br-10  bg-transparent-primary border border-primary"
                                                >
                                                    <span className="text-primary">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card invoice-report  flex-fill">
                                        <span className="invoice-report-badge-warning"></span>
                                        <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span className="fs-14 fw-normal text-truncate mb-1">
                                                            Partially Paid
                                                        </span>
                                                        <h5>80</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <span className="badge badge-sm badge-success me-3">
                                                    +19.01%
                                                </span>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md br-10  bg-transparent-primary border border-primary"
                                                >
                                                    <span className="text-primary">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card invoice-report  flex-fill">
                                        <span className="invoice-report-badge-success"></span>
                                        <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span className="fs-14 fw-normal text-truncate mb-1">
                                                            Paid Invoices
                                                        </span>
                                                        <h5>450</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <span className="badge badge-sm badge-success me-3">
                                                    +19.01%
                                                </span>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md br-10  bg-transparent-primary border border-primary"
                                                >
                                                    <span className="text-primary">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card invoice-report  flex-fill">
                                        <span className="invoice-report-badge-purple"></span>
                                        <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span className="fs-14 fw-normal text-truncate mb-1">
                                                            Overdue Invoices
                                                        </span>
                                                        <h5>40</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <span className="badge badge-sm badge-success me-3">
                                                    +19.01%
                                                </span>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md br-10  bg-transparent-primary border border-primary"
                                                >
                                                    <span className="text-primary">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card invoice-report  flex-fill">
                                        <span className="invoice-report-badge-danger"></span>
                                        <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span className="fs-14 fw-normal text-truncate mb-1">
                                                            Unpaid Invoices
                                                        </span>
                                                        <h5>150</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <span className="badge badge-sm badge-success me-3">
                                                    +19.01%
                                                </span>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md br-10  bg-transparent-primary border border-primary"
                                                >
                                                    <span className="text-primary">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card invoice-report  flex-fill">
                                        <span className="invoice-report-badge-skyblue"></span>
                                        <div className="card-body d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="d-flex align-items-center flex-column overflow-hidden">
                                                <div>
                                                    <div>
                                                        <span className="fs-14 fw-normal text-truncate mb-1">
                                                            Revenue
                                                        </span>
                                                        <h5>$25,340</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <span className="badge badge-sm badge-success me-3">
                                                    +19.01%
                                                </span>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md br-10  bg-transparent-primary border border-primary"
                                                >
                                                    <span className="text-primary">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Total Exponses */}
                        {/* Total Exponses */}
                        <div className="col-xl-5 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="d-flex align-items-center ">
                                            <span className="me-2">
                                                <i className="ti ti-chart-area-line text-danger" />
                                            </span>
                                            <h5>Expense </h5>
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
                                        id="invoice-report"
                                        options={invoicechart}
                                        series={invoicechart.series}
                                        type="area"
                                        height={250}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /Total Exponses */}
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
                                        $0.00 - $00
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $10 - $20
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $20 - $30
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $30 - $40
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

export default InvoiceReport
