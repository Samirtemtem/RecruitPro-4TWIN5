import React from 'react';

interface JobType {
  styleClass: string;
  type: string;
}

interface JobItem {
  id: number;
  logo: string;
  jobTitle: string;
  company: string;
  location: string;
  time: string;
  salary: string;
  jobType: JobType[];
}

// Temporary job data
const jobs: JobItem[] = [
  {
    id: 1,
    logo: "/images/resource/company-logo/1-1.png",
    jobTitle: "Software Engineer (Android), Libraries",
    company: "Segment",
    location: "London, UK",
    time: "11 hours ago",
    salary: "$35k - $45k",
    jobType: [{ styleClass: "time", type: "Full Time" }],
  },
  {
    id: 2,
    logo: "/images/resource/company-logo/1-2.png",
    jobTitle: "Web Developer",
    company: "Invision",
    location: "Manchester, UK",
    time: "3 hours ago",
    salary: "$25k - $35k",
    jobType: [{ styleClass: "time", type: "Full Time" }],
  },
  {
    id: 3,
    logo: "/images/resource/company-logo/1-3.png",
    jobTitle: "Marketing Director",
    company: "Wipro",
    location: "London, UK",
    time: "11 hours ago",
    salary: "$35k - $45k",
    jobType: [{ styleClass: "time", type: "Full Time" }],
  },
  {
    id: 4,
    logo: "/images/resource/company-logo/1-4.png",
    jobTitle: "Senior Product Designer",
    company: "Catalyst",
    location: "London, UK",
    time: "11 hours ago",
    salary: "$35k - $45k",
    jobType: [{ styleClass: "time", type: "Full Time" }],
  },
];

interface JobApplicationStatus {
  id: number;
  dateApplied: string;
  status: string;
}

const JobListingsTable: React.FC = () => {
  // Mock data for application dates and statuses
  const applications: JobApplicationStatus[] = [
    { id: 1, dateApplied: "Dec 5, 2022", status: "Active" },
    { id: 2, dateApplied: "Nov 30, 2022", status: "Expired" },
    { id: 3, dateApplied: "Nov 25, 2022", status: "Active" },
    { id: 4, dateApplied: "Nov 20, 2022", status: "Under Review" },
  ];

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Applied Jobs</h4>

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
                {jobs.slice(0, 4).map((item, index) => {
                  const application = applications.find(app => app.id === item.id) || 
                    { dateApplied: "N/A", status: "Unknown" };
                  
                  return (
                    <tr key={item.id}>
                      <td>
                        {/* <!-- Job Block --> */}
                        <div className="job-block">
                          <div className="inner-box">
                            <div className="content">
                              <span className="company-logo">
                                <img src={item.logo} alt={`${item.company} logo`} />
                              </span>
                              <h4>
                                <a href={`/job-single-v3/${item.id}`}>
                                  {item.jobTitle}
                                </a>
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
                      <td>{application.dateApplied}</td>
                      <td className="status">{application.status}</td>
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable; 