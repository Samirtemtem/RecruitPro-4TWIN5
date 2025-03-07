import React from "react";
import { Link } from "react-router-dom";
import "./MobileHeader.css";
import { all_routes } from "../../../routing-module/router/all_routes";
const MobileMenu: React.FC = () => {
  return (
    <header className="main-header main-header-mobile">
      <div className="auto-container">
        <div className="inner-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link to="/index">
                  <img src="/images/logo.svg" alt="brand" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <nav className="mobile-nav-outer">
                <ul className="navigation clearfix">
                  <li>
                    <Link to={all_routes.JobListFront}>
                      <i className="la la-briefcase"></i> Job Listing
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Dashboard Icon on the right */}
              <div className="dashboard-icon">
                <Link to={all_routes.IndexPage}>
                  <i className="la la-tachometer-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { MobileMenu };