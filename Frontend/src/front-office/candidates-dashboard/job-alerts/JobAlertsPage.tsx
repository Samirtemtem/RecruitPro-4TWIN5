import React from 'react';
// import { AuthFeatureFront } from '../common';
import { JobAlertsTable } from './components';
import  CopyrightFooter from "../../../common/CopyrightFooter";

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import  BreadCrumb  from "../../../common/Breadcrumb";
import MobileMenu from "../../../common/MobileMenu";

import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import Header from '../../../common/Header';
import Seo from '../../../common/Seo';
const JobAlertsPage: React.FC = () => {
  return (
    

    
<div className="page-wrapper dashboard">  
<Seo pageTitle="Job Alerts" />
<span className="header-span"></span>
{/* <!-- Header Span for hight --> */}

{/*<LoginPopup />
 End Login Popup Modal */}

<Header />
      {/*<DashboardCandidatesHeader />*/}
{/* End Header */}
<MobileMenu />
{/*<MobileMenu />
 End MobileMenu */}

<DashboardCandidatesSidebar />
{/* <!-- End Candidates Sidebar Menu --> */}

{/* <!-- Dashboard --> */}
<section className="user-dashboard">
  <div className="dashboard-outer">

    <MenuToggler /> 
    <div
        style={{
          height: "55px", // Adjust this to match your header's height
        }}
      ></div>
       <BreadCrumb title="" />
    {/* breadCrumb */}

    {/* Collapsible sidebar button */}

  
    {/* End .row top card block */}

    <div className="row">
      <div className="col-lg-12">
        {/* Job Alerts Table */}
        <div className="ls-widget">
          <JobAlertsTable />
        </div>
      </div>
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

export { JobAlertsPage }; 