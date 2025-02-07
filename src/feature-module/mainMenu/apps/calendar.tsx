import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Calendar } from "primereact/calendar";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { DatePicker, TimePicker } from "antd";
import { Nullable } from "primereact/ts-helpers";
import PredefinedDateRanges from "../../../core/common/datePicker";
import Modal from 'react-bootstrap/Modal';
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const Calendars = () => {
  const routes = all_routes;
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [eventDetails, setEventDetails] = useState<string>(
    ""
  );

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const getModalContainer2 = () => {
    const modalElement = document.getElementById('modal_datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const calendarRef = useRef(null);
  const [date, setDate] = useState<Nullable<Date>>(null);

  const handleDateClick = () => {
    setShowAddEventModal(true);
  };

  const handleEventClick = (info: any) => {
    setEventDetails(info.event.title);
    setShowEventDetailsModal(true);
  };

  const handleAddEventClose = () => setShowAddEventModal(false);
  const handleEventDetailsClose = () => setShowEventDetailsModal(false);

  const events = [
    {
      title: 'Meeting with Team Dev',
      className: 'badge badge-pink-transparent',
      backgroundColor: '#FFEDF6',
      textColor: "#FD3995",		
      start: new Date(Date.now() - 168000000).toJSON().slice(0, 10),
      end: new Date(Date.now() - 168000000).toJSON().slice(0, 10),
    },
    {
        title: 'UI/UX Team...',	
        className: 'badge badge-secondary-transparent',
        backgroundColor: '#EDF2F4' ,
        textColor: "#0C4B5E",				  
        start: new Date(Date.now() + 338000000).toJSON().slice(0, 10)
    },
    {
        title: 'Data Update...',
        className: 'badge badge-purple-transparent',
        backgroundColor: '#F7EEF9',		
        textColor: "#AB47BC",		  
        start: new Date(Date.now() - 338000000).toJSON().slice(0, 10) 
    },
    {
        title: 'Meeting with Team Dev',
        className: 'badge badge-dark-transparent',
        backgroundColor: '#E8E9EA',		
        textColor: "#212529",				  
        start: new Date(Date.now() + 68000000).toJSON().slice(0, 10) 
    },
    {
        title: 'Design System',
        className: 'badge badge-danger-transparent',
        backgroundColor: '#FAE7E7',	
        textColor: "#E70D0D",				  
        start: new Date(Date.now() + 88000000).toJSON().slice(0, 10) 
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
              <h2 className="mb-1">Calendar</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Application</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Calendar
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="input-icon-end position-relative">
                  <PredefinedDateRanges />
                  <span className="input-icon-addon">
                    <i className="ti ti-chevron-down" />
                  </span>
                </div>
              </div>
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
                  data-bs-target="#add_event"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Create
                </Link>
              </div>
              <div className="ms-2 head-icons">
                <CollapseHeader/>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Calendar Sidebar */}
            <div className="col-xxl-3 col-xl-4 theiaStickySidebar">
              <div className="stickybar">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="border-bottom pb-2 mb-4">
                      <Calendar
                        className="datepickers mb-4"
                        value={date}
                        onChange={(e: any) => setDate(e)} // Ensure proper typing for e
                        inline={true}
                      />
                    </div>
                    {/* Event */}
                    <div className="border-bottom pb-4 mb-4">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h5>Event </h5>
                        <Link
                          to="#"
                          className="link-primary"
                          data-bs-toggle="modal" data-inert={true}
                          data-bs-target="#add_event"
                        >
                          <i className="ti ti-square-rounded-plus-filled fs-16" />
                        </Link>
                      </div>
                      <p className="fs-12 mb-2">
                        Drag and drop your event or click in the calendar
                      </p>
                      <div id="external-events">
                        <div
                          className="fc-event bg-transparent-success mb-1"
                          data-event='{ "title": "Team Events" }'
                          data-event-classname="bg-transparent-success"
                        >
                          <i className="ti ti-square-rounded text-success me-2" />
                          Team Events
                        </div>
                        <div
                          className="fc-event bg-transparent-warning mb-1"
                          data-event='{ "title": "Team Events" }'
                          data-event-classname="bg-transparent-warning"
                        >
                          <i className="ti ti-square-rounded text-warning me-2" />
                          Work
                        </div>
                        <div
                          className="fc-event bg-transparent-danger mb-1"
                          data-event='{ "title": "External" }'
                          data-event-classname="bg-transparent-danger"
                        >
                          <i className="ti ti-square-rounded text-danger me-2" />
                          External
                        </div>
                        <div
                          className="fc-event bg-transparent-skyblue mb-1"
                          data-event='{ "title": "Projects" }'
                          data-event-classname="bg-transparent-skyblue"
                        >
                          <i className="ti ti-square-rounded text-skyblue me-2" />
                          Projects
                        </div>
                        <div
                          className="fc-event bg-transparent-purple mb-1"
                          data-event='{ "title": "Applications" }'
                          data-event-classname="bg-transparent-purple"
                        >
                          <i className="ti ti-square-rounded text-purple me-2" />
                          Applications
                        </div>
                        <div
                          className="fc-event bg-transparent-info mb-0"
                          data-event='{ "title": "Desgin" }'
                          data-event-classname="bg-transparent-info"
                        >
                          <i className="ti ti-square-rounded text-info me-2" />
                          Desgin
                        </div>
                      </div>
                    </div>
                    {/* /Event */}
                    {/* Upcoming Event */}
                    <div className="border-bottom pb-2 mb-4">
                      <h5 className="mb-2">
                        Upcoming Event
                        <span className="badge badge-success rounded-pill ms-2">
                          15
                        </span>
                      </h5>
                      <div className="border-start border-purple border-3 mb-3">
                        <div className="ps-3">
                          <h6 className="fw-medium mb-1">Meeting with Team Dev</h6>
                          <p className="fs-12">
                            <i className="ti ti-calendar-check text-info me-2" />
                            15 Mar 2025
                          </p>
                        </div>
                      </div>
                      <div className="border-start border-pink border-3 mb-3">
                        <div className="ps-3">
                          <h6 className="fw-medium mb-1">
                            Design System With Client
                          </h6>
                          <p className="fs-12">
                            <i className="ti ti-calendar-check text-info me-2" />
                            24 Mar 2025
                          </p>
                        </div>
                      </div>
                      <div className="border-start border-success border-3 mb-3">
                        <div className="ps-3">
                          <h6 className="fw-medium mb-1">UI/UX Team Call</h6>
                          <p className="fs-12">
                            <i className="ti ti-calendar-check text-info me-2" />
                            28 Mar 2025
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* /Upcoming Event */}
                    {/* Upgrade Details */}
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
                    {/* /Upgrade Details */}
                  </div>
                </div>
              </div>

            </div>
            {/* /Calendar Sidebar */}
            <div className="col-xxl-9 col-xl-8 theiaStickySidebar">
              <div className="stickybar">
                <div className="card border-0">
                  <div className="card-body">
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      initialView="dayGridMonth"
                      events={events}
                      headerToolbar={{
                        start: "today,prev,next",
                        center: "title",
                        end: "dayGridMonth,dayGridWeek,dayGridDay",
                      }}
                      eventClick={handleEventClick}
                      ref={calendarRef}
                    />
                  </div>
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


      {/* Event */}
      <Modal show={showEventDetailsModal} onHide={handleEventDetailsClose}>
        <div className="modal-header bg-dark modal-bg">
          <div className="modal-title text-white">
            <span id="eventTitle" >{eventDetails}</span>
          </div>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleEventDetailsClose}
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <p className="d-flex align-items-center fw-medium text-black mb-3">
            <i className="ti ti-calendar-check text-default me-2" />
            26 Jul,2024 to 31 Jul,2024
          </p>
          <p className="d-flex align-items-center fw-medium text-black mb-3">
            <i className="ti ti-calendar-check text-default me-2" />
            11:00 AM to 12:15 PM
          </p>
          <p className="d-flex align-items-center fw-medium text-black mb-3">
            <i className="ti ti-map-pin-bolt text-default me-2" />
            Las Vegas, US
          </p>
          <p className="d-flex align-items-center fw-medium text-black mb-0">
            <i className="ti ti-calendar-check text-default me-2" />A recurring
            or repeating event is simply any event that you will occur more than
            once on your calendar.
          </p>
        </div>
      </Modal>
      {/* /Event */}

      <>
        {/* Add New Event */}
        <div className="modal fade" id="add_event">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Event</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x" />
                </button>
              </div>
              <form action="calendar.html">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Event Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Event Date</label>
                        <div className="input-icon-end position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            format={{
                              format: "DD-MM-YYYY",
                              type: "mask",
                            }}
                            getPopupContainer={getModalContainer}
                            placeholder="DD-MM-YYYY"
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-calendar text-gray-7" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Start Time</label>
                        <div className="input-icon-end position-relative">
                        <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                          <span className="input-icon-addon">
                            <i className="ti ti-clock text-gray-7" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">End Time</label>
                        <div className="input-icon-end position-relative">
                        <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                          <span className="input-icon-addon">
                            <i className="ti ti-clock text-gray-7" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Event Location</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-0">
                        <label className="form-label">Descriptions</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
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
                  <button type="submit" className="btn btn-primary">
                    Add Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add New Event */}
      </>





    </>

  );
};

export default Calendars;
