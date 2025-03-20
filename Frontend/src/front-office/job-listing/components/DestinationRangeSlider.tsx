import { useEffect, useState } from "react";
//import InputRange from "react-input-range";
//import "react-input-range/lib/css/index.css"; // Required for styling
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../utils/filterSlice"; // Updated path
// import "./DestinationRangeSlider.css"; // Uncomment if using custom CSS

// Define the filter state shape for useSelector
interface FilterState {
  jobList: {
    destination: {
      min: number;
      max: number;
    };
    keyword?: string;
    location?: string;
    category?: string;
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

// Define the type for the InputRange value (consistent with react-input-range.d.ts)
interface Range {
  min: number;
  max: number;
}

const DestinationRangeSlider = () => {
  const { jobList } = useSelector((state: { filter: FilterState }) => state.filter) || {
    jobList: { destination: { min: 0, max: 100 } },
  };
  const [destination, setDestination] = useState({
    min: jobList.destination.min,
    max: jobList.destination.max,
  });

  const dispatch = useDispatch();

  // Type onChange to accept Range | number, but handle only Range
  const handleOnChange = (value: Range | number) => {
    if (typeof value !== "number") { // Ensure it's a Range object
      dispatch(addDestination({ min: value.min, max: value.max }));
    }
  };

  useEffect(() => {
    setDestination({
      min: jobList.destination.min,
      max: jobList.destination.max,
    });
  }, [jobList]);

  return (
    <div className="range-slider-one">
      
      <div className="input-outer">
        <div className="amount-outer">
          <span className="area-amount">{destination.max}</span>
          km
        </div>
      </div>
    </div>
  );
};


/*
  return (
    <div className="range-slider-one">
    <InputRange
        formatLabel={(value: number) => ``} // Typed as number
        minValue={0}
        maxValue={100}
        value={{ min: destination.min, max: destination.max }}
        onChange={handleOnChange}
      />
      
      <div className="input-outer">
        <div className="amount-outer">
          <span className="area-amount">{destination.max}</span>
          km
        </div>
      </div>
    </div>
  );
};
*/
export default DestinationRangeSlider;