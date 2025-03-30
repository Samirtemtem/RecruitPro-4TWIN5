import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PredefinedDateRanges from '../../core/common/datePicker'
import Table from "../../core/common/dataTable/index";
import { all_routes } from '../../routing-module/router/all_routes';
import ImageWithBasePath from '../../core/common/imageWithBasePath';
import { employeereportDetails } from '../../core/data/json/employeereportDetails';
import { DatePicker, TimePicker } from "antd";
import CommonSelect from '../../core/common/commonSelect';
import CollapseHeader from '../../core/common/collapse-header/collapse-header';
type PasswordField = "password" | "confirmPassword";



// Define the Candidate interface
interface Candidate {
    id: string; // Unique identifier for the candidate
    firstName: string; // Candidate's first name
    lastName: string; // Candidate's last name
    email: string; // Candidate's email address
    phoneNumber: string; // Candidate's phone number
    department:String;
    cv:string;
    address: string; // Candidate's address
    role: string; // Candidate's role (e.g., "CANDIDATE")
    image?: string; // Optional profile image URL
    createDate: string; // Date when the candidate was created
    updatedAt: string; // Date when the candidate was last updated
    applications: Array<{
        _id: string; // Unique identifier for the application
        CV: string; // URL to the candidate's CV
        compatibilityScore: number; // Score indicating compatibility
        createdAt: string; // Date when the application was created
        updatedAt: string; // Date when the application was last updated
        feedback: Array<string>; // Feedback received on the application
        interviews: Array<string>; // List of interview IDs
        jobPost: string; // Reference to the job post
        status: string; // Application status (e.g., "SUBMITTED")
        submissionDate: string; // Date of submission
        department: string; // Department related to the application
    }>;
    jobPosts: Array<{
        _id: string; // Job post ID
        title: string; // Job title
        department: string; // Department name
        description: string; // Job description
        requirements: Array<string>; // List of required skills
        status: string; // Job status (e.g., "CLOSED")
        experience:number;
        createdAt: string; // Date when the job post was created
        updatedAt: string; // Date when the job post was last updated
    }>;
    profile: {
        address: string; // Address from the profile
        cv: string; // URL to the candidate's CV
        education: Array<{ // Education details
            _id: string; // Education ID
            institution: string; // Institution name
            diploma: string; // Diploma name
            startDate: string; // Start date
            endDate: string; // End date
        }>;
        experience: Array<{ // Experience details
            _id: string; // Experience ID
            position: string; // Job position
            enterprise: string; // Company name
            startDate: string; // Start date
            endDate: string; // End date
        }>;
        firstName: string; // Profile first name
        lastName: string; // Profile last name
        phoneNumber: string; // Profile phone number
        profileImage: string; // URL to the profile image
        skills: Array<{ // Skills details
            _id: string; // Skill ID
            name: string; // Skill name
            degree: string; // Skill degree (e.g., "INTERMEDIATE")
        }>;
        socialLinks: Array<{ // Social link details
            platform: string; // Social media platform (e.g., "LinkedIn")
            link: string; // URL to the profile
        }>;
    };
    isVerified: boolean; // Verification status
    is2FAEnabled: boolean; // Two-factor authentication status
    verificationToken?: string; // Optional verification token
}
const CandidateDetails2: React.FC = () => {

  
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
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                                <Link to="/candidates-grid">
                                    <i className="ti ti-arrow-left me-2" />
                                    Candidates
                                </Link>
                            </h6>
                        </div>
                        {/*
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
                        */}
                    </div>
                    {/* /Breadcrumb */}
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
                                            <span className="badge badge-soft-dark fw-medium me-2">
                                                <i className="ti ti-point-filled me-1" />
                                                {candidate.role}
                                            </span>
                                            <span className="badge badge-soft-secondary fw-medium">
                                                {candidate.department}
                                            </span>
                                        </div>
                                        <div>
                                            
                                       
                                            <div className="row gx-2 mt-3">
                                            <div className="col-6">
    <div>
        <Link
            to="#"
            className="btn btn-dark w-100"
            data-bs-toggle="modal" 
            data-inert={true}
            data-bs-target="#edit_employee"
        >
            <i className="ti ti-phone me-1" />  {/* Updated icon for Call */}
            Call
        </Link>
    </div>
</div>
<div className="col-6">
    <div>
        <Link to={all_routes.chat} className="btn btn-primary w-100">
            <i className="ti ti-envelope me-1" />  {/* Updated icon for Send Mail */}
            Send Mail
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
                                            <p className="text-dark">{candidate.phoneNumber} </p>
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
                                            {candidate.profile.address} 
                                            </p>
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
                                                            <h5>About Candidate</h5>
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
                                                                data-bs-target="#primaryBorderOne1"
                                                                aria-expanded="false"
                                                                aria-controls="primaryBorderOne"
                                                            >
                                                                <i className="ti ti-chevron-down fs-18" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="primaryBorderOne1"
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
    <div className="accordion-header" id="headingOne">
        <div className="accordion-button">
            <div className="d-flex align-items-center flex-fill">
                <h5>Skills</h5>
                <Link
                    to="#"
                    className="btn btn-sm btn-icon ms-auto"
                    data-bs-toggle="modal"
                    data-inert={true}
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
            {candidate.profile.skills.length > 0 ? (
                <div className="row">
                    {candidate.profile.skills.map((skill) => (
                        <div key={skill._id} className="col-6 col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h6 className="card-title">{skill.name}</h6>
                                    <p className="card-text">Proficiency: {skill.degree}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No skills available.</p>
            )}
        </div>
    </div>
</div>

                                            {/*   <div className="accordion-item">
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
                                            </div>*/}
                                          
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
                                data-bs-toggle="modal"
                                data-inert={true}
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
                        {candidate.profile.education.map((edu) => (
                            <div className="mb-3" key={edu._id}>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <span className="d-inline-flex align-items-center fw-normal">
                                            {edu.institution}
                                        </span>
                                        <h6 className="d-flex align-items-center mt-1">
                                            {edu.diploma}
                                        </h6>
                                    </div>
                                    <p className="text-dark">
                                        {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                                data-bs-toggle="modal"
                                data-inert={true}
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
                        {candidate.profile.experience.map((exp) => (
                            <div className="mb-3" key={exp._id}>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="d-inline-flex align-items-center fw-medium">
                                            {exp.enterprise}
                                        </h6>
                                        <span className="d-flex align-items-center badge bg-secondary-transparent mt-1">
                                            <i className="ti ti-point-filled me-1" />
                                            {exp.position}
                                        </span>
                                    </div>
                                    <p className="text-dark">
                                        {new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                                                                    Job Posts
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
                                                                    Applications
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
        {candidate.jobPosts.map((job) => (
            <div className="col-md-6 d-flex" key={job._id}>
                <div className="card flex-fill mb-4 mb-md-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
                            <Link
                                to={all_routes.projectdetails}
                                className="flex-shrink-0 me-2"
                            >
                                <ImageWithBasePath
                                    src="assets/img/social/project-03.svg" // Update this with a dynamic image source if available
                                    alt="Img"
                                />
                            </Link>
                            <div>
                                <h6 className="mb-1">
                                <Link to={`/projects-details/${job._id}`}>
    {job.title}
</Link>
                                </h6>
                                <div className="d-flex align-items-center">
                                    <p className="mb-0 fs-13">{job.department}</p>
                                    <p className="fs-13">
                                        <span className="mx-1">
                                            <i className="ti ti-point-filled text-primary" />
                                        </span>
                                        {job.status}
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
                                        {new Date(job.createdAt).toLocaleDateString()} - {new Date(job.updatedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <span className="mb-1 d-block">
                                        Experience Needed
                                    </span>
                                    <Link
                                        to="#"
                                        className="fw-normal d-flex align-items-center"
                                    >
                                        
                                        {job.experience} Years
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
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
        {candidate.applications.map((application) => (
            <div className="col-md-12 d-flex" key={application._id}>
                <div className="card flex-fill">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="d-flex align-items-center">
                                    <Link
                                        to={all_routes.projectdetails} // Update this link to point to the appropriate details page for the application
                                        className="flex-shrink-0 me-2"
                                    >
                                        <ImageWithBasePath
                                            src="job-application4.png" // Update this with a dynamic image source if available
                                            className="img-fluid rounded-circle"
                                            alt="img"
                                        />
                                    </Link>
                                    <div>
                                        <h6 className="mb-1">
                                            <Link to={all_routes.projectdetails}>
                                                {application.compatibilityScore} {/* Compatibility score or job title */}
                                            </Link>
                                        </h6>
                                        <div className="d-flex align-items-center">
                                            <p>
                                                <span className="text-primary">
                                                    {application.status} {/* Display application status */}
                                                    <i className="ti ti-point-filled text-primary mx-1" />
                                                </span>
                                                Assigned on {new Date(application.submissionDate).toLocaleString()} {/* Submission date */}
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
                                            src="job-application.png" // Update this with the actual image source if available
                                            alt="Img"
                                        />
                                        <Link
                                            to={application.CV} // Use the application.CV URL
                                            className="text-info"
                                            target="_blank" // Open in a new tab
                                            rel="noopener noreferrer" // Security measure
                                        >
                                            CV
                                        </Link>
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
                                                 data-bs-toggle="offcanvas"
                                                 data-bs-target="#candidate_details"
                                            >
                                                View Info
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                                data-bs-toggle="modal"
                                                data-inert={true}
                                                data-bs-target="#refuse_msg"
                                            >
                                                Raise Issue
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
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
                    <p className="mb-0">2025 © RecruitPro.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            Infifnite Loopers
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}


{/* Candidate Details */}
<div
                className="offcanvas offcanvas-end offcanvas-large"
                tabIndex={-1}
                id="candidate_details"
            >
                <div className="offcanvas-header border-bottom">
                    <h4 className="d-flex align-items-center">
                        Candidate Details
                        <span className="badge bg-primary-transparent fw-medium ms-2">
                            Cand-001
                        </span>
                    </h4>
                    <button
                        type="button"
                        className="btn-close custom-btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <i className="ti ti-x" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap flex-md-nowrap row-gap-3">
                                <span className="avatar avatar-xxxl candidate-img flex-shrink-0 me-3">
                                    <img  src={candidate.image || "assets/img/users/user-13.jpg"} />
                                </span>
                                <div className="flex-fill border rounded p-3 pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Candiate Name</p>
                                                <h6 className="fw-normal">{candidate.firstName} {candidate.lastName}</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Role</p>
                                                <h6 className="fw-normal">Accountant</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Date</p>
                                                <h6 className="fw-normal">12 Sep 2024</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Email</p>
                                                <h6 className="fw-normal">{candidate.email}</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Recruiter</p>
                                                <h6 className="fw-normal d-flex align-items-center">
                                                    <span className="avatar avatar-xs avatar-rounded me-1">
                                                        <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                                                    </span>
                                                    Anthony Lewis
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <p className="mb-1">Recruiter</p>
                                                <span className="badge badge-purple d-inline-flex align-items-center">
                                                    <i className="ti ti-point-filled me-1" />
                                                    New
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-grids-tab p-0 mb-3">
                        <ul className="nav nav-underline" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active pt-0"
                                    id="info-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#basic-info"
                                    type="button"
                                    role="tab"
                                    aria-selected="true"
                                >
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link pt-0"
                                    id="address-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#address"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    Hiring Pipeline
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link pt-0"
                                    id="address-tab2"
                                    data-bs-toggle="tab"
                                    data-bs-target="#address2"
                                    type="button"
                                    role="tab"
                                    aria-selected="false"
                                >
                                    Notes
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="basic-info"
                            role="tabpanel"
                            aria-labelledby="info-tab"
                            tabIndex={0}
                        >
                            <div className="card">
                                <div className="card-header">
                                    <h5>Personal Information</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Candiate Name</p>
                                                <h6 className="fw-normal">{candidate.firstName} {candidate.lastName}</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Phone</p>
                                                <h6 className="fw-normal">{candidate.phoneNumber}</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Gender</p>
                                                <h6 className="fw-normal">Male</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Date of Birth</p>
                                                <h6 className="fw-normal">23 Oct 2000</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Email</p>
                                                <h6 className="fw-normal">{candidate.email}</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Nationality</p>
                                                <h6 className="fw-normal">Indian</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Religion</p>
                                                <h6 className="fw-normal">Christianity</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Marital status</p>
                                                <h6 className="fw-normal">No</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Address Information</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Address</p>
                                                <h6 className="fw-normal">{candidate.address}</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">City</p>
                                                <h6 className="fw-normal">New York</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">State</p>
                                                <h6 className="fw-normal">New York</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Country</p>
                                                <h6 className="fw-normal">United States Of America</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Resume</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="avatar avatar-lg bg-light-500 border text-dark me-2">
                                                    <i className="ti ti-file-description fs-24" />
                                                </span>
                                                <div>
                                                    <h6 className="fw-medium">Resume.doc</h6>
                                                    <span>120 KB</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3 text-md-end">
                                                <Link
                                                    to={candidate.cv}
                                                    className="btn btn-dark d-inline-flex align-items-center"
                                                >
                                                    <i className="ti ti-download me-1" />
                                                    Download
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="address"
                            role="tabpanel"
                            aria-labelledby="address-tab"
                            tabIndex={0}
                        >
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="fw-medium mb-2">Candidate Pipeline Stage</h5>
                                    <div className="pipeline-list candidates border-0 mb-0">
                                        <ul className="mb-0">
                                            <li>
                                                <Link to="#" className="bg-purple">
                                                    New
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-gray-100">
                                                    Scheduled
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-grat-100">
                                                    Interviewed
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-gray-100">
                                                    Offered
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="bg-gray-100">
                                                    Hired / Rejected
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Details</h5>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Current Status</p>
                                                <span className="badge badge-soft-purple d-inline-flex align-items-center">
                                                    <i className="ti ti-point-filled me-1" />
                                                    New
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Role</p>
                                                <h6 className="fw-normal">Accountant</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Applied Date</p>
                                                <h6 className="fw-normal">12 Sep 2024</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <p className="mb-1">Recruiter</p>
                                                <div className="d-flex align-items-center">
                                                    <Link
                                                        to="#"
                                                        className="avatar avatar-sm avatar-rounded me-2"
                                                    >
                                                        <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="Img" />
                                                    </Link>
                                                    <h6>
                                                        <Link to="#">Anthony Lewis</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <Link to="#" className="btn btn-dark me-3">
                                            Reject
                                        </Link>
                                        <Link to="#" className="btn btn-primary">
                                            Move to Next Stage
                                        </Link>
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
                            <div className="card">
                                <div className="card-header">
                                    <h5>Notes</h5>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Harold Gaynor is a detail-oriented and highly motivated
                                        accountant with 4 years of experience in financial reporting,
                                        auditing, and tax preparation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Candidate Details */}

           
        </>








    )
}

export default CandidateDetails2;
