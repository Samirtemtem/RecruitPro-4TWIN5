import React, { useEffect, useState } from 'react';

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
  const [selectedApplication, setSelectedApplication] = useState<JobApplicationStatus | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  
  const defaultImage = '/LogoEsprit2.png'; // Correct path for the public folder

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

  const handleViewApplication = (appId: number) => {
    const application = applications.find(app => app.id === appId);
    console.log("Selected Application:", application); // Debugging statement
    if (application) {
      setSelectedApplication(application);
      setModalVisible(true);
    } else {
      console.error("Application not found for ID:", appId); // Debugging statement
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedApplication(null);
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
              {jobs.map((item) => {
                const application = applications.find(app => app.id === parseInt(item._id)) || 
                  { id: 0, dateApplied: "N/A", status: "Unknown" }; // Add id to the fallback object

                return (
                  <tr key={item._id}>
                    <td>
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <h4 className="ml-0">
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
                            <button onClick={() => handleViewApplication(application.id)} data-text="View Application">
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

      {modalVisible && selectedApplication && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Application Details</h2>
            <p>Date Applied: {selectedApplication.dateApplied}</p>
            <p>Status: {selectedApplication.status}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

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