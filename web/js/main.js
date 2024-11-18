import { setupIntersectionObserver } from './utils/lazyLoad.js';
import { setupDynamicNavigation } from './utils/navigation.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { setupDocuments } from './utils/documents.js';

// Lazy load components
const LazyAnimations = import('./utils/animations.js');
const LazyDocuments = import('./utils/documents.js');

customElements.define('su-header', Header);
customElements.define('su-footer', Footer);

document.addEventListener('DOMContentLoaded', async () => {
    setupIntersectionObserver();
    setupDynamicNavigation();
    setupDocuments();

    const header = document.querySelector('su-header');
    header.addEventListener('navigate', (event) => changePage(event.detail.href));

    // Preload logo
    const logoImg = new Image();
    logoImg.src = './public/img/logo.png';

    // Initialize components based on current page
    initializePageComponents();
});

async function initializePageComponents() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';

    if (currentPage === 'index.html') {
        const { setupAnimations } = await LazyAnimations;
        setupAnimations();
    } else if (currentPage === 'documentos.html') {
        const { setupDocuments } = await LazyDocuments;
        setupDocuments();
    }
}

async function changePage(url, pushState = true) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const newDocument = parser.parseFromString(html, 'text/html');

        updateContent(newDocument);

        if (pushState) {
            history.pushState(null, '', url);
        }

        initializePageComponents();

        document.dispatchEvent(new CustomEvent('pageChanged', { detail: { url } }));
    } catch (error) {
        console.error('Error al cambiar de página:', error);
    }
}

function updateContent(newDocument) {
    const newContent = newDocument.querySelector('main');
    const currentContent = document.querySelector('main');
    if (newContent && currentContent) {
        currentContent.replaceWith(newContent);
    }

    const newFooter = newDocument.querySelector('su-footer');
    const currentFooter = document.querySelector('su-footer');
    if (newFooter && currentFooter) {
        currentFooter.replaceWith(newFooter);
    }
}