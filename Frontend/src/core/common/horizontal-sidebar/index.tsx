import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HorizontalSidebarData } from '../../data/json/horizontalSidebar'
import ImageWithBasePath from '../imageWithBasePath';

const HorizontalSidebar = () => {
    const Location = useLocation();

    const [subOpen, setSubopen] = useState<any>("");
    const [subsidebar, setSubsidebar] = useState("");
  
    const toggleSidebar = (title: any) => {
      localStorage.setItem("menuOpened", title);
      if (title === subOpen) {
        setSubopen("");
      } else {
        setSubopen(title);
      }
    };
  
    const toggleSubsidebar = (subitem: any) => {
      if (subitem === subsidebar) {
        setSubsidebar("");
      } else {
        setSubsidebar(subitem);
      }
    };
  
  return (
    <div className="sidebar sidebar-horizontal" id="horizontal-menu">
        <div className="sidebar-menu">
            <div className="main-menu">
                <ul className="nav-menu">
                <li className="menu-title">
                    <span>Main</span>
                </li>
                {HorizontalSidebarData?.map((mainMenu, index) => (
                <React.Fragment key={`main-${index}`}>
                    {mainMenu?.menu?.map((data, i) => (
                    <li className="submenu" key={`menu-${i}`}>
                        <Link to="#" className={`
                             ${
                                data?.subMenus
                                    ?.map((link: any) => link?.route)
                                    .includes(Location.pathname) 
                                    ? "active"
                                    : ""
                                } ${subOpen === data.menuValue ? "subdrop" : ""}`} onClick={() => toggleSidebar(data.menuValue)}>
                        <i className={`ti ti-${data.icon}`}></i>
                        <span>{data.menuValue}</span>
                        <span className="menu-arrow"></span>
                        </Link>

                        {/* First-level Submenus */}
                        <ul style={{ display: subOpen === data.menuValue ? "block" : "none" }}>
                        {data?.subMenus?.map((subMenu:any, j) => (
                            <li
                            key={`submenu-${j}`}
                            className={subMenu?.customSubmenuTwo ? "submenu" : ""}
                            >
                            <Link to={subMenu?.route || "#"} className={`${
                                subMenu?.subMenusTwo
                                    ?.map((link: any) => link?.route)
                                    .includes(Location.pathname) || subMenu?.route === Location.pathname
                                    ? "active"
                                    : ""
                                } ${subsidebar === subMenu.menuValue ? "subdrop" : ""}`} onClick={() => toggleSubsidebar(subMenu.menuValue)}>
                                <span>{subMenu?.menuValue}</span>
                                {subMenu?.customSubmenuTwo && <span className="menu-arrow"></span>}
                            </Link>

                            {/* Check if `customSubmenuTwo` exists */}
                            {subMenu?.customSubmenuTwo && subMenu?.subMenusTwo && (
                                <ul style={{ display: subsidebar === subMenu.menuValue ? "block" : "none" }}>
                                {subMenu.subMenusTwo.map((subMenuTwo:any, k:number) => (
                                    <li key={`submenu-two-${k}`}>
                                    <Link className={subMenuTwo.route === Location.pathname?'active':''} to={subMenuTwo.route}>{subMenuTwo.menuValue}</Link>
                                    </li>
                                ))}
                                </ul>
                            )}
                            </li>
                        ))}
                        </ul>
                    </li>
                    ))}
                </React.Fragment>
                ))}


                    
                </ul>
                <div className="d-xl-flex align-items-center d-none">
                    <Link to="#" className="me-3 avatar avatar-sm">
                        <ImageWithBasePath src="assets/img/profiles/avatar-07.jpg" alt="profile" className="rounded-circle" />
                    </Link>
                    <Link to="#" className="btn btn-icon btn-sm rounded-circle mode-toggle">
                        <i className="ti ti-sun"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HorizontalSidebar