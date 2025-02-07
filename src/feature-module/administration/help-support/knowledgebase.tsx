import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../router/all_routes'
import PredefinedDateRanges from '../../../core/common/datePicker'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'

const Knowledgebase = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Knowledgebase</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Administration</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Knowledgebase
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mb-2">
                            <div className="d-flex align-items-center">
                                <div className="dropdown ">
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
                                <div className="head-icons ms-2 mb-0">
                                    <CollapseHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5>Knowledgebase</h5>
                                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                                    <div className="me-3">
                                        <div className="input-icon-end position-relative">
                                            <PredefinedDateRanges />
                                            <span className="input-icon-addon">
                                                <i className="ti ti-chevron-down" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Introduction to HRMS{" "}
                                            <span className="text-primary">( 06 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            What is an HRMS and Why is it Important?{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            The Key Features of an HRMS Explained{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How HRMS Helps Automate HR Tasks{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            HRMS Terminology : A Beginner’s Guide{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Cloud vs On-Premise HRMS vs Hybrid{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Employee Self-Service (ESS){" "}
                                            <span className="text-primary">( 10 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to view &amp; update your personal information{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Steps to Apply for Leave via the Employee Portal{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to access and download your payslips{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Submitting &amp; Tracking Expense Reimbursements{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to track your attendance and work hours{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Manager Self-Service (MSS){" "}
                                            <span className="text-primary">( 12 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Approve or Reject Employee Requests{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Viewing and managing team attendance{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to conduct performance reviews{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Approving expense claims for your team{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to update &amp; view team’s work schedules{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Payroll Management{" "}
                                            <span className="text-primary">( 08 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How Payroll is Processed : A Step-by-Step Guide{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Deductions, Overtime, and Bonuses{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            What to Do if There’s a Payroll Discrepancy{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Access Historical Payroll Information{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Managing Employee Tax Information and Filing{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Attendance &amp; Time Tracking{" "}
                                            <span className="text-primary">( 07 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to clock in/out using the hrms portal{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Submitting timesheets for approval{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Tracking overtime &amp; managing work hours in hrms{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to view and manage shifts and schedules{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Generating attendance reports for your team{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Leave Management <span className="text-primary">( 06 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Request Casual or Medical Leave{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How Leave Balances Are Calculated in Hrms{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Leave Approval Workflow : Guide for Managers{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Viewing Your Leave History &amp; Pending Requests{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Understanding Different Types of Leaves{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Recruitment &amp; Onboarding{" "}
                                            <span className="text-primary">( 10 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Apply for Internal Job Postings in Hrms{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Creating &amp; Posting Job Openings as a Recruiter{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Tracking Applicants and Scheduling Interviews{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Complete New Hire Onboarding Process{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Uploading &amp; Verifying New Employee Documents{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Performance Management{" "}
                                            <span className="text-primary">( 13 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Setting and Tracking Your Employee Goals{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Conducting 360-degree Feedback in Hrms{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Complete a Performance Review{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Update Employee Development Plans{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Generating Performance Reports and Metrics{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="ti ti-folder text-primary fs-24 me-1" />
                                        <Link
                                            to="knowledgebase-view.html"
                                            className="text-dark fs-16 fw-medium text-truncate"
                                        >
                                            Reports &amp; Analytics{" "}
                                            <span className="text-primary">( 15 )</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Generate Employee Attendance Reports{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Creating Custom Payroll Reports{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Analyzing Workforce Metrics in Hrms{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2 pb-1">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            How to Track Performance Metrics and KPIs{" "}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="ti ti-file me-1" />
                                        <Link
                                            to="#"
                                            className="text-gray fs-14 fw-normal text-truncate"
                                        >
                                            Viewing and Analyzing Compensation{" "}
                                        </Link>
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
        </>

    )
}

export default Knowledgebase
