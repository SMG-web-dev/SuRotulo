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
  const body = document.body;
  const logo = document.querySelector('.logo img');

  function setTheme(isLight) {
    body.classList.toggle('light-theme', isLight);
    themeToggle.querySelector('img').src = isLight ? './svg/moon.svg' : './svg/sun.svg';
    themeToggle.querySelector('img').alt = isLight ? 'Modo oscuro' : 'Modo claro';
    logo.src = isLight ? './public/logoDark.png' : './public/logoLight.png';
    localStorage.setItem('lightTheme', isLight);
  }

  // Verificar la preferencia guardada o usar el modo oscuro por defecto
  const savedTheme = localStorage.getItem('lightTheme');
  setTheme(savedTheme === 'true');

  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light-theme');
    setTheme(!isLight);
  });

  // Menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    nav.classList.toggle('show-mobile-nav');
    menuToggle.setAttribute('aria-expanded', nav.classList.contains('show-mobile-nav'));
  });

  // Cerrar el menú móvil cuando se hace clic fuera de él
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove('show-mobile-nav');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
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

  // Navegación sin recargar
  document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  function navigateTo(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const newDocument = parser.parseFromString(html, 'text/html');
        const newContent = newDocument.querySelector('main');

        document.querySelector('main').replaceWith(newContent);
        window.history.pushState({}, '', url);

        // Actualizar el enlace activo en el header
        document.querySelector('su-header').setActiveLink();

        // Volver a aplicar los event listeners y animaciones
        setupPageSpecificFunctionality();
      });
  }

  function setupPageSpecificFunctionality() {
    // Aquí puedes agregar cualquier funcionalidad específica de la página
    // que necesite ser reinicializada después de la navegación

    // Por ejemplo, para la página de documentos:
    const pdfViewer = document.getElementById('pdf-viewer');
    const buttons = document.querySelectorAll('.document-btn');
    if (pdfViewer && buttons.length > 0) {
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const pdfUrl = button.getAttribute('data-pdf');
          pdfViewer.src = pdfUrl;
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        });
      });
      buttons[0].click();
    }

    // Animación de entrada para los artículos en la página de productos
    const articles = document.querySelectorAll('.articulos article');
    const articleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('article-visible');
          articleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

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
  }

  // Inicializar la funcionalidad específica de la página al cargar
  setupPageSpecificFunctionality();
});