import { all_routes } from "../../../feature-module/router/all_routes";
import { route } from "../../common/selectoption/selectoption";
const routes = all_routes;

export const SidebarDataTest = [
  {
    tittle: 'Main Menu',
    icon: 'airplay',
    showAsTab: true,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Dashboard',
        link: 'index',
        submenu: true,
        showSubRoute: false,
        icon: 'smart-home',
        base: 'dashboard',
        materialicons: 'start',
        dot: true,
        submenuItems: [
          { label: "Admin Dashboard", link: routes.adminDashboard },
         

        ],
      },
     
      
    ],
  },
 
 
 
  {
    tittle: 'HRM',
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Employees',
        link: routes.employeeList,
        submenu: true,
        showSubRoute: false,
        icon: 'users',
        base: 'employees',
        materialicons: 'people',
        submenuItems: [
          {
            label: 'Employees List',
            link: routes.employeeList,
            base: 'employees',
            base2: 'employee-list',
          },
       
       
        ],
      },
   
    
    
    
    
    
   
  
    ],
  },
  {
    tittle: 'RECRUITMENT',
    icon: 'file',
    showAsTab: false,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Jobs',
        link: routes.jobgrid,
        submenu: false,
        showSubRoute: false,
        icon: 'timeline',
        base: 'jobs',
        materialicons: 'confirmation_number',
        submenuItems: [],
      },
      {
        label: 'Candidates',
        link: routes.candidatesGrid,
        submenu: false,
        showSubRoute: false,
        icon: 'user-shield',
        base: 'candidates',
        materialicons: 'shopping_bag',
        submenuItems: [],
      },


    ],
  },
 
  
 

 

];