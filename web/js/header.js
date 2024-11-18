export class Header extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="navbar-container">
          <div class="logo">
            <a href="/" class="logo-link">
              <img src="./public/img/logo.png" alt="SuRótulo Logo" />
            </a>
          </div>
          <nav>
            <a href="index.html" class="nav-link">🏠 Inicio</a>
            <a href="productos.html" class="nav-link">🛍️ Productos</a>
            <a href="servicios.html" class="nav-link">💼 Servicios</a>
            <a href="contacto.html" class="nav-link">📞 Contacto</a>
            <a href="documentos.html" class="nav-link">📄 Documentos</a>
          </nav>
          <div class="header-actions">
            <button class="menu-toggle" aria-label="Menú" aria-expanded="false">
              <img src="./public/svg/menu.svg" alt="Menú" />
            </button>
          </div>
        </div>
      </header>
    `;
    this.setActiveLink();
  }

  setupEventListeners() {
    const menuToggle = this.querySelector('.menu-toggle');
    const nav = this.querySelector('nav');

    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      this.isOpen = !this.isOpen;
      nav.classList.toggle('show-mobile-nav', this.isOpen);
      menuToggle.setAttribute('aria-expanded', this.isOpen);
      menuToggle.innerHTML = this.isOpen ? '<img src="./public/svg/x.svg" alt="Cerrar" />' : '<img src="./public/svg/menu.svg" alt="Menú" />';
    });

    document.addEventListener('click', (event) => {
      if (this.isOpen && !this.contains(event.target)) {
        this.isOpen = false;
        nav.classList.remove('show-mobile-nav');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<img src="./public/svg/menu.svg" alt="Menú" />';
      }
    });

    this.setActiveLink();

    const navLinks = this.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        this.setActiveLink(href);
        if (href === 'index.html') {
          this.reloadHeroVideo();
        }
        window.history.pushState({}, '', href);
        this.dispatchEvent(new CustomEvent('navigate', { detail: { href } }));

        // Cerrar el menú móvil después de hacer clic en un enlace
        if (window.innerWidth <= 768) {
          this.isOpen = false;
          nav.classList.remove('show-mobile-nav');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.innerHTML = '<img src="./public/svg/menu.svg" alt="Menú" />';
        }
      });
    });
  }

  setActiveLink(currentPage = window.location.pathname.split("/").pop() || 'index.html') {
    const links = this.querySelectorAll('nav a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  reloadHeroVideo() {
    const heroVideo = document.querySelector('.hero__video-bg');
    if (heroVideo) {
      heroVideo.load();
      heroVideo.play().catch(error => {
        console.error('Error al reproducir el video:', error);
      });
    }
  }
}