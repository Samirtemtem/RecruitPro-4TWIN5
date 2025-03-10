import { NotificationType } from './types';

export interface Notification {
  id: string;
  text: string;
  type: NotificationType;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

// Input type for creating/updating
export interface NotificationInput extends Omit<Notification, 'id' | 'createdAt' | 'updatedAt'> {} 