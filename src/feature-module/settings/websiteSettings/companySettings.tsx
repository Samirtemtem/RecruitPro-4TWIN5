import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CompanySettings = () => {
  const routes = all_routes;
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-md-flex d-block align-items-center justify-content-between border-bottom pb-3">
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Website Settings</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="index">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Settings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Website Settings
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <div className="pe-1 mb-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Refresh</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn btn-outline-light bg-white btn-icon me-1"
                  >
                    <i className="ti ti-refresh" />
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-2 col-xl-3">
              <div className="pt-3 d-flex flex-column list-group mb-4">
                <Link
                  to={routes.companySettings}
                  className="d-block rounded p-2 active"
                >
                  Company Settings
                </Link>
                <Link to={routes.localization} className="d-block rounded p-2">
                  Localization
                </Link>
                <Link to={routes.prefixes} className="d-block rounded p-2">
                  Prefixes
                </Link>
                <Link to={routes.preference} className="d-block rounded p-2">
                  Preferences
                </Link>
                <Link
                  to={routes.socialAuthentication}
                  className="d-block rounded p-2"
                >
                  Social Authentication
                </Link>
                <Link to={routes.language} className="d-block rounded p-2">
                  Language
                </Link>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-9">
              <div className="flex-fill border-start ps-3">
                <form>
                  <div className="d-flex align-items-center justify-content-between flex-wrap border-bottom pt-3 mb-3">
                    <div className="mb-3">
                      <h5>Company Settings</h5>
                      <p>Provide your company information</p>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-light me-2" type="button">
                        Cancel
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                  <div className="d-md-flex d-block">
                    <div className="flex-fill">
                      <div className="card">
                        <div className="card-header">
                          <h5>Company Information</h5>
                        </div>
                        <div className="card-body pb-0">
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">Company Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Name"
                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">Phone Number</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone Number"
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Company Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                            />
                          </div>
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">Fax Number</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Fax Number"
                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">Website</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Website"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <h5>Address Information</h5>
                        </div>
                        <div className="card-body pb-0">
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address"
                            />
                          </div>
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">Country</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Country"
                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">
                                State / Province
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter State"
                              />
                            </div>
                          </div>
                          <div className="d-block d-xl-flex">
                            <div className="mb-3 flex-fill me-xl-3 me-0">
                              <label className="form-label">City</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="City"
                              />
                            </div>
                            <div className="mb-3 flex-fill">
                              <label className="form-label">Postal Code</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Postal Code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="settings-right-sidebar ms-md-3">
                      <div className="card">
                        <div className="card-header">
                          <h5>Company Images</h5>
                        </div>
                        <div className="card-body">
                          <div className="border-bottom mb-3 pb-3">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-xl border rounded d-flex align-items-center justify-content-center p-2 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/logo-small.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Logo</h5>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="text-primary border rounded fs-16 p-1 badge badge-primary-hover me-2"
                                >
                                  <i className="ti ti-edit-circle" />
                                </Link>
                                <Link
                                  to="#"
                                  className="text-danger border rounded fs-16 p-1 badge badge-danger-hover"
                                >
                                  <i className="ti ti-trash-x" />
                                </Link>
                              </div>
                            </div>
                            <div className="profile-uploader profile-uploader-two mb-0">
                              <span className="d-block text-center lh-1 fs-24 mb-1">
                                <i className="ti ti-upload" />
                              </span>
                              <div className="drag-upload-btn bg-transparent me-0 border-0">
                                <p className="fs-12 mb-2">
                                  <span className="text-primary">
                                    Click to Upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <h6>JPG or PNG</h6>
                                <h6>(Max 450 x 450 px)</h6>
                              </div>
                              <input
                                type="file"
                                className="form-control image-sign"
                                multiple
                              />
                              <div className="frames" />
                            </div>
                          </div>
                          <div className="border-bottom mb-3 pb-3">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-xl border rounded d-flex align-items-center justify-content-center p-2 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/logo-small.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Favicon</h5>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="text-primary border rounded fs-16 p-1 badge badge-primary-hover me-2"
                                >
                                  <i className="ti ti-edit-circle" />
                                </Link>
                                <Link
                                  to="#"
                                  className="text-danger border rounded fs-16 p-1 badge badge-danger-hover"
                                >
                                  <i className="ti ti-trash-x" />
                                </Link>
                              </div>
                            </div>
                            <div className="profile-uploader profile-uploader-two mb-0">
                              <span className="d-block text-center lh-1 fs-24 mb-1">
                                <i className="ti ti-upload" />
                              </span>
                              <div className="drag-upload-btn bg-transparent me-0 border-0">
                                <p className="fs-12 mb-2">
                                  <span className="text-primary">
                                    Click to Upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <h6>JPG or PNG</h6>
                                <h6>(Max 450 x 450 px)</h6>
                              </div>
                              <input
                                type="file"
                                className="form-control"
                                multiple
                                id="image_sign2"
                              />
                              <div id="frames2" />
                            </div>
                          </div>
                          <div className="border-bottom mb-3 pb-3">
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-xl border rounded d-flex align-items-center justify-content-center p-2 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/logo-small.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Icon</h5>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="text-primary border rounded fs-16 p-1 badge badge-primary-hover me-2"
                                >
                                  <i className="ti ti-edit-circle" />
                                </Link>
                                <Link
                                  to="#"
                                  className="text-danger border rounded fs-16 p-1 badge badge-danger-hover"
                                >
                                  <i className="ti ti-trash-x" />
                                </Link>
                              </div>
                            </div>
                            <div className="profile-uploader profile-uploader-two mb-0">
                              <span className="d-block text-center lh-1 fs-24 mb-1">
                                <i className="ti ti-upload" />
                              </span>
                              <div className="drag-upload-btn bg-transparent me-0 border-0">
                                <p className="fs-12 mb-2">
                                  <span className="text-primary">
                                    Click to Upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <h6>JPG or PNG</h6>
                                <h6>(Max 450 x 450 px)</h6>
                              </div>
                              <input
                                type="file"
                                className="form-control"
                                multiple
                                id="image_sign3"
                              />
                              <div id="frames3" />
                            </div>
                          </div>
                          <div>
                            <div className="d-flex justify-content-between mb-3">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-xl border rounded d-flex align-items-center justify-content-center p-2 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/logo-small.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h5>Dark Logo</h5>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="text-primary border rounded fs-16 p-1 badge badge-primary-hover me-2"
                                >
                                  <i className="ti ti-edit-circle" />
                                </Link>
                                <Link
                                  to="#"
                                  className="text-danger border rounded fs-16 p-1 badge badge-danger-hover"
                                >
                                  <i className="ti ti-trash-x" />
                                </Link>
                              </div>
                            </div>
                            <div className="profile-uploader profile-uploader-two mb-0">
                              <span className="d-block text-center lh-1 fs-24 mb-1">
                                <i className="ti ti-upload" />
                              </span>
                              <div className="drag-upload-btn bg-transparent me-0 border-0">
                                <p className="fs-12 mb-2">
                                  <span className="text-primary">
                                    Click to Upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <h6>JPG or PNG</h6>
                                <h6>(Max 450 x 450 px)</h6>
                              </div>
                              <input
                                type="file"
                                className="form-control"
                                multiple
                                id="image_sign4"
                              />
                              <div id="frames4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySettings;
