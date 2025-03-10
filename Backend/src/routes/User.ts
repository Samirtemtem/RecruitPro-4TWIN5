import express, { Request, Response } from 'express';
import { 
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getLatestUsers ,
  getCandidates,
  getLastCandidates,
  getCandidateCountPerYear,
  countEmployeesByDepartment} from '../controllers/userController';
import { upload } from '../utils/cloudinary';
import bodyParser from 'body-parser';


const router = express.Router();

// CRUD route for creating a user with image upload
router.post('/users', upload.single('image'), createUser);
router.get('/usersList', getAllUsers);
router.get('/usersListLatest', getLatestUsers);
router.get('/users/:id', getUserById);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/get/candidates', getCandidates);
router.get('/get/Lastcandidates', getLastCandidates);
router.get('/count-per-year', getCandidateCountPerYear);
// Define the route for counting employees by department
router.get('/count-employees-by-department', countEmployeesByDepartment);


// Export the router
export default router;