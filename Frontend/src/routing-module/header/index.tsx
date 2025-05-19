import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataLayout,
} from "../../core/data/redux/themeSettingSlice";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import {
  setMobileSidebar,
  toggleMiniSidebar,
} from "../../core/data/redux/sidebarSlice";
import { all_routes } from "../router/all_routes";
import { HorizontalSidebarData } from '../../core/data/json/horizontalSidebar';
import { AuthContext } from "../AuthContext";

const Header = () => {
  const routes = all_routes;
  const dispatch = useDispatch();
  const dataLayout = useSelector((state: any) => state.themeSetting.dataLayout);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");
  const [userImage, setUserImage] = useState<string | null>(null);

  // Fetch user image from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.image) {
      setUserImage(user.image); // Set the user image from localStorage
    } else {
      setUserImage("assets/img/profiles/avatar-12.jpg"); // Fallback image
    }
  }, []);

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

  const mobileSidebar = useSelector(
    (state: any) => state.sidebarSlice.mobileSidebar
  );

  const toggleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };

  const handleToggleMiniSidebar = () => {
    if (dataLayout === "mini_layout") {
      dispatch(setDataLayout("default_layout"));
      localStorage.setItem("dataLayout", "default_layout");
    } else {
      dispatch(toggleMiniSidebar());
    }
  };

  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {});
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {});
        }
        setIsFullscreen(false);
      }
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.clear();
    navigate('/LoginUser', { replace: true });
  };

  return (
    <div className="header">
      <div className="main-header">
        <div className="header-left">
          <Link to={routes.adminDashboard} className="logo">
            <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
          </Link>
          <Link to={routes.adminDashboard} className="dark-logo">
            <ImageWithBasePath src="assets/img/logo-white.svg" alt="Logo" />
          </Link>
        </div>

        <Link
          id="mobile_btn"
          onClick={toggleMobileSidebar}
          className="mobile_btn"
          to="#sidebar"
        >
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Link>

        <div className="header-user">
          <div className="nav user-menu nav-list">
            <div className="me-auto d-flex align-items-center" id="header-search">
              <Link
                id="toggle_btn"
                to="#"
                onClick={handleToggleMiniSidebar}
                className="btn btn-menubar me-1"
              >
                <i className="ti ti-arrow-bar-to-left"></i>
              </Link>
              <div className="input-group input-group-flat d-inline-flex me-1">
                <span className="input-icon-addon">
                  <i className="ti ti-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search in Dashboard"
                />
                <span className="input-group-text">
                  <kbd>CTRL + / </kbd>
                </span>
              </div>
              <Link to={routes.profilesettings} className="btn btn-menubar">
                <i className="ti ti-settings-cog"></i>
              </Link>
            </div>

            <div className="sidebar sidebar-horizontal" id="horizontal-single">
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
                            <Link
                              to="#"
                              className={`
                                ${
                                  data?.subMenus
                                    ?.map((link: any) => link?.route)
                                    .includes(location.pathname)
                                    ? "active"
                                    : ""
                                } ${subOpen === data.menuValue ? "subdrop" : ""}`}
                              onClick={() => toggleSidebar(data.menuValue)}
                            >
                              <i className={`ti ti-${data.icon}`}></i>
                              <span>{data.menuValue}</span>
                              <span className="menu-arrow"></span>
                            </Link>
                            <ul
                              style={{
                                display:
                                  subOpen === data.menuValue ? "block" : "none",
                              }}
                            >
                              {data?.subMenus?.map((subMenu: any, j) => (
                                <li
                                  key={`submenu-${j}`}
                                  className={
                                    subMenu?.customSubmenuTwo ? "submenu" : ""
                                  }
                                >
                                  <Link
                                    to={subMenu?.route || "#"}
                                    className={`
                                      ${
                                        subMenu?.subMenusTwo
                                          ?.map((link: any) => link?.route)
                                          .includes(location.pathname) ||
                                        subMenu?.route === location.pathname
                                          ? "active"
                                          : ""
                                      } ${
                                        subsidebar === subMenu.menuValue
                                          ? "subdrop"
                                          : ""
                                      }`}
                                    onClick={() =>
                                      toggleSubsidebar(subMenu.menuValue)
                                    }
                                  >
                                    <span>{subMenu?.menuValue}</span>
                                    {subMenu?.customSubmenuTwo && (
                                      <span className="menu-arrow"></span>
                                    )}
                                  </Link>
                                  {subMenu?.customSubmenuTwo &&
                                    subMenu?.subMenusTwo && (
                                      <ul
                                        style={{
                                          display:
                                            subsidebar === subMenu.menuValue
                                              ? "block"
                                              : "none",
                                        }}
                                      >
                                        {subMenu.subMenusTwo.map(
                                          (subMenuTwo: any, k: number) => (
                                            <li key={`submenu-two-${k}`}>
                                              <Link
                                                className={
                                                  subMenuTwo.route ===
                                                  location.pathname
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
                                    )}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="me-1">
                <Link
                  to="#"
                  onClick={toggleFullscreen}
                  className="btn btn-menubar btnFullscreen"
                >
                  <i className="ti ti-maximize"></i>
                </Link>
              </div>

              
              <div className="dropdown profile-dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <span className="avatar avatar-sm online">
                    <img
                      src={userImage || "assets/img/profiles/avatar-12.jpg"}
                      alt="Profile"
                      className="img-fluid rounded-circle"
                    />
                  </span>
                </Link>
                <div className="dropdown-menu shadow-none">
                  <div className="card mb-0">
                    <div className="card-body">
                      <Link
                        className="dropdown-item d-inline-flex align-items-center p-0 py-2"
                        to={routes.profilesettings}
                      >
                        <i className="ti ti-user-circle me-1"></i>My Profile
                      </Link>
                      <Link
                        className="dropdown-item d-inline-flex align-items-center p-0 py-2"
                        to="/LoginUser"
                        onClick={handleLogout}
                      >
                        <i className="ti ti-login me-2"></i>Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown mobile-user-menu">
          <Link
            to="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to={routes.profile}>
              My Profile
            </Link>
            <Link className="dropdown-item" to={routes.profilesettings}>
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;