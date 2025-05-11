import express from 'express';
import { 
  createInterview, 
  getInterviews, 
  getInterviewById, 
  updateInterviewStatus,
  updateInterview
} from '../controllers/interviewController';
import Interview from '../models/Interview';

const router = express.Router();

// Debug middleware to log all requests
router.use((req, res, next) => {
  console.log('Interview route request:', {
    method: req.method,
    url: req.url,
    path: req.path,
    params: req.params,
    query: req.query,
    body: req.method === 'POST' || req.method === 'PATCH' ? JSON.stringify(req.body) : 'Not a POST/PATCH request'
  });
  next();
});

// Create a new interview
router.post('/', createInterview);

// Get interviews by application ID
router.get('/application/:applicationId', async (req, res) => {
  try {
    const { applicationId } = req.params;
    
    console.log('Fetching interviews for application:', applicationId);
    
    const interviews = await Interview.find({ application: applicationId })
      .populate('departmentManager', 'firstName lastName email department')
      .populate('teamLeads', 'firstName lastName email team')
      .populate('candidate', 'firstName lastName email')
      .sort({ scheduledDate: -1 });
    
    res.status(200).json(interviews);
  } catch (error) {
    console.error('Error fetching interviews by application:', error);
    res.status(500).json({ 
      message: 'Error fetching interviews', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
});

// Get interviews by candidate ID
router.get('/candidate/:candidateId', async (req, res) => {
  try {
    const { candidateId } = req.params;
    
    const interviews = await Interview.find({ candidate: candidateId })
      .populate('application')
      .populate('departmentManager', 'firstName lastName email department')
      .populate('teamLeads', 'firstName lastName email team')
      .sort({ scheduledDate: -1 });
    
    res.status(200).json(interviews);
  } catch (error) {
    console.error('Error fetching interviews by candidate:', error);
    res.status(500).json({ 
      message: 'Error fetching interviews', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
});

// Update interview details
router.patch('/:id', updateInterview);

// Update interview status
router.patch('/:id/status', updateInterviewStatus);

// Get a specific interview
router.get('/:id', getInterviewById);

// Get all interviews
router.get('/', getInterviews);

export default router; 