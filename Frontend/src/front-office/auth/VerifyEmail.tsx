import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(10); // Countdown Timer

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        // Check if the token is missing
        if (!token) {
          setError("Missing verification token.");
          setLoading(false);
          return;
        }

        // Optional: Token format validation (e.g., if you know it's a JWT)
        if (!isValidTokenFormat(token)) {
          setError("Invalid token format.");
          setLoading(false);
          return;
        }

        // Call backend API to verify email
        const response = await axios.get(`http://localhost:5000/api/auth/verifyEmail?token=${token}`);
        console.log("after call verify from frontend");
        console.log(response.data); // Log the full response to inspect its structure
        console.log(response.data.message);
        setMessage(response.data.message); // Set success message
      } catch (error: unknown) {
        // Handle Axios error
        if (axios.isAxiosError(error)) {
          console.error("Axios Error:", error.response?.data);
          setError(error.response?.data?.message || "Failed to verify token.");
        } else {
          console.error("Unexpected error:", error);
          setError("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    verifyEmail();
  }, []); // Empty dependency array to run only once on mount

  // Optional: Validate token format (e.g., check for JWT structure)
  const isValidTokenFormat = (token: string) => {
    // Simple check for JWT structure (3 parts separated by dots)
    return token.split('.').length === 3;
  };

  // Countdown and automatic redirection
  useEffect(() => {
    if (!loading && message) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate(all_routes.LoginUser); // Redirect after countdown
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer on unmount
    }
  }, [loading, message, navigate]);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="col-lg-5 col-md-8 col-sm-10">
        <div className="login-form-wrapper">
          <div className="login-content text-center">
            <div className="card border-0 shadow p-4">
              <div className="card-body">
                {/* Logo */}
                <div className="mx-auto mb-4 text-center">
                  <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </div>

                {/* Verification Status */}
                <div className="text-center mb-4">
                  <h2 className="mb-3">Email Verification</h2>
                  <p className="text-muted">Verifying your email address...</p>
                </div>

                {/* Loading spinner */}
                {loading && (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {/* Success message */}
                {!loading && message && (
                  <div className="alert alert-success">{message}</div>
                )}

                {/* Error message */}
                {!loading && error && (
                  <div className="alert alert-danger">
                    {error}
                    <br />
                    {/* Provide manual redirection on error */}
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => navigate(all_routes.register)}
                    >
                      Go Back to Registration
                    </button>
                  </div>
                )}

                {/* Redirect Info */}
                {!loading && message && (
                  <div className="text-center mt-4">
                    <p className="text-muted">You will be redirected automatically.</p>
                    <p className="fw-bold text-primary">Redirecting in {countdown} seconds...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
