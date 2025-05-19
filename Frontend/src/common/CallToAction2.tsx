import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CallToAction2 = () => {
   const { t } = useTranslation();

  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>{t("CallToAction2.Your Dream Jobs Are Waiting")}</h2>
          <div className="text">
             {t("CallToAction2.Over 1 million interactions")}
          </div>
        </div>

        <div className="btn-box">
          <Link to="/JobListFront" className="theme-btn btn-style-three">
            {t("CallToAction2.Search Job")}
          </Link>
          <Link to="/register" className="theme-btn btn-style-two">
            {t("CallToAction2.Apply Job Now")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
