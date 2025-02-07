import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonSelect from '../../../core/common/commonSelect';
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";

import PredefinedDateRanges from "../../../core/common/datePicker";
import CommonTagsInput from "../../../core/common/Taginput";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";


const Blogs = () => {

  const [tags, setTags] = useState<string[]>(["HRMS", "Recruitment", "HRTech"]);

  const categoryChoose = [
    { value: "Select", label: "Select" },
    { value: "Evlovution", label: "Evlovution" },
    { value: "Guide", label: "Guide" },
    { value: "Security", label: "Security" },
  ];
  const status = [
    { value: "Select", label: "Select" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Blogs</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Content</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blogs
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-file-export me-1" />
                    Export
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        <i className="ti ti-file-type-pdf me-1" />
                        Export as PDF
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        <i className="ti ti-file-type-xls me-1" />
                        Export as Excel{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <Link
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_blog"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Blog
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <h5>Blogs </h5>
                <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                  <div className="me-3">
                    <div className="input-icon-end position-relative">
                      <PredefinedDateRanges />
                      <span className="input-icon-addon">
                        <i className="ti ti-chevron-down" />
                      </span>
                    </div>
                  </div>
                  <div className="dropdown me-3">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Status
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Active
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Inactive
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Sort By : Last 7 Days
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Recently Added
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Ascending
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Desending
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last Month
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 7 Days
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-01.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Evlovution
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-02.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Gertrude Bowie
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        The Evolution of HRMS: Manual to Digital
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">3000</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">454</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">102</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">350</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-02.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Guide
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-03.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Edward Marcus
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        HRMS Implementation: Step-by-Step Guide
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">2458</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">524</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">248</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">450</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-03.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Security
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-05.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Mark Phillips
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        {" "}
                        Data Security in HRMS: What Matters
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">3000</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">454</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">102</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">350</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-04.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Recruitment
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-04.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Nidia Hale
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        {" "}
                        Improving Recruitment with HRMS
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">3200</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">424</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">402</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">250</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-05.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Implementation
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-06.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Rebecca Dale
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        {" "}
                        Impact of HRMS on Company Culture
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">2200</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">224</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">122</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">450</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-06.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Benefits
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-08.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Jimmy Johnson
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        Key Benefits of Implementing HRMS
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">2800</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">284</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">182</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">680</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-07.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Management
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-07.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Stanley Pierre
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        Why Your Company Needs a HRMS
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">4800</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">484</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">490</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">850</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-08.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Management
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-10.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        Alice Garcia
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        Scaling Your HR Operations with HRMS
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">3000</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">454</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">102</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">350</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="img-sec w-100 position-relative mb-3">
                    <Link to={all_routes.blogCategories}>
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-09.jpg"
                        className="img-fluid rounded w-100"
                        alt="img"
                      />
                    </Link>
                    <div className="">
                      <span className="trend-tag badge bg-info-transparent fs-10 fw-medium">
                        Management
                      </span>
                      <span className="badge badge-success dot-icon">
                        <i className="ti ti-point-filled" /> Active
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="me-2 d-flex align-items-center">
                        <i className="ti ti-calendar me-1" /> 05/10/2024
                      </span>
                      <Link
                        to="#"
                        className="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-09.jpg"
                          className="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                          alt="Img"
                        />
                        James Currier
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-default me-2"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#edit_blog"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="link-default"
                        data-bs-toggle="modal" data-inert={true}
                        data-bs-target="#delete_modal"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <h5 className="mb-3">
                      <Link
                        to={all_routes.blogCategories}
                        className="fs-16 fw-medium text-truncate"
                      >
                        How HRMS Drives Organizational Success
                      </Link>
                    </h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-between text-center">
                    <div className="me-3">
                      <h6 className="fs-14 fw-medium">4000</h6>
                      <span className="fs-12 fw-normal">Likes</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">554</h6>
                      <span className="fs-12 fw-normal">Comments</span>
                    </div>
                    <div className="border-start text-gray ps-3 me-3">
                      <h6 className="fs-14 fw-medium">202</h6>
                      <span className="fs-12 fw-normal">Share</span>
                    </div>
                    <div className="border-start text-gray ps-3">
                      <h6 className="fs-14 fw-medium">450</h6>
                      <span className="fs-12 fw-normal">Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <Link to="#" className="btn btn-white border">
              <i className="ti ti-loader-3 text-primary me-2" />
              Load More
            </Link>
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
      <>
        {/* Add Blog */}
        <div className="modal fade" id="add_blog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Blog</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form action="blogs.html">
                <div className="modal-body pb-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-30.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="profile-upload">
                          <div className="mb-2">
                            <h6 className="mb-1">Featured Image</h6>
                            <p className="fs-12">Image should be below 4 mb</p>
                          </div>
                          <div className="profile-uploader d-flex align-items-center">
                            <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                              Upload
                              <input
                                type="file"
                                className="form-control image-sign"
                                multiple
                              />
                            </div>
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Blog Title <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Category <span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className="select"
                          options={categoryChoose}
                          defaultValue={categoryChoose[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Tags <span className="text-danger"> *</span>
                        </label>
                        <CommonTagsInput
                          value={tags}
                          onChange={setTags}
                          placeholder="Add new"
                          className="form-control" // Optional custom class
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 ">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          className="select"
                          options={status}
                          defaultValue={status[0]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <div className="summernote">
                          <p className="text-gray fw-normal">
                            Write a new comment, send your team notification by typing
                            @ followed by their name
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                    Add Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Blog */}
      </>

      <>
        {/* Edit Blog */}
        <div className="modal fade" id="edit_blog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Blog</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form action="blogs.html">
                <div className="modal-body pb-0">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-30.jpg"
                            alt="img"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="profile-upload">
                          <div className="mb-2">
                            <h6 className="mb-1">Featured Image</h6>
                            <p className="fs-12">Image should be below 4 mb</p>
                          </div>
                          <div className="profile-uploader d-flex align-items-center">
                            <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                              Upload
                              <input
                                type="file"
                                className="form-control image-sign"
                                multiple
                              />
                            </div>
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Blog Title <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Category <span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className="select"
                          options={categoryChoose}
                          defaultValue={categoryChoose[1]}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Tags <span className="text-danger"> *</span>
                        </label>
                        <CommonTagsInput
                          value={tags}
                          onChange={setTags}
                          placeholder="Add new"
                          className="form-control" // Optional custom class
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3 ">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          className="select"
                          options={status}
                          defaultValue={status[1]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <div className="summernote">
                          <p className="text-gray fw-normal">
                            Write a new comment, send your team notification by typing
                            @ followed by their name
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Blog */}
      </>


    </>

  );
};

export default Blogs;
