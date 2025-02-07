import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const EmailVerification3 = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.login3);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 mx-auto">
            <form>
              <div className="d-flex flex-column justify-content-between vh-100">
                <div className=" mx-auto p-4 text-center">
                  <ImageWithBasePath
                    src="assets/img/authentication/authentication-logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="card">
                  <div className="card-body p-4">
                    <div className=" mb-3">
                      <h2 className="mb-2 text-center">Verify your Email</h2>
                      <p className="mb-0 text-center">
                        We've sent a link to your email ter4@example.com. Please
                        follow the link inside to continue
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
                    <button type="submit" className="btn btn-primary w-100" onClick={navigationPath}>
                      Skip Now
                    </button>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="mb-0 ">Copyright © 2024 - Preskool</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerification3;
