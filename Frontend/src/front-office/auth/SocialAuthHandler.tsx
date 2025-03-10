import { useEffect, useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import { AuthContext } from "../../routing-module/AuthContext"; // Import AuthContext

const SocialAuthHandler = () => {
  const navigate = useNavigate();
  const { setToken, setRole } = useContext(AuthContext); 
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userRole = params.get("role");

    if (token && userRole) {
      // Store token and role in AuthContext
      setToken(token);
      setRole(userRole);

      // Persist token and role in sessionStorage for session
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userRole", userRole);

    // Delay the navigation and show loading spinner
    setTimeout(() => {
      // Optional: Add a short delay for user experience enhancement (e.g., animation or loading spinner)
        if (userRole === "ADMIN") {
          navigate(all_routes.adminDashboard);
        } else if (userRole === "CANDIDATE") {
          navigate(all_routes.DashboardCandidate);
        } else {
          navigate(all_routes.LoginUser);
        }
        setLoading(false); // Set loading to false after the navigation
      }, 2000); // 2 seconds delay (you can adjust this as needed)
    } 
    else {
      navigate(all_routes.LoginUser); // Redirect to login if token or role is missing
    }
  }, [navigate, setToken, setRole]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      {loading && <div className="spinner"></div>} {/* Spinner while loading */}
    </div>
  );
};


export default SocialAuthHandler;
