import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Calendar } from "primereact/calendar";
import { Link } from "react-router-dom";
import { all_routes } from "../../routing-module/router/all_routes";
import { DatePicker, TimePicker } from "antd";
import { Nullable } from "primereact/ts-helpers";
import PredefinedDateRanges from "../../core/common/datePicker";
import Modal from "react-bootstrap/Modal";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import axios from "axios";
import  "./calendar.css";
// Define interface for FullCalendar event
interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  className: string;
  backgroundColor: string;
  textColor: string;
  extendedProps: {
    candidateEmail: string;
    type: string;
    location: string;
    meetUrl: string;
    notes: string;
  };
}

// Define interface for event details (for modal)
interface EventDetails {
  title?: string;
  start?: Date;
  end?: Date;
  candidateEmail?: string;
  type?: string;
  location?: string;
  meetUrl?: string;
  notes?: string;
}

// Define interface for API response data
interface Interview {
  id: string;
  candidate: {
    email: string;
  };
  type: string;
  status: string;
  scheduledDate: string;
  scheduledTime: string;
  duration: number;
  location: string;
  meetUrl: string;
  notes: string;
}

const Calendars = () => {
  const routes = all_routes;
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [eventDetails, setEventDetails] = useState<EventDetails>({});
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const calendarRef = useRef<FullCalendar>(null);
  const [date, setDate] = useState<Nullable<Date>>(null);

  // Fetch interviews from the API
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          console.error("No userId found in localStorage");
          return;
        }

        const response = await axios.get<{ data: Interview[] }>(
          `${process.env.BACKEND_URL}/api/interviews/departmentManager/${userId}`
        );

        const interviews = response.data.data;
        const calendarEvents: CalendarEvent[] = interviews.map((interview) => ({
          id: interview.id,
          title: `Interview with ${interview.candidate.email}`,
          start: new Date(`${interview.scheduledDate.split("T")[0]}T${interview.scheduledTime}:00`),
          end: new Date(
            new Date(`${interview.scheduledDate.split("T")[0]}T${interview.scheduledTime}:00`).getTime() +
              interview.duration * 60 * 1000
          ),
          className: "badge badge-primary-transparent",
          backgroundColor: "#E6F3FA",
          textColor: "#0A6EB4",
          extendedProps: {
            candidateEmail: interview.candidate.email,
            type: interview.type,
            location: interview.location,
            meetUrl: interview.meetUrl,
            notes: interview.notes,
          },
        }));

        setEvents(calendarEvents);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      }
    };

    fetchInterviews();
  }, []);

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body;
  };

  const getModalContainer2 = () => {
    const modalElement = document.getElementById("modal_datepicker");
    return modalElement ? modalElement : document.body;
  };

  const handleDateClick = () => {
    setShowAddEventModal(true);
  };

  const handleEventClick = (info: any) => {
    setEventDetails({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      candidateEmail: info.event.extendedProps.candidateEmail,
      type: info.event.extendedProps.type,
      location: info.event.extendedProps.location,
      meetUrl: info.event.extendedProps.meetUrl,
      notes: info.event.extendedProps.notes,
    });
    setShowEventDetailsModal(true);
  };

  const handleAddEventClose = () => setShowAddEventModal(false);
  const handleEventDetailsClose = () => setShowEventDetailsModal(false);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
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
            
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-4 theiaStickySidebar">
              <div className="stickybar">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="border-bottom pb-2 mb-4">
                      <Calendar
                        className="datepickers mb-4"
                        value={date}
                        onChange={(e) => setDate(e.value)} // Extract value property
                        inline={true}
                      />
                    </div>
               
                    <div className="border-bottom pb-2 mb-4">
                      <h5 className="mb-2">
                        Upcoming Event
                        <span className="badge badge-success rounded-pill ms-2">
                          {events.length}
                        </span>
                      </h5>
                      {events.slice(0, 3).map((event) => (
                        <div
                          key={event.id}
                          className="border-start border-primary border-3 mb-3"
                        >
                          <div className="ps-3">
                            <h6 className="fw-medium mb-1">{event.title}</h6>
                            <p className="fs-12">
                              <i className="ti ti-calendar-check text-info me-2" />
                              {event.start.toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 theiaStickySidebar">
              <div className="stickybar">
                <div className="card border-0">
                  <div className="card-body">
                    <FullCalendar
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
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
                  <p className="mb-0">2025 © RecruitPro.</p>
                  <p>
                    Designed & Developed By{" "}
                    <Link to="#" className="text-primary">
                      InfiniteLoopers
                    </Link>
                  </p>
                </div>
      </div>

      <Modal show={showEventDetailsModal} onHide={handleEventDetailsClose}>
        <div className="modal-header bg-dark modal-bg">
          <div className="modal-title text-white">
            <span id="eventTitle">{eventDetails.title}</span>
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
            {eventDetails.start?.toLocaleDateString()} -{" "}
            {eventDetails.end?.toLocaleDateString()}
          </p>
          <p className="d-flex align-items-center fw-medium text-black mb-3">
            <i className="ti ti-clock text-default me-2" />
            {eventDetails.start?.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {eventDetails.end?.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="d-flex align-items-center fw-medium text-black mb-3">
            <i className="ti ti-mail text-default me-2" />
            {eventDetails.candidateEmail}
          </p>
          <p className="d-flex align-items-center fw-medium text-black mb-3">
            <i className="ti ti-video text-default me-2" />
            {eventDetails.type}
          </p>
          <p className="d-flex align-items-center fw-medium text-black mb-3">
            <i className="ti ti-map-pin text-default me-2" />
            {eventDetails.location}
          </p>
          {eventDetails.meetUrl && (
            <p className="d-flex align-items-center fw-medium text-black mb-3">
              <i className="ti ti-link text-default me-2" />
              <a
                href={eventDetails.meetUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Meeting
              </a>
            </p>
          )}
          {eventDetails.notes && (
            <p className="d-flex align-items-center fw-medium text-black mb-0">
              <i className="ti ti-notes text-default me-2" />
              {eventDetails.notes}
            </p>
          )}
        </div>
      </Modal>

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
                        <TimePicker
                          getPopupContainer={getModalContainer2}
                          use12Hours
                          placeholder="Choose"
                          format="h:mm A"
                          className="form-control timepicker"
                        />
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
                        <TimePicker
                          getPopupContainer={getModalContainer2}
                          use12Hours
                          placeholder="Choose"
                          format="h:mm A"
                          className="form-control timepicker"
                        />
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
    </>
  );
};

export default Calendars;