import express from 'express';
import { register, login } from '../controllers/authController.mjs';
import { protectedRoute } from '../controllers/protectedController.mjs';
import { authMiddleware } from '../middlewares/authMiddleware.mjs';

const router = express.Router();

// Регистрация
router.post('/register', register);

// Авторизация
router.post('/login', login);

// Защищенный маршрут
router.get('/protected', authMiddleware, protectedRoute);

export default router;