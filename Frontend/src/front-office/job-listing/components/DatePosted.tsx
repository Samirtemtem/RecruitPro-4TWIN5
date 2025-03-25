import { useDispatch, useSelector } from "react-redux";
import { addDatePosted } from "../utils/filterSlice";
import { datePostCheck } from "../utils/jobSlice";

// Define the expected shape of the job state
interface JobState {
  datePost?: Array<{
    id: string | number;
    value: string;
    name: string;
    isChecked: boolean;
  }>;
}

// Define the filter state
interface FilterState {
  jobList: {
    datePosted: string;
  };
}

const DatePosted = () => {
  // Select the datePost from the Redux store
  const { datePost } = useSelector((state: { job: JobState; filter: FilterState }) => state.job) || {};
  const dispatch = useDispatch();

  // Handler for changing the date posted
  const datePostHandler = (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => {
    // Dispatch the selected date value
    dispatch(addDatePosted(e.target.value));
    // Dispatch the id to mark the radio button as checked
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