import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/test:
 *   get:
 *     tags: [Test]
 *     summary: Test endpoint
 *     description: A simple endpoint to verify Swagger documentation is working
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: API is working!
 */
router.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

export default router; 