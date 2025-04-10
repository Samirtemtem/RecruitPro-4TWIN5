// import Link from "next/link";
// import jobs from "../../../data/job-featured";
// import Pagination from "../components/Pagination";

// const FilterJobBox = () => {
//     return (
//         <>
//             <div className="ls-switcher">
//                 <div className="showing-result">
//                     <div className="top-filters">
//                         <div className="form-group">
//                             <select className="chosen-single form-select">
//                                 <option>Job Type</option>
//                                 <option>New Jobs</option>
//                                 <option>Freelance</option>
//                                 <option>Full Time</option>
//                                 <option>Internship</option>
//                                 <option>Part Time</option>
//                                 <option>Temporary</option>
//                             </select>
//                         </div>
//                         {/* End job type filter */}

//                         <div className="form-group">
//                             <select className="chosen-single form-select">
//                                 <option>Date Posted</option>
//                                 <option>New Jobs</option>
//                                 <option>Freelance</option>
//                                 <option>Full Time</option>
//                                 <option>Internship</option>
//                                 <option>Part Time</option>
//                                 <option>Temporary</option>
//                             </select>
//                         </div>
//                         {/* End date posted filter */}

//                         <div className="form-group">
//                             <select className="chosen-single form-select">
//                                 <option>Experience Level</option>
//                                 <option>New Jobs</option>
//                                 <option>Freelance</option>
//                                 <option>Full Time</option>
//                                 <option>Internship</option>
//                                 <option>Part Time</option>
//                                 <option>Temporary</option>
//                             </select>
//                         </div>
//                         {/* End ecperience level filter */}

//                         <div className="form-group">
//                             <select className="chosen-single form-select">
//                                 <option>Salary estimate</option>
//                                 <option>New Jobs</option>
//                                 <option>Freelance</option>
//                                 <option>Full Time</option>
//                                 <option>Internship</option>
//                                 <option>Part Time</option>
//                                 <option>Temporary</option>
//                             </select>
//                         </div>
//                         {/* End salary estimate filter */}
//                     </div>
//                 </div>
//                 {/* End .showing-result */}

//                 <div className="sort-by">
//                     <select className="chosen-single form-select">
//                         <option>New Jobs</option>
//                         <option>Freelance</option>
//                         <option>Full Time</option>
//                         <option>Internship</option>
//                         <option>Part Time</option>
//                         <option>Temporary</option>
//                     </select>

//                     <select className="chosen-single form-select">
//                         <option>Show 10</option>
//                         <option>Show 20</option>
//                         <option>Show 30</option>
//                         <option>Show 40</option>
//                         <option>Show 50</option>
//                         <option>Show 60</option>
//                     </select>
//                 </div>
//                 {/* End sort by filter */}
//             </div>
//             {/* <!-- ls Switcher --> */}

//             <div className="row">
//                 {jobs.slice(20, 32).map((item) => (
//                     <div
//                         className="job-block-four col-xl-3 col-lg-4 col-md-6 col-sm-12"
//                         key={item.id}
//                     >
//                         <div className="inner-box">
//                             <ul className="job-other-info">
//                                 {item.jobType.map((val, i) => (
//                                     <li key={i} className={`${val.styleClass}`}>
//                                         {val.type}
//                                     </li>
//                                 ))}
//                             </ul>
//                             <span className="company-logo">
//                                 <img src={item.logo} alt="featured job" />
//                             </span>
//                             <span className="company-name">{item.company}</span>
//                             <h4>
//                                 <Link href={`/job-single-v3/${item.id}`}>
//                                     {item.jobTitle}
//                                 </Link>
//                             </h4>
//                             <div className="location">
//                                 <span className="icon flaticon-map-locator"></span>
//                                 {item.location}
//                             </div>
//                         </div>
//                     </div>
//                     // End all jobs
//                 ))}
//             </div>
//             {/* End .row */}

//             <Pagination />
//             {/* <!-- End Pagination --> */}
//         </>
//     );
// };

// export default FilterJobBox;

import Link from "next/link";
import jobs from "../../../data/job-featured";
import Pagination from "../components/Pagination";
import JobSelect from "../components/JobSelect";
import { useDispatch, useSelector } from "react-redux";
import {
    addCategory,
    addDatePosted,
    addExperienceSelect,
    addJobTypeSelect,
    addKeyword,
    addLocation,
    addPerPage,
    addSalary,
    addSort,
} from "../../../features/filter/filterSlice";

const FilterJobBox = () => {
    const { jobList, jobSort } = useSelector((state) => state.filter);
    const {
        keyword,
        location,
        destination,
        category,
        datePosted,
        jobTypeSelect,
        experienceSelect,
        salary,
    } = jobList || {};

    const { sort, perPage } = jobSort;

    const dispatch = useDispatch();

    // keyword filter on title
    const keywordFilter = (item) =>
        keyword !== ""
            ? item.jobTitle
                  .toLocaleLowerCase()
                  .includes(keyword.toLocaleLowerCase())
            : item;

    // location filter
    const locationFilter = (item) =>
        location !== ""
            ? item?.location
                  ?.toLocaleLowerCase()
                  .includes(location?.toLocaleLowerCase())
            : item;

    // location filter
    const destinationFilter = (item) =>
        item?.destination?.min >= destination?.min &&
        item?.destination?.max <= destination?.max;

    // category filter
    const categoryFilter = (item) =>
        category !== ""
            ? item?.category?.toLocaleLowerCase() ===
              category?.toLocaleLowerCase()
            : item;

    // job-type filter
    const jobTypeFilter = (item) =>
        item.jobType !== undefined && jobTypeSelect !== ""
            ? item?.jobType[0]?.type
                  .toLocaleLowerCase()
                  .split(" ")
                  .join("-") === jobTypeSelect && item
            : item;

    // date-posted filter
    const datePostedFilter = (item) =>
        datePosted !== "all" && datePosted !== ""
            ? item?.created_at
                  ?.toLocaleLowerCase()
                  .split(" ")
                  .join("-")
                  .includes(datePosted)
            : item;

    // experience level filter
    const experienceFilter = (item) =>
        experienceSelect !== ""
            ? item?.experience?.split(" ").join("-").toLocaleLowerCase() ===
                  experienceSelect && item
            : item;

    // salary filter
    const salaryFilter = (item) =>
        item?.totalSalary?.min >= salary?.min &&
        item?.totalSalary?.max <= salary?.max;

    // sort filter
    const sortFilter = (a, b) =>
        sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

    let content = jobs
        ?.slice(
            perPage.start === 0 ? 20 : 0,
            perPage.end !== 0 ? perPage.end : 32
        )
        ?.filter(keywordFilter)
        ?.filter(locationFilter)
        ?.filter(destinationFilter)
        ?.filter(categoryFilter)
        ?.filter(jobTypeFilter)
        ?.filter(datePostedFilter)
        ?.filter(experienceFilter)
        ?.filter(salaryFilter)
        ?.sort(sortFilter)
        ?.map((item) => (
            <div
                className="job-block-four col-xl-3 col-lg-4 col-md-6 col-sm-12"
                key={item.id}
            >
                <div className="inner-box">
                    <ul className="job-other-info">
                        {item?.jobType?.map((val, i) => (
                            <li key={i} className={`${val.styleClass}`}>
                                {val.type}
                            </li>
                        ))}
                    </ul>
                    <span className="company-logo">
                        <img src={item.logo} alt="featured job" />
                    </span>
                    <span className="company-name">{item.company}</span>
                    <h4>
                        <Link href={`/job-single-v3/${item.id}`}>
                            {item.jobTitle}
                        </Link>
                    </h4>
                    <div className="location">
                        <span className="icon flaticon-map-locator"></span>
                        {item.location}
                    </div>
                </div>
            </div>
            // End all jobs
        ));

    // sort handler
    const sortHandler = (e) => {
        dispatch(addSort(e.target.value));
    };

    // per page handler
    const perPageHandler = (e) => {
        const pageData = JSON.parse(e.target.value);
        dispatch(addPerPage(pageData));
    };

    // clear all filters
    const clearAll = () => {
        dispatch(addKeyword(""));
        dispatch(addLocation(""));
        dispatch(addCategory(""));
        dispatch(addJobTypeSelect(""));
        dispatch(addDatePosted(""));
        dispatch(addExperienceSelect(""));
        dispatch(addSalary({ min: 0, max: 20000 }));
        dispatch(addSort(""));
        dispatch(addPerPage({ start: 0, end: 0 }));
    };

    return (
        <>
            <div className="ls-switcher">
                <JobSelect />
                {/* End .showing-result */}

                <div className="sort-by">
                    {keyword !== "" ||
                    location !== "" ||
                    category !== "" ||
                    jobTypeSelect !== "" ||
                    datePosted !== "" ||
                    experienceSelect !== "" ||
                    salary?.min !== 0 ||
                    salary?.max !== 20000 ||
                    sort !== "" ||
                    perPage.start !== 0 ||
                    perPage.end !== 0 ? (
                        <button
                            onClick={clearAll}
                            className="btn btn-danger text-nowrap me-2"
                            style={{ minHeight: "45px", marginBottom: "15px" }}
                        >
                            Clear All
                        </button>
                    ) : undefined}

                    <select
                        value={sort}
                        className="chosen-single form-select"
                        onChange={sortHandler}
                    >
                        <option value="">Sort by (default)</option>
                        <option value="asc">Newest</option>
                        <option value="des">Oldest</option>
                    </select>
                    {/* End select */}

                    <select
                        onChange={perPageHandler}
                        className="chosen-single form-select ms-3 "
                        value={JSON.stringify(perPage)}
                    >
                        <option
                            value={JSON.stringify({
                                start: 0,
                                end: 0,
                            })}
                        >
                            All
                        </option>
                        <option
                            value={JSON.stringify({
                                start: 32,
                                end: 35,
                            })}
                        >
                            35 per page
                        </option>
                        <option
                            value={JSON.stringify({
                                start: 35,
                                end: 40,
                            })}
                        >
                            40 per page
                        </option>
                    </select>
                    {/* End select */}
                </div>
                {/* End sort by filter */}
            </div>
            {/* <!-- ls Switcher --> */}

            <div className="row">{content}</div>
            {/* End .row with jobs */}

            <Pagination />
            {/* <!-- End Pagination --> */}
        </>
    );
};

export default FilterJobBox;
