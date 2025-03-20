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

type FilterState = typeof filterInitialState;

interface RootState {
  filter: FilterState;
}

const SearchBox = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const jobList = filterState?.jobList || filterInitialState.jobList; // Fallback to initial state
  const [keyword, setKeyword] = useState(jobList.keyword);
  const dispatch = useDispatch();

  const keywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    dispatch(addKeyword(value)); // Update the keyword in the Redux store
  };

  useEffect(() => {
    setKeyword(jobList.keyword || "");
  }, [jobList]);

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