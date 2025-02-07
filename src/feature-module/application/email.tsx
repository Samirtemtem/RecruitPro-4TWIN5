import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes'
import ImageWithBasePath from '../../core/common/imageWithBasePath'
import Scrollbars from "react-custom-scrollbars-2";
import { Chips, ChipsChangeEvent } from "primereact/chips";
const Email = () => {
  const routes = all_routes
  const [value, setValue] = useState<any>(['Angela Thomas']);
  const [show, setShow] = useState<boolean>(false);
  const customChip = (item: string) => {
      return (
        <div>
            <span className="tag label label-info">{item}</span>
        </div>
      );
  };
  return (

    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content p-0">
          <div className="d-md-flex">
            <div className="email-sidebar border-end border-bottom">
              
                <div className="active slimscroll h-100">
                  <div className="slimscroll-active-sidebar">
                    <div className="p-3">
                      <div className="shadow-md bg-white rounded p-2 mb-4">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-md flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              className="rounded-circle"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="mb-1">
                              <Link to="#">James Hong</Link>
                            </h6>
                            <p>Jnh343@example.com</p>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-primary w-100"
                        id="compose_mail"
                        onClick={()=>setShow(true)}
                      >
                        <i className="ti ti-edit me-2" />
                        Compose
                      </Link>
                      <div className="mt-4">
                        <h5 className="mb-2">Emails</h5>
                        <div className="d-block mb-4 pb-4 border-bottom email-tags">
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-between p-2 rounded active"
                          >
                            <span className="d-flex align-items-center fw-medium">
                              <i className="ti ti-inbox text-gray me-2" />
                              Inbox
                            </span>
                            <span className="badge badge-danger rounded-pill badge-xs">
                              56
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-between p-2 rounded"
                          >
                            <span className="d-flex align-items-center fw-medium">
                              <i className="ti ti-star text-gray me-2" />
                              Starred
                            </span>
                            <span className="fw-semibold fs-12 badge text-gray rounded-pill">
                              46
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-between p-2 rounded"
                          >
                            <span className="d-flex align-items-center fw-medium">
                              <i className="ti ti-rocket text-gray me-2" />
                              Sent
                            </span>
                            <span className="badge text-gray rounded-pill">14</span>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-between p-2 rounded"
                          >
                            <span className="d-flex align-items-center fw-medium">
                              <i className="ti ti-file text-gray me-2" />
                              Drafts
                            </span>
                            <span className="badge text-gray rounded-pill">12</span>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-between p-2 rounded"
                          >
                            <span className="d-flex align-items-center fw-medium">
                              <i className="ti ti-trash text-gray me-2" />
                              Deleted
                            </span>
                            <span className="badge text-gray rounded-pill">08</span>
                          </Link>
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-between p-2 rounded"
                          >
                            <span className="d-flex align-items-center fw-medium">
                              <i className="ti ti-info-octagon text-gray me-2" />
                              Spam
                            </span>
                            <span className="badge text-gray rounded-pill">0</span>
                          </Link>
                          <div>
                            <div className="more-menu">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between p-2 rounded"
                              >
                                <span className="d-flex align-items-center fw-medium">
                                  <i className="ti ti-location-up text-gray me-2" />
                                  Important
                                </span>
                                <span className="badge text-gray rounded-pill">
                                  12
                                </span>
                              </Link>
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between p-2 rounded"
                              >
                                <span className="d-flex align-items-center fw-medium">
                                  <i className="ti ti-transition-top text-gray me-2" />
                                  All Emails
                                </span>
                                <span className="badge text-gray rounded-pill">
                                  34
                                </span>
                              </Link>
                            </div>
                            <div className="view-all mt-2">
                              <Link
                                to="#"
                                className="viewall-button fw-medium"
                              >
                                <span>Show More</span>
                                <i className="fa fa-chevron-down fs-10 ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-4 pb-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h5>Labels</h5>
                          <Link to="#">
                            <i className="ti ti-square-rounded-plus-filled text-primary fs-16" />
                          </Link>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center text-dark py-1"
                          >
                            <i className="ti ti-square-rounded text-success me-2" />
                            Team Events
                          </Link>
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center text-dark py-1"
                          >
                            <i className="ti ti-square-rounded text-warning me-2" />
                            Work
                          </Link>
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center text-dark py-1"
                          >
                            <i className="ti ti-square-rounded text-danger me-2" />
                            External
                          </Link>
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center text-dark py-1"
                          >
                            <i className="ti ti-square-rounded text-skyblue me-2" />
                            Projects
                          </Link>
                          <div>
                            <div className="more-menu-2">
                              <Link
                                to="#"
                                className="fw-medium d-flex align-items-center text-dark py-1"
                              >
                                <i className="ti ti-square-rounded text-purple me-2" />
                                Applications
                              </Link>
                              <Link
                                to="#"
                                className="fw-medium d-flex align-items-center text-dark py-1"
                              >
                                <i className="ti ti-square-rounded text-info me-2" />
                                Desgin
                              </Link>
                            </div>
                            <div className="view-all mt-2">
                              <Link
                                to="#"
                                className="viewall-button-2 fw-medium"
                              >
                                <span>Show More</span>
                                <i className="fa fa-chevron-down fs-10 ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-4 pb-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h5>Folders</h5>
                          <Link to="#">
                            <i className="ti ti-square-rounded-plus-filled text-primary fs-16" />
                          </Link>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center text-dark py-1"
                          >
                            <i className="ti ti-folder-filled text-danger me-2" />
                            Projects
                          </Link>
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center text-dark py-1"
                          >
                            <i className="ti ti-folder-filled text-warning me-2" />
                            Personal
                          </Link>
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center text-dark py-1"
                          >
                            <i className="ti ti-folder-filled text-success me-2" />
                            Finance
                          </Link>
                          <div>
                            <div className="more-menu-3">
                              <Link
                                to="#"
                                className="fw-medium d-flex align-items-center text-dark py-1"
                              >
                                <i className="ti ti-folder-filled text-info me-2" />
                                Projects
                              </Link>
                              <Link
                                to="#"
                                className="fw-medium d-flex align-items-center text-dark py-1"
                              >
                                <i className="ti ti-folder-filled text-primary me-2" />
                                Personal
                              </Link>
                            </div>
                            <div className="view-all mt-2">
                              <Link
                                to="#"
                                className="viewall-button-3 fw-medium"
                              >
                                <span>Show More</span>
                                <i className="fa fa-chevron-down fs-10 ms-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-dark rounded text-center position-relative p-4">
                        <span className="avatar avatar-lg rounded-circle bg-white mb-2">
                          <i className="ti ti-alert-triangle text-dark" />
                        </span>
                        <h6 className="text-white mb-3">
                          Enjoy Unlimited Access on a small price monthly.
                        </h6>
                        <Link to="#" className="btn btn-white">
                          Upgrade Now <i className="ti ti-arrow-right" />
                        </Link>
                        <div className="box-bg">
                          <span className="bg-right">
                            <ImageWithBasePath src="assets/img/bg/email-bg-01.png" alt="Img" />
                          </span>
                          <span className="bg-left">
                            <ImageWithBasePath src="assets/img/bg/email-bg-02.png" alt="Img" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             

            </div>
            <div className="bg-white flex-fill border-end border-bottom mail-notifications">
            <Scrollbars>
                <div className="slimscroll-active-sidebar">
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h5 className="mb-1">Inbox</h5>
                        <div className="d-flex align-items-center">
                          <span>2345 Emails</span>
                          <i className="ti ti-point-filled text-primary mx-1" />
                          <span>56 Unread</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="position-relative input-icon me-3">
                          <span className="input-icon-addon">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Email"
                          />
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-filter-edit" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-settings" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-refresh" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group list-group-flush mails-list">
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar bg-purple avatar-rounded me-2"
                          >
                            <span className="avatar-title">CD</span>
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Justin Lapointe</Link>
                                </h6>
                                <span className="fw-semibold">
                                  Client Dashboard
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-success" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>It seems that recipients are receiving...</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark me-2">
                            <i className="ti ti-folder-open me-2" />3
                          </span>
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-photo me-2" />
                            +24
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-info mx-2">
                            <i className="ti ti-square me-1" />
                            Projects
                          </span>
                          <Link
                            to="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Rufana</Link>
                                </h6>
                                <span className="fw-semibold">UI project</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>Regardless, you can usually expect an increase</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Link to="#">
                          <ImageWithBasePath src="assets/img/icons/google-meet.svg" alt="Img" />
                        </Link>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-purple mx-2">
                            <i className="ti ti-square me-1" />
                            Applications
                          </span>
                          <Link
                            to="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-03.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Cameron Drake</Link>
                                </h6>
                                <span className="fw-semibold">You’re missing</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>
                              Here are a few catchy email subject line
                              examples&nbsp;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark fs-14">
                            <i className="ti ti-video me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-danger mx-2">
                            <i className="ti ti-square me-1" />
                            External
                          </span>
                          <Link
                            to="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-04.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Sean Hill</Link>
                                </h6>
                                <span className="fw-semibold">
                                  How Have You Progressed
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>You can write effective retargeting subject</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-photo me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-success">
                            <i className="ti ti-square me-1" />
                            Team Events
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-05.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Kevin Alley</Link>
                                </h6>
                                <span className="fw-semibold">
                                  Flash. Sale. Alert.
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>You can also use casual language,</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-link me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-danger me-2">
                            <i className="ti ti-square me-1" />
                            External
                          </span>
                          <Link
                            to="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Linda Zimmer</Link>
                                </h6>
                                <span className="fw-semibold">
                                  Products the celebs are
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>It seems that recipients are receiving...</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-link me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-warning me-2">
                            <i className="ti ti-square me-1" />
                            Work
                          </span>
                          <Link
                            to="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar bg-success avatar-rounded me-2"
                          >
                            <span className="avatar-title">ER</span>
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Emly Reachel</Link>
                                </h6>
                                <span className="fw-semibold">No Subject</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>Announcing Fake Name Generator Premium</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-folder-open me-2" />3
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-info">
                            <i className="ti ti-square me-1" />
                            Projects
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            to={routes.EmailReply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-07.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link to={routes.EmailReply}>Sean Hill</Link>
                                </h6>
                                <span className="fw-semibold">You’re missing</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to={routes.EmailReply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        to="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>Regardless, you can usually expect an increase</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark me-2">
                            <i className="ti ti-folder-open me-2" />3
                          </span>
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-photo me-2" />
                            +24
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-info mx-2">
                            <i className="ti ti-square me-1" />
                            Applications
                          </span>
                          <Link
                            to="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Scrollbars>
            </div>
          </div>
          <div className="footer d-sm-flex align-items-center justify-content-between bg-white p-3">
            <p className="mb-0">2014 - 2025 © SmartHR.</p>
            <p>
              Designed &amp; Developed By{" "}
              <Link to="#" className="text-primary">
                Dreams
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      <div id="compose-view" className={show?'show':''}>
  <div className="bg-white border-0 rounded compose-view">
    <div className="compose-header d-flex align-items-center justify-content-between bg-dark p-3">
      <h5 className="text-white">Compose New Email</h5>
      <div className="d-flex align-items-center">
        <Link
          to="#"
          className="d-inline-flex me-2 text-white fs-16"
        >
          <i className="ti ti-minus" />
        </Link>
        <Link
          to="#"
          className="d-inline-flex me-2 fs-16 text-white"
        >
          <i className="ti ti-maximize" />
        </Link>
        <button
          type="button"
          className="btn-close custom-btn-close bg-transparent fs-16 text-white position-static"
          id="compose-close"
          onClick={()=>setShow(false)}
        >
          <i className="ti ti-x" />
        </button>
      </div>
    </div>
    <form >
      <div className="p-3 position-relative pb-2 border-bottom chip-with-image">
        <div className="tag-with-img d-flex align-items-center">
          <label className="form-label me-2">To</label>
          {/* <input
            className="input-tags form-control border-0 h-100"
            id="inputBox"
            type="text"
            data-role="tagsinput"
            name="Label"
            defaultValue="Angela Thomas"
          /> */}
          <Chips value={value} className="input-tags form-control border-0 h-100 w-100" onChange={(e: ChipsChangeEvent) => setValue(e.value)} itemTemplate={customChip} />
        </div>
        <div className="d-flex align-items-center email-cc">
          <Link to="#" className="d-inline-flex me-2">
            Cc
          </Link>
          <Link to="#" className="d-inline-flex">
            Bcc
          </Link>
        </div>
      </div>
      <div className="p-3 border-bottom">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="mb-0">
          <textarea
            rows={7}
            className="form-control"
            placeholder="Compose Email"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="btn btn-icon btn-sm rounded-circle"
          >
            <i className="ti ti-paperclip" />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-sm rounded-circle"
          >
            <i className="ti ti-photo" />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-sm rounded-circle"
          >
            <i className="ti ti-link" />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-sm rounded-circle"
          >
            <i className="ti ti-pencil" />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-sm rounded-circle"
          >
            <i className="ti ti-mood-smile" />
          </Link>
        </div>
        <div className="d-flex align-items-center compose-footer">
          <Link
            to="#"
            className="btn btn-icon btn-sm rounded-circle"
          >
            <i className="ti ti-calendar-repeat" />
          </Link>
          <Link
            to="#"
            className="btn btn-icon btn-sm rounded-circle"
          >
            <i className="ti ti-trash" />
          </Link>
          <button
            type="button"
            className="btn btn-primary d-inline-flex align-items-center ms-2"
          >
            Send <i className="ti ti-arrow-right ms-2" />
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
{show && <div className="modal-backdrop fade show" ></div>}

    </>


  )
}

export default Email
