import express, { Request, Response } from 'express';
import { 
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getLatestUsers 
} from '../controllers/userController';
import upload from '../utils/Cloudinary'; // Import Cloudinary upload

const router = express.Router();

// CRUD route for creating a user with image upload
router.post('/users', upload.single('image'), createUser);
router.get('/usersList', getAllUsers);
router.get('/usersListLatest', getLatestUsers);
router.get('/users/:id', getUserById);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

// Export the router
export default router;