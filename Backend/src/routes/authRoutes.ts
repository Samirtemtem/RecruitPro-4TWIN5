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
  forgotPassword, 
  resetPassword, 
 // createAdmin, 
 // getall 
} from '../controllers/authController';
import { generateToken } from '../utils/generateToken';
import { upload } from '../utils/cloudinary';

const router = express.Router();

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
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
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

