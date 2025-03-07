import React from "react";
import { BreadCrumb } from "../common/BreadCrumb";
import PackageDataTable from "./components/PackageDataTable";
import { CopyrightFooter, MobileMenu } from "../common";


import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
const PackagesPage: React.FC = () => {
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
    <MenuToggler />
    
    <BreadCrumb title="My Packages!" />
    {/* breadCrumb */}

    {/* Collapsible sidebar button */}

    {/* End .row top card block */}

    <div className="row g-0">
      <div className="col-lg-12">
        {/* BreadCrumb */}

        <div className="ls-widget">
          <div className="tabs-box">
            <div className="widget-title">
              <h4>My Packages</h4>
            </div>
            {/* End widget-title */}

            <div className="widget-content">
              <div className="table-outer">
                <PackageDataTable />
              </div>
            </div>
            {/* End widget-content */}
          </div>
        </div>
        {/* <!-- Ls widget --> */}
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

export { PackagesPage }; 