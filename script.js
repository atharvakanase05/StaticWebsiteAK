// Smooth fade-in effect for the content on page load
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.section');
    if (section) {
      section.style.opacity = 0;
      section.style.transform = 'translateY(30px)';
      setTimeout(() => {
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
      }, 100);
    }
  });
  