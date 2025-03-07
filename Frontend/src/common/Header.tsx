import { useEffect, useState } from "react";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../index/data/mainMenuData";

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
      <div className="main-box">
        <div className="nav-outer">
          <div className="logo-box">
            <a href="/" className="logo">
              <img src="/images/LogoEsprit2.png" alt="brand" />
            </a>
          </div>

          <nav className="nav main-menu">
            <ul className="navigation" style={{ color: '#FFFFFF' }}>
              {menuGroups.map((menuGroup, index) => (
                <li key={index} className="dropdown">
                  <span 
                    style={{ 
                      color: '#000000', 
                      padding: '10px', 
                      transition: 'color 0.3s' 
                    }} 
                    onMouseOver={(e) => e.currentTarget.style.color = '#FFC0C0'} 
                    onMouseOut={(e) => e.currentTarget.style.color = '#000000'}
                  >
                    {menuGroup.title}
                  </span>
                  <ul style={{ color: '#000000' }}>
                    {menuGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="dropdown">
                        <span style={{ color: '#000000', padding: '10px', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#D50000'} onMouseOut={(e) => e.currentTarget.style.color = '#000000'}>{isParentItem(item) ? `Category ${item.id}` : item.name}</span>
                        {isParentItem(item) && (
                          <ul style={{ color: '#000000' }}>
                            {item.items.map((menu, i) => (
                              <li key={i}>
                                <a 
                                  href={menu.routePath} 
                                  style={{ color: '#000000', transition: 'color 0.3s ease' }} 
                                  onMouseOver={(e) => e.currentTarget.style.color = '#D50000'} 
                                  onMouseOut={(e) => e.currentTarget.style.color = '#000000'}
                                >
                                  {menu.name}
                                </a>
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
          <a 
            href="/LoginUser" 
            //className="theme-btn btn-style-three call-modal" 
            className="theme-btn btn-style-one" 
            style={{ 
              backgroundColor: '#FFFFFF', 
              color: '#D50000', 
              borderColor: '#FFFFFF',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#D50000';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#D50000';
            }}
          >
            Login / Register
          </a>
          <a 
            href="/employers-dashboard/post-jobs" 
            className="theme-btn btn-style-one" 
            style={{ 
              backgroundColor: '#FFFFFF', 
              color: '#D50000', 
              borderColor: '#FFFFFF',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#D50000';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#D50000';
            }}
          >
            Job Post
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
