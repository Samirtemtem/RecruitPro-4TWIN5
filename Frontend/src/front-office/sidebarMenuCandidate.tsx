import { all_routes } from "../routing-module/router/all_routes";
//import { route } from "../../common/selectoption/selectoption";
const routes = all_routes;

export const SidebarDataTest = [
  {
    tittle: 'Main Menu',
    icon: 'airplay',
    showAsTab: true,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Home',
        //link: 'index',
        link: routes.UserHome,
        submenu: true,
        showSubRoute: false,
        icon: 'smart-home',
        base: 'dashboard',
        materialicons: 'start',
        dot: true,
        submenuItems: [
          { label: "Home", link: routes.UserHome },
        ],
      },
      
     
      
    ],
    
  },
  {
    tittle: 'My Profile',
    icon: 'airplay',
    showAsTab: true,
    separateRoute: false,
    submenuItems: [
      {
        label: 'Profile',
        //link: 'index',
        link: routes.profile,
        submenu: false,
        showSubRoute: false,
        icon: 'smart-home',
        base: 'dashboard',
        materialicons: 'start',

      },
      
     
      
    ],
    
  },
 
 
 /*
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
 */
  
 

 

];