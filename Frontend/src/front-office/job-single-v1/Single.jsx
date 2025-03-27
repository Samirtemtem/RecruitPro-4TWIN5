import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedJobs from "./job-single-pages/related-jobs/RelatedJobs";
import JobOverView from "./job-single-pages/job-overview/JobOverView";
import JobDetailsDescriptions from "./job-single-pages/shared-components/JobDetailsDescriptions";
import DefaulHeader2 from "../../common/Header";
import MapJobFinder from "./job-listing-pages/components/MapJobFinder";
import SocialTwo from "./job-single-pages/social/SocialTwo";

const JobSingleDynamicV1 = () => {
  const { id: jobId } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleApplyJob = () => {
    const candidateId = localStorage.getItem("userId");
    if (!candidateId) {
      setApplicationStatus("User not logged in.");
      return;
    }
    setShowConfirmDialog(true);
  };

  const confirmApplication = async () => {
    const candidateId = localStorage.getItem("userId");
    const applicationData = {
      jobPostId: jobId,
      candidateId: candidateId,
    };

    try {
      const response = await fetch("http://localhost:5000/app/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      const result = await response.json();
      setApplicationStatus("Application submitted successfully!");
      // Automatically hide the success message after 1 second
      setTimeout(() => setApplicationStatus(null), 1000);
    } catch (error) {
      setApplicationStatus(error.message);
    } finally {
      setShowConfirmDialog(false);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!job.title) return <h1>No Job Found</h1>;

  const jobOverviewStyle = {
    width: "120%",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  const skillBackgroundColors = [
    "#6c757d", "#17a2b8", "#5a6268", "#495057", "#343a40", "#007bff", "#28a745", "#ffc107",
  ];

  return (
    <>
      <span className="header-span">
        <DefaulHeader2 />
      </span>

      <section className="job-detail-section">
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <img src="/LogoEsprit2.png" alt="logo" />
                  </span>
                  <h4>{job.title}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {job.department || "Company Name"}
                    </li>
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {job.location || "ESPRIT"}
                    </li>
                    <li>
                      <span className="icon flaticon-clock-3"></span>
                      {job.experience} years of experience required
                    </li>
                  </ul>

                  <ul className="job-other-info">
                    {job.requirements?.map((val, i) => (
                      <li key={i} className="job-skill" style={{
                        backgroundColor: skillBackgroundColors[i % skillBackgroundColors.length],
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        margin: "5px 10px 5px 0",
                        display: "inline-block",
                      }}>
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="btn-box">
                  <a
                    href="#"
                    className="theme-btn btn-style-one"
                    onClick={handleApplyJob}
                  >
                    Apply For Job
                  </a>
                  <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <JobDetailsDescriptions description={job.description} />

                <div className="other-options">
                  <div className="social-share">
                    <h5>Share this job</h5>
                    <SocialTwo title={job.title} />
                  </div>
                </div>

                <div className="related-jobs">
                  <div className="title-box">
                    <h3>Latest Jobs</h3>
                    <div className="text">Check out our latest job listings!</div>
                  </div>
                  <RelatedJobs />
                </div>
              </div>

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebarr">
                  <div className="sidebar-widget" style={jobOverviewStyle}>
                    <h4 className="widget-title">Job Overview</h4>
                    <JobOverView 
                      title={job.title} 
                      publishDate={job.publishDate} 
                      deadline={job.deadline} 
                      requirements={job.requirements} 
                    />
                    <h4 className="widget-title mt-5">Job Location</h4>
                    <div className="widget-content">
                      <div className="map-outer">
                        <div style={{ height: "300px", width: "100%" }}>
                          <MapJobFinder />
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Dialog Instead of Modal */}
      {showConfirmDialog && (
        <div className="confirmation-dialog" style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1050",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          width: "400px",
          textAlign: "center"
        }}>
          <h5>Confirm Application</h5>
          <p>Do you accept the terms and conditions to apply for this job?</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="btn btn-secondary" onClick={() => setShowConfirmDialog(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={confirmApplication}>Accept</button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {applicationStatus && (
        <div className="alert" style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translate(-50%, 0)",
          zIndex: "1000",
          width: "80%",
          maxWidth: "400px",
          padding: "15px",
          backgroundColor: "#d4edda",
          color: "#155724",
          border: "1px solid #c3e6cb",
          borderRadius: "5px",
          textAlign: "center",
          transition: "opacity 0.5s ease",
        }}>
          {applicationStatus}
        </div>
      )}
    </>
  );
};

export default JobSingleDynamicV1;