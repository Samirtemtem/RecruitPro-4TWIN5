import 'dotenv/config';

import { Request, Response } from 'express';
import {User} from '../models/User';
import cloudinary from 'cloudinary';
import multer from 'multer';
import { Role } from '../models/types';

// Initialize Cloudinary configuration (if not already done)
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dlwmx7jxt',
  api_key: process.env.CLOUDINARY_API_KEY || '262566918812916',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'z79kUONbia147t5PocRrwHvJOwU',
});
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // Log the incoming request body
    console.log("Request body:", req.body);

    const { firstName, lastName, email, password, address, phoneNumber, role, department, privilege } = req.body;
    let imageUrl: string = '';

    // Check if files are uploaded and log the file info
    if (req.file) {
      console.log("Uploaded file:", req.file);

      // If an image is uploaded
      const result = await cloudinary.v2.uploader.upload(req.file.path);
      imageUrl = result.secure_url; // Cloudinary URL
      console.log("Uploaded image URL:", imageUrl);
    } else {
      console.log("No file uploaded.");
    }

    // Create a new user object with the provided data
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      role,
      department,
      privilege,
      isVerified: false,
      image: imageUrl, 
      provider: "local",// Save the image URL from Cloudinary
    });

    // Save the new user to the database
    await newUser.save();
    console.log("User created successfully:", newUser);

    // Send response
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    res.status(400).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     description: Retrieves a list of all users
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *       500:
 *         description: Server error
 */
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/latest:
 *   get:
 *     tags: [Users]
 *     summary: Get latest users
 *     description: Retrieves the last 5 users added to the system
 *     responses:
 *       200:
 *         description: Latest users retrieved successfully
 *       500:
 *         description: Server error
 */
export const getLatestUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find()
      .sort({ creationDate: -1 }) // Sort by creation date in descending order
      .limit(5); // Get the last 5 users added
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get user by ID
 *     description: Retrieves a specific user by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
export const getUserById = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update user
 *     description: Updates a user's information
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
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
export const updateUser = async (req: Request, res: Response): Promise<any> => {
  console.log("ENTERED UPDATE");
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete user
 *     description: Deletes a user from the system
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/users/candidates:
 *   get:
 *     tags: [Users]
 *     summary: Get all candidates
 *     description: Retrieves all users with the role 'CANDIDATE'
 *     responses:
 *       200:
 *         description: Candidates retrieved successfully
 *       500:
 *         description: Server error
 */
export const getCandidates = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidates = await User.find({ role: Role.CANDIDATE });
    res.status(200).json(candidates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};






export const getLastCandidates = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidates = await User.find({ role: Role.CANDIDATE })
      .sort({ createdAt: -1 }) // Assuming 'createdAt' is the field that indicates when the user was created
      .limit(5);  

    res.status(200).json(candidates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};



export const getCandidateCountPerYear = async (req: Request, res: Response): Promise<void> => {
  try {
    const currentYear = new Date().getFullYear();
    const lastTwoYears = await User.aggregate([
      { $match: { role: 'CANDIDATE', createdAt: { $gte: new Date(currentYear - 2, 0, 1) } } },
      { $group: { _id: { $year: '$createdAt' }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);

    const yearCounts: { [key: number]: number } = {};
    lastTwoYears.forEach(item => {
      yearCounts[item._id] = item.count;
    });

    const lastYearCount = yearCounts[currentYear] || 0; // Most recent year
    const yearBeforeLastCount = yearCounts[currentYear - 1] || 0; // Year before last
    const yearBeforeThatCount = yearCounts[currentYear - 2] || 0; // Two years ago

    // Calculate percentage changes
    const changeFromLastToYearBeforeLast = yearBeforeLastCount > 0
      ? ((lastYearCount - yearBeforeLastCount) / yearBeforeLastCount) * 100
      : 0;

    const changeFromYearBeforeLastToLast = yearBeforeThatCount > 0
      ? ((yearBeforeLastCount - yearBeforeThatCount) / yearBeforeThatCount) * 100
      : 0;

    res.status(200).json({
      counts: lastTwoYears,
      lastYearCount,
      yearBeforeLastCount,
      percentageChangeLastToYearBeforeLast: changeFromLastToYearBeforeLast.toFixed(2),
      percentageChangeYearBeforeLastToLast: changeFromYearBeforeLastToLast.toFixed(2)
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};




export const countEmployeesByDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
      const currentYear = new Date().getFullYear();
      const lastYear = currentYear - 1;

      // Get the count of employees per department
      const departmentCounts = await User.aggregate([
          {
              $match: {
                  role: 'EMPLOYEE', // Filter for employees
              },
          },
          {
              $group: {
                  _id: '$department', // Group by department
                  count: { $sum: 1 }, // Count the number of employees
              },
          },
          {
              $project: {
                  department: '$_id', // Rename _id to department
                  count: 1,
                  _id: 0, // Exclude the default _id field
              },
          },
      ]);

      // Get total number of employees
      const totalEmployees = await User.countDocuments({ role: 'EMPLOYEE' });

      // Get the count of employees from the last year
      const lastYearCount = await User.countDocuments({
          role: 'EMPLOYEE',
          createDate: {
              $gte: new Date(`${lastYear}-01-01`),
              $lt: new Date(`${currentYear}-01-01`),
          },
      });

      // Calculate percentage change
      const percentageChange = lastYearCount > 0 
          ? ((totalEmployees - lastYearCount) / lastYearCount) * 100 
          : 0;

      // Create the response object
      const response = {
          totalEmployees,
          percentageChange,
          departmentCounts,
      };

      res.status(200).json(response); // Send the result as a response
  } catch (error) {
      console.error('Error counting employees by department:', error);
      res.status(500).json({ message: 'Server error' });
  }
};



export const getUserJobPosts = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    // Fetch the user and populate the jobPosts
    const user = await User.findById(userId).populate('jobPosts');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user.jobPosts); // Return the user's job posts
  } catch (error: any) {
    console.error('Error fetching user job posts:', error);
    const errorMessage = (error instanceof Error) ? error.message : 'Error fetching job posts';
    res.status(500).json({ message: errorMessage });
  }
};