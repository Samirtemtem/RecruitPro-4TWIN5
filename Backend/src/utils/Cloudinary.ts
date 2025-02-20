import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Configuration de Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuration du stockage Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    // Assurez-vous que ces propriétés sont reconnues par le type Params
    folder: 'uploads', // Dossier dans Cloudinary
    allowedFormats: ['jpg', 'jpeg', 'png'], // Formats autorisés pour les téléchargements
  } as any, // Utilisation de `as any` pour contourner le problème de type
});

// Initialiser multer avec le stockage Cloudinary
const upload = multer({ storage });

export default upload;