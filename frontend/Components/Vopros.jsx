const Vopros = () => {
    return (
        <div>
            <div className="question-form-container">
                <h1>Задать вопрос</h1>
                <form id="questionForm">
                    {/* Поле для имени */}
                    <div className="form-group">
                        <label htmlFor="name">Ваше имя:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    {/* Поле для email */}
                    <div className="form-group">
                        <label htmlFor="email">Ваш email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    {/* Поле для вопроса */}
                    <div className="form-group">
                        <label htmlFor="question">Ваш вопрос:</label>
                        <textarea id="question" name="question" rows="5" required></textarea>
                    </div>
                    {/* Кнопка отправки */}
                    <div className="form-group submit-group">
                        <button type="submit" className="submit-button">
                            Отправить вопрос
                        </button>
                        <div className="loading-indicator" style={{ display: "none" }}>
                            Отправка...
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Vopros;