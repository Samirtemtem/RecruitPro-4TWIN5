import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../../../common/data/mainMenuData";
import {all_routes} from "../../../../routing-module/router/all_routes";
import { isActiveParent, isActiveLink } from "../../../../common/utils/linkActiveChecker";
// Import the necessary hooks for handeling logout //////////////////
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../routing-module/AuthContext"; // Adjust path
////////////////////////////////////////////////////////////////////

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



const DashboardCandidatesHeader = () => {

  //////////////////////////////////////////////////handel logout////////////////////////////////////////////////////////////////
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext); // Get logout from context

  const handleLogout = () => {

  // Call the logout function from AuthContext to clear token and role
  logout();
  // clear the token and role from localStorage
  localStorage.removeItem('token'); // Clear token
  localStorage.removeItem('userRole'); // Clear token

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

  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 0);
    };
    
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <header className={`main-header header-shaddow ${navbar ? "fixed-header" : ""}`}>
      <div className="container-fluid">
        <div className="main-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link to="/">
                  <img alt="brand" src="/assets/img/Logooo.png" width={154} height={50} />
                </Link>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="nav main-menu">
              <ul className="navigation" id="navbar">
                 <li className={location.pathname === "/" ? "current" : ""}>
                  <Link to={all_routes.candidatesDashboard}>Home</Link>
                </li>
                <li className={location.pathname === "/" ? "current" : ""}>
                  <Link to={all_routes.JobListFront}>Job Listings</Link>
                </li>
                {/*<NavItem title="Home" items={homeItems} currentPath={location.pathname} />
                <NavItem title="Find Jobs" items={findJobItems} currentPath={location.pathname} />
                <NavItem title="Employers" items={employerItems} currentPath={location.pathname} />
                <NavItem title="Candidates" items={candidateItems} currentPath={location.pathname} />
                <NavItem title="Blog" items={blogItems} currentPath={location.pathname} />
                <NavItem title="Pages" items={[...shopItems, ...pageItems]} currentPath={location.pathname} />*/}
              </ul>
            </nav>
          </div>

          <div className="outer-box">
            <button className="menu-btn">
              <span className="count">1</span>
              <span className="icon la la-heart-o"></span>
            </button>

            <button className="menu-btn">
              <span className="icon la la-bell"></span>
            </button>

            {/* User Dropdown */}
            <div className="dropdown dashboard-option">
              <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img alt="avatar" className="thumb" src="/images/resource/candidate-1.png" width={50} height={50} />
                <span className="name">My Account</span>
              </a>

              
              <ul className="dropdown-menu">
                {candidatesMenuData.map((item) => (
                  <li className={`${isActiveLink(item.routePath, location.pathname) ? "active" : ""} mb-1`} key={item.id}>
                    {item.action ? (
                      <Link to="#" onClick={item.action} className="btn btn-link"> {/* Added the class for consistent styling */}
                        <i className={`la ${item.icon}`}></i> {item.name}
                      </Link>
                    ) : (
                      <Link to={item.routePath || "#"}> {/* Fallback to "#" if routePath is undefined */}
                        <i className={`la ${item.icon}`}></i> {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Reusable NavItem Component
const NavItem: React.FC<NavItemProps> = ({ title, items, currentPath }) => {
  return (
    <li className={`${isActiveParent(items, currentPath) ? "current" : ""} dropdown`}>
      <span>{title}</span>
      <div className="mega-menu">
        <div className="mega-menu-bar row pt-0">
          {items.map((item) => (
            <div className="column col-lg-3 col-md-3 col-sm-12" key={item.id}>
              {item.title && <h3>{item.title}</h3>}
              {item.items && (
                <ul>
                  {item.items.map((menu) => (
                    <li className={isActiveLink(menu.routePath, currentPath) ? "current" : ""} key={menu.id}>
                      <Link to={menu.routePath || "#"}>{menu.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default DashboardCandidatesHeader;
