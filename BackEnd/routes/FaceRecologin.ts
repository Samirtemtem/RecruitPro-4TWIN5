import { Request, Response } from 'express';
import UserModel from '../models/model'; // Ensure this path is correct
import upload from '../utils/Cloudinary'; // Adjust the import path if necessary

export const registerUser = async (req: Request, res: Response) => {
    try {
        // The file is directly uploaded to Cloudinary via multer
        const pictureUrl = req.file ? req.file.path : null; // The path will be the Cloudinary URL

        const user = await UserModel.create({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            picture: pictureUrl,
        });

        res.status(201).json(user);
    } catch (e) {
        if (e instanceof Error) {
            res.status(400).json({ error: e.message });
        } else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
};




export const getUsers = async (req: Request, res: Response) => {
    try {
        const allData = await UserModel.find();
        res.json(allData);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'Unknown error' });
        }
    }
};

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
    const email = req.query.email as string;
    try {
        const users = await UserModel.find({ email });
        if (users.length > 0) {
            res.json(users);
            return;
        } else {
            res.status(404).json({ message: 'User not found' });
            return;
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users', error: (error as Error).message });
    }
};