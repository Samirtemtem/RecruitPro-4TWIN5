import React from 'react';
import { useNavigate } from 'react-router-dom';
import Seo from './Seo';
const NotAuthorized = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo pageTitle="Not Authorized" />
      <div className="not-authorized-page">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-8 text-center">
              <div className="error-content">
                <div className="error-icon">
                  <i className="las la-lock"></i>
                </div>
                <h1>403</h1>
                <h2>Access Denied</h2>
                <p>Sorry, you don't have permission to access this page.</p>
                <div className="error-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/')}
                  >
                    <span className="txt">Return to Homepage</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .not-authorized-page {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
          }

          .container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .error-content {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
          }

          .error-icon {
            font-size: 64px;
            color: #ef4444;
            margin-bottom: 20px;
          }

          .error-content h1 {
            font-size: 72px;
            font-weight: 700;
            color: #ef4444;
            margin-bottom: 10px;
            line-height: 1;
          }

          .error-content h2 {
            font-size: 24px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 15px;
          }

          .error-content p {
            font-size: 16px;
            color: #6b7280;
            margin-bottom: 30px;
          }

          .error-actions {
            margin-top: 30px;
          }

          .theme-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 30px;
            background-color: #4f46e5;
            color: white;
            border: none;
            border-radius: 4px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .theme-btn:hover {
            background-color: #4338ca;
          }

          @media (max-width: 768px) {
            .error-content {
              padding: 30px 20px;
              margin: 20px;
            }

            .error-content h1 {
              font-size: 48px;
            }

            .error-content h2 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default NotAuthorized;