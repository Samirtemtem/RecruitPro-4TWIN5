import React, { useState } from "react";
import { Link } from "react-router-dom";
import FileModal from "./fileModal";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactApexChart from "react-apexcharts";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";

const FileManager = () => {
  const [isOpen, setOpen] = useState(false);
  const options = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
    { value: "Recently Viewed", label: "Recently Viewed" },
    { value: "Recently Added", label: "Recently Added" },
    { value: "Creation Date", label: "Creation Date" },
  ];
  const routes = all_routes;
  const video = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    margin: 24,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const [Storage] = useState<any>({
    chart: {
      height: 200,
      type: 'donut',
      toolbar: {
        show: false,
      },
      offsetY: -10,
      events: {

      },
    },
    plotOptions: {
      pie: {
        startAngle: -100,
        endAngle: 100,
        donut: {
          size: '80%',
          labels: {
            show: true,
            name: {
              show: true,
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    stroke: {
      show: false
    },
    colors: ['#0C4B5E', '#FFC107', '#1B84FF', '#AB47BC', '#FD3995'],
    series: [20, 20, 20, 20, 20],
    labels: ['Documents', 'Video', 'Music', 'Photos', 'Other'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    grid: {
      padding: {
        bottom: -60  // Reduce padding from the bottom
      }
    }
  })
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">File Manager</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    File Manager
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="input-icon-start position-relative">
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Files / Folders"
                  />
                </div>
              </div>
              <div className="me-2 mb-2">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    All Files
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        All Files
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Music
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Video
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Documents
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Photos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-2">
                <Link
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_folder"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Create Folder
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          <div className="row">
            {/* Dropbox */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightdanger-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/icons/dropbox.svg" alt="img" />
                      <h5 className="ms-2">Dropbox</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-pink rounded"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">200 Files</p>
                    <p className="text-title mb-0">28GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Dropbox */}
            {/* Google Drive */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightpink-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/icons/drive.svg" alt="img" />
                      <h5 className="ms-2">Google Drive</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-pink rounded"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">144 Files</p>
                    <p className="text-title mb-0">54GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Google Drive */}
            {/* Cloud Storage */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightsuccess-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/icons/cloud.svg" alt="img" />
                      <h5 className="ms-2">Cloud Storage</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-purple rounded"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">144 Files</p>
                    <p className="text-title mb-0">54GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Cloud Storage */}
            {/* Internal Storage */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="card bg-lightpurple-gradient flex-fill">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/icons/storage.svg" alt="img" />
                      <h5 className="ms-2">Internal Storage</h5>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-dots" />
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-folder-open me-2" />
                            Open
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-trash me-1" />
                            Delete All
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            <i className="ti ti-status-change me-1" />
                            Reset
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="progress progress-xs flex-grow-1 mb-2">
                    <div
                      className="progress-bar bg-purple rounded"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0">144 Files</p>
                    <p className="text-title mb-0">54GB</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Internal Storage */}
          </div>
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3  theiaStickySidebar">
              <div className="sticky-class">
                <div className="card ">
                  <div className="card-body p-3">
                    <div className="shadow-xs p-2 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden">
                          <span className="avatar">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-29.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </span>
                          <div className="overflow-hidden ms-2">
                            <h5 className="text-truncate">James Hong</h5>
                            <p className="fs-12 text-truncate">Jnh343@example.com</p>
                          </div>
                        </div>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu  dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="file-drop mb-3 text-center">
                      <span className="avatar avatar-sm bg-primary text-white mb-2">
                        <i className="ti ti-upload fs-16" />
                      </span>
                      <h6 className="mb-2">Drop files here</h6>
                      <p className="fs-12 mb-0">
                        Browse and chose the files you want to upload from your
                        computer
                      </p>
                      <input type="file" />
                    </div>
                    <div className="files-list nav d-block">
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2 active"
                      >
                        <i className="ti ti-folder-up me-2" />
                        All Folder / Files
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Drive
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-octahedron me-2" />
                        Dropbox
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-share-2 me-2" />
                        Shared with Me
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-file me-2" />
                        Document
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-clock-hour-11 me-2" />
                        Recent File
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Important
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-music me-2" />
                        Media
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Storage Details */}
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="mb-2">Storage Details</h4>
                      <span className="badge badge-success mb-2">Used 77%</span>
                    </div>
                    <ReactApexChart
                      id="emp-department"
                      options={Storage}
                      series={Storage.series}
                      type="donut"
                      height={210}
                    />
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-info">
                          <i className="ti ti-music fs-20 text-info" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Music</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-title">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-warning">
                          <i className="fa-regular fa-file-audio fs-20 text-warning" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Video</h6>
                          <p className="text-truncate">145 Files</p>
                        </div>
                      </div>
                      <p className="text-title">2 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-secondary">
                          <i className="ti ti-file-description fs-20 text-secondary" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Documents</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-title">24.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-purple">
                          <i className="ti ti-photo fs-20 text-purple" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Photos</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-title">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-purple">
                          <i className="ti ti-file-type-doc fs-20 text-pink" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Other</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-title">16.2 GB</p>
                    </div>
                  </div>
                </div>
                {/* /Storage Details */}
                {/* Upgrade Details */}
                <div className="card bg-black bg-01">
                  <div className="card-body text-center">
                    <ImageWithBasePath
                      src="assets/img/icons/upgrade.svg"
                      alt="img"
                      className="mb-3"
                    />
                    <h6 className="mb-3 text-white">
                      Upgrade to Pro for Unlimited Storage
                    </h6>
                    <Link to="#" className="btn btn-white btn-sm">
                      Upgrade Now
                      <i className="ti ti-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
                {/* /Upgrade Details */}
              </div>

            </div>
            {/* /Sidebar */}
            <div className="col-xl-9">
              {/* Quick Access */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">Quick Access</h4>
                  <div>
                    <Link
                      to="#"
                      className="mb-2 me-3 fw-medium link-default"
                    >
                      Close
                    </Link>
                    <Link
                      to="#"
                      className="mb-2 fw-medium link-default"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-sm-3 row-cols-1 justify-content-center">
                  <div className="col d-flex">
                    <div className="card access-wrap border-0 flex-fill">
                      <div className="card-body text-center">
                        <ImageWithBasePath
                          src="assets/img/icons/file.svg"
                          alt="img"
                          className="mb-3"
                        />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Final Change.doc
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">2.4 GB</span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star-filled filled" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap border-0 flex-fill">
                      <div className="card-body text-center">
                        <ImageWithBasePath
                          src="assets/img/icons/pdf-icon.svg"
                          alt="img"
                          className="mb-3"
                        />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Marklist.pdf
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">2.4 GB</span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap border-0 flex-fill">
                      <div className="card-body text-center">
                        <ImageWithBasePath
                          src="assets/img/icons/image.svg"
                          alt="img"
                          className="mb-3"
                        />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Nature.png
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">2.4 GB</span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star-filled filled" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap border-0 flex-fill">
                      <div className="card-body text-center">
                        <ImageWithBasePath
                          src="assets/img/icons/xls-icon.svg"
                          alt="img"
                          className="mb-3"
                        />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            List.xlsx
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">2.4 GB</span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star" />
                      </span>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="card access-wrap border-0 flex-fill">
                      <div className="card-body text-center">
                        <ImageWithBasePath
                          src="assets/img/icons/folder-icon.svg"
                          alt="img"
                          className="mb-3"
                        />
                        <h6 className="mb-2 fw-medium">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Group Photos
                          </Link>
                        </h6>
                        <span className="badge badge-dark-transparent">2.4 GB</span>
                      </div>
                      <span className="access-rate rating-select">
                        <i className="ti ti-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Quick Access */}
              {/* Recent Videos */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">Recent Videos</h4>
                  <div className="dropdown mb-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
                      Last 7 Days
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 7 Days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 1 month
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 1 year
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Slider {...video} className="owl-carousel video-section">
                  <div className="video-wrap">
                    <video
                      width={100}
                      height={100}
                      className="js-player"
                      crossOrigin=""
                      playsInline
                      controls
                      poster="assets/img/file-manager/video-01.jpg"
                    >
                      <source
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="d-flex align-items-center justify-content-between video-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          Inertia Movie
                        </Link>
                      </h6>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="rating-select">
                          <i className="ti ti-star-filled filled" />
                        </Link>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-folder-open me-2" />
                                Preview
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-copy me-2" />
                                Duplicate
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-arrow-left-right me-2" />
                                Move
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-user-plus me-2" />
                                Invite
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-share-3 me-2" />
                                Share Link
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-2" />
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-eye me-2" />
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-download me-2" />
                                Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video-wrap">
                    <video
                      width={100}
                      height={100}
                      className="js-player"
                      crossOrigin=""
                      playsInline
                      controls
                      poster="assets/img/file-manager/video-02.jpg"
                    >
                      <source
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="d-flex align-items-center justify-content-between video-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          2028/11/10.mp4
                        </Link>
                      </h6>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="rating-select">
                          <i className="ti ti-star-filled filled" />
                        </Link>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-folder-open me-2" />
                                Preview
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-copy me-2" />
                                Duplicate
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-arrow-left-right me-2" />
                                Move
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-user-plus me-2" />
                                Invite
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-share-3 me-2" />
                                Share Link
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-2" />
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-eye me-2" />
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-download me-2" />
                                Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video-wrap">
                    <video
                      width={100}
                      height={100}
                      className="js-player"
                      crossOrigin=""
                      playsInline
                      controls
                      poster="assets/img/file-manager/video-03.jpg"
                    >
                      <source
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    {/* <div className="plyr__poster" style={{backgroundImage: `url('assets/img/file-manager/video-03.jpg')`}}></div> */}
                    <div className="d-flex align-items-center justify-content-between video-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          AI Liquid Color
                        </Link>
                      </h6>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="rating-select">
                          <i className="ti ti-star-filled filled" />
                        </Link>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-folder-open me-2" />
                                Preview
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-copy me-2" />
                                Duplicate
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-arrow-left-right me-2" />
                                Move
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-user-plus me-2" />
                                Invite
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-share-3 me-2" />
                                Share Link
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-2" />
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-eye me-2" />
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-download me-2" />
                                Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video-wrap">
                    <video
                      width={100}
                      height={100}
                      className="js-player"
                      crossOrigin=""
                      playsInline
                      controls
                      poster="assets/img/file-manager/video-01.jpg"
                    >
                      <source
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="d-flex align-items-center justify-content-between video-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          Inertia Movie
                        </Link>
                      </h6>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="rating-select">
                          <i className="ti ti-star-filled filled" />
                        </Link>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-folder-open me-2" />
                                Preview
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-copy me-2" />
                                Duplicate
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-arrow-left-right me-2" />
                                Move
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-user-plus me-2" />
                                Invite
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-share-3 me-2" />
                                Share Link
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-2" />
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-eye me-2" />
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-download me-2" />
                                Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video-wrap">
                    <video
                      width={100}
                      height={100}
                      className="js-player"
                      crossOrigin=""
                      playsInline
                      controls
                      poster="assets/img/file-manager/video-02.jpg"
                    >
                      <source
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="d-flex align-items-center justify-content-between video-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          2028/11/10.mp4
                        </Link>
                      </h6>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="rating-select">
                          <i className="ti ti-star-filled filled" />
                        </Link>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-folder-open me-2" />
                                Preview
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-copy me-2" />
                                Duplicate
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-arrow-left-right me-2" />
                                Move
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-user-plus me-2" />
                                Invite
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-share-3 me-2" />
                                Share Link
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-2" />
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-eye me-2" />
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-download me-2" />
                                Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video-wrap">
                    <video
                      width={100}
                      height={100}
                      className="js-player"
                      crossOrigin=""
                      playsInline
                      controls
                      poster="assets/img/file-manager/video-03.jpg"
                    >
                      <source
                        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    {/* <div className="plyr__poster" style={{backgroundImage: `url('assets/img/file-manager/video-03.jpg')`}}></div> */}
                    <div className="d-flex align-items-center justify-content-between video-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          AI Liquid Color
                        </Link>
                      </h6>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="rating-select">
                          <i className="ti ti-star-filled filled" />
                        </Link>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-folder-open me-2" />
                                Preview
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-copy me-2" />
                                Duplicate
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-arrow-left-right me-2" />
                                Move
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-user-plus me-2" />
                                Invite
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-share-3 me-2" />
                                Share Link
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-2" />
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-eye me-2" />
                                View Details
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-download me-2" />
                                Download
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* /Recent Videos */}
              {/* Recent Folders */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">Recent Folders</h4>
                  <div className="dropdown mb-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
                      Last 7 Days
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 7 Days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 1 month
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last 1 year
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Slider {...video} className="owl-carousel folders-carousel">
                  <div className="folder-wrap bg-white d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="text-warning fs-30">
                        <i className="ti ti-folder-filled" />
                      </span>
                      <div className="ms-2">
                        <h6 className="mb-1">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Personal Assets
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <p className="fs-12 mb-0 me-2">2.4 GB</p>
                          <p className="fs-12 mb-0 d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-6 me-2 text-title" />
                            135&nbsp;files
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-19.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-29.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="folder-wrap bg-white d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="text-warning fs-30">
                        <i className="ti ti-folder-filled" />
                      </span>
                      <div className="ms-2">
                        <h6 className="mb-1">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Document
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <p className="fs-12 mb-0 me-2">4 GB</p>
                          <p className="fs-12 mb-0 d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-6 me-2 text-title" />
                            15&nbsp;files
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="folder-wrap bg-white d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="text-warning fs-30">
                        <i className="ti ti-folder-filled" />
                      </span>
                      <div className="ms-2">
                        <h6 className="mb-1">
                          <Link
                            to="#"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#preview"
                          >
                            Handyimages
                          </Link>
                        </h6>
                        <div className="d-flex align-items-center">
                          <p className="fs-12 mb-0 me-2">1.4 GB</p>
                          <p className="fs-12 mb-0 d-flex align-items-center">
                            <i className="ti ti-circle-filled fs-6 me-2 text-title" />
                            115&nbsp;files
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* /Recent Folders */}
              {/* Recent Files */}
              <div className="border-bottom mb-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="mb-2">
                    <Link
                      to="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#preview"
                    >
                      Recent Files
                    </Link>
                  </h4>
                  <div className="dropdown mb-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
                      Last Modified
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Newest to Oldest
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Last Modified
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Oldest to Newest
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Slider {...video} className="owl-carousel files-carousel">
                  <div className="files-wrap">
                    <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center  files-icon">
                      <i className="ti ti-file-description fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium">customer_data.txt</h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="files-wrap">
                    <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center files-icon">
                      <i className="ti ti-file-type-pdf fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium text-truncate">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          video_player_installer_setup.rar
                        </Link>
                      </h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="files-wrap">
                    <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center files-icon">
                      <i className="fa-regular fa-file-audio fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium text-truncate">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          recording.mp3
                        </Link>
                      </h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="files-wrap">
                    <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center files-icon">
                      <i className="fa-solid fa-file-zipper fs-24 text-title" />
                    </div>
                    <div className="bg-white d-flex align-items-center justify-content-between p-3 files-content">
                      <h6 className="fw-medium">
                        <Link
                          to="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#preview"
                        >
                          header_file.zip
                        </Link>
                      </h6>
                      <div className="dropdown ms-2">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Preview
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-copy me-2" />
                              Duplicate
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-arrow-left-right me-2" />
                              Move
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-user-plus me-2" />
                              Invite
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Share Link
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-2" />
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-eye me-2" />
                              View Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-download me-2" />
                              Download
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash-x me-2" />
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              {/* /Recent Files */}
              {/* Student List */}
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="mb-2">Files</h4>
                <div className="d-flex align-items-center">
                  <div className="dropdown mb-2 me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
                      Sort By : Docs Type
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Docs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Pdf
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Image
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Folder
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Xml
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="#"
                    className="link-primary fw-medium mb-2"
                  >
                    View All
                  </Link>
                </div>
              </div>
              <div className="custom-datatable-filter table-responsive mb-4">
                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_length px-3" id="DataTables_Table_0_length">
                        <label>
                          Row Per Page{" "}
                          <select
                            name="DataTables_Table_0_length"
                            aria-controls="DataTables_Table_0"
                            className="form-select form-select-sm"
                          >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>{" "}
                          Entries
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="DataTables_Table_0_filter  px-3" className="dataTables_filter text-end">
                        <label>
                          {" "}
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="Search"
                            aria-controls="DataTables_Table_0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <table className="table datatable">
                    <thead className="thead-light">
                      <tr>
                        <th className="no-sort">
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="select-all"
                            />
                          </div>
                        </th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Type</th>
                        <th>Modified</th>
                        <th>Share</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-01.svg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Secret
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>7.6 MB</td>
                        <td>Doc</td>
                        <td>
                          <p className="text-title mb-0">Mar 15, 2025</p>
                          <span>05:00:14 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-27.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-29.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-12.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-02.svg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Sophie Headrick
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>7.4 MB</td>
                        <td>PDF</td>
                        <td>
                          <p className="text-title mb-0">Jan 8, 2025</p>
                          <span>08:20:13 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-03.svg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Gallery
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>6.1 MB</td>
                        <td>Image</td>
                        <td>
                          <p className="text-title mb-0">Aug 6, 2025</p>
                          <span>04:10:12 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-06.jpg"
                                alt="img"
                              />
                            </span>
                            <Link
                              className="avatar bg-primary avatar-rounded text-fixed-white"
                              to="#"
                            >
                              +1
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-04.svg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Doris Crowley
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>5.2 MB</td>
                        <td>Folder</td>
                        <td>
                          <p className="text-title mb-0">Jan 6, 2025</p>
                          <span>03:40:14 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-06.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-10.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-05.svg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Cheat_codez
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>8 MB</td>
                        <td>Xml</td>
                        <td>
                          <p className="text-title mb-0">Oct 12, 2025</p>
                          <span>05:00:14 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-04.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-28.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info px-3"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 - 5 of 5 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers px-3"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"
                          >
                            <Link
                              to="#"
                              aria-controls="DataTables_Table_0"
                              aria-disabled="true"
                              role="link"
                              data-dt-idx="previous"
                              tabIndex={-1}
                              className="page-link"
                            >
                              <i className="ti ti-chevron-left" />{" "}
                            </Link>
                          </li>
                          <li className="paginate_button page-item active">
                            <Link
                              to="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              aria-current="page"
                              data-dt-idx={0}
                              tabIndex={0}
                              className="page-link"
                            >
                              1
                            </Link>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <Link
                              to="#"
                              aria-controls="DataTables_Table_0"
                              aria-disabled="true"
                              role="link"
                              data-dt-idx="next"
                              tabIndex={-1}
                              className="page-link"
                            >
                              <i className="ti ti-chevron-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* /Student List */}
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


      <FileModal />



    </>

  );
};

export default FileManager;
