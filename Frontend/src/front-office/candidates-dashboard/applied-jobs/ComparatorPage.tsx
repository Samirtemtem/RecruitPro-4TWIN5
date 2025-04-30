import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../../../common/MobileMenu';
import CopyrightFooter from '../../../common/CopyrightFooter';
import MenuToggler from '../../../common/MenuToggler';
import BreadCrumb from '../../../common/Breadcrumb';
import DashboardCandidatesSidebar from '../dashboard/components/DashboardCandidatesSidebar';
import Header from '../../../common/Header';
import Seo from '../../../common/Seo';
import Select from 'react-select';

// Interfaces for type safety
interface JobItem {
  _id: string;
  image: string;
  title: string;
  department: string;
  description: string;
  publishDate: string;
  deadline: string;
  requirements: string[];
  experience: number;
  status: string;
  salary?: string;
  location?: string;
  company?: string;
  companyLogo?: string;
}

interface JobApplication extends JobItem {
  applicationId: string;
}

const ComparatorPage: React.FC = () => {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const defaultImage = '/LogoEsprit2.png';

  // Fetch job applications from the backend
  useEffect(() => {
    const userId = localStorage.getItem('userId');
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
          _id: item?.jobPost?._id || 'N/A',
          image: item?.jobPost?.image || defaultImage,
          title: item?.jobPost?.title?.trim() || 'Untitled Job',
          department: item?.jobPost?.department || 'Not specified',
          description: item?.jobPost?.description || 'No description available',
          publishDate: item?.jobPost?.publishDate || new Date().toISOString(),
          deadline: item?.jobPost?.deadline || 'Not specified',
          requirements: item?.jobPost?.requirements || [],
          experience: item?.jobPost?.experience || 0,
          status: item?.status || 'Applied',
          applicationId: item?._id || 'N/A',
          salary: item?.jobPost?.salary || 'Not specified',
          location: item?.jobPost?.location || 'Remote/Not specified',
          company: item?.jobPost?.company?.name || 'Company',
          companyLogo: item?.jobPost?.company?.logo || defaultImage,
        }));
    
        setJobs(formattedJobs);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAppliedJobs();
  }, []);

  // Convert job data to options for react-select
  const jobOptions = jobs.map(job => ({
    value: job._id,
    label: job.title
  }));

  // Handle select changes
  const handleSelectChange = (selectedOptions: any) => {
    if (selectedOptions) {
      const values = selectedOptions.map((option: any) => option.value);
      setSelectedJobs(values);
      setSelectedOptions(selectedOptions);
    } else {
      setSelectedJobs([]);
      setSelectedOptions([]);
    }
  };

  // Get job details for selected jobs
  const selectedJobDetails = jobs.filter((job) => selectedJobs.includes(job._id));

  // Color palette for cards
  const cardColors = [
    { bg: '#f0f7ff', border: '#d0e2ff', title: '#1a56db' },
    { bg: '#f7f0ff', border: '#e2d0ff', title: '#6a1adb' },
    { bg: '#fff0f7', border: '#ffd0e2', title: '#db1a56' }
  ];

  // Compare field function to highlight differences or similarities
  const renderComparisonField = (label: string, values: string[]) => {
    const allSame = values.every(v => v === values[0]);
    
    return (
      <div className="comparison-field">
        <div className="field-label">{label}</div>
        <div className="field-values">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className={`field-value ${allSame ? 'matching' : 'different'}`}
              style={{ 
                padding: '6px 12px',
                background: allSame ? '#eefff1' : '#fff5e6',
                borderRadius: '4px',
                margin: '2px 0',
                fontSize: '14px',
                border: allSame ? '1px solid #d0ffd9' : '1px solid #ffe8cc'
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="page-wrapper dashboard">
        <Seo pageTitle="Job Comparator" />
        <span className="header-span"></span>
        <Header />
        <MobileMenu />
        <DashboardCandidatesSidebar />
        <section className="user-dashboard">
          <div className="dashboard-outer">
            <MenuToggler />
            <div style={{ height: '55px' }}></div>
            <BreadCrumb title="Comparateur de jobs" />
            <div className="ls-widget">
              <div className="widget-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <h4 className="mt-3">Chargement des candidatures...</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CopyrightFooter />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="page-wrapper dashboard">
        <Seo pageTitle="Job Comparator" />
        <span className="header-span"></span>
        <Header />
        <MobileMenu />
        <DashboardCandidatesSidebar />
        <section className="user-dashboard">
          <div className="dashboard-outer">
            <MenuToggler />
            <div style={{ height: '55px' }}></div>
            <BreadCrumb title="Comparateur de jobs" />
            <div className="ls-widget">
              <div className="widget-content" style={{ padding: '30px' }}>
                <div className="alert alert-danger">
                  <h4>Erreur</h4>
                  <p>{error}</p>
                </div>
                <button className="theme-btn btn-style-one" onClick={() => window.location.reload()}>
                  Réessayer
                </button>
              </div>
            </div>
          </div>
        </section>
        <CopyrightFooter />
      </div>
    );
  }

  // Empty state
  if (jobs.length === 0) {
    return (
      <div className="page-wrapper dashboard">
        <Seo pageTitle="Job Comparator" />
        <span className="header-span"></span>
        <Header />
        <MobileMenu />
        <DashboardCandidatesSidebar />
        <section className="user-dashboard">
          <div className="dashboard-outer">
            <MenuToggler />
            <div style={{ height: '55px' }}></div>
            <BreadCrumb title="Comparateur de jobs" />
            <div className="ls-widget">
              <div className="widget-title">
                <h4>
                  <i className="la la-exchange"></i> Comparateur de jobs
                </h4>
              </div>
              <div className="widget-content" style={{ textAlign: 'center', padding: '50px 20px' }}>
                <i className="la la-briefcase" style={{ fontSize: '48px', color: '#ccc', marginBottom: '15px' }}></i>
                <h4>Aucune candidature trouvée</h4>
                <p>Vous n'avez pas encore postulé à des offres d'emploi. Explorez des offres et postulez pour pouvoir les comparer.</p>
                <Link to="/JobListFront" className="theme-btn btn-style-one mt-3">
                  Explorer les offres d'emploi
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CopyrightFooter />
      </div>
    );
  }

  return (
    <div className="page-wrapper dashboard">
      <Seo pageTitle="Job Comparator" />
      <span className="header-span"></span>
      <Header />
      <MobileMenu />
      <DashboardCandidatesSidebar />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <MenuToggler />
          <div style={{ height: '55px' }}></div>
          <BreadCrumb title="Comparateur de jobs" />
          
          <div className="ls-widget" style={{ margin: '0 -15px' }}>
            <div className="widget-title">
              <h4>
                <i className="la la-exchange"></i> Comparez vos jobs
              </h4>
            </div>
            
            <div className="widget-content" style={{ padding: '30px' }}>
              <div className="selector-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ 
                  marginBottom: '40px', 
                  textAlign: 'center',
                  maxWidth: '700px',
                  margin: '0 auto 40px'
                }}>
                  <h3 style={{ 
                    marginBottom: '15px', 
                    fontWeight: 700, 
                    fontSize: '24px',
                    color: '#202124'
                  }}>
                    Sélectionnez jusqu'à 3 jobs à comparer
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '25px',
                    fontSize: '16px', 
                    lineHeight: '1.6'
                  }}>
                    Comparez les détails des offres pour prendre la meilleure décision professionnelle
                  </p>
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 10,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    borderRadius: '12px',
                    padding: '6px'
                  }}>
                    <Select
                      isMulti
                      options={jobOptions}
                      value={selectedOptions}
                      onChange={handleSelectChange}
                      placeholder="Sélectionnez des jobs à comparer..."
                      isOptionDisabled={() => selectedJobs.length >= 3}
                      styles={{
                        control: (base) => ({
                          ...base,
                          boxShadow: 'none',
                          borderRadius: '8px',
                          border: '1px solid #e0e0e0',
                          padding: '4px',
                          minHeight: '55px',
                          fontSize: '16px'
                        }),
                        multiValue: (base) => ({
                          ...base,
                          borderRadius: '6px',
                          padding: '2px 4px',
                          backgroundColor: '#eef4ff'
                        }),
                        placeholder: (base) => ({
                          ...base,
                          fontSize: '16px',
                          color: '#888'
                        }),
                        option: (base, state) => ({
                          ...base,
                          padding: '12px 16px',
                          backgroundColor: state.isSelected ? '#1967d2' : state.isFocused ? '#f0f7ff' : 'white',
                          fontSize: '15px'
                        })
                      }}
                    />
                  </div>
                </div>
                
                {selectedJobDetails.length === 0 ? (
                  <div className="empty-state" style={{ 
                    textAlign: 'center', 
                    padding: '60px 20px',
                    backgroundColor: '#f9fbfd',
                    borderRadius: '16px',
                    margin: '30px auto',
                    maxWidth: '700px',
                    border: '1px dashed #d0e2ff'
                  }}>
                    <i className="la la-search" style={{ 
                      fontSize: '60px', 
                      color: '#94a3b8', 
                      marginBottom: '20px',
                      opacity: '0.7'
                    }}></i>
                    <h4 style={{ 
                      color: '#334155', 
                      marginBottom: '15px', 
                      fontSize: '22px',
                      fontWeight: '600'
                    }}>Aucun job sélectionné</h4>
                    <p style={{ 
                      color: '#64748b', 
                      fontSize: '16px',
                      maxWidth: '450px',
                      margin: '0 auto 15px',
                      lineHeight: '1.6'
                    }}>Utilisez le menu déroulant ci-dessus pour sélectionner des jobs à comparer</p>
                  </div>
                ) : (
                  <div className="comparison-container">
                    <div className="row" style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      margin: '0 -15px'
                    }}>
                      {selectedJobDetails.map((job, idx) => (
                        <div
                          key={job._id}
                          className={`col-lg-${12 / Math.min(selectedJobDetails.length, 3)} col-md-6 col-sm-12`}
                          style={{ marginBottom: 30, padding: '0 15px' }}
                        >
                          <div className="job-card" style={{ 
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                            border: `1px solid ${cardColors[idx % 3].border}`,
                            backgroundColor: 'white',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <div className="job-header" style={{ 
                              padding: '25px 25px 20px',
                              borderBottom: '1px solid #edf2f7',
                              backgroundColor: cardColors[idx % 3].bg,
                              position: 'relative'
                            }}>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '15px' 
                              }}>
                                <div style={{ 
                                  width: '70px', 
                                  height: '70px', 
                                  marginRight: '20px',
                                  borderRadius: '12px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: 'white',
                                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                                  border: '1px solid #eee',
                                  padding: '8px'
                                }}>
                                  <img 
                                    src={job.companyLogo || defaultImage} 
                                    alt={job.company || 'Company'} 
                                    style={{ 
                                      maxWidth: '100%', 
                                      maxHeight: '100%', 
                                      borderRadius: '8px' 
                                    }} 
                                  />
                                </div>
                                <div>
                                  <span style={{
                                    display: 'inline-block',
                                    padding: '4px 12px',
                                    backgroundColor: '#eefff1',
                                    borderRadius: '50px',
                                    color: '#1cad3a',
                                    fontWeight: 600,
                                    fontSize: '12px',
                                    marginBottom: '8px'
                                  }}>
                                    {job.status}
                                  </span>
                                  <h4 style={{ 
                                    fontWeight: 700, 
                                    fontSize: '20px',
                                    marginBottom: '5px',
                                    color: cardColors[idx % 3].title,
                                    lineHeight: '1.3'
                                  }}>{job.title}</h4>
                                  <div style={{ color: '#555', fontSize: '14px' }}>{job.company || 'Company'}</div>
                                </div>
                              </div>
                              <div style={{ 
                                marginTop: '15px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '15px'
                              }}>
                                <div style={{ 
                                  display: 'flex', 
                                  alignItems: 'center',
                                  fontSize: '14px'
                                }}>
                                  <i className="la la-map-marker" style={{ 
                                    marginRight: '8px', 
                                    color: '#666',
                                    fontSize: '18px' 
                                  }}></i>
                                  {job.location || 'Non spécifié'}
                                </div>
                                {job.salary && (
                                  <div style={{ 
                                    display: 'flex', 
                                    alignItems: 'center',
                                    fontSize: '14px'
                                  }}>
                                    <i className="la la-money" style={{ 
                                      marginRight: '8px', 
                                      color: '#666',
                                      fontSize: '18px' 
                                    }}></i>
                                    {job.salary}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="job-details" style={{ 
                              padding: '25px',
                              flex: 1,
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              <div className="attribute" style={{ marginBottom: '18px' }}>
                                <div style={{ 
                                  fontWeight: 700, 
                                  marginBottom: '8px', 
                                  fontSize: '15px',
                                  color: '#333'
                                }}>Département</div>
                                <div style={{ 
                                  backgroundColor: '#f8fafc',
                                  padding: '10px 15px',
                                  borderRadius: '8px',
                                  fontSize: '14px'
                                }}>{job.department}</div>
                              </div>
                              <div className="attribute" style={{ marginBottom: '18px' }}>
                                <div style={{ 
                                  fontWeight: 700, 
                                  marginBottom: '8px', 
                                  fontSize: '15px',
                                  color: '#333'
                                }}>Description</div>
                                <div style={{ 
                                  backgroundColor: '#f8fafc',
                                  padding: '10px 15px',
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  lineHeight: '1.5'
                                }}>{job.description.substring(0, 50)}...</div>
                              </div>
                              <div style={{ 
                                display: 'flex',
                                gap: '15px',
                                flexWrap: 'wrap',
                                marginBottom: '18px'
                              }}>
                                <div className="attribute" style={{ flex: '1 0 45%' }}>
                                  <div style={{ 
                                    fontWeight: 700, 
                                    marginBottom: '8px', 
                                    fontSize: '15px',
                                    color: '#333'
                                  }}>Date de publication</div>
                                  <div style={{ 
                                    backgroundColor: '#f8fafc',
                                    padding: '10px 15px',
                                    borderRadius: '8px',
                                    fontSize: '14px'
                                  }}>{new Date(job.publishDate).toLocaleDateString()}</div>
                                </div>
                                <div className="attribute" style={{ flex: '1 0 45%' }}>
                                  <div style={{ 
                                    fontWeight: 700, 
                                    marginBottom: '8px', 
                                    fontSize: '15px',
                                    color: '#333'
                                  }}>Date limite</div>
                                  <div style={{ 
                                    backgroundColor: '#f8fafc',
                                    padding: '10px 15px',
                                    borderRadius: '8px',
                                    fontSize: '14px'
                                  }}>{typeof job.deadline === 'string' && job.deadline.includes('T') 
                                    ? new Date(job.deadline).toLocaleDateString()
                                    : job.deadline}</div>
                                </div>
                              </div>
                              <div className="attribute" style={{ marginBottom: '18px' }}>
                                <div style={{ 
                                  fontWeight: 700, 
                                  marginBottom: '8px', 
                                  fontSize: '15px',
                                  color: '#333'
                                }}>Expérience requise</div>
                                <div style={{ 
                                  backgroundColor: '#f8fafc',
                                  padding: '10px 15px',
                                  borderRadius: '8px',
                                  fontSize: '14px'
                                }}>{job.experience} {job.experience === 1 ? 'an' : 'ans'}</div>
                              </div>
                              <div className="attribute" style={{ marginTop: 'auto' }}>
                                <div style={{ 
                                  fontWeight: 700, 
                                  marginBottom: '12px', 
                                  fontSize: '15px',
                                  color: '#333'
                                }}>Compétences</div>
                                {job.requirements && job.requirements.length > 0 ? (
                                  <div style={{ 
                                    display: 'flex', 
                                    flexWrap: 'wrap', 
                                    gap: '8px',
                                    marginTop: '5px'
                                  }}>
                                    {job.requirements.map((req, i) => (
                                      <span key={i} style={{
                                        padding: '6px 14px',
                                        backgroundColor: cardColors[idx % 3].bg,
                                        borderRadius: '50px',
                                        fontSize: '13px',
                                        border: `1px solid ${cardColors[idx % 3].border}`,
                                        color: cardColors[idx % 3].title,
                                        fontWeight: '500'
                                      }}>
                                        {req}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <p style={{ color: '#94a3b8', fontSize: '14px' }}>
                                    Aucune compétence spécifiée
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            <div className="job-actions" style={{ 
                              padding: '15px 25px',
                              borderTop: '1px solid #edf2f7',
                              textAlign: 'center'
                            }}>
                              <Link 
                                to={`/job-single-v1/${job._id}`}
                                className="theme-btn btn-style-two"
                                style={{
                                  padding: '8px 20px',
                                  borderRadius: '8px',
                                  fontSize: '14px',
                                  fontWeight: '600'
                                }}
                              >
                                Voir les détails
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {selectedJobDetails.length > 1 && (
                      <div className="comparison-summary" style={{ 
                        marginTop: '40px', 
                        padding: '30px',
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                        border: '1px solid #eaeaea'
                      }}>
                        <h3 style={{ 
                          fontWeight: 700, 
                          marginBottom: '25px',
                          fontSize: '20px',
                          color: '#202124',
                          paddingBottom: '15px',
                          borderBottom: '1px solid #f1f5f9'
                        }}>Comparaison rapide</h3>
                        
                        <div style={{
                          display: 'grid',
                          gap: '20px'
                        }}>
                          {renderComparisonField('Département', selectedJobDetails.map(job => job.department))}
                          {renderComparisonField('Expérience requise', selectedJobDetails.map(job => `${job.experience} ${job.experience === 1 ? 'an' : 'ans'}`))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CopyrightFooter />
    </div>
  );
};

export default ComparatorPage; 