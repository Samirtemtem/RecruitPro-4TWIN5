import express, { Request, Response } from 'express';
import 'dotenv/config';
import passport from 'passport';
import { 
  login,
  register,
  verifyEmail ,
 // forgotPassword, 
 // resetPassword, 
 // createAdmin, 
 // getall 
} from '../controllers/authController';
//import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware';
import { generateToken } from '../utils/generateToken';





const router = express.Router();


// Local Auth
router.post('/login', login);
router.post('/register', register);

// Email Verification
router.get('/verifyEmail', verifyEmail);

// Password Reset
//router.post('/forgot-password', forgotPassword);
//router.post('/reset-password/:token', resetPassword);





// Social Auth Callback
const socialAuthCallback = async (req: Request, res: Response): Promise<any> => {
  try {
    if (!req.user) {
      console.error('No user found in social auth callback');
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = generateToken((req.user as any)._id); // Type assertion for user ID
    res.redirect(`${process.env.FRONTEND_URL}/SocialAuthHandler?token=${token}`);
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
router.get('/linkedin/callback',passport.authenticate('linkedin', {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/loginuser`,
  }),socialAuthCallback);

export default router;

