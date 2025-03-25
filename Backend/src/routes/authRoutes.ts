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
  changePassword,
  forgotPassword, 
  resetPassword,
  update2FASettings
} from '../controllers/authController';
import { generateToken } from '../utils/generateToken';
import { upload } from '../utils/cloudinary';

const router = express.Router();

// Social Auth Callback
const socialAuthCallback = async (req: Request, res: Response): Promise<any> => {
  try {
    if (!req.user) {
      console.error('No user found in social auth callback');
      return res.status(401).json({ error: 'Unauthorized' });
    }
    console.log("req.user", req.user);
    console.log("generating token");
    const token = generateToken((req.user as any)._id); // Type assertion for user ID
    const userRole = (req.user as any).role; // Type assertion for role
    console.log("token", token);
    console.log("userRole", userRole);
    //res.redirect(`${process.env.FRONTEND_URL}/SocialAuthHandler?token=${token}`);
    //res.redirect(`${process.env.FRONTEND_URL}/SocialAuthHandler?token=${token}&role=${encodeURIComponent(userRole)}`);
    // redirect to SocialAuthHandler page
    res.redirect(`${process.env.FRONTEND_URL}/SocialAuthHandler?token=${token}&role=${encodeURIComponent(userRole)}`);

  } catch (error) {
    console.error('Error in socialAuthCallback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Authentication]
 *     summary: Register a new user
 *     description: Register a new user with their details and profile information
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - phoneNumber
 *               - address
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name (2-50 characters)
 *               lastName:
 *                 type: string
 *                 description: User's last name (2-50 characters)
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User password (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
 *               phoneNumber:
 *                 type: string
 *                 description: User's phone number
 *               address:
 *                 type: string
 *                 description: User's address
 *               profileImage:
 *                 type: file
 *                 description: User's profile image
 *               cv:
 *                 type: file
 *                 description: User's CV file (PDF or Word document)
 *               education:
 *                 type: string
 *                 description: JSON string of education records
 *               experience:
 *                 type: string
 *                 description: JSON string of experience records
 *               skills:
 *                 type: string
 *                 description: JSON string of skills
 *               socialLinks:
 *                 type: string
 *                 description: JSON string of social links
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
router.post('/register', 
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'cv', maxCount: 1 }
  ]),
  register
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Authentication]
 *     summary: Login user
 *     description: Authenticate user with email and password
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
 *         description: Login successful, returns auth token and user data
 *       401:
 *         description: Authentication failed
 *       403:
 *         description: Email not verified or needs 2FA verification
 *       500:
 *         description: Server error
 */
router.post('/login', login);

/**
 * @swagger
 * /api/auth/verifyEmail:
 *   get:
 *     tags: [Authentication]
 *     summary: Verify email
 *     description: Verify user's email using the token sent to their email
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Verification token sent to email
 *     responses:
 *       200:
 *         description: Email verified successfully
 *       400:
 *         description: Invalid token or email already verified
 *       500:
 *         description: Server error
 */
router.get('/verifyEmail', verifyEmail);

/**
 * @swagger
 * /api/auth/send-otp:
 *   post:
 *     tags: [Authentication]
 *     summary: Send OTP
 *     description: Send a one-time password to the user's email for verification
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
 *         description: OTP sent successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post('/send-otp', sendOTP);

/**
 * @swagger
 * /api/auth/verify-otp:
 *   post:
 *     tags: [Authentication]
 *     summary: Verify OTP
 *     description: Verify the one-time password provided by the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               otp:
 *                 type: string
 *                 description: One-time password sent to email
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post('/verify-otp', verifyOTP);

/**
 * @swagger
 * /api/auth/forgotpassword:
 *   post:
 *     tags: [Authentication]
 *     summary: Request password reset
 *     description: Send a password reset link to the user's email
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
 *         description: Reset instructions sent to email
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post('/forgotpassword', forgotPassword);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     tags: [Authentication]
 *     summary: Reset password
 *     description: Reset user's password using the token from email
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
 *                 description: Reset token sent to email
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Invalid or expired token
 *       500:
 *         description: Server error
 */
router.post('/reset-password', resetPassword);

/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     tags: [Authentication]
 *     summary: Google OAuth login
 *     description: Redirect to Google authentication page
 *     responses:
 *       302:
 *         description: Redirect to Google authentication
 */
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

/**
 * @swagger
 * /api/auth/change-password:
 *   put:
 *     tags: [Authentication]
 *     summary: Change password
 *     description: Change user's password when logged in
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
 *                 format: password
 *                 description: Current password
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Invalid input or password requirements not met
 *       401:
 *         description: Current password is incorrect
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.put('/change-password', changePassword);

/**
 * @swagger
 * /api/auth/google/callback:
 *   get:
 *     tags: [Authentication]
 *     summary: Google OAuth callback
 *     description: Callback endpoint for Google authentication
 *     responses:
 *       302:
 *         description: Redirect to frontend with authentication token
 */
router.get('/google/callback', passport.authenticate('google', {
  session: false,
  failureRedirect: `${process.env.FRONTEND_URL}/loginuser`,
}), socialAuthCallback);

/**
 * @swagger
 * /api/auth/linkedin:
 *   get:
 *     tags: [Authentication]
 *     summary: LinkedIn OAuth login
 *     description: Redirect to LinkedIn authentication page
 *     responses:
 *       302:
 *         description: Redirect to LinkedIn authentication
 */
router.get('/linkedin', passport.authenticate('linkedin'));

/**
 * @swagger
 * /api/auth/linkedin/callback:
 *   get:
 *     tags: [Authentication]
 *     summary: LinkedIn OAuth callback
 *     description: Callback endpoint for LinkedIn authentication
 *     responses:
 *       302:
 *         description: Redirect to frontend with authentication token
 */
router.get('/linkedin/callback', passport.authenticate('linkedin', {
  session: false,
  failureRedirect: `${process.env.FRONTEND_URL}/loginuser`,
}), socialAuthCallback);

/**
 * @swagger
 * /api/auth/user/{token}:
 *   get:
 *     tags: [Authentication]
 *     summary: Get user by token
 *     description: Get user information using JWT token
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: JWT token
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *       400:
 *         description: Invalid token
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get('/user/:token', getUserByEmail);

/**
 * @swagger
 * /api/auth/update2fa:
 *   post:
 *     tags: [Authentication]
 *     summary: Update two-factor authentication settings
 *     description: Enable or disable two-factor authentication for a user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - enabled
 *             properties:
 *               enabled:
 *                 type: boolean
 *                 description: Whether to enable or disable 2FA
 *     responses:
 *       200:
 *         description: 2FA settings updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized - invalid token
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post('/update2fa', update2FASettings);

/**
 * @swagger
 * /api/auth/github:
 *   get:
 *     tags: [Authentication]
 *     summary: GitHub OAuth login
 *     description: Redirect to GitHub authentication page
 *     responses:
 *       302:
 *         description: Redirect to GitHub authentication
 */
router.get('/github', (req, res, next) => {
  console.log('GitHub authentication route hit');
  passport.authenticate('github', { scope: ['user:email'] })(req, res, next);
});

/**
 * @swagger
 * /api/auth/github/callback:
 *   get:
 *     tags: [Authentication]
 *     summary: GitHub OAuth callback
 *     description: Callback endpoint for GitHub authentication
 *     responses:
 *       302:
 *         description: Redirect to frontend with authentication token
 */
router.get('/github/callback', (req, res, next) => {
  console.log('GitHub callback route hit');
  passport.authenticate('github', {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/loginuser`,
  })(req, res, next);
}, socialAuthCallback);

export default router;

