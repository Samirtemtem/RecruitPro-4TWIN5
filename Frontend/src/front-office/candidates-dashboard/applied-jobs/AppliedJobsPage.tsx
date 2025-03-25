import React from 'react';
// import { AuthFeatureFront } from '../common';
import { JobListingsTable } from './components';
import   MobileMenu  from '../../../common/MobileMenu';
import  CopyrightFooter  from '../../../common/CopyrightFooter';

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import  BreadCrumb  from "../../../common/Breadcrumb";
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import Header from '../../../common/Header';
import Seo from '../../../common/Seo';
const AppliedJobsPage: React.FC = () => {
  return (

    <div className="page-wrapper dashboard">
          <Seo pageTitle="Applied Jobs" />

      {/* <!-- Header Span for hight --> */}
      <Header />
      {/*<DashboardCandidatesHeader />*/}
      <MobileMenu/>
      {/*<LoginPopup />
       End Login Popup Modal */}
      
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
          <div
        style={{
          height: "55px", // Adjust this to match your header's height
        }}
      ></div>
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