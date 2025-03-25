import express, { Request, Response } from 'express';
import { 
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getLatestUsers,
  getCandidates,
  getLastCandidates,
  getCandidateCountPerYear,
  countEmployeesByDepartment
} from '../controllers/userController';
import { upload } from '../utils/cloudinary';
import bodyParser from 'body-parser';


const router = express.Router();

/**
 * @swagger
 * /api/user/users:
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

/**
 * @swagger
 * /api/user/usersList:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.get('/usersList', getAllUsers);

/**
 * @swagger
 * /api/user/usersListLatest:
 *   get:
 *     tags: [Users]
 *     summary: Get latest users
 *     description: Retrieve the 5 most recently added users
 *     responses:
 *       200:
 *         description: A list of the 5 most recent users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.get('/usersListLatest', getLatestUsers);

/**
 * @swagger
 * /api/users/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by ID
 *     description: Retrieve a specific user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get('/users/:id', getUserById);

/**
 * @swagger
 * /api/user/update/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update user
 *     description: Update an existing user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.put('/update/:id', updateUser);

/**
 * @swagger
 * /api/user/delete/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete user
 *     description: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.delete('/delete/:id', deleteUser);

/**
 * @swagger
 * /api/user/get/candidates:
 *   get:
 *     tags: [Users]
 *     summary: Get all candidates
 *     description: Retrieve a list of all users with the CANDIDATE role
 *     responses:
 *       200:
 *         description: A list of candidates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.get('/get/candidates', getCandidates);

/**
 * @swagger
 * /api/user/get/Lastcandidates:
 *   get:
 *     tags: [Users]
 *     summary: Get latest candidates
 *     description: Retrieve the 5 most recently added candidates
 *     responses:
 *       200:
 *         description: A list of the 5 most recent candidates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.get('/get/Lastcandidates', getLastCandidates);

/**
 * @swagger
 * /api/user/count-per-year:
 *   get:
 *     tags: [Users]
 *     summary: Get candidate count per year
 *     description: Retrieve counts of candidates registered per year with percentage change
 *     responses:
 *       200:
 *         description: Candidate counts per year
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 counts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: integer
 *                         description: Year
 *                       count:
 *                         type: integer
 *                         description: Number of candidates registered in this year
 *                 lastYearCount:
 *                   type: integer
 *                   description: Number of candidates registered in the current year
 *                 yearBeforeLastCount:
 *                   type: integer
 *                   description: Number of candidates registered in the previous year
 *                 percentageChangeLastToYearBeforeLast:
 *                   type: string
 *                   description: Percentage change between current and previous year
 *                 percentageChangeYearBeforeLastToLast:
 *                   type: string
 *                   description: Percentage change between previous year and the year before
 *       500:
 *         description: Server error
 */
router.get('/count-per-year', getCandidateCountPerYear);

/**
 * @swagger
 * /api/user/count-employees-by-department:
 *   get:
 *     tags: [Users]
 *     summary: Count employees by department
 *     description: Retrieve count of employees grouped by department with year-over-year change
 *     responses:
 *       200:
 *         description: Employee counts by department
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalEmployees:
 *                   type: integer
 *                   description: Total number of employees
 *                 percentageChange:
 *                   type: number
 *                   description: Percentage change in employees compared to last year
 *                 departmentCounts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       department:
 *                         type: string
 *                         description: Department name
 *                       count:
 *                         type: integer
 *                         description: Number of employees in this department
 *       500:
 *         description: Server error
 */
router.get('/count-employees-by-department', countEmployeesByDepartment);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - phoneNumber
 *         - role
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         firstName:
 *           type: string
 *           description: User's first name
 *         lastName:
 *           type: string
 *           description: User's last name
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *         phoneNumber:
 *           type: string
 *           description: User's phone number
 *         address:
 *           type: string
 *           description: User's address
 *         role:
 *           type: string
 *           enum: [CANDIDATE, RECRUITER, ADMIN]
 *           description: User's role
 *         department:
 *           type: string
 *           description: User's department
 *         privilege:
 *           type: string
 *           description: User's privilege level
 *         image:
 *           type: string
 *           description: URL to user's profile image
 *         isVerified:
 *           type: boolean
 *           description: Whether user's email is verified
 *         createDate:
 *           type: string
 *           format: date-time
 *           description: Date the user was created
 *         lastLogin:
 *           type: string
 *           format: date-time
 *           description: Date of user's last login
 */

export default router;