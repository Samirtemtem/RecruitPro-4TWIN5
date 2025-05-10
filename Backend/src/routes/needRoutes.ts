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

export default router;