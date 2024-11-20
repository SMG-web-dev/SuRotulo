export function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('loaded');
                if (target.tagName === 'IMG' && target.dataset.src) {
                    target.src = target.dataset.src;
                    target.removeAttribute('data-src');
                }
                observer.unobserve(target);
            }
        });
    }, { rootMargin: '50px', threshold: 0.1 });

    document.querySelectorAll('.lazy-load, img[data-src]').forEach(element => {
        observer.observe(element);
    });
}