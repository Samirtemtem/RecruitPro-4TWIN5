import { useDispatch, useSelector } from "react-redux";
import {
  addDatePosted,
  addExperienceSelect,
  addJobTypeSelect,
  addSalary,
} from "../utils/filterSlice"; // Updated path
import "../utils/jobSlice"; // Assuming jobSlice.js is here, though not directly imported

// Define the filter state shape for useSelector
interface FilterState {
  jobList: {
    jobTypeSelect: string;
    datePosted: string;
    experienceSelect: string;
    salary: { min: number; max: number };
    // Other fields could be added if needed
  };
}

// Define the job state shape for useSelector
interface JobState {
  jobTypeList?: Array<{ id: string | number; value: string; name: string }>;
  datePost?: Array<{ id: string | number; value: string; name: string }>;
  experienceLavel?: Array<{ id: string | number; value: string; name: string }>;
}

const JobSelect = () => {
  const { jobList } = useSelector((state: { filter: FilterState; job: JobState }) => state.filter) || {
    jobList: { jobTypeSelect: "", datePosted: "", experienceSelect: "", salary: { min: 0, max: 20000 } },
  };
  const { jobTypeList, datePost, experienceLavel } = useSelector(
    (state: { filter: FilterState; job: JobState }) => state.job
  ) || { jobTypeList: [], datePost: [], experienceLavel: [] };

  const dispatch = useDispatch();

  // Type event handlers
  const jobTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addJobTypeSelect(e.target.value));
  };

  const datePostHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addDatePosted(e.target.value));
  };

  const experienceHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addExperienceSelect(e.target.value));
  };

  const salaryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = JSON.parse(e.target.value);
    dispatch(addSalary(data));
  };

  return (
    <>
      <div className="showing-result">
        <div className="top-filters">
          <div className="form-group">
            <select
              onChange={jobTypeHandler}
              className="chosen-single form-select"
              value={jobList?.jobTypeSelect || ""}
            >
              <option value="">Job Type</option>
              {jobTypeList?.map((item) => (
                <option value={item.value} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* End job type filter */}

          <div className="form-group">
            <select
              onChange={datePostHandler}
              className="chosen-single form-select"
              value={jobList?.datePosted || ""}
            >
              {datePost?.map((item) => (
                <option value={item.value} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* End date posted filter */}

          <div className="form-group">
            <select
              onChange={experienceHandler}
              className="chosen-single form-select"
              value={jobList?.experienceSelect || ""}
            >
              <option value="">Experience Level</option>
              {experienceLavel?.map((item) => (
                <option value={item.value} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* End experience level filter */}

          <div className="form-group">
            <select
              onChange={salaryHandler}
              className="chosen-single form-select"
              value={JSON.stringify(jobList.salary)}
            >
              <option value={JSON.stringify({ min: 0, max: 20000 })}>
                Salary estimate
              </option>
              <option value={JSON.stringify({ min: 0, max: 5000 })}>
                0 - 5000
              </option>
              <option value={JSON.stringify({ min: 5000, max: 10000 })}>
                5000 - 10000
              </option>
              <option value={JSON.stringify({ min: 10000, max: 15000 })}>
                10000 - 15000
              </option>
              <option value={JSON.stringify({ min: 15000, max: 20000 })}>
                15000 - 20000
              </option>
            </select>
          </div>
          {/* End salary estimate filter */}
        </div>
      </div>
    </>
  );
};

export default JobSelect;