import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../utils/filterSlice";

// Define the expected shape of the filter state
interface FilterState {
  jobList: {
    category: string;
    // Add other fields from filterSlice.js if needed later
    keyword?: string;
    location?: string;
    destination?: { min: number; max: number };
    jobType?: string[];
    jobTypeSelect?: string;
    datePosted?: string;
    experience?: string[];
    experienceSelect?: string;
    salary?: { min: number; max: number };
    tag?: string;
  };
  jobSort?: {
    sort: string;
    perPage: { start: number; end: number };
  };
}

const Categories = () => {
  // Type state with FilterState
  const { jobList } = useSelector((state: { filter: FilterState }) => state.filter) || { jobList: { category: "" } };
  const [getCategory, setCategory] = useState(jobList?.category || "");

  const dispatch = useDispatch();

  // Type the event parameter as React.ChangeEvent<HTMLSelectElement>
  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addCategory(e.target.value));
  };

  useEffect(() => {
    setCategory(jobList?.category || "");
  }, [jobList]);

  return (
    <>
      <select
        className="form-select"
        value={getCategory}
        onChange={categoryHandler}
      >
        <option value="">Choose a category</option>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="industrial">Industrial</option>
        <option value="apartments">Apartments</option>
      </select>
      <span className="icon flaticon-briefcase"></span>
    </>
  );
};

export default Categories;