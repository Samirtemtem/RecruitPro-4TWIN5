import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import * as profileController from '../controllers/myProfileController';
import { upload } from '../utils/cloudinary';

const router = express.Router();

// Import AuthenticatedRequest type
interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    role?: string;
  };
}

// Wrap controller methods to ensure proper error handling and response
const asyncHandler = (fn: Function): RequestHandler => 
  (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch((error) => {
      console.error('Route error:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
  };

/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - phoneNumber
 *         - address
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         phoneNumber:
 *           type: string
 *         address:
 *           type: string
 *         profileImage:
 *           type: string
 *         cv:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               fileName:
 *                 type: string
 *               fileUrl:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *         education:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Education'
 *         experience:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Experience'
 *         skills:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *         socialLinks:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SocialLink'
 *     Education:
 *       type: object
 *       required:
 *         - institution
 *         - diploma
 *         - startDate
 *         - endDate
 *         - location
 *       properties:
 *         institution:
 *           type: string
 *         diploma:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 *         description:
 *           type: string
 *         location:
 *           type: string
 *     Experience:
 *       type: object
 *       required:
 *         - position
 *         - enterprise
 *         - startDate
 *         - endDate
 *         - location
 *       properties:
 *         position:
 *           type: string
 *         enterprise:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 *         description:
 *           type: string
 *         location:
 *           type: string
 *     Skill:
 *       type: object
 *       required:
 *         - name
 *         - degree
 *       properties:
 *         name:
 *           type: string
 *         degree:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced, Expert]
 *     SocialLink:
 *       type: object
 *       required:
 *         - type
 *         - link
 *       properties:
 *         type:
 *           type: string
 *           enum: [FACEBOOK, TWITTER, LINKEDIN, INSTAGRAM, GITHUB, OTHER]
 *         link:
 *           type: string
 */

/**
 * @swagger
 * /api/profile/me:
 *   post:
 *     tags: [Profile]
 *     summary: Get user profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.post('/me', asyncHandler(profileController.getProfile));

/**
 * @swagger
 * /api/profile/update:
 *   put:
 *     tags: [Profile]
 *     summary: Update user profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - firstName
 *               - lastName
 *               - email
 *               - phoneNumber
 *               - address
 *             properties:
 *               userId:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phoneNumber:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/update', asyncHandler(profileController.updateProfile));

/**
 * @swagger
 * /api/profile/education:
 *   post:
 *     tags: [Profile]
 *     summary: Get user education history
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *     responses:
 *       200:
 *         description: Education history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Education'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.post('/education', asyncHandler(profileController.addEducation));

/**
 * @swagger
 * /api/profile/education:
 *   put:
 *     tags: [Profile]
 *     summary: Update user's education history
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - education
 *             properties:
 *               userId:
 *                 type: string
 *               education:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Education'
 *     responses:
 *       200:
 *         description: Education history updated successfully
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/education', asyncHandler(profileController.updateEducation));

/**
 * @swagger
 * /api/profile/education/{id}:
 *   delete:
 *     tags: [Profile]
 *     summary: Delete an education entry
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Education entry ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Education entry deleted successfully
 *       404:
 *         description: Education entry not found
 *       500:
 *         description: Server error
 */
router.delete('/education/:id', asyncHandler(profileController.deleteEducation));

/**
 * @swagger
 * /api/profile/experience:
 *   post:
 *     tags: [Profile]
 *     summary: Get user experience history
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *     responses:
 *       200:
 *         description: Experience history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Experience'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.post('/experience', asyncHandler(profileController.addExperience));

/**
 * @swagger
 * /api/profile/experience:
 *   put:
 *     tags: [Profile]
 *     summary: Update user's work experience
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - experience
 *             properties:
 *               userId:
 *                 type: string
 *               experience:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Experience'
 *     responses:
 *       200:
 *         description: Work experience updated successfully
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/experience', asyncHandler(profileController.updateExperience));

/**
 * @swagger
 * /api/profile/experience/{id}:
 *   delete:
 *     tags: [Profile]
 *     summary: Delete a work experience entry
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Experience entry ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Experience entry deleted successfully
 *       404:
 *         description: Experience entry not found
 *       500:
 *         description: Server error
 */
router.delete('/experience/:id', asyncHandler(profileController.deleteExperience));

/**
 * @swagger
 * /api/profile/skills:
 *   post:
 *     tags: [Profile]
 *     summary: Get user skills
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *     responses:
 *       200:
 *         description: Skills retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.post('/skills', asyncHandler(profileController.addSkills));

/**
 * @swagger
 * /api/profile/skills:
 *   put:
 *     tags: [Profile]
 *     summary: Update user's skills
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - skills
 *             properties:
 *               userId:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Skill'
 *     responses:
 *       200:
 *         description: Skills updated successfully
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/skills', asyncHandler(profileController.updateSkills));

/**
 * @swagger
 * /api/profile/skills/{id}:
 *   delete:
 *     tags: [Profile]
 *     summary: Delete a skill
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Skill deleted successfully
 *       404:
 *         description: Skill not found
 *       500:
 *         description: Server error
 */
router.delete('/skills/:id', asyncHandler(profileController.deleteSkill));

/**
 * @swagger
 * /api/profile/social:
 *   post:
 *     tags: [Profile]
 *     summary: Get user social links
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *     responses:
 *       200:
 *         description: Social links retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocialLink'
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.post('/social', asyncHandler(profileController.addSocialLinks));

/**
 * @swagger
 * /api/profile/social:
 *   put:
 *     tags: [Profile]
 *     summary: Update user's social links
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - socialLinks
 *             properties:
 *               userId:
 *                 type: string
 *               socialLinks:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/SocialLink'
 *     responses:
 *       200:
 *         description: Social links updated successfully
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.put('/social', asyncHandler(profileController.updateSocialLinks));

/**
 * @swagger
 * /api/profile/social/{id}:
 *   delete:
 *     tags: [Profile]
 *     summary: Delete a social link
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Social link ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Social link deleted successfully
 *       404:
 *         description: Social link not found
 *       500:
 *         description: Server error
 */
router.delete('/social/:id', asyncHandler(profileController.deleteSocialLink));

/**
 * @swagger
 * /api/profile/cv/upload:
 *   post:
 *     tags: [Profile]
 *     summary: Upload CV files
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - files
 *             properties:
 *               userId:
 *                 type: string
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: CV files uploaded successfully
 *       400:
 *         description: No files uploaded or invalid file type
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.post('/cv/upload', upload.array('files', 5), asyncHandler(profileController.uploadCV));

/**
 * @swagger
 * /api/profile/cv/{fileUrl}:
 *   get:
 *     tags: [Profile]
 *     summary: Download a CV file
 *     parameters:
 *       - in: path
 *         name: fileUrl
 *         required: true
 *         schema:
 *           type: string
 *         description: CV file URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: File download successful
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: File not found
 *       500:
 *         description: Server error
 */
router.get('/cv/:fileUrl', asyncHandler(profileController.downloadCV));

/**
 * @swagger
 * /api/profile/cv/{id}:
 *   delete:
 *     tags: [Profile]
 *     summary: Delete a CV file
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: CV file ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: CV file deleted successfully
 *       404:
 *         description: CV file not found
 *       500:
 *         description: Server error
 */
router.delete('/cv/:id', asyncHandler(profileController.deleteCV));

/**
 * @swagger
 * /api/profile/image/upload:
 *   post:
 *     tags: [Profile]
 *     summary: Upload profile image
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - image
 *             properties:
 *               userId:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile image uploaded successfully
 *       400:
 *         description: No image uploaded or invalid file type
 *       404:
 *         description: Profile not found
 *       500:
 *         description: Server error
 */
router.post('/image/upload', upload.single('image'), asyncHandler(profileController.uploadProfileImage));

export default router; 