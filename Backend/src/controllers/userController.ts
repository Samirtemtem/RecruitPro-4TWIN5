import 'dotenv/config';

import { Request, Response } from 'express';
import User from '../models/User';
import cloudinary from 'cloudinary';
import multer from 'multer';

// Initialize Cloudinary configuration (if not already done)
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
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