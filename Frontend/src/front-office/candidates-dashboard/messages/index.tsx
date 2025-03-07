import React from "react";
import { BreadCrumb } from "../common/BreadCrumb";
import ChatBox from "./components";

import { CopyrightFooter, MobileMenu } from "../common";

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
const MessagesPage: React.FC = () => {
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
    {/* breadCrumb */}

    <MenuToggler />
    
    <BreadCrumb title="Your messages!" />
    {/* Collapsible sidebar button */}

    {/* End .row top card block */}

        {/* <!-- Dashboard --> */}
        <div className="row g-0">
      <div className="col-lg-12">
        {/* BreadCrumb */}
        <BreadCrumb title="Messages" />

        {/* Chat Widget */}
        <div className="chat-widget">
          <div className="widget-content">
            <ChatBox />
          </div>
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

export { MessagesPage }; 