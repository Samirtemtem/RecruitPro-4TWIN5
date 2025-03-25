
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation , useNavigate } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import ThemeSettings from "../core/common/theme-settings";
import { useEffect, useState } from "react";
import HorizontalSidebar from "../core/common/horizontal-sidebar";
import TwoColumnSidebar from "../core/common/two-column";
import StackedSidebar from "../core/common/stacked-sidebar";
//import DeleteModal from "../core/modals/deleteModal";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from "react"; // Add useContext to the import statement
// Import AuthProvider for managing authentication
import { AuthContext, useAuth } from "./AuthContext";


const AuthFeature = () => {

  //const { token } = useContext(AuthContext); // Use token from AuthContext
  const navigate = useNavigate();
  const location = useLocation();

  const [showLoader, setShowLoader] = useState(true);

  // Theme and layout settings logic (unchanged)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //const [showLoader, setShowLoader] = useState(true);
  const headerCollapse = useSelector((state: any) => state.themeSetting.headerCollapse);
  const mobileSidebar = useSelector(
    (state: any) => state.sidebarSlice.mobileSidebar
  );
  const miniSidebar = useSelector(
    (state: any) => state.sidebarSlice.miniSidebar
  );
  const expandMenu = useSelector((state: any) => state.sidebarSlice.expandMenu);
  const dataWidth = useSelector((state: any) => state.themeSetting.dataWidth);
  const dataLayout = useSelector((state: any) => state.themeSetting.dataLayout);
  const dataLoader = useSelector((state: any) => state.themeSetting.dataLoader);
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const dataSidebarAll = useSelector((state: any) => state.themeSetting.dataSidebarAll);
  const dataColorAll = useSelector((state: any) => state.themeSetting.dataColorAll);
  const dataTopBarColorAll = useSelector((state: any) => state.themeSetting.dataTopBarColorAll);
  const dataTopbarAll = useSelector((state: any) => state.themeSetting.dataTopbarAll);

  useEffect(() => {
    if (dataTheme === "dark_data_theme") {
      document.documentElement.setAttribute("data-theme", "darks");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [dataTheme]);
  useEffect(() => {
    if (dataLoader === 'enable') {
      // Show the loader when navigating to a new route
      setShowLoader(true);

      // Hide the loader after 2 seconds
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout when component unmounts
      };
    } else {
      setShowLoader(false);
    }
    window.scrollTo(0, 0);
  }, [location.pathname,dataLoader]);
  const Preloader = () => {
    return (
      <div id="global-loader">
        <div className="page-loader"></div>
      </div>
    );
  };
  const { token } = useAuth();
 // const { user } = useAuth();
  const context = useContext(AuthContext);
  console.log(context);
  //console.log(user);
  if(context?.role === "CANDIDATE"){
    return <Navigate to="/DashboardCandidate" />;
  }
  return token ?    <>
  <style>
     {`
   :root {
     --sidebar--rgb-picr: ${dataSidebarAll};
     --topbar--rgb-picr:${dataTopbarAll};
     --topbarcolor--rgb-picr:${dataTopBarColorAll};
     --primary-rgb-picr:${dataColorAll};
   }
 `}
   </style>
 <div
   className={`
    ${dataLayout === "mini" || dataWidth === 'box' ? "mini-sidebar" : ''}
    ${dataLayout === "horizontal" || dataLayout === "horizontal-single" || dataLayout === "horizontal-overlay" || dataLayout === "horizontal-box" ? 'menu-horizontal':''}
   ${miniSidebar && dataLayout !== "mini" ? "mini-sidebar" : ""}
   ${dataWidth === 'box' ? 'layout-box-mode':''} ${headerCollapse ? "header-collapse" : ""}
  ${
    (expandMenu && miniSidebar) ||
    (expandMenu && dataLayout === "mini")
      ? "expand-menu"
      : ""
  }
   
   `}
 >
    <>
       {showLoader ? 
       <>
    
       <div
         className={`main-wrapper 
     ${mobileSidebar ? "slide-nav" : ""}`}
       >
         <Header />
         <Sidebar />
         <HorizontalSidebar />
         <TwoColumnSidebar/>
         <StackedSidebar/>
         <Outlet />
         {/* {!location.pathname.includes("layout") && <ThemeSettings />} */}
       </div>
       </> :
       <>
       <div
         className={`main-wrapper 
     ${mobileSidebar ? "slide-nav" : ""}`}
       >
         <Header />
         <Sidebar  />
         <HorizontalSidebar />
         <TwoColumnSidebar/>
         <StackedSidebar/>
         <Outlet />
         {/* {!location.pathname.includes("layout") && <ThemeSettings />} */}
       </div>
       </>}
       
     </>
   {/* <Loader/> */}

   <div className="sidebar-overlay"></div>
 </div>
 </>
: <Navigate to="/loginuser" />;
};

export default AuthFeature;
