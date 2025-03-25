import FooterDefault from "../../common/Footer"; 
import Breadcrumb from "../../common/Breadcrumb"; 
//import LoginPopup from "./components/common/form/login/LoginPopup"; 
import DefaulHeader2 from "../../common/Header"; 
//import MobileMenu from "./components/header/MobileMenu"; 
import FilterJobsBox from "./FilterJobsBox"; 
import FilterSidebar from "./FilterSidebar"; 
//import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included
import DashboardCandidatesHeader from "../candidates-dashboard/dashboard/components/DashboardCandidatesHeader";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileMenu from "../../common/MobileMenu";
import MenuToggler from "../../common/MenuToggler";
import ScrollToTop from "../../common/ScrollTop";
const JobListFront: React.FC = () => {
    useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        once: true,     // Run animations only once
      });
    }, []);
  return (
    <>
      {/* <!-- Header Span --> */}

      {/*<LoginPopup />
       End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn 
       <DashboardCandidatesHeader />*/}
       <MobileMenu />

      {/* <MobileMenu />
      End MobileMenu */}

<br></br>
       <MenuToggler />
      <Breadcrumb title="Find Jobs" meta="Jobs" />
      {/*<!--End Breadcrumb Start--> */}

      <section className="ls-section">
        
        <div className="auto-container">
          <div className="row">
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="filter-sidebar"
              aria-labelledby="offcanvasLabel"
            >
              <div className="filters-column hide-left">
                <FilterSidebar />
              </div>
            </div>
            {/* End filter column for tablet and mobile devices */}

            <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
              <FilterSidebar />
            </div>
            {/* <!-- End Filters Column for desktop and laptop --> */}

            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <FilterJobsBox />
                {/* <!-- ls Switcher --> */}
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <ScrollToTop />
      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default JobListFront;