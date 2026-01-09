import { Router } from 'express';
import healthRoutes from './healthRoutes.js';
import userRoutes from './userRoutes.js';

const router = Router();

// Welcome route
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the Express Backend API',
    documentation: `${req.protocol}://${req.get('host')}/api-docs`,
  });
});

// API routes
router.use('/health', healthRoutes);
router.use('/users', userRoutes);

export default router;
