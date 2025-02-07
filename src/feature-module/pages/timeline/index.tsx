import React, { useState } from "react";
import { Link } from "react-router-dom";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const TimeLines = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Timeline</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="index.html">
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Pages</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Timeline
                  </li>
                </ol>
              </nav>
            </div>
            <div className="head-icons ms-2">
              <CollapseHeader />
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-body schedule-timeline">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center active-time">
                  <span className="timeline-date text-dark">24 Sep 2024</span>
                  <span className="timeline-border d-flex align-items-center justify-content-center bg-white">
                    <i className="ti ti-point-filled text-gray-2 fs-18" />
                  </span>
                </div>
                <div className="flex-fill ps-3 pb-4 timeline-hrline">
                  <div className="mt-4">
                    <p className="fw-medium text-gray-9 mb-1">Documentation</p>
                    <span>
                      Document system processes, policies, and procedures.
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center active-time">
                  <span className="timeline-date text-dark">20 Sep 2024</span>
                  <span className="timeline-border d-flex align-items-center justify-content-center bg-white">
                    <i className="ti ti-point-filled text-gray-2 fs-18" />
                  </span>
                </div>
                <div className="flex-fill ps-3 pb-4 timeline-hrline">
                  <div className="mt-4">
                    <p className="fw-medium text-gray-9 mb-1">
                      Testing and Quality Assurance
                    </p>
                    <span>
                      {" "}
                      Perform unit testing, integration testing, and user acceptance
                      testing
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center active-time">
                  <span className="timeline-date text-dark">10 Sep 2024</span>
                  <span className="timeline-border d-flex align-items-center justify-content-center bg-white">
                    <i className="ti ti-point-filled text-gray-2 fs-18" />
                  </span>
                </div>
                <div className="flex-fill ps-3 pb-4 timeline-hrline">
                  <div className="mt-4">
                    <p className="fw-medium text-gray-9 mb-1">
                      {" "}
                      System Design and Configuration
                    </p>
                    <span>Set up modules, workflows, and user roles</span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center active-time">
                  <span className="timeline-date text-dark">02 Sep 2024</span>
                  <span className="timeline-border d-flex align-items-center justify-content-center bg-white">
                    <i className="ti ti-point-filled text-gray-2 fs-18" />
                  </span>
                </div>
                <div className="flex-fill ps-3 pb-4 timeline-hrline">
                  <div className="mt-4">
                    <p className="fw-medium text-gray-9 mb-1">
                      Requirements Gathering
                    </p>
                    <span> Collect requirements from HR, IT, and end-users.</span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center active-time">
                  <span className="timeline-date text-dark">01 Sep 2024</span>
                  <span className="timeline-border d-flex align-items-center justify-content-center bg-white">
                    <i className="ti ti-point-filled text-gray-2 fs-18" />
                  </span>
                </div>
                <div className="flex-fill ps-3 pb-4 timeline-hrline">
                  <div className="mt-4">
                    <p className="fw-medium text-gray-9 mb-1">
                      Planning and Preparation
                    </p>
                    <span>
                      Identify objectives, deliverables, and stakeholders.
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-fill ps-3 pb-0 timeline-hrline" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>




  );
};

export default TimeLines;
