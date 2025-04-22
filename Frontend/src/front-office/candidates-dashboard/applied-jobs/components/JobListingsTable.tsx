import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface JobItem {
  _id: string; // MongoDB ID
  image: string;
  title: string;
  department: string;
  description: string;
  publishDate: string;
  deadline: string;
  requirements: string[];
  experience: number;
  status: string;
}

interface JobApplication extends JobItem {
  applicationId: string; // Add the application ID here
}

const JobListingsTable: React.FC = () => {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const defaultImage = '/LogoEsprit2.png'; // Correct path for the public folder

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from local storage
    if (!userId) {
      setError('User ID not found in local storage.');
      setLoading(false);
      return;
    }

    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/app/candidates/${userId}/applications`);
        if (!response.ok) {
          throw new Error('Failed to fetch applied jobs');
        }
        const data = await response.json();
        
        const formattedJobs = data.map((item: any) => ({
          _id: item.jobPost._id,
          image: item.jobPost.image || defaultImage,
          title: item.jobPost.title.trim(),
          department: item.jobPost.department,
          description: item.jobPost.description,
          publishDate: item.jobPost.publishDate,
          deadline: item.jobPost.deadline,
          requirements: item.jobPost.requirements,
          experience: item.jobPost.experience,
          status: item.status,
          applicationId: item._id // Store the application ID here
        }));

        setJobs(formattedJobs);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, []); // Empty dependency array to run on mount

  const deleteApplication = async (applicationId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/app/Deleteapplication/${applicationId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete application');
      }

      // Remove the deleted application from the state
      setJobs((prevJobs) => prevJobs.filter((job) => job.applicationId !== applicationId));
    } catch (err: any) {
      setError(err.message);
    }
  };

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
              {jobs.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <h4 className="ml-0">
                            <Link to={`/job-single-v1/${item._id}`}>
                              {item.title}
                            </Link>
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
                          <Link to={`/candidates-dashboard/application/${item.applicationId}`} data-text="View Application">
                            <span className="la la-eye"></span>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => deleteApplication(item.applicationId)}
                            data-text="Delete Application"
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
        </div>
      </div>

      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000; /* Ensure it appears above other content */
          }

          .modal {
            background: white;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }

          .modal button {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default JobListingsTable;