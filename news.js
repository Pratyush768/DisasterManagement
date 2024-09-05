async function fetchNews() {
    const apiKey = '2cf1fea0ea7c46d0b6c1cb708cec9701'; // Replace with your NewsAPI key
    const url = 'newsapi.org/v2/top-headlines?country=us&apiKey=2cf1fea0ea7c46d0b6c1cb708cec9701'
        ;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = data.articles.map(article => `
            <div class="news-item">
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <p>${article.description}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Fetch news when the page loads
fetchNews();
