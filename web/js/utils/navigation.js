export function setupDynamicNavigation() {
    window.addEventListener('popstate', () => {
        changePage(window.location.href, false);
    });

    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
            event.preventDefault();
            changePage(event.target.href);
        }
    });
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