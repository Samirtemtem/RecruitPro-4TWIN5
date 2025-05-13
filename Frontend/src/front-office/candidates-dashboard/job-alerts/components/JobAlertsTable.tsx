import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../../routing-module/AuthContext';
import moment from 'moment';

interface JobType {
  styleClass: string;
  type: string;
}

interface JobItem {
  id: string;
  logo?: string;
  title: string;
  company?: string;
  location?: string;
  department?: string;
  createdAt?: string;
  deadline?: string;
}

interface JobAlert {
  _id: string;
  userId: string;
  jobId: {
    _id: string;
    title: string;
    department?: string;
    description?: string;
    status?: string;
    deadline?: string;
    image?: string;
  };
  criteria: string;
  notifyVia: string[];
  relevanceScore: number;
  isRead: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const JobAlertsTable: React.FC = () => {
  const { userId, token } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [jobAlerts, setJobAlerts] = useState<JobAlert[]>([]);

  // Style definitions
  const styles = {
    unreadAlert: {
      backgroundColor: '#f8f9fa',
    },
    badge: {
      padding: '0.35em 0.65em',
      fontSize: '0.75em',
      fontWeight: 700,
      borderRadius: '0.25rem',
    },
    primaryBadge: {
      backgroundColor: '#0d6efd',
      color: 'white',
      marginLeft: '0.5rem',
    },
    successBadge: {
      backgroundColor: '#198754',
      color: 'white',
    },
  };

  useEffect(() => {
    const fetchJobAlerts = async () => {
      if (!userId || !token) {
        setError("You need to be logged in to view job alerts");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`${process.env.BACKEND_URL}/api/job-alerts/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setJobAlerts(response.data.alerts || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching job alerts:', err);
        setError('Failed to load your job alerts. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobAlerts();
  }, [userId, token]);

  const handleDeleteAlert = async (alertId: string) => {
    if (!token) return;
    
    try {
      await axios.delete(`${process.env.BACKEND_URL}/api/job-alerts/${alertId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Remove the deleted alert from state
      setJobAlerts(prevAlerts => prevAlerts.filter(alert => alert._id !== alertId));
    } catch (err) {
      console.error('Error deleting job alert:', err);
      setError('Failed to delete the job alert. Please try again.');
    }
  };

  const handleMarkAsRead = async (alertId: string) => {
    if (!token) return;
    
    try {
      await axios.patch(`${process.env.BACKEND_URL}/api/job-alerts/${alertId}/read`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Update the alert in state
      setJobAlerts(prevAlerts => 
        prevAlerts.map(alert => 
          alert._id === alertId 
            ? { ...alert, isRead: true } 
            : alert
        )
      );
    } catch (err) {
      console.error('Error marking job alert as read:', err);
      setError('Failed to mark the alert as read. Please try again.');
    }
  };

  // Format date for better display
  const formatDate = (dateString: string) => {
    return moment(dateString).format('MMM DD, YYYY');
  };

  // Get relevance percentage
  const getMatchPercentage = (score: number) => {
    return Math.round(score * 100);
  };

  // Get default logo for jobs
  const getDefaultLogo = (department?: string) => {
    if (department === 'TIC') return "/images/resource/company-logo/1-1.png";
    if (department === 'ELECTROMECANIQUE') return "/images/resource/company-logo/1-2.png";
    if (department === 'GENIE-CIVIL') return "/images/resource/company-logo/1-3.png";
    return "/images/resource/company-logo/1-4.png";
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Job Alerts</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            {loading ? (
              <div className="text-center p-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading your job alerts...</p>
              </div>
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
            ) : jobAlerts.length === 0 ? (
              <div className="alert alert-info">
                <p>You don't have any job alerts yet. Job alerts will be created automatically when new job recommendations match your profile.</p>
              </div>
            ) : (
              <table className="default-table manage-job-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Match</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {jobAlerts.map((alert) => {
                    // For alerts that might not have job data populated
                    if (!alert.jobId) return null;
                    
                    const job = alert.jobId;
                    
                    return (
                      <tr key={alert._id} style={!alert.isRead ? styles.unreadAlert : undefined}>
                  {/*   <td>
                          <div className="job-block">
                            <div className="inner-box">
                              <div className="content">
                                <span className="company-logo">
                                  <img 
                                    src={job.image || getDefaultLogo(job.department)} 
                                    alt={`${job.title} logo`} 
                                  />
                                </span>
                                <h4>
                                  <a href={`/job-single-v1/${job._id}`}>
                                    {job.title}
                                  </a>
                                  {!alert.isRead && <span style={{...styles.badge, ...styles.primaryBadge}}>New</span>}
                                </h4>
                                <ul className="job-info">
                                  <li>
                                    <span className="icon flaticon-briefcase"></span>
                                    {job.department || 'General'}
                                  </li>
                                  {job.deadline && (
                                    <li>
                                      <span className="icon flaticon-clock-1"></span>
                                      Deadline: {formatDate(job.deadline)}
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>

                        </td>  */}


<td>
                          <div className="job-block">
                            <div className="inner-box">
                              <div className="content">
                              
                                <h4>
                                  <a href={`/job-single-v1/${job._id}`}>
                                    {job.title}
                                  </a>
                                  {!alert.isRead && <span style={{...styles.badge, ...styles.primaryBadge}}>New</span>}
                                </h4>
                                <ul className="job-info">
                                  <li>
                                    <span className="icon flaticon-briefcase"></span>
                                    {job.department || 'General'}
                                  </li>
                                  {job.deadline && (
                                    <li>
                                      <span className="icon flaticon-clock-1"></span>
                                      Deadline: {formatDate(job.deadline)}
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span style={{...styles.badge, ...styles.successBadge}}>
                            {getMatchPercentage(alert.relevanceScore)}% Match
                          </span>
                        </td>
                        <td>{formatDate(alert.createdAt)}</td>
                        <td>
                          <div className="option-box">
                            <ul className="option-list">
                              {!alert.isRead && (
                                <li>
                                  <button 
                                    type="button" 
                                    data-text="Mark as Read"
                                    onClick={() => handleMarkAsRead(alert._id)}
                                  >
                                    <span className="la la-check"></span>
                                  </button>
                                </li>
                              )}
                              <li>
                                <a 
                                  href={`/job-single-v1/${job._id}`} 
                                  data-text="View Job"
                                >
                                  <span className="la la-eye"></span>
                                </a>
                              </li>
                              <li>
                                <button 
                                  type="button" 
                                  data-text="Delete Alert"
                                  onClick={() => handleDeleteAlert(alert._id)}
                                >
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
            )}
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobAlertsTable; 