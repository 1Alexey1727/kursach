import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Герой-блок */}
            <section className="hero">
                <div className="container">
                    <h2 className="hero-title">Свежие и натуральные молочные продукты</h2>
                    <p className="hero-description">
                        Мы производим только качественное молоко и молочные изделия.
                    </p>
                    <Link to="/products" className="btn hero-btn">
                        Посмотреть продукты
                    </Link>
                </div>
            </section>

            {/* О нас */}
            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title">История нашего комбината</h2>
                    <p className="section-text">
                        Наш молочный комбинат был основан в 1990 году и с тех пор мы стремимся производить только лучшие молочные продукты. Мы заботимся о качестве и свежести нашей продукции.
                    </p>
                </div>
            </section>

            {/* Наши продукты */}
            <section id="products-preview" className="products-preview">
                <div className="container">
                    <h2 className="section-title">Наши популярные продукты</h2>
                    <div className="product-cards">
                        <div className="product-card">
                            <img src="/images/milk.png" alt="Молоко" className="product-image" />
                            <h3 className="product-title">Молоко</h3>
                            <p className="product-description">Свежайшее молоко от наших коров.</p>
                        </div>
                        <div className="product-card">
                            <img src="/images/gouda.png" alt="Сыр" className="sirok product-image" />
                            <h3 className="product-title">Сыр</h3>
                            <p className="product-description">Натуральный сыр из высококачественного молока.</p>
                        </div>
                        <div className="product-card">
                            <img src="/images/maslo.png" alt="Сливочное масло" className="masla product-image" />
                            <h3 className="product-title">Сливочное масло</h3>
                            <p className="product-description">Произведено по традиционным технологиям.</p>
                        </div>
                    </div>
                    <Link to="/products" className="btn section-btn">
                        Все продукты
                    </Link>
                </div>
            </section>

            {/* Миссия */}
            <section id="mission" className="mission">
                <div className="container">
                    <h2 className="section-title">Наша миссия</h2>
                    <p className="section-text">
                        Мы стремимся быть лидером в сердцах своих покупателей! «АМК» — это производство молочной продукции, основанное на проверенных традициях и высоком качестве.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;