document.addEventListener('DOMContentLoaded', () => {
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfDownload = document.getElementById('pdf-download');
    const buttons = document.querySelectorAll('.document-btn');

    function loadPDF(url) {
        pdfViewer.data = url;
        pdfDownload.href = url;

        // Verificar si estamos en un dispositivo móvil o tablet
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // En dispositivos móviles, abrir el PDF en una nueva pestaña
            window.open(url, '_blank');
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const pdfUrl = button.getAttribute('data-pdf');
            loadPDF(pdfUrl);

            // Activar el botón seleccionado
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Cargar el primer PDF por defecto
    if (buttons.length > 0) {
        buttons[0].click();
    }
});