import jobFeatured from "../../common/data/job-featured";

const JobFeatured = () => {
  return (
    <>
      {jobFeatured.slice(0, 6).map((item) => (
        <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item.id}>
          <div className="inner-box" style={{ 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
            border: '1px solid #f0f0f0',
            transition: 'all 0.3s ease',
            backgroundColor: '#FFFFFF' 
          }}>
            <div className="content">
              <span className="company-logo">
                <img src={item.logo} alt="item brand" />
              </span>
              <h4>
                <a 
                  href={`/job-single-v1/${item.id}`} 
                  style={{ color: '#333', transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#D50000'} 
                  onMouseOut={(e) => e.currentTarget.style.color = '#333'}
                >
                  {item.jobTitle}
                </a>
              </h4>

              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase" style={{ color: '#D50000' }}></span>
                  {item.company}
                </li>
                <li>
                  <span className="icon flaticon-map-locator" style={{ color: '#D50000' }}></span>
                  {item.location}
                </li>
                <li>
                  <span className="icon flaticon-clock-3" style={{ color: '#D50000' }}></span> {item.time}
                </li>
                <li>
                  <span className="icon flaticon-money" style={{ color: '#D50000' }}></span> {item.salary}
                </li>
              </ul>

              {/* Conditionally render jobType if it exists */}
              {item.jobType && item.jobType.length > 0 && (
                <ul className="job-other-info">
                  {item.jobType.map((val, i) => (
                    <li 
                      key={i} 
                      className={`${val.styleClass}`} 
                      style={{ 
                        backgroundColor: '#D50000', 
                        color: '#FFFFFF',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#B50000'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#D50000'}
                    >
                      {val.type}
                    </li>
                  ))}
                </ul>
              )}

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
