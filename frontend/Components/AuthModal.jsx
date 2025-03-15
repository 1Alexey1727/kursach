import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Modal from 'react-modal';

// Устанавливаем корневой элемент для доступности
Modal.setAppElement('#root');

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true); // Переключение между формами
    const [formData, setFormData] = useState({
        username: '',
        email: '', // Добавляем поле для почты
        password: '',
    });
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                // Авторизация
                const response = await axios.post('http://localhost:5000/api/login', {
                    username: formData.username,
                    password: formData.password,
                });
                localStorage.setItem('token', response.data.token);
                login();
                alert('Авторизация успешна!');
            } else {
                // Регистрация
                await axios.post('http://localhost:5000/api/register', formData);
                alert('Регистрация успешна!');
                setIsLogin(true); // Переключаемся на форму входа
            }
            onClose(); // Закрываем модальное окно
        } catch (error) {
            if (error.response) {
                alert(error.response.data.error || 'Ошибка');
            } else {
                alert('Ошибка сервера');
            }
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Авторизация/Регистрация"
            className="auth-modal" // Используем CSS-класс
            overlayClassName="auth-modal-overlay" // Класс для затемнённого фона
        >
            <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
            <form onSubmit={handleSubmit}>
                {/* Поле для имени пользователя */}
                <div>
                    <label>Имя пользователя:</label>
                    <input
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Поле для почты (только при регистрации) */}
                {!isLogin && (
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            required
                        />
                    </div>
                )}

                {/* Поле для пароля */}
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Кнопка отправки */}
                <div style={{ marginTop: '20px' }}>
                    <button type="submit" className="btn">
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="btn secondary"
                        style={{ marginLeft: '10px' }}
                    >
                        {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AuthModal;