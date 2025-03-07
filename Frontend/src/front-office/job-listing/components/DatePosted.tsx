import { useDispatch, useSelector } from "react-redux";
import { addDatePosted } from "../utils/filterSlice";
import { datePostCheck } from "../utils/jobSlice";

// Define the expected shape of the job state
interface JobState {
  datePost?: Array<{
    id: string | number; // Assuming id could be string or number
    value: string;
    name: string;
    isChecked: boolean;
  }>;
}

// Define the filter state (partial, since we only use addDatePosted)
interface FilterState {
  jobList: {
    datePosted: string;
    // Other fields from filterSlice.js could be added if needed
  };
}

const DatePosted = () => {
  // Type state for useSelector
  const { datePost } = useSelector((state: { job: JobState; filter: FilterState }) => state.job) || {};
  const dispatch = useDispatch();

  // Type the event parameter and id
  const datePostHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => {
    dispatch(addDatePosted(e.target.value));
    dispatch(datePostCheck(id));
  };

  return (
    <ul className="ui-checkbox">
      {datePost?.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="radio"
              value={item.value}
              onChange={(e) => datePostHandler(e, item.id)}
              checked={item.isChecked}
            />
            <span></span>
            <p>{item.name}</p>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default DatePosted;