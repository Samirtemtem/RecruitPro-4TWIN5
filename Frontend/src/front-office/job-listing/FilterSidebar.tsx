import { useState } from "react";
import { useTranslation } from "react-i18next";
import CallToActions from "../../common/CallToActions";
import Categories from "./components/Categories";
import DatePosted from "./components/DatePosted";
import DestinationRangeSlider from "./components/DestinationRangeSlider";
import JobType from "./components/JobType";
import LocationBox from "./components/LocationBox";
import SalaryRangeSlider from "./components/SalaryRangeSlider";
import SearchBox from "./components/SearchBox";
import Tag from "./components/Tag";

// No props are passed, so no interface is needed yet
const FilterSidebar: React.FC = () => {
  const { t } = useTranslation();

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
          <h4>{t("FilterSidebar.Search by Keywords")}</h4>
          <div className="form-group">
            <SearchBox />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="filter-block">
          <h4>{t("FilterSidebar.Category")}</h4>
          <div className="form-group">
            <Categories />
          </div>
        </div>
        {/* <!-- Filter Block --> */}

        <div className="checkbox-outer">
          <h4>{t("FilterSidebar.Date Posted")}</h4>
          <DatePosted />
        </div>
        {/* <!-- Checkboxes Outer --> */}
      </div>
      {/* Filter Outer */}

      <CallToActions />
      {/* <!-- End Call To Action --> */}
    </div>
  );
};

export default FilterSidebar;