document.addEventListener('DOMContentLoaded', () => {
  // Animación del header al hacer scroll
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.classList.add('header-scroll');
      header.classList.remove('header-visible');
    } else {
      header.classList.remove('header-scroll');
      header.classList.add('header-visible');
    }
    lastScrollTop = scrollTop;
  });

  // Cambio de tema (claro/oscuro)
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    themeToggle.querySelector('img').src = isDarkTheme ? '/svg/moon.svg' : '/svg/sun.svg';
    themeToggle.querySelector('img').alt = isDarkTheme ? 'Modo oscuro' : 'Modo claro';
  });

  // Menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show-mobile-nav');
  });

  // Animación de entrada para los artículos en la página de productos
  const articles = document.querySelectorAll('.articulos article');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const articleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('article-visible');
        articleObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  articles.forEach(article => {
    articleObserver.observe(article);
  });

  // Validación del formulario de contacto
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Aquí iría la lógica de validación y envío del formulario
      alert('Formulario enviado con éxito!');
    });
  }
});