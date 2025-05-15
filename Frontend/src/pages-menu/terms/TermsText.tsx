import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsText = () => {
  const { t } = useTranslation();

  const textBoxStyle = {
    marginTop: "20px",
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "30px",
    fontWeight: "500",
    marginBottom: "31px",
    color: "#202124",
  };

  const paragraphStyle = {
    fontSize: "15px",
    lineHeight: "26px",
    marginBottom: "26px",
    color: "#696969",
  };

  return (
    <>
      <div style={textBoxStyle}>
        <h3 style={headingStyle}>{t('TermsText.Terms.Heading')}</h3>
        <p style={paragraphStyle}>{t('TermsText.Terms.Paragraph1')}</p>
        <p style={paragraphStyle}>{t('TermsText.Terms.Paragraph2')}</p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>{t('TermsText.Limitations.Heading')}</h3>
        <p style={paragraphStyle}>{t('TermsText.Limitations.Paragraph1')}</p>
        <p style={paragraphStyle}>{t('TermsText.Limitations.Paragraph2')}</p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>{t('TermsText.Revisions.Heading')}</h3>
        <p style={paragraphStyle}>{t('TermsText.Revisions.Paragraph1')}</p>
        <p style={paragraphStyle}>{t('TermsText.Revisions.Paragraph2')}</p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>{t('TermsText.Modifications.Heading')}</h3>
        <p style={paragraphStyle}>{t('TermsText.Modifications.Paragraph1')}</p>
        <p style={paragraphStyle}>{t('TermsText.Modifications.Paragraph2')}</p>
      </div>
    </>
  );
};

export default TermsText;