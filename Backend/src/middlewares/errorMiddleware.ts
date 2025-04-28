import { Request, Response, NextFunction } from 'express';

// Error handler middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log the full error stack for debugging

  res.status(500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Server error' // Generic message in production
      : err.message,   // Detailed message in development
  });
};

export default errorHandler;
