import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import 'dotenv/config';
import fs from 'fs';

// Debug: Log Cloudinary config
console.log('Configuring Cloudinary with:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET?.substring(0, 5) + '...'
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dlwmx7jxt',
  api_key: process.env.CLOUDINARY_API_KEY || '262566918812916',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'z79kUONbia147t5PocRrwHvJOwU',
  secure: true
});

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Determine the appropriate folder based on file type
    const folder = file.mimetype.startsWith('image/') ? 'profile-images' : 'cvs';
    
    return {
      folder: folder,
      allowed_formats: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'],
      resource_type: 'auto',
      access_mode: 'public',
      unique_filename: true
    };
  }
});

// Initialize multer with Cloudinary storage
export const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Function to upload file to Cloudinary
export const uploadToCloudinary = async (file: Express.Multer.File, folder: string): Promise<string> => {
  try {
    // Determine resource_type based on mimetype
    const resource_type = file.mimetype.startsWith('image/') ? 'image' : 'raw';
    
    const result = await cloudinary.uploader.upload(file.path, {
      folder: folder,
      resource_type: resource_type,
      access_mode: 'public',
      unique_filename: true,
      use_filename: true,
      overwrite: true
    });

    // Clean up the temporary file
    try {
      await fs.promises.unlink(file.path);
    } catch (unlinkError) {
      console.warn('Warning: Could not delete temporary file:', unlinkError);
    }

    return result.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};