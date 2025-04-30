import React from 'react';

const JobOverView = ({ title, publishDate, deadline, location }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const timeSincePosted = (dateString) => {
    const postedDate = new Date(dateString);
    const now = new Date();
    const hoursDifference = Math.floor((now - postedDate) / (1000 * 60 * 60));
    return `Posted ${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
  };

  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Date Posted:</h5>
          <span>{timeSincePosted(publishDate)}</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Expiration date:</h5>
          <span>{formatDate(deadline)}</span>
        </li>
        <li>
  <i className="icon icon-location"></i>
  <h5>Location:</h5>
  <span>{location || "ESPRIT"}</span>
</li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Job Title:</h5>
          <span>{title}</span>
        </li>
        {/* You can add more details here if needed */}
      </ul>
    </div>
  );
};

export default JobOverView;