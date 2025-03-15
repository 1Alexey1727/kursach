// routes/searchRoutes.mjs
import express from 'express';
import Product from '../models/products.mjs'; // Импортируем модель продукта

const router = express.Router();

// Маршрут для поиска продуктов
router.get('/search', async (req, res) => {
    try {
        const query = req.query.q; // Получаем поисковый запрос из параметра "q"

        if (!query) {
            return res.status(400).json({ error: 'Пожалуйста, введите поисковый запрос.' });
        }

        // Ищем продукты по названию или описанию
        const results = await Product.find({
            $or: [
                { title: { $regex: query, $options: 'i' } }, // Поиск по названию (регистронезависимый)
                { description: { $regex: query, $options: 'i' } }, // Поиск по описанию
            ],
        });

        // Возвращаем результаты
        res.json({ query, results });
    } catch (error) {
        console.error('Ошибка при поиске:', error);
        res.status(500).json({ error: 'Произошла ошибка при поиске' });
    }
});

export default router;