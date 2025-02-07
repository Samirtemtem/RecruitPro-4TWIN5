import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";

const FloatingLabel = () => {
  const routes = all_routes;
  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Floating Label</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Floating Label</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Floating Label */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Basic Examples</div>
                </div>
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Readonly plain text</div>
                </div>
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control-plaintext"
                      id="floatingEmptyPlaintextInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingEmptyPlaintextInput">
                      Empty input
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control-plaintext"
                      id="floatingPlaintextInput"
                      placeholder="name@example.com"
                      defaultValue="name@example.com"
                    />
                    <label htmlFor="floatingPlaintextInput">
                      Input with value
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Floating Label */}
          {/* Floating Label */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">
                    Floating Labels With Pre Defined Values
                  </div>
                </div>
                <div className="card-body">
                  <form className="form-floating my-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInputValue"
                      placeholder="name@example.com"
                      defaultValue="test@example.com"
                    />
                    <label htmlFor="floatingInputValue">Input with value</label>
                  </form>
                  <form className="form-floatin">
                    <input
                      type="email"
                      className="form-control is-invalid"
                      id="floatingInputInvalid"
                      placeholder="name@example.com"
                      defaultValue="test@example.com"
                    />
                    <label htmlFor="floatingInputInvalid">Invalid input</label>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Textareas</div>
                </div>
                <div className="card-body">
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Description</label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      rows={1}
                      
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea2">Disabled</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Floating Label */}
          {/* Floating Label */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Floating Labels In Select</div>
                </div>
                <div className="card-body">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option >Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                    <label htmlFor="floatingSelect">Works with selects</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Floating Labels With Layouts</div>
                </div>
                <div className="card-body">
                  <div className="row g-2">
                    <div className="col-md">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputGrid"
                          placeholder="name@example.com"
                          defaultValue="mdo@example.com"
                        />
                        <label htmlFor="floatingInputGrid">Email address</label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid">
                          <option >Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">
                          Works with selects
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Floating Label */}
          {/* Floating Label Colors */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Floating Label Colors</div>
                </div>
                <div className="card-body">
                  <div className="row gy-4">
                    <div className="col-xl-4">
                      <div className="form-floating mb-4 floating-primary">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputprimary"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputprimary">primary</label>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="form-floating mb-4 floating-secondary">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputsecondary"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputsecondary">
                          secondary
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="form-floating mb-4 floating-warning">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputwarning"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputwarning">warning</label>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="form-floating mb-4 floating-info">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputinfo"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputinfo">info</label>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="form-floating mb-4 floating-success">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputsuccess"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputsuccess">success</label>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="form-floating mb-4 floating-danger">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputdanger"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputdanger">danger</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Floating Label Colors */}
        </div>
      </div>
    </div>
  );
};

export default FloatingLabel;
