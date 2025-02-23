import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import { registerUser, getUsers, getUserByEmail } from './routes/FaceRecologin';
import upload from './utils/Cloudinary'; // Adjust the import path if necessary


const port: number = 5000; 
const app: express.Application = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

const dbURI: string = 'mongodb://127.0.0.1:27017/yourdbname'; 

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err: Error) => console.error('MongoDB connection error:', err));







app.use('/uploads', express.static('uploads'));

app.post("/register", upload.single('picture'), registerUser);
app.get("/getUsers", getUsers);
app.get('/getUserByEmail', getUserByEmail);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});