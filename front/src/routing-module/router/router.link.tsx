import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import LoginUser from "../../front-office/auth/loginuser";
import RegisterWizard from "../../front-office/auth/register-wizard";

const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
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
    path: "/login",
    name: "Root",
    element: <LoginUser  />,
    route: Route,
  },
  {
    path: "/register",
    name: "Root",
    element: <RegisterWizard  />,
    route: Route,
  },
  
]