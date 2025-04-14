import React from 'react';
// If you're using CSS modules or an external stylesheet, import it like this:
// import './CallToActions.css'; 

const CallToActions = () => {
  return (
    <div className="call-to-action-four">
      <h5>Find Your Dream Job!</h5>
      <p>
      Explore exciting opportunities and connect with top employers looking for talent like yours.
      </p>
      <a href="#" className="theme-btn btn-style-one bg-blue">
        <span className="btn-title">Start Your Journey Now</span>
      </a>
      <div
        className="image"
        style={{ backgroundImage: "url(/images/resource/ads-bg-4.png)" }}
      ></div>
    </div>
  );
};

export default CallToActions;