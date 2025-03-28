import React, { useEffect, useState } from 'react';

interface JobType {
  styleClass: string;
  type: string;
}

interface JobItem {
  _id: string; // MongoDB ID
  image: string;
  logo: string;
  title: string;
  department: string;
  description: string;
  location?: string; // Optional if not provided
  publishDate: string;
  deadline: string;
  requirements: string[];
  experience: number;
  status: string;
}

// Job Application Status Interface
interface JobApplicationStatus {
  id: number;
  dateApplied: string;
  status: string;
}

const JobListingsTable: React.FC = () => {
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const defaultImage = 'LogoEsprit2.png'; 
  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from local storage
    if (!userId) {
      setError('User ID not found in local storage.');
      setLoading(false);
      return;
    }

    const fetchJobs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/api/users/${userId}/job-posts`);
        if (!response.ok) {
          throw new Error('Failed to fetch job posts');
        }
        const data = await response.json();

        // Log the fetched data to the console
        console.log('Fetched job posts:', data);

        setJobs(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array to run on mount

  // Mock data for application dates and statuses
  const applications: JobApplicationStatus[] = [
    { id: 1, dateApplied: "Dec 5, 2022", status: "Active" },
    { id: 2, dateApplied: "Nov 30, 2022", status: "Expired" },
    { id: 3, dateApplied: "Nov 25, 2022", status: "Active" },
    { id: 4, dateApplied: "Nov 20, 2022", status: "Under Review" },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Applied Jobs</h4>
        <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 years</option>
          </select>
        </div>
      </div>

      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Department</th>
                
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((item) => {
                const application = applications.find(app => app.id === parseInt(item._id)) || 
                  { dateApplied: "N/A", status: "Unknown" };

                return (
                  <tr key={item._id}>
                    <td>
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                            <img src={item.logo || defaultImage} alt="Company logo" style={{ maxWidth: '120px' }} />
                            </span>
                            <h4>
                              <a href={`/job-single-v1/${item._id}`}>
                                {item.title}
                              </a>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                {item.department}
                              </li>
                              <li>
                                <span className="icon flaticon-clock"></span>
                                {new Date(item.publishDate).toLocaleDateString()}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.department}</td>
                    <td className="status">{item.status}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Application">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Application">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobListingsTable;