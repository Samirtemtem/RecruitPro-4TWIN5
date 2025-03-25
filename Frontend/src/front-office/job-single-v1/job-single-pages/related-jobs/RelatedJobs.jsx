import React, { useEffect, useState } from "react";

const RelatedJobs = () => {
  const [jobs, setJobs] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs/latest");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched Jobs:", data); // Log the data to check its structure
        setJobs(data); // Assuming the API returns an array of jobs
      } catch (error) {
        setError(error.message); // Set the error message if there's an error
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchJobs();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Render error state
  }

  if (!Array.isArray(jobs) || jobs.length === 0) {
    return <div>No jobs available.</div>; // Handling case when jobs is not an array or is empty
  }

  // More visible color palette for the background
  const colors = [
    "#B3D9FF", // Soft blue
    "#B3FFB3", // Soft green
    "#FFF5B3", // Soft yellow
    "#B3E0FF", // Soft cyan
    "#EAB3FF"  // Soft lavender
  ];

  return (
    <>
      {jobs.map((item) => (
        <div className="job-block" key={item._id}>
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <img src="/LogoEsprit2.png" alt="item brand" />
              </span>
              <h4>
                <a href={`/job-single-v1/${item._id}`}>{item.title}</a>
              </h4>

              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {item.department}
                </li>
                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {item.location || "ESPRIT"} {/* Add location if available */}
                </li>
                <li>
                  <span className="icon flaticon-clock-3"></span>
                  {new Date(item.publishDate).toLocaleDateString()} {/* Format publish date */}
                </li>
                <li>
                  <span className="icon flaticon-clock-3"></span>
                  {new Date(item.deadline).toLocaleDateString()} {/* Format deadline */}
                </li>
              </ul>

              <ul className="job-other-info">
                {item.requirements.map((req, i) => (
                  <li key={i} 
                      style={{ 
                          backgroundColor: colors[i % colors.length], 
                          padding: '5px', 
                          borderRadius: '4px', 
                          margin: '5px 10px 5px 0' // Added right margin
                      }}>
                    {req}
                  </li> // List out requirements with different background colors
                ))}
              </ul>

              <button className="bookmark-btn">
                <a href={`/job-single-v1/${item._id}`} className="job-link">
                  <span className="icon flaticon-link">🔗</span> {/* Fallback icon */}
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedJobs;