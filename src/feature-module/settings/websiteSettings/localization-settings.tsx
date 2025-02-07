import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/commonSelect";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const Localizationsettings = () => {
  const routes = all_routes;
  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
  ];
  const timezoneOptions = [
    { value: "(UTC +5:30)", label: "(UTC +5:30)" },
    { value: "(UTC+11:00) INR", label: "(UTC+11:00) INR" },
  ];
  const dateOptions = [
    { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
    { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
    { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
    { value: "YYYY/MM/DD", label: "YYYY/MM/DD" },
  ];
  const timeFormatOptions = [
    { value: "12 Hours", label: "12 Hours" },
    { value: "24 Hours", label: "24 Hours" },
  ];
  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
  ];
  const monthOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
  ];
  const currencyOptions = [
    { value: "USD", label: "USD" },
    { value: "EURO", label: "EURO" },
  ];
  const symbols = [
    { value: "$", label: "$" },
    { value: "€", label: "€" },
  ];
  const symbolsandvalue = [
    { value: "$100", label: "$100" },
    { value: "100$", label: "100$" },
  ];
  const dot = [
    { value: ".", label: "." },
    { value: ".", label: "." },
  ];
  const comma = [
    { value: ",", label: "," },
    { value: ",", label: "," },
  ];
  const permissionforcountry = [
    { value: "Allow All Countries", label: "Allow All Countries" },
    { value: "Deny All Countries", label: "Deny All Countries" },
  ];
  const mbSize = [
    { value: "jpg", label: "jpg" },
    { value: "gif", label: "gif" },
    { value: "png", label: "png" },
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
                <Link className="nav-link active" to={routes.bussinessSettings}>
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
                        to={routes.bussinessSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Business Settings
                      </Link>
                      <Link
                        to={routes.seoSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        SEO Settings
                      </Link>
                      <Link
                        to={routes.localizationSettings}
                        className="d-inline-flex align-items-center rounded active py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Localization
                      </Link>
                      <Link
                        to={routes.prefixes}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Prefixes
                      </Link>
                      <Link
                        to={routes.preference}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Preferences
                      </Link>
                      <Link
                        to={routes.appearance}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Appearance
                      </Link>
                      <Link
                        to={routes.language}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Language
                      </Link>
                      <Link
                        to={routes.authenticationSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Authentication Settings
                      </Link>
                      <Link
                        to={routes.aiSettings}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        AI Settings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Localization</h4>
                    </div>
                    <form>
                      <div className="border-bottom mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">Language</label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={languageOptions}
                                />
                                <p className="fs-13 fw-normal mt-2 form-check form-check-md form-switch me-2">
                                  <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    role="switch"
                                  />
                                  Language Switcher
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">Timezone</label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={timezoneOptions}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Date Format
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={dateOptions}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Time Format
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={timeFormatOptions}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Financial Year
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={yearOptions}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Starting Month
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={monthOptions}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="mb-3">Currency Information</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">Currency</label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={currencyOptions}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Currency Symbol
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={symbols}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Currency Position
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={symbolsandvalue}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Decimal Seperator
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={dot}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Thousand Seperator
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={comma}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="mb-3">Country Settings</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Countries Restriction
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={permissionforcountry}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="mb-3">File Settings</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Allowed Files
                                </label>
                              </div>
                              <div className="col-md-7">
                                <CommonSelect
                                  className="select"
                                  options={mbSize}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row align-items-center mb-3">
                              <div className="col-md-5">
                                <label className="form-label mb-md-0">
                                  Max File Size
                                </label>
                              </div>
                              <div className="col-md-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="5000 MB"
                                />
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

export default Localizationsettings;
