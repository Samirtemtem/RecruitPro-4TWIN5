import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import "react-modal-video/scss/modal-video.scss";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";

const Chat = () => {
  const useBodyClass = (className: string) => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/application/chat") {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
      return () => {
        document.body.classList.remove(className);
      };
    }, [location.pathname, className]);
  };
  useBodyClass("app-chat");

  const routes = all_routes;
  const [showEmoji, setShowEmoji] = useState(false);
  const [showEmoji2, setShowEmoji2] = useState(false);

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Chat</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Chat
                  </li>
                </ol>
              </nav>
            </div>
            <div className="head-icons">
              <CollapseHeader />
            </div>
          </div>
          <div className="chat-wrapper">
            {/* Chats sidebar */}
            <div className="sidebar-group">
              <div id="chats" className="sidebar-content active slimscroll">
                <Scrollbars>
                  <div className="chat-search-header">
                    <div className="header-title d-flex align-items-center justify-content-between">
                      <h4 className="mb-3">Chats</h4>
                    </div>
                    {/* Chat Search */}
                    <div className="search-wrap">
                      <form action="chat.html">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search For Contacts or Messages"
                          />
                          <span className="input-group-text">
                            <i className="ti ti-search" />
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* /Chat Search */}
                  </div>
                  <div className="sidebar-body chat-body" id="chatsidebar">
                    {/* Left Chat Title */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="chat-title">All Chats</h5>
                    </div>
                    {/* /Left Chat Title */}
                    <div className="chat-users-wrap">
                      <div className="chat-list">
                        <Link to={routes.chat} className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-29.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Anthony Lewis</h6>
                              <p>
                                <span className="animate-typing">
                                  is typing
                                  <span className="dot" />
                                  <span className="dot" />
                                  <span className="dot" />
                                </span>
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">02:40 PM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin me-2" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to={routes.chat} className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Elliot Murray</h6>
                              <p>
                                <i className="ti ti-file me-1" />
                                Document
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">06:12 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-checks text-success" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to={routes.chat} className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Stephan Peralt</h6>
                              <p className="text-danger">
                                <i className="ti ti-video-off me-2" />
                                Missed Video Call
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">03:15 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to="chat.html" className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-18.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Rebecca Smtih</h6>
                              <p>Hi How are you 🔥</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">Sunday</span>
                              <div className="chat-pin">
                                <span className="count-message fs-12 fw-semibold">
                                  25
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to="chat.html" className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-14.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Harvey Smith</h6>
                              <p>Haha oh man 🔥</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">03:15 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin me-2" />
                                <span className="count-message fs-12 fw-semibold">
                                  12
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to="chat.html" className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-03.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Lori Broaddus</h6>
                              <p>Do you know which...</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">02:40 PM</span>
                              <div className="chat-pin">
                                <i className="ti ti-heart-filled text-warning" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to="chat.html" className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-15.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Brian Villalobos</h6>
                              <p>Do you know which...</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">06:12 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin me-2" />
                                <i className="ti ti-checks text-success" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to="chat.html" className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Linda Ray</h6>
                              <p>
                                <i className="ti ti-photo me-2" />
                                Photo
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">Wednesday</span>
                              <div className="chat-pin">
                                <span className="count-message fs-12 fw-semibold">
                                  12
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link to="chat.html" className="chat-user-list">
                          <div className="avatar avatar-lg online me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-07.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Doglas Martini</h6>
                              <p className="text-success">
                                <i className="ti ti-video-plus text-success me-2" />
                                Incoming Video Call
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">02:40 PM</span>
                              <div className="chat-pin">
                                <i className="ti ti-heart-filled text-warning" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Scrollbars>
              </div>
            </div>
            {/* / Chats sidebar */}
            {/* Chat */}
            <div className="chat chat-messages show" id="middle">
              <div>
                <div className="chat-header">
                  <div className="user-details">
                    <div className="d-xl-none">
                      <Link className="text-muted chat-close me-2" to="#">
                        <i className="fas fa-arrow-left" />
                      </Link>
                    </div>
                    <div className="avatar avatar-lg online flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-29.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="ms-2 overflow-hidden">
                      <h6>Anthony Lewis</h6>
                      <span className="last-seen">Online</span>
                    </div>
                  </div>
                  <div className="chat-options">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          className="btn chat-search-btn"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Search"
                        >
                          <i className="ti ti-search" />
                        </Link>
                      </li>
                      <li>
                        <Link className="btn no-bg" to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-volume-off me-2" />
                              Mute Notification
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-clock-hour-4 me-2" />
                              Disappearing Message
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-clear-all me-2" />
                              Clear Message
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-trash me-2" />
                              Delete Chat
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-ban me-2" />
                              Block
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* Chat Search */}
                  <div className="chat-search search-wrap contact-search">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Contacts"
                        />
                        <span className="input-group-text">
                          <i className="ti ti-search" />
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /Chat Search */}
                </div>

                <div className="chat-body chat-page-group slimscroll">
                  <Scrollbars>
                    <div className="messages">
                      <div className="chats">
                        <div className="chat-avatar">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-29.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Hi John, I wanted to update you on a new company policy
                              regarding remote work.
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#"
                                      onClick={() => setShowEmoji(!showEmoji)}
                                    >
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }}>
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-02.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-05.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-06.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-07.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-08.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-03.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-10.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-09.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-actions">
                              <Link className="#" to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Reply
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Forward
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-file-export me-2" />
                                    Copy
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Mark as Favourite
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-check me-2" />
                                    Mark as Unread
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-box-align-right me-2" />
                                    Archeive Chat
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Pin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-profile-name">
                            <h6>
                              Anthony Lewis
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                            </h6>
                          </div>
                          <div className="chat-info">
                            <div className="message-content">
                              Do you have a moment?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#"
                                      onClick={() => setShowEmoji(!showEmoji)}
                                    >
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }}>
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-02.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-05.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-06.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-07.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-08.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-03.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-10.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-09.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-actions">
                              <Link className="#" to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Reply
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Forward
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-file-export me-2" />
                                    Copy
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Mark as Favourite
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-check me-2" />
                                    Mark as Unread
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-box-align-right me-2" />
                                    Archeive Chat
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Pin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-profile-name">
                            <h6>
                              Anthony Lewis
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="chat-actions">
                              <Link className="#" to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Reply
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Forward
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-file-export me-2" />
                                    Copy
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Mark as Favourite
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-check me-2" />
                                    Mark as Unread
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-box-align-right me-2" />
                                    Archeive Chat
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Pin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="message-content">
                              Sure, Sarah. What’s the new policy?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#"
                                      onClick={() => setShowEmoji(!showEmoji)}
                                    >
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }} >
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-02.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-05.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-06.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-07.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-08.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-03.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-10.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-09.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name text-end">
                            <h6>
                              You
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="chat-avatar">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-14.jpg"
                            className="rounded-circle dreams_chat"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-29.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Starting next month, we’ll be implementing a hybrid work
                              model. Employees can work from home up to three days a
                              week.
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }}>
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-02.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-05.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-06.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-07.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-08.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-03.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-10.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-09.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-actions">
                              <Link className="#" to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Reply
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Forward
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-file-export me-2" />
                                    Copy
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Mark as Favourite
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-check me-2" />
                                    Mark as Unread
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-box-align-right me-2" />
                                    Archeive Chat
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Pin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-profile-name">
                            <h6>
                              Anthony Lewis
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="chat-actions">
                              <Link className="#" to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Reply
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Forward
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-file-export me-2" />
                                    Copy
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Mark as Favourite
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-check me-2" />
                                    Mark as Unread
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-box-align-right me-2" />
                                    Archeive Chat
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Pin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="message-content">
                              That sounds great! Are there any specific requirements
                              for tracking our hours when working remotely?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }}>
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-02.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-05.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-06.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-07.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-08.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-03.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-10.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-09.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name text-end">
                            <h6>
                              You
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="chat-avatar">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-14.jpg"
                            className="rounded-circle dreams_chat"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="chat-line">
                        <span className="chat-date">Today, July 24</span>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-29.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Yes, we’ll be using a time-tracking tool to log hours.
                              You’ll need to ensure you’re available during your usual
                              working hours and keep your manager updated if anything
                              changes.
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#" onClick={() => setShowEmoji(!showEmoji)}>
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }}>
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-02.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-05.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-06.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-07.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-08.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-03.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-10.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-09.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="chat-actions">
                              <Link className="#" to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Reply
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Forward
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-file-export me-2" />
                                    Copy
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Mark as Favourite
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-check me-2" />
                                    Mark as Unread
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-box-align-right me-2" />
                                    Archeive Chat
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Pin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="chat-profile-name">
                            <h6>
                              Anthony Lewis
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="chat-actions">
                              <Link className="#" to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Reply
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Forward
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-file-export me-2" />
                                    Copy
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-heart me-2" />
                                    Mark as Favourite
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-check me-2" />
                                    Mark as Unread
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-box-align-right me-2" />
                                    Archeive Chat
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    <i className="ti ti-pinned me-2" />
                                    Pin Chat
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="message-content">
                              Got it. Do we need to fill out any forms to start
                              working remotely?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#"
                                      onClick={() => setShowEmoji(!showEmoji)}
                                    >
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }}>
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-02.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-05.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-06.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-07.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-08.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-03.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-10.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <ImageWithBasePath
                                              src="assets/img/icons/emonji-09.svg"
                                              alt="Icon"
                                            />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name text-end">
                            <h6>
                              You
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="chat-avatar">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-14.jpg"
                            className="rounded-circle dreams_chat"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-29.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name">
                            <h6>
                              Edward Lietz
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">02:39 PM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                          <div className="message-content">
                            <span className="animate-typing">
                              is typing
                              <span className="dot" />
                              <span className="dot" />
                              <span className="dot" />
                            </span>
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#"
                                    onClick={() => setShowEmoji(!showEmoji)}
                                  >
                                    <i className="ti ti-mood-smile" />
                                  </Link>
                                  <div className="emoj-group-list" style={{ display: showEmoji ? "block" : "none" }}>
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <ImageWithBasePath
                                            src="assets/img/icons/emonji-02.svg"
                                            alt="Icon"
                                          />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <ImageWithBasePath
                                            src="assets/img/icons/emonji-05.svg"
                                            alt="Icon"
                                          />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <ImageWithBasePath
                                            src="assets/img/icons/emonji-06.svg"
                                            alt="Icon"
                                          />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <ImageWithBasePath
                                            src="assets/img/icons/emonji-07.svg"
                                            alt="Icon"
                                          />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <ImageWithBasePath
                                            src="assets/img/icons/emonji-08.svg"
                                            alt="Icon"
                                          />
                                        </Link>
                                      </li>
                                      <li className="add-emoj">
                                        <Link to="#">
                                          <i className="ti ti-plus" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="ti ti-arrow-forward-up" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollbars>

                </div>
              </div>
              <div className="chat-footer">
                <form className="footer-form">
                  <div className="chat-footer-wrap">
                    <div className="form-item">
                      <Link to="#" className="action-circle">
                        <i className="ti ti-microphone" />
                      </Link>
                    </div>
                    <div className="form-wrap">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type Your Message"
                      />
                    </div>
                    <div className="form-item emoj-action-foot">
                      <Link to="#"
                        className="action-circle"
                        onClick={() => setShowEmoji2(!showEmoji2)}
                      >
                        <i className="ti ti-mood-smile" />
                      </Link>
                      <div className="emoj-group-list-foot down-emoji-circle" style={{ display: showEmoji2 ? "block" : "none" }}>
                        <ul>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/icons/emonji-02.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/icons/emonji-05.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/icons/emonji-06.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/icons/emonji-07.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/icons/emonji-08.svg"
                                alt="Icon"
                              />
                            </Link>
                          </li>
                          <li className="add-emoj">
                            <Link to="#">
                              <i className="ti ti-plus" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-item position-relative d-flex align-items-center justify-content-center ">
                      <Link
                        to="#"
                        className="action-circle file-action position-absolute"
                        onClick={() => setShowEmoji(!showEmoji)}
                      >
                        <i className="ti ti-folder" />
                      </Link>
                      <input
                        type="file"
                        className="open-file position-relative"
                        name="files"
                        id="files"
                      />
                    </div>
                    <div className="form-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end p-3">
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-camera-selfie me-2" />
                          Camera
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-photo-up me-2" />
                          Gallery
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-music me-2" />
                          Audio
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-map-pin-share me-2" />
                          Location
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-user-check me-2" />
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button className="btn btn-primary" type="submit">
                        <i className="ti ti-send" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* /Chat */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>

  );
};

export default Chat;
