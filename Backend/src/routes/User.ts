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
  countEmployeesByDepartment,
  getUserJobPosts ,
  getCandidateById,
  getUsers
} from '../controllers/userController';
import { upload } from '../utils/cloudinary';
import bodyParser from 'body-parser';


const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     description: Creates a new user with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - phoneNumber
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *               phoneNumber:
 *                 type: string
 *                 description: User's phone number
 *               address:
 *                 type: string
 *                 description: User's address
 *               role:
 *                 type: string
 *                 enum: [CANDIDATE, RECRUITER, ADMIN]
 *                 description: User's role
 *               department:
 *                 type: string
 *                 description: User's department
 *               privilege:
 *                 type: string
 *                 description: User's privilege level
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: User's profile image
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

// CRUD route for creating a user with image upload
router.post('/users', upload.single('image'), createUser);
router.get('/usersList', getAllUsers);
router.get('/usersListLatest', getLatestUsers);
router.get('/users/:id', getUserById);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/get/candidates', getCandidates);
// Route to get a candidate by ID
router.get('/candidates/:id', getCandidateById);
router.get('/get/Lastcandidates', getLastCandidates);
router.get('/count-per-year', getCandidateCountPerYear);
// Define the route for counting employees by department
router.get('/count-employees-by-department', countEmployeesByDepartment);


// Route to get job posts for a specific user
router.get('/api/users/:userId/job-posts', getUserJobPosts);
router.get('/get/getUsers', getUsers);

// Export the router
export default router;