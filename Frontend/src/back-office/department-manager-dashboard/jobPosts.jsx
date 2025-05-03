import React, { useEffect, useState } from "react";
import axios from "axios";
import { all_routes } from '../../routing-module/router/all_routes';
import { Link } from 'react-router-dom';
import PredefinedDateRanges from '../../core/common/datePicker';
import CollapseHeader from '../../core/common/collapse-header/collapse-header';
import { useAuth } from "../../routing-module/AuthContext";

import logo from './logo.png'; // Import the image

const JobPosts = () => {
  // Get user information from AuthContext
  const { user, profileData } = useAuth();
  const userDepartment = profileData?.department || user?.department;

  // Fetching
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      // Build the URL dynamically based on the user's department
      const apiUrl = userDepartment
        ? `http://localhost:5000/api/jobs/jobs/filterJobs?department=${userDepartment}`
        : "http://localhost:5000/api/jobs/jobs/filterJobs";

      const response = await axios.get(apiUrl);

      setJobs(response.data);
      console.log(`Showing ${response.data.length} jobs for department: ${userDepartment || "All Departments"}`);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching job posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [userDepartment]); // Refetch when userDepartment changes

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Jobs for {userDepartment || "All Departments"}</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Department Manager</li>
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
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between">
                <h5>Job Grid</h5>
                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                  <div className="me-3">
                    <div className="input-icon-end position-relative">
                      <PredefinedDateRanges />
                      <span className="input-icon-addon">
                        <i className="ti ti-chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center p-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading jobs...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center p-5">
              <div className="mb-3">
                <i className="ti ti-file-off fs-3 text-muted"></i>
              </div>
              <h5>No jobs found for {userDepartment}</h5>
              <p className="text-muted">Create new job posts for your department.</p>
            </div>
          ) : (
            <div className="row">
              {jobs.map((job, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card bg-light">
                        <div className="card-body p-3">
                          <div className="d-flex align-items-center">
                            <Link to="#" className="me-2">
                              <span className="avatar avatar-lg bg-gray">
                                <img
                                  src={logo} // Using department as an icon placeholder
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
          )}
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
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

export default JobPosts;