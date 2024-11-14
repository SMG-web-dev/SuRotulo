// main.js

import { setupAnimations } from './animations.js';
import { setupDocuments } from './documents.js';
import { Footer } from './footer.js';
import { Header } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
    setupAnimations();
    setupDocuments();
    customElements.define('su-header', Header);
    customElements.define('su-footer', Footer);
});


