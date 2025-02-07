import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import ImageWithBasePath from "../imageWithBasePath";
import "../../../style/icon/tabler-icons/webfont/tabler-icons.css";
import { setExpandMenu } from "../../data/redux/sidebarSlice";
import { useDispatch } from "react-redux";
import {
  resetAllMode,
  setDataLayout,
} from "../../data/redux/themeSettingSlice";
import usePreviousRoute from "./usePreviousRoute";
import { SidebarDataTest } from "../../data/json/sidebarMenu";

const Sidebar = () => {
  const Location = useLocation();

  const [subOpen, setSubopen] = useState<any>("Dashboard");
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

  const handleLayoutChange = (layout: string) => {
    dispatch(setDataLayout(layout));
  };

  const handleClick = (label: any, themeSetting: any, layout: any) => {
    toggleSidebar(label);
    if (themeSetting) {
      handleLayoutChange(layout);
    }
  };

  const getLayoutClass = (label: any) => {
    switch (label) {
      case "Default":
        return "default_layout";
      case "Mini":
        return "mini_layout";
      case "Box":
        return "boxed_layout";
      case "Dark":
        return "dark_data_theme";
      case "RTL":
        return "rtl";
      default:
        return "";
    }
  };
  const location = useLocation();
  const dispatch = useDispatch();
  const previousLocation = usePreviousRoute();

  useEffect(() => {
    const layoutPages = [
      "/layout-dark",
      "/layout-rtl",
      "/layout-mini",
      "/layout-box",
      "/layout-default",
    ];

    const isCurrentLayoutPage = layoutPages.some((path) =>
      location.pathname.includes(path)
    );
    const isPreviousLayoutPage =
      previousLocation &&
      layoutPages.some((path) => previousLocation.pathname.includes(path));


  }, [location, previousLocation, dispatch]);

  useEffect(() => {
    const currentMenu = localStorage.getItem("menuOpened") || 'Dashboard'
    setSubopen(currentMenu);
    // Select all 'submenu' elements
    const submenus = document.querySelectorAll(".submenu");
    // Loop through each 'submenu'
    submenus.forEach((submenu) => {
      // Find all 'li' elements within the 'submenu'
      const listItems = submenu.querySelectorAll("li");
      submenu.classList.remove("active");
      // Check if any 'li' has the 'active' class
      listItems.forEach((item) => {
        if (item.classList.contains("active")) {
          // Add 'active' class to the 'submenu'
          submenu.classList.add("active");
          return;
        }
      });
    });
  }, [Location.pathname]);

  const onMouseEnter = () => {
    dispatch(setExpandMenu(true));
  };
  const onMouseLeave = () => {
    dispatch(setExpandMenu(false));
  };
  return (
    <>
      <div
        className="sidebar"
        id="sidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
  <div className="sidebar-logo">
    <Link to="routes.index" className="logo logo-normal">
      <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
    </Link>
    <Link to="routes.index" className="logo-small">
      <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo" />
    </Link>
    <Link to="routes.index" className="dark-logo">
      <ImageWithBasePath src="assets/img/logo-white.svg" alt="Logo" />
    </Link>
  </div>
  <div className="modern-profile p-3 pb-0">
    <div className="text-center rounded bg-light p-3 mb-4 user-profile">
      <div className="avatar avatar-lg online mb-3">
        <ImageWithBasePath
          src="assets/img/profiles/avatar-02.jpg"
          alt="Img"
          className="img-fluid rounded-circle"
        />
      </div>
      <h6 className="fs-12 fw-normal mb-1">Adrian Herman</h6>
      <p className="fs-10">System Admin</p>
    </div>
    <div className="sidebar-nav mb-3">
      <ul
        className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent"
        role="tablist"
      >
        <li className="nav-item">
          <Link className="nav-link active border-0" to="#">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link border-0" to="#">Chats</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link border-0" to="#">Inbox</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className="sidebar-header p-3 pb-0 pt-2">
    <div
      className="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center"
    >
      <div className="avatar avatar-md onlin">
        <ImageWithBasePath
          src="assets/img/profiles/avatar-02.jpg"
          alt="Img"
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="text-start sidebar-profile-info ms-2">
        <h6 className="fs-12 fw-normal mb-1">Adrian Herman</h6>
        <p className="fs-10">System Admin</p>
      </div>
    </div>
    <div className="input-group input-group-flat d-inline-flex mb-4">
      <span className="input-icon-addon">
        <i className="ti ti-search"></i>
      </span>
      <input type="text" className="form-control" placeholder="Search in HRMS" />
      <span className="input-group-text">
        <kbd>CTRL + / </kbd>
      </span>
    </div>
    <div
      className="d-flex align-items-center justify-content-between menu-item mb-3"
    >
      <div className="me-3">
        <Link to="#" className="btn btn-menubar position-relative">
          <i className="ti ti-shopping-bag"></i>
          <span className="badge bg-success rounded-pill d-flex align-items-center justify-content-center header-badge"
            >5</span>
        </Link>
      </div>
      <div className="me-3">
        <Link to="#" className="btn btn-menubar">
          <i className="ti ti-layout-grid-remove"></i>
        </Link>
      </div>
      <div className="me-3">
        <Link to="#" className="btn btn-menubar position-relative">
          <i className="ti ti-brand-hipchat"></i>
          <span
            className="badge bg-info rounded-pill d-flex align-items-center justify-content-center header-badge"
            >5</span>
        </Link>
      </div>
      <div className="me-3 notification-item">
        <Link to="#" className="btn btn-menubar position-relative me-1">
          <i className="ti ti-bell"></i>
          <span className="notification-status-dot"></span>
        </Link>
      </div>
      <div className="me-0">
        <Link to="#" className="btn btn-menubar">
          <i className="ti ti-message"></i>
        </Link>
      </div>
    </div>
  </div>
        <Scrollbars>
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
              {SidebarDataTest?.map((mainLabel, index) => (
                <React.Fragment key={`main-${index}`}>
                    <li className="menu-title">
                        <span>{mainLabel?.tittle}</span>
                    </li>
                    <li>
                    <ul>
                        {mainLabel?.submenuItems?.map((title: any, i) => {
                        let link_array: any = [];
                        if ("submenuItems" in title) {
                            title.submenuItems?.forEach((link: any) => {
                            link_array.push(link?.link);
                            if (link?.submenu && "submenuItems" in link) {
                                link.submenuItems?.forEach((item: any) => {
                                link_array.push(item?.link);
                                });
                            }
                            });
                        }
                        title.links = link_array;

                        return (
                            <li className="submenu" key={`title-${i}`}>
                            <Link
                                to={title?.submenu ? "#" : title?.link}
                                onClick={() =>
                                handleClick(
                                    title?.label,
                                    title?.themeSetting,
                                    getLayoutClass(title?.label)
                                )
                                }
                                className={`${
                                subOpen === title?.label ? "subdrop" : ""
                                } ${
                                title?.links?.includes(Location.pathname) ? "active" : ""
                                } ${
                                title?.submenuItems
                                    ?.map((link: any) => link?.link)
                                    .includes(Location.pathname) ||
                                title?.link === Location.pathname
                                    ? "active"
                                    : ""
                                }`}
                            >
                                <i className={`ti ti-${title.icon}`}></i>
                                <span>{title?.label}</span>
                                {title?.dot && (
                                <span className="badge badge-danger fs-10 fw-medium text-white p-1">
                                    Hot
                                </span>
                                )}
                                <span className={title?.submenu ? "menu-arrow" : ""} />
                            </Link>
                            {title?.submenu !== false && subOpen === title?.label && (
                                <ul
                                style={{
                                    display: subOpen === title?.label ? "block" : "none",
                                }}
                                >
                                {title?.submenuItems?.map((item: any, j: any) => (
                                    <li
                                    className={
                                        item?.submenuItems ? "submenu submenu-two" : ""
                                    }
                                    key={`item-${j}`}
                                    >
                                    <Link
                                        to={ item?.submenu ? "#" :item?.link}
                                        className={`${
                                        item?.submenuItems
                                            ?.map((link: any) => link?.link)
                                            .includes(Location.pathname) ||
                                        item?.link === Location.pathname
                                            ? "active"
                                            : ""
                                        } ${
                                        subsidebar === item?.label ? "subdrop" : ""
                                        }`}
                                        onClick={() => {
                                        toggleSubsidebar(item?.label);
                                        }}
                                    >
                                        {item?.label}
                                        <span
                                        className={item?.submenu ? "menu-arrow" : ""}
                                        />
                                    </Link>
                                    {item?.submenuItems ? (
                                        <ul
                                        style={{
                                            display:
                                            subsidebar === item?.label ? "block" : "none",
                                        }}
                                        >
                                        {item?.submenuItems?.map((items: any, k: any) => (
                                            <li key={`submenu-item-${k}`}>
                                            <Link
                                                to={items?.submenu ? "#" :items?.link}
                                                className={`${
                                                subsidebar === items?.label
                                                    ? "submenu-two subdrop"
                                                    : "submenu-two"
                                                } ${
                                                items?.submenuItems
                                                    ?.map((link: any) => link.link)
                                                    .includes(Location.pathname) ||
                                                items?.link === Location.pathname
                                                    ? "active"
                                                    : ""
                                                }`}
                                            >
                                                {items?.label}
                                            </Link>
                                            </li>
                                        ))}
                                        </ul>
                                    ) : null}
                                    </li>
                                ))}
                                </ul>
                            )}
                            </li>
                        );
                        })}
                    </ul>
                    </li>
                </React.Fragment>
                ))}

              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default Sidebar;
