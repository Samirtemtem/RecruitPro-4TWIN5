import { useEffect, useState } from "react";
//import Slider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import { addSalary } from "../utils/filterSlice";

// Define the shape of your Redux state
interface FilterState {
  jobList: {
    salary: {
      min: number;
      max: number;
    };
  };
}

interface RootState {
  filter: FilterState;
}

const SalaryRangeSlider = () => {
  const { jobList } = useSelector((state: RootState) => state.filter);
  const [salary, setSalary] = useState({
    min: jobList.salary.min || 0, // Default to 0 if undefined
    max: jobList.salary.max || 20000, // Default to max if undefined
  });

  const dispatch = useDispatch();

  const handleOnChange = (values: number[]) => {
    const [min, max] = values;
    setSalary({ min, max }); // Update local state
    dispatch(addSalary({ min, max })); // Dispatch to Redux
  };

  useEffect(() => {
    setSalary({
      min: jobList.salary.min || 0,
      max: jobList.salary.max || 20000,
    });
  }, [jobList]); // Removed setSalary from deps (stable function)



  return (
    <div className="range-slider-one salary-range">
      

      
      <div className="input-outer">
        <div className="amount-outer">
          <span className="d-inline-flex align-items-center">
            <span className="min">${salary.min}</span>
            <span className="max ms-2">${salary.max}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
/*
  return (
    <div className="range-slider-one salary-range">
      <Slider
        min={0}
        max={20000}
        value={[salary.min, salary.max]} // Array for min/max
        onChange={handleOnChange}
        pearling // Allows handles to overlap
        minDistance={100} // Optional: Minimum distance between handles
        className="horizontal-slider" // Custom styling
        thumbClassName="thumb" // Custom thumb styling
        trackClassName="track" // Custom track styling
      />
      <div className="input-outer">
        <div className="amount-outer">
          <span className="d-inline-flex align-items-center">
            <span className="min">${salary.min}</span>
            <span className="max ms-2">${salary.max}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
*/
export default SalaryRangeSlider;