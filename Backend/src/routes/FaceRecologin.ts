import express, { Request, Response } from 'express';
import { User } from '../models/User';
import { generateToken } from '../utils/generateToken';

const router = express.Router();

router.post('/login', async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
        res.status(400).json({
            message: 'Email is required',
            code: 'INVALID_CREDENTIALS'
        });
        return;
    }

    // Fetch user from database
    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(404).json({
                message: 'User not found',
                code: 'USER_NOT_FOUND'
            });
            return;
        }

        // Generate a token containing user data
        const token = generateToken(user.id);
        res.json({ token, userRole: user.role, userId: user.id });
    } catch (error: any) {
        console.error('Error fetching user:', error);
        res.status(500).json({
            message: 'Internal server error',
            code: 'INTERNAL_ERROR'
        });
    }
});




export const getUsers = async (req: Request, res: Response) => {
    try {
        const allData = await User.find();
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
        const users = await User.find({ email });
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



export default router;