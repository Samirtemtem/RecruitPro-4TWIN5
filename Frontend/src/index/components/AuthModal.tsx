import React, { useState } from "react";

const AuthModal = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="modal fade" id="authModal">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <button type="button" className="closed-modal" data-bs-dismiss="modal"></button>
          <div className="modal-body">
            <div className="btn-box row">
              <button
                className={`col-lg-6 col-md-12 theme-btn btn-style-four ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Log In
              </button>
              <button
                className={`col-lg-6 col-md-12 theme-btn btn-style-four ${activeTab === "register" ? "active" : ""}`}
                onClick={() => setActiveTab("register")}
              >
                Sign Up
              </button>
            </div>

            {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className="form-inner">
      <h3>Login to Superio</h3>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit">
            Log In
          </button>
        </div>
      </form>
      <LoginWithSocial />
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className="form-inner">
      <h3>Create a Free Superio Account</h3>
      <form>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit">
            Register
          </button>
        </div>
      </form>
      <LoginWithSocial />
    </div>
  );
};

const LoginWithSocial = () => {
  return (
    <div className="btn-box row">
      <div className="col-lg-6 col-md-12">
        <button className="theme-btn social-btn-two facebook-btn">
          <i className="fab fa-facebook-f"></i> Log In via Facebook
        </button>
      </div>
      <div className="col-lg-6 col-md-12">
        <button className="theme-btn social-btn-two google-btn">
          <i className="fab fa-google"></i> Log In via Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
