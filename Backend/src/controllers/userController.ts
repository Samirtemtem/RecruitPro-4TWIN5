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

// Create a user
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







// Get all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get the last 5 users added
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

// Get a single user by ID
export const getUserById = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
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

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};



// Get users with role 'CANDIDATE'
// Get users with role 'CANDIDATE'
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