import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TowColData } from '../../data/json/twoColData'
import ImageWithBasePath from '../imageWithBasePath';
import { all_routes } from '../../../feature-module/router/all_routes';

const StackedSidebar = () => {
    const routes = all_routes
    const Location = useLocation();
    const [showSubMenusTab, SetShowSubMenusTab] = useState(false);
    const [subOpen, setSubopen] = useState<any>("");
    const showTabs = (res:any) => {
        TowColData.forEach((menus:any)=>{
            menus.menu.forEach((mainMenus:any) => {
                if (res.menuValue === mainMenus.menuValue) {
                    mainMenus.showMyTab = true;
                  } else {
                    mainMenus.showMyTab = false;
                  }
            })
        }

        )
    }
    const toggleSidebar = (title: any) => {
        localStorage.setItem("menuOpened", title);
        if (title === subOpen) {
          setSubopen("");
        } else {
          setSubopen(title);
        }
      };
  return (
    <div className="stacked-sidebar" id="stacked-sidebar">
        <div className="sidebar sidebar-stacked" style={{display: 'flex' }}>
            <div className="stacked-mini">
                <Link to={routes.adminDashboard} className="logo-small">
                    <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo" />
                </Link>
                <div className="sidebar-left slimscroll">
                    <div className="d-flex align-items-center flex-column">
                        <div className="mb-1 notification-item">
                            <Link to={routes.activity} className="btn btn-menubar position-relative">
                                <i className="ti ti-bell"></i>
                                <span className="notification-status-dot"></span>
                            </Link>
                        </div>
                        <div className="mb-1">
                            <Link to="#" className="btn btn-menubar btnFullscreen">
                                <i className="ti ti-maximize"></i>
                            </Link>
                        </div>
                        <div className="mb-1">
                            <Link to="#" className="btn btn-menubar position-relative">
                                <i className="ti ti-shopping-bag"></i>
                                <span
                                    className="badge bg-success rounded-pill d-flex align-items-center justify-content-center header-badge">5</span>
                            </Link>
                        </div>
                        <div className="mb-1">
                            <Link to={routes.calendar} className="btn btn-menubar">
                                <i className="ti ti-layout-grid-remove"></i>
                            </Link>
                        </div>
                        <div className="mb-1">
                            <Link to={routes.chat} className="btn btn-menubar position-relative">
                                <i className="ti ti-brand-hipchat"></i>
                                <span className="badge bg-info rounded-pill d-flex align-items-center justify-content-center header-badge">5</span>
                            </Link>
                        </div>
                        <div className="mb-1">
                            <Link to={routes.email} className="btn btn-menubar">
                                <i className="ti ti-mail"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-right d-flex justify-content-between flex-column">
                <div className="sidebar-scroll">
                    <h6 className="mb-3">Welcome to SmartHR</h6>
                    <div className="sidebar-profile text-center rounded bg-light p-3 mb-4">
                        <div className="avatar avatar-lg online mb-3">
                            <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="Img" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="fs-12 fw-normal mb-1">Adrian Herman</h6>
                        <p className="fs-10">System Admin</p>
                    </div>
                    <div className="stack-menu">
                        <div className="nav flex-column align-items-center nav-pills" role="tablist"
                            aria-orientation="vertical">
                            <div className="row g-2">
                            {TowColData.map((mainMenu, index) => (
                                <React.Fragment key={`main-${index}`}>
                                {mainMenu.menu.map((title,i)=>(
                                    <div className="col-6" key={i}>
                                    <Link to="#" role="tab" onClick={()=>{showTabs(title);SetShowSubMenusTab(!showSubMenusTab)}} className={`nav-link ${
                                title?.subMenus
                                    ?.map((link: any) => link?.route)
                                    .includes(Location.pathname) 
                                    ? "active"
                                    : ""
                                }`} title={title.menuValue} aria-selected="true">
                                        <span><i className={`ti ti-${title.icon}`}></i></span>
                                        <p>{title.menuValue}</p>
                                    </Link>
                                </div>
                                )
                                )}
                                
                                </React.Fragment>
                            ))}
                               
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className={`tab-pane ${showSubMenusTab ? 'd-block':'d-none'}`} id="menu-dashboard">
                                <ul className="stack-submenu">
                                {TowColData.map((mainMenu, index) => (
                                    <React.Fragment key={`main-${index}`}>
                                        {mainMenu.menu.map((title: any, i: number) => (
                                        <React.Fragment key={`title-${i}`}>
                                            {title.showMyTab === true && (
                                            <>
                                            
                                                {title.subMenus.map((subMenus: any, j: number) => (
                                                <React.Fragment key={`submenu-${j}`}>
                                                    {title.hasSubRoute && (
                                                    <li>
                                                        <Link
                                                        className={
                                                            subMenus.route === Location.pathname ? "active" : ""
                                                        }
                                                        to={subMenus.route}
                                                        >
                                                        {subMenus.menuValue}
                                                        </Link>
                                                    </li>
                                                    )}
                                                    {title.hasSubRouteTwo && (
                                                    <>
                                                        {subMenus.customSubmenuTwo ? (
                                                        <li className="submenu">
                                                            <Link
                                                            to="#"
                                                            className={`${
                                                                subMenus?.subMenus
                                                                ?.map((link: any) => link?.route)
                                                                .includes(Location.pathname)
                                                                ? "active"
                                                                : ""
                                                            } ${
                                                                subOpen === subMenus.menuValue ? "subdrop" : ""
                                                            }`}
                                                            onClick={() => toggleSidebar(subMenus.menuValue)}
                                                            >
                                                            <span>{subMenus.menuValue}</span>
                                                            <span className="menu-arrow"></span>
                                                            </Link>
                                                            <ul
                                                            style={{
                                                                display:
                                                                subOpen === subMenus.menuValue ? "block" : "none",
                                                            }}
                                                            >
                                                            {subMenus.subMenusTwo.map(
                                                                (subMenuTwo: any, k: number) => (
                                                                <li key={`submenu-two-${j}-${k}`}>
                                                                    <Link
                                                                    className={
                                                                        subMenuTwo.route === Location.pathname
                                                                        ? "active"
                                                                        : ""
                                                                    }
                                                                    to={subMenuTwo.route}
                                                                    >
                                                                    {subMenuTwo.menuValue}
                                                                    </Link>
                                                                </li>
                                                                )
                                                            )}
                                                            </ul>
                                                        </li>
                                                        ) : (
                                                        <li key={`submenu-link-${j}`}>
                                                            <Link
                                                            to={subMenus.route}
                                                            className={
                                                                subMenus.route === Location.pathname ? "active" : ""
                                                            }
                                                            >
                                                            {subMenus.menuValue}
                                                            </Link>
                                                        </li>
                                                        )}
                                                    </>
                                                    )}
                                                </React.Fragment>
                                                ))}
                                            </>
                                            )}
                                        </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                    ))}

                                    
                                    
                                    
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <Link to="#" className="d-flex align-items-center fs-12 mb-3">Documentation</Link>
                    <Link to="#" className="d-flex align-items-center fs-12">Change Log<span
                            className="badge bg-pink badge-xs text-white fs-10 ms-2">v4.0.2</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StackedSidebar