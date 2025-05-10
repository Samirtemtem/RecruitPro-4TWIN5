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
import { Link } from 'react-router-dom';

const AppliedJobsPage: React.FC = () => {
  return (

    
    <div className="page-wrapper dashboard">
                <Seo pageTitle="Applied Jobs" />
      <span className="header-span"></span>
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
          {/* Comparator Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <Link
              to="/candidates-dashboard/applied-jobs/comparator"
              className="theme-btn btn-style-one call-modal"
              style={{ 
                fontWeight: 600, 
                borderRadius: 8, 
                padding: '12px 24px', 
                fontSize: 15,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="la la-exchange" style={{ fontSize: 18 }}></i>
              Comparateur de jobs
            </Link>
          </div>
          {/* Collapsible sidebar button */}

         
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