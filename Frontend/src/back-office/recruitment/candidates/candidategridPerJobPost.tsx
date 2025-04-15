import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PredefinedDateRanges from '../../../core/common/datePicker';
import { all_routes } from '../../../routing-module/router/all_routes';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';

interface Candidate {
    _id: string;
    candidate: {
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        image: string; // Add image property
        id:String;
    };
    CV: string;
    status: string;
    submissionDate: string;
}

const CandidateGridPerJobPost = () => {
    const { id } = useParams<{ id: string }>(); // Get the id from the URL
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch(`http://localhost:5000/app/jobposts/${id}/candidates`); // Use the id in the URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched candidates:', data); // Log the fetched candidates
                setCandidates(data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidates();
    }, [id]); // Dependency array includes id

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Candidates</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Administration</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Candidates Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                            <CollapseHeader />
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                <h5>Candidates Grid</h5>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                    <div className="me-3">
                                        <PredefinedDateRanges />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Candidates Grid */}
                    <div className="row">
    {loading ? (
        <div className="col-md-12 text-center">
            <p>Loading candidates...</p>
        </div>
    ) : (
        candidates.map((candidate) => (
            <div key={candidate._id} className="col-xxl-3 col-xl-4 col-md-6">
                <Link to={`/candidate-details2/${candidate.candidate.id}`} className="card"> {/* Wrap the card with Link */}
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div className="d-flex align-items-center flex-shrink-0">
                                <div className="avatar avatar-lg avatar rounded-circle me-2">
                                    <img 
                                        src={candidate.candidate.image || "assets/img/users/user-01.jpg"} 
                                        alt="User Image" 
                                        className="img-fluid rounded-circle" 
                                    />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-wrap mb-1">
                                        <h6 className="fs-16 fw-semibold me-1">
                                            {candidate.candidate.firstName} {candidate.candidate.lastName} 
                                        </h6>
                                        <span className="badge bg-primary-transparent">
                                            {candidate.candidate.role}
                                        </span>
                                    </div>
                                    <p className="text-gray fs-13 fw-normal">
                                        {candidate.candidate.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light rounder p-2">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                <span className="text-dark fs-14 fw-medium">{candidate.candidate.role}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="text-gray fs-14 fw-normal">Submission Date</h6>
                                <span className="text-dark fs-14 fw-medium">{new Date(candidate.submissionDate).toLocaleDateString()}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="text-gray fs-14 fw-normal">CV</h6>
                                <a href={candidate.CV} target="_blank" rel="noopener noreferrer" className="text-primary">
                                    View CV
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        ))
    )}
</div>
                    {/* /Candidates Grid */}
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0">2025 © RECRUITPRO.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            INFINITE LOOPERS
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
}

export default CandidateGridPerJobPost;