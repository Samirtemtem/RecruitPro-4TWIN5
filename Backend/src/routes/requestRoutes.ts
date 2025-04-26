import { Router } from 'express';
import { 
    createRequest,getRequestById,getRequests,updateRequest,deleteRequest,updateJobPostCreated
} from '../controllers/RequestController';

const router = Router();

// Route pour créer une nouvelle demande
router.post('/create', createRequest);

// Route pour obtenir toutes les demandes
router.get('/', getRequests);

// Route pour obtenir une demande par ID
router.get('/:id', getRequestById);

// Route pour mettre à jour une demande par ID
router.put('/:id', updateRequest);

// Route pour supprimer une demande par ID
router.delete('/:id', deleteRequest);


router.patch('/requests/:id/jobPostCreated', updateJobPostCreated);

export default router;