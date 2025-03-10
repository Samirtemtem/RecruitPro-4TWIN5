import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import LoginUser from "../../front-office/auth/loginuser";
import RegisterWizard from "../../front-office/auth/register-wizard";
import VerifyEmail from "../../front-office/auth/VerifyEmail";
import UserHome from "../../front-office/userhome";
import Profile from "../../front-office/profile/profile";
import Profilesettings from "../../front-office/profile/profile2";
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



import EmployeeDashboard from "../../back-office/employeeDashboard/employee-dashboard";


///////////////////////////////////////////////////////////
//import IndexPage from "../../front-office/indexpage/IndexPage";
import Home from "../../index/Home";
import AppSection from "../../index/components/AppSection";
import AuthModal from "../../index/components/AuthModal";
import Funfact from "../../index/components/Funfact";
import Header from "../../common/Header";
import JobCategorie from "../../index/components/JobCategorie";
import JobFeatured from "../../index/components/JobFeatured";
import JobSearchBanner from "../../index/components/JobSearchBanner";
import PartnerSlider from "../../index/components/PartnerSlider";
import Testimonial from "../../index/components/Testimonial";
import About from "../../index/components/About";
import Blog from "../../index/components/Blog";

//common components fro the front template
import CallToAction from "../../common/CallToAction";
import Footer from "../../common/Footer";

///////////////////////////////////////////////////////////
import JobListFront from "../../job-listing/JobListFront";
//import CallToAction from "../../job-listing/components/CallToActions";
import Categories from "../../job-listing/components/Categories";
import DatePosted from "../../job-listing/components/DatePosted";
import DestinationRangeSlider from "../../job-listing/components/DestinationRangeSlider";
import ExperienceLevel from "../../job-listing/components/ExperienceLevel";
import JobSelect from "../../job-listing/components/JobSelect";
import JobType from "../../job-listing/components/JobType";
import ListingShowing from "../../job-listing/components/ListingShowing";
import LocationBox from "../../job-listing/components/LocationBox";
import Pagination from "../../job-listing/components/Pagination";
import SalaryRangeSlider from "../../job-listing/components/SalaryRangeSlider";
import SearchBox from "../../job-listing/components/SearchBox";
import Tag from "../../job-listing/components/Tag";
import DashboardCandidate from "../../candidates-dashboard/dashboard/DashboardCandidate";


const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  
  {
    path: "/register",
    name: "Register",
    element: <RegisterWizard  />,
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
 { path: "/header", name: "Header", element: <Header />,route: Route, },
 { path: "/job-categorie", name: "Job Categorie", element: <JobCategorie /> ,route: Route,},
 { path: "/job-featured", name: "Job Featured", element: <JobFeatured />,route: Route,},
 { path: "/job-search-banner", name: "Job Search Banner", element: <JobSearchBanner />,route: Route, },
 { path: "/partner-slider", name: "Partner Slider", element: <PartnerSlider />,route: Route, },
 { path: "/testimonial", name: "Testimonial", element: <Testimonial /> ,route: Route,},

 ///////////////////////////////////////////////////////////////////

]

export const authRoutesfront = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  {
    path: "/JobListFront",
    name: "Root", 
    element: <JobListFront />,
    route: Route,
  },
  {
    path: "/DashboardCandidate",
    name: "Root", 
    element: <DashboardCandidate />,
    route: Route,
  },

]
export const authRoutes = [
  {
    path: "/profile",
    name: "Root",
    element: <Profilesettings />,
    route: Route,
  },
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
    path: "/employeeDashboard",
    element: <EmployeeDashboard />,
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