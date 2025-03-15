// server.mjs
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.mjs';
import authRoutes from './routes/authRoutes.mjs';
import productsRoutes from './routes/productsRoutes.mjs'; // Импортируем маршруты для продуктов
import searchRoutes from './routes/searchRoutes.mjs'; // Импортируем маршруты для поиска
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Подключение к MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'StoreImage')));

// Маршруты
app.use('/api', authRoutes); // Маршруты для аутентификации
app.use('/api', productsRoutes); // Маршруты для продуктов
app.use('/api', searchRoutes); // Маршруты для поиска

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});