// video.js

// Función para cargar el video con prioridad
function loadVideo() {
    const videoElement = document.querySelector('.hero__video-bg');

    // Cargar el video de manera prioritaria
    if (videoElement) {
        // Añadimos el preload para que el video cargue de inmediato
        videoElement.setAttribute('preload', 'auto');

        // Verificamos si el video ya está guardado en la cookie
        const videoLoaded = getCookie('videoLoaded');
        if (videoLoaded === 'true') {
            videoElement.load(); // Solo recargamos el video si no está en la cookie
        } else {
            // Si no está en la cookie, lo marcamos como cargado
            setCookie('videoLoaded', 'true'); // Guardamos la cookie 
        }
    }
}

// Función para obtener una cookie
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}

// Función para establecer una cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Cuando el documento esté listo, cargamos el video con prioridad
document.addEventListener('DOMContentLoaded', function () {
    if (window.requestIdleCallback) {
        // Usamos requestIdleCallback para dar prioridad a la carga del video
        requestIdleCallback(loadVideo, { timeout: 2000 });
    } else {
        // Si requestIdleCallback no está disponible, lo cargamos inmediatamente
        loadVideo();
    }
});
