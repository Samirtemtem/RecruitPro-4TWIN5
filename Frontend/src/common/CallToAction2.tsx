import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom's Link

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/1.jpg)" }} // Make sure the image path is correct in your React project
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Your Dream Jobs Are Waiting</h2>
          <div className="text">
            Over 1 million interactions, 50,000 success stories Make yours now.
          </div>
        </div>

        <div className="btn-box">
          <Link to="/job-list/job-list-v6" className="theme-btn btn-style-three">
            Search Job
          </Link>
          <Link to="/register" className="theme-btn btn-style-two">
            Apply Job Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
