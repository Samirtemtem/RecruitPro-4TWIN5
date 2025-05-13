import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-bootstrap/Modal";
import './calendar.css'; // Import custom CSS for the calendar

// Define interface for FullCalendar event
interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  className: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  extendedProps: {
    candidateName: string;
    candidateEmail: string;
    type: string;
    location: string;
    meetUrl: string;
    notes: string;
    departmentManager?: {
      firstName: string;
      lastName: string;
      email: string;
    };
    teamLeads?: {
      firstName: string;
      lastName: string;
      email: string;
    }[];
  };
}

// Define interface for event details (for modal)
interface EventDetails {
  title?: string;
  start?: Date;
  end?: Date;
  candidateName?: string;
  candidateEmail?: string;
  type?: string;
  location?: string;
  meetUrl?: string;
  notes?: string;
  departmentManager?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  teamLeads?: {
    firstName: string;
    lastName: string;
    email: string;
  }[];
}

const HRManagerCalendar: React.FC = () => {
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [eventDetails, setEventDetails] = useState<EventDetails>({});
  const calendarRef = useRef<FullCalendar>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch interview data for the calendar
  useEffect(() => {
    const fetchInterviewsForCalendar = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:5000/api/interviews/hrmanager");
        
        if (response.data && response.data.data) {
          const interviews = response.data.data;
          const formattedEvents: CalendarEvent[] = interviews.map((interview: any) => {
            // Parse the scheduled date and time
            const scheduledDateTime = new Date(`${new Date(interview.scheduledDate).toISOString().split('T')[0]}T${interview.scheduledTime}:00`);
            const endDateTime = new Date(scheduledDateTime.getTime() + (interview.duration * 60 * 1000));
            
            // Get candidate name
            const candidateName = interview.candidate ? 
              `${interview.candidate.firstName || ''} ${interview.candidate.lastName || ''}`.trim() : 
              'Unknown Candidate';
            
            // Determine color based on interview status
            let backgroundColor = "#4796ff";
            let textColor = "#ffffff";
            let borderColor = "#3a87ad";
            
            if (interview.status === "COMPLETED") {
              backgroundColor = "#28a745";
              textColor = "#ffffff";
              borderColor = "#1e7e34";
            } else if (interview.status === "CANCELLED") {
              backgroundColor = "#dc3545";
              textColor = "#ffffff";
              borderColor = "#bd2130";
            } else if (interview.status === "PENDING") {
              backgroundColor = "#ffc107";
              textColor = "#212529";
              borderColor = "#d39e00";
            }
            
            return {
              id: interview.id,
              title: `Interview: ${candidateName}`,
              start: scheduledDateTime,
              end: endDateTime,
              className: "interview-event",
              backgroundColor: backgroundColor,
              textColor: textColor,
              borderColor: borderColor,
              extendedProps: {
                candidateName: candidateName,
                candidateEmail: interview.candidate?.email || 'No email provided',
                type: interview.type || 'N/A',
                location: interview.location || 'Remote',
                meetUrl: interview.meetUrl || '',
                notes: interview.notes || 'No notes',
                departmentManager: interview.departmentManager,
                teamLeads: interview.teamLeads
              }
            };
          });
          
          setCalendarEvents(formattedEvents);
        }
      } catch (error) {
        console.error('Error fetching interviews for calendar:', error);
        setError("Failed to load interviews. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchInterviewsForCalendar();
  }, []);

  // Handle event click
  const handleEventClick = (info: any) => {
    setEventDetails({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      candidateName: info.event.extendedProps.candidateName,
      candidateEmail: info.event.extendedProps.candidateEmail,
      type: info.event.extendedProps.type,
      location: info.event.extendedProps.location,
      meetUrl: info.event.extendedProps.meetUrl,
      notes: info.event.extendedProps.notes,
      departmentManager: info.event.extendedProps.departmentManager,
      teamLeads: info.event.extendedProps.teamLeads
    });
    setShowEventDetailsModal(true);
  };

  const handleEventDetailsClose = () => setShowEventDetailsModal(false);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Interviews Calendar</h4>
        </div>
        <div className="card-body">
          {isLoading ? (
            <div className="text-center p-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading interviews...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            <div className="row">
              <div className="col-xl-12">
                <FullCalendar
                  ref={calendarRef}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  events={calendarEvents}
                  eventClick={handleEventClick}
                  height="auto"
                  eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    meridiem: false
                  }}
                  eventDisplay="block"
                  eventBackgroundColor="#4796ff"
                  eventBorderColor="#3a87ad"
                  eventTextColor="#ffffff"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Event Details Modal */}
      <Modal show={showEventDetailsModal} onHide={handleEventDetailsClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{eventDetails.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card mb-0">
            <div className="card-body">
              {eventDetails.start && eventDetails.end && (
                <div className="mb-3">
                  <h5>Schedule</h5>
                  <p>
                    <i className="ti ti-calendar-event me-2 text-primary"></i>
                    {eventDetails.start.toLocaleDateString()} at{" "}
                    {eventDetails.start.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    {" - "}
                    {eventDetails.end.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              )}

              <div className="mb-3">
                <h5>Candidate</h5>
                <p>
                  <i className="ti ti-user me-2 text-primary"></i>
                  {eventDetails.candidateName}
                  {eventDetails.candidateEmail && (
                    <span> ({eventDetails.candidateEmail})</span>
                  )}
                </p>
              </div>

              {eventDetails.departmentManager && (
                <div className="mb-3">
                  <h5>Department Manager</h5>
                  <p>
                    <i className="ti ti-user-circle me-2 text-primary"></i>
                    {eventDetails.departmentManager.firstName} {eventDetails.departmentManager.lastName} ({eventDetails.departmentManager.email})
                  </p>
                </div>
              )}

              {eventDetails.teamLeads && eventDetails.teamLeads.length > 0 && (
                <div className="mb-3">
                  <h5>Team Leads</h5>
                  <ul className="list-unstyled">
                    {eventDetails.teamLeads.map((lead, index) => (
                      <li key={index}>
                        <i className="ti ti-user-plus me-2 text-primary"></i>
                        {lead.firstName} {lead.lastName} ({lead.email})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-3">
                <h5>Interview Type</h5>
                <p>
                  <i className="ti ti-category me-2 text-primary"></i>
                  {eventDetails.type}
                </p>
              </div>

              <div className="mb-3">
                <h5>Location</h5>
                <p>
                  <i className="ti ti-map-pin me-2 text-primary"></i>
                  {eventDetails.location}
                </p>
              </div>

              {eventDetails.meetUrl && (
                <div className="mb-3">
                  <h5>Meeting URL</h5>
                  <p>
                    <i className="ti ti-video me-2 text-primary"></i>
                    <a href={eventDetails.meetUrl} target="_blank" rel="noopener noreferrer">
                      {eventDetails.meetUrl}
                    </a>
                  </p>
                </div>
              )}

              {eventDetails.notes && (
                <div className="mb-3">
                  <h5>Notes</h5>
                  <p>
                    <i className="ti ti-notes me-2 text-primary"></i>
                    {eventDetails.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={handleEventDetailsClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HRManagerCalendar; 