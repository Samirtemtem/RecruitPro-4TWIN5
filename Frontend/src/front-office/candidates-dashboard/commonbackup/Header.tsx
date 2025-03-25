import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { candidatesMenuData } from "./data";
import "./MobileHeader.css";
import "./Header.css";

const Header: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // Helper function to check if a route is active
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Header Span for spacing */}
      
      {/* Main Header */}
      <header
        className={`main-header header-shaddow ${
          navbar ? "fixed-header" : ""
        }`}
      >
        <div className="container-fluid">
          {/* Main box */}
          <div className="main-box">
            {/* Nav Outer */}
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img
                      alt="brand"
                      src="/images/logo.svg"
                      width={154}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
              {/* End .logo-box */}

              {/* Main Menu */}
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  <li className={`dropdown ${location.pathname === "/" ? "current" : ""}`}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={`dropdown ${location.pathname.includes("/candidates-dashboard") && !location.pathname.includes("/shortlisted-jobs") && !location.pathname.includes("/my-profile") ? "current" : ""}`}>
                    <Link to="/candidates-dashboard">Dashboard</Link>
                  </li>
                  <li className={`dropdown ${location.pathname.includes("/candidates-dashboard/shortlisted-jobs") ? "current" : ""}`}>
                    <Link to="/candidates-dashboard/shortlisted-jobs">Shortlisted Jobs</Link>
                  </li>
                  <li className={`dropdown ${location.pathname.includes("/candidates-dashboard/my-profile") ? "current" : ""}`}>
                    <Link to="/candidates-dashboard/my-profile">My Profile</Link>
                  </li>
                </ul>
              </nav>
              {/* End Main Menu */}
            </div>
            {/* End .nav-outer */}

            <div className="outer-box">
              <button className="menu-btn">
                <span className="count">1</span>
                <span className="icon la la-heart-o"></span>
              </button>
              {/* wishlisted menu */}

              <button className="menu-btn">
                <span className="icon la la-bell"></span>
              </button>
              {/* End notification-icon */}

              {/* Dashboard Option */}
              <div className="dropdown dashboard-option">
                <a
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="avatar"
                    className="thumb"
                    src="/images/resource/candidate-1.png"
                    width={50}
                    height={50}
                  />
                  <span className="name">My Account</span>
                </a>

                <ul className="dropdown-menu">
                  {candidatesMenuData.map((item) => (
                    <li
                      className={`${
                        isActiveLink(item.routePath) ? "active" : ""
                      } mb-1`}
                      key={item.id}
                    >
                      <Link to={item.routePath}>
                        <i className={`la ${item.icon}`}></i>{" "}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End dropdown */}
            </div>
            {/* End outer-box */}
          </div>
        </div>
      </header>
    </>
  );
};

export { Header }; 