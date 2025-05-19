import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const About = () => {
   const { t } = useTranslation(); // Initialize translation hook

  return (
    <>
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>{t("Hundred of Jobs")}</h2>
            <div className="text">{t("Search all the open positions")}</div>
          </div>
          <ul className="list-style-one">
            <li>{t("Bring to the table win-win survival")}</li>
            <li>{t("Capitalize on low hanging fruit")}</li>
            <li>{t("But I must explain to you")}</li>
          </ul>
          <Link
            to="/register"
            className="theme-btn btn-style-one"
            style={{
              backgroundColor: "#D50000",
              borderColor: "#D50000",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#B50000";
              e.currentTarget.style.borderColor = "#B50000";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#D50000";
              e.currentTarget.style.borderColor = "#D50000";
            }}
            aria-label={t("Get Started")}
          >
            <span className="btn-title">{t("Get Started")}</span>
          </Link>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <img src="/images/resource/imagee.jpg" alt={t("About Image")} />
        </figure>

        {/* Count Employers */}
        <div className="count-employers" data-aos="flip-right">
          <div className="check-box">
            <span className="flaticon-tick"></span>
          </div>
          <span className="title">{t("300k+ Employers")}</span>
          <figure className="image">
            <img src="/images/resource/Logooo.png" alt={t("Resource Logo")} />
          </figure>
        </div>
      </div>
      {/* Image Column */}
    </>
  );
};

export default About;
