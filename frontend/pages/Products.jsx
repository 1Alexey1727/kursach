import React from 'react';
import Search from '../Components/Search';
const Products = () => {
    return (
        <section id="products" className="products">
            <div className="container">
                <Search/>
                <h2 className="section-title">Наши продукты</h2>
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
                <div className="product-cards">
                        <div className="product-card">
                            <img src="/images/tvorog.png" alt="Творог" className="tvorog product-image" />
                            <h3 className="product-title">Творог</h3>
                            <p className="product-description">Нежный, полезный, вкусный, универсальный.</p>
                        </div>
                        <div className="product-card">
                            <img src="/images/smetana.jpg" alt="Сметана" className="smetana product-image" />
                            <h3 className="product-title">Сметана</h3>
                            <p className="product-description">Кисломолочный, густой, вкусный, кремовый</p>
                        </div>
                        <div className="product-card">
                            <img src="/images/ZOVKA.png" alt="Йогурт" className="ZOV product-image" />
                            <h3 className="product-title">Йогурт</h3>
                            <p className="product-description">Натуральный йогурт из отборного молока</p>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Products;