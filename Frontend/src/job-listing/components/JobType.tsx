import { useDispatch, useSelector } from "react-redux";
import { addJobType } from "../utils/filterSlice"; // Updated path
import { jobTypeCheck } from "../utils/jobSlice"; // Assuming path

// Define the job state shape for useSelector
interface JobState {
  jobTypeList?: Array<{
    id: string | number; // Adjust based on jobSlice.js
    value: string;
    name: string;
    isChecked?: boolean;
  }>;
}

// Define the filter state (partial, for addJobType)
interface FilterState {
  jobList: {
    jobType: string[];
    // Other fields could be added if needed
  };
}

const JobType = () => {
  const { jobTypeList } = useSelector((state: { job: JobState; filter: FilterState }) => state.job) || {
    jobTypeList: [],
  };
  const dispatch = useDispatch();

  // Type the event and id parameters
  const jobTypeHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => {
    dispatch(addJobType(e.target.value));
    dispatch(jobTypeCheck(id));
  };

  return (
    <ul className="switchbox">
      {jobTypeList?.map((item) => (
        <li key={item.id}>
          <label className="switch">
            <input
              type="checkbox"
              value={item.value}
              checked={item.isChecked || false}
              onChange={(e) => jobTypeHandler(e, item.id)}
            />
            <span className="slider round"></span>
            <span className="title">{item.name}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default JobType;