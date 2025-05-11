import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Interview from '../models/Interview';
import Application from '../models/Application';
import { User } from '../models/User';
import { InterviewStatus, InterviewType, ApplicationStatus } from '../models/types';
import { createGoogleMeetEvent, updateGoogleMeetEvent, cancelGoogleMeetEvent } from '../utils/googleMeetService';

// Create a new interview
export const createInterview = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Interview creation request received');
    
    // Log the entire request body for debugging
    console.log('Full request body:', JSON.stringify(req.body));
    
    const { 
      applicationId, 
      departmentManagerId, 
      teamLeadIds, 
      scheduledDate, 
      scheduledTime, 
      duration, 
      notes,
      meetUrl 
    } = req.body;

    console.log('Request body fields after destructuring:');
    console.log('- applicationId:', applicationId);
    console.log('- departmentManagerId:', departmentManagerId);
    console.log('- teamLeadIds:', teamLeadIds);
    console.log('- scheduledDate:', scheduledDate);
    console.log('- scheduledTime:', scheduledTime);

    // Validate the required fields
    if (!applicationId) {
      console.error('Validation failed: Application ID is missing');
      res.status(400).json({ message: 'Application ID is missing' });
      return;
    }
    
    if (!departmentManagerId) {
      res.status(400).json({ message: 'Department Manager ID is missing' });
      return;
    }
    
    if (!teamLeadIds) {
      res.status(400).json({ message: 'Team Lead IDs are missing' });
      return;
    }
    
    if (!scheduledDate) {
      res.status(400).json({ message: 'Scheduled Date is missing' });
      return;
    }
    
    if (!scheduledTime) {
      res.status(400).json({ message: 'Scheduled Time is missing' });
      return;
    }

    // Validate teamLeadIds is an array and not empty
    if (!Array.isArray(teamLeadIds) || teamLeadIds.length === 0) {
      res.status(400).json({ message: 'At least one team lead must be selected' });
      return;
    }

    // Find the application to get the candidate
    const application = await Application.findById(applicationId);
    if (!application) {
      res.status(404).json({ message: 'Application not found' });
      return;
    }

    // Validate that department manager exists
    const departmentManager = await User.findById(departmentManagerId);
    if (!departmentManager) {
      res.status(404).json({ message: 'Department manager not found' });
      return;
    }

    // Validate that all team leads exist
    const teamLeads = await User.find({ _id: { $in: teamLeadIds } });
    if (teamLeads.length !== teamLeadIds.length) {
      res.status(404).json({ message: 'One or more team leads not found' });
      return;
    }

    // Get candidate info
    const candidateId = application.candidate;
    if (!candidateId) {
      res.status(404).json({ message: 'Candidate information not found in application' });
      return;
    }

    // Fetch candidate details
    const candidate = await User.findById(candidateId);
    if (!candidate) {
      res.status(404).json({ message: 'Candidate not found' });
      return;
    }

    // Calculate time slots
    const [hours, minutes] = scheduledTime.split(':').map(Number);
    const startDateTime = new Date(scheduledDate);
    startDateTime.setHours(hours, minutes, 0, 0);
    
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + (duration || 60));

    // Format interview information for Google Calendar event
    const jobTitle = application.jobPost ? await getJobTitle(application.jobPost) : 'Interview';
    const summary = `Interview: ${candidate.firstName} ${candidate.lastName} - ${jobTitle}`;
    
    const description = `
Interview for ${candidate.firstName} ${candidate.lastName} (${candidate.email})
Job: ${jobTitle}
Department Manager: ${departmentManager.firstName} ${departmentManager.lastName}
Team Lead(s): ${teamLeads.map(lead => `${lead.firstName} ${lead.lastName}`).join(', ')}

Notes:
${notes || 'No additional notes.'}
`;

    // Collect all attendee emails
    const attendeeEmails = [
      departmentManager.email,
      ...teamLeads.map(lead => lead.email),
      candidate.email
    ].filter(Boolean); // Remove any undefined emails

    // Create a Google Meet event
    try {
      console.log('Creating Google Meet event with attendees:', attendeeEmails);
      
      const { meetUrl: googleMeetUrl, eventId } = await createGoogleMeetEvent(
        summary,
        description,
        startDateTime,
        endDateTime,
        attendeeEmails
      );

      // Use the Google Meet URL or fallback to the provided URL if Google API fails
      const finalMeetUrl = googleMeetUrl || meetUrl || `https://meet.google.com/${Math.random().toString(36).substring(2, 11)}`;

      // Create the interview with the Google event details
      const interview = new Interview({
        application: applicationId,
        departmentManager: departmentManagerId,
        teamLeads: teamLeadIds,
        candidate: candidateId,
        scheduledDate: startDateTime,
        scheduledTime,
        duration: duration || 60,
        type: InterviewType.ONLINE,
        status: InterviewStatus.SCHEDULED,
        location: 'Remote',
        meetUrl: finalMeetUrl,
        googleCalendarEventId: eventId,
        notes: notes || ''
      });

      // Save the interview
      const savedInterview = await interview.save();

      // Update the application status and add the interview reference
      application.status = ApplicationStatus.INTERVIEWED;
      application.interviews = application.interviews || [];
      application.interviews.push(savedInterview.id);
      await application.save();

      res.status(201).json({
        ...savedInterview.toObject(),
        meetUrl: finalMeetUrl,
        googleCalendarEventId: eventId,
        message: 'Interview scheduled successfully with Google Calendar event'
      });
      
    } catch (googleError) {
      console.error('Google Calendar API error:', googleError);
      
      // Fallback to creating an interview without Google Calendar integration
      console.log('Falling back to manual interview creation without Google Calendar');
      
      const fallbackMeetUrl = meetUrl || `https://meet.google.com/${Math.random().toString(36).substring(2, 11)}`;
      
      const interview = new Interview({
        application: applicationId,
        departmentManager: departmentManagerId,
        teamLeads: teamLeadIds,
        candidate: candidateId,
        scheduledDate: startDateTime,
        scheduledTime,
        duration: duration || 60,
        type: InterviewType.ONLINE,
        status: InterviewStatus.SCHEDULED,
        location: 'Remote',
        meetUrl: fallbackMeetUrl,
        notes: notes || ''
      });

      // Save the interview
      const savedInterview = await interview.save();

      // Update the application status and add the interview reference
      application.status = ApplicationStatus.INTERVIEWED;
      application.interviews = application.interviews || [];
      application.interviews.push(savedInterview.id);
      await application.save();

      res.status(201).json({
        ...savedInterview.toObject(),
        meetUrl: fallbackMeetUrl,
        message: 'Interview scheduled successfully (without Google Calendar integration)'
      });
    }
  } catch (error) {
    console.error('Error creating interview:', error);
    res.status(500).json({ 
      message: 'Error creating interview', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};

// Get all interviews
export const getInterviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const interviews = await Interview.find()
      .populate('application')
      .populate('departmentManager', 'firstName lastName email department')
      .populate('teamLeads', 'firstName lastName email team')
      .populate('candidate', 'firstName lastName email');
    
    res.status(200).json(interviews);
  } catch (error) {
    console.error('Error fetching interviews:', error);
    res.status(500).json({ 
      message: 'Error fetching interviews', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};

// Get a specific interview by ID
export const getInterviewById = async (req: Request, res: Response): Promise<void> => {
  try {
    const interview = await Interview.findById(req.params.id)
      .populate('application')
      .populate('departmentManager', 'firstName lastName email department')
      .populate('teamLeads', 'firstName lastName email team')
      .populate('candidate', 'firstName lastName email');
    
    if (!interview) {
      res.status(404).json({ message: 'Interview not found' });
      return;
    }
    
    res.status(200).json(interview);
  } catch (error) {
    console.error('Error fetching interview:', error);
    res.status(500).json({ 
      message: 'Error fetching interview', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};

// Update interview status
export const updateInterviewStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status } = req.body;
    
    if (!status || !Object.values(InterviewStatus).includes(status)) {
      res.status(400).json({ message: 'Valid status is required' });
      return;
    }
    
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      res.status(404).json({ message: 'Interview not found' });
      return;
    }
    
    interview.status = status;
    await interview.save();
    
    // If the interview is canceled and has a Google Calendar Event ID, cancel it in Google Calendar
    if (status === InterviewStatus.CANCELED && interview.googleCalendarEventId) {
      try {
        await cancelGoogleMeetEvent(interview.googleCalendarEventId);
      } catch (googleError) {
        console.error('Error canceling Google Calendar event:', googleError);
        // Continue even if Google Calendar update fails
      }
    }
    
    res.status(200).json(interview);
  } catch (error) {
    console.error('Error updating interview status:', error);
    res.status(500).json({ 
      message: 'Error updating interview status', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};

// Update interview details
export const updateInterview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { 
      departmentManagerId, 
      teamLeadIds, 
      scheduledDate, 
      scheduledTime, 
      duration, 
      notes,
      type
    } = req.body;

    // Find the interview
    const interview = await Interview.findById(id);
    if (!interview) {
      res.status(404).json({ message: 'Interview not found' });
      return;
    }

    // Validate data if provided
    if (departmentManagerId) {
      const departmentManager = await User.findById(departmentManagerId);
      if (!departmentManager) {
        res.status(404).json({ message: 'Department manager not found' });
        return;
      }
      interview.departmentManager = departmentManagerId;
    }

    if (teamLeadIds) {
      if (!Array.isArray(teamLeadIds) || teamLeadIds.length === 0) {
        res.status(400).json({ message: 'At least one team lead must be selected' });
        return;
      }

      const teamLeads = await User.find({ _id: { $in: teamLeadIds } });
      if (teamLeads.length !== teamLeadIds.length) {
        res.status(404).json({ message: 'One or more team leads not found' });
        return;
      }
      
      interview.teamLeads = teamLeadIds;
    }

    // Update other fields if provided
    if (scheduledDate) interview.scheduledDate = new Date(scheduledDate);
    if (scheduledTime) interview.scheduledTime = scheduledTime;
    if (duration) interview.duration = duration;
    if (notes !== undefined) interview.notes = notes;
    if (type && Object.values(InterviewType).includes(type as InterviewType)) {
      interview.type = type as InterviewType;
    }

    // Calculate new start and end times if date or time was updated
    let startDateTime = interview.scheduledDate;
    if (scheduledDate || scheduledTime) {
      // Extract hours and minutes
      const timeToUse = scheduledTime || interview.scheduledTime;
      const [hours, minutes] = timeToUse.split(':').map(Number);
      
      // Create a new date if scheduledDate was provided, otherwise use existing date
      startDateTime = scheduledDate ? new Date(scheduledDate) : new Date(interview.scheduledDate);
      startDateTime.setHours(hours, minutes, 0, 0);
      
      // Update the interview's scheduled date
      interview.scheduledDate = startDateTime;
    }

    // Calculate the end date/time
    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + (duration || interview.duration));

    // Update the Google Calendar event if it exists
    if (interview.googleCalendarEventId) {
      try {
        // Fetch all related users
        const application = await Application.findById(interview.application);
        if (!application) {
          res.status(404).json({ message: 'Associated application not found' });
          return;
        }

        const candidateId = application.candidate;
        const candidate = await User.findById(candidateId);
        
        const departmentManager = await User.findById(
          departmentManagerId || interview.departmentManager
        );
        
        const teamLeadsArray = await User.find({ 
          _id: { $in: teamLeadIds || interview.teamLeads } 
        });

        // Only proceed if we have the necessary data
        if (candidate && departmentManager) {
          // Format interview information for Google Calendar event
          const jobTitle = application.jobPost ? await getJobTitle(application.jobPost) : 'Interview';
          const summary = `Interview: ${candidate.firstName} ${candidate.lastName} - ${jobTitle}`;
          
          const description = `
Interview for ${candidate.firstName} ${candidate.lastName} (${candidate.email})
Job: ${jobTitle}
Department Manager: ${departmentManager.firstName} ${departmentManager.lastName}
Team Lead(s): ${teamLeadsArray.map(lead => `${lead.firstName} ${lead.lastName}`).join(', ')}

Notes:
${notes || interview.notes || 'No additional notes.'}
`;

          // Collect all attendee emails
          const attendeeEmails = [
            departmentManager.email,
            ...teamLeadsArray.map(lead => lead.email),
            candidate.email
          ].filter(Boolean); // Remove any undefined emails

          // Update the Google Calendar event
          console.log(`Updating Google Calendar event ${interview.googleCalendarEventId}`);
          
          const { meetUrl: googleMeetUrl } = await updateGoogleMeetEvent(
            interview.googleCalendarEventId,
            summary,
            description,
            startDateTime,
            endDateTime,
            attendeeEmails
          );

          // Update the meet URL if a new one was returned
          if (googleMeetUrl) {
            interview.meetUrl = googleMeetUrl;
          }
        }
      } catch (googleError) {
        console.error('Error updating Google Calendar event:', googleError);
        // Continue even if Google Calendar update fails
      }
    }

    // Save the updated interview
    const updatedInterview = await interview.save();
    
    res.status(200).json({
      ...updatedInterview.toObject(),
      message: 'Interview updated successfully'
    });
  } catch (error) {
    console.error('Error updating interview:', error);
    res.status(500).json({ 
      message: 'Error updating interview', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};

// Helper function to get job title
async function getJobTitle(jobPostId: any): Promise<string> {
  try {
    const JobPost = mongoose.model('JobPost');
    const jobPost = await JobPost.findById(jobPostId);
    return jobPost?.title || 'Job Opening';
  } catch (error) {
    console.error('Error fetching job title:', error);
    return 'Job Opening';
  }
} 