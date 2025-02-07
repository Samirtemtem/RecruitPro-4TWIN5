import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const ForgotPassword3 = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.resetPassword3);
  };

  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
          <div className="col-md-4 mx-auto vh-100">
            <form action="email-verification-3.html" className="vh-100">
              <div className="vh-100 d-flex flex-column justify-content-between p-4 pb-0">
                <div className=" mx-auto mb-5 text-center">
                  <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </div>
                <div className="">
                  <div className="text-center mb-3">
                    <h2 className="mb-2">Forgot Password?</h2>
                    <p className="mb-0">
                      If you forgot your password, well, then we’ll email you
                      instructions to reset your password.
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <div className="input-group">
                      <input
                        type="text"
                        defaultValue=""
                        className="form-control border-end-0"
                      />
                      <span className="input-group-text border-start-0">
                        <i className="ti ti-mail" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button type="submit" onClick={navigationPath} className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                  <div className="text-center">
                    <h6 className="fw-normal text-dark mb-0">
                      Return to
                      <Link to={routes.login3} className="hover-a">
                        {" "}
                        Sign In{" "}
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="mt-5 pb-4 text-center">
                  <p className="mb-0 text-gray-9">Copyright © 2024 - Smarthr</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ForgotPassword3;
