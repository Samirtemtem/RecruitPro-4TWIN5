import express, { Request, Response } from 'express';
import { User, IUser } from '../models/User'; // Adjust the import based on your file structure
import Application from '../models/Application'; // Adjust the import based on your file structure
import { ApplicationStatus } from '../models/types'; // Adjust the import based on your file structure
import mongoose, { Types } from 'mongoose'; // Import both mongoose and Types
import JobPost from '../models/JobPost';
import { IApplication } from '../models/Application';


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

    // Check if the candidate has already applied to the job post
    const existingApplication = await Application.findOne({ jobPost: jobPostId, candidate: candidateId });
    if (existingApplication) {
      res.status(400).json({ message: 'You have already applied to this job' });
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

// Get Application by ID
router.get('/applications/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  // Validate the ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid application ID format' });
      return;
  }

  try {
      // Find the application by ID and populate candidate and JobPost
      const application = await Application.findById(id)
          .populate('candidate') // Populate candidate field
          .populate('jobPost'); // Populate JobPost field

      if (!application) {
          res.status(404).json({ message: 'Application not found' });
          return;
      }

      res.status(200).json(application);
      return;
  } catch (error) {
      console.error('Error retrieving application:', error);
      res.status(500).json({ message: 'Server error' });
      return;
  }
});






router.get('/candidates/:candidateId/applications', async (req: Request, res: Response): Promise<void> => {
  const { candidateId } = req.params;

  // Validate the candidate ID format
  if (!mongoose.Types.ObjectId.isValid(candidateId)) {
      res.status(400).json({ message: 'Invalid candidate ID format' });
      return;
  }

  try {
      // Find applications for the specified candidate
      const applications: IApplication[] = await Application.find({ candidate: candidateId })
          .populate('jobPost') // Populate jobPost if needed
   
         

      if (applications.length === 0) {
          res.status(404).json({ message: 'No applications found for this candidate' });
          return;
      }

      res.status(200).json(applications);
  } catch (error) {
      console.error('Error retrieving applications:', error);
      res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/Deleteapplication/:id', async (req: Request, res: Response): Promise<void> => {
  const applicationId = req.params.id;

  try {
      // Check if the application exists
      const application = await Application.findById(applicationId);
      if (!application) {
          res.status(404).json({ message: 'Application not found' });
          return;
      }

      const candidateId = application.candidate; // Assuming candidate is an ObjectId reference

      // Delete the application
      await Application.deleteOne({ _id: applicationId });

      // Find the user by candidate ID
      const user = await User.findById(candidateId);
      if (user) {
          // Remove the JobPost ID from the user's jobPosts array
          user.jobPosts = user.jobPosts.filter(jobPostId => jobPostId.toString() !== application.jobPost.toString());

          // Remove the application ID from the user's applications array
          user.applications = user.applications.filter(appId => appId.toString() !== applicationId);

          await user.save();
      }

      res.status(200).json({ message: 'Application deleted successfully' });
      return;
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
      return;
  }
});



export default router;