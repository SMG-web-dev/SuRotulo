export class Footer extends HTMLElement {
  connectedCallback() {
    const currentPage = window.location.pathname.split("/").pop();
    const isContactPage = currentPage === 'contacto.html';

    this.innerHTML = `
      <footer>
        <div class="footer-content">
          ${this.renderBrand()}
          ${!isContactPage ? this.renderContactSection() : ''}
          ${this.renderFooterNav(currentPage)}
          ${this.renderFooterActions()}
        </div>
        ${this.renderFooterBottom()}
      </footer>
    `;

    // Configurar navegación con smooth scroll y actualización del contenido
    this.setupFooterNavigation();
  }

  renderBrand() {
    return `
      <div class="brand">
        <div class="logo">
          <img src="./public/img/logo.png" alt="SuRótulo Logo" />
        </div>
        <p>Transformando espacios con diseños innovadores y sostenibles.</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <img src="./svg/facebook.svg" alt="Facebook" class="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="./svg/instagram.svg" alt="Instagram" class="w-6 h-6" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="./svg/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
          </a>
        </div>
      </div>
    `;
  }

  renderContactSection() {
    return `
      <div class="contact">
        <h3>Contacto</h3>
        <div class="contact-info">
          <div class="contact-item">
            <img src="./svg/map-pin.svg" alt="Ubicación" class="location" />
            <span>123 Calle Principal, Ciudad</span>
          </div>
          <div class="contact-item">
            <img src="./svg/phone.svg" alt="Teléfono" class="phone" />
            <span>+34 123 456 789</span>
          </div>
          <div class="contact-item">
            <img src="./svg/mail.svg" alt="Email" class="email" />
            <span>info@surotulo.com</span>
          </div>
        </div>
      </div>
    `;
  }

  renderFooterNav(currentPage) {
    const pages = [
      { href: 'index.html', text: 'Inicio' },
      { href: 'productos.html', text: 'Productos' },
      { href: 'servicios.html', text: 'Servicios' },
      { href: 'contacto.html', text: 'Contacto' },
      { href: 'documentos.html', text: 'Documentos' }
    ];

    const links = pages
      .filter(page => page.href !== currentPage)
      .map(page => `<a href="${page.href}" class="footer-navlink">${page.text}</a>`)
      .join('');

    return `
      <div class="footer-nav">
        <div class="quick-links">
          <h3>Enlaces Rápidos</h3>
          <nav>${links}</nav>
        </div>
      </div>
    `;
  }

  renderFooterActions() {
    return `
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
    `;
  }

  renderFooterBottom() {
    return `
      <div class="footer-bottom">
        <p>&copy; 2023 SuRótulo. Todos los derechos reservados.</p>
        <p>
          <br />Esta obra está bajo una 
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional
          </a>.
        </p>
      </div>
    `;
  }

  setupFooterNavigation() {
    // Interceptar clics en los enlaces del footer
    const navLinks = this.querySelectorAll('.footer-navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.href;

        // Cambiar la página y realizar un smooth scroll al inicio
        this.changePage(url).then(() => {
          document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    });
  }

  async changePage(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error al cargar la página');

      const html = await response.text();
      const parser = new DOMParser();
      const newDocument = parser.parseFromString(html, 'text/html');

      // Reemplazar el contenido principal
      const newContent = newDocument.querySelector('main');
      const currentContent = document.querySelector('main');
      if (currentContent && newContent) {
        currentContent.replaceWith(newContent);
      }

      // Actualizar el estado del historial y el footer
      history.pushState(null, '', url);
      this.connectedCallback(); // Reconstruye el footer dinámicamente
    } catch (error) {
      console.error('Error al cambiar de página:', error);
    }
  }
}
