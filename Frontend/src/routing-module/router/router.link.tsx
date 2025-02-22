import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import LoginUser from "../../front-office/auth/loginuser";
import RegisterWizard from "../../front-office/auth/register-wizard";
import VerifyEmail from "../../front-office/auth/VerifyEmail";
import UserHome from "../../front-office/userhome";
import SocialAuthHandler from "../../front-office/auth/SocialAuthHandler";

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
    path: routes.TwostepVerification,
    element: <TwoStepVerification />,
    route: Route,
  }
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
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.jobgrid,
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