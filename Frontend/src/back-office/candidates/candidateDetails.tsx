import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { all_routes } from '../../routing-module/router/all_routes';
import ImageWithBasePath from '../../common/imageWithBasePath';
import CollapseHeader from '../../core/common/collapse-header/collapse-header';

// Define the Candidate interface
interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    role: string;
    image?: string; // Optional
    createDate: string;
}

const CandidateDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the ID from the URL parameters
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCandidateDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/user/candidates/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch candidate details');
                }
                const data: Candidate = await response.json();
                setCandidate(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching candidate:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidateDetails();
    }, [id]);

    if (loading) {
        return <div>Loading candidate details...</div>;
    }

    if (!candidate) {
        return <div>Candidate not found</div>;
    }

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row justify-content-between align-items-center mb-4">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                                    <Link to="/candidates-grid">
                                        <i className="ti ti-arrow-left me-2" />
                                        Clients
                                    </Link>
                                </h6>
                                <div className="ms-2 head-icons">
                                    <CollapseHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 theiaStickySidebar">
                            <div className="card card-bg-1">
                                <div className="card-body p-0">
                                    <span className="avatar avatar-xl avatar-rounded border border-2 border-white m-auto d-flex mb-2">
                                        <img
                                            src={candidate.image || "assets/img/users/user-13.jpg"}
                                            
                                            alt="Img"
                                        />
                                    </span>
                                    <div className="text-center px-3 pb-3 border-bottom">
                                        <div className="mb-3">
                                            <h5 className="d-flex align-items-center justify-content-center mb-1">
                                                {candidate.firstName} {candidate.lastName}
                                                <i className="ti ti-discount-check-filled text-success ms-1" />
                                            </h5>
                                            <p className="text-dark mb-1">{candidate.email}</p>
                                            <span className="badge badge-soft-secondary fw-medium">
                                                {candidate.role}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-id me-2" />
                                                    Client ID
                                                </span>
                                                <p className="text-dark">{candidate.id}</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span className="d-inline-flex align-items-center">
                                                    <i className="ti ti-calendar-check me-2" />
                                                    Added on
                                                </span>
                                                <p className="text-dark">{new Date(candidate.createDate).toLocaleDateString()}</p>
                                            </div>
                                            <div className="row gx-2 mt-3">
                                                <div className="col-6">
                                                    <Link to={all_routes.voiceCall} className="btn btn-dark w-100">
                                                        <i className="ti ti-phone-call me-1" />
                                                        Call
                                                    </Link>
                                                </div>
                                                <div className="col-6">
                                                    <Link to={all_routes.chat} className="btn btn-primary w-100">
                                                        <i className="ti ti-message-heart me-1" />
                                                        Message
                                                    </Link>
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
                                                data-bs-toggle="modal" 
                                                data-bs-target="#edit_client"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-phone me-2" />
                                                Phone
                                            </span>
                                            <p className="text-dark">{candidate.phoneNumber}</p>
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
                                                {candidate.email}
                                                <i className="ti ti-copy text-dark ms-2" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="d-inline-flex align-items-center">
                                                <i className="ti ti-map-pin-check me-2" />
                                                Address
                                            </span>
                                            <p className="text-dark text-end">
                                                {candidate.address}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6>Social Links</h6>
                                            <Link to="#" className="btn btn-icon btn-sm">
                                                <i className="ti ti-edit" />
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Link to="#" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-01.svg" alt="Img" />
                                            </Link>
                                            <Link to="#" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-06.svg" alt="Img" />
                                            </Link>
                                            <Link to="#" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-02.svg" alt="Img" />
                                            </Link>
                                            <Link to="#" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-03.svg" alt="Img" />
                                            </Link>
                                            <Link to="#" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-04.svg" alt="Img" />
                                            </Link>
                                            <Link to="#" className="me-2">
                                                <ImageWithBasePath src="assets/img/social/social-05.svg" alt="Img" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

 <div className="col-xl-8">
                            <div>
                                <div className="bg-white rounded">
                                    <ul
                                        className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap mb-4"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link active fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab1"
                                                data-bs-toggle="tab"
                                                aria-selected="false"
                                                role="tab"
                                            >
                                                <i className="ti ti-star me-1" />
                                                Overview
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab2"
                                                data-bs-toggle="tab"
                                                aria-selected="false"
                                                role="tab"
                                            >
                                                <i className="ti ti-box me-1" />
                                                Projects
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab3"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-basket-code me-1" />
                                                Tasks
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab4"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-file-invoice me-1" />
                                                Invoices
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab5"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-file-description me-1" />
                                                Notes
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link
                                                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                                                to="#bottom-justified-tab6"
                                                data-bs-toggle="tab"
                                                aria-selected="true"
                                                role="tab"
                                            >
                                                <i className="ti ti-folder-open me-1" />
                                                Documents
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content custom-accordion-items client-accordion">
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
                                                    <div
                                                        className="accordion-button bg-white"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderOne"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderOne"
                                                        role="button"
                                                    >
                                                        <h5>Projects</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderOne"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <div className="row">
                                                            <div className="col-xxl-6 col-lg-12 col-md-F6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-01.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Hospital Administration
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>8 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 &nbsp;Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">31 July 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$549987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Leona
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 565 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                495 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                70 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-02.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Video Calling App
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>22 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">16 Jan 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$279987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Mathis
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 700 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                605 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                95 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
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
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingTwo">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderTwo"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderTwo"
                                                        role="button"
                                                    >
                                                        <h5>Tasks</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderTwo"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="list-group list-group-flush">
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 d-flex align-items-center rating-select">
                                                                                <i className="ti ti-star-filled filled" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Patient appointment booking
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge bg-soft-pink d-inline-flex align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Onhold
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-13.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-14.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-15.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 rating-select d-flex align-items-center">
                                                                                <i className="ti ti-star" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Appointment booking with payment gateway
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Inprogress
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-20.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-21.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-22.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 rating-select d-flex align-items-center">
                                                                                <i className="ti ti-star" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Patient and Doctor video conferencing
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge badge-soft-success align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Completed
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-28.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-29.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-24.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    defaultChecked
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 rating-select d-flex align-items-center">
                                                                                <i className="ti ti-star" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Private chat module
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge badge-secondary-transparent d-flex align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Pending
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-23.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-24.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-25.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
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
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingThree">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderThree"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderThree"
                                                    >
                                                        <h5>Invoices</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderThree"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingThree"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Invoice : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group list-group-flush mb-3">
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Phase 2 Completion
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-123{" "}
                                                                                    </Link>{" "}
                                                                                    11 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$6,598</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Paid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Advance for Project
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-124{" "}
                                                                                    </Link>{" "}
                                                                                    14 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$3312</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Hold
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Changes &amp; design Alignments
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-125{" "}
                                                                                    </Link>{" "}
                                                                                    15 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$4154</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Paid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Added New Functionality
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-126{" "}
                                                                                    </Link>{" "}
                                                                                    16 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$658</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Paid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Phase 1 Completion
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-127{" "}
                                                                                    </Link>{" "}
                                                                                    17 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$1259</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-danger d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                unpaid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-center">
                                                            <Link to="#" className="btn btn-primary btn-sm">
                                                                Load More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFour">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFour"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderFour"
                                                    >
                                                        <h5>Notes</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFour"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingFour"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Notes : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                15 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-trash me-1" />
                                                                                            Delete
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="d-flex align-items-center mb-2">
                                                                            <i className="ti ti-point-filled text-primary me-1" />
                                                                            Changes &amp; design
                                                                        </h6>
                                                                        <p className="text-truncate line-clamb-3">
                                                                            An office management app project streamlines
                                                                            administrative tasks by integrating tools for
                                                                            scheduling, communication, and task
                                                                            management, enhancing overall productivity and
                                                                            efficiency.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                16 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-trash me-1" />
                                                                                            Delete
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="d-flex align-items-center mb-2">
                                                                            <i className="ti ti-point-filled text-success me-1" />
                                                                            Phase 1 Completion
                                                                        </h6>
                                                                        <p className="text-truncate line-clamb-3">
                                                                            An office management app project streamlines
                                                                            administrative tasks by integrating tools for
                                                                            scheduling, communication, and task
                                                                            management, enhancing overall productivity and
                                                                            efficiency.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                17 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-trash me-1" />
                                                                                            Delete
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="d-flex align-items-center mb-2">
                                                                            <i className="ti ti-point-filled text-danger me-1" />
                                                                            Phase 2 Completion
                                                                        </h6>
                                                                        <p className="text-truncate line-clamb-3">
                                                                            An office management app project streamlines
                                                                            administrative tasks by integrating tools for
                                                                            scheduling, communication, and task
                                                                            management, enhancing overall productivity and
                                                                            efficiency.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="text-center">
                                                                    <Link to="#" className="btn btn-primary btn-sm">
                                                                        Load More
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFive">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFive"
                                                        aria-expanded="false"
                                                        aria-controls="primaryBorderFive"
                                                    >
                                                        <h5>Documents</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFive"
                                                    className="accordion-collapse collapse border-top"
                                                    aria-labelledby="headingFive"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-4">
                                                                <h6>Total No of Documents : 45</h6>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="dropdown me-2">
                                                                        <Link
                                                                            to="to"
                                                                            className="dropdown-toggle btn btn-white"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            Sort By : Docs Type
                                                                        </Link>
                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Docs
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Pdf
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Image
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Folder
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Xml
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="position-relative input-icon flex-fill">
                                                                        <span className="input-icon-addon">
                                                                            <i className="ti ti-search" />
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Search"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="custom-datatable-filter table-responsive no-datatable-length border">
                                                            <table className="table datatable">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Size</th>
                                                                        <th>Type</th>
                                                                        <th>Modified</th>
                                                                        <th>Share</th>
                                                                        <th />
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-01.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Secret
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.6 MB</td>
                                                                        <td>Doc</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Mar 15, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-27.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-29.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-12.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-02.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Sophie Headrick
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.4 MB</td>
                                                                        <td>PDF</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 8, 2025</p>
                                                                            <span>08:20:13 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-16.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-03.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Gallery
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>6.1 MB</td>
                                                                        <td>Image</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Aug 6, 2025</p>
                                                                            <span>04:10:12 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-02.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-03.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-05.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <Link
                                                                                    className="avatar bg-primary avatar-rounded text-fixed-white"
                                                                                    to="to"
                                                                                >
                                                                                    +1
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-04.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Doris Crowley
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>5.2 MB</td>
                                                                        <td>Folder</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 6, 2025</p>
                                                                            <span>03:40:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-10.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-05.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Cheat_codez
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>8 MB</td>
                                                                        <td>Xml</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Oct 12, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-04.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-28.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab2"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingOne2">
                                                    <div
                                                        className="accordion-button bg-white"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#primaryBorderOne2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderOne2"
                                                        role="button"
                                                    >
                                                        <h5>Projects</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderOne2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingOne2"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <div className="row">
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-01.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Hospital Administration
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>8 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 &nbsp;Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">31 July 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$549987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-01.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Leona
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 565 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                495 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                70 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xxl-6 col-lg-12 col-md-6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                                                                            <Link
                                                                                to={all_routes.project}
                                                                                className="flex-shrink-0 me-2"
                                                                            >
                                                                                <ImageWithBasePath
                                                                                    src="assets/img/social/project-02.svg"
                                                                                    alt="Img"
                                                                                />
                                                                            </Link>
                                                                            <div>
                                                                                <h6 className="mb-1">
                                                                                    <Link to={all_routes.project}>
                                                                                        Video Calling App
                                                                                    </Link>
                                                                                </h6>
                                                                                <div className="d-flex align-items-center">
                                                                                    <span>22 tasks</span>
                                                                                    <span className="mx-1">
                                                                                        <i className="ti ti-point-filled text-primary" />
                                                                                    </span>
                                                                                    <span>15 Completed</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Deadline
                                                                                    </span>
                                                                                    <p className="text-dark">16 Jan 2025</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Value
                                                                                    </span>
                                                                                    <p className="text-dark">$279987</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-4">
                                                                                <div className="mb-3">
                                                                                    <span className="mb-1 d-block">
                                                                                        Project Lead
                                                                                    </span>
                                                                                    <h6 className="fw-normal d-flex align-items-center">
                                                                                        <ImageWithBasePath
                                                                                            className="avatar avatar-xs rounded-circle me-1"
                                                                                            src="assets/img/profiles/avatar-02.jpg"
                                                                                            alt="Img"
                                                                                        />
                                                                                        Mathis
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bg-light p-2">
                                                                            <div className="row align-items-center">
                                                                                <div className="col-6">
                                                                                    <span className="fw-medium d-flex align-items-center">
                                                                                        <i className="ti ti-clock text-primary me-2" />
                                                                                        Total 700 Hrs
                                                                                    </span>
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <div>
                                                                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                                                                            <small className="text-dark">
                                                                                                605 Hrs
                                                                                            </small>
                                                                                            <small className="text-dark">
                                                                                                95 Hrs
                                                                                            </small>
                                                                                        </div>
                                                                                        <div className="progress  progress-xs">
                                                                                            <div
                                                                                                className="progress-bar bg-warning"
                                                                                                role="progressbar"
                                                                                                style={{ width: "75%" }}
                                                                                            />
                                                                                            <div
                                                                                                className="progress-bar bg-success"
                                                                                                role="progressbar"
                                                                                                style={{ width: "25%" }}
                                                                                            />
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
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab3"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingTwo2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderTwo2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderTwo2"
                                                    >
                                                        <h5>Tasks</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderTwo2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingTwo2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="list-group list-group-flush">
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 d-flex align-items-center rating-select">
                                                                                <i className="ti ti-star-filled filled" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Patient appointment booking
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge bg-soft-pink d-inline-flex align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Onhold
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-13.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-14.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-15.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 rating-select d-flex align-items-center">
                                                                                <i className="ti ti-star" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Appointment booking with payment gateway
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge bg-transparent-purple d-flex align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Inprogress
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-20.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-21.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-22.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 rating-select d-flex align-items-center">
                                                                                <i className="ti ti-star" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Patient and Doctor video conferencing
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge badge-soft-success align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Completed
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-28.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-29.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-24.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded p-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-md-7">
                                                                        <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                                                                            <div className="form-check form-check-md me-2">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    defaultChecked
                                                                                />
                                                                            </div>
                                                                            <span className="me-2 rating-select d-flex align-items-center">
                                                                                <i className="ti ti-star" />
                                                                            </span>
                                                                            <div className="strike-info">
                                                                                <h4 className="fs-14">
                                                                                    Private chat module
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                                                                            <span className="badge badge-secondary-transparent d-flex align-items-center me-3">
                                                                                <i className="fas fa-circle fs-6 me-1" />
                                                                                Pending
                                                                            </span>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="avatar-list-stacked avatar-group-sm">
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-23.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-24.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                    <span className="avatar avatar-rounded">
                                                                                        <ImageWithBasePath
                                                                                            className="border border-white"
                                                                                            src="assets/img/profiles/avatar-25.jpg"
                                                                                            alt="img"
                                                                                        />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="dropdown ms-2">
                                                                                    <Link
                                                                                        to="to"
                                                                                        className="d-inline-flex align-items-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                    >
                                                                                        <i className="ti ti-dots-vertical" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#edit_todo"
                                                                                            >
                                                                                                <i className="ti ti-edit me-2" />
                                                                                                Edit
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#delete_modal"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="to"
                                                                                                className="dropdown-item rounded-1"
                                                                                                data-bs-toggle="modal" data-inert={true}
                                                                                                data-bs-target="#view_todo"
                                                                                            >
                                                                                                <i className="ti ti-eye me-2" />
                                                                                                View
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
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab4"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingThree2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderThree2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderThree2"
                                                    >
                                                        <h5>Invoices</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderThree2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingThree2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Invoice : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group list-group-flush mb-3">
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Phase 2 Completion
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-123{" "}
                                                                                    </Link>{" "}
                                                                                    11 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$6,598</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Paid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Advance for Project
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-124{" "}
                                                                                    </Link>{" "}
                                                                                    14 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$3312</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Hold
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Changes &amp; design Alignments
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-125{" "}
                                                                                    </Link>{" "}
                                                                                    15 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$4154</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Paid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded mb-2 p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Added New Functionality
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-126{" "}
                                                                                    </Link>{" "}
                                                                                    16 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$658</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-success d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                Paid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item border rounded p-2">
                                                                <div className="row align-items-center g-3">
                                                                    <div className="col-sm-6">
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="avatar avatar-lg bg-light flex-shrink-0 me-2">
                                                                                <i className="ti ti-file-invoice text-dark fs-24" />
                                                                            </span>
                                                                            <div>
                                                                                <h6 className="fw-medium mb-1">
                                                                                    Phase 1 Completion
                                                                                </h6>
                                                                                <p>
                                                                                    <Link to="#" className="text-info">
                                                                                        #INV-127{" "}
                                                                                    </Link>{" "}
                                                                                    17 Sep 2025, 05:35 pm
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div>
                                                                            <span>Amount</span>
                                                                            <p className="text-dark">$1259</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-3">
                                                                        <div className="d-flex align-items-center justify-content-sm-end">
                                                                            <span className="badge badge-soft-danger d-inline-flex  align-items-center me-4">
                                                                                <i className="ti ti-point-filled me-1" />
                                                                                unpaid
                                                                            </span>
                                                                            <Link to="#" className="btn btn-icon btn-sm">
                                                                                <i className="ti ti-edit" />
                                                                            </Link>
                                                                            <Link to="#" className="btn btn-icon btn-sm ">
                                                                                <i className="ti ti-trash" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-center">
                                                            <Link to="#" className="btn btn-primary btn-sm">
                                                                Load More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="bottom-justified-tab5"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFour2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFour2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderFour2"
                                                    >
                                                        <h5>Notes</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFour2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingFour2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-8">
                                                                <h6>Total No of Notes : 45</h6>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="position-relative input-icon">
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-search" />
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                15 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-trash me-1" />
                                                                                            Delete
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="d-flex align-items-center mb-2">
                                                                            <i className="ti ti-point-filled text-primary me-1" />
                                                                            Changes &amp; design
                                                                        </h6>
                                                                        <p className="text-truncate line-clamb-3">
                                                                            An office management app project streamlines
                                                                            administrative tasks by integrating tools for
                                                                            scheduling, communication, and task
                                                                            management, enhancing overall productivity and
                                                                            efficiency.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                16 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-trash me-1" />
                                                                                            Delete
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="d-flex align-items-center mb-2">
                                                                            <i className="ti ti-point-filled text-success me-1" />
                                                                            Phase 1 Completion
                                                                        </h6>
                                                                        <p className="text-truncate line-clamb-3">
                                                                            An office management app project streamlines
                                                                            administrative tasks by integrating tools for
                                                                            scheduling, communication, and task
                                                                            management, enhancing overall productivity and
                                                                            efficiency.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-sm-6 d-flex">
                                                                <div className="card flex-fill">
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                                            <h6 className="text-gray-5 fw-medium">
                                                                                17 May 2025
                                                                            </h6>
                                                                            <div className="dropdown">
                                                                                <Link
                                                                                    to="to"
                                                                                    className="d-inline-flex align-items-center"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <i className="ti ti-dots-vertical" />
                                                                                </Link>
                                                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-edit me-2" />
                                                                                            Edit
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link
                                                                                            to="to"
                                                                                            className="dropdown-item rounded-1"
                                                                                        >
                                                                                            <i className="ti ti-trash me-1" />
                                                                                            Delete
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="d-flex align-items-center mb-2">
                                                                            <i className="ti ti-point-filled text-danger me-1" />
                                                                            Phase 2 Completion
                                                                        </h6>
                                                                        <p className="text-truncate line-clamb-3">
                                                                            An office management app project streamlines
                                                                            administrative tasks by integrating tools for
                                                                            scheduling, communication, and task
                                                                            management, enhancing overall productivity and
                                                                            efficiency.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="text-center">
                                                                    <Link to="#" className="btn btn-primary btn-sm">
                                                                        Load More
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
                                        className="tab-pane"
                                        id="bottom-justified-tab6"
                                        role="tabpanel"
                                    >
                                        <div className="accordion accordions-items-seperate">
                                            <div className="accordion-item">
                                                <div className="accordion-header" id="headingFive2">
                                                    <div
                                                        className="accordion-button collapsed"
                                                        data-bs-toggle="collapse"
                                                        role="button"
                                                        data-bs-target="#primaryBorderFive2"
                                                        aria-expanded="true"
                                                        aria-controls="primaryBorderFive2"
                                                    >
                                                        <h5>Documents</h5>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderFive2"
                                                    className="accordion-collapse collapse show border-top"
                                                    aria-labelledby="headingFive2"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="row align-items-center g-3 mb-3">
                                                            <div className="col-sm-4">
                                                                <h6>Total No of Documents : 45</h6>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="dropdown me-2">
                                                                        <Link
                                                                            to="to"
                                                                            className="dropdown-toggle btn btn-white"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            Sort By : Docs Type
                                                                        </Link>
                                                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Docs
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Pdf
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Image
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Folder
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="to"
                                                                                    className="dropdown-item rounded-1"
                                                                                >
                                                                                    Xml
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="position-relative input-icon flex-fill">
                                                                        <span className="input-icon-addon">
                                                                            <i className="ti ti-search" />
                                                                        </span>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Search"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="custom-datatable-filter table-responsive no-datatable-length border">
                                                            <table className="table datatable">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Size</th>
                                                                        <th>Type</th>
                                                                        <th>Modified</th>
                                                                        <th>Share</th>
                                                                        <th />
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-01.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Secret
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.6 MB</td>
                                                                        <td>Doc</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Mar 15, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-27.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-29.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-12.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-02.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Sophie Headrick
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>7.4 MB</td>
                                                                        <td>PDF</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 8, 2025</p>
                                                                            <span>08:20:13 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-16.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-03.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Gallery
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>6.1 MB</td>
                                                                        <td>Image</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Aug 6, 2025</p>
                                                                            <span>04:10:12 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-02.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-03.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-05.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <Link
                                                                                    className="avatar bg-primary avatar-rounded text-fixed-white"
                                                                                    to="to"
                                                                                >
                                                                                    +1
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-04.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Doris Crowley
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>5.2 MB</td>
                                                                        <td>Folder</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">Jan 6, 2025</p>
                                                                            <span>03:40:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-06.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-10.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="d-flex align-items-center file-name-icon">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="avatar avatar-md bg-light"
                                                                                    data-bs-toggle="offcanvas"
                                                                                    data-bs-target="#preview"
                                                                                >
                                                                                    <ImageWithBasePath
                                                                                        src="assets/img/icons/file-05.svg"
                                                                                        className="img-fluid"
                                                                                        alt="img"
                                                                                    />
                                                                                </Link>
                                                                                <div className="ms-2">
                                                                                    <p className="text-title fw-medium  mb-0">
                                                                                        <Link
                                                                                            to="#"
                                                                                            data-bs-toggle="offcanvas"
                                                                                            data-bs-target="#preview"
                                                                                        >
                                                                                            Cheat_codez
                                                                                        </Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>8 MB</td>
                                                                        <td>Xml</td>
                                                                        <td>
                                                                            <p className="text-title mb-0">
                                                                                Oct 12, 2025
                                                                            </p>
                                                                            <span>05:00:14 PM</span>
                                                                        </td>
                                                                        <td>
                                                                            <div className="avatar-list-stacked avatar-group-sm">
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-04.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-28.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                                <span className="avatar avatar-rounded">
                                                                                    <ImageWithBasePath
                                                                                        className="border border-white"
                                                                                        src="assets/img/profiles/avatar-15.jpg"
                                                                                        alt="img"
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="rating-select me-2">
                                                                                    <Link to="to">
                                                                                        <i className="ti ti-star" />
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="dropdown">
                                                                                    <Link
                                                                                        to="#"
                                                                                        className="d-flex align-items-center justify-content-center"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <i className="ti ti-dots fs-14" />
                                                                                    </Link>
                                                                                    <ul className="dropdown-menu dropdown-menu-right p-3">
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-trash me-2" />
                                                                                                Permanent Delete
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                className="dropdown-item rounded-1"
                                                                                                to="#"
                                                                                            >
                                                                                                <i className="ti ti-edit-circle me-2" />
                                                                                                Restore File
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end mb-4">
                                    <div className="dropdown">
                                        <Link
                                            to="to"
                                            className="d-inline-flex align-items-center avatar avatar-lg avatar-rounded bg-primary"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="ti ti-plus fs-24 text-white" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end bg-gray-900 dropdown-menu-md dropdown-menu-dark p-3">
                                            <li>
                                                <Link
                                                    to="to"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-basket-code" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">
                                                            Add a Task
                                                        </h6>
                                                        <p className="text-white">
                                                            Create a new Priority tasks{" "}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="to"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-file-invoice" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">
                                                            Add Invoice
                                                        </h6>
                                                        <p className="text-white">Create a new Billing</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="to"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-file-description" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">Notes</h6>
                                                        <p className="text-white">
                                                            Create new note for you &amp; team
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="to"
                                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                                >
                                                    <span className="avatar avatar-md bg-gray-800 flex-shrink-0 me-2">
                                                        <i className="ti ti-folder-open" />
                                                    </span>
                                                    <div>
                                                        <h6 className="fw-medium text-white mb-1">Add Files</h6>
                                                        <p className="text-white">
                                                            Upload New files for this Client
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0"> 2025 © RecruitPro.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            Infinite Loopers
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
}

export default CandidateDetails;