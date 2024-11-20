import { optimizeImage, downloadImage, debounce, throttle } from './utils/performance.js';
import { setupIntersectionObserver } from './utils/lazyLoad.js';
import { setupDynamicNavigation } from './utils/navigation.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { setupDocuments } from './utils/documents.js';


// Preload critical resources
const preloadResources = () => {
    const criticalResources = [
        { as: 'style', href: './web/css/main.css' },
        { as: 'image', href: './public/img/logo.png' },
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = resource.as;
        link.href = resource.href;
        document.head.appendChild(link);
    });
};

// Define custom elements
customElements.define('su-header', Header);
customElements.define('su-footer', Footer);

// Use async IIFE to avoid blocking the main thread
(async () => {
    // Preload critical resources
    preloadResources();

    // Setup intersection observer for lazy loading
    setupIntersectionObserver();

    // Setup dynamic navigation
    setupDynamicNavigation();

    // Setup documents (if on the documents page)
    if (window.location.pathname.includes('documentos.html')) {
        setupDocuments();
    }

    // Lazy load non-critical modules
    const [{ setupAnimations }, { default: LazyDocuments }] = await Promise.all([
        import('./utils/animations.js'),
        import('./utils/documents.js')
    ]);

    // Setup header navigation
    const header = document.querySelector('su-header');
    if (header) {
        header.addEventListener('navigate', (event) => {
            changePage(event.detail.href);
        });
    }

    // Initialize page-specific components
    initializePageComponents(setupAnimations, LazyDocuments);

    // Setup event listeners
    setupEventListeners();
})();

function initializePageComponents(setupAnimations, LazyDocuments) {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    if (currentPage === 'index.html') {
        setupAnimations();
    } else if (currentPage === 'documentos.html') {
        LazyDocuments();
    }
}

async function changePage(url, pushState = true) {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    if (currentPage === "documentos.html") { location.reload(); }
    try {
        const response = await fetch(url, { method: 'GET', cache: 'no-cache' });
        if (!response.ok) throw new Error('Network response was not ok');
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

    // Update the header active link
    const header = document.querySelector('su-header');
    if (header) {
        header.setActiveLink(window.location.pathname.split("/").pop() || 'index.html');
    }
}

function setupEventListeners() {
    // Optimize image upload
    const uploadInput = document.getElementById('upload');
    if (uploadInput) {
        uploadInput.addEventListener('change', handleImageUpload);
    }

    // Throttle scroll events
    const throttledScroll = throttle(() => {
        // Handle scroll events
        console.log('Scroll event throttled');
    }, 100);

    // Debounce resize events
    const debouncedResize = debounce(() => {
        // Handle resize events
        console.log('Resize event debounced');
    }, 250);

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', debouncedResize, { passive: true });

    // Implement requestIdleCallback for non-critical tasks
    if ('requestIdleCallback' in window) {
        requestIdleCallback(performNonCriticalTasks);
    } else {
        setTimeout(performNonCriticalTasks, 1);
    }
}

async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const optimizedBlob = await optimizeImage(file, 'image/webp', 0.7);
        downloadImage(optimizedBlob, `optimized-${file.name}`);
        console.log('Imagen optimizada y descargada correctamente.');
    } catch (error) {
        console.error('Error al optimizar la imagen:', error);
    }
}

function performNonCriticalTasks() {
    // Perform non-critical tasks here
    console.log('Performing non-critical tasks');
}