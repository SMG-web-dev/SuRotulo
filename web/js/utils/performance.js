// performance.js

/**
 * Limita la frecuencia de ejecución de una función.
 * @param {Function} func - La función a throttlear.
 * @param {number} limit - Tiempo mínimo (en ms) entre ejecuciones.
 * @returns {Function} - Una función throttled.
 */
export function throttle(func, limit) {
    let inThrottle = false;
    return function (...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

/**
 * Retrasa la ejecución de una función hasta que pase un tiempo desde la última llamada.
 * @param {Function} func - La función a debouncificar.
 * @param {number} delay - Tiempo de espera (en ms) antes de ejecutar.
 * @returns {Function} - Una función debounced.
 */
export function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

/**
 * Optimiza imágenes .png y .webp utilizando Canvas API.
 * @param {File} file - El archivo de imagen que se va a optimizar.
 * @param {string} format - Formato de salida ('image/png' o 'image/webp').
 * @param {number} quality - Calidad de la imagen (0 a 1).
 * @returns {Promise<Blob>} - Una Promesa que resuelve con el Blob optimizado.
 */
export async function optimizeImage(file, format = 'image/webp', quality = 0.8) {
    if (!['image/png', 'image/webp'].includes(format)) {
        throw new Error('Formato no soportado. Usa "image/png" o "image/webp".');
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Escalado del tamaño original
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Generar imagen optimizada
                canvas.toBlob(
                    (blob) => {
                        if (blob) resolve(blob);
                        else reject(new Error('Error al generar la imagen optimizada.'));
                    },
                    format,
                    quality
                );
            };
            img.onerror = () => reject(new Error('Error al cargar la imagen.'));
            img.src = reader.result;
        };
        reader.onerror = () => reject(new Error('Error al leer el archivo.'));
        reader.readAsDataURL(file);
    });
}

/**
 * Descarga un Blob optimizado como archivo.
 * @param {Blob} blob - El Blob optimizado que se descargará.
 * @param {string} filename - El nombre del archivo a guardar.
 */
export function downloadImage(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
