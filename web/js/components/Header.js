export class Header extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
        this.navLinks = [
            { href: 'index.html', text: '🏠 Inicio' },
            { href: 'productos.html', text: '🛍️ Productos' },
            { href: 'servicios.html', text: '💼 Servicios' },
            { href: 'contacto.html', text: '📞 Contacto' },
            { href: 'documentos.html', text: '📄 Documentos' }
        ];
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = this.createHeaderHTML();
        this.appendChild(template.content.cloneNode(true));
        this.setActiveLink();
    }

    createHeaderHTML() {
        const navLinks = this.navLinks.map(link => 
            `<a href="${link.href}" class="nav-link">${link.text}</a>`
        ).join('');

        return `
            <header>
                <div class="navbar-container">
                    <div class="logo">
                        <a href="/" class="logo-link">
                            <img src="./public/img/logo.png" alt="SuRótulo Logo" loading="lazy" />
                        </a>
                    </div>
                    <nav>${navLinks}</nav>
                    <div class="header-actions">
                        <button class="menu-toggle" aria-label="Menú" aria-expanded="false">
                            <img src="./public/svg/menu.svg" alt="Menú" />
                        </button>
                    </div>
                </div>
            </header>
        `;
    }

    setupEventListeners() {
        this.querySelector('.menu-toggle').addEventListener('click', this.toggleMenu.bind(this));
        document.addEventListener('click', this.closeMenuOutside.bind(this));
        this.setupNavLinks();
    }

    toggleMenu(event) {
        event.stopPropagation();
        this.isOpen = !this.isOpen;
        this.updateMenuState();
    }

    closeMenuOutside(event) {
        if (this.isOpen && !this.contains(event.target)) {
            this.isOpen = false;
            this.updateMenuState();
        }
    }

    updateMenuState() {
        const nav = this.querySelector('nav');
        const menuToggle = this.querySelector('.menu-toggle');
        nav.classList.toggle('show-mobile-nav', this.isOpen);
        menuToggle.setAttribute('aria-expanded', this.isOpen.toString());
        menuToggle.innerHTML = this.isOpen 
            ? '<img src="./public/svg/x.svg" alt="Cerrar" />' 
            : '<img src="./public/svg/menu.svg" alt="Menú" />';
    }

    setupNavLinks() {
        this.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', this.handleNavLinkClick.bind(this));
        });
    }

    handleNavLinkClick(event) {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        this.setActiveLink(href);
        window.history.pushState({}, '', href);
        this.dispatchEvent(new CustomEvent('navigate', { detail: { href } }));

        if (window.innerWidth <= 768) {
            this.isOpen = false;
            this.updateMenuState();
        }
    }

    setActiveLink(currentPage = window.location.pathname.split("/").pop() || 'index.html') {
        this.querySelectorAll('nav a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === currentPage);
        });
    }
}