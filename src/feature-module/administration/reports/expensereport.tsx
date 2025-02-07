import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import { expenseDetails } from '../../../core/data/json/expenseDetails';
import Table from "../../../core/common/dataTable/index";
import ReactApexChart from "react-apexcharts";
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const ExpensesReport = () => {

    const data = expenseDetails;
    const columns = [
        {
            title: "Expense Name",
            dataIndex: "expense_name",
            render: (text: String) => (
                <h6 className="fs-14 fw-medium">{text}</h6>
            ),
            sorter: (a: any, b: any) => a.expense_name.length - b.expense_name.length,
        },
        {
            title: "Date",
            dataIndex: "date",
            sorter: (a: any, b: any) => a.date.length - b.date.length,
        },
        {
            title: "Payment Method",
            dataIndex: "payment_method",
            sorter: (a: any, b: any) => a.payment_method.length - b.payment_method.length,
        },
        {
            title: "Amount",
            dataIndex: "amount",
            sorter: (a: any, b: any) => a.amount.length - b.amount.length,
        },
    ]

    //New Chart
    const [expensechart] = useState<any>({
        series: [{
            name: "Sales Analysis",
            data: [10, 30, 18, 15, 22, 30, 40, 50, 40, 40, 60, 70]
        }],
        chart: {
            height: 190,
            type: 'area',
            zoom: {
                enabled: false
            }
        },
        colors: ['#FF9F43'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: '',
            align: 'left'
        },
        // grid: {
        //   row: {
        //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   },
        // },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        yaxis: {
            min: 10,
            max: 60,
            tickAmount: 5,
            labels: {
                offsetX: -15,
                formatter: (val: number) => {
                    return val / 1 + 'K'
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        }
    })

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Expense Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to="index.html">
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Expense Report
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
                        <div className="col-xl-6 d-flex">
                            <div className="row flex-fill">
                                <div className="col-md-6 d-flex">
                                    <div className="card flex-fill position-relative">
                                        <span className="position-absolute start-0 bottom-0">
                                            <ImageWithBasePath
                                                src="assets/img/reports-img/total-expense.svg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </span>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div>
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        Total Expense
                                                    </span>
                                                    <h5>$45,221</h5>
                                                </div>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md avatar-rounded bg-transparent-primary border border-primary"
                                                >
                                                    <span className="text-primary">
                                                        <i className="ti ti-brand-shopee" />
                                                    </span>
                                                </Link>
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
                                <div className="col-md-6 d-flex">
                                    <div className="card flex-fill position-relative">
                                        <span className="position-absolute start-0 bottom-0">
                                            <ImageWithBasePath
                                                src="assets/img/reports-img/approved-expense.svg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </span>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div>
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        Approved Expense
                                                    </span>
                                                    <h5>$45,221</h5>
                                                </div>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md avatar-rounded bg-transparent-success border border-success"
                                                >
                                                    <span className="text-success">
                                                        <i className="ti ti-brand-shopee" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                <span className="text-success fs-12 d-flex align-items-center me-1">
                                                    <i className="ti ti-arrow-wave-right-up me-1" />
                                                    +17.01%
                                                </span>{" "}
                                                from last week
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div className="card flex-fill position-relative">
                                        <span className="position-absolute start-0 bottom-0">
                                            <ImageWithBasePath
                                                src="assets/img/reports-img/pending-expense.svg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </span>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div>
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        Net Pay
                                                    </span>
                                                    <h5>$45,221,45</h5>
                                                </div>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md avatar-rounded bg-transparent-skyblue border border-skyblue"
                                                >
                                                    <span className="text-skyblue">
                                                        <i className="ti ti-brand-shopee" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                <span className="text-success fs-12 d-flex align-items-center me-1">
                                                    <i className="ti ti-arrow-wave-right-up me-1" />
                                                    +10.13%
                                                </span>{" "}
                                                from last week
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div className="card flex-fill position-relative">
                                        <span className="position-absolute start-0 bottom-0">
                                            <ImageWithBasePath
                                                src="assets/img/reports-img/reject-expense.svg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </span>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div>
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        Allowances
                                                    </span>
                                                    <h5>$45,221,45</h5>
                                                </div>
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-md avatar-rounded bg-transparent-danger border border-danger"
                                                >
                                                    <span className="text-danger">
                                                        <i className="ti ti-brand-shopee" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                <span className="text-danger fs-12 d-flex align-items-center me-1">
                                                    <i className="ti ti-arrow-wave-right-up me-1" />
                                                    -10.17%
                                                </span>{" "}
                                                from last week
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Total Exponses */}
                        {/* Total Exponses */}
                        <div className="col-xl-6 d-flex">
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
                                        id="expense-analysis"
                                        options={expensechart}
                                        series={expensechart.series}
                                        type="area"
                                        height={193}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /Total Exponses */}
                    </div>
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Expense List</h5>
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
                                                $3800
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $4500
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                $3400
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
                                        Payment Type
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Cash
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Cheque
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

export default ExpensesReport
