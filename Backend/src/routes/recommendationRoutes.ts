import express from 'express';
import { getRecommendations, refreshRecommendations, trackInteraction, getRecommendationStats } from '../controllers/RecommendationController';

const router = express.Router();

// Routes for recommendations
router.get('/jobs', getRecommendations);
router.post('/refresh', refreshRecommendations);
router.post('/interaction', trackInteraction);
router.get('/stats', getRecommendationStats);

export default router;