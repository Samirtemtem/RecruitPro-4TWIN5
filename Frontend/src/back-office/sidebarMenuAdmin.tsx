// src/hooks/useSidebarData.ts
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../routing-module/AuthContext";
import { all_routes } from "../routing-module/router/all_routes";

const useSidebarData = () => {
  const { user } = useContext(AuthContext);
  const [sidebarData, setSidebarData] = useState<any[]>([]);

  useEffect(() => {
    const loadSidebarData = () => {
      const routes = all_routes;
      const SidebarDataTest = [
        ...(user?.role === "ADMIN" ? [
          {
            tittle: 'Main Menu',
            icon: 'airplay', 
            showAsTab: true,
            separateRoute: false,
            submenuItems: [
              {
                label: 'Dashboard',
                link: routes.adminDashboard,
                icon: 'smart-home',
                base: 'dashboard',
                materialicons: 'start',
        
              },
              {
                label: 'Messages de Contact',
                link: routes.contactManagement,
                submenu: false,
                showSubRoute: false,
                icon: 'message-square',
                base: 'contact-messages',
                materialicons: 'email',
                submenuItems: [],
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
              {
                label: 'Users',
                link: routes.usersList,
                submenu: false,
                showSubRoute: false,
                icon: 'user-shield',
                base: 'users',
                materialicons: 'shopping_bag',
                submenuItems: [],
              },
              {
                label: 'Requests',
                link: "/requests",
                submenu: false,
                showSubRoute: false,
                icon: 'user-shield',
                base: 'users',
                materialicons: 'shopping_bag',
                submenuItems: [],
              },
            ],
          },
        ] : []),
        ...(user?.role === "HR-MANAGER" ? [
          {
            tittle: 'Main Menu',
            icon: 'airplay', 
            separateRoute: false,
            submenuItems: [
              {
                label: 'Dashboard',
                icon: 'smart-home',
                base: 'dashboard',
                materialicons: 'start',
                link: routes.employeeDashboard 
              },
              
            ],
          },
          {
            tittle: 'Departments',
            icon: 'airplay', 
            separateRoute: false,
            submenuItems: [
              {
                label: 'Managers',
                icon: 'user-shield',
                base: 'dashboard',
                materialicons: 'start',
                link: "Managers-List" 
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
              {
                label: 'Users',
                link: routes.usersList,
                submenu: false,
                showSubRoute: false,
                icon: 'user-shield',
                base: 'users',
                materialicons: 'shopping_bag',
                submenuItems: [],
              },
              {
                label: 'Requests',
                link: "/requests",
                submenu: false,
                showSubRoute: false,
                icon: 'user-shield',
                base: 'users',
                materialicons: 'shopping_bag',
                submenuItems: [],
              },
            ],
          },
        ] : []),
        ...(user?.role === "DEPARTMENT-MANAGER" ? [
          {
            tittle: 'Main Menu',
            icon: 'airplay', 
            separateRoute: false,
            submenuItems: [
              {
                label: 'Dashboard',
                icon: 'smart-home',
                base: 'dashboard',
                materialicons: 'start',
                link: "/department-manager-dashboard",
              },
            ],
          },
          {
            tittle: 'DEPARTMENT MANAGEMENT',
            icon: 'file',
            showAsTab: false,
            separateRoute: false,
            submenuItems: [
              {
                label: 'Needs',
                link: "/department-manager-dashboard/needs",
                submenu: false,
                showSubRoute: false,
                icon: 'file-text',
                base: 'requests',
                materialicons: 'description',
                submenuItems: [],
              },
              {
                label: 'Requests',
                link: "/department-manager-dashboard/requests",
                submenu: false,
                showSubRoute: false,
                icon: 'file-text',
                base: 'requests',
                materialicons: 'description',
                submenuItems: [],
              },
              {
                label: 'Job Posts',
                link: "/department-manager-dashboard/jobposts",
                submenu: false,
                showSubRoute: false,
                icon: 'briefcase',
                base: 'jobs',
                materialicons: 'work',
                submenuItems: [],
              },
              {
                label: 'Calendar',
                link: "/department-manager-dashboard",
                submenu: false,
                showSubRoute: false,
                icon: 'calendar',
                base: 'calendar',
                materialicons: 'event',
                submenuItems: [],
              },
            ],
          },
        ] : []),
        ...(user?.role === "TEAM-LEAD" ? [
          {
            tittle: 'Main Menu',
            icon: 'airplay', 
            separateRoute: false,
            submenuItems: [
              {
                label: 'Dashboard',
                icon: 'smart-home',
                base: 'dashboard',
                materialicons: 'start',
                link: "team-lead-dashboard" 
              },
            ],
          },
          {
            tittle: 'TEAM LEAD MANAGEMENT',
            icon: 'file',
            showAsTab: false,
            separateRoute: false,
            submenuItems: [
              {
                label: 'Needs',
                link: "/team-lead-dashboard/needs",
                submenu: false,
                showSubRoute: false,
                icon: 'file-text',
                base: 'requests',
                materialicons: 'description',
                submenuItems: [],
              },
             
              {
                label: 'Calendar',
                link: "/team-lead-dashboard",
                submenu: false,
                showSubRoute: false,
                icon: 'calendar',
                base: 'calendar',
                materialicons: 'event',
                submenuItems: [],
              },
            ],
          },
        ] : []),
      ];

      setSidebarData(SidebarDataTest);
    };

    if (user) {
      loadSidebarData();
    }
  }, [user]);

  return sidebarData;
};

export default useSidebarData;