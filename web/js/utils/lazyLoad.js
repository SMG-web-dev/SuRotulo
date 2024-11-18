export function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                if (entry.target.tagName === 'IMG') {
                    entry.target.src = entry.target.dataset.src;
                }
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });

    document.querySelectorAll('.lazy-load').forEach(component => {
        observer.observe(component);
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        observer.observe(img);
    });
}