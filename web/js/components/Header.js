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
                            <img src="./public/img/logo.png" alt="SuRótulo Logo" loading="lazy" width="150" height="50" />
                        </a>
                    </div>
                    <nav>${navLinks}</nav>
                    <div class="header-actions">
                        <button class="menu-toggle" aria-label="Menú" aria-expanded="false">
                            <img src="./public/svg/menu.svg" alt="Menú" width="24" height="24" />
                        </button>
                    </div>
                </div>
            </header>
        `;
    }

    setupEventListeners() {
        const menuToggle = this.querySelector('.menu-toggle');
        menuToggle.addEventListener('click', this.toggleMenu.bind(this));
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
            ? '<img src="./public/svg/x.svg" alt="Cerrar" width="24" height="24" />'
            : '<img src="./public/svg/menu.svg" alt="Menú" width="24" height="24" />';
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