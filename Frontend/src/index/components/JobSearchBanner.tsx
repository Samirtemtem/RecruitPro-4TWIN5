import React from "react";

const JobSearchBanner = () => {
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up" data-aos-delay="500">
              <div className="title-box">
                <h3>
                  There Are <span className="colored">93,178</span> Postings Here
                  <br /> For you!
                </h3>
                <div className="text">Find Jobs, Employment & Career Opportunities</div>
              </div>
              
              {/* Job Search Form */}
              <form onSubmit={handleSubmit} className="job-search-form">
                <div className="row">
                  <div className="form-group col-lg-5 col-md-12 col-sm-12">
                    <span className="icon flaticon-search-1"></span>
                    <input type="text" placeholder="Job title, keywords, or company" />
                  </div>
                  <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
                    <span className="icon flaticon-map-locator"></span>
                    <input type="text" placeholder="City or postcode" />
                  </div>
                  <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
                    <button type="submit" className="theme-btn btn-style-one">
                      <span className="btn-title">Find Jobs</span>
                    </button>
                  </div>
                </div>
              </form>
              
              {/* Popular Search */}
              <div className="popular-searches" data-aos="fade-up" data-aos-delay="1000">
                <span className="title">Popular Searches : </span>
                <a href="#">Designer</a>, <a href="#">Developer</a>, <a href="#">Web</a>,
                <a href="#">IOS</a>, <a href="#">PHP</a>, <a href="#">Senior</a>,
                <a href="#">Engineer</a>
              </div>
            </div>
          </div>
          {/* End .col */}
          <div className="image-column col-lg-5 col-md-12">
            <div className="image-box">
              <figure className="main-image" data-aos="fade-in" data-aos-delay="500">
                <img src="/images/resource/banner-img-1.png" alt="hero image" />
              </figure>
              <div className="info_block" data-aos="fade-in" data-aos-delay="1000">
                <span className="icon flaticon-email-3"></span>
                <p>Work Inquiry From <br /> Ali Tufan</p>
              </div>
              <div className="info_block_two" data-aos="fade-in" data-aos-delay="2000">
                <p>10k+ Candidates</p>
                <div className="image">
                  <img src="/images/resource/multi-peoples.png" alt="multi people" />
                </div>
              </div>
              <div className="info_block_three" data-aos="fade-in" data-aos-delay="1500">
                <span className="icon flaticon-briefcase"></span>
                <p>Creative Agency</p>
                <span className="sub-text">Startup</span>
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
