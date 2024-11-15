export class Header extends HTMLElement {
  constructor() {
    super();
    this.lastScrollTop = 0;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <header class="header-visible">
        <div class="logo">
          <img src="./public/img/logo.png" alt="SuRótulo Logo" />
        </div>
        <nav>
          <a href="index.html">🏠 Inicio</a>
          <a href="productos.html">🛍️ Productos</a>
          <a href="servicios.html">💼 Servicios</a>
          <a href="contacto.html">📞 Contacto</a>
          <a href="documentos.html">📄 Documentos</a>
        </nav>
        <div class="header-actions">
          <button class="menu-toggle" aria-label="Menú" aria-expanded="false">
            <img src="./svg/menu.svg" alt="Menú" />
          </button>
        </div>
      </header>
    `;
    this.setActiveLink();
  }

  setupEventListeners() {
    const menuToggle = this.querySelector('.menu-toggle');
    const nav = this.querySelector('nav');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show-mobile-nav');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('show-mobile-nav'));
    });

    window.addEventListener('scroll', this.handleScroll.bind(this));

    this.setActiveLink();
  }

  handleScroll() {
    const header = this.querySelector('header');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop && currentScrollTop > 50) {
      // Scrolling down
      header.classList.remove('header-visible');
      header.classList.add('header-hidden');
    } else {
      // Scrolling up
      header.classList.remove('header-hidden');
      header.classList.add('header-visible');
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const links = this.querySelectorAll('nav a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}