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


const routes = all_routes;

export const publicRoutes = [
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
    path: "/VerifyEmail",
    name: "Root",
    element: <VerifyEmail  />,
    route: Route,
  },
  {
    path: "/register",
    name: "Root",
    element: <RegisterWizard  />,
    route: Route,
  },
  {
<<<<<<< HEAD
    path: routes.TwostepVerification,
    element: <TwoStepVerification />,
    route: Route,
  }
=======
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
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
  },
>>>>>>> 2c0aa2beb9f2265abb30d42b4d02f92e52265033
]
export const authRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  
  // Candidate Routes
  {
    path: "/UserHome",
    name: "Root",
    element: <UserHome  />,
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
<<<<<<< HEAD
  },  

  
=======
  },

>>>>>>> 2c0aa2beb9f2265abb30d42b4d02f92e52265033
]