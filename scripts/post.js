document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (!slug) return;

  fetch('posts/posts.json')
    .then(res => res.json())
    .then(posts => {
      const post = posts.find(p => p.slug === slug);
      const container = document.getElementById('post-content');
      if (!post || !container) {
        if (container) container.textContent = 'Post not found.';
        return;
      }
      document.title = post.title;
      container.querySelector('h1').textContent = post.title;
      container.querySelector('.date').textContent = `Date: ${post.date}`;
      container.querySelector('.content').innerHTML = post.content;
    })
    .catch(err => {
      console.error('Error loading post', err);
    });
});
