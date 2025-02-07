import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { estimate_details } from "../../../core/data/json/estimates-details";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Table from "../../../core/common/dataTable/index";
import PredefinedDateRanges from "../../../core/common/datePicker";
import { payment_details } from "../../../core/data/json/payments_details";
import { expenses_details } from "../../../core/data/json/expenses_details";
import { DatePicker } from "antd";
import CommonSelect from "../../../core/common/commonSelect";
import { provident_funds } from "../../../core/data/json/provident_funds_details";
import { taxs_details } from "../../../core/data/json/taxs_details";
import { employee_salary_details } from "../../../core/data/json/employee_salary_details";
import { render } from "react-dom";
import { label } from "yet-another-react-lightbox/*";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const EmployeeSalary = () => {
    const getModalContainer = () => {
        const modalElement = document.getElementById("modal-datepicker");
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };

    const data = employee_salary_details;
    const columns = [
        {
            title: "Emp ID",
            dataIndex: "EmpID",
            sorter: (a: any, b: any) =>
                a.EmpID.length - b.EmpID.length,
        },
        {
            title: "Name",
            dataIndex: "Name",
            render: (text: String, record: any) => (
                <div className="d-flex align-items-center file-name-icon">
                    <Link to="#" className="avatar avatar-md ">
                        <ImageWithBasePath
                            src={`assets/img/users/${record.Image}`}
                            className="img-fluid rounded-circle"
                            alt="img"
                        />
                    </Link>
                    <div className="ms-2">
                        <h6 className="fw-medium">
                            <Link to="#">{record.Name}</Link>
                        </h6>
                        <span className="d-block mt-1">{record.Department}</span>
                    </div>
                </div>

            ),
            sorter: (a: any, b: any) =>
                a.Name.length - b.Name.length,
        },
        {
            title: "Email",
            dataIndex: "Email",
            sorter: (a: any, b: any) =>
                a.Email.length - b.Email.length,
        },
        {
            title: "Phone",
            dataIndex: "Phone",
            sorter: (a: any, b: any) =>
                a.Phone.length - b.Phone.length,
        },
        {
            title: "Designation",
            dataIndex: "Designation",
            render: (text: String, record: any) => (
                <div className="dropdown">
                    <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                    >
                        <span className="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2" />{" "}
                        {text}
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                            >
                                <span className="rounded-circle bg-transparent-success d-flex justify-content-center align-items-center me-2" />
                                Finance
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                            >
                                <span className="rounded-circle bg-transparent-skyblue d-flex justify-content-center align-items-center me-2" />
                                Developer{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                            >
                                <span className="rounded-circle bg-transparent-skyblue d-flex justify-content-center align-items-center me-2" />
                                Executive{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item rounded-1 d-flex justify-content-start align-items-center"
                            >
                                <span className="rounded-circle bg-transparent-skyblue d-flex justify-content-center align-items-center me-2" />
                                Manager{" "}
                            </Link>
                        </li>
                    </ul>
                </div>

            ),
            sorter: (a: any, b: any) =>
                a.Designation.length - b.Designation.length,
        },
        {
            title: "Joining Date",
            dataIndex: "JoiningDate",
            sorter: (a: any, b: any) =>
                a.JoiningDate.length - b.JoiningDate.length,
        },
        {
            title: "Salary",
            dataIndex: "Salary",
            sorter: (a: any, b: any) =>
                a.Salary.length - b.Salary.length,
        },
        {
            title: "Payslip",
            dataIndex: "PaySlip",
            render: (text: String, record: any) => (
                <span className="badge badge-dark badge-md">{text}</span>

            ),
            sorter: (a: any, b: any) =>
                a.PaySlip.length - b.PaySlip.length,
        },
        {
            title: "",
            dataIndex: "action",
            render: (text: String, record: any) => (
                <div className="action-icon d-inline-flex">
                    <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-employee-salary"
                    >
                        <i className="ti ti-edit" />
                    </Link>
                    <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                    >
                        <i className="ti ti-trash" />
                    </Link>
                </div>
            ),
            sorter: (a: any, b: any) => a.action.length - b.action.length,
        },
    ];
    const employeeName = [
        { value: "Select", label: "Select" },
        { value: "Anthony Lewis", label: "Anthony Lewis" },
        { value: "Brian Villalobos", label: "Brian Villalobos" },
        { value: "Doglas Martini", label: "Doglas Martini" },
    ];

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Employee Salary</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Employee Salary
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
                                    data-bs-toggle="modal"
                                    data-bs-target="#new-employee-salary"
                                    className="btn btn-primary d-flex align-items-center"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Add Salary
                                </Link>
                            </div>
                            <div className="head-icons ms-2">
                            <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Employee Salary List</h5>
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
                                                Finance
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Developer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Executive
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Manager
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
            {/* Add Termination */}
            <div className="modal fade" id="new-employee-salary">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Employee Salary</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="employee-salary.html">
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Employee Name&nbsp;</label>
                                            <CommonSelect
                                                className='select'
                                                options={employeeName}
                                                defaultValue={employeeName[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Net Salary&nbsp;</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row earning-row">
                                    <div className="d-flex justify-content-between mb-3">
                                        <label className="form-label">Earnings</label>
                                        <Link to="#" className="add-earnings text-primary mb-2">
                                            <i className="ti ti-plus me-2" />
                                            Add New
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Basic</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">DA(40%)</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">HRA(15%)</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Conveyance</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Allowance&nbsp;</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Medical Allowance</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Others</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row deduction-row">
                                    <div className="d-flex justify-content-between mb-3">
                                        <label className="form-label">Deductions</label>
                                        <Link to="#" className="add-deduction text-primary mb-2">
                                            <i className="ti ti-plus me-2" />
                                            Add New
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">TDS</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">ESI</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">PF</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Leave</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Prof.Tax</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Labour Welfare</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Others</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-white border me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Add Employee Salary
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Termination */}
            {/* Edit Termination */}
            <div className="modal fade" id="edit-employee-salary">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Employee Salary</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="employee-salary.html">
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Employee Name&nbsp;</label>
                                            <CommonSelect
                                                className='select'
                                                options={employeeName}
                                                defaultValue={employeeName[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Net Salary&nbsp;</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row earning-row">
                                    <div className="d-flex justify-content-between mb-3">
                                        <label className="form-label">Earnings</label>
                                        <Link to="#" className="add-earnings text-primary mb-2">
                                            <i className="ti ti-plus me-2" />
                                            Add New
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Basic</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$40000"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">DA(40%)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$16000"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">HRA(15%)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$2666"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Conveyance</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$2000"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Allowance&nbsp;</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$1000"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Medical Allowance</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$2000"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Others</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row deduction-row">
                                    <div className="d-flex justify-content-between mb-3">
                                        <label className="form-label">Deductions</label>
                                        <Link to="#" className="add-deduction text-primary mb-2">
                                            <i className="ti ti-plus me-2" />
                                            Add New
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">TDS</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$4000"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">ESI</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$2000"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">PF</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$3000"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Leave</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$1000"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Prof.Tax</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$800"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Labour Welfare</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$500"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Others</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="$100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-white border me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Add Employee Salary
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Termination */}
        </>


    );
};

export default EmployeeSalary;
