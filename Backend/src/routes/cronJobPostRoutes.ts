import mongoose from 'mongoose';
import cron from 'node-cron';
import JobPost, { IJobPost } from '../models/JobPost'; // Adjust the path to your JobPost model

// Function to update job posts' status to CLOSED if deadline has passed
const updateJobPostStatus = async () => {
  try {
    const currentDate = new Date();
    
    // Find all job posts that are not CLOSED and have a deadline before the current date
    const jobsToClose = await JobPost.find({
      status: { $ne: 'CLOSED' },
      deadline: { $lte: currentDate },
    });

    if (jobsToClose.length === 0) {
      console.log('No job posts to close.');
      return;
    }

    // Update status to CLOSED for each job post
    const updatePromises = jobsToClose.map(async (job: IJobPost) => {
      job.status = 'CLOSED';
      await job.save();
      console.log(`Job post "${job.title}" status updated to CLOSED.`);
    });

    await Promise.all(updatePromises);
    console.log('Job post status update completed.');
  } catch (error) {
    console.error('Error updating job post statuses:', error);
  }
};

// Schedule the cron job to run every day at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running job post status update cron job...');
  await updateJobPostStatus();
});

// Optional: Run immediately when the server starts (for testing or initial run)
export const initCronJobs = async () => {
  console.log('Initializing cron jobs...');
  await updateJobPostStatus();
};