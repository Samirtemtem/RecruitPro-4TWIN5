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
                style={{ 
                  backgroundColor: activeTab === "login" ? '#D50000' : '#f5f5f5',
                  color: activeTab === "login" ? '#FFFFFF' : '#333333',
                  borderColor: '#D50000',
                  transition: 'all 0.3s ease'
                }}
              >
                Log In
              </button>
              <button
                className={`col-lg-6 col-md-12 theme-btn btn-style-four ${activeTab === "register" ? "active" : ""}`}
                onClick={() => setActiveTab("register")}
                style={{ 
                  backgroundColor: activeTab === "register" ? '#D50000' : '#f5f5f5',
                  color: activeTab === "register" ? '#FFFFFF' : '#333333',
                  borderColor: '#D50000',
                  transition: 'all 0.3s ease'
                }}
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
          <button 
            className="theme-btn btn-style-one" 
            type="submit"
            style={{ 
              backgroundColor: '#D50000', 
              borderColor: '#D50000',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#B50000';
              e.currentTarget.style.borderColor = '#B50000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#D50000';
              e.currentTarget.style.borderColor = '#D50000';
            }}
          >
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
          <button 
            className="theme-btn btn-style-one" 
            type="submit"
            style={{ 
              backgroundColor: '#D50000', 
              borderColor: '#D50000',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#B50000';
              e.currentTarget.style.borderColor = '#B50000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#D50000';
              e.currentTarget.style.borderColor = '#D50000';
            }}
          >
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
        <button 
          className="theme-btn social-btn-two facebook-btn"
          style={{ 
            borderColor: '#D50000',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#B50000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#D50000';
          }}
        >
          <i className="fab fa-facebook-f"></i> Log In via Facebook
        </button>
      </div>
      <div className="col-lg-6 col-md-12">
        <button 
          className="theme-btn social-btn-two google-btn"
          style={{ 
            borderColor: '#D50000',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#B50000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#D50000';
          }}
        >
          <i className="fab fa-google"></i> Log In via Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
