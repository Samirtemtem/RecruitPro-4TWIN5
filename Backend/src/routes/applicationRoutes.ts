import express, { Request, Response } from 'express';
import { User, IUser } from '../models/User'; // Adjust the import based on your file structure
import Application from '../models/Application'; // Adjust the import based on your file structure
import { ApplicationStatus } from '../models/types'; // Adjust the import based on your file structure
import mongoose, { Types } from 'mongoose'; // Import both mongoose and Types

const router = express.Router();

router.post('/api/applications', async (req: Request, res: Response): Promise<void> => {
  const { jobPostId, candidateId }: { jobPostId: string; candidateId: string; } = req.body;

  try {
    // Fetch user profile to get the CV using candidateId
    const user = await User.findById(candidateId).populate('profile') as IUser & { profile: any };

    if (!user || !user.profile || !user.profile.cv) {
      res.status(400).json({ message: 'Profile or CV not found' });
      return;
    }

    // Create a new application
    const application = new Application({
      candidate: candidateId,
      jobPost: jobPostId,
      CV: user.profile.cv,
      status: ApplicationStatus.SUBMITTED,
    });

    // Save the application and update the user applications in parallel
    await Promise.all([
      application.save(),
      User.updateOne(
        { _id: candidateId },
        {
          $push: { applications: application._id, jobPosts: jobPostId } // Use MongoDB update operators
        }
      )
    ]);

    res.status(201).json(application); // Send the response
  } catch (error: any) {
    console.error('Error submitting application:', error);
    const errorMessage = (error instanceof Error) ? error.message : 'Error submitting application';
    res.status(500).json({ message: errorMessage });
  }
});







router.get('/jobposts/:jobPostId/candidates', async (req: Request, res: Response) : Promise<void> => {
  const { jobPostId } = req.params;

  try {
    const applications = await Application.find({ jobPost: jobPostId })
      .populate('candidate') // Populate the entire candidate object
      .exec();
      res.status(200).json(applications);
    return;  // Return all application details
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
    return;
  }
});




export default router;