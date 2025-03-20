import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../utils/filterSlice"; // Renamed from addDepartment

// Define the expected shape of the filter state
interface FilterState {
  jobList: {
    department: string; // Change category to department
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
}

const Categories = () => {
  const { jobList } = useSelector((state: { filter: FilterState }) => state.filter);
  const [selectedDepartment, setSelectedDepartment] = useState(jobList.department || "");

  const dispatch = useDispatch();

  const departmentHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedDepartment(selectedValue); // Update local state
    dispatch(addCategory(selectedValue)); // Dispatch the selected department
    console.log("Selected department:", selectedValue); // Debug log
  };

  useEffect(() => {
    if (jobList.department) {
      setSelectedDepartment(jobList.department);
    } else {
      setSelectedDepartment(""); // Reset if no department
    }
  }, [jobList.department]);

  return (
    <>
      <select
        className="form-select"
        value={selectedDepartment}
        onChange={departmentHandler}
      >
        <option value="">Choose a department</option>
        <option value="TIC">TIC</option>
        <option value="ELECTROMECANIQUE">ELECTROMECANIQUE</option>
        <option value="GENIE-CIVIL">GENIE-CIVIL</option>
      </select>
      <span className="icon flaticon-briefcase"></span>
    </>
  );
};

export default Categories;