import React from 'react';
// import { AuthFeatureFront } from '../common';
import { JobListingsTable } from './components';
import { CopyrightFooter, MobileMenu } from '../common';

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import { BreadCrumb } from "../common/BreadCrumb";
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
const AppliedJobsPage: React.FC = () => {
  return (

    
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}
      <MobileMenu/>
      {/*<LoginPopup />
       End Login Popup Modal */}
      
      <DashboardCandidatesHeader />
      {/* End Header */}

      {/*<MobileMenu />
       End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
        
          {/* breadCrumb */}

          <MenuToggler />
          <BreadCrumb title="Applied Jobs!" />
          {/* Collapsible sidebar button */}

          {/* End .row top card block */}

         
        <div className="row">
      <div className="col-lg-12">
        {/* Job Listings Table */}
        <div className="ls-widget">
          <JobListingsTable />
        </div>
      </div>
    </div>
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

export { AppliedJobsPage }; 