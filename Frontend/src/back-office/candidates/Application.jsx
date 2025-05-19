import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './custom-dropdown.css'; // This will be created next

const CandidateDetails = () => {
    const { id } = useParams(); // Get the application ID from the URL
    const [candidate, setCandidate] = useState(null);
    const [application, setApplication] = useState(null);
    const [resume, setResume] = useState(null); // State for resume data
    const [showModal, setShowModal] = useState(false);
    const [departmentManagers, setDepartmentManagers] = useState([]);
    const [teamLeads, setTeamLeads] = useState([]);
    const [filteredTeamLeads, setFilteredTeamLeads] = useState([]);
    const [selectedDeptManager, setSelectedDeptManager] = useState('');
    const [selectedDeptManagerObj, setSelectedDeptManagerObj] = useState(null);
    const [selectedTeamLeads, setSelectedTeamLeads] = useState([]);
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');
    const [interviewNotes, setInterviewNotes] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [generatedMeetUrl, setGeneratedMeetUrl] = useState('');
    const [interviews, setInterviews] = useState([]);
    const [loadingInterviews, setLoadingInterviews] = useState(false);

    useEffect(() => {
        const fetchApplicationDetails = async () => {
            try {
                console.log('Fetching application details for ID:', id);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/app/applications/${id}`);
                const app = response.data;
                console.log('Application data received:', app);
                
                // Check for ID properties
                if (app) {
                    console.log('Application ID formats:', {
                        id: app.id,
                        _id: app._id,
                        applicationId: app.applicationId
                    });
                }
                
                const cand = app ? app.candidate : null;
                setApplication(app);
                setCandidate(cand);
                localStorage.setItem('selectedApplication', JSON.stringify(app)); // Store in local storage
                
                // Fetch resume data if it exists
                if (app && app.CV) {
                    const resumeResponse = await axios.get(app.CV, { responseType: 'blob' }); // Fetch the resume blob
                    const resumeUrl = URL.createObjectURL(resumeResponse.data);
                    setResume(resumeUrl); // Set the resume URL
                }

                // Fetch interviews for this application
                if (app) {
                    const applicationId = app.id || app._id;
                    console.log('Fetching interviews for application ID:', applicationId);
                    fetchInterviews(applicationId);
                }
            } catch (error) {
                console.error('Error fetching application details:', error);
            }
        };

        fetchApplicationDetails();
    }, [id]);

    const fetchInterviews = async (applicationId) => {
        if (!applicationId) {
            console.error('Cannot fetch interviews: Application ID is missing');
            return;
        }
        
        setLoadingInterviews(true);
        try {
            console.log(`Fetching interviews for application: ${applicationId}`);
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/interviews/application/${applicationId}`);
            console.log('Interviews data:', response.data);
            setInterviews(response.data);
        } catch (error) {
            console.error('Error fetching interviews:', error);
            if (error.response) {
                console.error('Response error:', error.response.data);
            }
            setInterviews([]);
        } finally {
            setLoadingInterviews(false);
        }
    };

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUsers`);
            const users = response.data;
            
            // Filter users by role
            const deptManagers = users.filter(user => user.role === 'DEPARTMENT-MANAGER');
            const teamLeadUsers = users.filter(user => user.role === 'TEAM-LEAD');
            
            setDepartmentManagers(deptManagers);
            setTeamLeads(teamLeadUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    // Filter team leads when department manager changes
    useEffect(() => {
        if (selectedDeptManager) {
            console.log("selectedManager", selectedDeptManager);
            
            // Extract department from the selectedDeptManager string
            // Format appears to be: "value - DEPARTMENT"
            let departmentFromSelection = '';
            let managerId = '';
            const parts = selectedDeptManager.split(' - ');
            if (parts.length > 1) {
                managerId = parts[0];
                departmentFromSelection = parts[1];
            }
            console.log("Department from selection:", departmentFromSelection);
            console.log("Manager ID:", managerId);
            
            const selectedManager = departmentManagers.find(manager => manager.id === managerId);
            setSelectedDeptManagerObj(selectedManager);
            
            // Log properties for debugging
            if (teamLeads.length > 0) {
                console.log("Team lead properties:", Object.keys(teamLeads[0]));
                console.log("Sample team lead:", teamLeads[0]);
            }
            
            // Use a more flexible filtering approach
            const teamLeadsOfDepartment = teamLeads.filter(lead => {
                // Try different properties that might hold department
                if (lead.department && lead.department === departmentFromSelection) {
                    return true;
                }
                
                // Some might have it in team property
                if (lead.team && lead.team === departmentFromSelection) {
                    return true;
                }
                
                // If all else fails, just show all
                return teamLeads.length < 5; // If we have fewer than 5 leads, show all
            });
            
            console.log("All team leads:", teamLeads);
            console.log("Filtered team leads:", teamLeadsOfDepartment);
            
            setFilteredTeamLeads(teamLeadsOfDepartment.length > 0 ? teamLeadsOfDepartment : teamLeads);
            
            // Reset selected team leads when department manager changes
            setSelectedTeamLeads([]);
        } else {
            setFilteredTeamLeads([]);
            setSelectedDeptManagerObj(null);
        }
    }, [selectedDeptManager, departmentManagers, teamLeads]);

    const filteredTeamLeadsBySearch = filteredTeamLeads.filter(lead => 
        `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleDropdown = () => {
        console.log("Toggling dropdown, current state:", dropdownOpen);
        setDropdownOpen(!dropdownOpen);
        
        // If opening the dropdown, reset the search query
        if (!dropdownOpen) {
            setSearchQuery('');
        }
    };

    const closeDropdown = () => {
        console.log("Closing dropdown");
        setDropdownOpen(false);
    };

    const handleTeamLeadChange = (e, leadId) => {
        console.log("Team lead change triggered", { leadId, isChecked: e.target.checked });
        const isChecked = e.target.checked;
        
        // Prevent the dropdown from closing when clicking on a checkbox
        e.stopPropagation();
        
        setSelectedTeamLeads(prev => {
            if (isChecked) {
                // Add the ID to selected team leads if not already included
                if (!prev.includes(leadId)) {
                    console.log("Adding lead to selection:", leadId);
                    return [...prev, leadId];
                }
            } else {
                // Remove the ID from selected team leads
                console.log("Removing lead from selection:", leadId);
                return prev.filter(id => id !== leadId);
            }
            return prev;
        });
    };

    const statusOrder = ['SUBMITTED', 'REVIEWED', 'INTERVIEWED', 'ACCEPTED', 'REJECTED'];

    const getNextStatus = (currentStatus) => {
        const currentIndex = statusOrder.indexOf(currentStatus);
        return currentIndex < statusOrder.length - 1 ? statusOrder[currentIndex + 1] : null;
    };

    const handleNextStage = async () => {
        if (application) {
            const nextStatus = getNextStatus(application.status);
            if (nextStatus) {
                try {
                    const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/app/applications/${application._id}/status`, { status: nextStatus });
                    const updatedApplication = response.data;
                    setApplication(updatedApplication);
                    localStorage.setItem('selectedApplication', JSON.stringify(updatedApplication));
                    toast.success(`Application status updated to ${nextStatus}`);
                } catch (error) {
                    console.error('Error updating status:', error);
                    toast.error('Failed to update application status. Please try again.');
                }
            }
        }
    };

    useEffect(() => {
        // Generate a random Google Meet URL when the component loads
        const randomMeetId = Math.random().toString(36).substring(2, 11);
        const meetUrl = `https://meet.google.com/${randomMeetId}`;
        setGeneratedMeetUrl(meetUrl);
    }, []);

    const handleScheduleInterview = async () => {
        if (!selectedDeptManager || selectedTeamLeads.length === 0) {
            toast.error('Please select a department manager and at least one team lead');
            return;
        }

        if (!interviewDate || !interviewTime) {
            toast.error('Please select date and time for the interview');
            return;
        }

        // Check if application object is valid
        if (!application) {
            toast.error('Application data is missing. Please reload the page.');
            return;
        }

        // Check if application.id exists
        console.log('Current application object:', application);
        
        // Debug logging for application ID
        const appId = application.id || application._id;
        if (!appId) {
            toast.error('Application ID is missing. Please reload the page.');
            return;
        }
        
        console.log('Using application ID:', appId);

        // Check if selected date is in the past
        const selectedDateTime = new Date(`${interviewDate}T${interviewTime}`);
        const now = new Date();
        if (selectedDateTime < now) {
            toast.error('Please select a future date and time for the interview');
            return;
        }

        // Extract the ID from the selectedDeptManager string
        const managerId = selectedDeptManager.split(' - ')[0];

        try {
            setLoading(true);
            
            // First create an interview
            const interviewData = {
                applicationId: appId, // Use the determined application ID
                departmentManagerId: managerId,
                teamLeadIds: selectedTeamLeads,
                scheduledDate: interviewDate,
                scheduledTime: interviewTime,
                duration: 60, // Default to 60 minutes
                notes: interviewNotes,
                meetUrl: generatedMeetUrl
            };

            console.log('Creating interview with data:', interviewData);

            // Create the interview with additional request logging
            //console.log('Sending POST request to http://localhost:5000/api/interviews');
            console.log('Request payload:', JSON.stringify(interviewData));
            const interviewResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/interviews`, interviewData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Interview created:', interviewResponse.data);
            
            if (interviewResponse.data && interviewResponse.data.meetUrl) {
                // Use the meetUrl from the response in case it was generated on the server
                setGeneratedMeetUrl(interviewResponse.data.meetUrl);
            }

            // Refresh interviews list
            fetchInterviews(appId);

            // Get the updated application data with the interview reference
            const updatedAppResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/app/applications/${appId}`);
            if (updatedAppResponse.data) {
                setApplication(updatedAppResponse.data);
                localStorage.setItem('selectedApplication', JSON.stringify(updatedAppResponse.data));
            }
            
            // Format participants for display in the success message
            const deptManager = departmentManagers.find(manager => manager.id === managerId);
            const selectedLeads = teamLeads.filter(lead => selectedTeamLeads.includes(lead.id));
            
            const participantsText = `
                Department Manager: ${deptManager ? `${deptManager.firstName} ${deptManager.lastName}` : 'Unknown'}
                Team Leads: ${selectedLeads.map(lead => `${lead.firstName} ${lead.lastName}`).join(', ')}
                Date: ${new Date(interviewDate).toLocaleDateString()}
                Time: ${interviewTime}
            `;
            
            // Show success message
            toast.success(`Interview scheduled successfully!`);
            
            // Close the modal smoothly
            closeDropdown();
            closeModalSmooth();
        } catch (error) {
            console.error('Error scheduling interview:', error);
            let errorMessage = 'Error scheduling interview. Please try again.';
            
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                
                if (error.response.data && error.response.data.message) {
                    errorMessage = `Error: ${error.response.data.message}`;
                }
            }
            
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const closeModalSmooth = () => {
        // Hide modal
        setShowModal(false);
        
        // Remove modal backdrop
        document.body.classList.remove('modal-open');
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.parentNode.removeChild(backdrop);
        }
        
        // Reset selections for next time
        setSelectedTeamLeads([]);
        setSelectedDeptManager('');
    };

    const handleReject = async () => {
        try {
            await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/app/applications/${application._id}/reject`);
            setApplication((prev) => ({ ...prev, status: 'REJECTED' }));
            localStorage.setItem('selectedApplication', JSON.stringify({ ...application, status: 'REJECTED' }));
            
        } catch (error) {
            console.error('Error rejecting application:', error);
            
        }
    };

    // Add a click outside handler to close the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownOpen) {
                const dropdownElement = document.getElementById('team-leads-dropdown');
                const dropdownButton = document.querySelector('.dropdown-container button');
                
                // Only close if clicking outside both the dropdown and the button
                if (dropdownElement && 
                    !dropdownElement.contains(event.target) && 
                    dropdownButton && 
                    !dropdownButton.contains(event.target)) {
                    console.log('Clicking outside dropdown, closing');
                    closeDropdown();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    // Make sure we clean up the modal when component unmounts
    useEffect(() => {
        return () => {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.parentNode.removeChild(backdrop);
            }
            document.body.classList.remove('modal-open');
        };
    }, []);

    // Modal component with Bootstrap's standard modal
    const InterviewModal = () => (
        <div
            id="interview-modal"
            className={`modal fade${showModal ? ' show' : ''}`}
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            style={{ display: showModal ? "block" : "none", backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">
                            Schedule Interview
                        </h4>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={closeModalSmooth}
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body p-4">
                        {loading ? (
                            <div className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-2">Loading users...</p>
                            </div>
                        ) : (
                            <>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="interviewDate" className="form-label">
                                                Interview Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="interviewDate"
                                                value={interviewDate}
                                                onChange={(e) => setInterviewDate(e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="interviewTime" className="form-label">
                                                Interview Time
                                            </label>
                                            <input
                                                type="time"
                                                className="form-control"
                                                id="interviewTime"
                                                value={interviewTime}
                                                onChange={(e) => setInterviewTime(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label htmlFor="departmentManager" className="form-label">
                                                Department Manager
                                            </label>
                                            <select
                                                id="departmentManager"
                                                className="form-select"
                                                value={selectedDeptManager}
                                                onChange={(e) => setSelectedDeptManager(e.target.value)}
                                                required
                                            >
                                                <option value="">Select Department Manager</option>
                                                {departmentManagers.map(manager => (
                                                    <option key={manager.id} value={`${manager.id} - ${manager.department}`}>
                                                        {manager.firstName} {manager.lastName} - {manager.department}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                {selectedDeptManager && (
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Team Leads for {selectedDeptManager.split(' - ')[1] || 'Department'}
                                                </label>
                                                
                                                {/* Simple Select Dropdown Implementation */}
                                                <div className="dropdown-container">
                                                    <button 
                                                        type="button"
                                                        className="form-control text-start d-flex justify-content-between align-items-center"
                                                        onClick={toggleDropdown}
                                                    >
                                                        <span>
                                                            {selectedTeamLeads.length === 0 ? (
                                                                <span className="text-muted">Select Team Leads</span>
                                                            ) : (
                                                                <span>{selectedTeamLeads.length} Team Lead(s) Selected</span>
                                                            )}
                                                        </span>
                                                        <span>
                                                            <i className={`ti ti-chevron-${dropdownOpen ? 'up' : 'down'}`}></i>
                                                        </span>
                                                    </button>
                                                    
                                                    {dropdownOpen && (
                                                        <div 
                                                            id="team-leads-dropdown"
                                                            className="dropdown-menu show" 
                                                            style={{ 
                                                                position: 'absolute',
                                                                inset: '0px auto auto 0px',
                                                                margin: '0px',
                                                                transform: 'translate(0px, 40px)',
                                                                display: 'block',
                                                                maxHeight: '250px',
                                                                overflowY: 'auto',
                                                                width: '100%'
                                                            }}
                                                        >
                                                            <div className="p-2 border-bottom">
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control form-control-sm" 
                                                                    placeholder="Search team leads..." 
                                                                    value={searchQuery}
                                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                />
                                                            </div>
                                                            
                                                            {filteredTeamLeadsBySearch.length > 0 ? (
                                                                <div>
                                                                    {filteredTeamLeadsBySearch.map(lead => (
                                                                        <div 
                                                                            key={lead.id} 
                                                                            className="dropdown-item team-lead-item"
                                                                            style={{ cursor: 'pointer' }}
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                // Toggle selection on row click
                                                                                const isCurrentlySelected = selectedTeamLeads.includes(lead.id);
                                                                                handleTeamLeadChange(
                                                                                    { 
                                                                                        target: { checked: !isCurrentlySelected },
                                                                                        stopPropagation: () => {}
                                                                                    }, 
                                                                                    lead.id
                                                                                );
                                                                            }}
                                                                        >
                                                                            <div className="form-check">
                                                                                <input 
                                                                                    className="form-check-input" 
                                                                                    type="checkbox" 
                                                                                    id={`teamLead-${lead.id}`}
                                                                                    checked={selectedTeamLeads.includes(lead.id)}
                                                                                    onChange={(e) => {
                                                                                        e.stopPropagation();
                                                                                        handleTeamLeadChange(e, lead.id);
                                                                                    }}
                                                                                />
                                                                                <label 
                                                                                    className="form-check-label ms-2" 
                                                                                    style={{ cursor: 'pointer' }}
                                                                                >
                                                                                    {lead.firstName} {lead.lastName} - {lead.team || 'No Team'}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <div className="dropdown-item disabled">
                                                                    No matching team leads found
                                                                </div>
                                                            )}
                                                            
                                                            {filteredTeamLeads.length === 0 && searchQuery === '' && (
                                                                <div className="dropdown-item disabled">
                                                                    No team leads available for {selectedDeptManager.split(' - ')[1]} department
                                                                </div>
                                                            )}
                                                            
                                                            <div className="dropdown-divider"></div>
                                                            <div className="d-flex justify-content-between p-2">
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-sm btn-light" 
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setSelectedTeamLeads([]);
                                                                    }}
                                                                >
                                                                    Clear All
                                                                </button>
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-sm btn-primary" 
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        closeDropdown();
                                                                    }}
                                                                >
                                                                    Apply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {selectedTeamLeads.length > 0 && (
                                                    <div className="mt-2">
                                                        <div className="d-flex flex-wrap gap-1">
                                                            {selectedTeamLeads.map(leadId => {
                                                                const lead = filteredTeamLeads.find(l => l.id === leadId);
                                                                if (!lead) return null;
                                                                return (
                                                                    <span 
                                                                        key={leadId} 
                                                                        className="badge bg-primary-transparent d-flex align-items-center"
                                                                    >
                                                                        {lead.firstName} {lead.lastName}
                                                                        <button 
                                                                            type="button" 
                                                                            className="btn-close btn-close-white ms-1" 
                                                                            style={{ fontSize: '0.5rem' }}
                                                                            onClick={() => {
                                                                                setSelectedTeamLeads(prev => 
                                                                                    prev.filter(id => id !== leadId)
                                                                                );
                                                                            }}
                                                                        ></button>
                                                                    </span>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                {filteredTeamLeads.length > 0 && selectedTeamLeads.length === 0 && (
                                                    <small className="text-muted d-block mt-2">Select at least one team lead</small>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label htmlFor="interview-notes" className="form-label">
                                                Interview Notes
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="interview-notes"
                                                placeholder="Add any notes for the interview"
                                                rows="3"
                                                value={interviewNotes}
                                                onChange={(e) => setInterviewNotes(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="meetingUrl" className="form-label">Meeting URL</label>
                                    <div className="input-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="meetingUrl"
                                            value={generatedMeetUrl}
                                            readOnly
                                        />
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button"
                                            onClick={() => {
                                                navigator.clipboard.writeText(generatedMeetUrl);
                                                toast.success('Meeting URL copied to clipboard');
                                            }}
                                        >
                                            <i className="ti ti-copy"></i> Copy
                                        </button>
                                    </div>
                                    <small className="text-muted">This URL will be sent to all participants</small>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-cancel waves-effect"
                            onClick={closeModalSmooth}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            onClick={handleScheduleInterview}
                            disabled={loading || !selectedDeptManager || selectedTeamLeads.length === 0 || !interviewDate || !interviewTime}
                        >
                            Schedule Interview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Component to display scheduled interviews
    const ScheduledInterviews = () => {
        if (loadingInterviews) {
            return (
                <div className="text-center py-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading interviews...</span>
                    </div>
                    <p className="mt-2">Loading scheduled interviews...</p>
                </div>
            );
        }

        if (!interviews || interviews.length === 0) {
            return (
                <div className="alert alert-info">
                    No interviews scheduled yet. Use the "Schedule Interview" button to set up an interview.
                </div>
            );
        }

        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Date & Time</th>
                            <th>Department Manager</th>
                            <th>Team Leads</th>
                            <th>Status</th>
                            <th>Meeting URL</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interviews.map(interview => (
                            <tr key={interview._id || interview.id}>
                                <td>
                                    {new Date(interview.scheduledDate).toLocaleDateString()}<br/>
                                    <span className="text-muted">{interview.scheduledTime}</span>
                                </td>
                                <td>
                                    {interview.departmentManager ? 
                                        `${interview.departmentManager.firstName} ${interview.departmentManager.lastName}` : 
                                        'Not assigned'}
                                    <div className="small text-muted">{interview.departmentManager?.department}</div>
                                </td>
                                <td>
                                    {interview.teamLeads && interview.teamLeads.length > 0 ? (
                                        <ul className="list-unstyled mb-0">
                                            {interview.teamLeads.map(lead => (
                                                <li key={lead._id || lead.id}>
                                                    {lead.firstName} {lead.lastName}
                                                    <span className="text-muted small ms-1">({lead.team || 'No team'})</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : 'No team leads'}
                                </td>
                                <td>
                                    <span className={`badge ${
                                        interview.status === 'SCHEDULED' ? 'bg-primary' : 
                                        interview.status === 'COMPLETED' ? 'bg-success' : 
                                        'bg-danger'
                                    }`}>
                                        {interview.status}
                                    </span>
                                </td>
                                <td>
                                    <a href={interview.meetUrl} target="_blank" rel="noopener noreferrer" 
                                       className="d-inline-flex align-items-center text-decoration-none">
                                        <i className="ti ti-video me-1"></i> Join Meeting
                                    </a>
                                    <button 
                                        className="btn btn-sm btn-light ms-2" 
                                        onClick={() => {
                                            navigator.clipboard.writeText(interview.meetUrl);
                                            toast.success('Meeting URL copied to clipboard');
                                        }}
                                    >
                                        <i className="ti ti-copy"></i>
                                    </button>
                                </td>
                                <td>
                                    {interview.notes ? (
                                        <div className="text-wrap" style={{maxWidth: "200px"}}>
                                            {interview.notes}
                                        </div>
                                    ) : (
                                        <span className="text-muted">No notes</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="page-wrapper">
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                }}
            />
            <div className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center flex-wrap flex-md-nowrap row-gap-3">
                            <span className="avatar avatar-xxxl candidate-img flex-shrink-0 me-3">
                                <img src={candidate?.image || "assets/img/users/user-13.jpg"} alt="Candidate" />
                            </span>
                            <div className="flex-fill border rounded p-3 pb-0">
                                <div className="row align-items-center">
                                    {application && candidate && (
                                        <>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Candidate Name</p>
                                                    <h6 className="fw-normal">{candidate.firstName} {candidate.lastName}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Phone Number</p>
                                                    <h6 className="fw-normal">{candidate.phoneNumber}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Applied Date</p>
                                                    <h6 className="fw-normal">{application.submissionDate ? new Date(application.submissionDate).toLocaleDateString() : 'N/A'}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Email</p>
                                                    <h6 className="fw-normal">{candidate.email}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Status</p>
                                                    <h6 className="fw-normal">{application.status}</h6>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <p className="mb-1">Compatibility Score</p>
                                                    <h6 className="fw-normal">{application.compatibilityScore}</h6>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-grids-tab p-0 mb-3">
                    <ul className="nav nav-underline" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active pt-0" id="info-tab" data-bs-toggle="tab" data-bs-target="#basic-info" type="button" role="tab" aria-selected="true">
                                Profile
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-0" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-selected="false">
                                Hiring Pipeline
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-0" id="interviews-tab" data-bs-toggle="tab" data-bs-target="#interviews" type="button" role="tab" aria-selected="false">
                                Interviews
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-0" id="address-tab2" data-bs-toggle="tab" data-bs-target="#address2" type="button" role="tab" aria-selected="false">
                                Notes
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="info-tab" tabIndex={0}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Personal Information</h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Candidate Name</p>
                                            <h6 className="fw-normal">{candidate ? `${candidate.firstName} ${candidate.lastName}` : 'N/A'}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Phone</p>
                                            <h6 className="fw-normal">{candidate ? candidate.phoneNumber : 'N/A'}</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Email</p>
                                            <h6 className="fw-normal">{candidate ? candidate.email : 'N/A'}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5>Resume</h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        {resume ? (
                                            <iframe
                                                src={resume}
                                                style={{ width: '100%', height: '500px' }}
                                                title="Resume"
                                                frameBorder="0"
                                            />
                                        ) : (
                                            <span>No CV available</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab" tabIndex={0}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="fw-medium mb-2">Candidate Pipeline Stage</h5>
                                <div className="pipeline-list candidates border-0 mb-0">
                                    <ul className="mb-0">
                                        {[
                                            { stage: 'SUBMITTED', color: '#6f42c1' },
                                            { stage: 'REVIEWED', color: '#007bff' },
                                            { stage: 'INTERVIEWED', color: '#ffc107' },
                                            { stage: 'REJECTED', color: '#dc3545' },
                                            { stage: 'ACCEPTED', color: '#28a745' }
                                        ].map((pipelineStage) => {
                                            const isActive = application && application.status === pipelineStage.stage;

                                            return (
                                                <li key={pipelineStage.stage}>
                                                    <Link
                                                        to="#"
                                                        style={{
                                                            backgroundColor: isActive ? pipelineStage.color : '#f8f9fa',
                                                            color: isActive ? '#fff' : '#000',
                                                            padding: '0.5rem 1rem',
                                                            borderRadius: '5px',
                                                            display: 'inline-block',
                                                            textDecoration: 'none'
                                                        }}
                                                    >
                                                        {pipelineStage.stage}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h5>Details</h5>
                            </div>
                            <div className="card-body pb-0">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Current Status</p>
                                            {application ? (
                                                <span className="badge badge-soft-purple d-inline-flex align-items-center">
                                                    <i className="ti ti-point-filled me-1" />
                                                    {application.status}
                                                </span>
                                            ) : (
                                                <span>No Status Available</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Applied Date</p>
                                            {application ? (
                                                <h6 className="fw-normal">{new Date(application.submissionDate).toLocaleDateString()}</h6>
                                            ) : (
                                                <h6 className="fw-normal">N/A</h6>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <p className="mb-1">Recruiter</p>
                                            <h6 className="fw-normal">
                                                <Link to="#">- Not assigned -</Link>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-end">
                                    <button onClick={handleReject} className="btn btn-dark me-3">Reject</button>
                                    <button 
                                        type="button" 
                                        className="btn btn-info waves-effect me-3"
                                        onClick={() => {
                                            fetchUsers();
                                            const tomorrow = new Date();
                                            tomorrow.setDate(tomorrow.getDate() + 1);
                                            setInterviewDate(tomorrow.toISOString().split('T')[0]);
                                            setInterviewTime('10:00');
                                            setShowModal(true);
                                            document.body.classList.add('modal-open');
                                            const backdropElement = document.createElement('div');
                                            backdropElement.className = 'modal-backdrop fade show';
                                            document.body.appendChild(backdropElement);
                                        }}
                                    >
                                        Schedule Interview
                                    </button>
                                    <button onClick={handleNextStage} className="btn btn-primary">Move to Next Stage</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Interviews Tab */}
                    <div className="tab-pane fade" id="interviews" role="tabpanel" aria-labelledby="interviews-tab" tabIndex={0}>
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5>Scheduled Interviews</h5>
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-sm"
                                    onClick={() => {
                                        fetchUsers();
                                        const tomorrow = new Date();
                                        tomorrow.setDate(tomorrow.getDate() + 1);
                                        setInterviewDate(tomorrow.toISOString().split('T')[0]);
                                        setInterviewTime('10:00');
                                        setShowModal(true);
                                        document.body.classList.add('modal-open');
                                        const backdropElement = document.createElement('div');
                                        backdropElement.className = 'modal-backdrop fade show';
                                        document.body.appendChild(backdropElement);
                                    }}
                                >
                                    <i className="ti ti-plus me-1"></i> Schedule New Interview
                                </button>
                            </div>
                            <div className="card-body">
                                <ScheduledInterviews />
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="address2" role="tabpanel" aria-labelledby="address-tab2" tabIndex={0}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Notes</h5>
                            </div>
                            <div className="card-body">
                                {(() => {
                                    const application = JSON.parse(localStorage.getItem('selectedApplication') || 'null');
                                    if (!application || !application.aiAnalysis) {
                                        return (
                                            <div>
                                                <p>Select an application first or no AI analysis is available for this application.</p>
                                                <div className="mt-3"></div>
                                            </div>
                                        );
                                    }
                                    
                                    return (
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                                                    <h6>
                                                        Score: {application.compatibilityScore} 
                                                        <span className="badge bg-primary-transparent ms-2">
                                                            {application.status}
                                                        </span>
                                                    </h6>
                                                </div>
                                            </div>

                                            {/* Strengths Card */}
                                            <div className="col-md-6 d-flex">
                                                <div className="card flex-fill mb-3">
                                                    <div className="card-body">
                                                        <h6 className="d-flex align-items-center mb-2">
                                                            <i className="ti ti-point-filled text-success me-1" />
                                                            Strengths
                                                        </h6>
                                                        <ul className="ps-3">
                                                            {application.aiAnalysis.swot.strengths.map((strength, i) => (
                                                                <li key={i}>{strength}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Weaknesses Card */}
                                            <div className="col-md-6 d-flex">
                                                <div className="card flex-fill mb-3">
                                                    <div className="card-body">
                                                        <h6 className="d-flex align-items-center mb-2">
                                                            <i className="ti ti-point-filled text-danger me-1" />
                                                            Weaknesses
                                                        </h6>
                                                        <ul className="ps-3">
                                                            {application.aiAnalysis.swot.weaknesses.map((weakness, i) => (
                                                                <li key={i}>{weakness}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Opportunities Card */}
                                            <div className="col-md-6 d-flex">
                                                <div className="card flex-fill mb-3">
                                                    <div className="card-body">
                                                        <h6 className="d-flex align-items-center mb-2">
                                                            <i className="ti ti-point-filled text-primary me-1" />
                                                            Opportunities
                                                        </h6>
                                                        <ul className="ps-3">
                                                            {application.aiAnalysis.swot.opportunities.map((opportunity, i) => (
                                                                <li key={i}>{opportunity}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Threats Card */}
                                            <div className="col-md-6 d-flex">
                                                <div className="card flex-fill mb-3">
                                                    <div className="card-body">
                                                        <h6 className="d-flex align-items-center mb-2">
                                                            <i className="ti ti-point-filled text-warning me-1" />
                                                            Threats
                                                        </h6>
                                                        <ul className="ps-3">
                                                            {application.aiAnalysis.swot.threats.map((threat, i) => (
                                                                <li key={i}>{threat}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Keywords Card */}
                                            <div className="col-md-6 d-flex">
                                                <div className="card flex-fill mb-3">
                                                    <div className="card-body">
                                                        <h6 className="d-flex align-items-center mb-2">
                                                            <i className="ti ti-point-filled text-info me-1" />
                                                            Matched Keywords
                                                        </h6>
                                                        <ul className="ps-3">
                                                            {application.aiAnalysis.matches.keywords.map((keyword, i) => (
                                                                <li key={i}>{keyword}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Preferences Card */}
                                            <div className="col-md-6 d-flex">
                                                <div className="card flex-fill mb-3">
                                                    <div className="card-body">
                                                        <h6 className="d-flex align-items-center mb-2">
                                                            <i className="ti ti-point-filled text-secondary me-1" />
                                                            Matched Preferences
                                                        </h6>
                                                        <ul className="ps-3">
                                                            {application.aiAnalysis.matches.preferences.map((preference, i) => (
                                                                <li key={i}>{preference}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Render the interview modal */}
            <InterviewModal />
        </div>
    );
};

export default CandidateDetails;   