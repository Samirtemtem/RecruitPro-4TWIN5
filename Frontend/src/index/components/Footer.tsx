import { Link } from "react-router-dom";

const Footer = ({ footerStyle = "" }) => {
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
    <footer className={`main-footer ${footerStyle}`}>
      <div className="auto-container">
        {/* Footer Widgets Section */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            {/* Footer Left - About Widget */}
            <div className="big-column col-xl-4 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo.svg" alt="brand" />
                  </Link>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="tel:1234567890">123 456 7890</a>
                </p>
                <p className="address">
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                  <br />
                  <a href="mailto:support@superio.com" className="email">
                    support@superio.com
                  </a>
                </p>
              </div>
            </div>

            {/* Footer Right - Links */}
            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                {footerContent.map((item) => (
                  <div
                    className="footer-column col-lg-3 col-md-6 col-sm-12"
                    key={item.id}
                  >
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">{item.title}</h4>
                      <div className="widget-content">
                        <ul className="list">
                          {item?.menuList?.map((menu, i) => (
                            <li key={i}>
                              <Link to={menu.route}>{menu.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="outer-box">
            <div className="copyright-text">
              © {new Date().getFullYear()} Superio by{" "}
              <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noopener noreferrer"
              >
                ib-themes
              </a>
              . All Rights Reserved.
            </div>
            <div className="social-links">
              {socialContent.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
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
