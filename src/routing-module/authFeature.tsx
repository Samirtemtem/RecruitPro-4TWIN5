import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const AuthFeature = () => {
  const location = useLocation();
  const layoutPages = location.pathname === "/coming-soon" ||location.pathname === "/under-maintenance" ||location.pathname === "/under-construction";

  return (
    <div className={`bg-linear-gradiant ${layoutPages ? "d-flex align-items-center justify-content-center" : ""}`}>
      <div className="main-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthFeature;
