import React from "react";
import { Link } from "react-router-dom";
import CommonSelect from "../../core/common/commonSelect";
import { membershipplan } from "../../core/common/selectoption/selectoption";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";

const Membershipplan = () => {
  const routes = all_routes;
  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
              <div className="my-auto mb-2">
                <h3 className="page-title mb-1">Membership Plans</h3>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to={routes.adminDashboard}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">Membership</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Membership Plans
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <TooltipOption />
                <div className="mb-2">
                  <Link
                    to="#"
                    data-bs-toggle="modal" data-inert={true}
                    data-bs-target="#add_membership"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <i className="ti ti-square-rounded-plus me-2" />
                    Add Membership
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="card border-0">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center">
                  <h5>Monthly</h5>
                  <div className="form-check form-check-md form-switch mx-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                    />
                  </div>
                  <h5>Yearly</h5>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Membership */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="border-bottom mb-3">
                      <span className="badge bg-info mb-3">Starter Pack</span>
                      <h3 className="mb-3">
                        Essential tools for small and growing schools to
                        streamline operations.
                      </h3>
                    </div>
                    <div>
                      <div className="bg-light-300 p-3 rounded-1 text-center mb-3">
                        <h2>
                          $99
                          <span className="text-gray-7 fs-14 fw-normal">
                            {" "}
                            /month
                          </span>
                        </h2>
                      </div>
                      <ul className="list-unstyled gap-3">
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              5 Students &amp; Teachers
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              <div className="flex-grow-1">
                                15 Classes &amp; Sections
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              <div className="flex-grow-1">
                                5 Subjects &amp; Exams
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              <div className="flex-grow-1">5 Departments</div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              <div className="flex-grow-1">5 Designations</div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-danger me-2">
                              <i className="ti ti-circle-x-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Library &amp; Transport
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Link to="#" className="btn btn-primary w-100">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Membership */}
              {/* Membership */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="border-bottom mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="badge bg-info mb-3">
                          Enterprise Pack
                        </span>
                        <span className="badge badge-soft-warning mb-3">
                          Recommended
                        </span>
                      </div>
                      <h3 className="mb-3">
                        Comprehensive features for mid-sized schools to enhance
                        efficiency.
                      </h3>
                    </div>
                    <div>
                      <div className="bg-light-300 p-3 rounded-1 text-center mb-3">
                        <h2>
                          $149
                          <span className="text-gray-7 fs-14 fw-normal">
                            {" "}
                            /month
                          </span>
                        </h2>
                      </div>
                      <ul className="list-unstyled gap-3">
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              10 Students &amp; Teachers
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              20 Classes &amp; Sections
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              10 Subjects &amp; Exams
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">10 Departments</div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">10 Designations</div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-danger me-2">
                              <i className="ti ti-circle-x-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Library &amp; Transport
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Link to="#" className="btn btn-primary w-100">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Membership */}
              {/* Membership */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="border-bottom mb-3">
                      <span className="badge bg-info mb-3">Premium Pack</span>
                      <h3 className="mb-3">
                        Robust solutions for large schools to optimize
                        management.
                      </h3>
                    </div>
                    <div>
                      <div className="bg-light-300 p-3 rounded-1 text-center mb-3">
                        <h2>
                          $199
                          <span className="text-gray-7 fs-14 fw-normal">
                            {" "}
                            /month
                          </span>
                        </h2>
                      </div>
                      <ul className="list-unstyled gap-3">
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Unlimited Students &amp; Teachers
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Unlimited Classes &amp; Sections
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Unlimited Subjects &amp; Exams
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Unlimited Departments
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-check-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Unlimited Designations
                            </div>
                          </div>
                        </li>
                        <li className="mb-3">
                          <div className="d-flex align-items-center">
                            <span className="flex-shrink-0 text-success me-2">
                              <i className="ti ti-circle-x-filled fs-15 align-middle" />
                            </span>
                            <div className="flex-grow-1">
                              Library &amp; Transport
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Link to="#" className="btn btn-primary w-100">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Membership */}
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
        {/* Add Plan */}
        <div className="modal fade" id="add_membership">
          <div className="modal-dialog modal-dialog-centered  modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Plan</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form >
                <div className="modal-body mb-2">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Plan Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Type</label>
                        <CommonSelect
                          className="select"
                          options={membershipplan}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Plan Price</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h5 className="mb-3">Plan Settings</h5>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Students &amp; Teachers
                        </label>
                        <div className=" d-flex align-items-center mb-3">
                          <div className="w-100 me-3">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="plan"
                              className="check"
                            />
                            <label htmlFor="plan" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                          Unlimited
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Classes &amp; Sections
                        </label>
                        <div className=" d-flex align-items-center mb-3">
                          <div className="w-100 me-3">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="plan1"
                              className="check"
                            />
                            <label htmlFor="plan1" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                          Unlimited
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Subjects &amp; Exams
                        </label>
                        <div className=" d-flex align-items-center mb-3">
                          <div className="w-100 me-3">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="plan2"
                              className="check"
                            />
                            <label htmlFor="plan2" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                          Unlimited
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Departments</label>
                        <div className=" d-flex align-items-center mb-3">
                          <div className="w-100 me-3">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="plan3"
                              className="check"
                            />
                            <label htmlFor="plan3" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                          Unlimited
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Designations</label>
                        <div className=" d-flex align-items-center mb-3">
                          <div className="w-100 me-3">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="plan4"
                              className="check"
                            />
                            <label htmlFor="plan4" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                          Unlimited
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Library &amp; Transport
                        </label>
                        <div className=" d-flex align-items-center mb-3">
                          <div className="w-100 me-3">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="status-toggle modal-status">
                            <input
                              type="checkbox"
                              id="plan5"
                              className="check"
                            />
                            <label htmlFor="plan5" className="checktoggle">
                              {" "}
                            </label>
                          </div>
                        </div>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                    Add Plan
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Plan */}
      </>
    </div>
  );
};

export default Membershipplan;
