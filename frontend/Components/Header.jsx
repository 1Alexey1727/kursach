import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AuthModal from './AuthModal'; // Импортируем модальное окно

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модального окна

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    {/* Логотип */}
                    <Link to="/" className="logo">
                        <img src="../images/Group1.svg" alt="Молочный Комбинат" className="logo-image" />
                        <h1 className="header-title">Молочный Комбинат</h1>
                    </Link>

                    {/* Навигация */}
                    <nav className="header-nav">
                        <ul className="nav-list">
                            <li><Link to="/" className="nav-link">Главная</Link></li>
                            <li><Link to="/products" className="nav-link">Продукты</Link></li>
                            <li><Link to="/contact" className="nav-link">Контакты</Link></li>
                        </ul>
                    </nav>

                    {/* Кнопки входа/регистрации или выхода */}
                    <div className="auth-buttons">
                        {!isAuthenticated ? (
                            <>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="btn btn-login"
                                >
                                    Войти/Зарегистрироваться
                                </button>
                            </>
                        ) : (
                            <button onClick={logout} className="btn btn-logout">Выйти</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            <AuthModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </header>
    );
};

export default Header;