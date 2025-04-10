const CallToAction = () => {
    return (
      <section className="call-to-action">
        <div className="auto-container">
          <div className="outer-box" data-aos="fade-up">
            <div className="content-column">
              <div className="sec-title">
                <h2>Find Your Dream Job!</h2>
                <div className="text">
                Explore exciting opportunities and connect with top employers looking for talent like yours.
                </div>
                <a 
                  href="#" 
                  className="theme-btn btn-style-one" 
                  onClick={(e) => e.preventDefault()}
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
                  <span className="btn-title">Start Your Journey Now</span>
                </a>
              </div>
            </div>
            {/* End .content-column */}
  
            <div
              className="image-column"
              style={{ backgroundImage: "url(/images/resource/image-1.png)" }}
            >
              <figure className="image">
                <img src="/images/resource/image-1.png" alt="resource" />
              </figure>
            </div>
            {/* End .image-column */}
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  