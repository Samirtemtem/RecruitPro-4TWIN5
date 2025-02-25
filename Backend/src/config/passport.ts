import 'dotenv/config'; // TypeScript equivalent of `require('dotenv').config()`
import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback as GoogleVerifyCallback } from 'passport-google-oauth20';
import { Strategy as LinkedInStrategy, Profile as LinkedInProfile } from 'passport-linkedin-oauth2';
import { User } from '../models/User';
import { sendWelcomeEmail } from '../utils/emailService';
import axios from 'axios';
import { Role } from '../models/types';

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
