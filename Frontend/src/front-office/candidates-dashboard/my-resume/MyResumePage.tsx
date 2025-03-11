import React from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import Education from './components/Education';
import Experiences from './components/Experiences';
import SkillsMultiple from './components/SkillsMultiple';

import MenuToggler from '../../../common/MenuToggler';
import TopCardBlock from '../dashboard/components/TopCardBlock';
import  BreadCrumb  from "../../../common/Breadcrumb";
import  CopyrightFooter from "../../../common/CopyrightFooter";
import MobileMenu from "../../../common/MobileMenu";

import DashboardCandidatesHeader from "../dashboard/components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "../dashboard/components/DashboardCandidatesSidebar";
import Header from '../../../common/Header';
import ResumeForm, { AddCV } from './components';

const MyResumePage: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();

  return (
    
  
    
<div className="page-wrapper dashboard">
<span className="header-span"></span>
{/* <!-- Header Span for hight --> */}

{/*<LoginPopup />
 End Login Popup Modal */}

<Header />
      {/*<DashboardCandidatesHeader />*/}
{/* End Header */}

{/*<MobileMenu />
 End MobileMenu */}
<MobileMenu />
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
    <BreadCrumb title="My Resume!" />
    {/* Collapsible sidebar button */}

    {/* End .row top card block */}

    <div className="row">
      <div className="col-lg-12">
        <div className="ls-widget">
          <div className="tabs-box">
            <div className="widget-title">
              <h4>My Resume</h4>
            </div>
            <div className="widget-content">
                <AddCV />
              </div>
            <div className="widget-content">
              <Education />
              <div className="mt-5">
                <Experiences />
              </div>
              <div className="mt-5">
                <SkillsMultiple />
              </div>
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

export { MyResumePage }; 