import { Request, Response } from 'express';
import mongoose from 'mongoose';
import axios from 'axios';

// MongoDB connection (ensure this is imported and configured in your app)
const JobRecommendation = mongoose.model('jobRecommendations', new mongoose.Schema({
  userId: String,
  algorithm: {
    version: String,
    weights: {
      skills: Number,
      experience: Number,
      education: Number
    }
  },
  recommendations: [{
    jobId: String,
    jobTitle: String,
    similarity: Number,
    skillScore: Number,
    experienceScore: Number,
    educationScore: Number,
    exactSkillMatches: [String],
    semanticSkillMatches: [Object],
    semanticEducationMatches: [Object],
    semanticExperienceMatches: [Object],
    experienceMatches: [String],
    educationMatches: [String],
    interacted: Boolean,
    applied: Boolean,
    lastViewed: Date,
    jobLanguage: String,
    candidateLanguage: String,
    originalJobText: String,
    originalExperienceText: String,
    originalJobSkills: [String],
    originalCandidateSkills: [String]
  }],
  timestamp: Date
}),"jobRecommendations");

/**
 * Get job recommendations for a candidate
 */
export const getRecommendations = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    // Get candidateId from query params and optional jobId for single job match
    const candidateId = req.query.candidateId as string;
    const jobId = req.query.jobId as string | undefined;
    
    if (!candidateId) {
      return res.status(400).json({ error: 'candidateId query parameter is required' });
    }
    
    // Find recommendations for this candidate in MongoDB
    const recommendationData = await JobRecommendation.findOne({ userId: candidateId });
    
    if (!recommendationData) {
      return res.status(404).json({ 
        error: 'No recommendations found',
        message: 'No recommendations available for this candidate'
      });
    }

    // If jobId is provided, return only data for that specific job
    if (jobId) {
      const jobMatch = recommendationData.recommendations.find(rec => rec.jobId === jobId);
      
      if (!jobMatch) {
        return res.status(404).json({
          error: 'Job match not found',
          message: 'No match data found for this specific job'
        });
      }
      
      // Format response for a single job match
      const matchData = {
        matchPercentage: Math.round((jobMatch.similarity || 0) * 100),
        matchingSkills: [...(jobMatch.exactSkillMatches || []), ...(jobMatch.experienceMatches || [])],
        totalSkills: (jobMatch.originalJobSkills || []).length,
        skillsToImprove: (jobMatch.originalJobSkills || []).filter(skill => 
          !jobMatch.exactSkillMatches?.includes(skill) && 
          !jobMatch.experienceMatches?.includes(skill)
        ),
        jobDetails: {
          jobId: jobMatch.jobId,
          jobTitle: jobMatch.jobTitle,
          originalJobSkills: jobMatch.originalJobSkills || []
        },
        scores: {
          overall: jobMatch.similarity || 0,
          skills: jobMatch.skillScore || 0,
          experience: jobMatch.experienceScore || 0,
          education: jobMatch.educationScore || 0
        }
      };
      
      return res.json({ matchData });
    }
    
    // Format response for all job recommendations
    const formattedRecommendations = recommendationData.recommendations.map(rec => ({
      jobId: rec.jobId,
      jobTitle: rec.jobTitle,
      matchPercentage: Math.round((rec.similarity || 0) * 100),
      matchingSkillsCount: (rec.exactSkillMatches?.length || 0) + (rec.experienceMatches?.length || 0),
      totalSkillsCount: rec.originalJobSkills?.length || 0,
      interacted: rec.interacted || false,
      applied: rec.applied || false,
      lastViewed: rec.lastViewed
    }));
    
    return res.json({
      recommendations: formattedRecommendations,
      timestamp: recommendationData.timestamp
    });
  } catch (error: any) {
    console.error('Error fetching recommendations:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch recommendations',
      message: error.message
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
    
    // Find and update the timestamp for recommendations
    const result = await JobRecommendation.findOneAndUpdate(
      { userId: candidateId },
      { $set: { timestamp: new Date() } },
      { new: true }
    );
    
    if (!result) {
      return res.status(404).json({ 
        error: 'No recommendations found',
        message: 'No recommendations available to refresh for this candidate'
      });
    }
    
    return res.json({
      message: 'Recommendations refreshed successfully',
      timestamp: result.timestamp
    });
  } catch (error: any) {
    console.error('Error refreshing recommendations:', error);
    return res.status(500).json({ 
      error: 'Failed to refresh recommendations',
      message: error.message
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
    
    // Update the recommendation document based on interaction type
    const updateData: any = {
      'recommendations.$.interacted': true,
      'recommendations.$.lastViewed': new Date()
    };
    
    // If applied, mark as applied
    if (type === 'apply') {
      updateData['recommendations.$.applied'] = true;
    }
    
    // Update the recommendation in MongoDB
    const result = await JobRecommendation.findOneAndUpdate(
      { 
        userId: candidateId,
        'recommendations.jobId': jobId 
      },
      { $set: updateData },
      { new: true }
    );
    
    if (!result) {
      return res.status(404).json({ 
        error: 'Recommendation not found',
        message: 'Could not find the recommendation to update'
      });
    }
    
    return res.json({
      message: `Interaction of type ${type} tracked successfully`,
      jobId,
      candidateId
    });
  } catch (error: any) {
    console.error('Error tracking interaction:', error);
    return res.status(500).json({ 
      error: 'Failed to track interaction',
      message: error.message
    });
  }
};

/**
 * Get recommendation statistics
 */
export const getRecommendationStats = async (req: Request, res: Response): Promise<Response | any> => {
  try {
    // Get overall statistics from MongoDB
    const totalUsers = await JobRecommendation.countDocuments();
    const stats = await JobRecommendation.aggregate([
      {
        $project: {
          recommendationsCount: { $size: "$recommendations" },
          interactedCount: {
            $size: {
              $filter: {
                input: "$recommendations",
                as: "rec",
                cond: { $eq: ["$$rec.interacted", true] }
              }
            }
          },
          appliedCount: {
            $size: {
              $filter: {
                input: "$recommendations",
                as: "rec",
                cond: { $eq: ["$$rec.applied", true] }
              }
            }
          }
        }
      },
      {
        $group: {
          _id: null,
          totalRecommendations: { $sum: "$recommendationsCount" },
          totalInteractions: { $sum: "$interactedCount" },
          totalApplications: { $sum: "$appliedCount" },
          averageRecommendationsPerUser: { $avg: "$recommendationsCount" }
        }
      }
    ]);
    
    return res.json({
      totalUsers,
      stats: stats.length > 0 ? stats[0] : {
        totalRecommendations: 0,
        totalInteractions: 0,
        totalApplications: 0,
        averageRecommendationsPerUser: 0
      }
    });
  } catch (error: any) {
    console.error('Error fetching recommendation stats:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch recommendation stats',
      message: error.message
    });
  }
}; 