import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import { profilecity, profilesel, profilestate } from "../../../core/common/selectoption/selectoption";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const Profilesettings = () => {
  const routes = all_routes;
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
                <Link className="nav-link active" to={routes.profilesettings}>
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
                <Link className="nav-link" to={routes.salarySettings}>
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
                        to={routes.profilesettings}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Profile Settings
                      </Link>
                      <Link
                        to={routes.securitysettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Security Settings
                      </Link>
                      <Link
                        to={routes.notificationssettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Notifications
                      </Link>
                      <Link
                        to={routes.connectedApps}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Connected Apps
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Profile Settings</h4>
                    </div>
                    <form>
                      <div className="border-bottom mb-3">
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <h6 className="mb-3">Basic Information</h6>
                              <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                  <i className="ti ti-photo text-gray-3 fs-16" />
                                </div>
                                <div className="profile-upload">
                                  <div className="mb-2">
                                    <h6 className="mb-1">Profile Photo</h6>
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
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">
                                  First Name
                                </label>
                              </div>
                              <div className="col-md-8">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">
                                  Last Name
                                </label>
                              </div>
                              <div className="col-md-8">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">Email</label>
                              </div>
                              <div className="col-md-8">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">Phone</label>
                              </div>
                              <div className="col-md-8">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="mb-3">Address Information</h6>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-2">
                                <label className="form-label mb-md-0">Address</label>
                              </div>
                              <div className="col-md-10">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">Country</label>
                              </div>
                              <div className="col-md-8">
                                <div>
                                  <CommonSelect
                                    className="select"
                                    options={profilesel}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">State</label>
                              </div>
                              <div className="col-md-8">
                                <div>
                                  <CommonSelect
                                    className="select"
                                    options={profilestate}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">City</label>
                              </div>
                              <div className="col-md-8">
                                <CommonSelect
                                  className="select"
                                  options={profilecity}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-4">
                                <label className="form-label mb-md-0">
                                  Postal Code
                                </label>
                              </div>
                              <div className="col-md-8">
                                <input type="text" className="form-control" />
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
  )
}


export default Profilesettings;
