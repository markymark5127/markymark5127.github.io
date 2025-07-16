document.addEventListener('DOMContentLoaded', () => {
  fetch('posts/posts.json')
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('blog-posts');
      if (!container) return;
      posts.forEach(post => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const link = document.createElement('a');
        link.href = `post.html?slug=${encodeURIComponent(post.slug)}`;
        link.textContent = post.title;
        h2.appendChild(link);

        const dateP = document.createElement('p');
        dateP.textContent = `Date: ${post.date}`;

        article.appendChild(h2);
        article.appendChild(dateP);
        container.appendChild(article);
      });
    })
    .catch(err => {
      console.error('Error loading posts', err);
    });
});
