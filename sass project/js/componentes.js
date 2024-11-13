// Componente del Header
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="logo">
          <img src="/public/logoLight.png" alt="SuRótulo Logo" />
        </div>
        <nav class="desktop-nav">
          <a href="index.html">Inicio</a>
          <a href="productos.html">Productos</a>
          <a href="servicios.html">Servicios</a>
          <a href="contacto.html">Contacto</a>
          <a href="documentos.html">documentos</a>
        </nav>
        <div class="header-actions">
          <button class="theme-toggle" aria-label="Cambiar tema">
            <img src="/svg/sun.svg" alt="Modo claro" />
          </button>
          <button class="menu-toggle" aria-label="Menú">
            <img src="/svg/menu.svg" alt="Menú" />
          </button>
        </div>
      </header>
    `;

    // Añadir la clase 'active' al enlace de la página actual
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = this.querySelectorAll('nav a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  }
}

// Componente del Footer
class Footer extends HTMLElement {
  connectedCallback() {
    const currentPage = window.location.pathname.split("/").pop();
    const isContactPage = currentPage === 'contacto.html';

    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <div class="brand">
            <div class="logo">
              <img src="/public/logoLight.png" alt="SuRótulo Logo" />
            </div>
            <p>Transformando espacios con diseños innovadores y sostenibles.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">
                <img src="/svg/facebook.svg" alt="Facebook" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/svg/instagram.svg" alt="Instagram" class="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="/svg/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
              </a>
            </div>
          </div>
           ${!isContactPage ? this.renderContactSection() : ''}
          <div class="footer-nav">
            <div class="quick-links">
              <h3>Enlaces Rápidos</h3>
              <nav>
                ${this.renderNavLinks(currentPage)}
              </nav>
            </div>
          </div>
          <div class="footer-actions">
            <div class="newsletter">
              <h3>Boletín</h3>
              <p>Suscríbete para recibir nuestras últimas noticias y ofertas.</p>
              <form>
                <input type="email" placeholder="Tu correo electrónico" required />
                <button type="submit">Suscribirse</button>
              </form>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 SuRótulo. Todos los derechos reservados.</p>
          <p>
            <br />Esta obra está bajo una 
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional
            </a>.
          </p>
        </div>
      </footer>
    `;
  }

  renderNavLinks(currentPage) {
    const pages = [
      { href: 'index.html', text: 'Inicio' },
      { href: 'productos.html', text: 'Productos' },
      { href: 'servicios.html', text: 'Servicios' },
      { href: 'contacto.html', text: 'Contacto' },
      { href: 'documentos.html', text: 'Documentos' }
    ];

    return pages
      .filter(page => page.href !== currentPage)
      .map(page => `<a href="${page.href}">${page.text}</a>`)
      .join('');
  }

  renderContactSection() {
    return `
      <div class="contact">
        <h3>Contacto</h3>
        <div class="contact-info">
          <div class="contact-item">
            <img src="/svg/map-pin.svg" alt="Ubicación" class="location" />
            <span>123 Calle Principal, Ciudad</span>
          </div>
          <div class="contact-item">
            <img src="/svg/phone.svg" alt="Teléfono" class="phone" />
            <span>+34 123 456 789</span>
          </div>
          <div class="contact-item">
            <img src="/svg/mail.svg" alt="Email" class="email" />
            <span>info@surotulo.com</span>
          </div>
        </div>
      </div>
    `;
  }
}

// Registrar los componentes personalizados
customElements.define('su-header', Header);
customElements.define('su-footer', Footer);