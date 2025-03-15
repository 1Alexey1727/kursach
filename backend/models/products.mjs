// models/products.mjs
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true }, // Уникальный ID продукта
    title: { type: String, required: true }, // Название продукта
    description: { type: String, required: true }, // Описание продукта
    image: { type: String, required: true }, // Путь к изображению
});

const Product = mongoose.model('Product', productSchema);

export default Product;