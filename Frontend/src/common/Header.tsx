import { Context, useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "./data/mainMenuData";


import { AuthContext } from "../routing-module/AuthContext"; // Adjust the path as needed



import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { all_routes } from "../routing-module/router/all_routes";

import { isActiveParent, isActiveLink } from "./utils/linkActiveChecker";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

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
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language.toUpperCase()); // Initialize with current language

  // Handle logout
  const handleLogout = () => {


    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/LoginUser", { replace: true });
  };

  // Language change handler
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase()); // Update language in i18next
    localStorage.setItem("language", language.toLowerCase()); // Persist language
  };

  // Sync language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage.toUpperCase());
    }
  }, [i18n]);

  const candidatesMenuData: MenuItem[] = [
    { id: 11, name: t("Logout"), icon: "la-sign-out", action: handleLogout },
  ];

  const changeBackground = () => {
    setNavbar(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const menuGroups = [
    { title: t("RECRUITPRO"), path: "/" },
    { title: t("JOB POSTS"), path: "/JobListFront" },
    { title: t("ABOUT US"), path: "/AboutUs" },
    { title: t("CONTACT"), path: "/Contact" },
    { title: t("TERMS"), path: "/Terms" },

  ];
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
    <header
      className={`d-none d-md-block main-header ${navbar ? "fixed-header animated slideInDown" : ""}`}
      style={{ background: "#FFFFFF", color: "#FFFFFF" }}
    >
      {/* Red Top Bar */}
      <div
        style={{
          backgroundColor: "#D50000",
          color: "#FFFFFF",
          padding: "5px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span>📞 (+216) 70 250 000</span>
        <span>✉️ contact@esprit.tn</span>
        <span>{t("Admission")}</span>
        <div>
          <span style={{ margin: "0 5px" }}>🔵</span>
          <span style={{ margin: "0 5px" }}>🔴</span>
          <span style={{ margin: "0 5px" }}>⚪</span>
        </div>
        {/* Language Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label={t("Select Language")}
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
              padding: "2px 10px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = "#D50000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            {selectedLanguage} 🌐
          </button>
          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleLanguageChange("EN")}
              >
                {t("English")}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleLanguageChange("FR")}
              >
                {t("French")}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Box with Logo and Navigation */}
      <div className="main-box" style={{ background: "#FFFFFF", color: "#FFFFFF" }}>

        <div className="nav-outer">
          <div className="logo-box">
            <a href="/" className="logo">
              <img src="/LogoEsprit2.png" width={154} height={50} alt="brand" />


            </a>
          </div>

          <nav className="nav main-menu">
            <ul className="navigation" style={{ color: "#FFFFFF" }}>
              {menuGroups.map((menuGroup, index) => (
                <li key={index} className="">
                  <span
                    style={{
                      color: "#000000",
                      padding: "10px",
                      transition: "color 0.3s",
                    }}
                    onClick={() => navigate(menuGroup.path)}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#FFC0C0")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#000000")}
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
            <div className="dropdown dashboard-option">
              <div className="d-flex align-items-center">
                <img
                  src="/images/dashicone.png"
                  alt="Dashboard"
                  width={60}
                  height={60}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                  onClick={() => navigate(getHomePath())}
                />
                <a
                  className="dropdown-toggle"
                  role="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer", display: "flex", alignItems: "center", border: "none" }}
                >
                  <img
                    alt="avatar"
                    className="thumb"
                    src={user?.image}
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </a>
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
                {t("Login / Register")}
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;