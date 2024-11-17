import { setupAnimations } from './animations.js';
import { setupDocuments } from './documents.js';
import { Footer } from './footer.js';
import { Header } from './header.js';

customElements.define('su-header', Header);
customElements.define('su-footer', Footer);

document.addEventListener('DOMContentLoaded', () => {
    setupAnimations();
    setupDocuments();

    const header = document.querySelector('su-header');
    header.addEventListener('navigate', (event) => {
        changePage(event.detail.href);
    });

    // Precarga de la imagen del logo
    const logoImg = new Image();
    logoImg.src = './public/img/logo.png';

    // Uso de IntersectionObserver para carga perezosa de componentes
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });

    // Observar todos los componentes que necesitan carga perezosa
    document.querySelectorAll('.lazy-load').forEach(component => {
        observer.observe(component);
    });

    // Configurar navegación dinámica
    setupDynamicNavigation();
});

// Configurar navegación dinámica
function setupDynamicNavigation() {
    // Manejar la navegación del historial
    window.addEventListener('popstate', () => {
        changePage(window.location.href, false);
    });

    // Interceptar clics en enlaces internos
    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
            event.preventDefault();
            changePage(event.target.href);
        }
    });
}

// Función para cambiar de página sin recargar
function changePage(url, pushState = true) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const newDocument = parser.parseFromString(html, 'text/html');

            // Actualizar el contenido principal
            const newContent = newDocument.querySelector('main');
            const currentContent = document.querySelector('main');
            if (newContent && currentContent) {
                currentContent.replaceWith(newContent);
            }

            // Actualizar el footer
            const newFooter = newDocument.querySelector('su-footer');
            const currentFooter = document.querySelector('su-footer');
            if (newFooter && currentFooter) {
                currentFooter.replaceWith(newFooter);
            }

            // Actualizar la URL en el historial
            if (pushState) {
                history.pushState(null, '', url);
            }

            // Reconfigurar scripts y animaciones
            setupAnimations();
            setupDocuments();
        })
        .catch(error => console.error('Error al cambiar de página:', error));
}
