const express = require('express');
const JobPost = require('../models/JobPost');

const router = express.Router();

// ✅ CREATE a new job post
router.post('/', async (req, res) => {
    try {
        const job = new JobPost(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ READ all job posts
router.get('/', async (req, res) => {
    try {
        const jobs = await JobPost.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




// ✅ READ latest 5 job posts
router.get('/latest', async (req, res) => {
    try {
        const jobs = await JobPost.find()
            .sort({ createdAt: -1 })  // Sort by createdAt in descending order
            .limit(5);                // Limit to 5 posts
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});





// ✅ READ a single job post by ID
router.get('/:id', async (req, res) => {
    try {
        const job = await JobPost.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ UPDATE a job post by ID
router.put('/:id', async (req, res) => {
    try {
        const job = await JobPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ DELETE a job post by ID
router.delete('/:id', async (req, res) => {
    try {
        const job = await JobPost.findByIdAndDelete(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});












router.get('/job-posts/statistics', async (req, res) => {
    try {
      // Step 1: Get the total number of job posts
      const totalJobPosts = await JobPost.countDocuments();
  
      // Step 2: Get the number of job posts with 'OPEN' status
      const openJobPosts = await JobPost.countDocuments({ status: 'OPEN' });
  
      // Step 3: Calculate job posts created in the last month and the month before
      const currentDate = new Date();
      const lastMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const lastMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0); // Last day of the previous month
  
      const twoMonthsAgoStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
      const twoMonthsAgoEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0); // End of the month before last
  
      // Count job posts created in the last month
      const lastMonthJobPosts = await JobPost.countDocuments({
        publishDate: { $gte: lastMonthStart, $lte: lastMonthEnd }
      });
  
      // Count job posts created two months ago
      const twoMonthsAgoJobPosts = await JobPost.countDocuments({
        publishDate: { $gte: twoMonthsAgoStart, $lte: twoMonthsAgoEnd }
      });
  
      // Step 4: Calculate the percentage change in job posts from two months ago to last month
      const percentageChange = twoMonthsAgoJobPosts > 0
        ? ((lastMonthJobPosts - twoMonthsAgoJobPosts) / twoMonthsAgoJobPosts) * 100
        : 0; // Avoid division by zero
  
      // Returning the statistics
      return res.json({
        totalJobPosts,
        openJobPosts,
        percentageChange
      });
    } catch (error) {
      console.error('Error fetching job post statistics:', error);
      return res.status(500).json({ error: 'Error fetching statistics' });
    }
  });



module.exports = router;
