import React from "react";
import { all_routes } from "../../router/all_routes";
import { Link, useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const EmailVerification = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.login);
  };
  return (
    <div className="container-fuild">
      <div className="login-wrapper w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-6">
            <div className="login-background position-relative d-lg-flex align-items-center justify-content-center d-lg-block d-none flex-wrap vh-100 overflowy-auto">
              <div>
                <ImageWithBasePath
                  src="assets/img/authentication/authentication-01.jpg"
                  alt="Img"
                />
              </div>
              <div className="authen-overlay-item  w-100 p-4">
                <h4 className="text-white mb-3">What's New on Preskool !!!</h4>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Summer Vacation Holiday Homework</h6>
                    <p className="mb-0 text-truncate">
                      The school will remain closed from April 20th to June...
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>New Academic Session Admission Start(2024-25)</h6>
                    <p className="mb-0 text-truncate">
                      An academic term is a portion of an academic year, the
                      time ....
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Date sheet Final Exam Nursery to Sr.Kg</h6>
                    <p className="mb-0 text-truncate">
                      Dear Parents, As the final examination for the session
                      2024-25 is ...
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>
                <div className="d-flex align-items-center flex-row mb-3 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Annual Day Function</h6>
                    <p className="mb-0 text-truncate">
                      Annual functions provide a platform for students to
                      showcase their...
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>
                <div className="d-flex align-items-center flex-row mb-0 justify-content-between p-3 br-5 gap-3 card">
                  <div>
                    <h6>Summer Vacation Holiday Homework</h6>
                    <p className="mb-0 text-truncate">
                      The school will remain closed from April 20th to June 15th
                      for summer...
                    </p>
                  </div>
                  <Link to="#">
                    <i className="ti ti-chevrons-right" />
                  </Link>
                </div>
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
                          type="submit"
                          className="btn btn-primary w-100"
                          onClick={navigationPath}
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
  );
};

export default EmailVerification;
