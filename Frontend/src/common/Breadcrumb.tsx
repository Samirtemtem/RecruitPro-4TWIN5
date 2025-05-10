import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../routing-module/AuthContext";

interface BreadcrumbProps {
  title?: string;
  meta?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title = "", meta = "" }) => {
  const { profileData } = useContext(AuthContext);
  
  const greeting = profileData ? `Hello, ${profileData.firstName} ${profileData.lastName}!` : "Hello!";

  return (
    <section className="page-title">
      <div className="auto-container">
        <div className="title-outer">
          <h1>{title || greeting}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{meta}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;