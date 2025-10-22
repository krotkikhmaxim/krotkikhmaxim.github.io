// Данные блога (в реальном проекте можно загружать из JSON файла)
const blogPosts = [
    {
        id: 1,
        title: "Мой первый пост в блоге",
        date: "2024-01-15",
        excerpt: "Это мой первый пост в новом блоге. Расскажу о том, почему решил вести блог и о чем буду писать...",
        content: "Полное содержание поста...",
        image: "https://via.placeholder.com/400x200"
    },
    {
        id: 2,
        title: "Основы GitHub Pages",
        date: "2024-01-20",
        excerpt: "Как легко и быстро разместить свой сайт на GitHub Pages без серверов и хостинга...",
        content: "Полное содержание поста...",
        image: "https://via.placeholder.com/400x200"
    },
    {
        id: 3,
        title: "Советы по веб-разработке",
        date: "2024-01-25",
        excerpt: "Поделюсь полезными советами и инструментами для начинающих веб-разработчиков...",
        content: "Полное содержание поста...",
        image: "https://via.placeholder.com/400x200"
    }
];

// Загрузка постов блога
function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px; margin-bottom: 1rem;">
            <h3>${post.title}</h3>
            <div class="post-date">${formatDate(post.date)}</div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" onclick="showPost(${post.id})">Читать далее →</a>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Форматирование даты
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
}

// Показ отдельного поста (упрощенная версия)
function showPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        alert(`Пост: ${post.title}\n\n${post.content}`);
    }
}

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Загрузка при готовности DOM
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
});
