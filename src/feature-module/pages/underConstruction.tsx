import React from "react";
import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/common/imageWithBasePath";

const UnderConstruction = () => {
  const routes = all_routes;
  return (
    <div className="container">
      <div>
        {/* Page Wrapper */}
        <div className="Page-wrapper">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 d-flex justify-content-center align-items-center mx-auto">
              <div>
                <div className="p-4 text-center">
                  <ImageWithBasePath src="assets/img/logo.svg" alt="logo" className="img-fluid" />
                </div>
                <div className="error-images mb-4">
                  <ImageWithBasePath
                    src="assets/img/bg/under-construction.svg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="text-center">
                  <h1 className="mb-3">Under Construction</h1>
                  <p className="fs-16 text-center">
                    We're currently upgrading our platform to serve you better{" "}
                    <br /> Stay tuned for exciting updates!
                  </p>
                  <div className="d-flex justify-content-center pb-4">
                    <Link
                      to={all_routes.adminDashboard}
                      className="btn btn-primary d-flex align-items-center "
                    >
                      <i className="ti ti-arrow-left me-2" />
                      Back to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </div>


  );
};

export default UnderConstruction;
