import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
import { useNavigate } from 'react-router-dom';

interface Request {
    _id: string;
    position: string;
    description: string;
    requirements: string[];
    department: string;
    experience: any;
    status: "OPEN" | "CLOSED" | "PENDING";
    createdAt: string; // Changed from publishDate to createdAt
    deadline: string;
}

interface JobPost {
    title: string;
    description: string;
    requirements: string[];
    department: string;
    experience: number;
    status: "OPEN" | "CLOSED" | "PENDING";
    publishDate: string;
    deadline: string;
}

const RequestDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [request, setRequest] = useState<Request | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [formData, setFormData] = useState<JobPost>({
        title: "",
        description: "",
        requirements: [],
        department: "",
        experience: 0,
        status: "OPEN",
        publishDate: new Date().toISOString(),
        deadline: new Date().toISOString(),
    });
    const navigate = useNavigate();
    useEffect(() => {
        const fetchRequestDetails = async () => {
            console.log("Fetching request details for ID:", id);
            try {
                const response = await fetch(`http://localhost:5000/request/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch request details: ${response.status}`);
                }
                const data: Request = await response.json();
                console.log("Request details fetched:", data);
                setRequest(data);

                // Use createdAt instead of publishDate
                const createdAt = new Date(data.createdAt);
                if (isNaN(createdAt.getTime())) {
                    throw new Error("Invalid createdAt date format");
                }

                setFormData({
                    title: data.position,
                    description: data.description,
                    requirements: data.requirements,
                    department: data.department,
                    experience: data.experience,
                    status: "OPEN",
                    publishDate: createdAt.toISOString(), // Assuming you still need to keep publishDate for job posts
                    deadline: new Date().toISOString(),
                });
            } catch (err) {
                if (err instanceof Error) {
                    console.error("Error fetching request details:", err);
                    setError(err.message);
                }
            } finally {
                setLoading(false);
                console.log("Loading finished");
            }
        };

        fetchRequestDetails();
    }, [id]);

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this request?")) {
            console.log("Deleting request with ID:", id);
            try {
                await axios.delete(`http://localhost:5000/api/requests/${id}`);
                alert("Request deleted successfully!");
            } catch (error) {
                console.error("Error deleting request:", error);
                alert("Failed to delete request.");
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting job post:", formData);
        
        try {
            // Create job post
            const response = await axios.post("http://localhost:5000/api/jobs", formData);
            alert("Job post created successfully!");
    
            // Launch the specified API
            const jobPostCreatedResponse = await axios.patch(`http://localhost:5000/request/requests/${id}/jobPostCreated`);
            console.log("Job post created response:", jobPostCreatedResponse.data);
     // Redirect to jobgrid
     navigate('/jobgrid');
            setShowForm(false);
        } catch (error:any) {
            console.error("Error creating job post:", error);
            if (error.response) {
                console.error("Error response data:", error.response.data);
                alert(`Failed to create job post: ${error.response.data.message || error.message}`);
            } else {
                alert("Failed to create job post.");
            }
        }
    };

    const formatDescription = (description: string | undefined) => {
        if (!description) {
            return <p>No description available.</p>;
        }

        const sections = description.split(/\n/).filter(section => section.trim() !== "");
        return sections.map((section, index) => {
            const trimmedSection = section.trim();
            const headerMatch = trimmedSection.match(/^(.*?):\s*(.*)$/);
            if (headerMatch) {
                const headerText = headerMatch[1].trim();
                const contentText = headerMatch[2]?.trim();

                return (
                    <div key={index} style={{ marginBottom: '1em' }}>
                        <strong style={{ fontWeight: 'bold', color: 'black' }}>{headerText}:</strong>
                        {contentText && (
                            <span style={{ marginLeft: '10px' }}>{contentText}</span>
                        )}
                    </div>
                );
            }

            return (
                <div key={index} style={{ margin: '0.5em 0' }}>
                    {trimmedSection.startsWith('-') ? (
                        <span style={{ display: 'block', marginLeft: '20px' }}>{trimmedSection}</span>
                    ) : (
                        <span>{trimmedSection}</span>
                    )}
                </div>
            );
        });
    };

    if (loading) return <p>Loading request details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!request) return <p>Request not found</p>;

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="row align-items-center mb-4">
                        <div className="d-md-flex d-sm-block justify-content-between align-items-center flex-wrap">
                            <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
                                <Link to="/Requests">
                                    <i className="ti ti-arrow-left me-2" />
                                    Back to List
                                </Link>
                            </h6>
                            <div className="d-flex">
                                <div className="ms-2">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => id && handleDelete(id)}
                                    >
                                        <i className="ti ti-trash me-1" />
                                        Delete
                                    </button>
                                </div>
                                <div className="ms-2">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowForm(!showForm)}
                                    >
                                        <i className="ti ti-user me-1" />
                                        Create Job Post
                                    </button>
                                </div>
                                <div className="head-icons ms-2 text-end">
                                    <CollapseHeader />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 theiaStickySidebar">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="mb-3">Request Details</h5>
                                    <div className="list-group details-list-group mb-4">
                                        <div className="list-group-item">
                                            <span>Position</span>
                                            <p className="text-gray-9">{request.position}</p>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Department</span>
                                                <p className="text-gray-9">{request.department}</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Created on</span>
                                                <p className="text-gray-9">{new Date(request.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Experience</span>
                                                <div className="d-flex align-items-center">
                                                    <p className="text-gray-9 mb-0">{request.experience} Years</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-xl-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-square-rounded me-2" />
                                                Status 
                                            </p>
                                        </div>
                                        <div className="col-sm-9">
                                            <span className="badge badge-soft-purple d-inline-flex align-items-center mb-3">
                                                <i className="ti ti-point-filled me-1" />
                                                {request.status}
                                            </span>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="d-flex align-items-center mb-3">
                                                <i className="ti ti-bookmark me-2" />
                                                Requirements
                                            </p>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="d-flex align-items-center mb-3">
                                                {request.requirements.map((requirement, index) => (
                                                    <Link
                                                        key={index}
                                                        to="#"
                                                        className={`badge task-tag ${index % 2 === 0 ? 'bg-pink' : 'badge-info'} rounded-pill me-2`}
                                                    >
                                                        {requirement}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <h5 className="mb-1">Description</h5>
                                                {formatDescription(request.description)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showForm && (
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="mb-3">Create Job Post</h5>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.title}
                                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Description</label>
                                                <textarea
                                                    className="form-control"
                                                    value={formData.description}
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Requirements</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.requirements.join(", ")}
                                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value.split(", ") })}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Department</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.department}
                                                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Experience (Years)</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={formData.experience}
                                                    onChange={(e) => setFormData({ ...formData, experience: Number(e.target.value) })}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Deadline</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={formData.deadline.split('T')[0]}
                                                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Create Job Post</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0">2025 © RecruitPro.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            InfiniteLoopers
                        </Link>
                    </p>
                </div>
            </div>

            <style>
                {`
                  #btn {
                    width: 90%;
                    text-align: center;
                  }
                  .text-muted {
                    font-size: 0.9rem;
                  }
                  .mb-4 {
                    margin-bottom: 1.5rem;
                  }
                `}
            </style>
        </>
    );
};

export default RequestDetails;