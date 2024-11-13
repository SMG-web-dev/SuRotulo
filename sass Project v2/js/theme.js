// theme.js
export function setupTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const logo = document.querySelector('.logo img');

    function setTheme(isLight) {
        body.classList.toggle('light-theme', isLight);
        themeToggle.querySelector('img').src = isLight ? './svg/moon.svg' : './svg/sun.svg';
        themeToggle.querySelector('img').alt = isLight ? 'Modo oscuro' : 'Modo claro';
        logo.src = isLight ? './public/logo.png' : './public/logo.png';
        localStorage.setItem('lightTheme', isLight);
    }

    const savedTheme = localStorage.getItem('lightTheme');
    setTheme(savedTheme === 'true');

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.contains('light-theme');
        setTheme(!isLight);
    });
}