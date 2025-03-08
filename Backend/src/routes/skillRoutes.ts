import express from 'express';
import { getTopSkillsPercentage , getJobPostCountByDepartment , getJobPostCountByStatus } from '../controllers/SkillController';

const router = express.Router();

// Route to get top 4 skills percentage
router.get('/top-skills',getTopSkillsPercentage);
router.get('/count', getJobPostCountByDepartment);
// Route to get job post count by status
router.get('/count/status', getJobPostCountByStatus);
export default router;