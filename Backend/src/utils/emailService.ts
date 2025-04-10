import nodemailer from 'nodemailer';
import 'dotenv/config'; // TypeScript equivalent of `require('dotenv').config()`
import { IUser } from '../models/User';



const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER || '', // Your Gmail address
    pass: process.env.EMAIL_PASS || '', // Your app-specific password
  },
});


const APP_NAME = 'RecruitPro';
const LOGO_URL = `${process.env.FRONTEND_URL}/public/assets/img/RecruitProX.png`;

/**
 * Sends a verification email to the user with a verification link.
 * @param email - The recipient's email address.
 * @param token - The verification token to be included in the URL.
 */
export const sendVerificationEmail = async (email: string, token: string): Promise<void> => {
  try {
    const verificationUrl = `${process.env.FRONTEND_URL}/VerifyEmail?token=${token}`;
    await transporter.sendMail({
      from: `${APP_NAME} <noreply@recruitpro.com>`,
      to: email,
      subject: 'Verify Your Email for RecruitPro',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
          <div style="text-align: center;">
            <img src="${LOGO_URL}" alt="${APP_NAME} Logo" style="max-width: 200px; margin-bottom: 20px;" />
            <h1 style="color: #333;">Welcome to ${APP_NAME}!</h1>
          </div>
          <p style="color: #555;">Please verify your email address by clicking the link below:</p>
          <p><a href="${verificationUrl}" style="color: #007bff; text-decoration: none;">Verify Email</a></p>
          <p style="color: #555;">If you didn't create an account, please ignore this email.</p>
        </div>
      `,
    });
    console.log(`Verification email sent to ${email}`);
  } catch (error) {
    console.error('Error sending verification email:', error);
  }
};

/**
 * Sends a welcome email to the user after their account is created.
 * @param email - The recipient's email address.
 * @param name - The user's name (or email if name isn't available).
 */
export const sendWelcomeEmail = async (email: string, name: string): Promise<void> => {
  try {
    await transporter.sendMail({
      from: `${APP_NAME} <noreply@recruitpro.com>`,
      to: email,
      subject: 'Welcome to RecruitPro!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
          <div style="text-align: center;">
            <img src="${LOGO_URL}" alt="${APP_NAME} Logo" style="max-width: 200px; margin-bottom: 20px;" />
            <h1 style="color: #333;">Hi ${name}, Welcome to ${APP_NAME}!</h1>
          </div>
          <p style="color: #555;">Your account has been successfully created. We're excited to have you on board!</p>
          <p style="color: #555;">If you have any questions, feel free to contact us at support@recruitpro.com.</p>
        </div>
      `,
    });
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
};

/**
 * Sends a password to the user.
 * @param email - The recipient's email address.
 * @param password - The generated password to be sent.
 */
export const sendPasswordEmail = async (email: string, password: string): Promise<void> => {
  try {
    await transporter.sendMail({
      from: `${APP_NAME} <noreply@recruitpro.com>`,
      to: email,
      subject: 'Your New Password for RecruitPro',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
          <div style="text-align: center;">
            <img src="${LOGO_URL}" alt="${APP_NAME} Logo" style="max-width: 200px; margin-bottom: 20px;" />
            <h1 style="color: #333;">Hi,</h1>
          </div>
          <p style="color: #555;">Here is your new password for ${APP_NAME}:</p>
          <p style="font-size: 16px; font-weight: bold;">${password}</p>
          <p style="color: #555;">Please use this password to log in to your account. We recommend changing it once you log in.</p>
        </div>
      `,
    });
    console.log(`Password email sent to ${email}`);
  } catch (error) {
    console.error('Error sending password email:', error);
  }
};

/**
 * Sends a one-time password (OTP) to the user for verification.
 * @param user - The user object containing email and OTP.
 */
export const sendOTPEmail = async (user: IUser): Promise<void> => {
  try {
    if (!user.OneTimePassword) {
      throw new Error('No OTP found for user');
    }

    await transporter.sendMail({
      from: `${APP_NAME} <noreply@recruitpro.com>`,
      to: user.email,
      subject: `Your Verification Code for ${APP_NAME}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
          <div style="text-align: center;">
            <img src="${LOGO_URL}" alt="${APP_NAME} Logo" style="max-width: 200px; margin-bottom: 20px;" />
            <h1 style="color: #333;">Verification Code</h1>
          </div>
          <p style="color: #555;">Hello${user.firstName ? ' ' + user.firstName : ''},</p>
          <p style="color: #555;">Your verification code is:</p>
          <div style="text-align: center;">
            <p style="font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #2c3e50; 
               background: #f8f9fa; padding: 15px; margin: 20px auto; display: inline-block; 
               border-radius: 8px; border: 2px solid #e9ecef;">
              ${user.OneTimePassword}
            </p>
          </div>
          <p style="color: #555;">
            Please use this code to complete your verification process. This code will expire shortly.
          </p>
          <p style="color: #888; font-size: 12px; margin-top: 20px; text-align: center;">
            If you didn't request this code, please ignore this email.
          </p>
        </div>
      `,
    });
    console.log(`OTP email sent to ${user.email}`);
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw error;
  }
};








//////////////////////////////////////////////////////////////////////////////////


/**
 * Sends a password reset email to the user with a password reset link.
 * @param email - The recipient's email address.
 * @param token - The reset token to be included in the URL.
 */

export const sendPasswordResetEmail = async (email: string, token: string): Promise<void> => {
  try {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
    await transporter.sendMail({
      from: 'Your App <noreply@yourapp.com>',
      to: email,
      subject: 'Password Reset',
      html: `Click <a href="${resetUrl}">here</a> to reset your password.`,
    });
    console.log(`Password reset email sent to ${email}`);
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
};

/**
 * Sends a confirmation email after successful password reset.
 * @param email - The recipient's email address.
 */
export const sendPasswordResetSuccessEmail = async (email: string): Promise<void> => {
  try {
    await transporter.sendMail({
      from: `${APP_NAME} <noreply@recruitpro.com>`,
      to: email,
      subject: 'Password Reset Successful',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc;">
          <div style="text-align: center;">
            <img src="${LOGO_URL}" alt="${APP_NAME} Logo" style="max-width: 200px; margin-bottom: 20px;" />
            <h1 style="color: #333;">Password Reset Successful</h1>
          </div>
          <p style="color: #555;">Your password has been successfully reset.</p>
          <p style="color: #555;">If you did not make this change, please contact our support team immediately.</p>
          <p style="color: #555;">For security reasons, we recommend logging out of all devices and logging back in with your new password.</p>
        </div>
      `,
    });
    console.log(`Password reset success email sent to ${email}`);
  } catch (error) {
    console.error('Error sending password reset success email:', error);
  }
};
