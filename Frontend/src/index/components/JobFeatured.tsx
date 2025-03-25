import React, { useEffect, useState } from 'react';
 
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
  const defaultImage = 'LogoEsprit2.png'; // Replace with the path to your default image
 
  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs/latest');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: JobPost[] = await response.json(); // Cast the response to JobPost[]
        setJobPosts(data);
      } catch (error) {
        console.error('Error fetching job posts:', error);
      }
    };
 
    fetchJobPosts();
  }, []);
 
  return (
    <>
      {jobPosts.slice(0, 6).map((item) => (
        <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item._id}>
          <div className="inner-box" style={{ 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
            border: '1px solid #f0f0f0',
            transition: 'all 0.3s ease',
            backgroundColor: '#FFFFFF' 
          }}>
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
                  style={{ color: '#333', transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#D50000'} 
                  onMouseOut={(e) => e.currentTarget.style.color = '#333'}
                >
                  {item.title}
                </a>
              </h4>
 
              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase" style={{ color: '#D50000' }}></span>
                  {item.department}
                </li>
                <li>
                  <span className="icon flaticon-clock-3" style={{ color: '#D50000' }}></span>
                  {item.experience} years of experience
                </li>
                <li>
                  <span className="icon flaticon-calendar" style={{ color: '#D50000' }}></span>
                  Deadline: {new Date(item.deadline).toLocaleDateString()}
                </li>
              </ul>
 
              <div className="job-requirements">
                <strong>Requirements:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '8px' }}>
                  {item.requirements.map((req, index) => (
                    <div 
                      key={index} 
                      style={{
                        backgroundColor: '#D50000',
                        color: '#FFFFFF',
                        padding: '10px',
                        margin: '5px',
                        borderRadius: '5px',
                        flex: '0 1 auto',
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
                  color: '#D50000', 
                  transition: 'all 0.3s ease' 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#B50000'}
                onMouseOut={(e) => e.currentTarget.style.color = '#D50000'}
              >
                <span className="flaticon-bookmark"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
 
export default JobFeatured;