import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import

const JobSearchBanner = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      // Navigate to results page with search term as a query parameter
      navigate(`/JobListFront?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up" data-aos-delay="500">
              <div className="title-box" style={{ textAlign: 'center', padding: '20px', margin: '0 -60px 0 -100px' }}>
                <h1 style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '40px' }}>
                  Unlock Your Career Potential Today
                </h1>
                <br />
                <div className="logo-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                  <img src="/images/resource/logoremovebg.png" alt="Recruit Pro Logo" style={{ height: '100px', maxWidth: '100%', marginTop: '-15px' }} />
                </div>
              </div>
              <br />

              {/* Job Search Form */}
              <form onSubmit={handleSubmit} className="job-search-form" style={{ textAlign: 'center', margin: '0 0 0 -50px' }}>
                <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div className="form-groupp col-lg-8 col-md-12 col-sm-12" style={{ textAlign: 'left', margin: '10px 0 0 0' }}>
                    <span className="icon flaticon-search-1" style={{ textAlign: 'left', marginRight: '10px' }}></span>
                    <input 
                      type="text" 
                      placeholder="Find your next opportunity: job title, company, or skill..." 
                      style={{ width: '90%', color: '#333', backgroundColor: '#fff' }} 
                      className="search-input"
                      value={searchTerm} // Bind input to state
                      onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
                    />
                  </div>

                  <div className="form-groupp col-lg-3 col-md-12 col-sm-12 btn-box" style={{ marginLeft: 'auto' }}>
                    <button 
                      type="submit" 
                      className="theme-btn btn-style-one" 
                      style={{ 
                        backgroundColor: '#D50000', 
                        borderColor: '#D50000',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#B50000';  
                        e.currentTarget.style.borderColor = '#B50000';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#D50000';
                        e.currentTarget.style.borderColor = '#D50000';
                      }}
                    >
                      <span className="btn-title">Find Jobs</span>
                    </button>
                  </div>
                </div>
              </form>

              <br />
            </div>
          </div>
          {/* End .col */}
          <div className="image-column col-lg-5 col-md-12">
            <div className="image-box">
              <figure className="main-image" data-aos="fade-in" data-aos-delay="500">
                <img src="/images/resource/hero.jpg" alt="hero image" />
              </figure>
              
              <div className="info_block_two" data-aos="fade-in" data-aos-delay="2000">
                <p>10k+ Candidates</p>
                <div className="image">
                  <img src="/images/resource/Owners.png" alt="Owners" />
                </div>
              </div>
              <div className="info_block_three" data-aos="fade-in" data-aos-delay="1500">
                <span className="icon flaticon-briefcase"></span>
                <p>RecruitPro</p>
                <span className="sub-text">Recruitment</span>
                <span className="right_icon fa fa-check"></span>
              </div>
              <div className="info_block_four" data-aos="fade-in" data-aos-delay="2500">
                <span className="icon flaticon-file"></span>
                <div className="inner">
                  <p>Upload Your CV</p>
                  <span className="sub-text">It only takes a few seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchBanner;