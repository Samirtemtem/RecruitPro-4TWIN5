import express, { Request, Response } from 'express';
import Application from '../models/Application'; // Assuming the schema is in applicationModel.ts
import JobAlert from '../models/JobAlert';
import Interview from '../models/Interview';
import ShortlistedJob from '../models/ShortlistedJob';
import mongoose from 'mongoose';

const router = express.Router();

// Route to get total number of applications for a specific candidate
router.get('/candidate/:candidateId/count', async (req: Request, res: Response): Promise<void> => {
  try {
    const candidateId = req.params.candidateId;

    // Validate candidateId format
    if (!candidateId.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: 'Invalid candidate ID format' });
      return;
    }

    // Count applications for the candidate
    const applicationCount = await Application.countDocuments({ candidate: candidateId });

    res.status(200).json({
      candidateId,
      totalApplications: applicationCount
    });
  } catch (error) {
    console.error('Error fetching application count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get number of applications per year for a specific candidate
router.get('/candidate/:candidateId/applications-per-year', async (req: Request, res: Response): Promise<void> => {
  try {
    const candidateId = req.params.candidateId;

    // Validate candidateId format
    if (!candidateId.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: 'Invalid candidate ID format' });
      return;
    }

    // Aggregate applications by year
    const applicationsPerYear = await Application.aggregate([
      { $match: { candidate: new mongoose.Types.ObjectId(candidateId) } },
      {
        $group: {
          _id: { $year: '$submissionDate' },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }, // Sort by year ascending
      { $project: { year: '$_id', count: 1, _id: 0 } }
    ]);

    res.status(200).json({
      candidateId,
      applicationsPerYear
    });
  } catch (error) {
    console.error('Error fetching applications per year:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get total number of job alerts for a specific user
router.get('/jobalert/:userId/count', async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;

    // Validate userId (assuming it's a string, but you might want to add specific validation)
    if (!userId) {
      res.status(400).json({ error: 'User ID is required' });
      return;
    }

    // Count job alerts for the user
    const jobAlertCount = await JobAlert.countDocuments({ userId });

    res.status(200).json({
      userId,
      totalJobAlerts: jobAlertCount
    });
  } catch (error) {
    console.error('Error fetching job alert count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get total number of interviews for a specific candidate
router.get('/interview/:candidateId/count', async (req: Request, res: Response): Promise<void> => {
  try {
    const candidateId = req.params.candidateId;

    // Validate candidateId format (MongoDB ObjectId)
    if (!candidateId.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: 'Invalid candidate ID format' });
      return;
    }

    // Count interviews for the candidate
    const interviewCount = await Interview.countDocuments({ candidate: candidateId });

    res.status(200).json({
      candidateId,
      totalInterviews: interviewCount
    });
  } catch (error) {
    console.error('Error fetching interview count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/shortlisted/:userId/count', async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;

    // Validate userId (assuming it's a string, but you might want to add specific validation)
    if (!userId) {
      res.status(400).json({ error: 'User ID is required' });
      return;
    }

    // Count shortlisted jobs for the user
    const shortlistedCount = await ShortlistedJob.countDocuments({ user: userId });

    res.status(200).json({
      userId,
      totalShortlistedJobs: shortlistedCount
    });
  } catch (error) {
    console.error('Error fetching shortlisted jobs count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;