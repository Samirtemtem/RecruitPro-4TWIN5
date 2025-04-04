import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PredefinedDateRanges from '../../../core/common/datePicker';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';
import { all_routes } from '../../../routing-module/router/all_routes';

interface Candidate {
    id: string; // Update this to match the data structure
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    appliedDate: string; // Adjust the type if needed
    status: string;
    image?: string; // Optional
    createDate?: string;
    phoneNumber?: string;
}

const UsersList = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/get/getUsers'); // Adjust the URL accordingly
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCandidates(data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidates();
    }, []);

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Users</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Administration</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Users Grid
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
                                <div key={candidate.id} className="col-xxl-3 col-xl-4 col-md-6">
                                    <Link to={`/candidate-details2/${candidate.id}`} className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <div className="d-flex align-items-center flex-shrink-0">
                                                    <div className="avatar avatar-lg avatar rounded-circle me-2">
                                                        <img src={candidate.image || "assets/img/users/user-01.jpg"} alt="User Image" className="img-fluid" />
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <div className="d-flex flex-wrap mb-1">
                                                            <h6 className="fs-16 fw-semibold me-1">
                                                                {candidate.firstName} {candidate.lastName}
                                                            </h6>
                                                            <span className="badge bg-primary-transparent">
                                                                tt
                                                            </span>
                                                        </div>
                                                        <p className="text-gray fs-13 fw-normal">
                                                            {candidate.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-light rounder p-2">
                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                    <h6 className="text-gray fs-14 fw-normal"> Role</h6>
                                                    <span className="text-dark fs-14 fw-medium">{candidate.role}</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                    <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                                    <span className="text-dark fs-14 fw-medium">{candidate.createDate}</span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h6 className="text-gray fs-14 fw-normal">Phone Number</h6>
                                                    <span className="fs-10 fw-medium badge bg-purple">
                                                        <i className="ti ti-point-filled" /> {candidate.phoneNumber}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )}
                        <div className="col-md-12">
                            <div className="text-center mb-4">
                                <Link to="#" className="btn btn-primary">
                                    <i className="ti ti-loader-3 me-1" />
                                    Load More
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /Candidates Grid */}
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0">2025 © RECRUITPRO.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            Dreams
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
}

export default UsersList;