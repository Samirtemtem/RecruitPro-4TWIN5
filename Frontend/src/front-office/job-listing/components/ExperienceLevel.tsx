import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../utils/filterSlice"; // Updated path
import { experienceLavelCheck } from "../utils/jobSlice"; // Assuming path

// Define the expected shape of the job state
interface JobState {
  experienceLavel?: Array<{
    id: string | number; // Adjust based on actual type in jobSlice.js
    value: string;
    name: string;
    isChecked: boolean;
  }>;
}

// Define the filter state (partial, for addExperience)
interface FilterState {
  jobList: {
    experience: string[];
    // Other fields could be added if needed
  };
}

const ExperienceLevel = () => {
  const { experienceLavel } = useSelector((state: { job: JobState; filter: FilterState }) => state.job) || {
    experienceLavel: [],
  };
  const dispatch = useDispatch();

  // Type the event and id parameters
  const experienceHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => {
    dispatch(addExperience(e.target.value));
    dispatch(experienceLavelCheck(id));
  };

  return (
    <ul className="switchbox">
      {experienceLavel?.map((item) => (
        <li key={item.id}>
          <label className="switch">
            <input
              type="checkbox"
              checked={item.isChecked}
              value={item.value}
              onChange={(e) => experienceHandler(e, item.id)}
            />
            <span className="slider round"></span>
            <span className="title">{item.name}</span>
          </label>
        </li>
      ))}
      <li>
        <button className="view-more">
          <span className="icon flaticon-plus"></span> View More
        </button>
      </li>
    </ul>
  );
};

export default ExperienceLevel;