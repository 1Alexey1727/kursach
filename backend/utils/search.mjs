export const handleSearch = (query) => {
    if (!query) {
        return { error: 'Пожалуйста, введите поисковый запрос.' };
    }

    // Здесь можно добавить логику поиска (например, поиск в базе данных)
    const results = [
        { id: 1, title: 'Результат 1', description: 'Описание результата 1' },
        { id: 2, title: 'Результат 2', description: 'Описание результата 2' },
    ];

    return { query, results };
};