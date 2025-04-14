import jwt from 'jsonwebtoken';
import 'dotenv/config'; // TypeScript equivalent of `require('dotenv').config()`


/**
 * Generates a JWT for the given user ID.
 * @param userId - The ID of the user for whom the token is generated.
 * @returns A signed JWT token with a 7-day expiration.
 */
export const generateToken = (userId: string): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};


export const generateRandomPassword = (): string => {
  const length = 8; // Desired length of the password
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};