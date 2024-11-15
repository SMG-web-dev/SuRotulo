import { setupAnimations } from './animations.js';
import { setupDocuments } from './documents.js';
import { Footer } from './footer.js';
import { Header } from './header.js';

customElements.define('su-header', Header);
customElements.define('su-footer', Footer);

document.addEventListener('DOMContentLoaded', () => {
    setupAnimations();
    setupDocuments();

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

    // Mantener componentes en memoria
    keepInMemory('su-header');
    keepInMemory('su-footer');
});

// Función para mantener componentes en memoria
function keepInMemory(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const clone = element.cloneNode(true);
        clone.style.display = 'none';
        document.body.appendChild(clone);
    }
}

// Función para cambiar de página sin recargar
function changePage(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const newDocument = parser.parseFromString(html, 'text/html');
            const newContent = newDocument.querySelector('main');
            const currentContent = document.querySelector('main');
            currentContent.replaceWith(newContent);
            history.pushState(null, '', url);
            setupAnimations();
            setupDocuments(); // Add this line to setup documents after page change
        })
        .catch(error => console.error('Error al cambiar de página:', error));
}

// Manejar la navegación del historial
window.addEventListener('popstate', () => {
    changePage(window.location.href);
});

// Interceptar clics en enlaces internos
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
        event.preventDefault();
        changePage(event.target.href);
    }
});