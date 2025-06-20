
// JavaScript Placeholder
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded and ready!");

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('show');
    });
  }
});
