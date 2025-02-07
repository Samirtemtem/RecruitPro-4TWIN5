import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const IncomingCall = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content pb-4">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Incoming Call</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Incoming Call
                  </li>
                </ol>
              </nav>
            </div>
            <div className="ms-2 head-icons">
              <CollapseHeader />
            </div>
          </div>
          <div className="row">
            {/* Call */}
            <div className="col-xxl-12">
              <div className="card incoming-call mb-0">
                <div className="card-body text-center d-flex flex-column justify-content-center">
                  <div className="call-img mb-3">
                    <ImageWithBasePath
                      src="assets/img/users/user-32.jpg"
                      className="img-fluid rounded-circle"
                      alt="img"
                    />
                  </div>
                  <h4 className="display-4">Anthony Lewis</h4>
                  <p>Calling...</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-success call-item p-0 d-flex align-items-center justify-content-center me-3"
                    >
                      <i className="ti ti-phone fs-20" />
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-danger call-item p-0 d-flex align-items-center justify-content-center"
                    >
                      <i className="ti ti-phone-off fs-20" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Call */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>


  );
};

export default IncomingCall;
