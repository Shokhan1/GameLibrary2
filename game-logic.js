// game-logic.js
document.addEventListener('DOMContentLoaded', () => {
    const gameId = localStorage.getItem('currentGame');
    const game = gamesData[gameId]; // Берем данные из объекта выше

    if (game) {
        document.querySelector('.info-text h1').innerText = game.title;
        document.querySelector('.description').innerText = game.description;
        document.querySelector('.author span').innerText = game.author;
        
        // Очищаем и добавляем теги
        const tagContainer = document.querySelector('.tags');
        tagContainer.innerHTML = '';
        game.tags.forEach(t => {
            tagContainer.innerHTML += `<span class="tag">${t}</span>`;
        });
    }
    
    renderComments();
});

function addComment() {
    const name = document.getElementById('userName').value;
    const text = document.getElementById('commentText').value;
    const gameId = localStorage.getItem('currentGame');

    if(!name || !text) return alert("Заполни поля!");

    const comments = JSON.parse(localStorage.getItem('allComments') || '{}');
    if (!comments[gameId]) comments[gameId] = [];

    comments[gameId].push({ name, text, date: new Date().toLocaleDateString() });
    localStorage.setItem('allComments', JSON.stringify(comments));

    renderComments();
}

function renderComments() {
    const gameId = localStorage.getItem('currentGame');
    const comments = JSON.parse(localStorage.getItem('allComments') || '{}')[gameId] || [];
    const list = document.getElementById('commentsList');
    
    list.innerHTML = comments.map(c => `
        <div class="comment-item" style="background: #1e293b; padding: 15px; margin-top: 10px; border-radius: 8px;">
            <strong style="color: var(--accent)">${c.name}</strong> <small>${c.date}</small>
            <p>${c.text}</p>
        </div>
    `).join('');
}