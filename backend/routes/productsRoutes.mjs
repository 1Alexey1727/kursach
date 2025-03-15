import router from "./authRoutes.mjs";
import upload from "../config/upload.mjs";
router.post('/products', upload.single('image'), async (req, res) => {
    try {
        // Находим последний продукт, чтобы получить его ID
        const lastProduct = await Product.findOne().sort({ id: -1 });
        const newId = lastProduct ? lastProduct.id + 1 : 1; // Увеличиваем ID на 1

        // Создаём новый продукт
        const newProduct = new Product({
            id: newId,
            title: req.body.title,
            description: req.body.description,
            image: req.file.filename, // Сохраняем имя файла изображения
        });

        // Сохраняем продукт в базе данных
        await newProduct.save();

        // Возвращаем успешный ответ
        res.status(201).json({ message: 'Продукт успешно добавлен', product: newProduct });
    } catch (error) {
        console.error('Ошибка при добавлении продукта:', error);
        res.status(500).json({ error: 'Произошла ошибка при добавлении продукта' });
    }
});
export default router;