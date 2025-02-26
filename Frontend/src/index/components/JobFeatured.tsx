import jobFeatured from "../data/job-featured";

const JobFeatured = () => {
  return (
    <>
      {jobFeatured.slice(0, 6).map((item) => (
        <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <img src={item.logo} alt="item brand" />
              </span>
              <h4>
                <a href={`/job-single-v1/${item.id}`}>{item.jobTitle}</a>
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
                <li>
                  <span className="icon flaticon-clock-3"></span> {item.time}
                </li>
                <li>
                  <span className="icon flaticon-money"></span> {item.salary}
                </li>
              </ul>

              {/* Conditionally render jobType if it exists */}
              {item.jobType && item.jobType.length > 0 && (
                <ul className="job-other-info">
                  {item.jobType.map((val, i) => (
                    <li key={i} className={`${val.styleClass}`}>
                      {val.type}
                    </li>
                  ))}
                </ul>
              )}

              <button className="bookmark-btn">
                <span className="flaticon-bookmark"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobFeatured;
