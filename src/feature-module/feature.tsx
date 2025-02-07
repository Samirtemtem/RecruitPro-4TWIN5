import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import Header from "../core/common/header";
import Sidebar from "../core/common/sidebar";
import ThemeSettings from "../core/common/theme-settings";
import { useEffect, useState } from "react";
import HorizontalSidebar from "../core/common/horizontal-sidebar";
import TwoColumnSidebar from "../core/common/two-column";
import StackedSidebar from "../core/common/stacked-sidebar";
import DeleteModal from "../core/modals/deleteModal";
const Feature = () => {
  const [showLoader, setShowLoader] = useState(true);
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
  const location = useLocation();
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
  return (
    <>
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
          <Preloader />
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
            <DeleteModal/>
            {!location.pathname.includes("layout") && <ThemeSettings />}
          </div>
          </> :
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
            <DeleteModal/>
            {!location.pathname.includes("layout") && <ThemeSettings />}
          </div>
          </>}
          
        </>
      {/* <Loader/> */}

      <div className="sidebar-overlay"></div>
    </div>
    </>
  );
};

export default Feature;
