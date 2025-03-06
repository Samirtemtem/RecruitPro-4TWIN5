import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jobs from "./utils/job-featured";
import {
  addCategory,
  addDatePosted,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSalary,
  addSort,
  addTag,
  clearExperience,
  clearJobType,
} from "./utils/filterSlice";
import {
  clearDatePostToggle,
  clearExperienceToggle,
  clearJobTypeToggle,
} from "./utils/jobSlice";

// Updated JobItem interface to match jobs data
interface JobItem {
  id: number;
  jobTitle: string;
  company: string;
  location?: string; // Optional to accommodate all jobs
  time?: string; // Optional
  salary?: string; // Optional
  logo: string;
  link?: string;
  jobType?: { type: string; styleClass: string }[];
  jobTag?: string[];
  jobCat?: string;
  jobCatIcon?: string;
  destination?: { min: number; max: number };
  category?: string;
  created_at?: string;
  experience?: string;
  totalSalary?: { min: number; max: number };
  tag?: string;
}

// Define Redux state shape
interface FilterState {
  jobList: {
    keyword: string;
    location: string;
    destination: { min: number; max: number };
    category: string;
    jobType: string[];
    datePosted: string;
    experience: string[];
    salary: { min: number; max: number };
    tag: string;
  };
  jobSort: {
    sort: string;
    perPage: { start: number; end: number };
  };
}

interface JobState {
  // Placeholder for job slice properties
}

interface RootState {
  filter: FilterState;
  job: JobState;
}

const FilterJobsBox = () => {
  const { jobList, jobSort } = useSelector((state: RootState) => state.filter);
  const {
    keyword,
    location,
    destination,
    category,
    jobType,
    datePosted,
    experience,
    salary,
    tag,
  } = jobList;
  const { sort, perPage } = jobSort;

  const dispatch = useDispatch();

  // Keyword filter
  const keywordFilter = (item: JobItem): boolean =>
    keyword
      ? item.jobTitle.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      : true;

  // Location filter
  const locationFilter = (item: JobItem): boolean =>
    location && item.location
      ? item.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
      : true;

  // Destination filter
  const destinationFilter = (item: JobItem): boolean =>
    item.destination
      ? item.destination.min >= destination.min &&
        item.destination.max <= destination.max
      : true;

  // Category filter
  const categoryFilter = (item: JobItem): boolean =>
    category && item.category
      ? item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
      : true;

  // Job type filter
  const jobTypeFilter = (item: JobItem): boolean =>
    jobType.length > 0 && item.jobType && item.jobType.length > 0
      ? jobType.includes(
          item.jobType[0].type.toLocaleLowerCase().split(" ").join("-")
        )
      : true;

  // Date posted filter
  const datePostedFilter = (item: JobItem): boolean =>
    datePosted && datePosted !== "all" && item.created_at
      ? item.created_at
          .toLocaleLowerCase()
          .split(" ")
          .join("-")
          .includes(datePosted)
      : true;

  // Experience filter
  const experienceFilter = (item: JobItem): boolean =>
    experience.length > 0 && item.experience
      ? experience.includes(
          item.experience.split(" ").join("-").toLocaleLowerCase()
        )
      : true;

  // Salary filter
  const salaryFilter = (item: JobItem): boolean =>
    item.totalSalary
      ? item.totalSalary.min >= salary.min && item.totalSalary.max <= salary.max
      : true;

  // Tag filter
  const tagFilter = (item: JobItem): boolean =>
    tag && item.tag ? item.tag === tag : true;

  // Sort filter
  const sortFilter = (a: JobItem, b: JobItem): number => {
    if (sort === "des") return b.id - a.id; // Newest first
    if (sort === "asc") return a.id - b.id; // Oldest first
    return 0; // Default
  };

  const filteredJobs = jobs
    .filter(keywordFilter)
    .filter(locationFilter)
    .filter(destinationFilter)
    .filter(categoryFilter)
    .filter(jobTypeFilter)
    .filter(datePostedFilter)
    .filter(experienceFilter)
    .filter(salaryFilter)
    .filter(tagFilter)
    .sort(sortFilter)
    .slice(perPage.start, perPage.end || 10);

  const content = filteredJobs.map((item) => (
    <div className="job-block" key={item.id}>
      <div className="inner-box">
        <div className="content">
          <span className="company-logo">
            <img src={item.logo} alt={item.company} />
          </span>
          <h4>
            <Link to={`/job-single-v1/${item.id}`}>{item.jobTitle}</Link>
          </h4>
          <ul className="job-info">
            <li>
              <span className="icon flaticon-briefcase"></span>
              {item.company}
            </li>
            {item.location && (
              <li>
                <span className="icon flaticon-map-locator"></span>
                {item.location}
              </li>
            )}
            {item.time && (
              <li>
                <span className="icon flaticon-clock-3"></span>
                {item.time}
              </li>
            )}
            {item.salary && (
              <li>
                <span className="icon flaticon-money"></span>
                {item.salary}
              </li>
            )}
          </ul>
          <ul className="job-other-info">
            {item.jobType?.map((val, i) => (
              <li key={i} className={val.styleClass}>
                {val.type}
              </li>
            ))}
          </ul>
          <button className="bookmark-btn">
            <span className="flaticon-bookmark"></span>
          </button>
        </div>
      </div>
    </div>
  ));

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addSort(e.target.value));
  };

  const perPageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageData = JSON.parse(e.target.value) as { start: number; end: number };
    dispatch(addPerPage(pageData));
  };

  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(clearJobType());
    dispatch(clearJobTypeToggle());
    dispatch(addDatePosted(""));
    dispatch(clearDatePostToggle());
    dispatch(clearExperience());
    dispatch(clearExperienceToggle());
    dispatch(addSalary({ min: 0, max: 20000 }));
    dispatch(addTag(""));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };

  return (
    <>
      <div className="ls-switcher">
        <div className="show-result">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters"
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>
          </div>
          <div className="text">
            Show <strong>{content.length}</strong> jobs
          </div>
        </div>
        <div className="sort-by">
          {(keyword ||
            location ||
            destination.min !== 0 ||
            destination.max !== 100 ||
            category ||
            jobType.length > 0 ||
            datePosted ||
            experience.length > 0 ||
            salary.min !== 0 ||
            salary.max !== 20000 ||
            tag ||
            sort ||
            perPage.start !== 0 ||
            perPage.end !== 0) && (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
            >
              Clear All
            </button>
          )}
          <select
            value={sort}
            className="chosen-single form-select"
            onChange={sortHandler}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>
          <select
            onChange={perPageHandler}
            className="chosen-single form-select ms-3"
            value={JSON.stringify(perPage)}
          >
            <option value={JSON.stringify({ start: 0, end: 0 })}>All</option>
            <option value={JSON.stringify({ start: 0, end: 10 })}>
              10 per page
            </option>
            <option value={JSON.stringify({ start: 0, end: 20 })}>
              20 per page
            </option>
            <option value={JSON.stringify({ start: 0, end: 30 })}>
              30 per page
            </option>
          </select>
        </div>
      </div>
      {content}
      <div className="ls-show-more">
        <p>Show 36 of {jobs.length} Jobs</p>
        <div className="bar">
          <span className="bar-inner" style={{ width: "40%" }}></span>
        </div>
        <button className="show-more">Show More</button>
      </div>
    </>
  );
};

export default FilterJobsBox;