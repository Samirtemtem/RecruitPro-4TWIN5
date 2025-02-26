import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>Millions of Jobs. Find the one that suits you.</h2>
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
          <Link to="/register" className="theme-btn btn-style-one bg-blue">
            <span className="btn-title">Get Started</span>
          </Link>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <img src="/images/resource/image-2.jpg" alt="about" />
        </figure>

        {/* <!-- Count Employers --> */}
        <div className="count-employers" data-aos="flip-right">
          <div className="check-box">
            <span className="flaticon-tick"></span>
          </div>
          <span className="title">300k+ Employers</span>
          <figure className="image">
            <img src="/images/resource/multi-logo.png" alt="resource" />
          </figure>
        </div>
      </div>
      {/* <!-- Image Column --> */}
    </>
  );
};

export default About;
