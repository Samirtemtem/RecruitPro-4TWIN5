import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const routes = all_routes;
const PaymentGateways = () => {
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
                <Link className="nav-link " to={routes.profilesettings}>
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
                <Link className="nav-link " to={routes.salarySettings}>
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
                <Link className="nav-link active" to={routes.paymentGateways}>
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
                        to={routes.paymentGateways}
                        className="d-inline-flex align-items-center active rounded py-2 px-3"
                      >
                        <i className="ti ti-arrow-badge-right me-2" />
                        Payment Gateways
                      </Link>
                      <Link
                        to={routes.taxRates}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Tax Rates
                      </Link>
                      <Link
                        to={routes.currencies}
                        className="d-inline-flex align-items-center rounded py-2 px-3"
                      >
                        Currencies
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="card">
                  <div className="card-body pb-1">
                    <div className="border-bottom mb-3 pb-3">
                      <h4>Payment Gateways</h4>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between border-0 mb-3 pb-0">
                              <span className="d-inline-flex align-items-center justify-content-center border rounded p-2">
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/payment-gateway-01.svg"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user1"
                                    className="check"
                                    defaultChecked
                                  />
                                  <label htmlFor="user1" className="checktoggle">
                                    {" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="card-body pt-0">
                              <p>
                                PayPal is the faster, safer way to send and receive
                                money or make an online payment.
                              </p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-dark rounded"
                              >
                                <i className="ti ti-checks me-2" />
                                Connected
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#connect_payment"
                              >
                                <i className="ti ti-settings fs-24 fw-normal" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between border-0 mb-3 pb-0">
                              <span className="d-inline-flex align-items-center justify-content-center border rounded p-2">
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/payment-gateway-02.svg"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user2"
                                    className="check"
                                  />
                                  <label htmlFor="user2" className="checktoggle">
                                    {" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="card-body pt-0">
                              <p>
                                APIs to accept credit cards, manage subscriptions,
                                send money.
                              </p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-dark rounded"
                              >
                                <i className="ti ti-checks me-2" />
                                Connected
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#connect_payment"
                              >
                                <i className="ti ti-settings fs-24 fw-normal" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between border-0 mb-3 pb-0">
                              <span className="d-inline-flex align-items-center justify-content-center border rounded p-2">
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/payment-gateway-03.svg"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user6"
                                    className="check"
                                  />
                                  <label htmlFor="user6" className="checktoggle">
                                    {" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="card-body pt-0">
                              <p>
                                Allows send international money transfers and payments
                                quickly with low fees.
                              </p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-dark rounded"
                              >
                                <i className="ti ti-checks me-2" />
                                Connected
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#connect_payment"
                              >
                                <i className="ti ti-settings fs-24 fw-normal" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-header d-flex align-items-center justify-content-between border-0 mb-3 pb-0">
                              <span className="d-inline-flex align-items-center justify-content-center border rounded p-2">
                                <ImageWithBasePath
                                  src="assets/img/payment-gateway/payment-gateway-04.svg"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="status-toggle modal-status">
                                  <input
                                    type="checkbox"
                                    id="user10"
                                    className="check"
                                  />
                                  <label htmlFor="user10" className="checktoggle">
                                    {" "}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="card-body pt-0">
                              <p>
                                Paytm stands for Pay through mobile and it is India's
                                largest mobile payments.
                              </p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                              <Link
                                to="#"
                                className="btn btn-sm btn-outline-dark rounded"
                              >
                                <i className="ti ti-checks me-2" />
                                Connected
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#connect_payment"
                              >
                                <i className="ti ti-settings fs-24 fw-normal" />
                              </Link>
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

      <>
        {/* Add Payment Gateway */}
        <div className="modal fade" id="connect_payment">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Paypal</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form>
                <div className="modal-body pb-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Api Client ID</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Api Client Secret</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter API Key"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link to="#" className="btn btn-light me-2" data-bs-dismiss="modal">
                    Cancel
                  </Link>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Payment Gateway */}
      </>

    </div>
  );
};

export default PaymentGateways;
