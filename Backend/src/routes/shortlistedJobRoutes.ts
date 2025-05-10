import express, { Request, Response } from "express";
import ShortlistedJob from "../models/ShortlistedJob";
import JobPost from "../models/JobPost";
import mongoose from "mongoose";

const router = express.Router();

// Add a job to shortlist
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, jobId } = req.body;

    if (!userId || !jobId) {
      res.status(400).json({ error: "userId and jobId are required" });
      return;
    }

    // Check if job post exists
    const jobExists = await JobPost.findById(jobId);
    if (!jobExists) {
      res.status(404).json({ error: "Job post not found" });
      return;
    }

    // Create or update shortlisted job
    const shortlistedJob = await ShortlistedJob.findOneAndUpdate(
      { user: userId, jobPost: jobId },
      { user: userId, jobPost: jobId },
      { new: true, upsert: true }
    );

    res.status(201).json(shortlistedJob);
  } catch (error) {
    console.error("Error shortlisting job:", error);
    if ((error as any).code === 11000) {
      // Duplicate key error (job already shortlisted)
      res.status(409).json({ error: "Job already shortlisted" });
    } else {
      res.status(500).json({ error: (error as Error).message });
    }
  }
});

// Get all shortlisted jobs for a user
router.get(
  "/user/:userId",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.params.userId;

      const shortlistedJobs = await ShortlistedJob.find({ user: userId })
        .populate("jobPost")
        .sort({ createdAt: -1 });

      res.json(shortlistedJobs);
    } catch (error) {
      console.error("Error fetching shortlisted jobs:", error);
      res.status(500).json({ error: (error as Error).message });
    }
  }
);

// Check if a job is shortlisted by a user
router.get("/check", async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, jobId } = req.query;

    if (!userId || !jobId) {
      res.status(400).json({ error: "userId and jobId are required" });
      return;
    }

    const shortlistedJob = await ShortlistedJob.findOne({
      user: userId as string,
      jobPost: jobId as string,
    });

    res.json({ isShortlisted: !!shortlistedJob });
  } catch (error) {
    console.error("Error checking shortlisted job:", error);
    res.status(500).json({ error: (error as Error).message });
  }
});

// Remove a job from shortlist
router.delete(
  "/:userId/:jobId",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId, jobId } = req.params;

      const result = await ShortlistedJob.findOneAndDelete({
        user: userId,
        jobPost: jobId,
      });

      if (!result) {
        res.status(404).json({ error: "Shortlisted job not found" });
        return;
      }

      res.json({ message: "Job removed from shortlist" });
    } catch (error) {
      console.error("Error removing shortlisted job:", error);
      res.status(500).json({ error: (error as Error).message });
    }
  }
);

export default router;
