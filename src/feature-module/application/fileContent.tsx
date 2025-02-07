import React from "react";
import { ChevronRight, Filter, FileText } from "react-feather";
import { Link } from "react-router-dom";
import Select from "react-select";
import Table from "../../core/common/dataTable/index";
import { TableData } from "../../core/data/interface";

import ImageWithBasePath from "../../core/common/imageWithBasePath";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import PredefinedDateRanges from "../../core/common/datePicker";
import { filesData } from "../../core/data/json/file_data";
import Item from "antd/es/list/Item";

const FileContent = () => {
  const folderSlider = {
    loop: true,
    margin: 15,
    items: 3,
    nav: true,
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 1,
        },
      },
    ],
  };
  const videoSlider = {
    loop: true,
    margin: 15,
    items: 3,
    nav: true,
    dots: false,
    autoplay: false,
    slidesToShow: 3,
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
          slidesToShow: 1,
        },
      },
    ],
  };
  const fileSlider = {
    loop: true,
    margin: 15,
    items: 3,
    nav: true,
    dots: false,
    autoplay: false,
    slidesToShow: 3,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  const options2 = [
    { value: "sortByDate", label: "Sort by Date" },
    { value: "sortByRelevance", label: "Sort By Relevance" },
    { value: "sortBySize", label: "Sort By Size" },
    { value: "Ascending", label: "Order Ascending" },
    { value: "Descending", label: "Order Descending" },
    { value: "uploadTime", label: "Upload Time" },
  ];

  const options3 = [
    { value: "recent", label: "Recent" },
    { value: "lastWeek", label: "Last Week" },
    { value: "lastMonth", label: "Last Month" },
  ];

  const options4 = [
    { value: "allFileTypes", label: "All File types" },
    { value: "folders", label: "Folders" },
    { value: "pdf", label: "PDF" },
    { value: "images", label: "Images" },
    { value: "videos", label: "Videos" },
    { value: "audios", label: "Audios" },
    { value: "excel", label: "Excel" },
  ];
  const optionsBulk = [
    { value: "bulkActions", label: "Bulk Actions" },
    { value: "deleteMarked", label: "Delete Marked" },
    { value: "unmarkAll", label: "Unmark All" },
    { value: "markAll", label: "Mark All" },
  ];
  const optionsRecent = [
    { value: "recent", label: "Recent" },
    { value: "lastModified", label: "Last Modified" },
    { value: "lastModifiedByMe", label: "Last Modified by me" },
  ];
  const data = filesData;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath
              src={record.imgSrc}
              className="img-fluid"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">
              <Link to="#">{text}</Link>
            </p>
          </div>
        </div>
      ),
      sorter: (a: TableData, b: TableData) => a.name.length - b.name.length,
    },
    {
      title: "Last Modified",
      dataIndex: "lastModified",
      sorter: (a: TableData, b: TableData) =>
        new Date(a.lastModified).getTime() - new Date(b.lastModified).getTime(),
    },
    {
      title: "Size",
      dataIndex: "size",
      sorter: (a: TableData, b: TableData) =>
        parseFloat(a.size) - parseFloat(b.size),
    },
    {
      title: "Owned Member",
      dataIndex: "ownedMember",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md">
            <ImageWithBasePath
              src={record.ownedMemberImgSrc}
              className="img-fluid rounded-circle"
              alt="img"
            />
          </Link>
          <div className="ms-2">
            <p className="text-dark mb-0">
              <Link to="#">{text}</Link>
            </p>
          </div>
        </div>
      ),
      sorter: (a: TableData, b: TableData) =>
        a.ownedMember.length - b.ownedMember.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text: string) => (
        <div className="dropdown">
          <Link
            to="#"
            className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical fs-14"></i>
          </Link>
          <ul className="dropdown-menu dropdown-menu-right p-3">
            <li>
              <Link className="dropdown-item rounded-1" to="#">
                <i className="ti ti-trash me-2"></i>
                {text.split(", ")[0]}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item rounded-1" to="#">
                <i className="ti ti-edit-circle me-2"></i>
                {text.split(", ")[1]}
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="section-bulks-wrap">
            <div className="bg-white rounded-3 d-flex align-items-center justify-content-between flex-wrap my-4 p-3 pb-0">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <Select
                    className="select"
                    options={optionsBulk}
                    classNamePrefix="react-select"
                  />
                </div>
                <Link to="#" className="btn btn-light">
                  Apply
                </Link>
              </div>
              <div className="form-sort mb-3">
                <i className="ti ti-filter feather-filter info-img ms-0" />

                <Select
                  className="select"
                  options={optionsRecent}
                  classNamePrefix="react-select"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Overview */}
      <div className="d-block">
        <h4 className="mb-3">Overview</h4>
        <div className="row g-3">
          <div className="col-sm-6 col-md-3">
            <div className="mb-3">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center bg-light-orange p-3 rounded-top"
              >
                <span className="d-flex align-items-center justify-content-center p-4">
                  <ImageWithBasePath
                    src="assets/img/icons/folder.svg"
                    alt="Folder"
                  />
                </span>
              </Link>
              <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom">
                <h5>
                  <Link to="#">Folders</Link>
                </h5>
                <span className="text-muted">300 Files</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="mb-3">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center bg-light-red p-3 rounded-top"
              >
                <span className="d-flex align-items-center justify-content-center p-4">
                  <ImageWithBasePath
                    src="assets/img/icons/pdf-02.svg"
                    alt="Folder"
                  />
                </span>
              </Link>
              <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom">
                <h6>
                  <Link to="#">PDF</Link>
                </h6>
                <span>50 Files</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="mb-3">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center bg-light-green p-3 rounded-top"
              >
                <span className="d-flex align-items-center justify-content-center p-4">
                  <ImageWithBasePath
                    src="assets/img/icons/image.svg"
                    alt="Folder"
                  />
                </span>
              </Link>
              <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom">
                <h6>
                  <Link to="#">Images</Link>
                </h6>
                <span>240 Files</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="mb-3">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center bg-light-red p-3 rounded-top"
              >
                <span className="d-flex align-items-center justify-content-center p-4">
                  <ImageWithBasePath
                    src="assets/img/icons/video.svg"
                    alt="Folder"
                  />
                </span>
              </Link>
              <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom">
                <h6>
                  <Link to="#">Videos</Link>
                </h6>
                <span>30 Files</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="mb-3">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center bg-light-orange p-3 rounded-top"
              >
                <span className="d-flex align-items-center justify-content-center p-4">
                  <ImageWithBasePath
                    src="assets/img/icons/audio.svg"
                    alt="Folder"
                  />
                </span>
              </Link>
              <div className="d-flex align-items-center justify-content-between p-3 bg-white rounded-bottom">
                <h6>
                  <Link to="#">Audios</Link>
                </h6>
                <span>100 Files</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Overview */}
      {/* Filemanager Items */}
      <div className="d-block">
        <div className="mb-4 pb-4 border-bottom">
          <div className="d-flex align-items-center mb-3">
            <h4>Folders</h4>
            <div className="owl-nav slide-nav6 text-end nav-control ms-3" />
          </div>
          <Slider
            {...folderSlider}
            className="owl-carousel folders-carousel owl-theme"
          >
            <div className="p-3 border p-3 bg-white rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/folder.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">Project Details</Link>
                  </h5>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropset"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="#" className="dropdown-item">
                        Details
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Share
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Copy
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Move
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Download
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Rename
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Archeived
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start my-3">
                <p className="text-primary mb-0 me-2 pe-1">Project plan</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  27 MB
                </span>
                <span className="d-flex align-items-center fw-semibold">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  208 Files
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="avatar-list-stacked avatar-group-sm">
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 1"
                      data-bs-original-title="Member 1"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 2"
                      data-bs-original-title="Member 2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="fw-semibold mt-2">
                    <Link className="text-success ms-3" to="#">
                      2 Members
                    </Link>
                  </span>
                </div>
                <Link to="#">
                  <i className="ti ti-star fs-16" />
                </Link>
              </div>
            </div>
            <div className="p-3 border p-3 bg-white rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/folder.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">Website Backup</Link>
                  </h5>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropset"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="#" className="dropdown-item">
                        Details
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Share
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Copy
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Move
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Download
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Rename
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Archeived
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start my-3">
                <p className="text-primary mb-0 me-2 pe-1">Important</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  600 MB
                </span>
                <span className="d-flex align-items-center fw-semibold">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  48 Files
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="avatar-list-stacked avatar-group-sm">
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 1"
                      data-bs-original-title="Member 1"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-11.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 2"
                      data-bs-original-title="Member 2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-12.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 2"
                      data-bs-original-title="Member 3"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 2"
                      data-bs-original-title="Member 3"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-04.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="fw-semibold mt-2">
                    <Link className="text-success ms-3" to="#">
                      4 Members
                    </Link>
                  </span>
                </div>
                <Link to="#">
                  <i className="ti ti-star fs-16" />
                </Link>
              </div>
            </div>
            <div className="p-3 border p-3 bg-white rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/folder.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">Number_Proj Photos</Link>
                  </h5>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropset"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="#" className="dropdown-item">
                        Details
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Share
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Copy
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Move
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Download
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Rename
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Archeived
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start my-3">
                <p className="text-primary mb-0 me-2 pe-1">Project plan</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  150 MB
                </span>
                <span className="d-flex align-items-center fw-semibold">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  208 Files
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="avatar-list-stacked avatar-group-sm">
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 1"
                      data-bs-original-title="Member 1"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-05.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 2"
                      data-bs-original-title="Member 2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-10.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="avatar border-0">
                    <Link
                      to="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Member 2"
                      data-bs-original-title="Member 3"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-07.jpg"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                    </Link>
                  </span>
                  <span className="fw-semibold mt-2">
                    <Link className="text-success ms-3" to="#">
                      + 3 Members
                    </Link>
                  </span>
                </div>
                <Link to="#">
                  <i className="ti ti-star fs-16" />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
        <div className="mb-4 pb-4 border-bottom">
          <div className="d-flex align-items-center mb-3">
            <h4>Files</h4>
            <div className="owl-nav slide-nav7 text-end nav-control ms-3" />
          </div>
          <Slider
            {...fileSlider}
            className="owl-carousel files-carousel owl-theme"
          >
            <div className="border rounded-3 bg-white p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/pdf-02.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">hsa.pdf</Link>
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <Link to="#">
                    <i className="fa fa-star me-2" />
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="dropset"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#" className="dropdown-item">
                          Details
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Copy
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Move
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Rename
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Archeived
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-3">
                <p className="text-primary mb-0 me-2">Last edited 14 Jul</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  150 MB
                </span>
              </div>
            </div>
            <div className="border rounded-3 bg-white p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/pdf-02.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">Haird.pdf</Link>
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <Link to="#">
                    <i className="fa fa-star me-2" />
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="dropset"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#" className="dropdown-item">
                          Details
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Copy
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Move
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Rename
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Archeived
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-3">
                <p className="text-primary mb-0 me-2">Last edited 15 Jul</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  200 MB
                </span>
              </div>
            </div>
            <div className="border rounded-3 bg-white p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/xls.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">Estimation.xls</Link>
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <Link to="#">
                    <i className="fa fa-star me-2" />
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="dropset"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#" className="dropdown-item">
                          Details
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Copy
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Move
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Rename
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Archeived
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-3">
                <p className="text-primary mb-0 me-2">Last edited 16 Jul</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  500 KB
                </span>
              </div>
            </div>
            <div className="border rounded-3 bg-white p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/pdf-02.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">Haird.pdf</Link>
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <Link to="#">
                    <i className="fa fa-star me-2" />
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="dropset"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#" className="dropdown-item">
                          Details
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Copy
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Move
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Rename
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Archeived
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-3">
                <p className="text-primary mb-0 me-2">Last edited 15 Jul</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  200 MB
                </span>
              </div>
            </div>
            <div className="border rounded-3 bg-white p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <ImageWithBasePath
                    src="assets/img/icons/xls.svg"
                    alt="Folder"
                    className="me-2"
                  />
                  <h5 className="text-nowrap">
                    <Link to="#">Estimation.xls</Link>
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <Link to="#">
                    <i className="fa fa-star me-2" />
                  </Link>
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="dropset"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#" className="dropdown-item">
                          Details
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Copy
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Move
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Rename
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Archeived
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-3">
                <p className="text-primary mb-0 me-2">Last edited 16 Jul</p>
                <span className="d-flex align-items-center fw-semibold me-2">
                  <i className="ti ti-circle-filled fs-5 me-2" />
                  500 KB
                </span>
              </div>
            </div>
          </Slider>
        </div>
        <div className="mb-4 pb-4 border-bottom">
          <div className="d-flex align-items-center mb-3">
            <h4>Videos</h4>
            <div className="owl-nav slide-nav8 text-end nav-control ms-3" />
          </div>
          <div className="owl-carousel video-section d-flex gap-3">
            <div className="items">
              <div className="position-relative">
                <video
                  width={100}
                  height={100}
                  className="js-player w-100"
                  crossOrigin=""
                  playsInline={true}
                  poster="assets/img/file-manager/video1.jpg"
                >
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                    type="video/mp4"
                  />
                </video>
                <Link to="#" className="position-absolute play-group">
                  <span className="play-btn-video">
                    <i className="ti ti-player-play-filled" />
                  </span>
                  {/* <span className="pause-btn-video">
                    <i className="ti ti-player-pause" />
                  </span> */}
                </Link>
              </div>
              <div className="bg-white p-3 rounded-bottom">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>
                    <Link to="#">Demo_dw</Link>
                  </h6>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="d-flex align-items-center">
                      <i data-feather="star" className="feather-16 me-2" />
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="dropset"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="#" className="dropdown-item">
                            Details
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Share
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Copy
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Move
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Download
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Rename
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Archeived
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start mt-3">
                  <p className="text-primary mb-0 me-2">Last edited 14 Jul</p>
                  <span className="d-flex align-items-center fw-semibold me-2">
                    <i className="ti ti-circle-filled fs-5 me-2" />
                    150 MB
                  </span>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="position-relative">
                <video
                  className="js-player w-100"
                  crossOrigin=""
                  playsInline={true}
                  poster="assets/img/file-manager/video2.jpg"
                >
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                    type="video/mp4"
                  />
                </video>
                <Link to="#" className="position-absolute play-group">
                  <span className="play-btn-video">
                    <i className="ti ti-player-play-filled" />
                  </span>
                  {/* <span className="pause-btn-video">
                    <i className="ti ti-player-pause" />
                  </span> */}
                </Link>
              </div>
              <div className="bg-white p-3 rounded-bottom">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>
                    <Link to="#">Android_bike.mp4</Link>
                  </h6>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="d-flex align-items-center">
                      <i data-feather="star" className="feather-16 me-2" />
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="dropset"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="#" className="dropdown-item">
                            Details
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Share
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Copy
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Move
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Download
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Rename
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Archeived
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start mt-3">
                  <p className="text-primary mb-0 me-2">Last edited 15 Jul</p>
                  <span className="d-flex align-items-center fw-semibold me-2">
                    <i className="ti ti-circle-filled fs-5 me-2" />
                    50 MB
                  </span>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="position-relative">
                <video
                  className="js-player w-100"
                  crossOrigin=""
                  playsInline={true}
                  poster="assets/img/file-manager/video3.jpg"
                >
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                    type="video/mp4"
                  />
                </video>
                <Link to="#" className="position-absolute play-group">
                  <span className="play-btn-video">
                    <i className="ti ti-player-play-filled" />
                  </span>
                  {/* <span className="pause-btn-video">
                    <i className="ti ti-player-pause" />
                  </span> */}
                </Link>
              </div>
              <div className="bg-white rounded-bottom p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>
                    <Link to="#">Demoparticles.mp4</Link>
                  </h6>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="d-flex align-items-center">
                      <i data-feather="star" className="feather-16 me-2" />
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="dropset"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="#" className="dropdown-item">
                            Details
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Share
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Copy
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Move
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Download
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Rename
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Archeived
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start mt-3">
                  <p className="text-primary mb-0 me-2">Last edited 16 Jul</p>
                  <span className="d-flex align-items-center fw-semibold me-2">
                    <i className="ti ti-circle-filled fs-5 me-2" />
                    250 MB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Filemanager Items */}
      {/* /Filemanager List */}
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between flex-wrap pb-0">
          <h4 className="mb-3">All Files</h4>
          <div className="d-flex align-items-center flex-wrap">
            <div className="input-icon-start mb-3 me-2 position-relative">
              <PredefinedDateRanges />
            </div>
            <div className="dropdown mb-3">
              <Link
                to="#"
                className="btn btn-outline-light bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-sort-ascending-2 me-2" />
                Sort by A-Z
              </Link>
              <ul className="dropdown-menu p-3">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Ascending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Descending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Recently Viewed
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Recently Added
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body p-0 py-3">
          {/* Student List */}
            <Table dataSource={data} columns={columns} Selection={true} />
          {/* /Student List */}
        </div>
      </div>
      {/* /Filemanager List */}
    </>
  );
};

export default FileContent;
