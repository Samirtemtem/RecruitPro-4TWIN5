import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const SearchResult = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Search Result</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Pages</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Search Result
                  </li>
                </ol>
              </nav>
            </div>
            <div className="head-icons ms-2">
              <CollapseHeader />
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-body">
              <form>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control flex-fill me-3"
                    defaultValue="SmartHR"
                  />
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Search result for "SmartHR"</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <Link to="#" className="text-info text-truncate mb-2">
                        https://themeforest.net/search/smarthr
                      </Link>
                      <p className="text-truncate line-clamb-2 mb-2">
                        SmartHR - Html, Vue 3, Angular 17+ &amp; Node HR Project
                        Management &amp; CRM Admin Dashboard Template
                      </p>
                      <div className="d-flex align-items-center flex-wrap row-gap-2">
                        <span className="text-gray-9 me-3 pe-3 border-end">
                          1.7K Sales
                        </span>
                        <div className="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-gray-2 me-1" />
                          (45)
                        </div>
                        <span className="text-gray-9">$35</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <Link to="#" className="text-info text-truncate mb-2">
                        https://themeforest.net/item/smarthr-react-admin-template/28253842
                      </Link>
                      <p className="text-truncate line-clamb-2 mb-2">
                        SmartHR - React 18+ &amp; Html HRMS, Payroll, CRM and HR
                        Project Management Admin Dashboard Template
                      </p>
                      <div className="d-flex align-items-center flex-wrap row-gap-2">
                        <span className="text-gray-9 me-3 pe-3 border-end">
                          513 Sales
                        </span>
                        <div className="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-gray-2 me-1" />
                          (18)
                        </div>
                        <span className="text-gray-9">$35</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <Link to="#" className="text-info text-truncate mb-2">
                        https://themeforest.net/item/smarthr-laravel-admin-template/27532539
                      </Link>
                      <p className="text-truncate line-clamb-2 mb-2">
                        SmartHR - Laravel 10 + Html HRMS, Payroll, CRM and HR
                        Project Management Admin Dashboard Template
                      </p>
                      <div className="d-flex align-items-center flex-wrap row-gap-2">
                        <span className="text-gray-9 me-3 pe-3 border-end">
                          339 Sales
                        </span>
                        <div className="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-gray-2 me-1" />
                          (8)
                        </div>
                        <span className="text-gray-9">$35</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <Link to="#" className="text-info text-truncate mb-2">
                        https://themeforest.net/item/dhr-html-mobile-template/22227174
                      </Link>
                      <p className="text-truncate line-clamb-2 mb-2">
                        SmartHR - HRMS, Payroll, and HR Project Management Mobile
                        Template (Framework7 + Bootstrap + PWA)
                      </p>
                      <div className="d-flex align-items-center">
                        <span className="text-gray-9 me-3 pe-3 border-end">
                          293 Sales
                        </span>
                        <div className="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-gray-2 me-1" />
                          (5)
                        </div>
                        <span className="text-gray-9">$24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="mb-3">Images</h5>
              <div className="row g-3">
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-15.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-15.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-16.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-16.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-17.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-17.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-18.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-18.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-19.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-19.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-20.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-20.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-21.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-21.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-22.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-22.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-23.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-23.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-24.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-24.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-25.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-25.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="assets/img/media/media-26.jpg"
                    data-fancybox="gallery"
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-26.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
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


  );
};

export default SearchResult;
