import React, { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
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

  return (
    // <!-- Main Header-->
    <header className={`main-header ${navbar ? "fixed-header animated slideInDown" : ""}`}>
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <a href="/">
                <img src="/images/logo.svg" alt="brand" />
              </a>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
              href="#"
              className="theme-btn btn-style-three call-modal"
              data-bs-toggle="modal"
              data-bs-target="#loginPopupModal"
            >
              Login / Register
            </a>
            <a href="/employers-dashboard/post-jobs" className="theme-btn btn-style-one">
              Job Post
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;