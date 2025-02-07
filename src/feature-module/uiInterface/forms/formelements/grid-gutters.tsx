import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

const GridGutters = () => {
  const routes = all_routes;
  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Grid &amp; Gutters</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Vertical Form</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Form Grid</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Address</label>
                      <div className="row">
                        <div className="col-xl-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Street"
                          />
                        </div>
                        <div className="col-xl-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Landmark"
                          />
                        </div>
                        <div className="col-xxl-6 col-xl-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                          />
                        </div>
                        <div className="col-xxl-6 col-xl-12 mb-3">
                          <select id="inputState1" className="form-select">
                            <option >State</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="col-xxl-6 col-xl-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Postal/Zip code"
                          />
                        </div>
                        <div className="col-xxl-6 col-xl-12 mb-3">
                          <select id="inputCountry" className="form-select">
                            <option >Country</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="row">
                        <div className="col-xl-12 mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-xl-12 mb-3">
                          <label className="form-label">DOB</label>
                          <input type="date" className="form-control" />
                        </div>
                        <div className="col-xl-12 mb-3">
                          <div className="row">
                            <label className="form-label mb-1">
                              Maritial Status
                            </label>
                            <div className="col-xl-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="status-married"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="status-married"
                                >
                                  Married
                                </label>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="status-unmarried"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="status-unmarried"
                                >
                                  Single
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12"></div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Contact Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Alternative Contact</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Gutters</div>
                </div>
                <div className="card-body">
                  <form className="row g-3 mt-0">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputAddress2" className="form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">
                        State
                      </label>
                      <select id="inputState" className="form-select">
                        <option >Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="inputZip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridCheck3"
                        >
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <Link to="#" className="btn btn-primary">
                        Sign in
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridGutters;
