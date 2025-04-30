import LoginPopup from "../../common/form/login/LoginPopup";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FilterSidebar from "./FilterSidebar";
import FilterJobBox from "./FilterJobBox";
import MapJobFinder from "../components/MapJobFinder";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="ls-section map-layout">
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="filter-sidebar"
          aria-labelledby="offcanvasLabel"
        >
          <div className="filters-column hide-left">
            <FilterSidebar />
          </div>
        </div>
        {/* <!-- End Filters Column --> */}

        <div className="map-column width-50">
          <div style={{ height: "100vh", width: "100%" }}>
            <MapJobFinder />
          </div>
          {/* <!-- Map --> */}
        </div>
        {/* <!-- Map Column --> */}

        <div className="content-column width-50">
          <FilterJobBox />
        </div>
        {/* <!-- End Content Column --> */}
      </section>
      {/* <!--End Listing Page Section --> */}
    </>
  );
};

export default index;
