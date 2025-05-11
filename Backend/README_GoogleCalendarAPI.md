# Google Meet API Integration

This document provides instructions for setting up and using the Google Meet API integration in the RecruitPro application.

## Overview

The Google Meet API integration allows the application to:

1. Create Google Meet video conferences for interviews
2. Send calendar invitations to candidates, department managers, and team leads
3. Update interview details when changes are made
4. Cancel meetings when interviews are canceled

## Setup Instructions

### 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Google Calendar API
   - Google Meet API

### 2. Configure OAuth Consent Screen

1. Go to "OAuth consent screen" in the Google Cloud Console
2. Select "Internal" or "External" user type (Internal is recommended for business use)
3. Fill in the required application information
4. Add the following scopes:
   - `https://www.googleapis.com/auth/calendar`
   - `https://www.googleapis.com/auth/calendar.events`
   - `https://www.googleapis.com/auth/meetings.space.created`
   - `https://www.googleapis.com/auth/meetings.space.readonly`

### 3. Create OAuth Credentials

1. Go to "Credentials" in the Google Cloud Console
2. Click "Create Credentials" and select "OAuth client ID"
3. Select "Web application" as the application type
4. Add authorized redirect URIs:
   - `http://localhost:5000/api/auth/google/callback` (for development)
   - Your production callback URL
5. Click "Create" and note the Client ID and Client Secret

### 4. Obtain a Refresh Token

To get a refresh token, you need to authorize your application once:

1. Create a simple Node.js script using the following code:

```javascript
const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const open = require('open');

// Replace with your credentials
const CLIENT_ID = 'your-client-id';
const CLIENT_SECRET = 'your-client-secret';
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const scopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  prompt: 'consent'  // Force to get refresh token
});

// Open the browser for the user to authenticate
open(authUrl);

// Create a local server to receive the callback
http.createServer(async (req, res) => {
  try {
    const { query } = url.parse(req.url, true);
    
    if (query.code) {
      const { tokens } = await oauth2Client.getToken(query.code);
      console.log('Refresh Token:', tokens.refresh_token);
      
      res.end('Authentication successful! You can close this tab and check the console for your refresh token.');
      server.close();
    }
  } catch (error) {
    console.error('Error:', error);
    res.end('Error during authentication. Check the console.');
  }
}).listen(3000);

console.log('Server is running at http://localhost:3000');
```

2. Run the script and follow the authentication flow
3. After successful authentication, the refresh token will be displayed in the console

### 5. Configure Environment Variables

Add the following variables to your `.env` file:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/api/auth/google/callback
GOOGLE_REFRESH_TOKEN=your_refresh_token
```

## Usage

The Google Meet integration is used automatically when:

1. Creating a new interview: A Google Calendar event with a Meet link is created and sent to all participants
2. Updating interview details: The corresponding Calendar event is updated
3. Canceling an interview: The Calendar event is canceled

### API Functions

The `googleMeetService.ts` file provides the following functions:

#### `createGoogleMeetEvent`

Creates a new Google Calendar event with a Google Meet conference.

```typescript
createGoogleMeetEvent(
  summary: string,
  description: string,
  startDateTime: Date,
  endDateTime: Date,
  attendeeEmails: string[]
): Promise<{ meetUrl: string; eventId: string }>
```

#### `updateGoogleMeetEvent`

Updates an existing Google Calendar event.

```typescript
updateGoogleMeetEvent(
  eventId: string,
  summary: string,
  description: string,
  startDateTime: Date,
  endDateTime: Date,
  attendeeEmails: string[]
): Promise<{ meetUrl: string; eventId: string }>
```

#### `cancelGoogleMeetEvent`

Cancels a Google Calendar event.

```typescript
cancelGoogleMeetEvent(eventId: string): Promise<boolean>
```

## Troubleshooting

### Common Issues

1. **Authentication errors**: Ensure your OAuth credentials and refresh token are correct
2. **Missing Calendar events**: Check if the Google Calendar API is enabled in your Google Cloud project
3. **Rate limit errors**: Implement exponential backoff for API calls if you're creating many interviews

### Logs

The integration logs errors and success messages to the console. Check these logs for troubleshooting.

## Security Considerations

- Keep your OAuth credentials and refresh token secure
- Use environment variables for sensitive information
- Consider encrypting the refresh token in your database
- Use domain-wide delegation for production applications to avoid refresh token expiration

## Further Resources

- [Google Calendar API Documentation](https://developers.google.com/calendar/api/guides/overview)
- [Google Meet API Documentation](https://developers.google.com/meet/api/overview)
- [OAuth 2.0 for Google APIs](https://developers.google.com/identity/protocols/oauth2) 