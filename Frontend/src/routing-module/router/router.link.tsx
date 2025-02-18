import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import LoginUser from "../../front-office/auth/loginuser";
import RegisterWizard from "../../front-office/auth/register-wizard";
import VerifyEmail from "../../front-office/auth/VerifyEmail";
import UserHome from "../../front-office/userhome";
import SocialAuthHandler from "../../front-office/auth/SocialAuthHandler";

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
]
export const authRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
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
  
]