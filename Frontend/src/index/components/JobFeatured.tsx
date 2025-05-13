import React, { useEffect, useState } from "react";
import { useAuth } from "../../routing-module/AuthContext";

// Define the type for job post
interface JobPost {
  _id: string;
  title: string;
  description: string;
  requirements: string[];
  department: string;
  status: string;
  publishDate: string;
  deadline: string;
  experience: number;
  image: string;
}

const JobFeatured: React.FC = () => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]); // Use the defined type
  const [shortlistedJobs, setShortlistedJobs] = useState<
    Record<string, boolean>
  >({});
  const defaultImage = "LogoEsprit2.png"; // Replace with the path to your default image

  // Get user ID from auth context
  const { userId } = useAuth();

  // Toggle shortlist status
  const toggleShortlist = async (jobId: string) => {
    try {
      // If no user is logged in, show login prompt
      if (!userId) {
        alert("Please log in to shortlist jobs");
        return;
      }

      // If job is already shortlisted, remove it
      if (shortlistedJobs[jobId]) {
        await fetch(
          `${process.env.BACKEND_URL}/api/shortlisted-jobs/${userId}/${jobId}`,
          {
            method: "DELETE",
          }
        );

        // Update UI immediately
        setShortlistedJobs((prev) => ({ ...prev, [jobId]: false }));
      }
      // Otherwise, add it to shortlist
      else {
        await fetch(`${process.env.BACKEND_URL}/api/shortlisted-jobs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            jobId: jobId,
          }),
        });

        // Update UI immediately
        setShortlistedJobs((prev) => ({ ...prev, [jobId]: true }));
      }
    } catch (error) {
      console.error("Error toggling shortlist:", error);
    }
  };

  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/jobs/FrontOfficelatest`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: JobPost[] = await response.json();
        setJobPosts(data);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };

    fetchJobPosts();
  }, []);

  // When jobs are loaded, check which ones are shortlisted
  useEffect(() => {
    if (jobPosts.length === 0 || !userId) return;

    const checkShortlistedStatus = async () => {
      const shortlistedMap: Record<string, boolean> = {};

      for (const job of jobPosts) {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/shortlisted-jobs/check?userId=${userId}&jobId=${job._id}`
          );

          if (response.ok) {
            const data = await response.json();
            shortlistedMap[job._id] = data.isShortlisted;
          }
        } catch (error) {
          console.error(
            `Error checking shortlist status for job ${job._id}:`,
            error
          );
        }
      }

      setShortlistedJobs(shortlistedMap);
    };

    checkShortlistedStatus();
  }, [jobPosts, userId]);

  return (
    <>
      {jobPosts.slice(0, 6).map((item) => (
        <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item._id}>
          <div
            className="inner-box"
            style={{
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid #f0f0f0",
              transition: "all 0.3s ease",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div className="content">
              <span className="company-logo">
                <img
                  src={item.image || defaultImage}
                  alt="Company logo"
                  onError={(e) => {
                    e.currentTarget.src = defaultImage; // Fallback to default image on error
                  }}
                />
              </span>
              <h4>
                <a
                  href={`/job-single-v1/${item._id}`}
                  style={{ color: "#333", transition: "color 0.3s ease" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#D50000")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
                >
                  {item.title}
                </a>
              </h4>

              <ul className="job-info">
                <li>
                  <span
                    className="icon flaticon-briefcase"
                    style={{ color: "#D50000" }}
                  ></span>
                  {item.department}
                </li>
                <li>
                  <span
                    className="icon flaticon-clock-3"
                    style={{ color: "#D50000" }}
                  ></span>
                  {item.experience} years of experience
                </li>
                <li>
                  <span
                    className="icon flaticon-calendar"
                    style={{ color: "#D50000" }}
                  ></span>
                  Deadline: {new Date(item.deadline).toLocaleDateString()}
                </li>
              </ul>

              <div className="job-requirements">
                <strong>Requirements:</strong>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "8px",
                  }}
                >
                  {item.requirements.map((req, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#D50000",
                        color: "#FFFFFF",
                        padding: "10px",
                        margin: "5px",
                        borderRadius: "5px",
                        flex: "0 1 auto",
                      }}
                    >
                      {req}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="bookmark-btn"
                style={{
                  color: shortlistedJobs[item._id] ? "#D50000" : "#777777",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#D50000")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = shortlistedJobs[item._id]
                    ? "#D50000"
                    : "#777777")
                }
                onClick={() => toggleShortlist(item._id)}
              >
                <span
                  className={`${
                    shortlistedJobs[item._id] ? "fas" : "far"
                  } fa-bookmark`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobFeatured;
