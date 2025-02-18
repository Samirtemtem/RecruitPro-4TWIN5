import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";





import AdminDashboard from "../mainMenu/adminDashboard";









import JobGrid from "../recruitment/jobs/jobgrid";
import JobList from "../recruitment/joblist/joblist";
import CandidateGrid from "../recruitment/candidates/candidategrid";




import ProjectDetails from "../projects/project/projectdetails";






import EmployeeList from "../hrm/employees/employeesList";






const routes = all_routes;

export const publicRoutes = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/index" />,
    route: Route,
  },
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },





 








 
 
 





  // {
  //   path: routes.chart,
  //   element: <ChartJs />,
  //   route: Route,
  // },



  

 







 










  

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

 






];

export const authRoutes = [

  
];
