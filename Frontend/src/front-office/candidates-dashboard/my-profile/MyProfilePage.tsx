import React from "react";
import { useUserProfile } from "../hooks/useUserProfile";
import { SocialNetworkBox } from "./SocialNetworkBox";
import { ContactInfoBox } from "./ContactInfoBox";
import { MyProfile } from "./MyProfile";
import CopyrightFooter from "../../../common/CopyrightFooter";

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import  BreadCrumb  from "../../../common/Breadcrumb";
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import MobileMenu from "../../../common/MobileMenu";
import Header from "../../../common/Header";
const MyProfilePage: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span">  
      </span>
      {/* <!-- Header Span for hight --> */}

      {/*<LoginPopup />
       End Login Popup Modal */}
      <MobileMenu/>
      <Header />
      {/*<DashboardCandidatesHeader />*/}

      {/* End Header */}

      {/*<MobileMenu />
       End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

    
    {/* End .row top card block */}

    
      {/* <!-- Dashboard --> */}
   
      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          
    <MenuToggler />
    <div
        style={{
          height: "55px", // Adjust this to match your header's height
        }}
      ></div>
        <BreadCrumb title="My Profile!" />
    {/* breadCrumb */}    

    {/* Collapsible sidebar button */}

        <div className="row">
      <div className="col-lg-12">
        {/* Ls widget */}
        <div className="ls-widget">
          <div className="tabs-box">
            <div className="widget-title">
              <h4>My Profile</h4>
            </div>
            <MyProfile />
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

export { MyProfilePage }; 