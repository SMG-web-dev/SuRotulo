import { setupIntersectionObserver } from './utils/lazyLoad.js';
import { setupDynamicNavigation } from './utils/navigation.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { setupDocuments } from './utils/documents.js';
import { optimizeImage, downloadImage, debounce, throttle } from './utils/performance.js';

if (performance.getEntriesByType("navigation")[0].type === "navigate") location.reload();
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
    location.reload();
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

// Escucha el evento de selección de archivo
document.getElementById('upload').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
        // Optimiza el archivo a formato .webp
        const optimizedBlob = await optimizeImage(file, 'image/webp', 0.7);

        // Descarga la imagen optimizada
        downloadImage(optimizedBlob, `optimized-${file.name}`);
        console.log('Imagen optimizada y descargada correctamente.');
    } catch (error) {
        console.error('Error al optimizar la imagen:', error);
    }
});

const downloadMp4 = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

// Limita la frecuencia de las descargas a una cada 2 segundos.
const throttledDownload = throttle(downloadMp4, 2000);

// Retrasa la acción de descarga hasta que el usuario deje de interactuar por 1 segundo.
const debouncedDownload = debounce(downloadMp4, 1000);