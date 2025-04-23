import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./JobAlert.css";

interface JobType {
  styleClass: string;
  type: string;
}

interface JobItem {
  _id: string;
  title: string;
  company: string;
  location: string;
  createdAt: string;
  salary: string;
  status: string;
  jobType?: JobType[];
  logo?: string;
}

const JobAlert = () => {
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [viewedJobs, setViewedJobs] = useState<string[]>([]);
  const navigate = useNavigate();

  // Load viewed jobs from localStorage
  useEffect(() => {
    const storedViewedJobs = localStorage.getItem('viewedJobs');
    if (storedViewedJobs) {
      setViewedJobs(JSON.parse(storedViewedJobs));
    }
  }, []);

  const fetchNewJobs = async () => {
    try {
      setRefreshing(true);
      // Fetch latest jobs
      const response = await axios.get("http://localhost:5000/api/jobs/FrontOfficelatestTen");
      setJobs(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching new jobs:", err);
      setError("Failed to load new job notifications");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNewJobs();
  }, []);

  // Mark a job as viewed when clicked and navigate to details
  const handleJobClick = (jobId: string) => {
    if (!viewedJobs.includes(jobId)) {
      const updatedViewedJobs = [...viewedJobs, jobId];
      setViewedJobs(updatedViewedJobs);
      localStorage.setItem('viewedJobs', JSON.stringify(updatedViewedJobs));
    }
    navigate(`/job-single-v1/${jobId}`);
  };

  // Check if a job is new (not viewed AND recent)
  const isNewJob = (jobId: string, createdAt: string) => {
    // Check if job has been viewed
    if (viewedJobs.includes(jobId)) {
      return false;
    }
    
    // Check if job is recent (less than 48 hours old)
    const jobDate = new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - jobDate.getTime());
    const diffHours = diffTime / (1000 * 60 * 60);
    
    return diffHours <= 48; // Only show jobs less than 48 hours old as "new"
  };

  // Get only recent unviewed jobs
  const newJobs = jobs.filter(job => isNewJob(job._id, job.createdAt));

  if (loading) return <div className="text-center">Loading new job notifications...</div>;

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    
    if (diffMinutes < 5) {
      return "Just now";
    } else if (diffMinutes < 60) {
      return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      // Format date as "Month Day, Year"
      return date.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  return (
    <>
      <div className="col-12 mb-4 d-flex justify-content-between align-items-center">
        <button 
          onClick={fetchNewJobs} 
          className="theme-btn btn-style-one"
          disabled={refreshing}
        >
          {refreshing ? "Refreshing..." : "Refresh Notifications"}
        </button>
        
        {newJobs.length > 0 && (
          <div className="notification-count">
            <span>{newJobs.length}</span> new job{newJobs.length !== 1 ? 's' : ''} available
          </div>
        )}
        
        <button 
          onClick={() => {
            localStorage.removeItem('viewedJobs');
            setViewedJobs([]);
          }}
          className="theme-btn btn-style-two"
        >
          Mark All as Read
        </button>
      </div>
      
      <div className="col-12 mb-3">
        <div className="filter-note">
          <span className="icon flaticon-clock-3"></span>
          <span>Showing only unread jobs posted in the last 48 hours</span>
        </div>
      </div>
      
      {error && <div className="col-12 text-center text-danger mb-3">{error}</div>}
      
      {newJobs.length === 0 ? (
        <div className="text-center notification-empty">
          <div className="empty-icon">
            <span className="flaticon-briefcase"></span>
          </div>
          <h3>No new job notifications</h3>
          <p>We'll notify you when new jobs matching your profile become available</p>
          <p className="empty-note">Note: Only jobs posted in the last 48 hours appear as notifications</p>
        </div>
      ) : (
        newJobs.map((item) => (
          <div 
            className="job-block col-lg-6 col-md-12 col-sm-12 job-notification" 
            key={item._id}
          >
            <div 
              className="inner-box notification-card clickable-card"
              onClick={() => handleJobClick(item._id)}
            >
              <div className="notification-badge">New</div>
              <div className="content">
                <span className="company-logo">
                  <img 
                    src={item.logo || "/images/resource/company-logo/1-1.png"} 
                    alt="company logo" 
                  />
                </span>
                <h4>{item.title}</h4>

                <ul className="job-info">
                  <li>
                    <span className="icon flaticon-briefcase"></span>
                    {item.company || "Unknown Company"}
                  </li>
                  <li>
                    <span className="icon flaticon-map-locator"></span>
                    {item.location || "Remote"}
                  </li>
                  <li>
                    <span className="icon flaticon-clock-3"></span> {formatDate(item.createdAt)}
                  </li>
                  <li>
                    <span className="icon flaticon-money"></span> {item.salary || "Negotiable"}
                  </li>
                </ul>

                <ul className="job-other-info">
                  <li className="time">New</li>
                  {item.status === "OPEN" && (
                    <li className="required">Open</li>
                  )}
                  <li className="private view-details">View Details</li>
                </ul>

                <button 
                  className="notification-dismiss"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card click event
                    const updatedViewedJobs = [...viewedJobs, item._id];
                    setViewedJobs(updatedViewedJobs);
                    localStorage.setItem('viewedJobs', JSON.stringify(updatedViewedJobs));
                  }}
                >
                  <span className="flaticon-close"></span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default JobAlert;