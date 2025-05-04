import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedJobs from "./job-single-pages/related-jobs/RelatedJobs";
import JobOverView from "./job-single-pages/job-overview/JobOverView";
import JobDetailsDescriptions from "./job-single-pages/shared-components/JobDetailsDescriptions";
import DefaulHeader2 from "../../common/Header";
import MapJobFinder from "./job-listing-pages/components/MapJobFinder";
import SocialTwo from "./job-single-pages/social/SocialTwo";
import { useAuth } from "../../routing-module/AuthContext";

const JobSingleDynamicV1 = () => {
  const { id: jobId } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [loadingMatch, setLoadingMatch] = useState(false);
  const [isShortlisted, setIsShortlisted] = useState(false);

  // Get auth context for profile data
  const { token, userId } = useAuth();
 // Check if job is shortlisted when component loads or userId changes
 useEffect(() => {
  const checkShortlistStatus = async () => {
    if (!userId || !jobId) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/shortlisted-jobs/check?userId=${userId}&jobId=${jobId}`
      );

      if (response.ok) {
        const data = await response.json();
        setIsShortlisted(data.isShortlisted);
      }
    } catch (error) {
      console.error("Error checking shortlist status:", error);
    }
  };

  checkShortlistStatus();
}, [userId, jobId]);
const toggleShortlist = async () => {
  try {
    // If no user is logged in, show login prompt
    if (!userId) {
      setApplicationStatus("Please log in to shortlist jobs");
      setTimeout(() => setApplicationStatus(null), 2000);
      return;
    }

    // If job is already shortlisted, remove it
    if (isShortlisted) {
      await fetch(
        `http://localhost:5000/api/shortlisted-jobs/${userId}/${jobId}`,
        {
          method: "DELETE",
        }
      );

      setIsShortlisted(false);
      setApplicationStatus("Job removed from shortlist");
      setTimeout(() => setApplicationStatus(null), 2000);
    }
    // Otherwise, add it to shortlist
    else {
      await fetch("http://localhost:5000/api/shortlisted-jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          jobId: jobId,
        }),
      });

      setIsShortlisted(true);
      setApplicationStatus("Job added to shortlist");
      setTimeout(() => setApplicationStatus(null), 2000);
    }
  } catch (error) {
    console.error("Error toggling shortlist:", error);
    setApplicationStatus("Error updating shortlist");
    setTimeout(() => setApplicationStatus(null), 2000);
  }
};
  // Fetch job data
  useEffect(() => {
    const fetchJob = async () => {
      try {
        console.log("Fetching job data for ID:", jobId);
        const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Job data received:", data);
        setJob(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  // Track job view interaction when job is loaded
  useEffect(() => {
    if (job.title && userId) {
      trackJobInteraction('view');
    }
  }, [job.title, userId]);

  // Fetch matching data when job is loaded and user is authenticated
  useEffect(() => {
    if (job.title && userId) {
      fetchMatchingData();
    }
  }, [job.title, userId]);

  // Function to fetch matching data from recommendation service
  const fetchMatchingData = async () => {
    if (!userId || !jobId) return;
    
    try {
      setLoadingMatch(true);
      console.log("Fetching matching data from recommendation service...");
      
      // Make a request to get recommendations specific to this job
      const response = await fetch(`http://localhost:5000/api/recommendations/jobs?candidateId=${userId}&jobId=${jobId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch matching data');
      }
      
      const data = await response.json();
      console.log("Match data received:", data);
      
      if (data && data.matchData) {
        setMatchData(data.matchData);
      }
    } catch (error) {
      console.error("Error fetching match data:", error);
    } finally {
      setLoadingMatch(false);
    }
  };

  // Function to track job interactions (view, click, apply)
  const trackJobInteraction = async (type) => {
    if (!userId || !jobId) return;
    
    try {
      const response = await fetch('http://localhost:5000/api/recommendations/interaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          candidateId: userId,
          jobId: jobId,
          type: type
        })
      });
      
      if (!response.ok) {
        console.error(`Failed to track ${type} interaction`);
      }
    } catch (error) {
      console.error(`Error tracking ${type} interaction:`, error);
    }
  };

  const handleApplyJob = () => {
    const candidateId = localStorage.getItem("userId");
    if (!candidateId) {
      setApplicationStatus("User not logged in.");
      return;
    }
    setShowConfirmDialog(true);
    
    // Track click interaction
    trackJobInteraction('click');
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
        // Attempt to parse the error message from the response
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }
  
      const result = await response.json();
      setApplicationStatus("Application submitted successfully!");
      
      // Track apply interaction
      trackJobInteraction('apply');
      
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

  // Extract data from matchData or use defaults
  const matchPercentage = matchData?.matchPercentage || 0;
  const matchingSkills = matchData?.matchingSkills || [];
  const totalSkills = matchData?.totalSkills || 0;
  const skillsToImprove = matchData?.skillsToImprove || [];

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

  // Get color for match percentage
  const getMatchColor = (percentage) => {
    if (percentage >= 75) return "#28a745"; // Green for high match
    if (percentage >= 50) return "#ffc107"; // Yellow for medium match
    return "#dc3545"; // Red for low match
  };

  // Style for the skills match text (LinkedIn-style)
  const matchTextStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 12px",
    backgroundColor: "#f3f9ff",
    borderRadius: "6px",
    border: "1px solid #e1e9f0",
    fontWeight: "600",
    color: "#0a66c2",
    marginBottom: "15px",
    fontSize: "14px"
  };

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
                  
                  {/* LinkedIn-style skills match display */}
                  {userId && matchingSkills.length > 0 && (
                    <div style={matchTextStyle}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#0a66c2" width="16" height="16" focusable="false" style={{marginRight: "8px"}}>
                        <path d="M13 4a1 1 0 11-1-1 1 1 0 011 1zM3 4a1 1 0 11-1-1 1 1 0 011 1zm4.5 6a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-6a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM3 9.5A1.5 1.5 0 104.5 11 1.5 1.5 0 003 9.5zM13 9.5a1.5 1.5 0 10-1.5 1.5 1.5 1.5 0 001.5-1.5z"></path>
                      </svg>
                      {matchingSkills.length} of {totalSkills} skills match your profile - you may be a good fit
                    </div>
                  )}
                  
                  {userId && loadingMatch && (
                    <div style={{ ...matchTextStyle, color: "#6c757d" }}>
                      <div className="spinner-border spinner-border-sm text-secondary mr-2" role="status" style={{marginRight: "8px"}}>
                        <span className="sr-only">Loading...</span>
                      </div>
                      Analyzing your match with this job...
                    </div>
                  )}
                </div>

                <div className="btn-box" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <a
                    href="#"
                    className="theme-btn btn-style-one"
                    onClick={handleApplyJob}
                  >
                    Apply For Job
                  </a>
                  
                  {/* Match Percentage Badge */}
                  {userId && matchData && (
                    <div className="match-badge" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      backgroundColor: "#f9f9f9",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      border: `2px solid ${getMatchColor(matchPercentage)}`,
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                    }}>
                      <div style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: getMatchColor(matchPercentage),
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "14px"
                      }}>
                        {Math.round(matchPercentage)}%
                      </div>
                      <div style={{
                        display: "flex",
                        flexDirection: "column"
                      }}>
                        <span style={{fontSize: "12px", color: "#555"}}>Match</span>
                        <span style={{fontSize: "12px", fontWeight: "bold", color: getMatchColor(matchPercentage)}}>
                          {matchPercentage >= 75 ? 'Strong' : matchPercentage >= 50 ? 'Good' : 'Partial'}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <button
                    className="bookmark-btn"
                    style={{
                      color: isShortlisted ? "#D50000" : "#777777",
                      transition: "all 0.3s ease",
                    }}
                    onClick={toggleShortlist}
                  >
                    <i
                      className={`${isShortlisted ? "fas" : "far"} fa-bookmark`}
                    ></i>
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
                      typeContrat={job.typeContrat}
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