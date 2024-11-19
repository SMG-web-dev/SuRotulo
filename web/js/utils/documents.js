export function setupDocuments() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const buttons = document.querySelectorAll('.document-btn');
    const pdfContainer = document.querySelector('.pdf-container');

    // Función para detectar iOS
    function isIOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            // iPad on iOS 13 detection
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    if (isIOS()) {
        pdfContainer.classList.add('ios');
        location.reload();
    }

    if (pdfViewer && buttons.length > 0) {
        // Cargar el PDF almacenado o el primero por defecto
        const savedPdfUrl = localStorage.getItem('selectedPdf');
        let initialPdfUrl = savedPdfUrl || buttons[0].getAttribute('data-pdf');
        pdfViewer.src = initialPdfUrl;

        // Marcar el botón activo correspondiente
        buttons.forEach(button => {
            const pdfUrl = button.getAttribute('data-pdf');
            if (pdfUrl === initialPdfUrl) {
                button.classList.add('active');
            }

            // Agregar el evento de clic a cada botón
            button.addEventListener('click', () => {
                pdfViewer.src = pdfUrl;
                localStorage.setItem('selectedPdf', pdfUrl); // Guardar el PDF seleccionado

                // Actualizar la clase activa
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
}
