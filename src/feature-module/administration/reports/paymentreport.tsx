import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import { all_routes } from '../../router/all_routes';
import { paymentReport } from '../../../core/data/json/paymentReport';
import ReactApexChart from 'react-apexcharts';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const PaymentReport = () => {

    const data = paymentReport;
    const columns = [
        {
            title: "Invoice ID",
            dataIndex: "invoice_id",
            render: () => (
                <Link to={all_routes.invoiceDetails} className="link-default">
                    Inv-010
                </Link>

            ),
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
            title: "Payment Type",
            dataIndex: "payment_type",
            sorter: (a: any, b: any) => a.payment_type.length - b.payment_type.length,
        },
        {
            title: "Paid Date",
            dataIndex: "paid_date",
            sorter: (a: any, b: any) => a.paid_date.length - b.paid_date.length,
        },
        {
            title: "Paid Amount",
            dataIndex: "amount",
            sorter: (a: any, b: any) => a.amount.length - b.amount.length,
        },
    ]
    //New Chart
    const [paymentreport] = useState<any>({
        series: [44, 55, 41, 17],
        chart: {
            type: 'donut',
        },
        colors: ['#0DCAF0', '#FD3995', '#AB47BC', '#FFC107'],
        labels: ['Paypal', 'Debit Card', 'Bank Transfer', 'Credit Card'],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                stroke: {
                    show: true,
                    width: 10, // Width of the gap
                    colors: ['#FFFFFF'] // Color of the gap
                },
                donut: {
                    size: '80%' // Adjusts the size of the donut hole
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false // Set this to false to hide the legend
        },
        annotations: {
            position: 'front', // Ensure it appears above other elements
            style: {
                fontSize: '24px', // Adjust font size
                fontWeight: 'bold',
                color: '#000000' // Change color if needed
            },
            text: {
                // Set the annotation text
                text: '+14%',
                // Optional styling for the text box
                background: {
                    enabled: true,
                    foreColor: '#FFFFFF', // Text color
                    border: '#000000', // Border color
                    borderWidth: 1,
                    borderRadius: 2,
                    opacity: 0.7
                }
            },
            x: '50%', // Center horizontally
            y: '50%', // Center vertically
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false // Also hide legend on smaller screens
                }
            }
        }]
    });

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Payment Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Payment Report
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
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom pb-2">
                                                <div className="d-flex align-items-center flex-column overflow-hidden">
                                                    <div>
                                                        <div>
                                                            <span className="fs-14 fw-normal text-truncate mb-1">
                                                                Total Payments
                                                            </span>
                                                            <h5>$45,221,45</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-md br-5 payment-report-icon  bg-transparent-primary border border-primary"
                                                    >
                                                        <span className="text-primary">
                                                            <i className="ti ti-currency-dollar" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-2">
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
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
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom pb-2">
                                                <div className="d-flex align-items-center flex-column overflow-hidden">
                                                    <div>
                                                        <div>
                                                            <span className="fs-14 fw-normal text-truncate mb-1">
                                                                Pending Payments
                                                            </span>
                                                            <h5>$45,221,45</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-md br-5 payment-report-icon  bg-transparent-skyblue border border-skyblue"
                                                    >
                                                        <span className="text-skyblue">
                                                            <i className="ti ti-currency-dollar" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-2">
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
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom pb-2">
                                                <div className="d-flex align-items-center flex-column overflow-hidden">
                                                    <div>
                                                        <div>
                                                            <span className="fs-14 fw-normal text-truncate mb-1">
                                                                Failed Payments
                                                            </span>
                                                            <h5>$10,470</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-md br-5 payment-report-icon  bg-transparent-danger border border-danger"
                                                    >
                                                        <span className="text-danger">
                                                            <i className="ti ti-currency-dollar" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-2">
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-danger fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +20.01%
                                                    </span>{" "}
                                                    from last week
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom pb-2">
                                                <div className="d-flex align-items-center flex-column overflow-hidden">
                                                    <div>
                                                        <div>
                                                            <span className="fs-14 fw-normal text-truncate mb-1">
                                                                Payment Success Rate
                                                            </span>
                                                            <h5>90%</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-md br-5 payment-report-icon  bg-pink-transparent border border-pink"
                                                    >
                                                        <span className="text-pink">
                                                            <i className="ti ti-currency-dollar" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-2">
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
                                </div>
                            </div>
                        </div>
                        {/* /Total Exponses */}
                        {/* Total Exponses */}
                        <div className="col-xl-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header border-0">
                                    <div className="d-flex flex-wrap row-gap-2 justify-content-between align-items-center">
                                        <div className="d-flex align-items-center ">
                                            <span className="me-2">
                                                <i className="ti ti-chart-donut text-danger" />
                                            </span>
                                            <h5>Payments By Payment Methods </h5>
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
                                <div className="card-body d-flex align-items-center justify-content-between pt-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="position-relative payment-total">
                                                <ReactApexChart
                                                    id="payment-report"
                                                    options={paymentreport}
                                                    series={paymentreport.series}
                                                    type="donut"
                                                    height={195}
                                                />
                                                <div className="payment-total-content ">
                                                    <span className="display-3 fs-24 fw-bold text-skyblue">
                                                        +14%
                                                    </span>
                                                    <p className="fs-16 fw-normal">vs last year</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row gy-4">
                                                <div className="col-md-6">
                                                    <h6 className="fs-16 text-gray-5 fw-normal side-badge mb-1">
                                                        Paypal
                                                    </h6>
                                                    <h5 className="fs-20 fw-bold">$54,071 </h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="fs-16 text-gray-5 fw-normal side-badge-pink mb-1">
                                                        {" "}
                                                        Debit Card
                                                    </h6>
                                                    <h5 className="fs-20 fw-bold">$54,071 </h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="fs-16 text-gray-5 fw-normal side-badge-purple mb-1">
                                                        {" "}
                                                        Bank Transfer
                                                    </h6>
                                                    <h5 className="fs-20 fw-bold">$32,210</h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <h6 className="fs-16 text-gray-5 fw-normal side-badge-warning mb-1">
                                                        {" "}
                                                        Credit Card
                                                    </h6>
                                                    <h5 className="fs-20 fw-bold">$32,210 </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Total Exponses */}
                    </div>
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Payment List</h5>
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
                                        Payment Type
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Paypal
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Cash
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

export default PaymentReport
