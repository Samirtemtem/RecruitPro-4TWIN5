import React from 'react';

const TermsText = () => {
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
        <h3 style={headingStyle}>1. Terms</h3>
        <p style={paragraphStyle}>
          By accessing or using RecruitPro, a recruitment platform developed for Esprit, an IT engineering school in Tunisia, you agree to be bound by these Terms of Use. RecruitPro leverages an Applicant Tracking System (ATS) and online interview scheduling to connect Esprit students, alumni, and employers for job opportunities, internships, and recruitment activities. These terms apply to all users, including students, alumni, recruiters, and administrators. Unauthorized use, including attempts to bypass the ATS or manipulate interview scheduling, may result in termination of access.
        </p>
        <p style={paragraphStyle}>
          You agree to provide accurate, complete, and up-to-date information when creating profiles, submitting applications, posting job opportunities, or scheduling interviews through RecruitPro. The ATS relies on accurate data to filter and match candidates with opportunities. Esprit and RecruitPro reserve the right to verify user information and suspend accounts that violate these terms. Users must comply with all applicable Tunisian laws and regulations while using the platform.
        </p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>2. Limitations</h3>
        <p style={paragraphStyle}>
          RecruitPro’s ATS and online interview scheduling features are designed exclusively for recruitment-related activities, such as job postings, candidate screening, application management, and scheduling interviews. Users are prohibited from using the platform for non-recruitment purposes, including spamming, unauthorized data scraping, or scheduling interviews for non-recruitment activities. Violations may lead to account suspension or legal action.
        </p>
        <p style={paragraphStyle}>
          While the ATS facilitates candidate filtering and matching, and the online scheduling tool streamlines interview coordination, RecruitPro does not guarantee job placements, interview outcomes, or the accuracy of user-provided information. Employers are responsible for verifying candidate qualifications, and candidates must confirm the legitimacy of job postings. RecruitPro and Esprit are not liable for disputes arising from interactions, transactions, or scheduled interviews facilitated through the platform.
        </p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>3. Revisions and Errata</h3>
        <p style={paragraphStyle}>
          The content and functionality of RecruitPro, including its ATS and online interview scheduling features, may contain errors or inaccuracies, such as incorrect job postings, profile data, or scheduling conflicts. Esprit and RecruitPro do not warrant that the platform is error-free or that all content is accurate or complete. We reserve the right to correct errors, inaccuracies, or omissions in the ATS, scheduling system, or other features without prior notice.
        </p>
        <p style={paragraphStyle}>
          RecruitPro may undergo updates to enhance the ATS, improve interview scheduling, or ensure compliance with regulations. Users will be notified of significant changes via email or platform announcements. Continued use of the platform after such revisions constitutes acceptance of the updated terms.
        </p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>4. Site Terms of Use Modifications</h3>
        <p style={paragraphStyle}>
          Esprit and RecruitPro reserve the right to modify these Terms of Use at any time to reflect changes in the ATS, online interview scheduling features, legal requirements, or operational needs. Modifications will be effective immediately upon posting on the RecruitPro platform or notification to users. It is your responsibility to review these terms periodically.
        </p>
        <p style={paragraphStyle}>
          If you do not agree with any modifications, you must discontinue using RecruitPro. Continued use after changes are posted constitutes your acceptance of the revised terms. For questions or concerns about these terms, please contact the Esprit recruitment office at [insert contact email or link].
        </p>
      </div>
    </>
  );
};

export default TermsText;