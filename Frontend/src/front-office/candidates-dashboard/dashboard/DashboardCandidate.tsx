//import MobileMenu from "../../../header/MobileMenu";
//import LoginPopup from "../../../common/form/login/LoginPopup";

import MenuToggler from "../../../common/MenuToggler";
import CopyrightFooter from "../../../common/CopyrightFooter";
import BreadCrumb from "../../../common/Breadcrumb";
import JobAlert from "./components/JobAlert";
import DashboardCandidatesHeader from "./components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "./components/DashboardCandidatesSidebar";
import JobApplied from "./components/JobApplied";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import MobileMenu from "../../../common/MobileMenu";
import Header from "../../../common/Header";
import DefaultEditor from "react-simple-wysiwyg";
import ProfileCompletionAlert from "./ProfileCompletionAlert";
import Seo from '../../../common/Seo';
const DashboardCandidate = () => {
  return (
    <div className="page-wrapper dashboard">
      <Seo pageTitle="Dashboard" />
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      {/*<LoginPopup />
       End Login Popup Modal */}

      <Header />
      {/*<DashboardCandidatesHeader />*/}
      {/* End Header */}

      <MobileMenu />
    
      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
       
          <MenuToggler />
          {/* Collapsible sidebar button */}
          <BreadCrumb title="" />
          {/* breadCrumb */}
<ProfileCompletionAlert/>

          <div className="row">
            <TopCardBlock />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart />
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

         
            {/* End .col */}

            <div className="col-lg-12">
              {/* <!-- applicants Widget --> */}
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                <h4>New Job Notifications</h4>                </div>
                <div className="widget-content">
                  <div className="row">
                    {/* <!-- Candidate block three --> */}

                    <JobAlert />
                                      </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default DashboardCandidate;
