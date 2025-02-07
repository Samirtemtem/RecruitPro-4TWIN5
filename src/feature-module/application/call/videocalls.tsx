import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../../router/all_routes";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

const Videocallss = () => {
  const [addClass, setAddClass] = useState(false);
  const [mute, setMute] = useState(false);
  const handleShowClass = () => {
    setAddClass(true);
  };

  const handleShowremoveClass = () => {
    setAddClass(false);
  };

  const [isActive, setIsActive] = useState(false);

  const handleGuestOffClick = () => {
    setIsActive((prevState) => !prevState); // Toggle the state
  };


  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
        });
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {
          });
        }
        setIsFullscreen(false);
      }
    }
  };
  


  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content pb-4">
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Calls</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Calls
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
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="mb-2">
                <Link to="#" className="btn btn-primary d-flex align-items-center">
                  <i className="ti ti-circle-plus me-2" />
                  Add People
                </Link>
              </div>
              <div className="ms-2 head-icons">
              <CollapseHeader />
              </div>
            </div>
          </div>
          <div className="row">
            {/* Video */}
            <div className="col-xxl-12">
              <div className="single-video d-flex">
                <div className="join-video flex-fill">
                  <ImageWithBasePath
                    src="assets/img/video/video.jpg"
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className={`chat-active-users ${isActive ? "show-active-users" : ""}`}>
                    <div className="video-avatar">
                      <ImageWithBasePath
                        src="assets/img/video/user-01.jpg"
                        className="img-fluid"
                        alt="Logo"
                      />
                      <div className="user-name">
                        <span>Joanne Conner</span>
                      </div>
                    </div>
                  </div>
                  <div className="record-item d-flex align-items-center">
                    <div className="record-time me-2">
                      <span>40:12</span>
                    </div>
                    <Link
                      to="#"
                      onClick={toggleFullscreen}
                      className="video-expand btnFullscreen	"
                    >
                      <i className="ti ti-maximize" />
                    </Link>
                  </div>
                  <div className="more-icon">
                    <Link to="#" className="mic-off">
                      <i className="bx bx-microphone-off" />
                    </Link>
                  </div>
                  <div className="call-overlay-bottom d-flex justify-content-sm-between align-items-center flex-wrap w-100">
                    <Link
                      to="#"
                      className="options-icon d-flex align-items-center justify-content-center guest-off rounded" onClick={handleGuestOffClick}
                    >
                      <i className="ti ti-user-off" />
                    </Link>
                    <div className="call-option rounded-pill d-flex justify-content-center align-items-center">
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"
                      >
                        <i className="ti ti-microphone" />
                      </Link>
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"
                      >
                        <i className="ti ti-video" />
                      </Link>
                      <Link
                        to="#"
                        className="call-icon bg-danger d-flex justify-content-center align-items-center rounded"
                      >
                        <i className="ti ti-phone" />
                      </Link>
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded mx-2"
                      >
                        <i className="ti ti-volume" />
                      </Link>
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded"
                      >
                        <i className="ti ti-device-imac-share" />
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="options-icon bg-light d-flex align-items-center justify-content-center rounded"
                      id="show-message"
                      onClick={handleShowClass}
                    >
                      <i className="ti ti-dots" />
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    addClass
                      ? "right-user-side chat-rooms theiaStickySidebar open-chats"
                      : "right-user-side chat-rooms theiaStickySidebar "
                  }
                  id="chat-room"
                >
                  <Scrollbars>

                    <div className="card slime-grp border-0 mb-0">
                      <div className="card-header p-3 pb-0 border-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5>Chat</h5>
                          <Link
                            to="#"
                            className="close_profile close_profile4 avatar avatar-sm mb-0 rounded-circle bg-danger"
                            onClick={handleShowremoveClass}
                          >
                            <i className="ti ti-x" />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body slimscroll p-3">

                        <div>
                          <div className="chat-msg-blk p-0">
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Hi Everyone.!</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats chats-right">
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Good Morning..! Today we have meeting about the
                                    new policy.
                                  </h4>
                                </div>
                                <div className="chat-profile-name text-end">
                                  <h6>
                                    <i className="bx bx-check-double" /> 10:00
                                  </h6>
                                </div>
                              </div>
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                <ImageWithBasePath src="assets/img/users/user-02.jpg" alt="image" />
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Great.! This is the second new product that comes
                                    in this week.
                                  </h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Nice..which category it belongs to?</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Great.! This is the second new product that comes
                                    in this week.
                                  </h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Hi.! Good Morning all.</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Nice..which category it belongs to?</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats chats-right">
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Good Morning..! Today we have meeting about the
                                    new product.
                                  </h4>
                                </div>
                                <div className="chat-profile-name text-end">
                                  <h6>
                                    <i className="bx bx-check-double" /> 10:00
                                  </h6>
                                </div>
                              </div>
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                <ImageWithBasePath src="assets/img/users/user-02.jpg" alt="image" />
                              </div>
                            </div>
                            <div className="chats mb-0">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Great.! This is the second new product that comes
                                    in this week.
                                  </h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-footer">
                            <form>
                              <div className="smile-col comman-icon">
                                <Link to="#">
                                  <i className="far fa-smile" />
                                </Link>
                              </div>
                              <div className="attach-col comman-icon">
                                <Link to="#">
                                  <i className="fas fa-paperclip" />
                                </Link>
                              </div>
                              <div className="micro-col comman-icon">
                                <Link to="#">
                                  <i className="bx bx-microphone" />
                                </Link>
                              </div>
                              <input
                                type="text"
                                className="form-control chat_form"
                                placeholder="Enter Message....."
                              />
                              <div className="send-chat comman-icon">
                                <Link to="#" className="rounded">
                                  <i className="ti ti-send" />
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>


                      </div>
                    </div>

                  </Scrollbars>

                </div>

              </div>
            </div>
            {/* /Video */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>


  );
};

export default Videocallss;
