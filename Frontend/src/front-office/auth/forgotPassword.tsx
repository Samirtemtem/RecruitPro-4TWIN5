import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath"; 
import axios from "axios";
import DefaulHeader2 from "../../common/Header";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/forgotpassword", { email });

      setMessage(data.message);
      //setTimeout(() => navigate(all_routes.LoginUser), 2000); // Redirection après succès
    } catch (err: any) {
      setError(err.response?.data?.message || "Une erreur s'est produite.");
    }
  };

  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
  <div className="col-lg-6 col-md-8 col-sm-10">
    <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow">
      <div className="text-center mb-4">
        <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
      </div>
      <h2 className="mb-3 text-center">Forgot Password?</h2>
      <p className="mb-4 text-center">
        If you forgot your password, we’ll email you instructions to reset it.
      </p>
      {message && <p className="text-success text-center">{message}</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <div className="input-group">
          <input
            type="email"
            className="form-control border-end-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="input-group-text border-start-0">
            <i className="ti ti-mail" />
          </span>
        </div>
      </div>
      <div className="mb-4">
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </div>
      <div className="text-center">
        <h6 className="fw-normal text-dark mb-0">
          Return to{" "}
          <Link to={all_routes.LoginUser} className="hover-a">
            Sign In
          </Link>
        </h6>
      </div>
      <div className="mt-4 text-center">
        <p className="mb-0 text-gray-9">Copyright © 2025 - RECRUITPRO</p>
      </div>
    </form>
  </div>
</div>
      

  );
};

export default ForgotPassword;