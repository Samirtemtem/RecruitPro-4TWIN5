import { Request, Response } from 'express';
import JobAlert from '../models/JobAlert';
import { User } from '../models/User';
import JobPost from '../models/JobPost';
import Notification from '../models/Notification';
import axios from 'axios';
import { NotificationType } from '../models/types';

// Environment variables for the recommendation service
const RECOMMENDATION_SERVICE_URL = process.env.RECOMMENDATION_SERVICE_URL;

/**
 * Create a new job alert for a user based on recommendations
 */
export const createJobAlert = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const { userId, jobId, criteria, notifyVia } = req.body;

    // Validate input
    if (!userId || !jobId) {
      return res.status(400).json({ error: 'userId and jobId are required' });
    }

    // Check if user and job exist
    const user = await User.findById(userId);
    const job = await JobPost.findById(jobId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!job) {
      return res.status(404).json({ error: 'Job post not found' });
    }

    // Check if alert already exists
    const existingAlert = await JobAlert.findOne({ userId, jobId });
    if (existingAlert) {
      return res.status(400).json({ error: 'Alert already exists for this job' });
    }

    // Create new alert
    const jobAlert = new JobAlert({
      userId,
      jobId,
      criteria: criteria || `${job.title} - ${job.department || 'General'}`,
      notifyVia: notifyVia || ['web'],
      relevanceScore: 0 // Will be updated when recommendations are refreshed
    });

    await jobAlert.save();

    // Create notification for this alert
    const notification = new Notification({
      text: `New job alert created for: ${job.title}`,
      type: NotificationType.RECOMMENDATION,
      link: `/job-single-v3/${jobId}`
    });

    await notification.save();

    return res.status(201).json({
      message: 'Job alert created successfully',
      alert: jobAlert
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to create job alert',
      message: error.message
    });
  }
};

/**
 * Get all job alerts for a user
 */
export const getUserJobAlerts = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: 'userId parameter is required' });
    }

    const allAlerts = await JobAlert.find();
    console.log ('all alerts : '+JSON.stringify(allAlerts));
// Modify the controller to try a simpler query first
    const rawAlerts = await JobAlert.find({ userId: userId.toString() }).lean();
    console.log(`Raw alerts (without filters or population): ${JSON.stringify(rawAlerts)}`);

// Then try with isActive filter but without population
    const activeAlerts = await JobAlert.find({ userId: userId.toString(), isActive: true }).lean();
    console.log(`Active alerts (without population): ${JSON.stringify(activeAlerts)}`);

// Finally the full query with population
    const alerts = await JobAlert.find({ userId: userId.toString(), isActive: true })
        .populate('jobId')
        .sort({ createdAt: -1 });
    // Get all alerts for user
  
    return res.json({
      userId,
      alerts,
      count: alerts.length
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to fetch job alerts',
      message: error.message
    });
  }
};

/**
 * Delete a job alert
 */
export const deleteJobAlert = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const { alertId } = req.params;

    if (!alertId) {
      return res.status(400).json({ error: 'alertId parameter is required' });
    }

    const alert = await JobAlert.findById(alertId);

    if (!alert) {
      return res.status(404).json({ error: 'Alert not found' });
    }

    // Delete the alert
    await JobAlert.findByIdAndDelete(alertId);

    return res.json({
      message: 'Job alert deleted successfully',
      alertId
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to delete job alert',
      message: error.message
    });
  }
};

/**
 * Mark job alert as read
 */
export const markAlertAsRead = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const { alertId } = req.params;

    if (!alertId) {
      return res.status(400).json({ error: 'alertId parameter is required' });
    }

    const alert = await JobAlert.findById(alertId);

    if (!alert) {
      return res.status(404).json({ error: 'Alert not found' });
    }

    // Mark as read
    alert.isRead = true;
    await alert.save();

    return res.json({
      message: 'Job alert marked as read',
      alert
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to mark alert as read',
      message: error.message
    });
  }
};

/**
 * Update job alerts from recommendations
 * This will be called periodically or when new recommendations are generated
 */
export const updateAlertsFromRecommendations = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: 'userId parameter is required' });
    }

    // Get current recommendations from the recommendation service
    try {
      const response = await axios.get(
        `${RECOMMENDATION_SERVICE_URL}/api/recommendations/jobs?candidateId=${userId}`,
        { timeout: 5000 }
      );

      const recommendations = response.data.recommendations || [];

      // Process each recommendation
      for (const recommendation of recommendations) {
        const jobId = recommendation.jobId;
        const relevanceScore = recommendation.similarity || 0;

        // Check if we already have an alert for this job
        const existingAlert = await JobAlert.findOne({ userId, jobId });

        if (existingAlert) {
          // Update the relevance score
          existingAlert.relevanceScore = relevanceScore;
          await existingAlert.save();
        } else if (relevanceScore > 0.7) { // Only create alerts for highly relevant jobs
          // Create a new alert
          const job = await JobPost.findById(jobId);
          
          if (job) {
            const newAlert = new JobAlert({
              userId,
              jobId,
              criteria: `Recommended: ${job.title}`,
              relevanceScore
            });
            
            await newAlert.save();

            // Create notification
            const notification = new Notification({
              text: `New job recommendation: ${job.title} (${Math.round(relevanceScore * 100)}% match)`,
              type: NotificationType.RECOMMENDATION,
              link: `/job-single-v3/${jobId}`
            });

            await notification.save();
          }
        }
      }

      return res.json({
        message: 'Job alerts updated from recommendations',
        count: recommendations.length
      });

    } catch (error: any) {
      return res.status(500).json({
        error: 'Failed to fetch recommendations',
        message: error.message
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to update alerts from recommendations',
      message: error.message
    });
  }
};

/**
 * Sync alerts from MongoDB to ensure proper data representation
 * Used when alerts are created directly in MongoDB by Python system
 */
export const syncMongoDBAlerts = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    // A small delay to ensure MongoDB operations complete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const { userId } = req.params;
    
    if (!userId) {
      return res.status(400).json({ error: 'userId parameter is required' });
    }
    
    // Get all alerts for this user that might have been created by Python system
    const alerts = await JobAlert.find({ userId, isActive: true });
    
    // Check each alert and ensure proper references
    for (const alert of alerts) {
      // Verify that job exists
      const job = await JobPost.findById(alert.jobId);
      
      if (!job) {
        // If job doesn't exist, mark alert as inactive
        alert.isActive = false;
        await alert.save();
        continue;
      }
      
      // Ensure notification exists for this alert
      const notificationExists = await Notification.findOne({
        text: { $regex: job.title },
        type: NotificationType.RECOMMENDATION
      });
      
      if (!notificationExists) {
        // Create a notification if one doesn't exist
        const notification = new Notification({
          text: `New job recommendation: ${job.title} (${Math.round(alert.relevanceScore * 100)}% match)`,
          type: NotificationType.RECOMMENDATION,
          link: `/job-single-v3/${alert.jobId}`
        });
        
        await notification.save();
      }
    }
    
    return res.json({
      message: 'MongoDB alerts synchronized successfully',
      count: alerts.length
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to synchronize alerts',
      message: error.message
    });
  }
}; 