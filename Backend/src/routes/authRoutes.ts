import express, { Request, Response } from 'express';
import 'dotenv/config';
import passport from 'passport';
import { 
  register,
  verifyEmail,
  getUserByEmail,
  sendOTP,
  verifyOTP,
  login,
  // forgotPassword, 
  // resetPassword, 
  // createAdmin, 
  // getall 
  changePassword,
  forgotPassword, 
  resetPassword, 
 // createAdmin, 
 // getall 
} from '../controllers/authController';
import { generateToken } from '../utils/generateToken';
import { upload } from '../utils/cloudinary';

const router = express.Router();

/**
 * @swagger
 * /api/auth/verify-email:
 *   get:
 *     tags: [Authentication]
 *     summary: Verify user email
 *     description: Verifies user's email address using the verification token
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Email verification token
 *     responses:
 *       200:
 *         description: Email verified successfully
 *       400:
 *         description: Invalid or expired token
 *       500:
 *         description: Server error
 */

// Local Auth Routes
router.post('/register', 
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'cv', maxCount: 1 }
  ]),
  register
);
// Local Auth
router.post('/login', login);
router.post('/register', register);

// Email Verification
router.get('/verifyEmail', verifyEmail);

// OTP Routes
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);

// Password Reset
router.post('/forgotpassword', forgotPassword);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     tags: [Authentication]
 *     summary: Reset password
 *     description: Resets user's password using the reset token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - newPassword
 *             properties:
 *               token:
 *                 type: string
 *                 description: Password reset token
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password reset successful
 *       400:
 *         description: Invalid or expired token
 *       500:
 *         description: Server error
 */
router.post('/reset-password', resetPassword);

// Social Auth Callback
const socialAuthCallback = async (req: Request, res: Response): Promise<any> => {
  try {
    if (!req.user) {
      console.error('No user found in social auth callback');
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = generateToken((req.user as any)._id); // Type assertion for user ID
    const userRole = (req.user as any).role; // Type assertion for role

    //res.redirect(`${process.env.FRONTEND_URL}/SocialAuthHandler?token=${token}`);
    //res.redirect(`${process.env.FRONTEND_URL}/SocialAuthHandler?token=${token}&role=${encodeURIComponent(userRole)}`);
    // redirect to SocialAuthHandler page
    res.redirect(`${process.env.FRONTEND_URL}/SocialAuthHandler?token=${token}&role=${encodeURIComponent(userRole)}`);

  } catch (error) {
    console.error('Error in socialAuthCallback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Google Auth

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Authentication]
 *     summary: User login
 *     description: Authenticates a user and returns a JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *                 user:
 *                   type: object
 *                   description: User information
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 */
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

/**
 * @swagger
 * /api/auth/forgot-password:
 *   post:
 *     tags: [Authentication]
 *     summary: Request password reset
 *     description: Sends a password reset email to the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *     responses:
 *       200:
 *         description: Password reset email sent
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /api/auth/change-password:
 *   put:
 *     tags: [Authentication]
 *     summary: Change user password
 *     description: Changes user's password after verifying current password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - oldPassword
 *               - newPassword
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User's ID
 *               oldPassword:
 *                 type: string
 *                 description: Current password
 *               newPassword:
 *                 type: string
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid request or password requirements not met
 *       401:
 *         description: Current password is incorrect
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

// Route handler
router.put('/change-password', changePassword);
router.get('/google/callback', passport.authenticate('google', {
  session: false,
  failureRedirect: `${process.env.FRONTEND_URL}/loginuser`,
}), socialAuthCallback);

// LinkedIn Auth route
router.get('/linkedin', passport.authenticate('linkedin'));
router.get('/linkedin/callback', passport.authenticate('linkedin', {
  session: false,
  failureRedirect: `${process.env.FRONTEND_URL}/loginuser`,
}), socialAuthCallback);

// Get user by email route
router.get('/user/:token', getUserByEmail);

export default router;

