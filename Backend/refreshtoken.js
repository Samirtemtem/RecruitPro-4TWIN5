const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const open = require('open');

// Replace with your credentials
const CLIENT_ID = '1083974565116-7c8t7igidnvur8j9guc76nvv3ag3tllr.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:5000/api/auth/google/callback';

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
    }
  } catch (error) {
    console.error('Error:', error);
    res.end('Error during authentication. Check the console.');
  }
}).listen(3000);

console.log('Server is running at http://localhost:3000');