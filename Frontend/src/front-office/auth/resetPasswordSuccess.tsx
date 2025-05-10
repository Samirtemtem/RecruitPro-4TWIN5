import React from 'react'
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath"; 

const ResetPasswordSuccess = () => {
  const routes = all_routes;
  const navigation = useNavigate();
  const navigationPath = () => {
    navigation(routes.LoginUser);
  };
  return (
 
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    <div className="col-lg-7 col-md-10 col-sm-12">
      <form className="p-4 bg-light rounded shadow">
        <div className="d-flex flex-column">
          <div className="mx-auto mb-5 text-center">
            <ImageWithBasePath
              src="assets/img/logo.svg"
              className="img-fluid"
              alt="Logo"
            />
          </div>
          <div className="text-center mb-3">
            <ImageWithBasePath
              src="assets/img/icons/success-tick.svg"
              alt="icon"
              className="img-fluid mb-3"
            />
            <h2 className="mb-2">Success</h2>
            <p className="mb-0">
              Your new password has been successfully saved.
            </p>
          </div>
          <div className="mb-3">
            <button 
              type="button" 
              onClick={navigationPath} 
              className="btn btn-primary w-100"
            >
              Back to Sign In
            </button>
          </div>
          <div className="mt-5 pb-4 text-center">
            <p className="mb-0 text-gray-9">Copyright © 2025 - RECRUITPRO</p>
          </div>
        </div>
      </form>
    </div>
  </div>
  
    

  )
}

export default ResetPasswordSuccess