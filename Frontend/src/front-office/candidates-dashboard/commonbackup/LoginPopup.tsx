import React, { useState } from "react";

const LoginPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="login-popup-wrapper" style={{ display: isVisible ? 'block' : 'none' }}>
      <div className="modal-popup-box">
        <div className="modal-popup-inner">
          <div className="modal-popup-header">
            <h3>Login to your account</h3>
            <button onClick={() => setIsVisible(false)} className="close-btn"><span className="la la-times"></span></button>
          </div>
          <div className="modal-popup-body">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <div className="remember-me">
                <label>
                  <input type="checkbox" name="remember" /> Remember Me
                </label>
                <a href="#" onClick={(e) => e.preventDefault()} className="forgot-pass">Forgot Password?</a>
              </div>
            </div>
            <div className="form-group">
              <button className="theme-btn btn-style-one" type="button">Login</button>
            </div>
            <div className="form-group">
              <div className="account-link">
                Don't have an account? <a href="#" onClick={(e) => e.preventDefault()}>Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginPopup }; 