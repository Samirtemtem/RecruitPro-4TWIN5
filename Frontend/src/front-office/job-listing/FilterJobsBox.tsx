import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

// JobItem interface
interface JobItem {
  _id: number;
  title: string;
  description: string;
  location?: string; 
  time?: string; 
  salary?: string; 
  logo: string;
  link?: string;
  jobType?: { type: string; styleClass: string }[];
  requirements?: string[];
  department?: string; 
  destination?: { min: number; max: number };
  publishDate?: string; 
  experience?: string;
  totalSalary?: { min: number; max: number };
  tag?: string;
}

// FilterState interface
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

// RootState interface
interface RootState {
  filter: FilterState;
}

const FilterJobsBox = () => {
  const backgroundColors = ['#1967d2', '#f9ab00', '#34a853', '#F1C40F', '#8E44AD'];
  const defaultImage = 'LogoEsprit2.png'; 
  const [jobs, setJobs] = useState<JobItem[]>([]);
  
  const { jobList, jobSort } = useSelector((state: RootState) => state.filter);
  const { keyword, location, destination, category, jobType, datePosted, experience, salary, tag } = jobList;
  const { sort, perPage } = jobSort;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs/latest");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };

    fetchJobs();
  }, []);

  // Filter functions
  const filters = {
    keywordFilter: (item: JobItem) => keyword ? item.title.toLowerCase().includes(keyword.toLowerCase()) : true,
    locationFilter: (item: JobItem) => location && item.location ? item.location.toLowerCase().includes(location.toLowerCase()) : true,
    destinationFilter: (item: JobItem) => item.destination ? item.destination.min >= destination.min && item.destination.max <= destination.max : true,
    categoryFilter: (item: JobItem) => category ? item.department && item.department.toLowerCase() === category.toLowerCase() : true,
    jobTypeFilter: (item: JobItem) => jobType.length > 0 && item.jobType && item.jobType.length > 0
      ? jobType.includes(item.jobType[0].type.toLowerCase().replace(/\s+/g, "-"))
      : true,
    datePostedFilter: (item: JobItem) => {
      if (datePosted && datePosted !== "all" && item.publishDate) {
        const publishDate = new Date(item.publishDate);
        const now = new Date();
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        
        if (datePosted === "last-30-days") {
          return publishDate >= thirtyDaysAgo; // Check if publishDate is within the last 30 days
        }
      }
      return true; // If no date filter is applied, include all items
    },
    experienceFilter: (item: JobItem) => experience.length > 0 && item.experience
      ? experience.includes(item.experience.toLowerCase().replace(/\s+/g, "-"))
      : true,
    salaryFilter: (item: JobItem) => item.totalSalary ? item.totalSalary.min >= salary.min && item.totalSalary.max <= salary.max : true,
    tagFilter: (item: JobItem) => tag && item.tag ? item.tag === tag : true,
  };

  const sortFilter = (a: JobItem, b: JobItem) => {
    if (sort === "des") return b._id - a._id; // Newest first
    if (sort === "asc") return a._id - b._id; // Oldest first
    return 0; // Default
  };

  const filteredJobs = jobs
    .filter(filters.keywordFilter)
    .filter(filters.locationFilter)
    .filter(filters.destinationFilter)
    .filter(filters.categoryFilter)
    .filter(filters.jobTypeFilter)
    .filter(filters.datePostedFilter)
    .filter(filters.experienceFilter)
    .filter(filters.salaryFilter)
    .filter(filters.tagFilter)
    .sort(sortFilter)
    .slice(perPage.start, perPage.end || jobs.length); 

  // Debugging logs
  console.log("Filtered Jobs:", filteredJobs);
  console.log("Current Filters:", {
    keyword,
    location,
    destination,
    category,
    jobType,
    datePosted,
    experience,
    salary,
    tag,
  });

  const formatDate = (dateString?: string | number | Date) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date";
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const content = filteredJobs.map((item) => (
    <div className="job-block" key={item._id} style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <div className="inner-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="description-logo" style={{ flex: '0 0 auto' }}>
          <img src={item.logo || defaultImage} alt="Company logo" style={{ maxWidth: '120px' }} />
        </span>
        <div className="content" style={{ flex: '1 1 auto', marginLeft: '15px' }}>
          <h4>
            <Link to={`/job-single-v1/${item._id}`}>{item.title}</Link>
          </h4>
          <ul className="job-info">
            <li>
              <span className="icon flaticon-briefcase"></span>
              {item.department}
            </li>
            <li>
              <span className="icon flaticon-clock-3"></span>
              <span style={{ textTransform: 'uppercase' }}>
                {formatDate(item.publishDate)}
              </span>
            </li>
            <li>
              <span className="icon flaticon-briefcase"></span>
              EXPERIENCE: {item.experience}
            </li>
          </ul>
          <ul className="job-other-info">
            {item.requirements?.map((requirement, i) => (
              <li key={i} style={{
                backgroundColor: backgroundColors[i % backgroundColors.length],
                padding: '8px',
                margin: '5px 10px 5px 0',
                borderRadius: '4px',
                display: 'inline-block',
                color: 'white',
              }}>
                {requirement}
              </li>
            ))}
          </ul>
          <Link to={`/job-single-v1/${item._id}`} className="bookmark-btn" style={{ textDecoration: 'none' }}>
            <img src="/images/icons/send-svgrepo-com.svg" alt="Send Arrow" style={{ width: '16px', height: '16px' }} />
          </Link>
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
          <select value={sort} className="chosen-single form-select" onChange={sortHandler}>
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>
          <select onChange={perPageHandler} className="chosen-single form-select ms-3" value={JSON.stringify(perPage)}>
            <option value={JSON.stringify({ start: 0, end: 0 })}>All</option>
            <option value={JSON.stringify({ start: 0, end: 10 })}>10 per page</option>
            <option value={JSON.stringify({ start: 0, end: 20 })}>20 per page</option>
            <option value={JSON.stringify({ start: 0, end: 30 })}>30 per page</option>
          </select>
        </div>
      </div>
      {content}
      <div className="ls-show-more">
        <p>Show {filteredJobs.length} of {jobs.length} Jobs</p>
        <div className="bar">
          <span
            className="bar-inner"
            style={{ width: jobs.length > 0 ? `${(filteredJobs.length / jobs.length) * 100}%` : "0%" }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default FilterJobsBox;