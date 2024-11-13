// main.js
import { setupTheme } from './theme.js';
import { setupNavigation } from './navigation.js';
import { setupAnimations } from './animations.js';
import { setupDocuments } from './documents.js';
import { Header } from './components.js';
import { Footer } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    setupNavigation();
    setupAnimations();
    setupDocuments();
});

customElements.define('su-header', Header);
customElements.define('su-footer', Footer);
