import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const Modals = () => {
  const routes = all_routes;
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Modals</h4>
          </div>
        </div>
        <div className="row">
          {/* Basic Modal */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic Modal</h5>
              </div>
              <div className="card-body">
                <div
                  id="standard-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="standard-modalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="standard-modalLabel">
                          Modal Heading
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h6>Text in a modal</h6>
                        <p>
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula.
                        </p>
                        <hr />
                        <h6>Overflowing text to show scroll behavior</h6>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-list">
                  {/* Standard  modal */}
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#standard-modal"
                  >
                    Launch Demo Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Basic Modal */}
          {/* Static Backdrop */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Static Backdrop</h5>
              </div>
              <div className="card-body card-buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Launch static backdrop modal
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Static Backdrop */}
          {/* Scrolling Long Content */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Scrolling Long Content</h5>
              </div>
              <div className="card-body card-buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#scrollable-modal"
                >
                  Scrolling Long Content
                </button>
                {/* Long Content Scroll Modal */}
                <div
                  className="modal fade"
                  id="scrollable-modal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="scrollableModalTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="scrollableModalTitle">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                          Aenean lacinia bibendum nulla sed consectetur.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Donec sed odio dui. Donec ullamcorper
                          nulla non metus auctor fringilla.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
              </div>
            </div>
          </div>
          {/* /Scrolling Long Content */}
        </div>
        <div className="row">
          {/* Using the Grid */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Using the grid</h5>
                </div>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalScrollable5"
                >
                  Launch demo modal
                </button>
                <div
                  className="modal fade"
                  id="exampleModalScrollable5"
                  tabIndex={-1}
                  aria-labelledby="exampleModalScrollable5"
                  data-bs-keyboard="false"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="staticBackdropLabel5">
                          Modal title
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-4 bg-light border">
                              .col-md-4
                            </div>
                            <div className="col-md-4 ms-auto bg-light border">
                              .col-md-4 .ms-auto
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-md-3 ms-auto bg-light border">
                              .col-md-3 .ms-auto
                            </div>
                            <div className="col-md-2 ms-auto bg-light border">
                              .col-md-2 .ms-auto
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-md-6 ms-auto bg-light border">
                              .col-md-6 .ms-auto
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-sm-9 bg-light border">
                              Level 1: .col-sm-9
                              <div className="row">
                                <div className="col-8 col-sm-6 bg-light border">
                                  Level 2: .col-8 .col-sm-6
                                </div>
                                <div className="col-4 col-sm-6 bg-light border">
                                  Level 2: .col-4 .col-sm-6
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Using the Grid */}
          {/* Toggle Between Modals */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Toggle Between Modals</h5>
              </div>
              <div className="card-body">
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalToggleLabel"
                        >
                          Modal 1
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        Show a second modal and hide this one with the button
                        below.
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                        >
                          Open second modal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModalToggle2"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel2"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalToggleLabel2"
                        >
                          Modal 2
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        Hide this modal and show the first with the button
                        below.
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                        >
                          Back to first
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <Link
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  to="#exampleModalToggle"
                  role="button"
                >
                  Open first modal
                </Link>
              </div>
            </div>
          </div>
          {/* /Toggle Between Modals */}
          {/* Optional Sizes */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Optional Sizes</h5>
              </div>
              <div className="card-body">
                {/*  Modal */}
                <div
                  className="modal fade"
                  id="bs-example-modal-lg"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="myLargeModalLabel">
                          Large modal
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <div
                  className="modal fade"
                  id="bs-example-modal-sm"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="mySmallModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="mySmallModalLabel">
                          Small modal
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModalLg"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLgLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLgLabel">
                          Extra Large Modal
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <div className="button-list">
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalLg"
                  >
                    Extra Large Modal
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#bs-example-modal-lg"
                  >
                    Large Modal
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#bs-example-modal-sm"
                  >
                    Small Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Optional Sizes */}
        </div>
        <div className="row">
          {/* Modal with Pages */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Modal with Pages</h5>
              </div>
              <div className="card-body card-buttons">
                {/* Modal */}
                <div
                  id="signup-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="text-center mt-2 mb-4">
                          <div className="auth-logo">
                            <Link
                              to={routes.adminDashboard}
                              className="logo logo-dark"
                            >
                              <span className="logo-lg">
                                <ImageWithBasePath
                                  src="assets/img/logo.png"
                                  alt="Logo"
                                  height={42}
                                />
                              </span>
                            </Link>
                          </div>
                        </div>
                        <form className="px-3" >
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                              Name
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              id="username"
                              required
                              placeholder="Michael Zenaty"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="emailaddress"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              id="emailaddress"
                              required
                              placeholder="john@deo.com"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              required
                              id="password"
                              placeholder="Enter your password"
                            />
                          </div>
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck1"
                              >
                                I accept<Link to="#">Terms and Conditions</Link>
                              </label>
                            </div>
                          </div>
                          <div className="mb-3 text-center">
                            <button className="btn btn-primary" type="submit">
                              Sign Up Free
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Modal */}
                <div
                  id="login-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="text-center mt-2 mb-4">
                          <div className="auth-logo">
                            <Link
                              to={routes.adminDashboard}
                              className="logo logo-dark"
                            >
                              <span className="logo-lg">
                                <ImageWithBasePath
                                  src="assets/img/logo.png"
                                  alt="Logo"
                                  height={42}
                                />
                              </span>
                            </Link>
                          </div>
                        </div>
                        <form  className="px-3">
                          <div className="mb-3">
                            <label
                              htmlFor="emailaddress1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              id="emailaddress1"
                              required
                              placeholder="john@deo.com"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password1" className="form-label">
                              Password
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              required
                              id="password1"
                              placeholder="Enter your password"
                            />
                          </div>
                          <div className="mb-3">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheck2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck2"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="mb-2 text-center">
                            <button
                              className="btn rounded-pill btn-primary"
                              type="submit"
                            >
                              Sign In
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <div className="button-list">
                  {/* Sign Up modal */}
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#signup-modal"
                  >
                    Sign Up Modal
                  </button>
                  {/* Log In modal */}
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#login-modal"
                  >
                    Log In Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Modal with Pages */}
          {/* Custom Modals */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Modals</h5>
              </div>
              <div className="card-body">
                {/* sample modal content */}
                <div
                  id="con-close-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">
                          Modal Content is Responsive
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body p-4">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="field-1" className="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="field-1"
                                placeholder="John"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="field-2" className="form-label">
                                Surname
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="field-2"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label htmlFor="field-3" className="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="field-3"
                                placeholder="Address"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="field-4" className="form-label">
                                City
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="field-4"
                                placeholder="Boston"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="field-5" className="form-label">
                                Country
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="field-5"
                                placeholder="United States"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <label htmlFor="field-6" className="form-label">
                                Zip
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="field-6"
                                // placeholder={123456}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <label htmlFor="field-7" className="form-label">
                                Personal Info
                              </label>
                              <textarea
                                className="form-control"
                                id="field-7"
                                placeholder="Write something about yourself"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel waves-effect"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <div
                  id="accordion-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content p-0">
                      <div id="accordion">
                        <div className="card mb-0">
                          <div className="card-header" id="headingOne">
                            <h5 className="m-0">
                              <Link
                                to="#collapseOne"
                                className="text-dark"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Collapsible Group Item #1
                              </Link>
                            </h5>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven&apos;t heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div className="card mb-0">
                          <div className="card-header" id="headingTwo">
                            <h5 className="m-0">
                              <Link
                                to="#collapseTwo"
                                className="collapsed text-dark"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Collapsible Group Item #2
                              </Link>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven&apos;t heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div className="card mb-0">
                          <div className="card-header" id="headingThree">
                            <h5 className="m-0">
                              <Link
                                to="#collapseThree"
                                className="collapsed text-dark"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Collapsible Group Item #3
                              </Link>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven&apos;t heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <div className="button-list">
                  {/* Responsive modal */}
                  <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#con-close-modal"
                  >
                    Responsive Modal
                  </button>
                  {/* Accordion modal */}
                  <button
                    type="button"
                    className="btn btn-secondary waves-effect waves-light mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#accordion-modal"
                  >
                    Accordion in Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Custom Modals */}
        </div>
        <div className="row">
          {/* Vertically Centered Modal */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Vertically Centered Modal</h5>
                </div>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalScrollable2"
                >
                  Vertically centered modal
                </button>
                <div
                  className="modal fade"
                  id="exampleModalScrollable2"
                  tabIndex={-1}
                  aria-labelledby="exampleModalScrollable2"
                  data-bs-keyboard="false"
                  aria-hidden="true"
                >
                  {/* Scrollable modal */}
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="staticBackdropLabel2">
                          Modal title
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Libero ipsum quasi, error quibusdam debitis
                          maiores hic eum? Vitae nisi ipsa maiores fugiat
                          deleniti quis reiciendis veritatis.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Vertically Centered Modal */}
          {/* Vertically Centered Scrollable */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Vertical Centered Scrollable</h5>
                </div>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalScrollable3"
                >
                  Vertically centered scrollable modal
                </button>
                <div
                  className="modal fade"
                  id="exampleModalScrollable3"
                  tabIndex={-1}
                  aria-labelledby="exampleModalScrollable3"
                  data-bs-keyboard="false"
                  aria-hidden="true"
                >
                  {/* Scrollable modal */}
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="staticBackdropLabel3">
                          Modal title
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Ea voluptatibus, ipsam quo est rerum modi quos
                          expedita facere, ex tempore fuga similique ipsa
                          blanditiis et accusamus temporibus commodi voluptas!
                          Nobis veniam illo architecto expedita quam ratione
                          quaerat omnis. In, recusandae eos! Pariatur, deleniti
                          quis ad nemo ipsam officia temporibus, doloribus fuga
                          asperiores ratione distinctio velit alias hic modi
                          praesentium aperiam officiis eaque, accusamus aut.
                          Accusantium assumenda, commodi nulla provident
                          asperiores fugit inventore iste amet aut placeat
                          consequatur reprehenderit. Ratione tenetur eligendi,
                          quis aperiam dolores magni iusto distinctio
                          voluptatibus minus a unde at! Consequatur voluptatum
                          in eaque obcaecati, impedit accusantium ea soluta,
                          excepturi, quasi quia commodi blanditiis? Qui
                          blanditiis iusto corrupti necessitatibus dolorem
                          fugiat consequuntur quod quo veniam? Labore
                          dignissimos reiciendis accusamus recusandae est
                          consequuntur iure.
                        </p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Vertically Centered Scrollable */}
          {/* Tooltips and popovers */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Tooltips and popovers</h5>
                </div>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalScrollable4"
                >
                  Launch demo modal
                </button>
                <div
                  className="modal fade"
                  id="exampleModalScrollable4"
                  tabIndex={-1}
                  aria-labelledby="exampleModalScrollable4"
                  data-bs-keyboard="false"
                  aria-hidden="true"
                >
                  {/* Scrollable modal */}
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="staticBackdropLabel4">
                          Modal title
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h5>Popover in a modal</h5>
                        <p>
                          This{" "}
                          <Link
                            to="#"
                            role="button"
                            className="btn btn-secondary"
                            data-bs-toggle="popover"
                            title="Popover title"
                            data-bs-content="Popover body content is set in this attribute."
                          >
                            button
                          </Link>
                          triggers a popover on click.
                        </p>
                        <hr />
                        <h5>Tooltips in a modal</h5>
                        <p>
                          <Link
                            to="#"
                            className="text-primary"
                            data-bs-toggle="tooltip"
                            title="Tooltip"
                          >
                            This link
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="#"
                            className="text-primary"
                            data-bs-toggle="tooltip"
                            title="Tooltip"
                          >
                            that link
                          </Link>{" "}
                          have tooltips on hover.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Tooltips and popovers */}
        </div>
        <div className="row">
          {/* Fullscreen Modal */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Fullscreen Modal</h5>
                </div>
              </div>
              <div className="card-body">
                <div className="bd-example">
                  <button
                    type="button"
                    className="btn btn-primary mb-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreen"
                  >
                    Full screen
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mb-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenSm"
                  >
                    Full screen below sm
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning mb-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenMd"
                  >
                    Full screen below md
                  </button>
                  <button
                    type="button"
                    className="btn btn-info mb-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenLg"
                  >
                    Full screen below lg
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mb-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenXl"
                  >
                    Full screen below xl
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mb-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenXxl"
                  >
                    Full screen below xxl
                  </button>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalFullscreen"
                  tabIndex={-1}
                  aria-labelledby="exampleModalFullscreenLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalFullscreenLabel"
                        >
                          Full screen modal
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalFullscreenSm"
                  tabIndex={-1}
                  aria-labelledby="exampleModalFullscreenSmLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog modal-fullscreen-sm-down">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalFullscreenSmLabel"
                        >
                          Full screen below sm
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalFullscreenMd"
                  tabIndex={-1}
                  aria-labelledby="exampleModalFullscreenMdLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog modal-fullscreen-md-down">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalFullscreenMdLabel"
                        >
                          Full screen below md
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalFullscreenLg"
                  tabIndex={-1}
                  aria-labelledby="exampleModalFullscreenLgLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog modal-fullscreen-lg-down">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalFullscreenLgLabel"
                        >
                          Full screen below lg
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalFullscreenXl"
                  tabIndex={-1}
                  aria-labelledby="exampleModalFullscreenXlLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog modal-fullscreen-xl-down">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalFullscreenXlLabel"
                        >
                          Full screen below xl
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalFullscreenXxl"
                  tabIndex={-1}
                  aria-labelledby="exampleModalFullscreenXxlLabel"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div className="modal-dialog modal-fullscreen-xxl-down">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          id="exampleModalFullscreenXxlLabel"
                        >
                          Full screen below xxl
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Fullscreen Modal */}
        </div>
        <div className="row">
          {/* Varying Modal Content */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Varying Modal Content</h5>
                </div>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary mb-1 me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#formmodal"
                  data-bs-whatever="@mdo"
                >
                  Open modal for @mdo
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mb-1 me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#formmodal"
                  data-bs-whatever="@fat"
                >
                  Open modal for @fat
                </button>
                <button
                  type="button"
                  className="btn btn-light mb-1 me-1"
                  data-bs-toggle="modal"
                  data-bs-target="#formmodal"
                  data-bs-whatever="@getbootstrap"
                >
                  Open modal for @getbootstrap
                </button>
                <div
                  className="modal fade"
                  id="formmodal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">
                          New message
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="recipient-name"
                              className="col-form-label"
                            >
                              Recipient:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="recipient-name"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="message-text"
                              className="col-form-label"
                            >
                              Message:
                            </label>
                            <textarea
                              className="form-control"
                              id="message-text"
                              defaultValue={""}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Varying Modal Content */}
        </div>
        <div className="row">
          {/* Modal Animation Effects */}
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Modal Animation Effects</h5>
                </div>
              </div>
              <div className="card-body">
                <div className="row ">
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-scale"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Scale
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-slide-in-right"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Slide In Right
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-slide-in-bottom"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Slide In Bottom
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-newspaper"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Newspaper
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-fall"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Fall
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-flip-horizontal"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Flip Horizontal
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-flip-vertical"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Flip Vertical
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-super-scaled"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Super Scaled
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-sign"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Sign
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-rotate-bottom"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Rotate Bottom
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-3">
                    <Link
                      className="modal-effect btn btn-primary d-grid mb-3"
                      data-bs-effect="effect-rotate-left"
                      data-bs-toggle="modal"
                      to="#modaldemo8"
                    >
                      Rotate Left
                    </Link>
                  </div>
                </div>
                <div className="modal fade" id="modaldemo8">
                  <div
                    className="modal-dialog modal-dialog-centered text-center"
                    role="document"
                  >
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        <h4 className="modal-title">Message Preview</h4>
                        <button
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                        />
                      </div>
                      <div className="modal-body text-start">
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p className="text-muted mb-0">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using &apos;Content here,
                          content here&apos;, making it look like readable
                          English.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-primary">
                          Save changes
                        </button>{" "}
                        <button
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Modal Animation Effects */}
        </div>
        {/* Close Buttons */}
        <h6 className="mb-3">Close Buttons:</h6>
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Basic Close</h5>
                </div>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card ">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">Disabel state</h5>
                </div>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn-close"
                  disabled
                  aria-label="Close"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card overflow-hidden">
              <div className="card-header justify-content-between">
                <div className="card-title">
                  <h5 className="card-title">White variant</h5>
                </div>
              </div>
              <div className="card-body bg-black">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                />
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  disabled
                  aria-label="Close"
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Close Buttons */}
        {/* Modal Position */}
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Modal Position</h5>
              </div>
              <div className="card-body">
                {/* Modal	 */}
                <div
                  id="top-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-top">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="topModalLabel">
                          Modal Heading
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h5>Text in a modal</h5>
                        <p>
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Modal */}
                <div
                  id="right-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm modal-right">
                    <div className="modal-content">
                      <div className="modal-header border-0">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="text-center">
                          <h4 className="mt-0">Text in a modal</h4>
                          <p>
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                          </p>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Modal */}
                <div
                  id="bottom-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm modal-bottom">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="bottomModalLabel">
                          Modal Heading
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h5>Text in a modal</h5>
                        <p>
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-cancel"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Modal */}
                <div
                  className="modal fade"
                  id="centermodal"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title" id="myCenterModalLabel">
                          Center Modal
                        </h4>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h5>Overflowing text to show scroll behavior</h5>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et. Vivamus sagittis lacus vel augue
                          laoreet rutrum faucibus dolor auctor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <div className="button-list">
                  {/* Top modal */}
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#top-modal"
                  >
                    Top Modal
                  </button>
                  {/* Bottom modal */}
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#bottom-modal"
                  >
                    Bottom Modal
                  </button>
                  {/* Center modal */}
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#centermodal"
                  >
                    Center modal
                  </button>
                  {/* Right modal */}
                  <button
                    type="button"
                    className="btn btn-primary mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#right-modal"
                  >
                    Rightbar Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Modal based Alerts</h5>
              </div>
              <div className="card-body">
                {/* Success Alert Modal */}
                <div
                  id="success-alert-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm">
                    <div className="modal-content modal-filled bg-success">
                      <div className="modal-body p-4">
                        <div className="text-center">
                          <i className="dripicons-checkmark h1 text-white" />
                          <h4 className="mt-2 text-white">Well Done!</h4>
                          <p className="mt-3 text-white">
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam.
                          </p>
                          <button
                            type="button"
                            className="btn btn-cancel my-2"
                            data-bs-dismiss="modal"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Info Alert Modal */}
                <div
                  id="info-alert-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                      <div className="modal-body p-4">
                        <div className="text-center">
                          <i className="dripicons-information h1 text-info" />
                          <h4 className="mt-2">Heads up!</h4>
                          <p className="mt-3">
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam.
                          </p>
                          <button
                            type="button"
                            className="btn btn-info my-2"
                            data-bs-dismiss="modal"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Warning Alert Modal */}
                <div
                  id="warning-alert-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                      <div className="modal-body p-4">
                        <div className="text-center">
                          <i className="dripicons-warning h1 text-warning" />
                          <h4 className="mt-2">Incorrect Information</h4>
                          <p className="mt-3">
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam.
                          </p>
                          <button
                            type="button"
                            className="btn btn-warning my-2"
                            data-bs-dismiss="modal"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                {/* Danger Alert Modal */}
                <div
                  id="danger-alert-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm">
                    <div className="modal-content modal-filled bg-danger">
                      <div className="modal-body p-4">
                        <div className="text-center">
                          <i className="dripicons-wrong h1 text-white" />
                          <h4 className="mt-2 text-white">Oh snap!</h4>
                          <p className="mt-3 text-white">
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam.
                          </p>
                          <button
                            type="button"
                            className="btn btn-cancel my-2"
                            data-bs-dismiss="modal"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Modal */}
                <div className="button-list">
                  {/* Success Alert modal */}
                  <button
                    type="button"
                    className="btn btn-success mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#success-alert-modal"
                  >
                    Success Alert
                  </button>
                  {/* Info Alert modal */}
                  <button
                    type="button"
                    className="btn btn-info mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#info-alert-modal"
                  >
                    Info Alert
                  </button>
                  {/* Warning Alert modal */}
                  <button
                    type="button"
                    className="btn btn-warning mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#warning-alert-modal"
                  >
                    Warning Alert
                  </button>
                  {/* Danger Alert modal */}
                  <button
                    type="button"
                    className="btn btn-danger mt-1 me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#danger-alert-modal"
                  >
                    Danger Alert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Modal Position */}
      </div>
    </div>
  );
};

export default Modals;
