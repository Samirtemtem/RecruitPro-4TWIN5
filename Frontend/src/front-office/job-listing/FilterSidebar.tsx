import { useState } from "react";
import CallToActions from "../../common/CallToActions";
import Categories from "./components/Categories";
import DatePosted from "./components/DatePosted";
import DestinationRangeSlider from "./components/DestinationRangeSlider";
import ExperienceLevel from "./components/ExperienceLevel";
import JobType from "./components/JobType";
import LocationBox from "./components/LocationBox";
import SalaryRangeSlider from "./components/SalaryRangeSlider";
import SearchBox from "./components/SearchBox";
import Tag from "./components/Tag";

// No props are passed, so no interface is needed yet
const FilterSidebar: React.FC = () => {
  return (
    <div className="inner-column">
      <div className="filters-outer">
        <button
          type="button"
          className="btn-close text-reset close-filters show-1023"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        {/* End .close filter */}

        <div className="filter-block">
          <h4>Search by Keywords</h4>
          <div className="form-group">
            <SearchBox />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        {/* <!-- Filter Block --> */}

        <div className="filter-block">
          <h4>Category</h4>
          <div className="form-group">
            <Categories />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="switchbox-outer">
          <h4>Job type</h4>
          <JobType />
        </div>
        {/* <!-- Switchbox Outer --> */}

        <div className="checkbox-outer">
          <h4>Date Posted</h4>
          <DatePosted />
        </div>
        {/* <!-- Checkboxes Outer --> */}

        <div className="checkbox-outer">
          <h4>Experience Level</h4>
          <ExperienceLevel />
        </div>
        {/* <!-- Checkboxes Outer --> */}

     
        {/* <!-- Filter Block --> */}

        <div className="filter-block">
          <h4>Tags</h4>
          <Tag />
        </div>
        {/* <!-- Filter Block --> */}
      </div>
      {/* Filter Outer */}

      <CallToActions />
      {/* <!-- End Call To Action --> */}
    </div>
  );
};

export default FilterSidebar;