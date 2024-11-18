# Proyecto: SuRótulo - Diseño de Interfaces Web

Este proyecto es un sistema de diseño web dinámico y responsivo creado para **SuRótulo**, utilizando tecnologías como **HTML**, **SCSS** y **JavaScript**. El proyecto organiza eficientemente recursos y lógica para crear una experiencia de usuario fluida y visualmente atractiva.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```plaintext
├── public/            # Archivos públicos y recursos estáticos
│   ├── fonts/         # Tipografías personalizadas
│   ├── img/           # Imágenes del proyecto
│   ├── pdf/           # Archivos PDF visualizables/descargables
│   ├── svg/           # Gráficos SVG
│   └── vid/           # Videos del proyecto
├── web/               # Archivos procesados para producción
│   ├── css/           # Hojas de estilo CSS compiladas
│   │   ├── main.css   # Archivo CSS principal
│   │   └── main.css.map # Archivo para depuración SCSS
│   └── js/            # Archivos JavaScript
│       ├── animations.js  # Animaciones (menú toggle, etc.)
│       ├── video.js       # Video hero dinámico
│       ├── documents.js   # Lógica para PDFs dinámicos
│       ├── footer.js      # Footer dinámico
│       ├── header.js      # Header dinámico
│       ├── main.js        # Archivo principal que importa la lógica
│       └── video.js       # Controlador de videos
├── sass/              # Archivos SCSS para estilos personalizados
│   ├── _variables.scss  # Variables globales para estilos
│   ├── _reset.scss      # Estilos iniciales base
│   ├── _header.scss     # Estilos del header
│   ├── _footer.scss     # Estilos del footer
│   ├── _hero.scss       # Estilos del hero principal
│   ├── _tipografia.scss # Estilos tipográficos
│   ├── _contacto.scss   # Página de contacto
│   ├── _documentos.scss # Página de documentos
│   ├── _articulos.scss  # Página de artículos
│   ├── _servicios.scss  # Página de servicios
│   └── main.scss        # Archivo SCSS principal
├── contacto.html       # Página de contacto
├── documentos.html     # Página para visualizar PDFs
├── index.html          # Página principal
├── productos.html      # Página de productos
├── servicios.html      # Página de servicios
└── favicon.ico         # Ícono del sitio
```

---

## Instalación y configuración

### **1. Clonar el repositorio**

```bash
git clone <URL-DEL-REPOSITORIO>
```

### **2. Instalar dependencias (opcional)**

Si deseas personalizar el SCSS, asegúrate de tener instalado **Sass**.

### **3. Compilar SCSS a CSS**

Utiliza este comando para generar el archivo CSS:

```bash
sass web/sass/main.scss web/css/main.css
```

### **4. Abrir la aplicación**

Abre el archivo `index.html` en tu navegador para explorar las funcionalidades.

---

## Características principales

- **SCSS estructurado:** Modularización con estilos personalizados para cada sección.
- **JavaScript dinámico:**
  - Header y footer que se adaptan según la página activa.
  - Visualización y descarga de PDFs desde el navegador.
  - Animaciones interactivas (menú toggle).
- **Diseño responsivo:** Adaptado para desktop, tablets y móviles.
- **Gráficos originales:** Imágenes, logos y videos creados específicamente para este proyecto.

---

## Próximos pasos

- Implementar lógica para cargar videos en resolución adaptativa según el dispositivo.
- Optimizar el rendimiento de los recursos gráficos para mejorar la velocidad de carga.
- Añadir más interactividad a la interfaz mediante animaciones avanzadas.

---

## Licencia

Este proyecto está licenciado bajo los términos de la **MIT License**. Consulta el archivo `LICENSE` para más detalles.

---

**Autor:** [Tu Nombre o Usuario de GitHub]
