import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address (e.g., from .env)
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

interface EmailCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const sendCredentialsEmail = async ({ firstName, lastName, email, password }: EmailCredentials): Promise<void> => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: email, // Team lead's email
      subject: 'Your Team Lead Account Credentials',
      html: `
        <h3>Hello ${firstName} ${lastName},</h3>
        <p>Welcome to the team! Your account has been created successfully.</p>
        <p>Here are your login credentials:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Password:</strong> ${password}</li>
        </ul>
        <p>Please log in and change your password as soon as possible.</p>
        <p>Best regards,<br>RecruitPro</p>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};