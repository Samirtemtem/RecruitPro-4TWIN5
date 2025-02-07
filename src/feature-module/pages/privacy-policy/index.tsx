import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const PrivacyPolicy = () => {
  const route = all_routes;

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Privacy Policy</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Pages</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Privacy Policy
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
            <div className="card-body">
              <div className="mb-3">
                <p>
                  At SmratHR, we value your privacy and are committed to protecting
                  your personal data. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you access our
                  HR admin platform. Please read this policy carefully.
                </p>
              </div>
              <div>
                <h5 className="mb-2">Information We Collect</h5>
                <p className="mb-2">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-styled mb-3">
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    <span className="fw-medium text-gray-9 me-1">
                      Employee Data :
                    </span>
                    Name, contact information, job title, department, payroll
                    details, and other employment-related data.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    <span className="fw-medium text-gray-9 me-1">
                      Login Information :
                    </span>
                    Username, password, IP address, and other access credentials.
                  </li>
                  <li className="d-flex align-items-baseline">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    <span className="fw-medium text-gray-9 me-1">
                      Usage Data :{" "}
                    </span>
                    Details about how the platform is used, including logs of
                    actions taken within the HR admin module
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2">How We Use Your Information</h5>
                <p className="mb-2">We may use the information we collect to:</p>
                <ul className="list-styled mb-3">
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Manage employee records and HR functions.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Process payroll and benefits administration.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Ensure the security and integrity of the platform.
                  </li>
                  <li className="d-flex align-items-baseline">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Generate reports and analytics to improve our services.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2">Sharing Your Information</h5>
                <p className="mb-2">
                  We will not sell or share your personal information with third
                  parties except:
                </p>
                <ul className="list-styled mb-3">
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    To authorized service providers who assist in our HR processes.
                  </li>
                  <li className="d-flex align-items-baseline">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    If required by law, such as in response to a court order or
                    legal obligation.
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Data Security</h5>
                <p className="mb-2">
                  We implement appropriate technical and organizational measures to
                  protect your personal data from unauthorized access, alteration,
                  or disclosure. However, no method of transmission over the
                  internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Data Retention</h5>
                <p className="mb-2">
                  We will retain your personal information for as long as necessary
                  to fulfill the purposes outlined in this policy, or as required by
                  law.
                </p>
              </div>
              <div>
                <h5 className="mb-2">Your Rights</h5>
                <p className="mb-2">
                  You may have the following rights concerning your personal data:
                </p>
                <ul className="list-styled mb-3">
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Access to your data.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Correction of inaccurate information.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Deletion of data where appropriate.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" />
                    Restriction of processing under certain circumstances.
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2">Changes to This Policy</h5>
                <p>
                  We may update this policy from time to time. The latest version
                  will always be available on the platform. Continued use of the HR
                  admin platform signifies your acceptance of any updates.
                </p>
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

export default PrivacyPolicy;
