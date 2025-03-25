import express from 'express';
import { getTopSkillsPercentage , getJobPostCountByDepartment , getJobPostCountByStatus } from '../controllers/SkillController';

const router = express.Router();

/**
 * @swagger
 * /api/skills/top-skills:
 *   get:
 *     tags: [Skills]
 *     summary: Get top skills percentage
 *     description: Get the top 4 skills with their percentage distribution among all skills
 *     responses:
 *       200:
 *         description: Top skills retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Name of the skill
 *                   count:
 *                     type: number
 *                     description: Number of occurrences of the skill
 *                   percentage:
 *                     type: string
 *                     description: Percentage of this skill among all skills
 *       404:
 *         description: No skills found
 *       500:
 *         description: Internal server error
 */
router.get('/top-skills',getTopSkillsPercentage);

/**
 * @swagger
 * /api/skills/count:
 *   get:
 *     tags: [Skills]
 *     summary: Get job post count by department
 *     description: Get count of job posts grouped by department
 *     responses:
 *       200:
 *         description: Job post counts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 countsByDepartment:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: Department name
 *                       total:
 *                         type: number
 *                         description: Number of job posts in this department
 *                 totalJobPosts:
 *                   type: number
 *                   description: Total number of job posts
 *       500:
 *         description: Internal server error
 */
router.get('/count', getJobPostCountByDepartment);

/**
 * @swagger
 * /api/skills/count/status:
 *   get:
 *     tags: [Skills]
 *     summary: Get job post count by status
 *     description: Get count of job posts grouped by their status (open, closed, draft)
 *     responses:
 *       200:
 *         description: Job post counts by status retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 countsByStatus:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: Job post status (OPEN, CLOSED, DRAFT)
 *                       total:
 *                         type: number
 *                         description: Number of job posts with this status
 *                 totalJobPosts:
 *                   type: number
 *                   description: Total number of job posts
 *       500:
 *         description: Internal server error
 */
router.get('/count/status', getJobPostCountByStatus);

export default router;