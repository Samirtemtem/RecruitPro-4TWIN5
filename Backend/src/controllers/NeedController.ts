import { Request, Response } from 'express';
import NeedModel from '../models/Need'; // Updated import to match the new model name
import { createNeedNotification } from './NotificationController';
import { User } from '../models/User';
import mongoose from 'mongoose';


export const createNeed = async (req: Request, res: Response): Promise<void> => {
    try {
        const newNeed = new NeedModel(req.body);
        const savedNeed = await newNeed.save();

        // Get team lead name for notification
        const teamLead = await User.findById(req.body.teamLead);
        const teamLeadName = teamLead ? `${teamLead.firstName} ${teamLead.lastName}` : 'Team Lead';

        const needId = (savedNeed as any)._id.toString();
        console.log('Creating need notification for department:', req.body.department);
        console.log('Team lead name:', teamLeadName);
        console.log('Need ID:', needId);

        // Create notification for department managers
        if (req.body.department) {
            try {
                const notification = await createNeedNotification(
                    req.body.department,
                    needId,
                    teamLeadName
                );
                console.log('Notification created:', notification);
            } catch (notifError) {
                console.error('Error creating notification:', notifError);
            }
        } else {
            console.log('No department specified, skipping notification');
        }
        
        res.status(201).json(savedNeed);
    } catch (error: any) {
        console.error('Error in createNeed:', error);
        res.status(500).json({ message: error.message });
    }
};

export const getNeeds = async (req: Request, res: Response): Promise<void> => {
    try {
        const needs = await NeedModel.find().populate('teamLead'); // Populate teamLead
        res.status(200).json(needs);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getNeedById = async (req: Request, res: Response): Promise<void> => {
    try {
        const need = await NeedModel.findById(req.params.id).populate('teamLead'); // Populate teamLead
        if (!need) {
            res.status(404).json({ message: 'Need not found' });
            return; // Early return
        }
        res.status(200).json(need); // Respond with the found need
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateNeed = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedNeed = await NeedModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedNeed) {
            res.status(404).json({ message: 'Need not found' });
            return; // Early return
        }
        res.status(200).json(updatedNeed);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteNeed = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedNeed = await NeedModel.findByIdAndDelete(req.params.id);
        if (!deletedNeed) {
            res.status(404).json({ message: 'Need not found' });
            return; // Early return
        }
        res.status(200).json({ message: 'Need deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateJobPostCreated = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedNeed = await NeedModel.findByIdAndUpdate(
            id,
            { requestCreated: true }, // Set requestCreated to true
            { new: true }
        );

        if (!updatedNeed) {
            res.status(404).json({ message: 'Need not found' });
            return; // Early return
        }

        res.status(200).json(updatedNeed);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};



// Controller to get needs based on teamLead ID
export const getNeedsByTeamLead = async (req: Request, res: Response): Promise<void> => {
    try {
        const { teamLeadId } = req.params;

        // Fetch needs based on the teamLead ID
        const needs = await NeedModel.find({ teamLead: teamLeadId });

        if (!needs.length) {
            res.status(404).json({ message: 'No needs found for this team lead' });
            return;
        }

        res.status(200).json(needs);
    } catch (error) {
        console.error('Error fetching needs:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};