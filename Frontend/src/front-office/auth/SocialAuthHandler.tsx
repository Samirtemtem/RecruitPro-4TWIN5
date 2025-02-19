import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SocialAuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token); // Directly store token in localStorage
      navigate("/UserHome", { replace: true }); // Redirect to home
    } else {
      navigate("/loginuser", { replace: true }); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default SocialAuthHandler;
