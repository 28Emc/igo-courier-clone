# Clon de la página web de IGO COURIER

¡Bienvenido al clon  de la página web de IGO COURIER! Esta página ha sido desarrollada con el framework Astro para propósitos educativos únicamente. No será utilizada para lucrar ni reemplazar la página original de IGO COURIER.

## Índice

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso](#instalación-y-uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Licencia](#licencia)

## Descripción

Este proyecto es un clon educativo de la página web de IGO COURIER, una empresa de envíos nacionales dentro de la ciudad de Lima. Ofrecemos diversos servicios para satisfacer tus necesidades de envío, incluyendo SAMEDAY, PROGRAMADO, EXPRESS, INHOUSE, MENSAJERÍA y E-COMMERCE. El objetivo de este clon es aprender y practicar el desarrollo web utilizando el framework Astro.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```text
├── public
│ ├── assets
│ └── favicon.ico
├── src
│ ├── assets
│ │ ├── images
│ │ │ ├── servicios
│ │ │ │ ├── ...
│ │ ├── ...
│ ├── components
│ ├── layouts
│ ├── pages
│ │ ├── servicios
│ │ │ ├── [servicio].astro
│ │ ├── _app_.ts
│ │ ├── contacto.astro
│ │ ├── cotizador.astro
│ │ ├── index.astro
│ │ ├── libro-reclamaciones.astro
│ │ ├── nosotros.astro
│ │ ├── terminos-y-condiciones.astro
│ ├── services
│ │ ├── ...
│ ├── static
│ │ ├── ...
├── package.json
└── README.md
```

## Instalación y Uso

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/igo-courier-clone.git
   cd igo-courier-clone
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

## Tecnologías Utilizadas

- **Astro**: Framework para generar sitios estáticos rápidos y modernos (utilizado para el sitio web en general).
- **Vue.JS**: Framework de JavaScript (utilizado como isla para los formularios).
- **React**: Framework de JavaScript (utilizado como isla para las notificaciones).
- **JavaScript**: Lenguaje de programación para la funcionalidad del sitio.
- **CSS**: Para el diseño y la apariencia del sitio (TailwindCSS utilizado pr debajo).
- **HTML**: Estructura de las páginas web.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
