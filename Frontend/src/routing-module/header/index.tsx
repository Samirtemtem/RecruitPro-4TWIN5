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
import axios from 'axios';

// Add the glowing animation styles to the document head
const addGlowingStyles = () => {
  const styleId = 'notification-glow-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes glowing {
        0% { box-shadow: 0 0 5px #ff5722; }
        25% { box-shadow: 0 0 10px #ff5722, 0 0 15px #ff8a65; }
        50% { box-shadow: 0 0 15px #ff5722, 0 0 20px #ff8a65, 0 0 25px #ffab91; }
        75% { box-shadow: 0 0 10px #ff5722, 0 0 15px #ff8a65; }
        100% { box-shadow: 0 0 5px #ff5722; }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.15); opacity: 0.9; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .notification-pulse {
        animation: pulse 1.2s ease-in-out infinite;
        transition: all 0.3s ease;
      }
      
      .notification-bell {
        transition: all 0.3s ease;
      }
      
      .notification-bell:hover {
        transform: scale(1.1);
      }
      
      .notification-badge {
        position: absolute;
        top: -5px;
        right: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 18px;
        height: 18px;
        padding: 0 5px;
        font-size: 11px;
        font-weight: bold;
        border-radius: 10px;
        color: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
      }
      
      .notification-item-unread {
        background: rgba(255, 87, 34, 0.05);
        border-left: 3px solid #ff5722;
        transition: background-color 0.3s ease;
      }
      
      .notification-item-unread:hover {
        background: rgba(255, 87, 34, 0.1);
      }
      
      .notification-dropdown-menu {
        border-radius: 8px !important;
        overflow: hidden;
        box-shadow: 0 5px 25px rgba(0,0,0,0.15) !important;
        animation: fadeIn 0.3s ease-out;
        min-width: 320px !important;
      }
      
      .notification-fade-in {
        animation: fadeIn 0.5s ease-out;
      }
      
      .notification-header {
        background-color: #f8f9fa;
        border-bottom: 1px solid #e9ecef;
      }
      
      .notification-list {
        max-height: 350px;
        overflow-y: auto;
        scrollbar-width: thin;
      }
      
      .notification-list::-webkit-scrollbar {
        width: 6px;
      }
      
      .notification-list::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      .notification-list::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
      }
      
      .notification-list::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
      }
      
      .notification-item {
        transition: all 0.2s ease;
        border-bottom: 1px solid #f0f0f0;
      }
      
      .notification-item:hover {
        background-color: #f8f9fa;
      }
      
      .notification-icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgba(255, 87, 34, 0.1);
        color: #ff5722;
        margin-right: 12px;
      }
    `;
    document.head.appendChild(style);
  }
};

// Call the function to add styles
addGlowingStyles();



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

   const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [hasNewNotification, setHasNewNotification] = useState<boolean>(false);
  const [pulseEffect, setPulseEffect] = useState<boolean>(false);
  const { userId } = useContext(AuthContext);
  
  // Get userId from localStorage if not available in context
  const getUserId = () => {
    if (userId) return userId;
    return localStorage.getItem('userId');
  };

  // Fetch notifications and unread count
  useEffect(() => {
    const fetchNotifications = async () => {
      const currentUserId = getUserId();
      if (currentUserId) {
        try {
          // Fetch unread count first to detect changes
          const countResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/notifications/user/${currentUserId}/unread-count`);
          const newUnreadCount = countResponse.data.count;
          
          // If unread count increased, prepare to animate
          const countIncreased = newUnreadCount > unreadCount;
          
          // Fetch notifications
          const notifResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/notifications/user/${currentUserId}`);
          const newNotifications = notifResponse.data;
          
          // Update state
          setUnreadCount(newUnreadCount);
          setNotifications(newNotifications);
          
          // If count increased and it's not the first load (unreadCount is not 0), 
          // trigger the effects
          if (countIncreased && unreadCount !== 0) {
            console.log('New notification detected!');
            // Reset animations to ensure they trigger again even if already active
            setHasNewNotification(false);
            setPulseEffect(false);
            
            // Small delay before starting animations again
            setTimeout(() => {
              setHasNewNotification(true);
              setPulseEffect(true);
              
              // Reset glow effect after 5 seconds
              setTimeout(() => {
                setHasNewNotification(false);
              }, 5000);
              
              // Reset pulse effect after a bit longer
              setTimeout(() => {
                setPulseEffect(false);
              }, 8000);
            }, 50);
          }
        } catch (error) {
          console.error('Error fetching notifications:', error);
        }
      }
    };

    // Fetch immediately on component mount
    fetchNotifications();
    
    // Set up interval to check for new notifications every 15 seconds
    const intervalId = setInterval(fetchNotifications, 15000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [userId, unreadCount]);

  // Mark notification as read
  const handleNotificationClick = async (notificationId: string, link: string) => {
    try {
      await axios.patch(`http://localhost:5000/api/notifications/${notificationId}/read`);
      
      // Update notifications list
      setNotifications(prevNotifications => 
        prevNotifications.map(notif => 
          notif._id === notificationId 
            ? { ...notif, isRead: true } 
            : notif
        )
      );
      
      // Update unread count
      setUnreadCount(prevCount => Math.max(0, prevCount - 1));
      
      // Navigate to the link
      navigate(link);
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Mark all notifications as read
  const markAllAsRead = async () => {
    const currentUserId = getUserId();
    if (currentUserId) {
      try {
        await axios.patch(`http://localhost:5000/api/notifications/user/${currentUserId}/read-all`);
        
        // Update all notifications to read
        setNotifications(prevNotifications => 
          prevNotifications.map(notif => ({ ...notif, isRead: true }))
        );
        
        // Reset unread count and effects
        setUnreadCount(0);
        setHasNewNotification(false);
        setPulseEffect(false);
      } catch (error) {
        console.error('Error marking all notifications as read:', error);
      }
    }
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
                            <div className="dropdown notification-dropdown">
                <Link
                  to="#"
                  className={`dropdown-toggle btn btn-menubar position-relative me-1 ${pulseEffect ? 'notification-pulse' : ''}`}
                  data-bs-toggle="dropdown"
                  style={{
                    animation: hasNewNotification ? 'glowing 1.5s infinite' : 'none',
                    boxShadow: hasNewNotification ? '0 0 10px #ff5722' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="ti ti-bell notification-bell" style={{ 
                    color: unreadCount > 0 ? '#ff5722' : 'inherit' 
                  }}></i>
                  {unreadCount > 0 && (
                    <span className="badge rounded-pill bg-danger notification-badge">
                      {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                  )}
                </Link>
                <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu shadow-none">
                  <div className="card mb-0">
                    <div className="card-header notification-header d-flex justify-content-between align-items-center">
                      <h5 className="card-title mb-0">Notifications</h5>
                      {unreadCount > 0 && (
                        <button 
                          className="btn btn-sm btn-link text-decoration-none"
                          onClick={markAllAsRead}
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>
                    <div className="card-body p-0 notification-list">
                      {notifications.length === 0 ? (
                        <div className="text-center py-4">
                          <i className="ti ti-bell-off fs-1 text-muted"></i>
                          <p className="mt-2">No notifications</p>
                        </div>
                      ) : (
                        <ul className="list-group list-group-flush">
                          {notifications.map((notification, index) => (
                            <li 
                              key={notification._id} 
                              className={`list-group-item notification-item border-0 px-3 py-2 ${!notification.isRead ? 'notification-item-unread' : ''} ${index === 0 && !notification.isRead ? 'notification-fade-in' : ''}`}
                            >
                              <div 
                                className="d-flex align-items-center text-decoration-none"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleNotificationClick(notification._id, notification.link)}
                              >
                                <div className="notification-icon flex-shrink-0">
                                  <i className={`ti ti-message-circle ${!notification.isRead ? 'text-danger' : ''}`}></i>
                                </div>
                                <div className="flex-grow-1">
                                  <p className={`mb-1 ${!notification.isRead ? 'fw-bold' : ''}`}>{notification.text}</p>
                                  <small className="text-muted">
                                    {new Date(notification.createdAt).toLocaleString()}
                                  </small>
                                </div>
                                {!notification.isRead && (
                                  <div className="ms-2 d-flex align-items-center">
                                    <span className="badge bg-danger rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                                  </div>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
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