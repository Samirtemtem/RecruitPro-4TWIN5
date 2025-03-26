import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../utils/filterSlice"; // Adjust path if needed
import { useLocation } from "react-router-dom"; // Import useLocation

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

type FilterState = typeof filterInitialState;

interface RootState {
  filter: FilterState;
}

const SearchBox = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const jobList = filterState?.jobList || filterInitialState.jobList; // Fallback to initial state
  const [keyword, setKeyword] = useState(jobList.keyword);
  const dispatch = useDispatch();
  const location = useLocation(); // Get location for URL search

  const keywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Keyword input changed:", value); // Log the new keyword
    setKeyword(value);
    dispatch(addKeyword(value)); // Update the keyword in the Redux store
  };

  useEffect(() => {
    // Synchronize the input with the Redux state
    setKeyword(jobList.keyword || "");
  }, [jobList]);

  useEffect(() => {
    // Update the input from the URL search query
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get("search") || "";
    console.log("Search term from URL:", searchTerm); // Log the search term from the URL
    setKeyword(searchTerm);
    dispatch(addKeyword(searchTerm)); // Update the Redux store with the URL search term
  }, [location.search, dispatch]);

  return (
    <div className="search-box">
      <input
        type="text"
        name="listing-search"
        placeholder="Job title"
        value={keyword}
        onChange={keywordHandler}
      />
      <span className="icon flaticon-search-3"></span>
    </div>
  );
};

export default SearchBox;