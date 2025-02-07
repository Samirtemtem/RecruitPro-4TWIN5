import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const TermsCondition = () => {
  const route = all_routes;

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Terms &amp; Conditions</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Pages</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Terms &amp; Conditions
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
            <div className="card-body pb-1">
              <div className="mb-3">
                <p>
                  Welcome to the Smart HR Admin platform. These terms and conditions
                  outline the rules and regulations for using our HR administrative
                  services. By accessing or using this platform, you agree to comply
                  with these terms. Please read them carefully.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Acceptance of Terms</h5>
                <p className="mb-2">
                  By using the HR Admin platform, you agree to be bound by these
                  Terms and Conditions and any additional guidelines, restrictions,
                  or rules that may apply to specific sections or services. If you
                  do not agree, please do not use this platform.
                </p>
              </div>
              <div>
                <h5 className="mb-2">User Responsibilities</h5>
                <p className="mb-2">
                  As an authorized user of the HR Admin platform, you agree to:
                </p>
                <ul className="list-styled mb-3">
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" /> Ensure the
                    confidentiality of your login credentials.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" /> Use the platform
                    solely for lawful HR administrative purposes.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" /> Not share or
                    disclose sensitive employee information unless authorized.
                  </li>
                  <li className="d-flex align-items-baseline">
                    <i className="ti ti-point-filled fs-10 me-1" /> Report any
                    security breaches or suspicious activity immediately.
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Platform Usage</h5>
                <p className="mb-2">
                  The HR Admin platform allows you to manage employee data, review
                  reports, process payroll, and perform other HR functions. You are
                  responsible for ensuring the accuracy and legality of all
                  information entered into the system.
                </p>
              </div>
              <div>
                <h5 className="mb-2">Restrictions</h5>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-styled mb-3">
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" /> Access the
                    platform for any unlawful purposes.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" /> Use the platform
                    to harass, defraud, or harm any individual or company.
                  </li>
                  <li className="d-flex align-items-baseline mb-2">
                    <i className="ti ti-point-filled fs-10 me-1" /> Reverse
                    engineer, decompile, or attempt to extract the source code of
                    the platform.
                  </li>
                  <li className="d-flex align-items-baseline">
                    <i className="ti ti-point-filled fs-10 me-1" /> Interfere with
                    the platform’s functionality or introduce malicious software.
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Intellectual Property</h5>
                <p className="mb-2">
                  All content, software, and intellectual property associated with
                  the platform are owned by SmartHR. You may not reproduce,
                  distribute, or create derivative works from any materials on the
                  platform without prior written consent.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Termination</h5>
                <p className="mb-2">
                  We reserve the right to suspend or terminate your access to the
                  platform at any time, without notice, if you violate these terms
                  or engage in any unauthorized activity.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Disclaimer of Warranties</h5>
                <p>
                  The HR Admin platform is provided on an "as is" and "as available"
                  basis. We do not guarantee that the platform will be error-free,
                  uninterrupted, or free of security vulnerabilities. We disclaim
                  all warranties, express or implied, including but not limited to
                  the implied warranties of merchantability, fitness for a
                  particular purpose, and non-infringement.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Limitation of Liability</h5>
                <p>
                  In no event shall SmartHR be liable for any direct, indirect,
                  incidental, special, or consequential damages resulting from the
                  use or inability to use the platform, even if we have been advised
                  of the possibility of such damages.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Modifications to Terms</h5>
                <p>
                  We may modify these Terms and Conditions at any time by updating
                  this page. Continued use of the platform following any changes
                  constitutes acceptance of the revised terms.
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

export default TermsCondition;
