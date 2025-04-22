import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../routing-module/AuthContext";

interface ShortlistedJob {
  _id: string;
  jobPost: {
    _id: string;
    title: string;
    description: string;
    department: string;
    requirements: string[];
    status: string;
    publishDate: string;
    deadline: string;
    experience: number;
    image: string;
  };
  createdAt: string;
}

const JobFavouriteTable: React.FC = () => {
  const [shortlistedJobs, setShortlistedJobs] = useState<ShortlistedJob[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeFilter, setTimeFilter] = useState<string>("6");
  const defaultImage = "/LogoEsprit2.png";

  // Get user ID from auth context
  const { userId } = useAuth();

  // Fetch shortlisted jobs
  const fetchShortlistedJobs = async () => {
    try {
      setIsLoading(true);

      // If no user is logged in, return early
      if (!userId) {
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/shortlisted-jobs/user/${userId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch shortlisted jobs");
      }

      const data = await response.json();
      setShortlistedJobs(data);
    } catch (error) {
      console.error("Error fetching shortlisted jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter jobs by time
  const getFilteredJobs = () => {
    if (!shortlistedJobs.length) return [];

    const currentDate = new Date();
    const filterDate = new Date();

    switch (timeFilter) {
      case "6":
        filterDate.setMonth(currentDate.getMonth() - 6);
        break;
      case "12":
        filterDate.setMonth(currentDate.getMonth() - 12);
        break;
      case "16":
        filterDate.setMonth(currentDate.getMonth() - 16);
        break;
      case "24":
        filterDate.setMonth(currentDate.getMonth() - 24);
        break;
      case "60":
        filterDate.setMonth(currentDate.getMonth() - 60);
        break;
      default:
        filterDate.setMonth(currentDate.getMonth() - 6);
    }

    return shortlistedJobs.filter(
      (job) => new Date(job.createdAt) >= filterDate
    );
  };

  // Handle removing a job from shortlist
  const handleRemoveJob = async (jobId: string) => {
    try {
      if (!userId) return;

      const response = await fetch(
        `http://localhost:5000/api/shortlisted-jobs/${userId}/${jobId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Remove the job from the state directly
        setShortlistedJobs((prev) =>
          prev.filter((job) => job.jobPost._id !== jobId)
        );
      }
    } catch (error) {
      console.error("Error removing shortlisted job:", error);
    }
  };

  useEffect(() => {
    fetchShortlistedJobs();
  }, [userId]); // Re-fetch when user ID changes

  const filteredJobs = getFilteredJobs();

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Favorite Jobs</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select
            className="chosen-single form-select"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="6">Last 6 Months</option>
            <option value="12">Last 12 Months</option>
            <option value="16">Last 16 Months</option>
            <option value="24">Last 24 Months</option>
            <option value="60">Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            {isLoading ? (
              <div className="text-center p-4">Loading...</div>
            ) : !userId ? (
              <div className="text-center p-4">
                Please log in to view your shortlisted jobs
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center p-4">No shortlisted jobs found</div>
            ) : (
              <table className="default-table manage-job-table">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Date Shortlisted</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredJobs.map((item) => (
                    <tr key={item._id}>
                      <td>
                        {/* <!-- Job Block --> */}
                        <div className="job-block">
                          <div className="inner-box">
                            <div className="content">
                              <span className="company-logo">
                                <img
                                  src={item.jobPost.image || defaultImage}
                                  alt="logo"
                                  onError={(e) => {
                                    e.currentTarget.src = defaultImage;
                                  }}
                                />
                              </span>
                              <h4>
                                <Link to={`/job-single-v1/${item.jobPost._id}`}>
                                  {item.jobPost.title}
                                </Link>
                              </h4>
                              <ul className="job-info">
                                <li>
                                  <span className="icon flaticon-briefcase"></span>
                                  {item.jobPost.department}
                                </li>
                                <li>
                                  <span className="icon flaticon-map-locator"></span>
                                  {item.jobPost.experience} years of experience
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                      <td className="status">{item.jobPost.status}</td>
                      <td>
                        <div className="option-box">
                          <ul className="option-list">
                            <li>
                              <Link
                                to={`/job-single-v1/${item.jobPost._id}`}
                                data-text="View Job"
                              >
                                <span className="la la-eye"></span>
                              </Link>
                            </li>
                            <li>
                              <button
                                data-text="Remove from Shortlist"
                                onClick={() =>
                                  handleRemoveJob(item.jobPost._id)
                                }
                              >
                                <span className="la la-trash"></span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobFavouriteTable;
