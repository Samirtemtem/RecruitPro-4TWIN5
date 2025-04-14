import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CandidateDetails = () => {
    const { id } = useParams(); // Get the application ID from the URL
    const [candidate, setCandidate] = useState(null);
    const [application, setApplication] = useState(null);
    const [resume, setResume] = useState(null); // State for resume data

    useEffect(() => {
        const fetchApplicationDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/app/applications/${id}`);
                const app = response.data;
                const cand = app ? app.candidate : null;
                setApplication(app);
                setCandidate(cand);
                localStorage.setItem('selectedApplication', JSON.stringify(app)); // Store in local storage
                
                // Fetch resume data if it exists
                if (app && app.CV) {
                    const resumeResponse = await axios.get(app.CV, { responseType: 'blob' }); // Fetch the resume blob
                    const resumeUrl = URL.createObjectURL(resumeResponse.data);
                    setResume(resumeUrl); // Set the resume URL
                }
            } catch (error) {
                console.error('Error fetching application details:', error);
            }
        };

        fetchApplicationDetails();
    }, [id]);

    const statusOrder = ['SUBMITTED', 'REVIEWED', 'INTERVIEWED', 'ACCEPTED', 'REJECTED'];

    const getNextStatus = (currentStatus) => {
        const currentIndex = statusOrder.indexOf(currentStatus);
        return currentIndex < statusOrder.length - 1 ? statusOrder[currentIndex + 1] : null;
    };

    const handleNextStage = async () => {
        if (application) {
            const nextStatus = getNextStatus(application.status);
            if (nextStatus) {
                try {
                    const response = await axios.patch(`http://localhost:5000/app/applications/${application._id}/status`, { status: nextStatus });
                    const updatedApplication = response.data;
                    setApplication(updatedApplication);
                    localStorage.setItem('selectedApplication', JSON.stringify(updatedApplication));
                } catch (error) {
                    console.error('Error updating status:', error);
                }
            }
        }
    };

    const handleReject = async () => {
        try {
            await axios.patch(`http://localhost:5000/app/applications/${application._id}/reject`);
            setApplication((prev) => ({ ...prev, status: 'REJECTED' }));
            localStorage.setItem('selectedApplication', JSON.stringify({ ...application, status: 'REJECTED' }));
        } catch (error) {
            console.error('Error rejecting application:', error);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center flex-wrap flex-md-nowrap row-gap-3">
                            <span className="avatar avatar-xxxl candidate-img flex-shrink-0 me-3">
                                <img src={candidate?.image || "assets/img/users/user-13.jpg"} alt="Candidate" />
                            </span>
                            <div className="flex-fill border rounded p-3 pb-0">
                                <div className="row align-items-center">
                                    {application && candidate && (
                                        <>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Candidate Name</p>
                                                    <h6 className="fw-normal">{candidate.firstName} {candidate.lastName}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Phone Number</p>
                                                    <h6 className="fw-normal">{candidate.phoneNumber}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Applied Date</p>
                                                    <h6 className="fw-normal">{application.submissionDate ? new Date(application.submissionDate).toLocaleDateString() : 'N/A'}</h6>
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
                                                    <p className="mb-1">Status</p>
                                                    <h6 className="fw-normal">{application.status}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Compatibility Score</p>
                                                    <h6 className="fw-normal">{application.compatibilityScore}</h6>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-grids-tab p-0 mb-3">
                    <ul className="nav nav-underline" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active pt-0" id="info-tab" data-bs-toggle="tab" data-bs-target="#basic-info" type="button" role="tab" aria-selected="true">
                                Profile
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-0" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-selected="false">
                                Hiring Pipeline
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-0" id="address-tab2" data-bs-toggle="tab" data-bs-target="#address2" type="button" role="tab" aria-selected="false">
                                Notes
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="info-tab" tabIndex={0}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Personal Information</h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Candidate Name</p>
                                            <h6 className="fw-normal">{candidate ? `${candidate.firstName} ${candidate.lastName}` : 'N/A'}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Phone</p>
                                            <h6 className="fw-normal">{candidate ? candidate.phoneNumber : 'N/A'}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Email</p>
                                            <h6 className="fw-normal">{candidate ? candidate.email : 'N/A'}</h6>
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
                                    <div className="col-md-12">
                                        {resume ? (
                                            <iframe
                                                src={resume}
                                                style={{ width: '100%', height: '500px' }}
                                                title="Resume"
                                                frameBorder="0"
                                            />
                                        ) : (
                                            <span>No CV available</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab" tabIndex={0}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="fw-medium mb-2">Candidate Pipeline Stage</h5>
                                <div className="pipeline-list candidates border-0 mb-0">
                                    <ul className="mb-0">
                                        {[
                                            { stage: 'SUBMITTED', color: '#6f42c1' },
                                            { stage: 'REVIEWED', color: '#007bff' },
                                            { stage: 'INTERVIEWED', color: '#ffc107' },
                                            { stage: 'REJECTED', color: '#dc3545' },
                                            { stage: 'ACCEPTED', color: '#28a745' }
                                        ].map((pipelineStage) => {
                                            const isActive = application && application.status === pipelineStage.stage;

                                            return (
                                                <li key={pipelineStage.stage}>
                                                    <Link
                                                        to="#"
                                                        style={{
                                                            backgroundColor: isActive ? pipelineStage.color : '#f8f9fa',
                                                            color: isActive ? '#fff' : '#000',
                                                            padding: '0.5rem 1rem',
                                                            borderRadius: '5px',
                                                            display: 'inline-block',
                                                            textDecoration: 'none'
                                                        }}
                                                    >
                                                        {pipelineStage.stage}
                                                    </Link>
                                                </li>
                                            );
                                        })}
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
                                            {application ? (
                                                <span className="badge badge-soft-purple d-inline-flex align-items-center">
                                                    <i className="ti ti-point-filled me-1" />
                                                    {application.status}
                                                </span>
                                            ) : (
                                                <span>No Status Available</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Applied Date</p>
                                            {application ? (
                                                <h6 className="fw-normal">{new Date(application.submissionDate).toLocaleDateString()}</h6>
                                            ) : (
                                                <h6 className="fw-normal">N/A</h6>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Recruiter</p>
                                            <h6 className="fw-normal">
                                                <Link to="#">- Not assigned -</Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-end">
                                    <button onClick={handleReject} className="btn btn-dark me-3">Reject</button>
                                    <button onClick={handleNextStage} className="btn btn-primary">Move to Next Stage</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="address2" role="tabpanel" aria-labelledby="address-tab2" tabIndex={0}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Notes</h5>
                            </div>
                            <div className="card-body">
                                <p>No notes available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateDetails;