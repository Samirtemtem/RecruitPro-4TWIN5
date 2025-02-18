import { v2 as cloudinary } from 'cloudinary';

// Parse CLOUDINARY_URL
const parseCloudinaryUrl = (url: string) => {
  const match = url.match(/cloudinary:\/\/(\d+):([^@]+)@(.+)$/);
  if (!match) {
    throw new Error('Invalid CLOUDINARY_URL format');
  }
  return {
    api_key: match[1],
    api_secret: match[2],
    cloud_name: match[3]
  };
};

// Configure Cloudinary
const cloudinaryConfig = parseCloudinaryUrl(process.env.CLOUDINARY_URL || '');
cloudinary.config({
  cloud_name: cloudinaryConfig.cloud_name,
  api_key: cloudinaryConfig.api_key,
  api_secret: cloudinaryConfig.api_secret
});

export const uploadToCloudinary = async (file: Express.Multer.File, folder: string): Promise<string> => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: `recruitpro/${folder}`,
      resource_type: 'auto'
    });
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('File upload to Cloudinary failed');
  }
}; 