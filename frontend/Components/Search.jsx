// Search.jsx
import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState(''); // Состояние для поискового запроса
    const [results, setResults] = useState([]); // Состояние для результатов поиска

    const handleSearch = async () => {
        if (!query) {
            alert('Пожалуйста, введите запрос.');
            return;
        }

        try {
            // Отправляем запрос на сервер для поиска
            const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();

            if (data.results.length === 0) {
                alert('Ничего не найдено.');
            }

            // Обновляем состояние с результатами
            setResults(data.results);
        } catch (error) {
            console.error('Ошибка при поиске:', error);
            alert('Произошла ошибка при выполнении запроса.');
        }
    };

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Введите запрос..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>Найти</button>
            </div>

            {/* Отображение результатов поиска */}
            <div className="results">
                {results.map((product) => (
                    <div key={product.id} className="product">
                        {product.image && (
                            <img
                                src={`http://localhost:5000/images/${product.image}`}
                                alt={product.title}
                                style={{ maxWidth: '200px' }}
                            />
                        )}
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;