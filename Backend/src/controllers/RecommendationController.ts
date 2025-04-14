import { Request, Response } from 'express';
import axios from 'axios';

// Environment variables for the recommendation service
const RECOMMENDATION_SERVICE_URL = process.env.RECOMMENDATION_SERVICE_URL || 'http://localhost:5001';

/**
 * Get job recommendations for a candidate
 */
export const getRecommendations = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    // Get candidateId from query params
    const candidateId = req.query.candidateId;
    
    if (!candidateId) {
      return res.status(400).json({ error: 'candidateId query parameter is required' });
    }
    
    // Forward request to Python recommendation service
    const response = await axios.get(
      `${RECOMMENDATION_SERVICE_URL}/api/recommendations/jobs?candidateId=${candidateId}`,
      { 
        headers: {
          'X-Request-ID': req.headers['x-request-id'] || '',
        },
        timeout: 5000 // 5 second timeout
      }
    );
    
    return res.json(response.data);
  } catch (error: any) {
    return res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch recommendations',
      message: error.response?.data?.message || error.message
    });
  }
};

/**
 * Refresh recommendations for a candidate
 */
export const refreshRecommendations = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    // Get candidateId from request body
    const { candidateId } = req.body;
    
    if (!candidateId) {
      return res.status(400).json({ error: 'candidateId is required in request body' });
    }
    
    // Forward request to Python recommendation service
    const response = await axios.post(
      `${RECOMMENDATION_SERVICE_URL}/api/recommendations/refresh`,
      { candidateId },
      { 
        headers: {
          'Content-Type': 'application/json',
          'X-Request-ID': req.headers['x-request-id'] || ''
        },
        timeout: 10000 // 10 second timeout - refresh may take longer
      }
    );
    
    return res.json(response.data);
  } catch (error: any) {
    return res.status(error.response?.status || 500).json({ 
      error: 'Failed to refresh recommendations',
      message: error.response?.data?.message || error.message
    });
  }
};

/**
 * Track user interaction with recommendations (view, click, apply)
 */
export const trackInteraction = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    // Extract data from request body
    const { candidateId, jobId, type } = req.body;
    
    if (!candidateId || !jobId || !type) {
      return res.status(400).json({ error: 'candidateId, jobId and type are required' });
    }
    
    // Validate interaction type
    if (!['view', 'click', 'apply'].includes(type)) {
      return res.status(400).json({ error: 'type must be one of: view, click, apply' });
    }
    
    // Forward request to Python recommendation service
    const response = await axios.post(
      `${RECOMMENDATION_SERVICE_URL}/api/recommendations/interaction`,
      { candidateId, jobId, interactionType: type },
      { 
        headers: {
          'Content-Type': 'application/json',
          'X-Request-ID': req.headers['x-request-id'] || ''
        }
      }
    );
    
    return res.json(response.data);
  } catch (error: any) {
    return res.status(error.response?.status || 500).json({ 
      error: 'Failed to track interaction',
      message: error.response?.data?.message || error.message
    });
  }
};

/**
 * Get recommendation statistics
 */
export const getRecommendationStats = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    // Forward request to Python recommendation service
    const response = await axios.get(`${RECOMMENDATION_SERVICE_URL}/api/recommendations/stats`, {
      headers: {
        'X-Request-ID': req.headers['x-request-id'] || ''
      }
    });
    
    return res.json(response.data);
  } catch (error: any) {
    return res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch recommendation stats',
      message: error.response?.data?.message || error.message
    });
  }
}; 