import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Footer = ({ footerStyle = "" }) => {
    const { t } = useTranslation(); // Initialize translation hook
    
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];

  const footerContent = [
    {
      id: 1,
      title: "Company",
      menuList: [
        { name: "About Us", route: "/about" },
        { name: "Contact", route: "/contact" },
        { name: "Careers", route: "/careers" },
      ],
    },
    {
      id: 2,
      title: "Resources",
      menuList: [
        { name: "Blog", route: "/blog" },
        { name: "Help Center", route: "/help" },
        { name: "Privacy Policy", route: "/privacy" },
      ],
    },
  ];

  return (
    <footer className={`main-footer ${footerStyle}`} style={{ background: 'linear-gradient(to right, #D50000, #A00000)' }}>
      {/* Footer Content (Commented Out) */}
      {/*
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            {footerContent.map((item) => (
              <div className="footer-column col-lg-3 col-md-6 col-sm-12" key={item.id}>
                <div className="footer-widget">
                  <h4 style={{ color: '#FFFFFF' }}>{t(item.title)}</h4>
                  <ul className="list-style-two">
                    {item.menuList.map((menu, index) => (
                      <li key={index}>
                        <Link
                          to={menu.route}
                          style={{ color: '#FFFFFF', transition: 'color 0.3s' }}
                          onMouseOver={(e) => e.currentTarget.style.color = '#FFD700'}
                          onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
                        >
                          {t(menu.name)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      */}
      

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="outer-box">
            <div className="copyright-text" style={{ color: '#FFFFFF' }}>
              © {new Date().getFullYear()} {t("RECRUITPRO")} by{" "}
              <span>
                {t("Infinite Loopers")}


              </span>
              . {t("All Rights Reserved")}
            </div>
            <div className="social-links">
              {socialContent.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                  style={{ color: '#FFFFFF', transition: 'color 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#FFD700'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  aria-label={t(`Social ${item.icon.replace("fa-", "")}`)}
                >
                  <i className={`fab ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
