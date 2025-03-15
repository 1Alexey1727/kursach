import multer from 'multer';
import path from 'path';

// Настройка Multer для загрузки изображений
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Путь к папке для сохранения изображений
        cb(null, 'StoreImage');
    },
    filename: (req, file, cb) => {
        // Генерация уникального имени файла
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

// Фильтр для разрешённых типов файлов
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true); // Разрешаем только изображения
    } else {
        cb(new Error('Только изображения допустимы'), false);
    }
};

// Создание экземпляра Multer
const upload = multer({ storage, fileFilter });

export default upload;