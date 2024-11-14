
export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="logo">
          <img src="./public/logo.png" alt="SuRótulo Logo" />
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
    const header = this.querySelector('.su-header');
    if (window.scrollY > 50) {
      header.classList.add('header-scroll');
      header.classList.remove('header-visible');
    } else {
      header.classList.remove('header-scroll');
      header.classList.add('header-visible');
    }
  }

  setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const links = this.querySelectorAll('nav a');
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
  }
}
