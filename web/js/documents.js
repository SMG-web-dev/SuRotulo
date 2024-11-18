// documents.js
export function setupDocuments() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const buttons = document.querySelectorAll('.document-btn');

    if (pdfViewer && buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const pdfUrl = button.getAttribute('data-pdf');
                pdfViewer.src = pdfUrl;
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // Automatically load the first PDF
        const firstPdfUrl = buttons[0].getAttribute('data-pdf');
        if (firstPdfUrl) {
            pdfViewer.src = firstPdfUrl;
            buttons[0].classList.add('active');
        }
    }
}