import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { all_routes } from "../feature-module/router/all_routes";

const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
//try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (token) {
          const response = await axios.get(`http://localhost:5000/api/auth/verify-email?token=${token}`);
          alert(response.data.message);
          navigate(all_routes.LoginUser); // Redirect to login after successful verification
        }
        else {
          alert("Invalid or expired token.");
          navigate(all_routes.register); // Redirect back to registration
        }
    //  } catch (error) {
   //     alert("Invalid or expired token.");
    //    navigate(all_routes.register); // Redirect back to registration
   //   }
    };

    verifyEmail();
  }, []);

  return <h2>Verifying your email...</h2>;
};

export default VerifyEmail;
