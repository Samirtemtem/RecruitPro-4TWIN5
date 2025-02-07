import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const EmailVerification2 = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.login2);
  };
  return (
    <>
      <div className="container-fuild">
        <div className="login-wrapper w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-lg-flex align-items-center justify-content-center bg-light-300 d-lg-block d-none flex-wrap vh-100 overflowy-auto bg-01">
                <div>
                  <ImageWithBasePath
                    src="assets/img/authentication/authentication-10.svg"
                    alt="Img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                <div className="col-md-9 mx-auto p-4">
                  <form>
                    <div>
                      <div className=" mx-auto mb-5 text-center">
                        <ImageWithBasePath
                          src="assets/img/authentication/authentication-logo.svg"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </div>
                      <div className="card">
                        <div className="card-body p-4">
                          <div className=" mb-3">
                            <h2 className="mb-2 text-center">
                              Verify your Email
                            </h2>
                            <p className="mb-0 text-center">
                              We've sent a link to your email ter4@example.com.
                              Please follow the link inside to continue
                            </p>
                          </div>
                          <div className="text-center mb-3">
                            <h6 className="fw-normal text-dark mb-0">
                              Didn’t receive an email?
                              <Link to="#" className="hover-a ">
                                {" "}
                                Resend Link
                              </Link>
                            </h6>
                          </div>
                          <button
                            onClick={navigationPath}
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            Skip Now
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 text-center">
                        <p className="mb-0 ">Copyright © 2024 - Preskool</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification2;
