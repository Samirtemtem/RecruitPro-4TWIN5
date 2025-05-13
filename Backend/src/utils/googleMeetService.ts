import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

// Google API credentials

const CLIENT_ID = '1083974565116-7c8t7igidnvur8j9guc76nvv3ag3tllr.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:5000/api/auth/google/callback';
const REFRESH_TOKEN = "1//09fdteRBD_xaiCgYIARAAGAkSNwF-L9IrTe3tMurkNMtUS6o7HW8dIOuu1pcGNahWlz5emO_QfPjapwbVTUaH2wGrbe0cwj4bDpI";

// OAuth2 setup
const createOAuth2Client = (): OAuth2Client => {
  const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  // Set refresh token to allow for authentication without user interaction
  oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
  });

  return oauth2Client;
};

/**
 * Creates a Google Meet conference using Google Calendar API
 * 
 * @param {string} summary - The title of the meeting
 * @param {string} description - The description of the meeting
 * @param {Date} startDateTime - The start date and time of the meeting
 * @param {Date} endDateTime - The end date and time of the meeting
 * @param {string[]} attendeeEmails - Array of emails to invite to the meeting
 * @returns {Promise<{meetUrl: string, eventId: string}>} - The Google Meet URL and Calendar event ID
 */
export const createGoogleMeetEvent = async (
  summary: string,
  description: string,
  startDateTime: Date,
  endDateTime: Date,
  attendeeEmails: string[]
): Promise<{ meetUrl: string; eventId: string }> => {
  try {
    // Create auth client
    const oauth2Client = createOAuth2Client();
    
    // Create a Calendar API client
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Format attendees
    const attendees = attendeeEmails.map(email => ({ email }));

    // Create the event with conferencing
    const event = {
      summary,
      description,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'UTC',
      },
      attendees,
      conferenceData: {
        createRequest: {
          requestId: `interview-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' }
        }
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 30 }, // 30 minutes before
        ],
      },
    };

    console.log('Creating Google Calendar event with Meet conferencing');
    
    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1, // Enable creation of conference data
      sendUpdates: 'all', // Send invites to all attendees
    });

    // Get the event ID and meetURL
    const eventId = response.data.id || '';
    const meetUrl = response.data.conferenceData?.entryPoints?.[0]?.uri || '';

    console.log(`Meeting created: ${meetUrl}`);
    return { meetUrl, eventId };
  } catch (error) {
    console.error('Error creating Google Meet event:', error);
    throw error;
  }
};

/**
 * Updates an existing Google Calendar event with new details
 * 
 * @param {string} eventId - The ID of the event to update
 * @param {string} summary - The title of the meeting
 * @param {string} description - The description of the meeting
 * @param {Date} startDateTime - The start date and time of the meeting
 * @param {Date} endDateTime - The end date and time of the meeting
 * @param {string[]} attendeeEmails - Array of emails to invite to the meeting
 * @returns {Promise<{meetUrl: string, eventId: string}>} - The Google Meet URL and Calendar event ID
 */
export const updateGoogleMeetEvent = async (
  eventId: string,
  summary: string,
  description: string,
  startDateTime: Date,
  endDateTime: Date,
  attendeeEmails: string[]
): Promise<{ meetUrl: string; eventId: string }> => {
  try {
    // Create auth client
    const oauth2Client = createOAuth2Client();
    
    // Create a Calendar API client
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Format attendees
    const attendees = attendeeEmails.map(email => ({ email }));

    // Get the existing event to preserve conferenceData
    const existingEvent = await calendar.events.get({
      calendarId: 'primary',
      eventId,
    });

    // Create the updated event
    const event = {
      summary,
      description,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'UTC',
      },
      attendees,
      conferenceData: existingEvent.data.conferenceData, // Keep existing conference data
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 30 }, // 30 minutes before
        ],
      },
    };

    console.log(`Updating Google Calendar event: ${eventId}`);
    
    const response = await calendar.events.update({
      calendarId: 'primary',
      eventId,
      requestBody: event,
      sendUpdates: 'all', // Send updates to all attendees
    });

    // Get the meetURL from response
    const meetUrl = response.data.conferenceData?.entryPoints?.[0]?.uri || '';

    console.log(`Meeting updated: ${meetUrl}`);
    return { meetUrl, eventId };
  } catch (error) {
    console.error('Error updating Google Meet event:', error);
    throw error;
  }
};

/**
 * Cancels a Google Calendar event
 * 
 * @param {string} eventId - The ID of the event to cancel
 * @returns {Promise<boolean>} - Whether the cancellation was successful
 */
export const cancelGoogleMeetEvent = async (eventId: string): Promise<boolean> => {
  try {
    // Create auth client
    const oauth2Client = createOAuth2Client();
    
    // Create a Calendar API client
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Delete the event
    await calendar.events.delete({
      calendarId: 'primary',
      eventId,
      sendUpdates: 'all', // Notify attendees of cancellation
    });

    console.log(`Meeting canceled: ${eventId}`);
    return true;
  } catch (error) {
    console.error('Error canceling Google Meet event:', error);
    throw error;
  }
}; 