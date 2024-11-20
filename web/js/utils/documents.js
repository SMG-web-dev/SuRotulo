export function setupDocuments() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const buttons = document.querySelectorAll('.document-btn');
    const pdfContainer = document.querySelector('.pdf-container');

    if (isIOS()) {
        pdfContainer?.classList.add('ios');
    }

    if (pdfViewer && buttons.length > 0) {
        const savedPdfUrl = localStorage.getItem('selectedPdf');
        let initialPdfUrl = savedPdfUrl || buttons[0].getAttribute('data-pdf');
        pdfViewer.src = initialPdfUrl;

        buttons.forEach(button => {
            const pdfUrl = button.getAttribute('data-pdf');
            if (pdfUrl === initialPdfUrl) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                pdfViewer.src = pdfUrl;
                localStorage.setItem('selectedPdf', pdfUrl);
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
}

function isIOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}