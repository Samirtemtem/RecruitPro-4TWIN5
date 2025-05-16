import { Router } from 'express';
import { 
    createNeed,
    getNeedById,
    getNeeds,
    updateNeed,
    deleteNeed,
    updateJobPostCreated,
    getNeedsByTeamLead
} from '../controllers/NeedController'; // Updated import to match the new controller name
import mongoose from 'mongoose';
import Need from '../models/Need';

const router = Router();

// Route to create a new need
router.post('/create', createNeed);

// Route to get all needs
router.get('/', getNeeds);

// Route to get a need by ID
router.get('/:id', getNeedById);

// Route to update a need by ID
router.put('/:id', updateNeed);

// Route to delete a need by ID
router.delete('/:id', deleteNeed);

// Route to update jobPostCreated status
router.patch('/:id/jobPostCreated', updateJobPostCreated);


// Route to get needs by teamLead ID
router.get('/needs/teamLead/:teamLeadId', getNeedsByTeamLead);





// Route to update requestCreated status to true
router.patch('/needs/:id/request-created', async (req, res) : Promise<void> =>  {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
       res.status(400).json({ message: 'Invalid Need ID' });
       return;
    }

    // Find and update the Need document
    const updatedNeed = await Need.findByIdAndUpdate(
      id,
      { requestCreated: true },
      { new: true, runValidators: true }
    );

    // Check if Need exists
    if (!updatedNeed) {
       res.status(404).json({ message: 'Need not found' });
       return;
    }

    res.status(200).json({
      message: 'Request created status updated successfully',
      data: updatedNeed
    });
  } catch (error) {
    console.error('Error updating requestCreated status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;