import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'

const AlertUi = () => {
  return (
    <div className="page-wrapper">
  <div className="content">
    <div className="page-header">
      <div className="page-title">
        <h3>Alerts</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Default Alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-primary" role="alert">
              A simple primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert">
              A simple secondary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
            <div className="alert alert-info" role="alert">
              A simple info alert—check it out!
            </div>
            <div className="alert alert-light" role="alert">
              A simple light alert—check it out!
            </div>
            <div className="alert alert-dark" role="alert">
              A simple dark alert—check it out!
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Links in alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-primary" role="alert">
              A simple primary alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-secondary" role="alert">
              A simple secondary alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-info" role="alert">
              A simple info alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-light" role="alert">
              A simple light alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
            <div className="alert alert-dark" role="alert">
              A simple dark alert with{" "}
              <Link to="#" className="alert-link">
                an example link
              </Link>
              . Give it a click if you like.
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Solid Colored Alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-solid-primary alert-dismissible fade show">
              A simple solid primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-secondary alert-dismissible fade show">
              A simple solid secondary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-info alert-dismissible fade show">
              A simple solid info alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-warning alert-dismissible fade show">
              A simple solid warning alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-success alert-dismissible fade show">
              A simple solid success alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-danger alert-dismissible fade show">
              A simple solid danger alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-light alert-dismissible fade show">
              A simple solid light alert—check it out!
              <button
                type="button"
                className="btn-close text-default"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-dark alert-dismissible fade show text-white">
              A simple solid dark alert—check it out!
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Outline Alerts </h5>
          </div>
          <div className="card-body">
            <div className="alert alert-outline-primary alert-dismissible fade show">
              A simple outline primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-secondary alert-dismissible fade show">
              A simple outline secondary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-info alert-dismissible fade show">
              A simple outline info alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-warning alert-dismissible fade show">
              A simple outline warning alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-success alert-dismissible fade show">
              A simple outline success alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-danger alert-dismissible fade show">
              A simple outline danger alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-light alert-dismissible fade show">
              A simple outline light alert—check it out!
              <button
                type="button"
                className="btn-close text-default"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-dark alert-dismissible fade show">
              A simple outline dark alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Rounded Solid Alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-solid-primary rounded-pill alert-dismissible fade show">
              A simple solid rounded primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-secondary rounded-pill alert-dismissible fade show">
              A simple solid rounded secondary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-warning rounded-pill alert-dismissible fade show">
              A simple solid rounded warning alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-solid-danger rounded-pill alert-dismissible fade show">
              A simple solid rounded danger alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Rounded Outline Alerts</h5>
          </div>
          <div className="card-body">
            <div className="alert alert-outline-primary rounded-pill alert-dismissible fade show">
              A simple outline rounded primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-secondary rounded-pill alert-dismissible fade show">
              A simple outline rounded secondary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-warning rounded-pill alert-dismissible fade show">
              A simple outline rounded warning alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-outline-danger rounded-pill alert-dismissible fade show">
              A simple outline rounded danger alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">Rounded Default Alerts</div>
          </div>
          <div className="card-body">
            <div className="alert alert-primary rounded-pill alert-dismissible fade show">
              A simple rounded primary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-secondary rounded-pill alert-dismissible fade show">
              A simple rounded secondary alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-warning rounded-pill alert-dismissible fade show">
              A simple rounded warning alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-danger rounded-pill alert-dismissible fade show">
              A simple rounded danger alert—check it out!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Rounded Alerts With Custom Close Button
            </div>
          </div>
          <div className="card-body">
            <div className="alert alert-primary rounded-pill alert-dismissible fade show">
              A simple rounded primary alert—check it out!
              <button
                type="button"
                className="btn-close custom-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-secondary rounded-pill alert-dismissible fade show">
              A simple rounded secondary alert—check it out!
              <button
                type="button"
                className="btn-close custom-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-warning rounded-pill alert-dismissible fade show">
              A simple rounded warning alert—check it out!
              <button
                type="button"
                className="btn-close custom-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div className="alert alert-danger rounded-pill alert-dismissible fade show">
              A simple rounded danger alert—check it out!
              <button
                type="button"
                className="btn-close custom-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Alerts with icons</h5>
          </div>
          <div className="card-body">
            <div
              className="alert alert-primary d-flex align-items-center"
              role="alert"
            >
              <i className="feather-info flex-shrink-0 me-2" />
              <div>An example alert with an icon</div>
            </div>
            <div
              className="alert alert-success d-flex align-items-center"
              role="alert"
            >
              <i className="feather-check-circle flex-shrink-0 me-2" />
              <div>An example success alert with an icon</div>
            </div>
            <div
              className="alert alert-warning d-flex align-items-center"
              role="alert"
            >
              <i className="feather-alert-triangle flex-shrink-0 me-2" />
              <div>An example warning alert with an icon</div>
            </div>
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <i className="feather-alert-octagon flex-shrink-0 me-2" />
              <div>An example danger alert with an icon</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Customized Alerts With Icons</h5>
          </div>
          <div className="card-body">
            <div
              className="alert alert-primary alert-dismissible fade show custom-alert-icon shadow-sm d-flex align-items-center"
              role="alert"
            >
              <i className="feather-info flex-shrink-0 me-2" />A customized
              primary alert with an icon
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm d-flex align-items-center"
              role="alert"
            >
              <i className="feather-check-circle flex-shrink-0 me-2" />A
              customized secondary alert with an icon
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-warning alert-dismissible fade show custom-alert-icon shadow-sm d-flex align-items-center"
              role="alert"
            >
              <i className="feather-alert-triangle flex-shrink-0 me-2" />A
              customized warning alert with an icon
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-danger alert-dismissible fade show custom-alert-icon shadow-sm d-flex align-items-centers"
              role="alert"
            >
              <i className="feather-alert-octagon flex-shrink-0 me-2" />A
              customized danger alert with an icon
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-primary border border-primary mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-info flex-shrink-0" />
                      </div>
                      <div className="text-primary w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Information Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Information alert to show to information message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-secondary fw-semibold me-2 d-inline-block"
                          >
                            cancel
                          </Link>
                          <Link
                            to="#"
                            className="text-primary fw-semibold"
                          >
                            open
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-secondary border border-secondary mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-check-circle flex-shrink-0" />
                      </div>
                      <div className="text-secondary w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Success Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Success alert to show to success message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-danger fw-semibold me-2 d-inline-block"
                          >
                            cancel
                          </Link>
                          <Link
                            to="#"
                            className="text-secondary fw-semibold"
                          >
                            open
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-warning border border-warning mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-alert-triangle flex-shrink-0" />
                      </div>
                      <div className="text-warning w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Warning Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Warning alert to show warning message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-dark fw-semibold me-2 d-inline-block"
                          >
                            cancel
                          </Link>
                          <Link
                            to="#"
                            className="text-warning fw-semibold"
                          >
                            open
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-danger border border-danger mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-alert-octagon flex-shrink-0" />
                      </div>
                      <div className="text-danger w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Danger Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Danger alert to show the danger message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-info fw-semibold me-2 d-inline-block"
                          >
                            cancel
                          </Link>
                          <Link
                            to="#"
                            className="text-danger fw-semibold"
                          >
                            open
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-solid-primary border border-primary mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-info flex-shrink-0" />
                      </div>
                      <div className="text-fixed-white w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Information Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Information alert to show to information message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-fixed-white fw-semibold me-2 op-7"
                          >
                            cancel
                          </Link>
                          <Link
                            to="#"
                            className="text-fixed-white fw-semibold"
                          >
                            open
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-solid-secondary border border-secondary mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-check-circle flex-shrink-0" />
                      </div>
                      <div className="text-fixed-white w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Success Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Success alert to show to success message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-fixed-white fw-semibold me-2"
                          >
                            close
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-solid-warning border border-warning mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-alert-triangle flex-shrink-0" />
                      </div>
                      <div className="text-fixed-white w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Warning Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Warning alert to show to warning message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-fixed-white fw-semibold me-2 op-7"
                          >
                            skip
                          </Link>
                          <Link
                            to="#"
                            className="text-fixed-white fw-semibold"
                          >
                            open
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="card border-0">
                  <div className="alert alert-solid-danger border border-danger mb-0 p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <i className="feather-alert-octagon flex-shrink-0" />
                      </div>
                      <div className="text-fixed-white w-100">
                        <div className="fw-semibold d-flex justify-content-between">
                          Danger Alert
                          <button
                            type="button"
                            className="btn-close p-0"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <i className="fas fa-xmark" />
                          </button>
                        </div>
                        <div className="fs-12 op-8 mb-1">
                          Danger alert to show to danger message
                        </div>
                        <div className="fs-12">
                          <Link
                            to="#"
                            className="text-fixed-white fw-semibold me-2 op-7"
                          >
                            close
                          </Link>
                          <Link
                            to="#"
                            className="text-fixed-white fw-semibold"
                          >
                            continue
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">Alerts With Images</div>
          </div>
          <div className="card-body">
            <div
              className="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3 avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="img" />
              </div>
              <div>A simple primary alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3 avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
              </div>
              <div>A simple secondary alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3 avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
              </div>
              <div>A simple warning alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3 avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </div>
              <div>A simple danger alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3 avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
              </div>
              <div>A simple info alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3 avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="img" />
              </div>
              <div>A simple light alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3 avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-07.jpg" alt="img" />
              </div>
              <div>A simple dark alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark text-muted" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">Alerts With Different size Images</div>
          </div>
          <div className="card-body">
            <div
              className="alert alert-img alert-primary alert-dismissible fase show flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-xs me-3">
                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
              </div>
              <div>A simple primary alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-secondary alert-dismissible fase show flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-sm me-3">
                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
              </div>
              <div>A simple secondary alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-warning alert-dismissible fase show flex-wrap"
              role="alert"
            >
              <div className="avatar me-3">
                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
              </div>
              <div>A simple warning alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-danger alert-dismissible fase show flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-md me-3">
                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
              </div>
              <div>A simple danger alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-info alert-dismissible fase show flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-lg me-3">
                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
              </div>
              <div>A simple info alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark" />
              </button>
            </div>
            <div
              className="alert alert-img alert-dark alert-dismissible fase show flex-wrap"
              role="alert"
            >
              <div className="avatar avatar-xl me-3">
                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
              </div>
              <div>A simple info alert with image—check it out!</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <i className="fas fa-xmark text-muted" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="row">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="card bg-white border-0">
              <div className="alert custom-alert1 alert-primary">
                <button
                  type="button"
                  className="btn-close ms-auto"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fas fa-xmark" />
                </button>
                <div className="text-center  px-5 pb-0">
                  <div className="custom-alert-icon">
                    <i className="feather-info flex-shrink-0" />
                  </div>
                  <h5>Information?</h5>
                  <p className="">
                    This alert is created to just show the related information.
                  </p>
                  <div className="">
                    <button className="btn btn-sm btn-outline-danger m-1">
                      Decline
                    </button>
                    <button className="btn btn-sm btn-primary m-1">
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="card bg-white border-0">
              <div className="alert custom-alert1 alert-secondary">
                <button
                  type="button"
                  className="btn-close ms-auto"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fas fa-xmark" />
                </button>
                <div className="text-center px-5 pb-0">
                  <div className="custom-alert-icon">
                    <i className="feather-check-circle flex-shrink-0" />
                  </div>
                  <h5>Confirmed</h5>
                  <p className="">
                    This alert is created to just show the confirmation message.
                  </p>
                  <div className="">
                    <button className="btn btn-sm btn-secondary m-1">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="card bg-white border-0">
              <div className="alert custom-alert1 alert-warning">
                <button
                  type="button"
                  className="btn-close ms-auto"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fas fa-xmark" />
                </button>
                <div className="text-center px-5 pb-0">
                  <div className="custom-alert-icon">
                    <i className="feather-alert-triangle flex-shrink-0" />
                  </div>
                  <h5>Warning</h5>
                  <p className="">
                    This alert is created to just show the warning message.
                  </p>
                  <div className="">
                    <button className="btn btn-sm btn-outline-secondary m-1">
                      Back
                    </button>
                    <button className="btn btn-sm btn-warning m-1">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="card bg-white border-0">
              <div className="alert custom-alert1 alert-danger">
                <button
                  type="button"
                  className="btn-close ms-auto"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <i className="fas fa-xmark" />
                </button>
                <div className="text-center px-5 pb-0">
                  <div className="custom-alert-icon">
                    <i className="feather-alert-octagon flex-shrink-0" />
                  </div>
                  <h5>danger</h5>
                  <p className="">
                    This alert is created to just show the danger message.
                  </p>
                  <div className="">
                    <button className="btn btn-sm btn-danger m-1">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">Additional content</div>
          </div>
          <div className="card-body">
            <div className="row gy-3">
              <div className="col-xl-6">
                <div
                  className="alert alert-primary overflow-hidden p-0"
                  role="alert"
                >
                  <div className="p-3 bg-primary text-fixed-white d-flex justify-content-between">
                    <h6 className="aletr-heading mb-0 text-fixed-white">
                      Thank you for reporting this.
                    </h6>
                    <button
                      type="button"
                      className="btn-close p-0 text-fixed-white"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fas fa-xmark" />
                    </button>
                  </div>
                  <hr className="my-0" />
                  <div className="p-3">
                    <p className="mb-0">
                      We appreciate you to let us know the bug in the template
                      and for warning us about future consequences{" "}
                      <Link
                        to="#"
                        className="fw-semibold text-decoration-underline text-primary"
                      >
                        Visit for support for queries ?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="alert alert-secondary overflow-hidden p-0"
                  role="alert"
                >
                  <div className="p-3 bg-secondary text-fixed-white d-flex justify-content-between">
                    <h6 className="aletr-heading mb-0 text-fixed-white">
                      Thank you for reporting this.
                    </h6>
                    <button
                      type="button"
                      className="btn-close p-0 text-fixed-white"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fas fa-xmark" />
                    </button>
                  </div>
                  <hr className="my-0" />
                  <div className="p-3">
                    <p className="mb-0">
                      We appreciate you to let us know the bug in the template
                      and for warning us about future consequences{" "}
                      <Link
                        to="#"
                        className="fw-semibold text-decoration-underline text-secondary"
                      >
                        Visit for support for queries ?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="alert alert-success overflow-hidden p-0"
                  role="alert"
                >
                  <div className="p-3 bg-success text-fixed-white d-flex justify-content-between">
                    <h6 className="aletr-heading mb-0 text-fixed-white">
                      Thank you for reporting this.
                    </h6>
                    <button
                      type="button"
                      className="btn-close p-0 text-fixed-white"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fas fa-xmark" />
                    </button>
                  </div>
                  <hr className="my-0" />
                  <div className="p-3">
                    <p className="mb-0">
                      We appreciate you to let us know the bug in the template
                      and for warning us about future consequences{" "}
                      <Link
                        to="#"
                        className="fw-semibold text-decoration-underline text-success"
                      >
                        Visit for support for queries ?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="alert alert-warning overflow-hidden p-0"
                  role="alert"
                >
                  <div className="p-3 bg-warning text-fixed-white d-flex justify-content-between">
                    <h6 className="aletr-heading mb-0 text-fixed-white">
                      Thank you for reporting this.
                    </h6>
                    <button
                      type="button"
                      className="btn-close p-0 text-fixed-white"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fas fa-xmark" />
                    </button>
                  </div>
                  <hr className="my-0" />
                  <div className="p-3">
                    <p className="mb-0">
                      We appreciate you to let us know the bug in the template
                      and for warning us about future consequences{" "}
                      <Link
                        to="#"
                        className="fw-semibold text-decoration-underline text-warning"
                      >
                        Visit for support for queries ?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default AlertUi