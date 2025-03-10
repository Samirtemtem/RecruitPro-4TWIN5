import { useDispatch, useSelector } from "react-redux";
import { addTag } from "../utils/filterSlice";

// Define the shape of a tag
interface TagItem {
  id: string | number;
  name: string;
  value: string;
}

// Define the shape of your Redux state
interface JobState {
  tags: TagItem[];
}

interface FilterState {
  jobList: {
    tag: string;
    // Include other properties from previous components
    keyword: string;
    location: string;
    salary: { min: number; max: number };
  };
}

interface RootState {
  job: JobState;
  filter: FilterState;
}

const Tag = () => {
  const { tags } = useSelector((state: RootState) => state.job);
  const { jobList } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  // Tag handler with typed value
  const tagHandler = (value: string) => {
    dispatch(addTag(value));
  };

  return (
    <ul className="tags-style-one">
      {tags?.map((item) => (
        <li
          className={item.value === jobList.tag ? "active" : ""}
          onClick={() => tagHandler(item.value)}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Tag;