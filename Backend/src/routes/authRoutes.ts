import express, { Request, Response } from 'express';
import 'dotenv/config';
import passport from 'passport';
import multer from 'multer';
import path from 'path';
import { 
  login,
  register,
  verifyEmail,
  // forgotPassword, 
  // resetPassword, 
  // createAdmin, 
  // getall 
} from '../controllers/authController';
//import { authMiddleware, adminMiddleware } from '../middlewares/authMiddleware';
import { generateToken } from '../utils/generateToken';

const router = express.Router();

// Configure multer for temporary file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../temp')); // Store files temporarily
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.fieldname === 'profileImage') {
    // Allow only images for profile picture
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed for profile picture!'));
    }
  } else if (file.fieldname === 'cv') {
    // Allow PDFs and documents for CV
    const allowedMimes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedMimes.includes(file.mimetype)) {
      return cb(new Error('Only PDF and Word documents are allowed for CV!'));
    }
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Local Auth
router.post('/login', login);
router.post('/register', 
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'cv', maxCount: 1 }
  ]),
  register
);

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
    res.redirect(`${process.env.FRONTEND_URL}/UserHome?token=${token}`);
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

export default router;


