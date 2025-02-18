import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import Table from "../../../core/common/dataTable/index";
import { all_routes } from '../../router/all_routes';
import ImageWithBasePath from '../../../core/common/imageWithBasePath';
import { employeereportDetails } from '../../../core/data/json/employeereportDetails';
import { DatePicker, TimePicker } from "antd";
import CommonSelect from '../../../core/common/commonSelect';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';
type PasswordField = "password" | "confirmPassword";

const EmployeeDetails = () => {

    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field: PasswordField) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };
    const getModalContainer2 = () => {
        const modalElement = document.getElementById('modal_datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };

    const data = employeereportDetails;
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            render: (text: String, record: any) => (
                <Link to={all_routes.employeedetails} className="link-default">Emp-001</Link>

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

    const departmentChoose = [
        { value: "Select", label: "Select" },
        { value: "All Department", label: "All Department" },
        { value: "Finance", label: "Finance" },
        { value: "Developer", label: "Developer" },
        { value: "Executive", label: "Executive" },
    ];
    const designationChoose = [
        { value: "Select", label: "Select" },
        { value: "Finance", label: "Finance" },
        { value: "Developer", label: "Developer" },
        { value: "Executive", label: "Executive" },
    ];
    const martialstatus = [
        { value: "Select", label: "Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];
    const salaryChoose = [
        { value: "Select", label: "Select" },
        { value: "Monthly", label: "Monthly" },
        { value: "Annualy", label: "Annualy" },
    ];
    const paymenttype = [
        { value: "Select", label: "Select" },
        { value: "Cash", label: "Cash" },
        { value: "Debit Card", label: "Debit Card" },
        { value: "Mobile Payment", label: "Mobile Payment" },
    ];
    const pfcontribution = [
        { value: "Select", label: "Select" },
        { value: "Employee Contribution", label: "Employee Contribution" },
        { value: "Employer Contribution", label: "Employer Contribution" },
        { value: "Provident Fund Interest", label: "Provident Fund Interest" },
    ];
    const additionalrate = [
        { value: "Select", label: "Select" },
        { value: "ESI", label: "ESI" },
        { value: "EPS", label: "EPS" },
        { value: "EPF", label: "EPF" },
    ];
    const esi = [
        { value: "Select", label: "Select" },
        { value: "Employee Contribution", label: "Employee Contribution" },
        { value: "Employer Contribution", label: "Employer Contribution" },
        { value: "Maternity Benefit ", label: "Maternity Benefit " },
    ];

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                                <Link to={all_routes.employeeList}>
                                    <i className="ti ti-arrow-left me-2" />
                                    Employee Details
                                </Link>
                            </h6>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="mb-2">
                                <Link
                                    to="#"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#add_bank_satutory"
                                    className="btn btn-primary d-flex align-items-center"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Bank &amp; Statutory
                                </Link>
                            </div>
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    <div className="row">
                        <div className="col-xl-4 theiaStickySidebar">
                            <div className="card card-bg-1">
                                <div className="card-body p-0">
                                    <span className="avatar avatar-xl avatar-rounded border border-2 border-white m-auto d-flex mb-2">
                                        <ImageWithBasePath
                                            src="assets/img/users/user-13.jpg"
                                            className="w-auto h-auto"
                                            alt="Img"
                                        />
                                    </span>
                                    <div className="text-center px-3 pb-3 border-bottom">
                                        <div className="mb-3">
                                            <h5 className="d-flex align-items-center justify-content-center mb-1">
                                                Stephan Peralt
                                                <i className="ti ti-discount-check-filled text-success ms-1" />
                                            </h5>
                                            <span className="badge badge-soft-dark fw-medium me-2">
                                                <i className="ti ti-point-filled me-1" />
                                                Software Developer
                                            </span>
                                            <span className="badge badge-soft-secondary fw-medium">
                                                10+ years of Experience
                                            </span>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-id me-2" />
                                                    Client ID
                                                </span>
                                                <p className="text-dark">CLT-0024</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-star me-2" />
                                                    Team
                                                </span>
                                                <p className="text-dark">UI/UX Design</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-calendar-check me-2" />
                                                    Date Of Join
                                                </span>
                                                <p className="text-dark">1st Jan 2023</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-calendar-check me-2" />
                                                    Report Office
                                                </span>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm avatar-rounded me-2">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-12.jpg"
                                                            alt="Img"
                                                        />
                                                    </span>
                                                    <p className="text-gray-9 mb-0">Doglas Martini</p>
                                                </div>
                                            </div>
                                            <div className="row gx-2 mt-3">
                                                <div className="col-6">
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="btn btn-dark w-100"
                                                            data-bs-toggle="modal" data-inert={true}
                                                            data-bs-target="#edit_employee"
                                                        >
                                                            <i className="ti ti-edit me-1" />
                                                            Edit Info
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div>
                                                        <Link to={all_routes.chat} className="btn btn-primary w-100">
                                                            <i className="ti ti-message-heart me-1" />
                                                            Message
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6>Basic information</h6>
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#edit_employee"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-phone me-2" />
                                                Phone
                                            </span>
                                            <p className="text-dark">(163) 2459 315</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-mail-check me-2" />
                                                Email
                                            </span>
                                            <Link
                                                to="#"
                                                className="text-info d-inline-flex align-items-center"
                                            >
                                                perralt12@example.com
                                                <i className="ti ti-copy text-dark ms-2" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-gender-male me-2" />
                                                Gender
                                            </span>
                                            <p className="text-dark text-end">Male</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-cake me-2" />
                                                Birdthday
                                            </span>
                                            <p className="text-dark text-end">24th July 2000</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-check me-2" />
                                                Address
                                            </span>
                                            <p className="text-dark text-end">
                                                1861 Bayonne Ave, <br /> Manchester, NJ, 08759
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6>Personal Information</h6>
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm"
                                                data-bs-toggle="modal" data-inert={true}
                                                data-bs-target="#edit_personal"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-e-passport me-2" />
                                                Passport No
                                            </span>
                                            <p className="text-dark">QRET4566FGRT</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-calendar-x me-2" />
                                                Passport Exp Date
                                            </span>
                                            <p className="text-dark text-end">15 May 2029</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-gender-male me-2" />
                                                Nationality
                                            </span>
                                            <p className="text-dark text-end">Indian</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-bookmark-plus me-2" />
                                                Religion
                                            </span>
                                            <p className="text-dark text-end">Christianity</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-hotel-service me-2" />
                                                Marital status
                                            </span>
                                            <p className="text-dark text-end">Yes</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-briefcase-2 me-2" />
                                                Employment of spouse
                                            </span>
                                            <p className="text-dark text-end">No</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-baby-bottle me-2" />
                                                No. of children
                                            </span>
                                            <p className="text-dark text-end">2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6>Emergency Contact Number</h6>
                                <Link
                                    to="#"
                                    className="btn btn-icon btn-sm"
                                    data-bs-toggle="modal" data-inert={true}
                                    data-bs-target="#edit_emergency"
                                >
                                    <i className="ti ti-edit" />
                                </Link>
                            </div>
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="p-3 border-bottom">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <span className="d-inline-flex align-items-center">
                                                    Primary
                                                </span>
                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                    Adrian Peralt{" "}
                                                    <span className="d-inline-flex mx-1">
                                                        <i className="ti ti-point-filled text-danger" />
                                                    </span>
                                                    Father
                                                </h6>
                                            </div>
                                            <p className="text-dark">+1 127 2685 598</p>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <span className="d-inline-flex align-items-center">
                                                    Secondry
                                                </span>
                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                    Karen Wills{" "}
                                                    <span className="d-inline-flex mx-1">
                                                        <i className="ti ti-point-filled text-danger" />
                                                    </span>
                                                    Mother
                                                </h6>
                                            </div>
                                            <p className="text-dark">+1 989 7774 787</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div>
                                <div className="tab-content custom-accordion-items">
                                    <div
                                        className="tab-pane active show"
                                        id="bottom-justified-tab1"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="accordion accordions-items-seperate"
                                            id="accordionExample"
                                        >
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingOne">
                                                    <div className="accordion-button">
                                                        <div className="d-flex align-items-center flex-fill">
                                                            <h5>About Employee</h5>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-sm btn-icon ms-auto"
                                                                data-bs-toggle="modal" data-inert={true}
                                                                data-bs-target="#edit_employee"
                                                            >
                                                                <i className="ti ti-edit" />
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="d-flex align-items-center collapsed collapse-arrow"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#primaryBorderOne"
                                                                aria-expanded="false"
                                                                aria-controls="primaryBorderOne"
                                                            >
                                                                <i className="ti ti-chevron-down fs-18" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderOne"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body mt-2">
                                                        As an award winning designer, I deliver exceptional
                                                        quality work and bring value to your brand! With 10
                                                        years of experience and 350+ projects completed
                                                        worldwide with satisfied customers, I developed the 360°
                                                        brand approach, which helped me to create numerous
                                                        brands that are relevant, meaningful and loved.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingTwo">
                                                    <div className="accordion-button">
                                                        <div className="d-flex align-items-center flex-fill">
                                                            <h5>Bank Information</h5>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-sm btn-icon ms-auto"
                                                                data-bs-toggle="modal" data-inert={true}
                                                                data-bs-target="#edit_bank"
                                                            >
                                                                <i className="ti ti-edit" />
                                                            </Link>
                                                            <Link
                                                                to="#"
                                                                className="d-flex align-items-center collapsed collapse-arrow"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#primaryBorderTwo"
                                                                aria-expanded="false"
                                                                aria-controls="primaryBorderTwo"
                                                            >
                                                                <i className="ti ti-chevron-down fs-18" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderTwo"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    Bank Name
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    Swiz Intenational Bank
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    Bank account no
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    159843014641
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    IFSC Code
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    ICI24504
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    Branch
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    Alabama USA
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingThree">
                                                    <div className="accordion-button">
                                                        <div className="d-flex align-items-center justify-content-between flex-fill">
                                                            <h5>Family Information</h5>
                                                            <div className="d-flex">
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-icon btn-sm"
                                                                    data-bs-toggle="modal" data-inert={true}
                                                                    data-bs-target="#edit_familyinformation"
                                                                >
                                                                    <i className="ti ti-edit" />
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="d-flex align-items-center collapsed collapse-arrow"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#primaryBorderThree"
                                                                    aria-expanded="false"
                                                                    aria-controls="primaryBorderThree"
                                                                >
                                                                    <i className="ti ti-chevron-down fs-18" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderThree"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingThree"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    Name
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    Hendry Peralt
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    Relationship
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    Brother
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    Date of birth
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    25 May 2014
                                                                </h6>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <span className="d-inline-flex align-items-center">
                                                                    Phone
                                                                </span>
                                                                <h6 className="d-flex align-items-center fw-medium mt-1">
                                                                    +1 265 6956 961
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="accordion-item">
                                                        <div className="row">
                                                            <div className="accordion-header" id="headingFour">
                                                                <div className="accordion-button">
                                                                    <div className="d-flex align-items-center justify-content-between flex-fill">
                                                                        <h5>Education Details</h5>
                                                                        <div className="d-flex">
                                                                            <Link
                                                                                to="#"
                                                                                className="btn btn-icon btn-sm"
                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                data-bs-target="#edit_education"
                                                                            >
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link
                                                                                to="#"
                                                                                className="d-flex align-items-center collapsed collapse-arrow"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#primaryBorderFour"
                                                                                aria-expanded="false"
                                                                                aria-controls="primaryBorderFour"
                                                                            >
                                                                                <i className="ti ti-chevron-down fs-18" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="primaryBorderFour"
                                                                className="accordion-collapse collapse border-top"
                                                                aria-labelledby="headingFour"
                                                                data-bs-parent="#accordionExample"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div>
                                                                        <div className="mb-3">
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <div>
                                                                                    <span className="d-inline-flex align-items-center fw-normal">
                                                                                        Oxford University
                                                                                    </span>
                                                                                    <h6 className="d-flex align-items-center mt-1">
                                                                                        Computer Science
                                                                                    </h6>
                                                                                </div>
                                                                                <p className="text-dark">2020 - 2022</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <div>
                                                                                    <span className="d-inline-flex align-items-center fw-normal">
                                                                                        Cambridge University
                                                                                    </span>
                                                                                    <h6 className="d-flex align-items-center mt-1">
                                                                                        Computer Network &amp; Systems
                                                                                    </h6>
                                                                                </div>
                                                                                <p className="text-dark">2016- 2019</p>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <div>
                                                                                    <span className="d-inline-flex align-items-center fw-normal">
                                                                                        Oxford School
                                                                                    </span>
                                                                                    <h6 className="d-flex align-items-center mt-1">
                                                                                        Grade X
                                                                                    </h6>
                                                                                </div>
                                                                                <p className="text-dark">2012 - 2016</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="accordion-item">
                                                        <div className="row">
                                                            <div className="accordion-header" id="headingFive">
                                                                <div className="accordion-button collapsed">
                                                                    <div className="d-flex align-items-center justify-content-between flex-fill">
                                                                        <h5>Experience</h5>
                                                                        <div className="d-flex">
                                                                            <Link
                                                                                to="#"
                                                                                className="btn btn-icon btn-sm"
                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                data-bs-target="#edit_experience"
                                                                            >
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link
                                                                                to="#"
                                                                                className="d-flex align-items-center collapsed collapse-arrow"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#primaryBorderFive"
                                                                                aria-expanded="false"
                                                                                aria-controls="primaryBorderFive"
                                                                            >
                                                                                <i className="ti ti-chevron-down fs-18" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                id="primaryBorderFive"
                                                                className="accordion-collapse collapse border-top"
                                                                aria-labelledby="headingFive"
                                                                data-bs-parent="#accordionExample"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div>
                                                                        <div className="mb-3">
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <div>
                                                                                    <h6 className="d-inline-flex align-items-center fw-medium">
                                                                                        Google
                                                                                    </h6>
                                                                                    <span className="d-flex align-items-center badge bg-secondary-transparent mt-1">
                                                                                        <i className="ti ti-point-filled me-1" />
                                                                                        UI/UX Developer
                                                                                    </span>
                                                                                </div>
                                                                                <p className="text-dark">
                                                                                    Jan 2013 - Present
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <div>
                                                                                    <h6 className="d-inline-flex align-items-center fw-medium">
                                                                                        Salesforce
                                                                                    </h6>
                                                                                    <span className="d-flex align-items-center badge bg-secondary-transparent mt-1">
                                                                                        <i className="ti ti-point-filled me-1" />
                                                                                        Web Developer
                                                                                    </span>
                                                                                </div>
                                                                                <p className="text-dark">
                                                                                    Dec 2012- Jan 2015
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="d-flex align-items-center justify-content-between">
                                                                                <div>
                                                                                    <h6 className="d-inline-flex align-items-center fw-medium">
                                                                                        HubSpot
                                                                                    </h6>
                                                                                    <span className="d-flex align-items-center badge bg-secondary-transparent mt-1">
                                                                                        <i className="ti ti-point-filled me-1" />
                                                                                        Software Developer
                                                                                    </span>
                                                                                </div>
                                                                                <p className="text-dark">
                                                                                    Dec 2011- Jan 2012
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="contact-grids-tab p-0 mb-3">
                                                        <ul
                                                            className="nav nav-underline"
                                                            id="myTab"
                                                            role="tablist"
                                                        >
                                                            <li className="nav-item" role="presentation">
                                                                <button
                                                                    className="nav-link active"
                                                                    id="info-tab2"
                                                                    data-bs-toggle="tab"
                                                                    data-bs-target="#basic-info2"
                                                                    type="button"
                                                                    role="tab"
                                                                    aria-selected="true"
                                                                >
                                                                    Projects
                                                                </button>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <button
                                                                    className="nav-link"
                                                                    id="address-tab2"
                                                                    data-bs-toggle="tab"
                                                                    data-bs-target="#address2"
                                                                    type="button"
                                                                    role="tab"
                                                                    aria-selected="false"
                                                                >
                                                                    Assets
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="tab-content" id="myTabContent3">
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="basic-info2"
                                                            role="tabpanel"
                                                            aria-labelledby="info-tab2"
                                                            tabIndex={0}
                                                        >
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex">
                                                                    <div className="card flex-fill mb-4 mb-md-0">
                                                                        <div className="card-body">
                                                                            <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                                <Link
                                                                                    to={all_routes.projectdetails}
                                                                                    className="flex-shrink-0 me-2"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/social/project-03.svg"
                                                                                        alt="Img"
                                                                                    />
                                                                                </Link>
                                                                                <div>
                                                                                    <h6 className="mb-1">
                                                                                        <Link to={all_routes.projectdetails}>
                                                                                            World Health
                                                                                        </Link>
                                                                                    </h6>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <p className="mb-0 fs-13">8 tasks</p>
                                                                                        <p className="fs-13">
                                                                                            <span className="mx-1">
                                                                                                <i className="ti ti-point-filled text-primary" />
                                                                                            </span>
                                                                                            15 Completed
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <div>
                                                                                        <span className="mb-1 d-block">
                                                                                            Deadline
                                                                                        </span>
                                                                                        <p className="text-dark">
                                                                                            31 July 2025
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div>
                                                                                        <span className="mb-1 d-block">
                                                                                            Project Lead
                                                                                        </span>
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="fw-normal d-flex align-items-center"
                                                                                        >
                                                                                            <ImageWithBasePath
                                                                                                className="avatar avatar-sm rounded-circle me-2"
                                                                                                src="assets/img/profiles/avatar-01.jpg"
                                                                                                alt="Img"
                                                                                            />
                                                                                            Leona
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex">
                                                                    <div className="card flex-fill mb-0">
                                                                        <div className="card-body">
                                                                            <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                                <Link
                                                                                    to={all_routes.projectdetails}
                                                                                    className="flex-shrink-0 me-2"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/social/project-01.svg"
                                                                                        alt="Img"
                                                                                    />
                                                                                </Link>
                                                                                <div>
                                                                                    <h6 className="mb-1 text-truncate">
                                                                                        <Link to={all_routes.projectdetails}>
                                                                                            Hospital Administration
                                                                                        </Link>
                                                                                    </h6>
                                                                                    <div className="d-flex align-items-center">
                                                                                        <p className="mb-0 fs-13">8 tasks</p>
                                                                                        <p className="fs-13">
                                                                                            <span className="mx-1">
                                                                                                <i className="ti ti-point-filled text-primary" />
                                                                                            </span>
                                                                                            15 Completed
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <div>
                                                                                        <span className="mb-1 d-block">
                                                                                            Deadline
                                                                                        </span>
                                                                                        <p className="text-dark">
                                                                                            31 July 2025
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div>
                                                                                        <span className="mb-1 d-block">
                                                                                            Project Lead
                                                                                        </span>
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="fw-normal d-flex align-items-center"
                                                                                        >
                                                                                            <ImageWithBasePath
                                                                                                className="avatar avatar-sm rounded-circle me-2"
                                                                                                src="assets/img/profiles/avatar-01.jpg"
                                                                                                alt="Img"
                                                                                            />
                                                                                            Leona
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="address2"
                                                            role="tabpanel"
                                                            aria-labelledby="address-tab2"
                                                            tabIndex={0}
                                                        >
                                                            <div className="row">
                                                                <div className="col-md-12 d-flex">
                                                                    <div className="card flex-fill">
                                                                        <div className="card-body">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-md-8">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <Link
                                                                                            to={all_routes.projectdetails}
                                                                                            className="flex-shrink-0 me-2"
                                                                                        >
                                                                                            <ImageWithBasePath
                                                                                                src="assets/img/products/product-05.jpg"
                                                                                                className="img-fluid rounded-circle"
                                                                                                alt="img"
                                                                                            />
                                                                                        </Link>
                                                                                        <div>
                                                                                            <h6 className="mb-1">
                                                                                                <Link to={all_routes.projectdetails}>
                                                                                                    Dell Laptop - #343556656
                                                                                                </Link>
                                                                                            </h6>
                                                                                            <div className="d-flex align-items-center">
                                                                                                <p>
                                                                                                    <span className="text-primary">
                                                                                                        AST - 001
                                                                                                        <i className="ti ti-point-filled text-primary mx-1" />
                                                                                                    </span>
                                                                                                    Assigned on 22 Nov, 2022 10:32AM{" "}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <div>
                                                                                        <span className="mb-1 d-block">
                                                                                            Assigned by
                                                                                        </span>
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="fw-normal d-flex align-items-center"
                                                                                        >
                                                                                            <ImageWithBasePath
                                                                                                className="avatar avatar-sm rounded-circle me-2"
                                                                                                src="assets/img/profiles/avatar-01.jpg"
                                                                                                alt="Img"
                                                                                            />
                                                                                            Andrew Symon
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-1">
                                                                                    <div className="dropdown ms-2">
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="d-inline-flex align-items-center"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                        >
                                                                                            <i className="ti ti-dots-vertical" />
                                                                                        </Link>
                                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                            <li>
                                                                                                <Link
                                                                                                    to="#"
                                                                                                    className="dropdown-item rounded-1"
                                                                                                    data-bs-toggle="modal" data-inert={true}
                                                                                                    data-bs-target="#asset_info"
                                                                                                >
                                                                                                    View Info
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link
                                                                                                    to="#"
                                                                                                    className="dropdown-item rounded-1"
                                                                                                    data-bs-toggle="modal" data-inert={true}
                                                                                                    data-bs-target="#refuse_msg"
                                                                                                >
                                                                                                    Raise Issue{" "}
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 d-flex">
                                                                    <div className="card flex-fill mb-0">
                                                                        <div className="card-body">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-md-8">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <Link
                                                                                            to={all_routes.projectdetails}
                                                                                            className="flex-shrink-0 me-2"
                                                                                        >
                                                                                            <ImageWithBasePath
                                                                                                src="assets/img/products/product-06.jpg"
                                                                                                className="img-fluid rounded-circle"
                                                                                                alt="img"
                                                                                            />
                                                                                        </Link>
                                                                                        <div>
                                                                                            <h6 className="mb-1">
                                                                                                <Link to={all_routes.projectdetails}>
                                                                                                    Bluetooth Mouse - #478878
                                                                                                </Link>
                                                                                            </h6>
                                                                                            <div className="d-flex align-items-center">
                                                                                                <p>
                                                                                                    <span className="text-primary">
                                                                                                        AST - 001
                                                                                                        <i className="ti ti-point-filled text-primary mx-1" />
                                                                                                    </span>
                                                                                                    Assigned on 22 Nov, 2022 10:32AM{" "}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <div>
                                                                                        <span className="mb-1 d-block">
                                                                                            Assigned by
                                                                                        </span>
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="fw-normal d-flex align-items-center"
                                                                                        >
                                                                                            <ImageWithBasePath
                                                                                                className="avatar avatar-sm rounded-circle me-2"
                                                                                                src="assets/img/profiles/avatar-01.jpg"
                                                                                                alt="Img"
                                                                                            />
                                                                                            Andrew Symon
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-1">
                                                                                    <div className="dropdown ms-2">
                                                                                        <Link
                                                                                            to="#"
                                                                                            className="d-inline-flex align-items-center"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                        >
                                                                                            <i className="ti ti-dots-vertical" />
                                                                                        </Link>
                                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                            <li>
                                                                                                <Link
                                                                                                    to="#"
                                                                                                    className="dropdown-item rounded-1"
                                                                                                    data-bs-toggle="modal" data-inert={true}
                                                                                                    data-bs-target="#asset_info"
                                                                                                >
                                                                                                    View Info
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link
                                                                                                    to="#"
                                                                                                    className="dropdown-item rounded-1"
                                                                                                    data-bs-toggle="modal" data-inert={true}
                                                                                                    data-bs-target="#refuse_msg"
                                                                                                >
                                                                                                    Raise Issue{" "}
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
            {/* Edit Employee */}
            <div className="modal fade" id="edit_employee">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="d-flex align-items-center">
                                <h4 className="modal-title me-2">Edit Employee</h4>
                                <span>Employee ID : EMP -0024</span>
                            </div>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="contact-grids-tab">
                                <ul className="nav nav-underline" id="myTab2" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="info-tab3"
                                            data-bs-toggle="tab"
                                            data-bs-target="#basic-info3"
                                            type="button"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            Basic Information
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="address-tab3"
                                            data-bs-toggle="tab"
                                            data-bs-target="#address3"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            Permissions
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent2">
                                <div
                                    className="tab-pane fade show active"
                                    id="basic-info3"
                                    role="tabpanel"
                                    aria-labelledby="info-tab3"
                                    tabIndex={0}
                                >
                                    <div className="modal-body pb-0 ">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                                        <ImageWithBasePath
                                                            src="assets/img/users/user-13.jpg"
                                                            alt="img"
                                                            className="rounded-circle"
                                                        />
                                                    </div>
                                                    <div className="profile-upload">
                                                        <div className="mb-2">
                                                            <h6 className="mb-1">Upload Profile Image</h6>
                                                            <p className="fs-12">Image should be below 4 mb</p>
                                                        </div>
                                                        <div className="profile-uploader d-flex align-items-center">
                                                            <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                                                Upload
                                                                <input
                                                                    type="file"
                                                                    className="form-control image-sign"
                                                                    multiple
                                                                />
                                                            </div>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-light btn-sm"
                                                            >
                                                                Cancel
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        First Name <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Anthony"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        defaultValue="Lewis"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Employee ID <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Emp-001"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Joining Date <span className="text-danger"> *</span>
                                                    </label>
                                                    <div className="input-icon-end position-relative">
                                                        <DatePicker
                                                            className="form-control datetimepicker"
                                                            format={{
                                                                format: "DD-MM-YYYY",
                                                                type: "mask",
                                                            }}
                                                            getPopupContainer={getModalContainer}
                                                            placeholder="DD-MM-YYYY"
                                                        />
                                                        <span className="input-icon-addon">
                                                            <i className="ti ti-calendar text-gray-7" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Username <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Anthony"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Email <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        defaultValue="anthony@example.com	"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3 ">
                                                    <label className="form-label">
                                                        Password <span className="text-danger"> *</span>
                                                    </label>
                                                    <div className="pass-group">
                                                        <input
                                                            type={
                                                                passwordVisibility.password
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                            className="pass-input form-control"
                                                        />
                                                        <span
                                                            className={`ti toggle-passwords ${passwordVisibility.password
                                                                ? "ti-eye"
                                                                : "ti-eye-off"
                                                                }`}
                                                            onClick={() =>
                                                                togglePasswordVisibility("password")
                                                            }
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3 ">
                                                    <label className="form-label">
                                                        Confirm Password <span className="text-danger"> *</span>
                                                    </label>
                                                    <div className="pass-group">
                                                        <input
                                                            type={
                                                                passwordVisibility.confirmPassword
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                            className="pass-input form-control"
                                                        />
                                                        <span
                                                            className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                                                                ? "ti-eye"
                                                                : "ti-eye-off"
                                                                }`}
                                                            onClick={() =>
                                                                togglePasswordVisibility("confirmPassword")
                                                            }
                                                        ></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Phone Number <span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="(123) 4567 890"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Company<span className="text-danger"> *</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        defaultValue="Abac Company"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Department</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={departmentChoose}
                                                        defaultValue={departmentChoose[1]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Designation</label>
                                                    <CommonSelect
                                                        className='select'
                                                        options={designationChoose}
                                                        defaultValue={designationChoose[1]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        About <span className="text-danger"> *</span>
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={3}
                                                        defaultValue={
                                                            "As an award winning designer, I deliver exceptional quality work and bring value to your brand! With 10 years of experience and 350+ projects completed worldwide with satisfied customers, I developed the 360° brand approach, which helped me to create numerous brands that are relevant, meaningful and loved.\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-outline-light border me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>
                                        <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                            Save{" "}
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="address3"
                                    role="tabpanel"
                                    aria-labelledby="address-tab3"
                                    tabIndex={0}
                                >
                                    <div className="modal-body">
                                        <div className="card bg-light-500 shadow-none">
                                            <div className="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                                <h6>Enable Options</h6>
                                                <div className="d-flex align-items-center justify-content-end">
                                                    <div className="form-check form-switch me-2">
                                                        <label className="form-check-label mt-0">
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                role="switch"
                                                            />
                                                            Enable all Module
                                                        </label>
                                                    </div>
                                                    <div className="form-check d-flex align-items-center">
                                                        <label className="form-check-label mt-0">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultChecked
                                                            />
                                                            Select All
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive border rounded">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        defaultChecked
                                                                    />
                                                                    Holidays
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Leaves
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Clients
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Projects
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Tasks
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Chats
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        defaultChecked
                                                                    />
                                                                    Assets
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check form-switch me-2">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input me-2"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                    />
                                                                    Timing Sheets
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Read
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Write
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Create
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Delete
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Import
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex align-items-center">
                                                                <label className="form-check-label mt-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                    />
                                                                    Export
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-outline-light border me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal" data-inert={true}
                                            data-bs-target="#success_modal"
                                        >
                                            Save{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Employee */}
            {/* Edit Personal */}
            <div className="modal fade" id="edit_personal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Personal Info</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Passport No <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Passport Expiry Date <span className="text-danger"> *</span>
                                            </label>
                                            <div className="input-icon-end position-relative">
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar text-gray-7" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Nationality <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Religion</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Marital status <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={martialstatus}
                                                defaultValue={martialstatus[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Employment spouse</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">No. of children</label>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Personal */}
            {/* Edit Emergency Contact */}
            <div className="modal fade" id="edit_emergency">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Emergency Contact Details</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="border-bottom mb-3 ">
                                    <div className="row">
                                        <h5 className="mb-3">Secondary Contact Details</h5>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Name <span className="text-danger"> *</span>
                                                </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Relationship </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Phone No 1 <span className="text-danger"> *</span>
                                                </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Phone No 2 </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <h5 className="mb-3">Secondary Contact Details</h5>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Name <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Relationship </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Phone No 1 <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone No 2 </label>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Emergency Contact */}
            {/* Edit Bank */}
            <div className="modal fade" id="edit_bank">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Bank Details</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Bank Details <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Bank account No </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">IFSC Code</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Branch Address</label>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Bank */}
            {/* Add Family */}
            <div className="modal fade" id="edit_familyinformation">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Family Information</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Name <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Relationship </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Phone </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Passport Expiry Date <span className="text-danger"> *</span>
                                            </label>
                                            <div className="input-icon-end position-relative">
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar text-gray-7" />
                                                </span>
                                            </div>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Family */}
            {/* Add Education */}
            <div className="modal fade" id="edit_education">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Education Information</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Institution Name <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Course <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Start Date <span className="text-danger"> *</span>
                                            </label>
                                            <div className="input-icon-end position-relative">
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar text-gray-7" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                End Date <span className="text-danger"> *</span>
                                            </label>
                                            <div className="input-icon-end position-relative">
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar text-gray-7" />
                                                </span>
                                            </div>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Education */}
            {/* Add Experience */}
            <div className="modal fade" id="edit_experience">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Company Information</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Previous Company Name{" "}
                                                <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Designation <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Start Date <span className="text-danger"> *</span>
                                            </label>
                                            <div className="input-icon-end position-relative">
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar text-gray-7" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                End Date <span className="text-danger"> *</span>
                                            </label>
                                            <div className="input-icon-end position-relative">
                                                <DatePicker
                                                    className="form-control datetimepicker"
                                                    format={{
                                                        format: "DD-MM-YYYY",
                                                        type: "mask",
                                                    }}
                                                    getPopupContainer={getModalContainer}
                                                    placeholder="DD-MM-YYYY"
                                                />
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-calendar text-gray-7" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-check-label d-flex align-items-center mt-0">
                                                <input
                                                    className="form-check-input mt-0 me-2"
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                                <span className="text-dark">
                                                    Check if you working present
                                                </span>
                                            </label>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Experience */}
            {/* Add Employee Success */}
            <div className="modal fade" id="success_modal" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-3">
                                <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
                                    <i className="ti ti-check fs-24" />
                                </span>
                                <h5 className="mb-2">Employee Added Successfully</h5>
                                <p className="mb-3">
                                    Stephan Peralt has been added with Client ID :{" "}
                                    <span className="text-primary">#EMP - 0001</span>
                                </p>
                                <div>
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <Link to={all_routes.employeeList} className="btn btn-dark w-100">
                                                Back to List
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                to={all_routes.employeedetails}
                                                className="btn btn-primary w-100"
                                            >
                                                Detail Page
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Client Success */}
            {/* Add Statuorty */}
            <div className="modal fade" id="add_bank_satutory">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Bank &amp; Statutory</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="border-bottom mb-4">
                                    <h5 className="mb-3">Basic Salary Information</h5>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Salary basis <span className="text-danger"> *</span>
                                                </label>
                                                <CommonSelect
                                                    className='select'
                                                    options={salaryChoose}
                                                    defaultValue={salaryChoose[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">Salary basis</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="$"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">Payment type</label>
                                                <CommonSelect
                                                    className='select'
                                                    options={paymenttype}
                                                    defaultValue={paymenttype[0]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-bottom mb-4">
                                    <h5 className="mb-3">PF Information</h5>
                                    <div className="row mb-2">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    PF contribution <span className="text-danger"> *</span>
                                                </label>
                                                <CommonSelect
                                                    className='select'
                                                    options={pfcontribution}
                                                    defaultValue={pfcontribution[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">PF No</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label">Employee PF rate</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Additional rate</label>
                                                <CommonSelect
                                                    className='select'
                                                    options={additionalrate}
                                                    defaultValue={additionalrate[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Total rate</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="mb-3">ESI Information</h5>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                ESI contribution<span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={esi}
                                                defaultValue={esi[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">ESI Number</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Employee ESI rate<span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Additional rate</label>
                                            <CommonSelect
                                                className='select'
                                                options={additionalrate}
                                                defaultValue={additionalrate[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Total rate</label>
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
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Statuorty */}
            {/* Asset Information */}
            <div className="modal fade" id="asset_info">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Asset Information</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="bg-light p-3 rounded d-flex align-items-center mb-3">
                                <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                        src="assets/img/laptop.jpg"
                                        alt="img"
                                        className="ig-fluid rounded-circle"
                                    />
                                </span>
                                <div>
                                    <h6>Dell Laptop - #343556656</h6>
                                    <p className="fs-13">
                                        <span className="text-primary">AST - 001 </span>
                                        <i className="ti ti-point-filled text-primary" /> Assigned on 22
                                        Nov, 2022 10:32AM
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Type</p>
                                        <p className="text-gray-9">Laptop</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Brand</p>
                                        <p className="text-gray-9">Dell</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Category</p>
                                        <p className="text-gray-9">Computer</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Serial No</p>
                                        <p className="text-gray-9">3647952145678</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Cost</p>
                                        <p className="text-gray-9">$800</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Vendor</p>
                                        <p className="text-gray-9">Compusoft Systems Ltd.,</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Warranty</p>
                                        <p className="text-gray-9">12 Jan 2022 - 12 Jan 2026</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <p className="fs-13 mb-0">Location</p>
                                        <p className="text-gray-9">46 Laurel Lane, TX 79701</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="fs-13 mb-2">Asset Images</p>
                                <div className="d-flex align-items-center">
                                    <ImageWithBasePath
                                        src="assets/img/laptop-01.jpg"
                                        alt="img"
                                        className="img-fluid rounded me-2"
                                    />
                                    <ImageWithBasePath
                                        src="assets/img/laptop-2.jpg"
                                        alt="img"
                                        className="img-fluid rounded me-2"
                                    />
                                    <ImageWithBasePath
                                        src="assets/img/laptop-3.jpg"
                                        alt="img"
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Asset Information */}
            {/* Refuse */}
            <div className="modal fade" id="refuse_msg">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Raise Issue</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Description<span className="text-danger"> *</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={4}
                                                defaultValue={""}
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
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Refuse */}
        </>








    )
}

export default EmployeeDetails
