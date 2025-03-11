import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import LoginUser from "../../front-office/auth/loginuser";
import RegisterWizard from "../../front-office/auth/register-wizard";
import VerifyEmail from "../../front-office/auth/VerifyEmail";
import UserHome from "../../front-office/userhome";
import SocialAuthHandler from "../../front-office/auth/SocialAuthHandler";
import ForgotPassword from "../../front-office/auth/forgotPassword";
import ResetPasswordSuccess from "../../front-office/auth/resetPasswordSuccess";
import ResetPassword from "../../front-office/auth/resetPassword";
import AdminDashboard from "../../back-office/adminDashboard";
import JobGrid from "../../back-office/recruitment/jobs/jobgrid";
import JobList from "../../back-office/recruitment/joblist/joblist";
import CandidateGrid from "../../back-office/recruitment/candidates/candidategrid";
import ProjectDetails from "../../back-office/projects/project/projectdetails";
import EmployeeList from "../../back-office/hrm/employees/employeesList";
import TwoStepVerification from "../../front-office/auth/TwoStepVerification";
// Import candidate dashboard components
import { 
  MyProfile, 
  Dashboard, 
  AppliedJobs, 
  JobAlerts, 
  CvManager, 
  ChangePassword,
  MyResume,
  Packages,
  ShortlistedJobs,
  Messages
} from "../../front-office/candidates-dashboard";

///////////////////////////////////////////////////////////
//import IndexPage from "../../front-office/indexpage/IndexPage";
import Home from "../../index/Home";
import AppSection from "../../index/components/AppSection";
import AuthModal from "../../index/components/AuthModal";
import Funfact from "../../common/Funfact";
//import Header from "../../common/Header";
import JobCategorie from "../../index/components/JobCategorie";
import JobFeatured from "../../index/components/JobFeatured";
import JobSearchBanner from "../../index/components/JobSearchBanner";
import PartnerSlider from "../../index/components/PartnerSlider";
import Testimonial from "../../common/Testimonial";
import About from "../../index/components/About";
import Blog from "../../index/components/Blog";

//common components fro the front template
import CallToAction from "../../common/CallToAction";
import Footer from "../../common/Footer";

///////////////////////////////////////////////////////////
import JobListFront from "../../front-office/job-listing/JobListFront";
//import CallToAction from "../../job-listing/components/CallToActions";
import Categories from "../../front-office/job-listing/components/Categories";
import DatePosted from "../../front-office/job-listing/components/DatePosted";
import DestinationRangeSlider from "../../front-office/job-listing/components/DestinationRangeSlider";
import ExperienceLevel from "../../front-office/job-listing/components/ExperienceLevel";
import JobSelect from "../../front-office/job-listing/components/JobSelect";
import JobType from "../../front-office/job-listing/components/JobType";
import ListingShowing from "../../front-office/job-listing/components/ListingShowing";
import LocationBox from "../../front-office/job-listing/components/LocationBox";
import Pagination from "../../front-office/job-listing/components/Pagination";
import SalaryRangeSlider from "../../front-office/job-listing/components/SalaryRangeSlider";
import SearchBox from "../../front-office/job-listing/components/SearchBox";
import Tag from "../../front-office/job-listing/components/Tag";
import DashboardCandidate from "../../front-office/candidates-dashboard/dashboard/DashboardCandidate";

/////////////// home menu pages ///////////////////////

import AboutUs from "../../pages-menu/about/AboutUs";
import Contact from "../../pages-menu/contact/Cantact";
import Terms from "../../pages-menu/terms/Terms";

const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  
    
  
  {
    path: "/forgotpassword",
    name: "Root",
    element: <ForgotPassword  />,
    route: Route,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
    route: Route,
  },
  {
    path: routes.TwostepVerification,
    element: <TwoStepVerification />,
    route: Route,
  },
  {
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
  },
]
export const publicRoutesFront = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },

  {
    path: "/LoginUser",
    name: "Root",
    element: <LoginUser  />,
    route: Route,
  },
  {
    path: "/register",
    name: "Register",
    element: <RegisterWizard  />,
    route: Route,
  },
  {
    path: "/index",
    name: "Root",
    element: <Home />,
    route: Route,
  },

 //   landing page components     /////////////////////////////////////////////////////

 { path: "/about", name: "About", element: <About /> , route: Route,},
 { path: "/app-section", name: "App Section", element: <AppSection />, route: Route,},
 { path: "/auth-modal", name: "Auth Modal", element: <AuthModal /> ,route: Route,},
 { path: "/blog", name: "Blog", element: <Blog />,route: Route, },
 { path: "/call-to-action", name: "Call To Action", element: <CallToAction />,route: Route, },
 { path: "/footer", name: "Footer", element: <Footer /> ,route: Route,},
 { path: "/funfact", name: "Funfact", element: <Funfact />,route: Route, },
 //{ path: "/header", name: "Header", element: <Header />,route: Route, },
 { path: "/job-categorie", name: "Job Categorie", element: <JobCategorie /> ,route: Route,},
 { path: "/job-featured", name: "Job Featured", element: <JobFeatured />,route: Route,},
 { path: "/job-search-banner", name: "Job Search Banner", element: <JobSearchBanner />,route: Route, },
 { path: "/partner-slider", name: "Partner Slider", element: <PartnerSlider />,route: Route, },
 { path: "/testimonial", name: "Testimonial", element: <Testimonial /> ,route: Route,},

 ///////////////////////////////////////////////////////////////////

 {
  path: "/JobListFront",
  name: "Root", 
  element: <JobListFront />,
  route: Route,
  },
  {
    path: "/Contact",
    name: "Root", 
    element: <Contact />,
    route: Route,
  },
  {
    path: "/AboutUs",
    name: "Root", 
    element: <AboutUs />,
    route: Route,
  },
  {
    path: "/Terms",
    name: "Root", 
    element: <Terms />,
    route: Route,
  },
  
]

export const authRoutesfront = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  
  {
    path: "/DashboardCandidate",
    name: "Root", 
    element: <DashboardCandidate />,
    route: Route,
  },
  {
    path: routes.candidatesMyProfile,
    name: "My Profile",
    element: <MyProfile.MyProfilePage />,
    route: Route,
  },
  {
    path: routes.candidatesMyResume,
    name: "My Resume",
    element: <MyResume.MyResumePage />,
    route: Route,
  },
  {
    path: routes.candidatesAppliedJobs,
    name: "Applied Jobs",
    element: <AppliedJobs.AppliedJobsPage />,
    route: Route,
  },
  {
    path: routes.candidatesJobAlerts,
    name: "Job Alerts",
    element: <JobAlerts.JobAlertsPage />,
    route: Route,
  },
  {
    path: routes.candidatesCvManager,
    name: "CV Manager",
    element: <CvManager.CvManagerPage />,
    route: Route,
  },
  {
    path: routes.candidatesShortlistedJobs,
    name: "Shortlisted Jobs",
    element: <ShortlistedJobs.ShortlistedJobsPage />,
    route: Route,
  },
  {
    path: routes.candidatesPackages,
    name: "Packages",
    element: <Packages.PackagesPage />,
    route: Route,
  },
  {
    path: routes.candidatesMessages,
    name: "Messages",
    element: <Messages.MessagesPage />,
    route: Route,
  },
  {
    path: routes.candidatesChangePassword,
    name: "Change Password",
    element: <ChangePassword.ChangePasswordPage />,
    route: Route,
  },
  {
    path: "/profile",
    name: "My Profile",
    element: <MyProfile.MyProfilePage />,
    route: Route,
  },

]
export const authRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },

  {
    path: "/VerifyEmail",
    name: "Root",
    element: <VerifyEmail  />,
    route: Route,
  },
  

  

  
  {
    path: "/SocialAuthHandler",
    name: "Root",
    element: <SocialAuthHandler  />,
    route: Route,
  },

  // Admin Routes
  {
    path: "/adminDashboard",
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: "/jobgrid",
    element: <JobGrid />,
    route: Route,
  },
  {
    path: routes.joblist,
    element: <JobList />,
    route: Route,
  },
  {
    path: routes.candidatesGrid,
    element: <CandidateGrid />,
    route: Route,
  },
  {
    path: routes.projectdetails,
    element: <ProjectDetails />,
    route: Route,
  },
  {
    path: routes.employeeList,
    element: <EmployeeList />,
    route: Route,
  },  

]