// routes/contactRoutes.ts
import express from 'express';
import { sendMessage, getAllMessages, getMessageById, deleteMessage } from '../controllers/contactController';

const router = express.Router();

router.post('/create', sendMessage);
router.get('/contacts', getAllMessages); // Get all messages
router.get('/contact/:id', getMessageById); // Get message by ID
router.delete('/contact/:id', deleteMessage); // Delete message by ID

export default router;