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
import axios from 'axios';
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
        publishDate:string;
        deadline:string;
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
    const [application, setApplication] = useState<any>(null); // Hold application object

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




    const statusOrder = ['SUBMITTED', 'REVIEWED', 'INTERVIEWED', 'ACCEPTED', 'REJECTED'];

    const getNextStatus = (currentStatus: string) => {
        const currentIndex = statusOrder.indexOf(currentStatus);
        console.log(`Current Status: ${currentStatus}, Current Index: ${currentIndex}`);
        
        if (currentIndex === -1) {
            console.warn(`Invalid current status: ${currentStatus}`);
            return null;
        }
    
        return currentIndex < statusOrder.length - 1 ? statusOrder[currentIndex + 1] : null;
    };
    
    const handleNextStage = async () => {
        if (application) {
            console.log('Current Application:', application);
    
            const nextStatus = getNextStatus(application.status);
            console.log('Next Status:', nextStatus);
    
            if (nextStatus) {
                try {
                    console.log(`Updating status to: ${nextStatus} for application ID: ${application._id}`);
                    const response = await axios.patch(`http://localhost:5000/app/applications/${application._id}/status`, { status: nextStatus });
                    const updatedApplication = response.data;
                    console.log('Updated Application:', updatedApplication);
    
                    // Update local application state
                    setApplication(updatedApplication);
                    console.log('Application state updated successfully.');
    
                    // Update candidate's applications in state
                    if (candidate) {
                        const updatedCandidate = {
                            ...candidate,
                            applications: candidate.applications.map(app =>
                                app._id === updatedApplication._id ? updatedApplication : app
                            )
                        };
                        setCandidate(updatedCandidate);
                        localStorage.setItem('selectedCandidate', JSON.stringify(updatedCandidate)); // Update localStorage
                        console.log('Candidate state updated and saved to localStorage.');
                    }
                } catch (error) {
                    console.error('Error updating status:', error);
                    // Optionally, you could show an alert or UI message here
                }
            } else {
                console.warn('No next stage available');
            }
        } else {
            console.warn('No application found to update status.');
        }
    };






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
                <h5>Skills</h5>
          
                <Link
                    to="#"
                    className="d-flex align-items-center collapsed collapse-arrow ms-auto"
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
                                    to={all_routes.projectdetails}
                                    className="flex-shrink-0 me-2"
                                >
                                    <ImageWithBasePath
                                        src="job-application4.png"
                                        className="img-fluid rounded-circle"
                                        alt="img"
                                    />
                                </Link>
                                <div className="col-md-16 mr-8">
                                    <h6 className="mb-1">
                                        <Link to={all_routes.projectdetails}>
                                            {application.compatibilityScore}
                                        </Link>
                                    </h6>
                                    <div className="d-flex align-items-center">
                                        <p>
                                            <span className="text-primary">
                                                {application.status}
                                                <i className="ti ti-point-filled text-primary mx-1" />
                                            </span>
                                            Assigned on {new Date(application.submissionDate).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
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
    to={`/application/${application._id}`} // Redirect to the application path using the ID
    onClick={() => {
        // Store the application details in local storage
        localStorage.setItem('selectedApplication', JSON.stringify(application));
    }}
>
    View Info
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



           














        </>








    )
}

export default CandidateDetails2;
