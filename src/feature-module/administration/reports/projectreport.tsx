import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import Table from "../../../core/common/dataTable/index";
import { all_routes } from '../../router/all_routes';
import { Image } from 'primereact/image';
import { paymentReport } from '../../../core/data/json/paymentReport';
import { projectDetails } from '../../../core/data/json/projectDetails';
import ReactApexChart from 'react-apexcharts';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

const ProjectReport = () => {

    const data = projectDetails;
    const columns = [
        {
            title: "Project ID",
            dataIndex: "project_id",
            sorter: (a: any, b: any) => a.project_id.length - b.project_id.length,
        },
        {
            title: "Project Name",
            dataIndex: "project_name",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center file-name-icon">
                    <h6 className="fw-medium">
                        <Link to="#">{text}</Link>
                    </h6>
                </div>

            ),
            sorter: (a: any, b: any) => a.project_name.length - b.project_name.length,
        },
        {
            title: "Leader",
            dataIndex: "leader",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center file-name-icon">
                    <Link to="#" className="avatar avatar-md border avatar-rounded">
                        <ImageWithBasePath src={record.leader_image} className="img-fluid" alt="img" />
                    </Link>
                    <div className="ms-2">
                        <h6 className="fw-normal fs-14 text-gray-5">{record.leader}</h6>
                    </div>
                </div>

            ),
            sorter: (a: any, b: any) => a.leader.length - b.leader.length,
        },
        {
            title: "Team",
            dataIndex: "team",
            render: (text: String, record: any) => (
                <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar border-0">
                        <ImageWithBasePath
                            src={record.team_img_1}
                            className="rounded-circle"
                            alt="img"
                        />
                    </span>
                    <span className="avatar border-0">
                        <ImageWithBasePath
                            src={record.team_img_2}
                            className="rounded-circle"
                            alt="img"
                        />
                    </span>
                    <span className="avatar border-0">
                        <ImageWithBasePath
                            src={record.team_img_3}
                            className="rounded-circle"
                            alt="img"
                        />
                    </span>
                    <span className="avatar group-counts bg-primary rounded-circle border-0 fs-10">
                        {record.team_img_count}
                    </span>
                </div>

            ),
            sorter: (a: any, b: any) => a.team.length - b.team.length,
        },
        {
            title: "Deadline",
            dataIndex: "deadline",
            sorter: (a: any, b: any) => a.deadline.length - b.deadline.length,
        },
        {
            title: "Priority",
            dataIndex: "priority",
            render: (text: String, record: any) => (
                <span className={`badge  ${text === 'Low' ? 'badge-success-transparent' : text === 'Medium' ? 'badge-warning-transparent' : 'badge-danger-transparent'}`}>
                    <i className="ti ti-point-filled me-1"></i>{text}
                </span>
            ),
            sorter: (a: any, b: any) => a.priority.length - b.priority.length,
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text: String, record: any) => (
                <span className={`badge  d-inline-flex align-items-center badge-xs ${text === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                    <i className="ti ti-point-filled me-1" />
                    {text}
                </span>

            ),
            sorter: (a: any, b: any) => a.status.length - b.status.length,
        },
    ]
    //New Chart
    const [projectchart] = useState<any>({
        series: [30, 10, 20, 40],
        chart: {
            width: 280,
            type: 'pie',
        },
        labels: ['Pending', 'On Hold', 'In Progress', 'Completed'], // Set your labels here
        colors: ['#0DCAF0', '#AB47BC', '#FFC107', '#03C95A'], // Custom colors for each segment
        dataLabels: {
            enabled: false // Disable data labels to remove numbers
        },
        legend: {
            show: false // Hide the legend
        },
        tooltip: {
            y: {
                formatter: function (value: string, { seriesIndex }: any) {
                    return 'Value: ' + value; // Customize the tooltip text
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
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
                            <h2 className="mb-1">Project Report</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Project Report
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
                        <div className="col-lg-6 col-md-6 d-flex">
                            <div className="row flex-fill">
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div>
                                                <div className="mb-2">
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        Total Projects
                                                    </span>
                                                    <h5>300</h5>
                                                </div>
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Basic example"
                                                    aria-valuenow={0}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "100%", height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-pink"
                                                        style={{ width: "70%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +10.54%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div>
                                                <div className="mb-2">
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        Completed Projects
                                                    </span>
                                                    <h5>250</h5>
                                                </div>
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Basic example"
                                                    aria-valuenow={0}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "100%", height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-success"
                                                        style={{ width: "80%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +12.84%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div>
                                                <div className="mb-2">
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        Pending Projects
                                                    </span>
                                                    <h5>50</h5>
                                                </div>
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Basic example"
                                                    aria-valuenow={0}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "100%", height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-danger"
                                                        style={{ width: "20%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-danger fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        -10.75%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-body ">
                                            <div>
                                                <div className="mb-2">
                                                    <span className="fs-14 fw-normal text-truncate mb-1">
                                                        New Projects
                                                    </span>
                                                    <h5>30</h5>
                                                </div>
                                                <div
                                                    className="progress"
                                                    role="progressbar"
                                                    aria-label="Basic example"
                                                    aria-valuenow={0}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: "100%", height: 5 }}
                                                >
                                                    <div
                                                        className="progress-bar bg-purple"
                                                        style={{ width: "60%" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <p className="fs-12 fw-normal d-flex align-items-center text-truncate">
                                                    <span className="text-success fs-12 d-flex align-items-center me-1">
                                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                                        +15.74%
                                                    </span>
                                                    from last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Total Exponses */}
                        {/* Total Exponses */}
                        <div className="col-lg-6 col-md-6 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header border-0">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="d-flex align-items-center ">
                                            <span className="me-2">
                                                <i className="ti ti-chart-pie text-danger" />
                                            </span>
                                            <h5>Projects By Tasks</h5>
                                        </div>
                                        <div className="dropdown">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle btn btn-sm fs-12 btn-white d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                            >
                                                Office Management App
                                            </Link>
                                            <ul className="dropdown-menu  dropdown-menu-end p-2">
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        PRO-001
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        PRO-002
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                    >
                                                        PRO-004
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <ReactApexChart
                                                id="project-report"
                                                options={projectchart}
                                                series={projectchart.series}
                                                type="pie"
                                                height={246}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row gy-4">
                                                <div className="col-md-6">
                                                    <p className="fs-16 project-report-badge-blue fw-normal mb-0 text-gray-5">
                                                        Pending{" "}
                                                    </p>
                                                    <p className="fs-20 fw-bold text-dark ">30%</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="fs-16 project-report-badge-purple mb-0  fw-normal text-gray-5">
                                                        On Hold
                                                    </p>
                                                    <p className="fs-20 fw-bold text-dark ">10%</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="fs-16 project-report-badge-warning  mb-0 fw-normal text-gray-5">
                                                        Inprogress{" "}
                                                    </p>
                                                    <p className="fs-20 fw-bold text-dark ">20%</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="fs-16 project-report-badge-success  mb-0 fw-normal text-gray-5">
                                                        Completed
                                                    </p>
                                                    <p className="fs-20 fw-bold text-dark ">40%</p>
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
                            <h5>Project List</h5>
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
                                        Select Priority
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Low
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
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                High
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

export default ProjectReport
