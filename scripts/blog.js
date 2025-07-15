document.addEventListener('DOMContentLoaded', () => {
  fetch('posts/posts.json')
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('blog-posts');
      if (!container) return;
      posts.forEach(post => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = post.title;

        const dateP = document.createElement('p');
        dateP.textContent = `Date: ${post.date}`;

        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = post.content;

        article.appendChild(h2);
        article.appendChild(dateP);
        article.appendChild(contentDiv);
        container.appendChild(article);
      });
    })
    .catch(err => {
      console.error('Error loading posts', err);
    });
});
