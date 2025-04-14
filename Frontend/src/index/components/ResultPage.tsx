import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom"; // Ensure useLocation is imported
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
} from "../utils/filterSlice";
import {
  clearDatePostToggle,
  clearExperienceToggle,
  clearJobTypeToggle,
} from "../utils/jobSlice";
import axios from "axios";

// JobItem interface
interface JobItem {
  _id: string; // MongoDB ObjectId
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
  experience?: number;
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
    experience: number[];
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

const ResultsPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("search") || ""; // Get search term from URL
  const backgroundColors = ['#1967d2', '#f9ab00', '#34a853', '#F1C40F', '#8E44AD'];
  const defaultImage = 'LogoEsprit2.png';
  const [jobs, setJobs] = useState<JobItem[]>([]);

  const { jobList, jobSort } = useSelector((state: RootState) => state.filter);
  const { keyword, location, destination, category, jobType, datePosted, experience, salary, tag } = jobList;
  const { sort = "des", perPage } = jobSort;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      if (!searchTerm) return; // Don't fetch if no search term
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/search?search=${searchTerm}`);
        if (response.status === 200) {
          setJobs(response.data);
        } else {
          throw new Error("Failed to fetch jobs");
        }
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    };

    fetchJobs();
  }, [searchTerm]); // Depend on searchTerm to fetch jobs whenever it changes

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
        switch (datePosted) {
          case "last-hour":
            return publishDate >= new Date(now.getTime() - 60 * 60 * 1000);
          case "last-7-days":
            return publishDate >= new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          case "last-14-days":
            return publishDate >= new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
          case "last-30-days":
            return publishDate >= new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          default:
            return true;
        }
      }
      return true;
    },
    experienceFilter: (item: JobItem) => experience.length > 0 && item.experience != null ? experience.includes(item.experience) : true,
    salaryFilter: (item: JobItem) => item.totalSalary ? item.totalSalary.min >= salary.min && item.totalSalary.max <= salary.max : true,
    tagFilter: (item: JobItem) => tag && item.tag ? item.tag === tag : true,
  };

  const sortFilter = (a: JobItem, b: JobItem) => {
    const dateA = new Date(a.publishDate || 0).getTime();
    const dateB = new Date(b.publishDate || 0).getTime();
    return sort === "des" ? dateB - dateA : dateA - dateB; // Newest or oldest first
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

  const formatDate = (dateString?: string | number | Date) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
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

  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(clearJobType());
    dispatch(clearJobTypeToggle());
    dispatch(addDatePosted("all")); // Reset to "all" by default
    dispatch(clearDatePostToggle());
    dispatch(clearExperience());
    dispatch(clearExperienceToggle());
    dispatch(addSalary({ min: 0, max: 20000 }));
    dispatch(addTag(""));
    dispatch(addSort("des")); // Default to "Newest"
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
            <option value="">Sort by</option>
            <option value="asc">Oldest</option>
            <option value="des">Newest</option>
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

export default ResultsPage;