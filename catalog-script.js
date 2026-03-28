document.addEventListener('DOMContentLoaded', () => {
    const applyBtn = document.getElementById('applyBtn');
    const genreSelect = document.getElementById('genreSelect');
    const gameCards = document.querySelectorAll('.game-card');

    applyBtn.addEventListener('click', () => {
        const selectedGenre = genreSelect.value;

        gameCards.forEach(card => {
            const cardGenre = card.getAttribute('data-category');

            if (selectedGenre === 'all' || cardGenre === selectedGenre) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    document.getElementById('clearFilters').addEventListener('click', () => {
        genreSelect.value = 'all';
        gameCards.forEach(card => card.style.display = 'block');
    });
});