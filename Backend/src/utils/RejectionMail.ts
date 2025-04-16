import nodemailer from 'nodemailer';

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS  // Your email password or app-specific password
  }
});

// Function to send application status update email
export const sendRejectionEmail = async (recipient: string, candidateName: string, jobTitle: string) => {
  const status = "Rejected"; // Fixed status for rejection
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: 'Application Status Update',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Status Update</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 20px auto;
                  background: white;
                  border-radius: 8px;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .header {
                  background-color: #dc3545;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;
              }
              .content {
                  padding: 20px;
              }
              .footer {
                  text-align: center;
                  padding: 10px;
                  background-color: #f1f1f1;
                  border-bottom-left-radius: 8px;
                  border-bottom-right-radius: 8px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>RecruitPro</h1>
              </div>
              <div class="content">
                  <h2>Dear ${candidateName},</h2>
                  <p>We regret to inform you that your application for the position of <strong>${jobTitle}</strong> has been <strong>${status}</strong>.</p>
                  <p>We appreciate your interest in joining our team and encourage you to apply for future openings that match your skills and experience.</p>
                  <p>Thank you for your understanding.</p>
                  <p>Best regards,<br>The Recruitment Team</p>
              </div>
              <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} RecruitPro. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
};