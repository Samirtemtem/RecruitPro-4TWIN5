import React from "react";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";

const TicketsSidebar = () => {
  return (
    <div className="col-xl-4 col-xxl-3 theiaStickySidebar">
      <div className="stickybar">
        <div className="card">
          <div className="card-header p-3">
            <h4>Ticket Categories</h4>
          </div>
          <div className="card-body p-0">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#">Internet Issue</Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-danger me-2">2</span>
                  <span className="badge bg-primary-transparent">0</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#">Computer</Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-danger me-2">2</span>
                  <span className="badge bg-primary-transparent">1</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#">Redistribute</Link>
                <div className="d-flex align-items-center">
                  <span className="badge bg-primary-transparent">1</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#">Payment</Link>
                <div className="d-flex align-items-center">
                  <span className="badge bg-primary-transparent">2</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3">
                <Link to="#">Complaint</Link>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-danger me-2">3</span>
                  <span className="badge bg-primary-transparent">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-0">
          <div className="card-header p-3">
            <h4>Support Agents</h4>
          </div>
          <div className="card-body p-0">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <span className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/teachers/teacher-03.jpg"
                    className="avatar avatar-xs rounded-circle me-2"
                    alt="img"
                  />
                  Hellana
                </span>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-danger me-2">2</span>
                  <span className="badge bg-primary-transparent">0</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <span className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/teachers/teacher-01.jpg"
                    className="avatar avatar-xs rounded-circle me-2"
                    alt="img"
                  />
                  Teresa
                </span>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-danger me-2">2</span>
                  <span className="badge bg-primary-transparent">1</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <span className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/teachers/teacher-02.jpg"
                    className="avatar avatar-xs rounded-circle me-2"
                    alt="img"
                  />
                  Daniel
                </span>
                <div className="d-flex align-items-center">
                  <span className="badge bg-primary-transparent">1</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3">
                <span className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/teachers/teacher-07.jpg"
                    className="avatar avatar-xs rounded-circle me-2"
                    alt="img"
                  />
                  Willie
                </span>
                <div className="d-flex align-items-center">
                  <span className="badge bg-primary-transparent">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsSidebar;
