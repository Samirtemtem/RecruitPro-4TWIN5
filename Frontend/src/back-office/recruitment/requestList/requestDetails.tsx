import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { all_routes } from "../../../routing-module/router/all_routes";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { DatePicker } from "antd";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
import moment from "moment"; // Ensure moment is imported

interface JobPost {
    _id: string;
    position: string;
    description: string;
    requirements: string[];
    department: string;
    experience: any;
    status: "OPEN" | "CLOSED" | "PENDING";
    publishDate: string;
    deadline: string;
}


interface JobPostSchema2 {
    _id: string; // Unique identifier for the job post
    title: string; // Title of the job
    description: string; // Description of the job
    requirements: string[]; // Array of requirements
    department: string; // Department name
    experience: number; // Required years of experience
    status: "OPEN" | "CLOSED" | "PENDING"; // Status of the job post
    publishDate: Date; // Date when the job was published
    deadline: Date; // Deadline for applications
}


interface Application {
    _id: string;
    candidate: string;
    jobPost: string;
    status: string;
    CV: string;
    compatibilityScore: number;
    submissionDate: string;
  }

const RequestDetails = () => {
    const applicants: number = 12; // Define number of applicants
    const maxApplicants: number = 200; // Define maximum applicants
    const progress: number = (applicants / maxApplicants) * 100;
    const [showForm, setShowForm] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<JobPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [applications, setApplications] = useState<Application[]>([]); // Initialize as an empty array
    const [formData, setFormData] = useState({
        id: "",
        position: "",
        description: "",
        department: "",
        requirements: "",
        publishDate: new Date(),
        deadline: "",
        experience:"",
        status: "", // Added status to formData
    });

    const departmentChoose = [
        { value: "Select", label: "Select" },
        { value: "ELECTROMECANIQUE", label: "ELECTROMECANIQUE" },
        { value: "GENIE-CIVIL", label: "GENIE-CIVIL" },
        { value: "TIC", label: "TIC" },
    ];

    const statusChoose = [
        { value: "Select", label: "Select" },
        { value: "OPEN", label: "OPEN" },
        { value: "CLOSED", label: "CLOSED" },
        { value: "PENDING", label: "PENDING" },
    ];

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/request/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch job details: ${response.status}`);
                }
                const data: JobPost = await response.json();
                setJob(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [id]);

    useEffect(() => {
        if (job) {
            setFormData({
                id: job._id,
                position: job.position,
                description: job.description,
                department: job.department,
                requirements: job.requirements.join(", "),
                publishDate: new Date(job.publishDate),
                deadline: job.deadline, // Ensure this is also a Date if it's a string
                experience:job.experience,
            
                status: job.status, // Set initial status
            });
        }
    }, [job]);






    



    





    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (field: string, date: any) => {
        const formattedDate = date ? moment(date).format("YYYY-MM-DD") : "";
        setFormData({
            ...formData,
            [field]: formattedDate,
        });
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                await axios.delete(`http://localhost:5000/api/jobs/${id}`);
                alert("Project deleted successfully!");
            } catch (error) {
                console.error("Error deleting project:", error);
                alert("Failed to delete project.");
            }
        }
    };




    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:5000/api/jobs", {
                ...formData,
                requirements: formData.requirements.split(","), // Convert string to array
            });
    
            alert("Job posted successfully!");
            console.log(response.data);
            setFormData({
                id: "", // Reset id
                position: "", // Reset position
                description: "", // Reset description
                department: "", // Reset department
                requirements: "", // Reset requirements
                publishDate: new Date(), // Reset publish date
                deadline: "", // Reset deadline
                experience: "", // Reset experience
                status: "OPEN", // Reset status to default
            });
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job!");
        }
    };


    

    const formatDescription = (description: string | undefined) => {
        console.log("Description to format:", description); // Log the description
    
        if (!description) {
            return <p>No description available.</p>; // Handle undefined description
        }
    
        // Split the description into sections based on new lines
        const sections = description.split(/\n/).filter(section => section.trim() !== ""); // Remove empty sections
    
        return sections.map((section, index) => {
            // Trim whitespace from the section
            const trimmedSection = section.trim();
    
            // Check for a header followed by a colon
            const headerMatch = trimmedSection.match(/^(.*?):\s*(.*)$/);
            if (headerMatch) {
                const headerText = headerMatch[1].trim(); // Extract header text
                const contentText = headerMatch[2]?.trim(); // Extract content after the header
    
                return (
                    <div key={index} style={{ marginBottom: '1em' }}>
                        <strong style={{ fontWeight: 'bold', color: 'black' }}>{headerText}:</strong> {/* Dark title */}
                        {contentText && (
                            <span style={{ marginLeft: '10px' }}>{contentText}</span> // No extra line break
                        )}
                    </div>
                );
            }
    
            // Handle bullet points or regular text
            return (
                <div key={index} style={{ margin: '0.5em 0' }}>
                    {trimmedSection.startsWith('-') ? (
                        <span style={{ display: 'block', marginLeft: '20px' }}>{trimmedSection}</span> // Indent bullet points
                    ) : (
                        <span>{trimmedSection}</span>
                    )}
                </div>
            );
        });
    };

    console.log("Job object:", job); // Log the job object before rendering
    if (loading) return <p>Loading job details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!job) return <p>Job not found</p>;







 




    return (
        <>
            {/* Page Wrapper */}
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
                              

                                {/* Delete Button */}
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
                                    <button className="btn btn-secondary" onClick={() => setShowForm(true)}>
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
                    {/* Job details sections */}
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 theiaStickySidebar">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="mb-3">Request Details</h5>
                                    {/* Details list */}
                                    <div className="list-group details-list-group mb-4">
                                        <div className="list-group-item">
                                            <span>Position</span>
                                            <p className="text-gray-9">{job.position}</p>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Department</span>
                                                <p className="text-gray-9">{job.department}</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Created on</span>
                                                <p className="text-gray-9"> {new Date(job.publishDate).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Due Date</span>
                                                <div className="d-flex align-items-center">
                                                    <p className="text-gray-9 mb-0">{new Date(job.deadline).toLocaleDateString()}</p>
                                                    <span className="badge badge-danger d-inline-flex align-items-center ms-2">
                                                        <i className="ti ti-clock-stop" />1
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Experience</span>
                                                <div className="d-flex align-items-center">
                                                    <p className="text-gray-9 mb-0">{job.experience} Years</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                
                                </div>
                            </div>
                        </div>
                        {/* JobPost Main Content */}
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
                                                {job.status}
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
                                                {job.requirements && job.requirements.map((requirement, index) => (
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
        {formatDescription(job.description)}
       
    </div>
</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                  


</div>
                        </div>
                        
                    </div>
                    {showForm && (
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5>Create Job Post</h5>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label htmlFor="position" className="form-label">Position</label>
                                                <input type="text" name="position" id="position" className="form-control" value={formData.position} onChange={handleChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="department" className="form-label">Department</label>
                                                <select name="department" className="form-select" value={formData.department} onChange={handleChange} required>
                                                    {departmentChoose.map(dept => (
                                                        <option key={dept.value} value={dept.value}>{dept.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="requirements" className="form-label">Requirements</label>
                                                <textarea name="requirements" id="requirements" className="form-control" value={formData.requirements} onChange={handleChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="description" className="form-label">Description</label>
                                                <textarea name="description" id="description" className="form-control" value={formData.description} onChange={handleChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="publishDate" className="form-label">Publish Date</label>
                                                <DatePicker onChange={(date) => handleDateChange("publishDate", date)} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="deadline" className="form-label">Deadline</label>
                                                <DatePicker onChange={(date) => handleDateChange("deadline", date)} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="experience" className="form-label">Experience (Years)</label>
                                                <input type="number" name="experience" id="experience" className="form-control" value={formData.experience} onChange={handleChange} required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="status" className="form-label">Status</label>
                                                <select name="status" className="form-select" value={formData.status} onChange={handleChange} required>
                                                    {statusChoose.map(status => (
                                                        <option key={status.value} value={status.value}>{status.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}




                    
                </div>
      
               

    
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0"> 2025 © RecruitPro.</p>
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