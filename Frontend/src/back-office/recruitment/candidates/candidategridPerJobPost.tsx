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
        image: string;
        id: string;
    };
    CV: string;
    status: string;
    submissionDate: string;
}

// Helper function to format date
const formatDate = (dateString?: string) => {
    if (!dateString) {
        return 'Not provided';
    }
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return 'Not provided';
        }
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch {
        return 'Not provided';
    }
};

const CandidateGridPerJobPost = () => {
    const { id } = useParams<{ id: string }>(); // Get the id from the URL
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            console.log('Fetching candidates for jobPostId:', id);
            try {
                const response = await fetch(`http://localhost:5000/app/jobposts/${id}/candidates`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched candidates:', data);
                setCandidates(data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            } finally {
                console.log('Loading state:', false);
                setLoading(false);
            }
        };

        fetchCandidates();
    }, [id]);

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
                            <div className="me-2 mb-2">
                                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                                    <Link
                                        to={`/applications-kanban/${id}`}
                                        className="btn btn-icon btn-sm"
                                    >
                                        <i className="ti ti-layout-kanban" />
                                    </Link>
                                    <Link
                                        to={`/candidates-grid/${id}`}
                                        className="btn btn-icon btn-sm active bg-primary text-white me-1"
                                    >
                                        <i className="ti ti-layout-grid" />
                                    </Link>
                                </div>
                            </div>
                            <div className="head-icons">
                                <CollapseHeader />
                            </div>
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
                        ) : candidates.length === 0 ? (
                            <div className="col-md-12 text-center">
                                <p>No candidates found.</p>
                            </div>
                        ) : (
                            candidates.map((candidate) => {
                                console.log('Candidate data:', candidate);
                                return (
                                    <div key={candidate?._id || `candidate-${Math.random()}`} className="col-xxl-3 col-xl-4 col-md-6">
                                        <Link to={`/candidate-details2/${candidate?.candidate?.id || ''}`} className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-start mb-3">
                                                    <div className="d-flex align-items-center flex-shrink-0">
                                                        <div className="avatar avatar-lg avatar rounded-circle me-2">
                                                            {candidate?.candidate?.image ? (
                                                                <img
                                                                    src={candidate.candidate.image}
                                                                    alt="User Image"
                                                                    className="img-fluid rounded-circle"
                                                                />
                                                            ) : (
                                                                <i className="ti ti-user-circle text-gray-3 fs-16" />
                                                            )}
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <div className="d-flex flex-wrap mb-1">
                                                                <h6 className="fs-16 fw-semibold me-1">
                                                                    {candidate?.candidate?.firstName || 'Not provided'} {candidate?.candidate?.lastName || ''}
                                                                </h6>
                                                                <span className="badge bg-primary-transparent">
                                                                    {candidate?.candidate?.role || 'Not provided'}
                                                                </span>
                                                            </div>
                                                            <p className="text-gray fs-13 fw-normal">
                                                                {candidate?.candidate?.email || 'Not provided'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-light rounded p-2">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6 className="text-gray fs-14 fw-normal">Applied Role</h6>
                                                        <span className="text-dark fs-14 fw-medium">
                                                            {candidate?.candidate?.role || 'Not provided'}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6 className="text-gray fs-14 fw-normal">Submission Date</h6>
                                                        <span className="text-dark fs-14 fw-medium">
                                                            {formatDate(candidate?.submissionDate)}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className="text-gray fs-14 fw-normal">CV</h6>
                                                        {candidate?.CV ? (
                                                            <a href={candidate.CV} target="_blank" rel="noopener noreferrer" className="text-primary">
                                                                View CV
                                                            </a>
                                                        ) : (
                                                            <span className="text-gray">Not available</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    {/* /Candidates Grid */}
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0">2025 © RECRUITPRO.</p>
                    <p>
                        Designed & Developed By{' '}
                        <Link to="#" className="text-primary">
                            INFINITE LOOPERS
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
};

export default CandidateGridPerJobPost;