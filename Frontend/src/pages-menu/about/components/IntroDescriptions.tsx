import { useTranslation } from "react-i18next";

const IntroDescriptions = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h4
        style={{
          fontSize: "30px",
          fontWeight: "500",
          marginBottom: "31px",
          color: "#202124",
        }}
      >
        {t("IntroDescriptions.About RECRUIT PRO")}
      </h4>
      <p
        style={{
          fontSize: "15px",
          lineHeight: "26px",
          marginBottom: "26px",
          color: "#696969",
        }}
      >
        {t("IntroDescriptions.Description")}
      </p>
    </div>
  );
};

export default IntroDescriptions;