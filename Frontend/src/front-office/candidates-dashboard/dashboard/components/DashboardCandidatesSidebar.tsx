import { Link, useLocation } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import candidatesuData from "../../data/candidatesMenuData";
import candidatesuData from "../../../../common/data/candidatesMenuData";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../../../common/utils/toggleSlice";
import { isActiveLink } from "../../../../common/utils/linkActiveChecker";
//import { RootState } from "../../../store"; // Import the correct state type
//import { store } from "../src/job-listing/utils/store";
import { RootState } from "../utils/RootState";



const DashboardCandidatesSidebar = () => {
  const { menu } = useSelector((state: RootState) => state.toggle);
  const percentage = 30;
  const dispatch = useDispatch();
  const location = useLocation(); // Get current route

  // Menu toggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  // Function to check active link
  const isActiveLink = (path: string) => location.pathname === path;

  return (
    

    
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      {/* Spacer to push content down */}
      <div
        style={{
          height: "55px", // Adjust this to match your header's height
        }}
      ></div>
      {/* Sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>

      <div className="sidebar-inner">
        <ul className="navigation">
          {candidatesuData.map((item) => (
            <li
              className={`${isActiveLink(item.routePath) ? "active" : ""} mb-1`}
              key={item.id}
              onClick={menuToggleHandler}
            >
              <Link to={item.routePath}>
                <i className={`la ${item.icon}`}></i> {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Skills Percentage */}
      
      </div>
    </div>
  );
};

export default DashboardCandidatesSidebar;
