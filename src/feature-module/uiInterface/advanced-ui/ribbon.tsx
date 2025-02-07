import React from "react";
import { Link } from "react-router-dom";

const Ribbon = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Ribbons</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Ribbons</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <h5 className="fw-semibold mb-4">Ribbon Style 1</h5>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="power-ribbone power-ribbone-top-left text-warning">
                <span className="bg-warning">
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="power-ribbone power-ribbone-bottom-left text-primary">
                <span className="bg-primary">
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="power-ribbone power-ribbone-top-right text-danger">
                <span className="bg-danger">
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="power-ribbone power-ribbone-bottom-right text-success">
                <span className="bg-success">
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5 className="fw-semibold mb-4">Ribbon Style 2</h5>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="ribbone ribbone-top-left text-primary">
                <span className="bg-primary">sold out</span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card  sold-out">
              <div className="ribbone ribbone-top-right text-danger">
                <span className="bg-danger">Offer</span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="ribbone ribbone-top-left text-success">
                <span className="bg-success">Update</span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card sold-out">
              <div className="ribbone ribbone-top-right text-warning">
                <span className="bg-warning">Open</span>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5 className="fw-semibold mb-4">Ribbon Style 3</h5>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="arrow-ribbone-left bg-secondary">Sale</div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="arrow-ribbone-right bg-info">Price</div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="arrow-ribbone-left bg-warning">Service</div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card ribbone-card">
              <div className="arrow-ribbone-right bg-teal">Offer</div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ribbone-row">
          <h5 className="fw-semibold mb-4">Ribbon Style 4</h5>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="ribbone-success-left">
                <span>
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="ribbone-warning-right">
                <span>
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="ribbone-info-left">
                <span>
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="ribbone-danger-right">
                <span>
                  <i data-feather="zap" className="feather-zap" />
                </span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5 className="fw-semibold mb-4">Ribbon Style 5</h5>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="bookmark-ribbone-danger-left">
                <span>Jul</span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="bookmark-ribbone-secondary-right">
                <span>Aug</span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="bookmark-sideleft-ribbone-success-left">
                <span>Sept</span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <span className="bookmark-sideright-ribbone-primary-right">
                <span>Oct</span>
              </span>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5 className="fw-semibold mb-4">Ribbon Style 6</h5>
          <div className="col-xxl-2 col-lg-4 col-md-4 col-sm-10 mx-0 mx-sm-7">
            <div className="card br-0">
              <div className="fullwidth-secondary-ribbons">
                <div className="bar">
                  CSS Ribbon
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-md-4 col-sm-10 mx-0 mx-sm-7">
            <div className="card br-0">
              <div className="fullwidth-primary-ribbons">
                <div className="bar">
                  CSS Ribbon
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-md-4 col-sm-10 mx-0 mx-sm-7">
            <div className="card br-0">
              <div className="fullwidth-arrow-warning-ribbons">
                <div className="bar">
                  CSS Ribbon
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-4 col-md-4 col-sm-10 mx-0 mx-sm-7">
            <div className="card br-0">
              <div className="fullwidth-arrow-danger-ribbons-right">
                <div className="bar">
                  CSS Ribbon
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="card-body  p-6">
                <h6 className="card-subtitle mb-2 text-dark fw-bold">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title. Some quick
                  example text to build on the card title
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
