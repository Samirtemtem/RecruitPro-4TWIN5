import React from "react";
import JobFavouriteTable from "./components/JobFavouriteTable";

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import BreadCrumb from "../../../common/Breadcrumb";
import  CopyrightFooter from "../../../common/CopyrightFooter";

import MobileMenu from "../../../common/MobileMenu";
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import Header from "../../../common/Header";
import Seo from '../../../common/Seo';
const ShortlistedJobsPage: React.FC = () => {
  return (
    



<div className="page-wrapper dashboard">
<Seo pageTitle="Shortlisted Jobs" />
<span className="header-span"></span>
{/* <!-- Header Span for hight --> */}

{/*<LoginPopup />
 End Login Popup Modal */}

<Header />
      {/*<DashboardCandidatesHeader />*/}
{/* End Header */}

{/*<MobileMenu />
 End MobileMenu */}
<MobileMenu/>
<DashboardCandidatesSidebar />
{/* <!-- End Candidates Sidebar Menu --> */}

{/* <!-- Dashboard --> */}
<section className="user-dashboard">
  <div className="dashboard-outer">
  <div className="row g-0">
      <div className="col-lg-12">
        {/* BreadCrumb */}
        <MenuToggler />
        <div
        style={{
          height: "55px", // Adjust this to match your header's height
        }}
      ></div>
        
        <BreadCrumb title="Shortlisted Jobs" />

        {/* <!-- Ls widget --> */}
        <div className="ls-widget">
          <JobFavouriteTable />
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

export { ShortlistedJobsPage }; 