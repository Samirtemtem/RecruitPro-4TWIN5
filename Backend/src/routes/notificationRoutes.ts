import { Router } from 'express';
import {
  createNotification,
  getUserNotifications,
  getUnreadCount,
  markAsRead,
  markAllAsRead
} from '../controllers/NotificationController';

const router = Router();

// Create a new notification
router.post('/', createNotification);

// Get all notifications for a user
router.get('/user/:userId', getUserNotifications);

// Get unread notification count for a user
router.get('/user/:userId/unread-count', getUnreadCount);

// Mark a notification as read
router.patch('/:notificationId/read', markAsRead);

// Mark all notifications as read for a user
router.patch('/user/:userId/read-all', markAllAsRead);

export default router; 