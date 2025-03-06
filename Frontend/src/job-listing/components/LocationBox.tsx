import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../utils/filterSlice";

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
  filter: FilterState | undefined;
  job: any; // Adjust later
}

const LocationBox = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const jobList = filterState?.jobList || filterInitialState.jobList;
  const [location, setLocation] = useState(jobList.location);
  const dispatch = useDispatch();

  const locationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addLocation(e.target.value));
    setLocation(e.target.value);
  };

  useEffect(() => {
    setLocation(jobList.location || "");
  }, [jobList]);

  return (
    <>
      <input
        type="text"
        name="listing-search"
        placeholder="City or postcode"
        value={location}
        onChange={locationHandler}
      />
      <span className="icon flaticon-map-locator"></span>
    </>
  );
};

export default LocationBox;