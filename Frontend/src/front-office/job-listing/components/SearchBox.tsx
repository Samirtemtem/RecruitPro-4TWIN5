import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../utils/filterSlice"; // Adjust path if needed

// Define the shape of filter state
const filterInitialState = {
  jobList: {
    keyword: "",
    location: "",
    destination: { min: 0, max: 100 },
    category: "",
    jobType: [],
    jobTypeSelect: "",
    datePosted: "",
    experience: [],
    experienceSelect: "",
    salary: { min: 0, max: 20000 },
    tag: "",
  },
  jobSort: { sort: "", perPage: { start: 0, end: 0 } },
};

const jobInitialState = {
  latestJob: ["full-time"],
  category: [
    { id: 1, name: "Residential", value: "residential" },
    { id: 2, name: "Commercial", value: "commercial" },
    { id: 3, name: "Industrial", value: "industrial" },
    { id: 4, name: "Apartments", value: "apartments" },
  ],
  jobTypeList: [
    { id: 1, name: "Freelancer", value: "freelancer", isChecked: false },
    { id: 2, name: "Full Time", value: "full-time", isChecked: false },
    { id: 3, name: "Part Time", value: "part-time", isChecked: false },
    { id: 4, name: "Temporary", value: "temporary", isChecked: false },
  ],
  datePost: [
    { id: 1, name: "All", value: "all", isChecked: false },
    { id: 2, name: "Last Hour", value: "last-hour", isChecked: false },
    { id: 3, name: "Last 24 Hour", value: "last-24-hour", isChecked: false },
    { id: 4, name: "Last 7 Days", value: "last-7-days", isChecked: false },
    { id: 5, name: "Last 14 Days", value: "last-14-days", isChecked: false },
    { id: 6, name: "Last 30 Days", value: "last-30-days", isChecked: false },
  ],
  experienceLavel: [
    { id: 1, name: "Fresh", value: "fresh", isChecked: false },
    { id: 2, name: "1 Year", value: "1-year", isChecked: false },
    { id: 3, name: "2 Year", value: "2-year", isChecked: false },
    { id: 4, name: "3 Year", value: "3-year", isChecked: false },
    { id: 5, name: "4 Year", value: "4-year", isChecked: false },
  ],
  tags: [
    { id: 1, name: "App", value: "app" },
    { id: 2, name: "Administrative", value: "administrative" },
    { id: 3, name: "Android", value: "android" },
    { id: 4, name: "Wordpress", value: "wordpress" },
    { id: 5, name: "Design", value: "design" },
    { id: 6, name: "React", value: "react" },
  ],
};

// Infer types from initial states
type FilterState = typeof filterInitialState;
type JobState = typeof jobInitialState;

interface RootState {
  filter: FilterState;
  job: JobState;
}

const SearchBox = () => {
  const filterState = useSelector((state: RootState) => {
    console.log("Redux State:", state); // Debug log
    return state.filter;
  });
  const jobList = filterState?.jobList || filterInitialState.jobList; // Fallback to initial state
  const [keyword, setKeyword] = useState(jobList.keyword);
  const dispatch = useDispatch();

  const keywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addKeyword(e.target.value));
    setKeyword(e.target.value);
  };

  useEffect(() => {
    setKeyword(jobList.keyword || "");
  }, [jobList]);

  return (
    <>
      <input
        type="text"
        name="listing-search"
        placeholder="Job title, keywords, or company"
        value={keyword}
        onChange={keywordHandler}
      />
      <span className="icon flaticon-search-3"></span>
    </>
  );
};

export default SearchBox;