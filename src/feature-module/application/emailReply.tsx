import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes'
import ImageWithBasePath from '../../core/common/imageWithBasePath'
import Scrollbars from "react-custom-scrollbars-2";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
const EmailReply = () => {
    const routes = all_routes
    const [open1, setOpen1] = React.useState(false);
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
            <div className="mail-detail bg-white border-bottom p-3 w-100">
                <Scrollbars>
                <div className="active slimscroll h-100">
                    <div className="slimscroll-active-sidebar">
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 border-bottom mb-3 pb-3">
                        <div className="dropdown">
                            <button
                            className="btn btn-white border dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <span className="badge badge-dark rounded-circle badge-xs me-1">
                                5
                            </span>
                            Peoples
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <Link className="dropdown-item rounded-1" to="#">
                                Peoples
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item rounded-1" to="#">
                                Rufana
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item rounded-1" to="#">
                                Sean Hill
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item rounded-1" to="#">
                                Cameron Drake
                                </Link>
                            </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center">
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-arrow-back-up" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-arrow-back-up-double" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-arrow-forward" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-bookmarks-filled" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-archive-filled" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-mail-opened-filled" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-printer" />
                            </Link>
                            <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                            >
                            <i className="ti ti-star-filled text-warning" />
                            </Link>
                        </div>
                        </div>
                        <div className="bg-light-500 rounded p-3 mb-3">
                        <div className="d-flex align-items-center flex-fill border-bottom mb-3 pb-3">
                            <Link
                            to="#"
                            className="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                            >
                            <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="Img" />
                            </Link>
                            <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                <div>
                                <h6 className="mb-1">
                                    <Link to="#">Angela Thomas</Link>
                                </h6>
                                <p>Subject: Client Dashboard</p>
                                </div>
                                <div className="d-flex align-items-center">
                                <p className="me-2 mb-0">12:45 AM</p>
                                <Link
                                    to="#"
                                    className="btn btn-icon btn-sm rounded-circle"
                                >
                                    <i className="ti ti-arrow-back-up" />
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-icon btn-sm rounded-circle"
                                >
                                    <i className="ti ti-arrow-back-up-double" />
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-icon btn-sm rounded-circle"
                                >
                                    <i className="ti ti-printer" />
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2">
                            <p className="fs-12 mb-0 text-dark me-3">
                            <span className="text-gray">From: </span> Arman Janes
                            </p>
                            <p className="fs-12 mb-0 text-dark me-3">
                            <span className="text-gray">To: </span> Angela Thomas
                            </p>
                            <p className="fs-12 mb-0 text-dark">
                            <span className="text-gray">Cc: </span> Angela Thomas, Justin Lapointe
                            </p>
                        </div>
                        </div>
                        <div className="card shadow-none">
                        <div className="card-body">
                            <div>
                            <h6 className="mb-3">Dear Angela</h6>
                            <p className="text-dark">
                                I am writing to request a meeting to discuss the progress and next
                                steps for Project. We have reached a critical milestone, and I
                                believe a discussion will help align our efforts and ensure we are
                                on track to meet our goals.
                            </p>
                            <p className="text-dark">
                                am available on Tuesday and Thursday afternoons, but I am flexible
                                and can adjust to a time that suits you best
                            </p>
                            <p className="text-dark">Looking forward to your response.</p>
                            <p className="text-dark">
                                Best regards, <br />
                                <b className="fw-medium d-flex mt-1">Arman</b>{" "}
                            </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between my-3 pt-3 border-top">
                            <h5>Attachments</h5>
                            <Link to="#" className="text-primary fw-medium">
                                Download All
                            </Link>
                            </div>
                            <div className="d-flex align-items-center email-attach">
                            <Lightbox
                                        open={open1}
                                        close={() => setOpen1(false)}
                                        slides={[
                                            { src: "assets/img/media/email-attach-big-01.jpg" },
                                            { src: "assets/img/media/email-attach-big-02.jpg" },
                                            { src: "assets/img/media/email-attach-big-03.jpg" },
                                        ]}
                                    />
                            <Link
                                to="#"
                                onClick={() => setOpen1(true)}
                                className="avatar avatar-xl me-3 gallery-item"
                            >
                                <ImageWithBasePath
                                src="assets/img/media/email-attach-01.jpg"
                                className=" rounded"
                                alt="img"
                                />
                                <span className="avatar avatar-md avatar-rounded">
                                <i className="ti ti-eye" />
                                </span>
                            </Link>
                            <Link
                                to="#"
                                onClick={() => setOpen1(true)}
                                className="avatar avatar-xl me-3 gallery-item"
                            >
                                <ImageWithBasePath
                                src="assets/img/media/email-attach-02.jpg"
                                className="rounded"
                                alt="img"
                                />
                                <span className="avatar avatar-md avatar-rounded">
                                <i className="ti ti-eye" />
                                </span>
                            </Link>
                            <Link
                                to="#"
                                onClick={() => setOpen1(true)}
                                className="avatar avatar-xl me-3 gallery-item"
                            >
                                <ImageWithBasePath
                                src="assets/img/media/email-attach-03.jpg"
                                className="rounded"
                                alt="img"
                                />
                                <span className="avatar avatar-md avatar-rounded">
                                <i className="ti ti-eye" />
                                </span>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <div className="card shadow-none">
                        <div className="card-body">
                            <div className="bg-light-500 rounded p-3 mb-3">
                            <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <Link
                                to="#"
                                className="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                                >
                                <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="Img" />
                                </Link>
                                <div className="flex-fill">
                                <div className="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                    <div>
                                    <h6 className="mb-1">
                                        <Link to="#">Arman Janes</Link>
                                    </h6>
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0">
                                        <span>To: </span> Me
                                        </p>
                                        <div className="dropdown">
                                        <button
                                            className="btn btn-icon dropdown-toggle bg-transparent text-dark border-0 p-0 btn-sm"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        ></button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                <span className="text-gray">From :</span> Arman
                                                Janes arman343@example.com
                                            </Link>
                                            </li>
                                            <li>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                <span className="text-gray">To :</span> Angela
                                                Thomas ange4565@example.com
                                            </Link>
                                            </li>
                                            <li>
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                            >
                                                <span className="text-gray">Date :</span> 12 May
                                                2025, 09:45 PM{" "}
                                            </Link>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                    <p className="me-2 mb-0">Yesterday 01:22 AM</p>
                                    <Link
                                        to="#"
                                        className="btn btn-icon btn-sm rounded-circle"
                                    >
                                        <i className="ti ti-arrow-back-up" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-icon btn-sm rounded-circle"
                                    >
                                        <i className="ti ti-arrow-back-up-double" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-icon btn-sm rounded-circle"
                                    >
                                        <i className="ti ti-printer" />
                                    </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div>
                            <h6 className="mb-2">Dear Arman</h6>
                            <p className="text-dark">Introduction Mail from Techsolutions!!!</p>
                            <p className="text-dark">
                                Best regards <br />
                                <b className="fw-medium d-inline-flex mt-1">Arman</b>
                            </p>
                            </div>
                            <form >
                            <div className="border rounded mt-3">
                                <div className="p-3 position-relative pb-2 border-bottom chip-with-image">
                                <div className="tag-with-img d-flex align-items-center">
                                    <label className="form-label me-2">To</label>
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
                                <div className="p-3">
                                <div className="mb-3">
                                    <textarea
                                    rows={2}
                                    className="form-control border-0 p-0"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between border-top p-3">
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
                                <div className="d-flex align-items-center">
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
                                    <Link
                                    to={routes.email}
                                    className="btn btn-primary d-inline-flex align-items-center ms-2"
                                    >
                                    Send <i className="ti ti-arrow-right ms-2" />
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div className="text-center">
                        <Link to="#" className="btn btn-dark btn-sm">
                            View Older Messages
                        </Link>
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

export default EmailReply