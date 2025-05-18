import { Request, Response } from 'express';
import Notification, { INotification } from '../models/Notification';
import { User } from '../models/User';
import { NotificationType } from '../models/types';
import Need from '../models/Need';
import RequestModel from '../models/Request';

// Create a new notification
export const createNotification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { text, type, link, userId } = req.body;
    
    const newNotification = new Notification({
      text,
      type,
      link,
      userId,
      isRead: false
    });
    
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Create a notification for department managers when a new need is created
export const createNeedNotification = async (
  departmentName: string, 
  needId: string, 
  teamLeadName: string
): Promise<INotification | null> => {
  try {
    // Find department managers for the specific department
    const departmentManagers = await User.find({ 
      role: 'DEPARTMENT-MANAGER',
      department: departmentName 
    });
    
    if (departmentManagers.length === 0) {
      console.log(`No department managers found for department: ${departmentName}`);
      return null;
    }

    // Get need details for more informative notification
    const need = await Need.findById(needId);
    if (!need) {
      console.log(`Need not found with ID: ${needId}`);
      return null;
    }

    // Create a more detailed notification text
    const notificationText = `New need request from ${teamLeadName}: ${need.position} (${need.importance} priority)`;
    
    // Create notifications for each department manager
    const notifications = [];
    for (const manager of departmentManagers) {
      const notification = new Notification({
        text: notificationText,
        type: NotificationType.SIMPLE,
        link: `/need-Detail-dep/${needId}`,
        userId: manager._id,
        isRead: false
      });
      
      notifications.push(await notification.save());
    }
    
    return notifications[0]; // Return the first notification for reference
  } catch (error) {
    console.error('Error creating need notification:', error);
    return null;
  }
};

// Create notification for HR managers when a department manager creates a new request
export const createRequestNotification = async (
  requestId: string,
  departmentManagerName: string,
  position: string,
  department: string,
  importance: string,
  link: string
): Promise<INotification[] | null> => {
  try {
    // Find all HR managers
    const hrManagers = await User.find({ 
      role: 'HR-MANAGER'
    });
    
    if (hrManagers.length === 0) {
      console.log('No HR managers found');
      return null;
    }

    // Create a detailed notification text
    const notificationText = `New job request from ${departmentManagerName}: ${position} in ${department} department (${importance} priority)`;
    
    // Create notifications for each HR manager
    const notifications = [];
    for (const hrManager of hrManagers) {
      const notification = new Notification({
        text: notificationText,
        type: NotificationType.SIMPLE,
        link: link,
        userId: hrManager._id,
        isRead: false
      });
      
      notifications.push(await notification.save());
    }
    
    return notifications;
  } catch (error) {
    console.error('Error creating request notification for HR:', error);
    return null;
  }
};

// Get all notifications for a user
export const getUserNotifications = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    const notifications = await Notification.find({ userId })
      .sort({ createdAt: -1 }) // Sort by newest first
      .limit(20); // Limit to 20 most recent notifications
    
    res.status(200).json(notifications);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get unread notification count for a user
export const getUnreadCount = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    const count = await Notification.countDocuments({ 
      userId,
      isRead: false
    });
    
    res.status(200).json({ count });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Mark a notification as read
export const markAsRead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { notificationId } = req.params;
    
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true }
    );
    
    if (!notification) {
      res.status(404).json({ message: 'Notification not found' });
      return;
    }
    
    res.status(200).json(notification);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Mark all notifications as read for a user
export const markAllAsRead = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    const result = await Notification.updateMany(
      { userId, isRead: false },
      { isRead: true }
    );
    
    res.status(200).json({ 
      message: 'All notifications marked as read',
      modifiedCount: result.modifiedCount
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}; 