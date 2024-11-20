export class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupFooterNavigation();
  }

  render() {
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
  }

  renderBrand() {
    return `
          <div class="brand">
              <div class="logo">
                  <img src="./public/img/logo.png" alt="SuRótulo Logo" width="150" height="50" loading="lazy" />
              </div>
              <p>Transformando espacios con diseños innovadores y sostenibles.</p>
              <div class="social-links">
                  <a href="#" aria-label="Facebook">
                      <img src="./public/svg/facebook.svg" alt="Facebook" width="24" height="24" />
                  </a>
                  <a href="#" aria-label="Instagram">
                      <img src="./public/svg/instagram.svg" alt="Instagram" width="24" height="24" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                      <img src="./public/svg/linkedin.svg" alt="LinkedIn" width="24" height="24" />
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
                      <img src="./public/svg/map-pin.svg" alt="Ubicación" width="24" height="24" />
                      <span>123 Calle Principal, Ciudad</span>
                  </div>
                  <div class="contact-item">
                      <img src="./public/svg/phone.svg" alt="Teléfono" width="24" height="24" />
                      <span>+34 123 456 789</span>
                  </div>
                  <div class="contact-item">
                      <img src="./public/svg/mail.svg" alt="Email" width="24" height="24" />
                      <span>info@surotulo.com</span>
                  </div>
              </div>
          </div>
      `;
  }

  renderFooterNav(currentPage) {
    const pages = [
      { href: 'index.html', text: '🏠 Inicio' },
      { href: 'productos.html', text: '🛍️ Productos' },
      { href: 'servicios.html', text: '💼 Servicios' },
      { href: 'contacto.html', text: '📞 Contacto' },
      { href: 'documentos.html', text: '📄 Documentos' }
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
                  <form id="newsletter-form">
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
    this.querySelectorAll('.footer-navlink').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.href;
        this.changePage(url);
      });
    });

    const newsletterForm = this.querySelector('#newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
    }
  }

  async changePage(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error al cargar la página');

      const html = await response.text();
      const parser = new DOMParser();
      const newDocument = parser.parseFromString(html, 'text/html');

      const newContent = newDocument.querySelector('main');
      const currentContent = document.querySelector('main');
      if (currentContent && newContent) {
        currentContent.replaceWith(newContent);
      }

      history.pushState(null, '', url);
      this.connectedCallback();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error al cambiar de página:', error);
    }
  }

  handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    console.log(`Suscripción al boletín: ${email}`);
    // Aquí iría la lógica para manejar la suscripción al boletín
    event.target.reset();
  }
}