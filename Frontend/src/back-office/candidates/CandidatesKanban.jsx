import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../routing-module/router/all_routes';
import dragula, { Drake } from "dragula";
import CollapseHeader from '../../core/common/collapse-header/collapse-header';
import axios from 'axios';

const CandidateKanban = () => {
    const [groupedCandidates, setGroupedCandidates] = useState({});
    const containerRefs = useRef([]);

    useEffect(() => {
        const fetchGroupedCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:5000/app/grouped');
                setGroupedCandidates(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };

        fetchGroupedCandidates();
    }, []);

    useEffect(() => {
        const containers = containerRefs.current.filter(ref => ref !== null);
        const drake = dragula(containers);
        return () => {
            drake.destroy();
        };
    }, [groupedCandidates]);

    // Function to format date to month-day
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
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
                                        Candidates Kanban
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="me-2 mb-2">
                                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                                    <Link
                                        to={all_routes.candidateskanban}
                                        className="btn btn-icon btn-sm active bg-primary text-white me-1"
                                    >
                                        <i className="ti ti-layout-kanban" />
                                    </Link>
                                
                                    <Link to={all_routes.candidatesGrid} className="btn btn-icon btn-sm">
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
                                <h5>Candidates Kanban</h5>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                    <div className="me-3">
                                        <div className="input-icon-end position-relative">
                                            <span className="input-icon-addon">
                                                <i className="ti ti-chevron-down" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Candidates Kanban */}
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
                                                <h5 className="me-2">{status}</h5>
                                                <span className="badge bg-light rounded-pill">{candidates.length}</span>
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
                                                        <Link to="#" className="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal">
                                                            <i className="ti ti-trash me-2" />
                                                            Delete
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kanban-drag-wrap">
                                        {candidates.map(candidate => (
                                            <div className="card kanban-card mb-2" key={candidate._id}>
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center flex-shrink-0 mb-3">
                                                        <Link
                                                            to={`/application/${candidate._id}`} // Redirect to the application path using the ID
                                                            onClick={() => {
                                                                // Store the application details in local storage
                                                                localStorage.setItem('selectedApplication', JSON.stringify(candidate.application));
                                                            }}
                                          
                                                            className="avatar avatar-lg avatar rounded-circle me-2"
                                                            data-bs-toggle="offcanvas"
                                                            
                                                        >
                                                            <img
                                                                src={candidate.candidate.image} // Replace with the actual candidate image source
                                                                className="img-fluid h-20 w-20"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <div className="d-flex flex-column">
                                                            <div className="d-flex flex-wrap">
                                                                <h6 className="text-dark fs-16 fw-semibold">
                                                                    <Link
                                                                     to={`/application/${candidate._id}`} // Redirect to the application path using the ID
                                                                     onClick={() => {
                                                                         // Store the application details in local storage
                                                                         localStorage.setItem('selectedApplication', JSON.stringify(candidate.application));
                                                                     }}
                                                                        
                                                                    >
                                                                        {candidate.candidate.firstName} {candidate.candidate.lastName} {/* Replace with actual name */}
                                                                    </Link>
                                                                </h6>
                                                            </div>
                                                            <p className="text-gray fs-13 fw-normal">
                                                                {candidate.candidate.email} {/* Replace with actual email */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h6 className="text-gray fs-14 fw-normal mb-2">
                                                                Applied Role
                                                            </h6>
                                                            <span className="text-dark fs-14 fw-medium">
                                                                {candidate.jobPost.title} {/* Replace with actual role */}
                                                            </span>
                                                        </div>
                                                        <span className="border-start text-gray fs-14 fw-normal" />
                                                        <div>
                                                            <h6 className="text-gray fs-14 fw-normal mb-2">
                                                                Applied Date
                                                            </h6>
                                                            <span className="text-dark fs-14 fw-medium">
                                                                {formatDate(candidate.submissionDate)} {/* Format date */}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* /Candidates Kanban */}
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

export default CandidateKanban;