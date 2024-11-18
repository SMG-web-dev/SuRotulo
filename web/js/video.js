document.addEventListener('DOMContentLoaded', () => {
    const videoContainerSelector = '.hero__video-bg';
    const videoSources = {
        desktop: './public/vid/fitz2k.mp4',
        mobile: './public/vid/fitz480p.mp4',
    };

    function determineVideoSource() {
        const isDesktop = window.innerWidth >= 1024; // Define 1024px como el umbral para desktop
        return isDesktop ? videoSources.desktop : videoSources.mobile;
    }

    function loadResponsiveVideo() {
        const videoContainer = document.querySelector(videoContainerSelector);
        if (!videoContainer) return;

        // Registrar la fuente correcta
        const selectedSource = determineVideoSource();

        // Crear una nueva etiqueta video con la fuente seleccionada
        const newVideo = document.createElement('video');
        newVideo.className = 'hero__video-bg';
        newVideo.autoplay = true;
        newVideo.muted = true;
        newVideo.loop = true;
        newVideo.playsInline = true;

        const sourceElement = document.createElement('source');
        sourceElement.src = selectedSource;
        sourceElement.type = 'video/mp4';

        newVideo.appendChild(sourceElement);

        // Reemplazar el contenido actual
        videoContainer.replaceWith(newVideo);
    }

    // Cargar el video al abrir el index.html
    loadResponsiveVideo();

    // Manejar navegación dinámica
    document.addEventListener('pageChanged', () => {
        if (window.location.pathname.endsWith('index.html')) {
            loadResponsiveVideo();
        }
    });
});
