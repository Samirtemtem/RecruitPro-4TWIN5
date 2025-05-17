//import MobileMenu from "../../../header/MobileMenu";
//import LoginPopup from "../../../common/form/login/LoginPopup";

import MenuToggler from "../../../common/MenuToggler";
import CopyrightFooter from "../../../common/CopyrightFooter";
import BreadCrumb from "../../../common/Breadcrumb";
import JobAlert from "./components/JobAlert";
import DashboardCandidatesHeader from "./components/DashboardCandidatesHeader";
import DashboardCandidatesSidebar from "./components/DashboardCandidatesSidebar";
import JobApplied from "./components/JobApplied";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import MobileMenu from "../../../common/MobileMenu";
import Header from "../../../common/Header";
import DefaultEditor from "react-simple-wysiwyg";
import ProfileCompletionAlert from "./ProfileCompletionAlert";
import Seo from '../../../common/Seo';

import { useEffect , useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UserTutorial from "../../../tutorial/UserTutorial";
import { Step } from "react-joyride";


const DashboardCandidate = () => {

    const [showTutorial, setShowTutorial] = useState(false);
  
    useEffect(() => {
      AOS.init({ duration: 1200, once: true });
      setTimeout(() => {
        if (!localStorage.getItem("dashboard_candidate_tutorial")) {
          setShowTutorial(true);
        }
      }, 100);
    }, []);
  
  const dashboardSteps: Step[] = [
  {
    target: "body",
    content: (
      <div>
        👋 <strong>Welcome to RecruitPro!</strong>
        <br />
        <br />
        This short guide will walk you through your dashboard to help you get started.
      </div>
    ),
    placement: "center",
    disableBeacon: true,
    locale: { next: "Let's Go!" },
  },
  {
    target: ".main-header",
    content: (
      <div>
        🔝 <strong>Main Navigation Bar</strong>
        <br />
        Here you can browse jobs, access your profile, or contact support.
      </div>
    ),
    placement: "bottom",
  },
  {
    target: ".logo-box",
    content: (
      <div>
        🎯 <strong>Home Shortcut</strong>
        <br />
        Click the logo anytime to return to the homepage.
      </div>
    ),
    placement: "bottom",
  },
  {
    target: ".nav.main-menu",
    content: (
      <div>
        🧭 <strong>Main Menu</strong>
        <br />
        Use it to access job posts, contact, and other pages.
      </div>
    ),
    placement: "bottom",
  },
  {
    target: ".user-sidebar",
    content: (
      <div>
        📚 <strong>Sidebar Menu</strong>
        <br />
        Quick access to your profile, applications, interviews and more.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(1)",
    content: (
      <div>
        🏠 <strong>Dashboard</strong>
        <br />
        View an overview of your activity, job alerts, and interview stats.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(2)",
    content: (
      <div>
        👤 <strong>My Profile</strong>
        <br />
        Update your personal details and contact info.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(3)",
    content: (
      <div>
        📄 <strong>My Resume</strong>
        <br />
        Upload or edit your resume to stand out to employers.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(4)",
    content: (
      <div>
        📌 <strong>Applied Jobs</strong>
        <br />
        Track the jobs you’ve applied to and see their status.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(5)",
    content: (
      <div>
        🔔 <strong>Job Alerts</strong>
        <br />
        Get notifications when new jobs match your profile.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(6)",
    content: (
      <div>
        🔖 <strong>Shortlisted Jobs</strong>
        <br />
        View jobs you’ve bookmarked for future review.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(7)",
    content: (
      <div>
        🔐 <strong>Change Password</strong>
        <br />
        Keep your account secure by updating your password regularly.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".user-sidebar .navigation li:nth-child(8)",
    content: (
      <div>
        📅 <strong>Interviews Planning</strong>
        <br />
        View and manage your upcoming interviews here.
      </div>
    ),
    placement: "right",
    disableBeacon: true,
  },
  {
    target: ".outer-box",
    content: (
      <div>
        👤 <strong>Profile Area</strong>
        <br />
        Log out or access your profile and dashboard from here.
      </div>
    ),
    placement: "left",
  },
  {
    target: "body",
    content: (
      <div>
        ✅ <strong>You're all set!</strong>
        <br />
        Enjoy exploring your dashboard and finding your dream job!
      </div>
    ),
    placement: "center",
    disableBeacon: true,
    locale: { last: "Finish" },
  },
];

  
  return (
  <>
    {showTutorial && (
            <UserTutorial
              steps={dashboardSteps}
              tutorialKey="dashboard_candidate_tutorial"
            />
          )}
    <div className="page-wrapper dashboard">
      <Seo pageTitle="Dashboard" />
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      {/*<LoginPopup />
       End Login Popup Modal */}

      <Header />
      {/*<DashboardCandidatesHeader />*/}
      {/* End Header */}

      <MobileMenu />
    
      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
       
          <MenuToggler />
          {/* Collapsible sidebar button */}
          <BreadCrumb title="" />
          {/* breadCrumb */}
<ProfileCompletionAlert/>

          <div className="row">
            <TopCardBlock />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart />
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

         
  

            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
  </>
    // End page-wrapper
  );
};

export default DashboardCandidate;
