// Botón de menú móvil
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Año dinámico en el footer
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Animaciones al hacer scroll
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach(item => observer.observe(item));

// Botón volver arriba
const scrollTopBtn = document.querySelector('.scroll-top');

const toggleScrollTop = () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
};

window.addEventListener('scroll', toggleScrollTop);

toggleScrollTop();

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Filtro de proyectos por categoria (solo en proyectos.html)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projects__grid .card[data-category]');

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');

      projectCards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ').filter(Boolean);
        const shouldShow = filter === 'all' || categories.includes(filter);
        card.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });
}
