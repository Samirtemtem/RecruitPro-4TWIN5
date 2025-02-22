import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
//import User, { IUser } from '../models/User';
import { User } from '../models/User';

/*
// Middleware for authenticating users
export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) {
      return res.status(401).json({ error: 'Authorization token required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    req.user = await User.findById(decoded.userId);

    if (!req.user) {
      return res.status(401).json({ error: 'User not found' });
    }

    next();
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Middleware for checking admin privileges
export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({
        error: 'Admin privileges required',
        requiredRole: 'admin',
        currentRole: req.user?.role || 'none',
      });
    }
    next();
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Middleware for checking email verification
export const emailVerifiedMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user?.isVerified) {
      return res.status(403).json({ error: 'Email verification required' });
    }
    next();
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Middleware for role-based access control
export const roleMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.user?.role !== requiredRole) {
        return res.status(403).json({
          error: `Role ${requiredRole} privileges required`,
          currentRole: req.user?.role || 'none',
        });
      }
      next();
    } catch (error) {
      console.error(error); // Log error for debugging
      res.status(401).json({ error: 'Invalid or expired token' });
    }
  };
};
*/