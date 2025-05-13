import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';
import { all_routes } from '../../../routing-module/router/all_routes';

interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    appliedDate: string;
    status: string;
    image?: string;
    createDate?: string;
    phoneNumber?: string;
    department?: string;
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
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' } as const;
        return date.toLocaleDateString('en-GB', options); // DD/MM/YYYY
    } catch {
        return 'Not provided';
    }
};

const CandidateGrid = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            console.log('Fetching candidates from API...');
            try {
                const response = await fetch(`${process.env.BACKEND_URL}/api/user/get/candidates`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                const data = await response.json();
                console.log('API Response:', data);
                setCandidates(data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            } finally {
                console.log('Loading state:', false);
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
                                        to={all_routes.candidateskanban}
                                        className="btn btn-icon btn-sm"
                                    >
                                        <i className="ti ti-layout-kanban" />
                                    </Link>
                                    <Link
                                        to={all_routes.candidatesGrid}
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
                                    <div key={candidate.id} className="col-xxl-3 col-xl-4 col-md-6">
                                        <Link to={`/candidate-details2/${candidate.id}`} className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-start mb-3">
                                                    <div className="d-flex align-items-center flex-shrink-0">
                                                        <div className="avatar avatar-lg avatar rounded-circle me-2">
                                                            <img
                                                                src={candidate.image || 'assets/img/users/user-01.jpg'}
                                                                alt="User Image"
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <div className="d-flex flex-wrap mb-1">
                                                                <h6 className="fs-16 fw-semibold me-1">
                                                                    {candidate.firstName || 'Not provided'} {candidate.lastName || ''}
                                                                </h6>
                                                            </div>
                                                            <p className="text-gray fs-13 fw-normal">
                                                                {candidate.email || 'Not provided'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-light rounded p-2">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6 className="text-gray fs-14 fw-normal">Role</h6>
                                                        <span className="text-dark fs-14 fw-medium">
                                                            {candidate.role || 'Not provided'}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6 className="text-gray fs-14 fw-normal">Applied Date</h6>
                                                        <span className="text-dark fs-14 fw-medium">
                                                            {formatDate(candidate.createDate)}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h6 className="text-gray fs-14 fw-normal">Phone Number</h6>
                                                        <span className="fs-10 fw-medium badge bg-purple">
                                                            <i className="ti ti-point-filled" /> {candidate.phoneNumber || 'Not provided'}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h6 className="text-gray fs-14 fw-normal">Department</h6>
                                                        <span className="fs-10 fw-medium badge bg-primary">
                                                            <i className="ti ti-point-filled" /> {candidate.department || 'Not provided'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
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
                        Designed & Developed By{' '}
                        <Link to="#" className="text-primary">
                            InfiniteLoopers
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
};

export default CandidateGrid;