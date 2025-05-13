import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { all_routes } from '../../../routing-module/router/all_routes';
import dragula from "dragula";
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';
import axios from 'axios';

const ApplicationsKanban = () => {
    const { jobPostId } = useParams(); // Get jobPostId from the route parameters
    const [groupedCandidates, setGroupedCandidates] = useState({});
    const containerRefs = useRef([]);

    useEffect(() => {
        const fetchGroupedCandidates = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/jobs/grouped/${jobPostId}`);
                console.log('API Response:', response.data);
                setGroupedCandidates(response.data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };

        fetchGroupedCandidates();
    }, [jobPostId]);

    useEffect(() => {
        const containers = containerRefs.current.filter(ref => ref !== null);
        console.log('Dragula containers:', containers.length, containers);
        const drake = dragula(containers);
        return () => {
            drake.destroy();
        };
    }, [groupedCandidates]);

    // Function to format date to month-day
    const formatDate = (dateString) => {
        if (!dateString) {
            return 'Unknown';
        }
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return 'Unknown';
            }
            const options = { month: 'long', day: 'numeric' };
            return date.toLocaleDateString(undefined, options);
        } catch {
            return 'Unknown';
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
                                        Applications Kanban
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                            <div className="me-2 mb-2">
                                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                                    <Link
                                        to={`/applications-kanban/${jobPostId}`}
                                        className="btn btn-icon btn-sm active bg-primary text-white me-1"
                                    >
                                        <i className="ti ti-layout-kanban" />
                                    </Link>
                                    <Link to={`/candidates-grid/${jobPostId}`} className="btn btn-icon btn-sm">
                                        <i className="ti ti-layout-grid" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    
                    {/* Applications Kanban */}
                    <div className="row">
                        <div className="d-flex align-items-start overflow-auto project-status pb-4">
                            {Object.entries(groupedCandidates).map(([status, candidates], index) => (
                                <div className="p-3 rounded bg-transparent-secondary w-100 me-3" key={status} ref={el => containerRefs.current[index] = el}>
                                    <div className="bg-white p-2 rounded mb-2">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="bg-soft-pink p-1 d-flex rounded-circle me-2">
                                                    <span className="bg-purple rounded-circle d-block p-1" />
                                                </span>
                                                <h5 className="me-2">{status || 'Unknown'}</h5>
                                                <span className="badge bg-light rounded-pill">{candidates?.length || 0}</span>
                                            </div>
                                            <div className="dropdown">
                                                <Link
                                                    to="#"
                                                    className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="ti ti-dots-vertical" />
                                                </Link>
                                                <ul className="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <Link to="#" className="dropdown-item rounded-1">
                                                            <i className="ti ti-edit me-2" />
                                                            Edit
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="dropdown-item rounded-1">
                                                            <i className="ti ti-trash me-2" />
                                                            Delete
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-drag-wrap">
                                        {(candidates || []).map(candidate => {
                                            console.log('Candidate data:', candidate);
                                            return (
                                                <div className="card kanban-card mb-2" key={candidate?._id || `candidate-${index}`}>
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center flex-shrink-0 mb-3">
                                                            <Link
                                                                to={`/application/${candidate?._id || ''}`}
                                                                onClick={() => {
                                                                    localStorage.setItem('selectedApplication', JSON.stringify(candidate || {}));
                                                                }}
                                                                className="avatar avatar-lg avatar rounded-circle me-2"
                                                            >
                                                                {candidate?.candidate?.image ? (
                                                                    <img
                                                                        src={candidate.candidate.image}
                                                                        className="img-fluid h-20 w-20"
                                                                        alt="Candidate"
                                                                    />
                                                                ) : (
                                                                    <i className="ti ti-user-circle text-gray-3 fs-16" />
                                                                )}
                                                            </Link>
                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex flex-wrap">
                                                                    <h6 className="text-dark fs-16 fw-semibold">
                                                                        <Link
                                                                            to={`/application/${candidate?._id || ''}`}
                                                                            onClick={() => {
                                                                                localStorage.setItem('selectedApplication', JSON.stringify(candidate || {}));
                                                                            }}
                                                                        >
                                                                            {candidate?.candidate?.firstName || 'Not provided'} {candidate?.candidate?.lastName || ''}
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                                <p className="text-gray fs-13 fw-normal">
                                                                    {candidate?.candidate?.email || 'Not provided'}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <h6 className="text-gray fs-14 fw-normal mb-2">
                                                                    Applied Role
                                                                </h6>
                                                                <span className="text-dark fs-14 fw-medium">
                                                                    <Link to={`/projects-details/${jobPostId}`} className="text-dark">
                                                                        {candidate?.jobPost?.title || 'Not provided'}
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                            <span className="border-start text-gray fs-14 fw-normal" />
                                                            <div>
                                                                <h6 className="text-gray fs-14 fw-normal mb-2">
                                                                    Applied Date
                                                                </h6>
                                                                <span className="text-dark fs-14 fw-medium">
                                                                    {formatDate(candidate?.submissionDate)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* /Applications Kanban */}
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0"> 2025 © RecruitPro.</p>
                    <p>
                        Designed & Developed By{" "}
                        <Link to="#" className="text-primary">
                            Infinite Loopers
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
};

export default ApplicationsKanban;