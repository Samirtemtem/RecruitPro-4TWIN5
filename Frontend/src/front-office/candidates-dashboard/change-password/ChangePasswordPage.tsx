import React from 'react';
// Remove AuthFeatureFront import
// import { AuthFeatureFront } from '../common';
import { Form } from './components';
import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import  BreadCrumb  from "../../../common/Breadcrumb";
import  CopyrightFooter from "../../../common/CopyrightFooter";
import MobileMenu from "../../../common/MobileMenu";
import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import Header from '../../../common/Header';
import Seo from '../../../common/Seo';
const ChangePasswordPage: React.FC = () => {
  return (

    
      <div className="page-wrapper dashboard">
      <Seo pageTitle="Change Password" />
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
        
          {/* breadCrumb */}

          <MenuToggler /> 
          <div
        style={{
          height: "55px", // Adjust this to match your header's height
        }}
      ></div>
           <BreadCrumb title="Change your password!" />
          {/* Collapsible sidebar button */}

          {/* End .row top card block */}

          <div className="row">
      <div className="col-lg-12">
        {/* Ls widget */}
        <div className="ls-widget">
          <div className="tabs-box">
            <div className="widget-title">
              <h4>Change Password</h4>
            </div>
            <div className="widget-content">
              <Form />
            </div>
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

export { ChangePasswordPage }; 