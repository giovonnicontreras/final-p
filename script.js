// FitForge advanced interactions
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const navList = document.querySelector('.main-nav ul');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      if (navList.style.display === 'flex') {
        navList.style.display = 'none';
      } else {
        navList.style.display = 'flex';
      }
    });
  }

  // Nav active highlighting
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(a => {
    if (location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
    a.addEventListener('click', () => {
      links.forEach(x => x.classList.remove('active'));
      a.classList.add('active');
    });
  });

  // Simple carousel on workouts page
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const imgs = carousel.querySelectorAll('img');
    let cur = 0;
    function show(n) {
      imgs.forEach((im, i) => im.style.display = i === n ? 'block' : 'none');
    }
    show(cur);
    setInterval(() => {
      cur = (cur + 1) % imgs.length;
      show(cur);
    }, 3000);
  }

  // Card hover subtle glow (already has CSS transform, add JS class if visible later)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-in');
        observer.unobserve(e.target);
      }
    });
  }, {threshold:0.2});
  document.querySelectorAll('.card').forEach(card => observer.observe(card));
});
