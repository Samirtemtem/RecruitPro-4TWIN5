import React from "react";
import { Link } from "react-router-dom";
import PredefinedDateRanges from "../../../core/common/datePicker";
import CommonSelect from "../../../core/common/commonSelect";
import {
  publish,
} from "../../../core/common/selectoption/selectoption";
import { blog_comments_data } from "../../../core/data/json/blog_comments_data";
import { TableData } from "../../../core/data/interface";
import Table from "../../../core/common/dataTable/index";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const BlogComments = () => {
  const data = blog_comments_data;
  const routes = all_routes;
  const columns = [
    {
      title: "Comment",
      dataIndex: "comment",
      sorter: (a: TableData, b: TableData) => a.comment.length - b.comment.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a: TableData, b: TableData) => a.date.length - b.date.length,
    },
    {
      title: "Review",
      dataIndex: "review",
      sorter: (a: TableData, b: TableData) => a.review.length - b.review.length,
      render: (rating: any) => (
        <span className="text-warning">
          <i className="ti ti-star-filled "></i>
          <i className="ti ti-star-filled"></i>
          <i className="ti ti-star-filled"></i>
          <i className="ti ti-star-filled"></i>
          <i className="ti ti-star-filled"></i>
        </span>
      ),
    },
    {
      title: "Blog",
      dataIndex: "blog",
      sorter: (a: TableData, b: TableData) => a.blog.length - b.blog.length,
    },
    {
      title: "By",
      dataIndex: "by",
      sorter: (a: any, b: any) => a.by.length - b.b.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      sorter: (a: TableData, b: TableData) => a.action.length - b.action.length,
      render: (text: any, record: any) => (
        <CommonSelect
          className="select"
          options={publish}
          defaultValue={publish[0]}
        />
      ),
    },
    {
      title: "",
      dataIndex: "delete",
      key: "delete",
      render: (text: any, record: any) => (
        <div className="action-icon d-inline-flex">

          <Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#delete_modal"><i className="ti ti-trash"></i></Link>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Blog Comments</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Comments</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog Comments
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
              <div className="head-icons">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Blog Comments List</h5>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="me-3">
                  <div className="input-icon-end position-relative">
                    <PredefinedDateRanges />
                    <span className="input-icon-addon">
                      <i className="ti ti-chevron-down" />
                    </span>
                  </div>
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
            <div className="card-body p-0">
              <Table dataSource={data} columns={columns} Selection={true} />
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

export default BlogComments;
