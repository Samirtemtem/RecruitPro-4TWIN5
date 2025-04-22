import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BreadCrumb } from "./BreadCrumb";
import { MenuToggler } from "./MenuToggler";
import { CopyrightFooter } from "./CopyrightFooter";
import MobileMenu from "../../../common/MobileMenu";
import { LoginPopup } from "./LoginPopup";

interface AuthFeatureFrontProps {
  children: ReactNode;
  title?: string;
}

const AuthFeatureFront: React.FC<AuthFeatureFrontProps> = ({ 
  children, 
  title = "Dashboard" 
}) => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      
      {/* Main Header */}
      <Header />
      {/* End Main Header */}

      <MobileMenu />
      {/* End Mobile Menu */}

      {/* End Login Popup */}

      {/* Sidebar Backdrop */}
      <div className="sidebar-backdrop"></div>

      {/* User Sidebar */}
      <Sidebar />
      {/* End User Sidebar */}

      {/* Dashboard */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title={title} />
          {/* Breadcrumb */}
          <MenuToggler />
          {/* Toggle Button */}

          {children}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* End Dashboard */}

      <CopyrightFooter />
      {/* End Copyright */}
    </div>
  );
};

export { AuthFeatureFront }; 