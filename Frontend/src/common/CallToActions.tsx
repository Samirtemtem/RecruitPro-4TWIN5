import React from 'react';
import { useTranslation } from "react-i18next";
// If you're using CSS modules or an external stylesheet, import it like this:
// import './CallToActions.css'; 

const CallToActions = () => {
  const { t } = useTranslation();

  return (
    <div className="call-to-action-four">
      <h5>{t("CallToAction.Find Your Dream Job")}</h5>
      <p>{t("CallToAction.Explore exciting opportunities")}</p>
      <a href="#" className="theme-btn btn-style-one bg-blue">
        <span className="btn-title">{t("CallToAction.Start Your Journey Now")}</span>
      </a>
      <div
        className="image"
        style={{ backgroundImage: "url(/images/resource/ads-bg-4.png)" }}
      ></div>
    </div>
  );
};

export default CallToActions;