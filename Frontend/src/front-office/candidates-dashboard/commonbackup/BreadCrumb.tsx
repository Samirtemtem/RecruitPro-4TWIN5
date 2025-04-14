import React from "react";
import "./BreadCrumb.css"; // We'll add this CSS file next

interface BreadCrumbProps {
  title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title }) => {
  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className="text">Ready to jump back in?</div>
    </div>
  );
};

export { BreadCrumb }; 