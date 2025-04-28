import 'dotenv/config'; // TypeScript equivalent of `require('dotenv').config()`
import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback as GoogleVerifyCallback } from 'passport-google-oauth20';
import { Strategy as LinkedInStrategy, Profile as LinkedInProfile } from 'passport-linkedin-oauth2';
import { User } from '../models/User';
import { sendWelcomeEmail } from '../utils/emailService';
import axios from 'axios';
import { Role } from '../models/types';
import { Strategy as GitHubStrategy } from 'passport-github2';


// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: 'http://localhost:5000/api/auth/google/callback'
    },
    async (accessToken: string, refreshToken: string, profile: any, done: GoogleVerifyCallback) => {
      try {
        //user profile google
        //console.log(profile);
       // let user = await User.findOne({ googleId: profile.id });
        let user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          // If the user already exists but doesn't have a googleId, update it
          if (!user.googleId) {
            user.googleId = profile.id;
            await user.save();
          }
        } else {
          console.log(profile);
          console.log(Role.CANDIDATE);
          user = await User.create({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            picture: profile.photos[0].value,
            email: profile.emails[0].value,
            provider: 'google',
            isVerified: true,
            
          });
          // Send the welcome email after creating the user
          await sendWelcomeEmail(user.email, profile.name.givenName);
        }
        

        done(null, user);
      } catch (error) {
        done(error as Error, false);
      }
    }
  )
);



// LinkedIn Strategy
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID || '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
      callbackURL: 'http://localhost:5000/api/auth/linkedin/callback',
      scope: ['openid', 'profile', 'email'], // OpenID Connect scopes
    },
    async (accessToken: string, refreshToken: string, profile: any, done: Function) => {
      try {
        //user profile google
        //console.log(profile);
        //let user = await User.findOne({ linkedinId: id });
        let user = await User.findOne({ email: profile.email });
        if (user) {
          // If the user already exists but doesn't have a googleId, update it
          if (!user.linkedinId) {
            user.linkedinId = profile.id;
            await user.save();
          }
        } else {
          user = await User.create({
            linkedinId: profile.id,
            firstName: profile.givenName,
            lastName: profile.familyName,
            picture: profile.picture,
            email:profile.email,
            provider: 'linkedin',
            isVerified: true,
            role: Role.CANDIDATE,
          });
          // Send the welcome email after creating the user
         // await sendWelcomeEmail(user.email, profile.givenName);
        }

        done(null, user); // Successfully authenticated and user created or found
      } catch (error) {
        console.error('LinkedIn Auth Error:', error);
        done(error, null); // Return error if any issue occurs
      }
    }
  )
);



// GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      callbackURL: 'http://localhost:5000/api/auth/github/callback',
      scope: ['user:email']
    },
    async (accessToken: string, refreshToken: string, profile: any, done: Function) => {
      try {
        console.log("GitHub profile:", JSON.stringify(profile, null, 2));
        
        // Get primary email from GitHub profile
        const primaryEmail = profile.emails && profile.emails.length > 0 
          ? profile.emails[0].value 
          : null;

        if (!primaryEmail) {
          return done(new Error('No email found in GitHub profile'), false);
        }

        // Check if user already exists
        let user = await User.findOne({ email: primaryEmail });

        if (user) {
          // If the user already exists but doesn't have a githubId, update it
          if (!user.githubId) {
            user.githubId = profile.id;
            await user.save();
          }
        } else {
          // Handle displayName safely
          let firstName = 'GitHub';
          let lastName = 'User';
          
          if (profile.displayName) {
            const nameParts = profile.displayName.split(' ');
            firstName = nameParts[0] || 'GitHub';
            lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'User';
          } else if (profile.username) {
            firstName = profile.username;
          }
          
          // Create a new user document directly without using discriminators
          user = new User({
            githubId: profile.id,
            firstName: firstName,
            lastName: lastName,
            image: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : '',
            email: primaryEmail,
            provider: 'github',
            isVerified: true,
            role: Role.CANDIDATE,
            phoneNumber: '0000000000',
            password: 'SUPERSECRET' // This will be hashed by the pre-save middleware
          });
          
          await user.save();
          
          // Send welcome email
          await sendWelcomeEmail(user.email, firstName);
        }

        done(null, user);
      } catch (error) {
        console.error('GitHub Auth Error:', error);
        done(error, false);
      }
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
