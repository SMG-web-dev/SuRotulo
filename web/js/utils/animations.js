import { throttle } from './performance.js';

export function setupAnimations() {
    setupHeaderScroll();
    setupArticleAnimations();
}

function setupHeaderScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const throttledScroll = throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } else {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        lastScrollTop = scrollTop;
    }, 100);

    window.addEventListener('scroll', throttledScroll, { passive: true });
}

function setupArticleAnimations() {
    const articles = document.querySelectorAll('.articulos article');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const articleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('article-visible');
                articleObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    articles.forEach(article => {
        articleObserver.observe(article);
    });
}