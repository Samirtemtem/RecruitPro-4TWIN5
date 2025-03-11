import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "./data/mainMenuData";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../routing-module/AuthContext"; // Adjust the path as needed



import { FaHome, FaSignOutAlt } from "react-icons/fa";

import {all_routes} from "../routing-module/router/all_routes";
import { isActiveParent, isActiveLink } from "./utils/linkActiveChecker";

// Define the interface for menu items
interface MenuItem {
  id: number;
  name: string;
  routePath?: string; // Optional because logout won't have a route
  action?: () => void; // New property for actions like logout
  icon?: string;
  items?: MenuItem[];
  title?: string;
}

interface NavItemProps {
  title: string;
  items: MenuItem[];
  currentPath: string;
}

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { token, role, logout, user } = useContext(AuthContext);

    //////////////////////////////////////////////////handel logout////////////////////////////////////////////////////////////////
    const navigate = useNavigate();
    const location = useLocation();
   // const { logout } = useContext(AuthContext); // Get logout from context
  
    const handleLogout = () => {
  
    // Call the logout function from AuthContext to clear token and role
    logout();
    // clear the token and role from localStorage
    sessionStorage.removeItem('token'); // Clear token
    sessionStorage.removeItem('userRole'); // Clear token
  
      navigate('/LoginUser', { replace: true }); // Redirect to login page
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
    const candidatesMenuData: MenuItem[] = [
    /*  { id: 1, name: "Dashboard", icon: "la-home", routePath: "/candidates-dashboard/dashboard" },
      { id: 2, name: "My Profile", icon: "la-user-tie", routePath: "/candidates-dashboard/my-profile" },
      { id: 3, name: "My Resume", icon: "la la-file-invoice", routePath: "/candidates-dashboard/my-resume" },
      { id: 4, name: "Applied Jobs", icon: "la-briefcase", routePath: "/candidates-dashboard/applied-jobs" },
      { id: 5, name: "Job Alerts", icon: "la la-bell", routePath: "/candidates-dashboard/job-alerts" },
      { id: 6, name: "Shortlisted Jobs", icon: "la-bookmark-o", routePath: "/candidates-dashboard/shortlisted-jobs" },*/
    //  { id: 7, name: "CV Manager", icon: "la la-file-invoice", routePath: "/candidates-dashboard/cv-manager" },
     // { id: 8, name: "Packages", icon: "la-box", routePath: "/candidates-dashboard/packages" },
     // { id: 9, name: "Messages", icon: "la-comment-o", routePath: "/candidates-dashboard/messages" },
      //{ id: 10, name: "Change Password", icon: "la-lock", routePath: "/candidates-dashboard/change-password" },
      { id: 11, name: "Logout", icon: "la-sign-out", action: handleLogout },
     // { id: 12, name: "Delete Profile", icon: "la-trash", routePath: "/" },
    ];

  const changeBackground = () => {
    setNavbar(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  

  const menuGroups = [
    { title: "Home", path: "/" },
    { title: "Find Jobs", path: "/JobListFront" },
   // { title: "Employers", path: "/employers" },
   // { title: "Candidates", path: "/candidates" },
    { title: "Abouts Us", path: "/AboutUs" },
    { title: "Contact", path: "/Contact" },
    { title: "Terms", path: "/Terms" },
    
  ];

    // Function to determine the home path based on role
    const getHomePath = () => {
      switch (role) {
        case "RH":
          return "/DashboardRH";
        case "CANDIDATE":
          return "/DashboardCandidate";
        default:
          return "/";
      }
    };


  return (
    <>
    <header className={`main-header ${navbar ? "fixed-header animated slideInDown" : ""}`} /*style={{ background: 'linear-gradient(to right, #D50000, #A00000)', color: '#FFFFFF' }}*/
      style={{background:'FFFFFF', color:'#FFFFFF'}}> 

      {/* Red Top Bar */}
      <div style={{ 
                  backgroundColor: "#D50000", 
                  color: "#FFFFFF", 
                  padding: "5px 20px", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  gap: "20px" 
                }}>
        <span>📞 (+216) 70 250 000</span>
        <span>✉️ contact@esprit.tn</span>
        <span>🎓 Admission</span>
        <div>
          <span style={{ margin: "0 5px" }}>🔵</span>
          <span style={{ margin: "0 5px" }}>🔴</span>
          <span style={{ margin: "0 5px" }}>⚪</span>
        </div>
      </div>
      {/* Main Box with Logo and Navigation */}
      <div className="main-box" style={{background:'FFFFFF', color:'#FFFFFF'}}>
        {/* Left Section (Logo and Navigation) */}
        <div className="nav-outer">
          <div className="logo-box">
            <a href="/" className="logo">
             {/*  <img src="/LogoEsprit2.png" alt="brand" /> */}
             <img src="/RecruitPro.png" width={154}
                      height={50} alt="brand" />
            </a>
          </div>

          <nav className="nav main-menu">
            <ul className="navigation" style={{ color: '#FFFFFF' }}>
              {menuGroups.map((menuGroup, index) => (
                <li key={index} className="">
                  <span 
                    style={{ 
                      color: '#000000', 
                      padding: '10px', 
                      transition: 'color 0.3s' 
                    }} 
                    onClick={() => navigate(menuGroup.path)}
                    onMouseOver={(e) => e.currentTarget.style.color = '#FFC0C0'} 
                    onMouseOut={(e) => e.currentTarget.style.color = '#000000'}
                  >
                    {menuGroup.title}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Section (Login/Profile) */}
        <div className="outer-box">
        {token ? (
          // If user is logged in, show user dropdown
          <div className="dropdown dashboard-option">
            <div className="d-flex align-items-center">

              {/* Dashboard Icon (Image) */}
              <img
                src="/images/dashicone.png"
                alt="Dashboard"
                width={60}
                height={60}
                style={{ cursor: "pointer", marginRight: "10px" }}
                onClick={() => navigate(getHomePath())}
              />            

              {/* Profile Image (Dropdown Toggle) */}
              <a
                className="dropdown-toggle"
                role="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                //style={{ cursor: "pointer" }}
                style={{ cursor: "pointer", display: "flex", alignItems: "center", border: "none" }}
              >
                <img
                  alt="avatar"
                  className="thumb"
                  src={user?.image || "/images/default-avatar.jpg"}
                  width={50}
                  height={50}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover" // Make sure the image covers the area properly
                  }}
                />
              </a>

              {/* Dropdown Menu */}
              <ul className="dropdown-menu" aria-labelledby="userDropdown">
                {candidatesMenuData.map((item) => (
                  <li key={item.id}>
                    <Link to="#" onClick={item.action} className="dropdown-item">
                      <i className={`la ${item.icon}`}></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>
          
        ) : (
            // If user is NOT logged in, show login/register buttons
            <>
              <a
                href="/LoginUser"
                className="theme-btn btn-style-one"
                style={{
                  backgroundColor: "#ff9e9e",
                  color: "#D50000",
                  borderColor: "#FFFFFF",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#D50000";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff9e9e";
                  e.currentTarget.style.color = "#D50000";
                }}
              >
                Login / Register
              </a>
              {/*
              <a
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-one"
                style={{
                  backgroundColor: "#ff9e9e",
                  color: "#D50000",
                  borderColor: "#FFFFFF",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#D50000";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff9e9e";
                  e.currentTarget.style.color = "#D50000";
                }}
              >
                Job Post
              </a>
               */}
            </>
          )}
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
