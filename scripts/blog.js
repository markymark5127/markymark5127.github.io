document.addEventListener('DOMContentLoaded', () => {
  fetch('posts/posts.json')
    .then(res => res.json())
    .then(posts => {
      const list = document.getElementById('blog-list');
      if (!list) return;
      posts.forEach(post => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = post.file;
        a.textContent = `${post.title} - ${post.date}`;
        li.appendChild(a);
        list.appendChild(li);
      });
    })
    .catch(err => {
      console.error('Error loading posts', err);
    });
});
