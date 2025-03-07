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