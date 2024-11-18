document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.querySelector('.hero__video-bg');
    const sources = videoElement.querySelectorAll('source');

    function updateVideoSource() {
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

        // Asignar la fuente adecuada según el dispositivo
        sources.forEach((source) => {
            if (isDesktop && source.src.includes('2k')) {
                videoElement.src = source.src;
            } else if (!isDesktop && source.src.includes('480p')) {
                videoElement.src = source.src;
            }
        });

        // Recargar el video para reflejar los cambios
        videoElement.load();
    }

    // Actualizar la fuente al cargar la página
    updateVideoSource();

    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', updateVideoSource);
});
