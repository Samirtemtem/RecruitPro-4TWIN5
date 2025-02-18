import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../feature-module/router/all_routes";
import ImageWithBasePath from "../common/imageWithBasePath";

const CallerDetails = () => {
 
  return (
    <div className="modal fade" id="call_history">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <div className="d-flex align-items-center">
            <h4 className="modal-title">Caller Details</h4>
          </div>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="call-history.html">
          <div className="modal-body">
            <div className="card bg-light-500">
              <div className="card-body">
                <div className="text-center">
                  <div className="avatar avatar-xxxl mb-3">
                    <ImageWithBasePath
                      src="assets/img/users/user-32.jpg"
                      alt="img"
                      className="rounded-circle"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                 <Link
                    to={all_routes.videoCall}
                    className="btn btn-gray call-item p-0 d-flex align-items-center justify-content-center me-3"
                  >
                    <i className="ti ti-video fs-20" />
                  </Link>
                 <Link
                    to={all_routes.chart}
                    className="btn btn-gray call-item p-0 d-flex align-items-center justify-content-center me-3"
                  >
                    <i className="ti ti-message fs-20" />
                  </Link>
                 <Link
                    to={all_routes.voiceCall}
                    className="btn btn-gray call-item p-0 d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-phone fs-20" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div>
                  <p className="mb-1">Name</p>
                  <h6 className="fw-medium">Anthony Lewis</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p className="mb-1">Total Calls</p>
                  <h6 className="fw-medium">20</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p className="mb-1">Phone</p>
                  <h6 className="fw-medium">(123) 4567 890</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p className="mb-1">Average Call Timing</p>
                  <h6 className="fw-medium">00:30</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p className="mb-1">Email</p>
                  <h6 className="fw-medium">anthony@example.com</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p className="mb-1">Average Waiting Time</p>
                  <h6 className="fw-medium">00:05</h6>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  

  );
};

export default CallerDetails;

