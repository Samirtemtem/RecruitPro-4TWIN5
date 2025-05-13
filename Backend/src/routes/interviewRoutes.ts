import express from 'express';
import { 
  createInterview, 
  getInterviews, 
  getInterviewById, 
  updateInterviewStatus,
  updateInterview
} from '../controllers/interviewController';
import Interview, { IInterview } from '../models/Interview';

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

// Get all interviews for HR manager
router.get('/hrmanager', async (req, res) => {
  try {
    // HR Managers need to see all interviews across the organization
    const interviews = await Interview.find({})
      .populate('application', 'jobTitle company')
      .populate('departmentManager', 'firstName lastName email department')
      .populate('teamLeads', 'firstName lastName email team')
      .populate('candidate', 'firstName lastName email')
      .sort({ scheduledDate: -1 });
    
    // Format response
    const formattedInterviews = interviews.map(interview => ({
      id: interview._id,
      application: interview.application,
      departmentManager: interview.departmentManager,
      teamLeads: interview.teamLeads,
      candidate: interview.candidate,
      type: interview.type,
      status: interview.status,
      scheduledDate: interview.scheduledDate,
      scheduledTime: interview.scheduledTime,
      duration: interview.duration,
      location: interview.location,
      meetUrl: interview.meetUrl,
      googleCalendarEventId: interview.googleCalendarEventId,
      notes: interview.notes,
      feedback: interview.feedback,
      createdAt: interview.createdAt,
      updatedAt: interview.updatedAt
    }));

    res.status(200).json({
      message: 'Interviews retrieved successfully for HR manager',
      data: formattedInterviews,
      count: formattedInterviews.length
    });
  } catch (error) {
    console.error('Error fetching interviews for HR manager:', error);
    res.status(500).json({ 
      message: 'Server error while fetching interviews', 
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


router.get('/teamLeader/:teamLeaderId', async (req, res) : Promise<void> => {
  try {
    const { teamLeaderId } = req.params;

    // Validate teamLeaderId format (assuming it's a MongoDB ObjectId)
    if (!teamLeaderId.match(/^[0-9a-fA-F]{24}$/)) {
       res.status(400).json({ message: 'Invalid team leader ID format' });
       return;
    }

    // Fetch interviews where teamLeaderId is in the teamLeads array
    const interviews: IInterview[] = await Interview.find({ teamLeads: teamLeaderId })
      .populate('application', 'jobTitle company') // Populate relevant application fields
      .populate('departmentManager', 'name email') // Populate manager details
      .populate('teamLeads', 'name email') // Populate team leads details
      .populate('candidate', 'name email') // Populate candidate details
      
      .select('-__v') // Exclude version key
      .lean(); // Convert to plain JavaScript objects

    if (!interviews.length) {
       res.status(404).json({ message: 'No interviews found for this team leader' });
       return;
    }

    // Format response
    const formattedInterviews = interviews.map(interview => ({
      id: interview._id,
      application: interview.application,
      departmentManager: interview.departmentManager,
      teamLeads: interview.teamLeads,
      candidate: interview.candidate,
      type: interview.type,
      status: interview.status,
      scheduledDate: interview.scheduledDate,
      scheduledTime: interview.scheduledTime,
      duration: interview.duration,
      location: interview.location,
      meetUrl: interview.meetUrl,
      googleCalendarEventId: interview.googleCalendarEventId,
      notes: interview.notes,
      feedback: interview.feedback,
      createdAt: interview.createdAt,
      updatedAt: interview.updatedAt
    }));

    res.status(200).json({
      message: 'Interviews retrieved successfully',
      data: formattedInterviews,
      count: formattedInterviews.length
    });
  } catch (error) {
    console.error('Error fetching interviews:', error);
    res.status(500).json({ message: 'Server error while fetching interviews' });
  }
});

export default router; 