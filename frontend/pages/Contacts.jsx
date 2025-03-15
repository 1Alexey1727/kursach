import React from 'react';

const Contacts = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Контакты</h2>
                <p className="section-text">Если у вас есть вопросы, свяжитесь с нами:</p>
                <ul className="contact-info">
                    <li><strong>Email:</strong> info@milkfactory.com</li>
                    <li><strong>Телефон:</strong> +7 (123) 456-78-90</li>
                    <li><strong>Адрес:</strong> г. Альметьевск, ул. Промышленная, д. 10</li>
                </ul>
            </div>
        </section>
    );
};

export default Contacts;