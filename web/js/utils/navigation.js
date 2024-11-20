export function setupDynamicNavigation() {
    window.addEventListener('popstate', () => {
        changePage(window.location.href, false);
    });

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (link && link.href.startsWith(window.location.origin)) {
            event.preventDefault();
            changePage(link.href);
        }
    }, { passive: false });
}

async function changePage(url, pushState = true) {
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