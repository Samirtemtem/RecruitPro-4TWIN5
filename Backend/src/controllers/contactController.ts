// controllers/contactController.ts
import { Request, Response } from 'express';
import ContactMessage from '../models/Contact';

// Send message (existing)
export const sendMessage = async (req: Request, res: Response) : Promise<any> => {
  const { username, email, subject, message } = req.body;

  try {
    const newMessage = new ContactMessage({ username, email, subject, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

// Get all messages
export const getAllMessages = async (req: Request, res: Response) : Promise<any> => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};

// Get message by ID
export const getMessageById = async (req: Request, res: Response) : Promise<any> => {
  const { id } = req.params;

  try {
    const message = await ContactMessage.findById(id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve message' });
  }
};

// Delete message by ID
export const deleteMessage = async (req: Request, res: Response) : Promise<any> => {
  const { id } = req.params;

  try {
    const deletedMessage = await ContactMessage.findByIdAndDelete(id);
    if (!deletedMessage) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
};