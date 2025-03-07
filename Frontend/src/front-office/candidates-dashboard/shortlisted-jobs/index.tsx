import React from "react";
import JobFavouriteTable from "./components/JobFavouriteTable";

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import { BreadCrumb } from "../common/BreadCrumb";
import { CopyrightFooter, MobileMenu } from "../common";
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
const ShortlistedJobsPage: React.FC = () => {
  return (
    



<div className="page-wrapper dashboard">
<span className="header-span"></span>
{/* <!-- Header Span for hight --> */}

{/*<LoginPopup />
 End Login Popup Modal */}

<DashboardCandidatesHeader />
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