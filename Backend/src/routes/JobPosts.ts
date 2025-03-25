import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import JobPost from '../models/JobPost';
dotenv.config();

const router = express.Router();

/**
 * @swagger
 * /api/jobs:
 *   post:
 *     tags: [Job Posts]
 *     summary: Create a new job posting
 *     description: Create a new job posting with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - location
 *               - status
 *             properties:
 *               title:
 *                 type: string
 *                 description: Job title
 *               description:
 *                 type: string
 *                 description: Detailed job description
 *               location:
 *                 type: string
 *                 description: Job location
 *               department:
 *                 type: string
 *                 description: Department the job belongs to
 *               salary:
 *                 type: number
 *                 description: Job salary
 *               requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Job requirements
 *               publishDate:
 *                 type: string
 *                 format: date
 *                 description: Date the job post is published
 *               status:
 *                 type: string
 *                 enum: [OPEN, CLOSED, DRAFT]
 *                 description: Status of the job post
 *     responses:
 *       201:
 *         description: Job post created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const job = new JobPost(req.body);
        await job.save();

        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     tags: [Job Posts]
 *     summary: Get all job posts
 *     description: Retrieve a list of all job posts
 *     responses:
 *       200:
 *         description: A list of job posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/JobPost'
 *       500:
 *         description: Server error
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }

});

/**
 * @swagger
 * /api/jobs/latest:
 *   get:
 *     tags: [Job Posts]
 *     summary: Get latest job posts
 *     description: Retrieve the 5 most recent job posts
 *     responses:
 *       200:
 *         description: A list of the 5 most recent job posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/JobPost'
 *       500:
 *         description: Server error
 */
router.get('/latest', async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await JobPost.find()
            .sort({ createdAt: -1 })  
            .limit(5);                
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

/**
 * @swagger
 * /api/jobs/{id}:
 *   get:
 *     tags: [Job Posts]
 *     summary: Get job post by ID
 *     description: Retrieve a specific job post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the job post
 *     responses:
 *       200:
 *         description: Job post details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JobPost'
 *       404:
 *         description: Job not found
 *       500:
 *         description: Server error
 */
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const job = await JobPost.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

/**
 * @swagger
 * /api/jobs/{id}:
 *   put:
 *     tags: [Job Posts]
 *     summary: Update job post
 *     description: Update an existing job post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the job post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Job title
 *               description:
 *                 type: string
 *                 description: Detailed job description
 *               location:
 *                 type: string
 *                 description: Job location
 *               department:
 *                 type: string
 *                 description: Department the job belongs to
 *               salary:
 *                 type: number
 *                 description: Job salary
 *               requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Job requirements
 *               publishDate:
 *                 type: string
 *                 format: date
 *                 description: Date the job post is published
 *               status:
 *                 type: string
 *                 enum: [OPEN, CLOSED, DRAFT]
 *                 description: Status of the job post
 *     responses:
 *       200:
 *         description: Job post updated successfully
 *       404:
 *         description: Job not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put('/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const job = await JobPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

/**
 * @swagger
 * /api/jobs/{id}:
 *   delete:
 *     tags: [Job Posts]
 *     summary: Delete job post
 *     description: Delete a job post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the job post to delete
 *     responses:
 *       200:
 *         description: Job post deleted successfully
 *       404:
 *         description: Job not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', async (req: Request, res: Response): Promise<any> => {
    try {
        const job = await JobPost.findByIdAndDelete(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

/**
 * @swagger
 * /api/jobs/job-posts/statistics:
 *   get:
 *     tags: [Job Posts]
 *     summary: Get job post statistics
 *     description: Retrieve statistics about job posts including total count, open posts, and month-to-month change
 *     responses:
 *       200:
 *         description: Job post statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalJobPosts:
 *                   type: number
 *                   description: Total number of job posts
 *                 openJobPosts:
 *                   type: number
 *                   description: Number of open job posts
 *                 percentageChange:
 *                   type: number
 *                   description: Percentage change in job posts compared to the previous month
 *       500:
 *         description: Error fetching statistics
 */
router.get('/job-posts/statistics', async (req: Request, res: Response): Promise<any> => {
    try {
      const totalJobPosts = await JobPost.countDocuments();
      const openJobPosts = await JobPost.countDocuments({ status: 'OPEN' });

      const currentDate = new Date();
      const lastMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const lastMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

      const twoMonthsAgoStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
      const twoMonthsAgoEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);

      const lastMonthJobPosts = await JobPost.countDocuments({
          publishDate: { $gte: lastMonthStart, $lte: lastMonthEnd }
      });

      const twoMonthsAgoJobPosts = await JobPost.countDocuments({
          publishDate: { $gte: twoMonthsAgoStart, $lte: twoMonthsAgoEnd }
      });

      const percentageChange = twoMonthsAgoJobPosts > 0
          ? ((lastMonthJobPosts - twoMonthsAgoJobPosts) / twoMonthsAgoJobPosts) * 100
          : 0;

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

/**
 * @swagger
 * components:
 *   schemas:
 *     JobPost:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - location
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the job post
 *         title:
 *           type: string
 *           description: Job title
 *         description:
 *           type: string
 *           description: Detailed job description
 *         location:
 *           type: string
 *           description: Job location
 *         department:
 *           type: string
 *           description: Department the job belongs to
 *         salary:
 *           type: number
 *           description: Job salary
 *         requirements:
 *           type: array
 *           items:
 *             type: string
 *           description: Job requirements
 *         publishDate:
 *           type: string
 *           format: date
 *           description: Date the job post is published
 *         status:
 *           type: string
 *           enum: [OPEN, CLOSED, DRAFT]
 *           description: Status of the job post
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the job post was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the job post was last updated
 */

export default router;