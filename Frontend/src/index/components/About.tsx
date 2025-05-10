import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>Hundred of Jobs. Find the one that suits you.</h2>
            <div className="text">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide.
            </div>
          </div>
          <ul className="list-style-one">
            <li>Bring to the table win-win survival</li>
            <li>Capitalize on low hanging fruit to identify</li>
            <li>But I must explain to you how all this</li>
          </ul>
          <Link 
            to="/register" 
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
            <span className="btn-title">Get Started</span>
          </Link>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <img src="/images/resource/imagee.jpg" alt="about" />
        </figure>

        {/* <!-- Count Employers --> */}
        <div className="count-employers" data-aos="flip-right">
          <div className="check-box">
            <span className="flaticon-tick"></span>
          </div>
          <span className="title">300k+ Employers</span>
          <figure className="image">
            <img src="/images/resource/Logooo.png" alt="resource" />
          </figure>
        </div>
      </div>
      {/* <!-- Image Column --> */}
    </>
  );
};

export default About;
