import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedJobs from "./job-single-pages/related-jobs/RelatedJobs";
import JobOverView from "./job-single-pages/job-overview/JobOverView";
import JobSkills from "./job-single-pages/shared-components/JobSkills";
import MapJobFinder from "./job-listing-pages/components/MapJobFinder";
import SocialTwo from "./job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "./job-single-pages/shared-components/JobDetailsDescriptions";
import ApplyJobModalContent from "./job-single-pages/shared-components/ApplyJobModalContent";
import DefaulHeader2 from "../../common/Header";

const JobSingleDynamicV1 = () => {
  const { id: jobId } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!job.title) return <h1>No Job Found</h1>;

  // Inline styles for the job overview widget
  const jobOverviewStyle = {
    width: "120%",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  // Define muted background colors for skills
  const skillBackgroundColors = [
    "#6c757d", // Gray
    "#17a2b8", // Teal
    "#5a6268", // Dark Gray
    "#495057", // Charcoal
    "#343a40", // Dark Charcoal
    "#007bff", // Blue
    "#28a745", // Green
    "#ffc107", // Yellow
   
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
                        color: "#fff", // Text color for better contrast
                        padding: "5px 10px",
                        borderRadius: "5px",
                        margin: "5px 10px 5px 0", // Margin to the right
                        display: "inline-block", // Make them inline-block
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
                    data-bs-toggle="modal"
                    data-bs-target="#applyJobModal"
                  >
                    Apply For Job
                  </a>
                  <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>

                <div className="modal fade" id="applyJobModal" tabIndex="-1" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">Apply for this job</h3>
                        <button type="button" className="closed-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <ApplyJobModalContent />
                    </div>
                  </div>
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
    </>
  );
};

export default JobSingleDynamicV1;