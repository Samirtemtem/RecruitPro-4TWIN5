import React from "react";

const CopyrightFooter: React.FC = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Superio by{" "}
        <a
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          RecruitPro
        </a>
        . All Rights Reserved.
      </p>
    </div>
  );
};

export { CopyrightFooter }; 