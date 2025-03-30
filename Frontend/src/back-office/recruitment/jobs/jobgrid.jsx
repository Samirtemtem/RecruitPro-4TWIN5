import React, { useEffect, useState } from "react";
import axios from "axios";
import { all_routes } from '../../../routing-module/router/all_routes'
import { Link } from 'react-router-dom'
import PredefinedDateRanges from '../../../core/common/datePicker'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { DatePicker } from "antd";
import CommonSelect from '../../../core/common/commonSelect'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'



import logo from './logo.png'; // Import the image


const JobGrid = () => {

   
  

    const departmentOptions = [
        "ELECTROMECANIQUE",
        "GENIE-CIVIL",
        "TIC"
      ];


    const [formData, setFormData] = useState({
        title: "",
        description: "",
        department: "",
        status: "OPEN",
        publishDate: new Date(),
        deadline: "",
        requirements: "",
        experience:""
    });

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
                title: "",
                description: "",
                department: "",
                status: "OPEN",
                publishDate: new Date(),
                deadline: "",
                requirements: "",
            });
        } catch (error) {
            console.error("Error posting job:", error);
            alert("Failed to post job!");
        }
    }
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date, dateString) => {
        setFormData({ ...formData, deadline: dateString });
    };




// Fetching 

const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };
    fetchJobs();
  }, []);





    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
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
                            <div className="me-2 mb-2">
                                <div className="dropdown">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ti ti-file-export me-1" />
                                        Export
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                <i className="ti ti-file-type-pdf me-1" />
                                                Export as PDF
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                <i className="ti ti-file-type-xls me-1" />
                                                Export as Excel{" "}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-2">
                                <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_post"
                                    className="btn btn-primary d-flex align-items-center"
                                >
                                    <i className="ti ti-circle-plus me-2" />
                                    Post Job
                                </Link>
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
                                    <div className="dropdown me-3">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            Role
                                        </Link>
                                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Senior IOS Developer
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Junior PHP Developer
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Network Engineer
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown me-3">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            Status
                                        </Link>
                                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Active
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Inactive
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <Link
                                            to="#"
                                            className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                            data-bs-toggle="dropdown"
                                        >
                                            Sort By : Last 7 Days
                                        </Link>
                                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Recently Added
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Ascending
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Desending
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Last Month
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="dropdown-item rounded-1"
                                                >
                                                    Last 7 Days
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0">2014 - 2025 © SmartHR.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            Dreams
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}


            
            {/* Add Post */}
            <div className="modal fade" id="add_post">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Post Job</h4>
                        <button
                            type="button"
                            className="btn-close custom-btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="ti ti-x" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body pb-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Job Title <span className="text-danger"> *</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Job Description <span className="text-danger"> *</span>
                                        </label>
                                        <textarea
                                            rows={3}
                                            className="form-control"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
  <div className="mb-3">
    <label className="form-label">
      Department <span className="text-danger"> *</span>
    </label>
    <select
      className="form-control"
      name="department"
      value={formData.department}
      onChange={handleChange}
      required
    >
      <option value="">Select Department</option>
      {departmentOptions.map((dept, index) => (
        <option key={index} value={dept}>
          {dept}
        </option>
      ))}
    </select>
  </div>
</div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Job Expired Date <span className="text-danger"> *</span>
                                        </label>
                                        <DatePicker
                                            className="form-control"
                                            format="YYYY-MM-DD"
                                            onChange={handleDateChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Required Skills (comma-separated)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="requirements"
                                            value={formData.requirements}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Min-Experience (Years)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save &amp; Next
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            {/* /Post Job */}




            {/* Add Job Success */}
            <div className="modal fade" id="success_modal" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-xm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center p-3">
                                <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
                                    <i className="ti ti-check fs-24" />
                                </span>
                                <h5 className="mb-2">Job Posted Successfully</h5>
                                <div>
                                    <div className="row g-2">
                                        <div className="col-12">
                                            <Link to={all_routes.jobgrid} data-bs-dismiss="modal" className="btn btn-dark w-100">
                                                Back to List
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Client Success */}
        </>

    )
}

export default JobGrid
