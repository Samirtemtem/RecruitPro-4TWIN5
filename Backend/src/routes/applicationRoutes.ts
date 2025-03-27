import express, { Request, Response } from 'express';
import { User, IUser } from '../models/User'; // Adjust the import based on your file structure
import Application from '../models/Application'; // Adjust the import based on your file structure
import { ApplicationStatus } from '../models/types'; // Adjust the import based on your file structure

const router = express.Router();

// Define the route to handle application submission
router.post('/api/applications', async (req: Request, res: Response): Promise<void> => {
  const { jobPostId, candidateId }: { jobPostId: string; candidateId: string; } = req.body; // Get candidateId from the request body

  try {
    // Fetch user profile to get the CV using candidateId
    const user = await User.findById(candidateId).populate('profile') as IUser & { profile: any }; // Use 'any' for profile

    // Check if user and profile exist, and check for CV
    if (!user || !user.profile || !user.profile.cv) {
      res.status(400).json({ message: 'Profile or CV not found' });
      return; // Ensure the function exits after sending the response
    }

    // Create a new application
    const application = new Application({
      candidate: candidateId,
      jobPost: jobPostId,
      CV: user.profile.cv, // Ensure this is a valid property
      status: ApplicationStatus.SUBMITTED,
    });

    await application.save();
    res.status(201).json(application); // Send the response
  } catch (error: any) { // Use 'any' for error
    console.error('Error submitting application:', error);
    const errorMessage = (error instanceof Error) ? error.message : 'Error submitting application';
    res.status(500).json({ message: errorMessage });
  }
});

export default router;