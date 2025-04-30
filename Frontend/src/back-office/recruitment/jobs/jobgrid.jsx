import React, { useEffect, useState } from "react";
import axios from "axios";
import { all_routes } from '../../../routing-module/router/all_routes';
import { Link } from 'react-router-dom';
import { DatePicker } from "antd";
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';


import logo from './logo.png'; // Import the image

const JobGrid = () => {
    const departmentOptions = [
        "ELECTROMECANIQUE",
        "GENIE-CIVIL",
        "TIC"
    ];

    const statusOptions = ['OPEN', 'CLOSED', 'PENDING'];

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        department: "",
        status: "OPEN",
        publishDate: new Date(),
        deadline: "",
        requirements: "",
        experience: ""
    });

    const [jobs, setJobs] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');
    const [sortBy, setSortBy] = useState('recentlyAdded');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/jobs", {
                ...formData,
                requirements: formData.requirements.split(","),
            });
            alert("Job posted successfully!");
            console.log(response.data);
            setFormData({
                title: "",
                description: "",
                department: "",
                status: "OPEN",
                publishDate: new Date(),
                deadline: "",
                requirements: "",
                experience: ""
            });
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job!");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date, dateString) => {
        setFormData({ ...formData, deadline: dateString });
    };

    const fetchJobs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/jobs");
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching job posts:", error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);



    const handleStatusChange = (status) => {
        setFilterStatus(status);
    };

    const handleSortChange = (sortOption) => {
        setSortBy(sortOption);
    };

    const filteredJobs = jobs.filter(job => 
        filterStatus ? job.status === filterStatus : true
    );

    const sortedJobs = filteredJobs.sort((a, b) => {
        if (sortBy === 'recentlyAdded') {
            return new Date(b.publishDate) - new Date(a.publishDate);
        } else if (sortBy === 'ascending') {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Jobs</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Administration</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Jobs
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="me-2 mb-2">
                                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                                    <Link
                                        to={all_routes.jobgrid}
                                        className="btn btn-icon btn-sm active bg-primary text-white"
                                    >
                                        <i className="ti ti-layout-grid" />
                                    </Link>
                                </div>
                            </div>
                         
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body p-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <h5>Job Grid</h5>
                                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                                    <div className="dropdown me-3">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            Status
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                            {statusOptions.map((status, index) => (
                                                <li key={index} onClick={() => handleStatusChange(status)}>
                                                    <Link to="#" className="dropdown-item rounded-1">{status}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            Sort By: {sortBy === 'recentlyAdded' ? 'Last 7 Days' : sortBy}
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                            <li onClick={() => handleSortChange('recentlyAdded')}>
                                                <Link to="#" className="dropdown-item rounded-1">Recently Added</Link>
                                            </li>
                                            <li onClick={() => handleSortChange('ascending')}>
                                                <Link to="#" className="dropdown-item rounded-1">Ascending</Link>
                                            </li>
                                            <li onClick={() => handleSortChange('descending')}>
                                                <Link to="#" className="dropdown-item rounded-1">Descending</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {sortedJobs.map((job, index) => (
                            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card bg-light">
                                            <div className="card-body p-3">
                                                <div className="d-flex align-items-center">
                                                    <Link to="#" className="me-2">
                                                        <span className="avatar avatar-lg bg-gray">
                                                            <img
                                                                src={logo}
                                                                className="w-auto h-auto"
                                                                alt="icon"
                                                            />
                                                        </span>
                                                    </Link>
                                                    <div>
                                                        <h6 className="fw-medium mb-1 text-truncate">
                                                            <Link to="#">{job.title}</Link>
                                                        </h6>
                                                        <p className="fs-12 text-gray fw-normal">
                                                            {job.status} 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column mb-3">
                                            <p className="text-dark d-inline-flex align-items-center mb-2">
                                                <i className="ti ti-calendar text-gray-5 me-2" />
                                                Deadline: {new Date(job.deadline).toLocaleDateString()}
                                            </p>
                                            <p className="text-dark d-inline-flex align-items-center">
                                                <i className="ti ti-align-left text-gray-5 me-2" />
                                                {job.department}
                                            </p>
                                        </div>
                                        <div>
                                            <Link to={`/projects-details/${job._id}`} className="btn btn-primary">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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

                

               
            </div>
        </>
    );
};

export default JobGrid;