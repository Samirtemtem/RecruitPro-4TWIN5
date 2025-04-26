import { Request, Response } from 'express';
import RequestModel from '../models/Request';

export const createRequest = async (req: Request, res: Response): Promise<void> => {
    try {
        const newRequest = new RequestModel(req.body);
        const savedRequest = await newRequest.save();
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