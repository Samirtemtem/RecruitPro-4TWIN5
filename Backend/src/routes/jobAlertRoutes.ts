import express from 'express';
import { 
  createJobAlert, 
  getUserJobAlerts, 
  deleteJobAlert, 
  markAlertAsRead,
  updateAlertsFromRecommendations,
  syncMongoDBAlerts
} from '../controllers/JobAlertController';

const router = express.Router();

// Create a new job alert
router.post('/', createJobAlert);

// Get all job alerts for a user
router.get('/user/:userId', getUserJobAlerts);

// Delete a job alert
router.delete('/:alertId', deleteJobAlert);

// Mark a job alert as read
router.patch('/:alertId/read', markAlertAsRead);

// Update alerts from recommendations
router.post('/user/:userId/update-from-recommendations', updateAlertsFromRecommendations);

// Sync alerts created directly in MongoDB by Python system
router.post('/user/:userId/sync-mongodb', syncMongoDBAlerts);

export default router; 