import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import CommonTextEditor from "../../../core/common/textEditor";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
const routes = all_routes;
const InvoiceSettings = () => {
  const options1 = [
    { value: "5", label: "5" },
    { value: "7", label: "7" },
  ];

  const options2 = [
    { value: "roundoff-up", label: "Roundoff Up" },
    { value: "roundoff-down", label: "Roundoff Down" },
  ];
  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Breadcrumb */}
            <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
              <div className="my-auto mb-2">
                <h2 className="mb-1">Settings</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>
                        <i className="ti ti-smart-home" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item">Administration</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Settings
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="head-icons ms-2">
              <CollapseHeader />
              </div>
            </div>
            {/* /Breadcrumb */}
            <ul className="nav nav-tabs nav-tabs-solid bg-transparent border-bottom mb-3">
              <li className="nav-item">
                <Link className="nav-link" to={routes.profilesettings}>
                  <i className="ti ti-settings me-2" />
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.bussinessSettings}>
                  <i className="ti ti-world-cog me-2" />
                  Website Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={routes.salarySettings}>
                  <i className="ti ti-device-ipad-horizontal-cog me-2" />
                  App Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.emailSettings}>
                  <i className="ti ti-server-cog me-2" />
                  System Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.paymentGateways}>
                  <i className="ti ti-settings-dollar me-2" />
                  Financial Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.customCss}>
                  <i className="ti ti-settings-2 me-2" />
                  Other Settings
                </Link>
              </li>
            </ul>
            <div className="row">
              <div className="col-xl-3 theiaStickySidebar">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column list-group settings-list">
                      <Link
                        to={routes.salarySettings}
                        className="d-inline-flex align-items-center rounded  py-2 px-3"
                      >
                        Profile Settings
                      </Link>
                      <Link
                        to={routes.approvalSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Approval Settings
                      </Link>
                      <Link
                        to={routes.invoiceSettings}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Invoice Settings
                      </Link>
                      <Link
                        to={routes.leaveType}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Leave Type
                      </Link>
                      <Link
                        to={routes.customFields}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Custom Fields
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Invoice Settings</h4>
                    </div>
                    <form>
                      <div className="border-bottom mb-3">
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <div className="row">
                                <div className=" col-md-3">
                                  <div className="mb-3">
                                    <h6>Invoice Logo</h6>
                                  </div>
                                </div>
                                <div className=" col-md-9">
                                  <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                    <div className="d-flex align-items-center justify-content-center og-upload bg-white rounded border border-dashed me-2 flex-shrink-0 text-dark frames">
                                      <i className="ti ti-photo text-gray-3 fs-16" />
                                    </div>
                                    <div className="profile-upload">
                                      <div className="mb-2">
                                        <h6 className="mb-1">Logo</h6>
                                        <p className="fs-12">
                                          Recommended image size is 40px x 40px
                                        </p>
                                      </div>
                                      <div className="profile-uploader d-flex align-items-center">
                                        <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                          Upload
                                          <input
                                            type="file"
                                            className="form-control image-sign"
                                            multiple
                                          />
                                        </div>
                                        <Link
                                          to="#"
                                          className="btn btn-light btn-sm"
                                        >
                                          Cancel
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row align-items-center">
                                <div className=" col-md-3">
                                  <div className="mb-3">
                                    <h6>Invoice Prefix</h6>
                                  </div>
                                </div>
                                <div className=" col-md-5">
                                  <div className="mb-3">
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div className="row align-items-center">
                                <div className="col-md-3">
                                  <div className="mb-3">
                                    <h6>Invoice Due</h6>
                                  </div>
                                </div>
                                <div className=" col-md-5">
                                  <div className="mb-3">
                                    <CommonSelect
                                      className="select"
                                      options={options1}
                                    />
                                  </div>
                                </div>
                                <div className=" col-md-5">
                                  <h6 className="mb-3">Days</h6>
                                </div>
                              </div>
                              <div className="row align-items-center">
                                <div className=" col-md-3">
                                  <div className="mb-3 d-flex">
                                    <h6>Invoice Round Off</h6>
                                  </div>
                                </div>
                                <div className=" col-md-5">
                                  <div className="mb-3">
                                    <CommonSelect
                                      className="select"
                                      options={options2}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="flexSwitchCheckDefault"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-3">
                                  <div className="mb-3 d-flex">
                                    <h6>Show Company Details</h6>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="mb-3">
                                    <div className="form-check form-switch">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckDefault2"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row align-items-center">
                                <div className="col-md-3">
                                  <div className="mb-3">
                                    <h6>Invoice Terms</h6>
                                  </div>
                                </div>
                                <div className="col-md-9">
                                  <div className="mb-3">
                                  <CommonTextEditor />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-light border me-3"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
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

    </div>
  );
};

export default InvoiceSettings;
