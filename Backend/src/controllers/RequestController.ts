import { Request, Response } from 'express';
import RequestModel from '../models/Request';
import { User } from '../models/User';
import { createRequestNotification } from './NotificationController';
import mongoose from 'mongoose';

export const createRequest = async (req: Request, res: Response): Promise<void> => {
    try {
        // Create and save the new request
        const newRequest = new RequestModel(req.body);
        const savedRequest = await newRequest.save();
        
        // After saving, fetch the request with its ID to avoid typing issues
        const requestWithId = await RequestModel.findById(savedRequest._id);
        
        if (requestWithId && req.body.department_Manager) {
            try {
                // Get department manager information
                const departmentManager = await User.findById(req.body.department_Manager);
                
                if (departmentManager) {
                    const managerName = `${departmentManager.firstName} ${departmentManager.lastName}`;
                    
                    // Send notifications to HR managers
                    // Use a type assertion to resolve the TypeScript error
                    const requestId = (requestWithId as unknown as { _id: mongoose.Types.ObjectId })._id.toString();
                    await createRequestNotification(
                        requestId,
                        managerName,
                        req.body.position,
                        req.body.department || 'Unknown',
                        req.body.importance || 'MEDIUM',
                        `/request-Detail/${requestId}`
                    );
                }
            } catch (notifError) {
                console.error('Error creating HR notification:', notifError);
                // Continue even if notification creation fails
            }
        }
        
        res.status(201).json(savedRequest);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getRequests = async (req: Request, res: Response): Promise<void> => {
    try {
        const requests = await RequestModel.find().populate('department_Manager'); // Populate department_Manager
        res.status(200).json(requests);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getRequestById = async (req: Request, res: Response): Promise<void> => {
    try {
        const request = await RequestModel.findById(req.params.id).populate('department_Manager'); // Populate department_Manager
        if (!request) {
            res.status(404).json({ message: 'Request not found' });
            return; // Early return
        }
        res.status(200).json(request); // Respond with the found request
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateRequest = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedRequest = await RequestModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRequest) {
            res.status(404).json({ message: 'Request not found' });
            return; // Early return
        }
        res.status(200).json(updatedRequest);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRequest = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedRequest = await RequestModel.findByIdAndDelete(req.params.id);
        if (!deletedRequest) {
            res.status(404).json({ message: 'Request not found' });
            return; // Early return
        }
        res.status(200).json({ message: 'Request deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateJobPostCreated = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedRequest = await RequestModel.findByIdAndUpdate(
            id,
            { jobPostCreated: true }, // Set jobPostCreated to true
            { new: true }
        );

        if (!updatedRequest) {
            res.status(404).json({ message: 'Request not found' });
            return; // Early return
        }

        res.status(200).json(updatedRequest);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to fetch requests based on department manager ID
export const getRequestsByDepartmentManager = async (req: Request, res: Response): Promise<void> => {
    const { departmentManagerId } = req.params;

    try {
        // Fetch requests from the database
        const requests = await RequestModel.find({ department_Manager: departmentManagerId }).populate('department_Manager');

        // If no requests found, return a 404
        if (!requests || requests.length === 0) {
             res.status(404).json({ message: "No requests found for the specified department manager." });
             return;
        }

        // Return the fetched requests
        res.status(200).json(requests);
    } catch (error) {
        console.error("Error fetching requests:", error);
        res.status(500).json({ message: "An error occurred while fetching requests.", error });
    }
};

export const getRequestStats = async (req: Request, res: Response) => {
    try {
        // Count by department
        const departmentStats = await RequestModel.aggregate([
            { $group: { _id: '$department', count: { $sum: 1 } } }
        ]);

        // Count by status
        const statusStats = await RequestModel.aggregate([
            { $group: { _id: '$status', count: { $sum: 1 } } }
        ]);

        // Count by importance
        const importanceStats = await RequestModel.aggregate([
            { $group: { _id: '$importance', count: { $sum: 1 } } }
        ]);

        // Count total requests
        const totalRequests = await RequestModel.countDocuments();

        res.status(200).json({
            totalRequests,
            departmentStats,
            statusStats,
            importanceStats,
        });
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};