import { useEffect, useState } from "react";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../data/mainMenuData";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    setNavbar(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const menuGroups = [
    { title: "Home", items: homeItems },
    { title: "Find Jobs", items: findJobItems },
    { title: "Employers", items: employerItems },
    { title: "Candidates", items: candidateItems },
    { title: "Blog", items: blogItems },
    { title: "Pages", items: pageItems },
    { title: "Shop", items: shopItems },
  ];

  // Type guards to check the structure of the items
  const isParentItem = (item: any): item is { id: number; items: { name: string; routePath: string }[] } => {
    return "id" in item && "items" in item;
  };

  return (
    <header className={`main-header ${navbar ? "fixed-header animated slideInDown" : ""}`}>
      <div className="main-box">
        <div className="nav-outer">
          <div className="logo-box">
            <a href="/" className="logo">
              <img src="/images/logo.svg" alt="brand" />
            </a>
          </div>

          <nav className="nav main-menu">
            <ul className="navigation">
              {menuGroups.map((menuGroup, index) => (
                <li key={index} className="dropdown">
                  <span>{menuGroup.title}</span>
                  <ul>
                    {menuGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="dropdown">
                        {/* Check if it's a parent item or a single link */}
                        <span>{isParentItem(item) ? `Category ${item.id}` : item.name}</span>

                        {/* If it's a parent item, render its sub-items */}
                        {isParentItem(item) && (
                          <ul>
                            {item.items.map((menu, i) => (
                              <li key={i}>
                                <a href={menu.routePath}>{menu.name}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="outer-box">
          <a href="/LoginUser" className="theme-btn btn-style-three call-modal"  >
            Login / Register
          </a>
          <a href="/employers-dashboard/post-jobs" className="theme-btn btn-style-one">
            Job Post
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
