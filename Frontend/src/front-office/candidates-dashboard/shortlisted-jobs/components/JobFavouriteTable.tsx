import React from "react";
import { Link } from "react-router-dom";

// Sample job data
const sampleJobs = [
  {
    id: 1,
    logo: "/images/resource/company-logo/1-1.png",
    jobTitle: "Software Engineer (Android)",
    company: "Segment",
    location: "London, UK",
    dateApplied: "Dec 5, 2020",
    status: "Active"
  },
  {
    id: 2,
    logo: "/images/resource/company-logo/1-2.png",
    jobTitle: "Full Stack Developer",
    company: "Segment",
    location: "London, UK",
    dateApplied: "Dec 5, 2020",
    status: "Active"
  },
  {
    id: 3,
    logo: "/images/resource/company-logo/1-3.png",
    jobTitle: "Senior Product Designer",
    company: "Segment",
    location: "London, UK",
    dateApplied: "Dec 5, 2020",
    status: "Active"
  },
  {
    id: 4,
    logo: "/images/resource/company-logo/1-4.png",
    jobTitle: "Front-end Developer",
    company: "Segment",
    location: "London, UK",
    dateApplied: "Dec 5, 2020",
    status: "Active"
  }
];

const JobFavouriteTable: React.FC = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Favorite Jobs</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Date Applied</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {sampleJobs.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img src={item.logo} alt="logo" />
                            </span>
                            <h4>
                              <Link to={`/job-details/${item.id}`}>
                                {item.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                {item.company}
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                {item.location}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.dateApplied}</td>
                    <td className="status">{item.status}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Application">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Application">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobFavouriteTable; 