export const SERVICES_DATA = [
  {
    id: 'programado',
    imageSrc: '/src/assets/images/servicios/servicio-programado.svg',
    title: 'Programado',
    subtitle: 'Empodera tu negocio con envíos on-demand',
    subtitleParagraph: 'Servicios de envíos con entregas en un rango de 3 días y tarifa plana según cobertura.',
    steps: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
              </svg>`,
        step: 'Paso 1:',
        title: 'Programa',
        text: 'De Lunes a Viernes de 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-truck">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              </svg>`,
        step: 'Paso 2:',
        title: 'Lo recogemos',
        text: 'Desde el mismo día de programación, entre la 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-package-export">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12v9" />
                <path d="M12 12l-8 -4.5" />
                <path d="M15 18h7" />
                <path d="M19 15l3 3l-3 3" />
              </svg>`,
        step: 'Paso 3:',
        title: 'Lo entregamos',
        text: 'En un rango de 3 días como máximo, a elección, hasta máximo las 7pm'
      }
    ],
    for: [
      {
        title: 'E-Commerce',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Retail',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-share">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>`
      },
      {
        title: 'Marketplace',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building-store">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                <path d="M5 21l0 -10.15" />
                <path d="M19 21l0 -10.15" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>`
      }
    ],
    benefits: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-month flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M7 14h.013" />
                <path d="M10.01 14h.005" />
                <path d="M13.01 14h.005" />
                <path d="M16.015 14h.005" />
                <path d="M13.015 17h.005" />
                <path d="M7.01 17h.005" />
                <path d="M10.01 17h.005" />
              </svg>`,
        title: 'Horarios flexibles',
        description: 'Programa recogida y entrega según tu agenda.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-clock-check flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
                <path d="M12 7v5l3 3" />
                <path d="M15 19l2 2l4 -4" />
              </svg>`,
        title: 'Siempre puntuales',
        description: 'Entregas siempre a tiempo.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-checkup-list flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                <path d="M9 14h.01" />
                <path d="M9 17h.01" />
                <path d="M12 16l1 1l3 -3" />
              </svg>`,
        title: 'Planificación fácil',
        description: 'Facilita la planificación de envíos.'
      }
    ],
    recomended: [
      {
        title: 'Ropa',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shirt-sport w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                <path d="M10.5 11h2.5l-1.5 5" />
              </svg>`
      },
      {
        title: 'Calzado',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shoe w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
                <path d="M14 13l1 -2" />
                <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
                <path d="M10 12l1.5 -3" />
              </svg>`
      },
      {
        title: 'Tecnología',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
              </svg>`
      },
      {
        title: 'Documentos',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>`
      },
      {
        title: 'Accesorios',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-headset w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
              </svg>`
      },
      {
        title: 'Mas',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Bebida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bottle w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                <path
                  d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" />
                <path
                  d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" />
              </svg>`
      },
      {
        title: 'Comida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cheese w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
                <path
                  d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
                <path d="M15 13v.01" />
                <path d="M8 13v.01" />
                <path d="M11 16v.01" />
              </svg>`
      },
      {
        title: 'Armas',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-flame w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>`
      },
    ]
  },
  {
    id: 'sameday',
    imageSrc: '/src/assets/images/servicios/servicio-sameday.svg',
    title: 'SameDay',
    subtitle: 'Planifica la recogida y entrega en el mismo día',
    subtitleParagraph: 'Nuestro servicio garantiza la recogida y entrega de paquetes el mismo día. Ideal para envíos urgentes, aseguramos rapidez y eficiencia.',
    steps: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
              </svg>`,
        step: 'Paso 1:',
        title: 'Programa',
        text: 'De Lunes a Viernes de 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-truck">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              </svg>`,
        step: 'Paso 2:',
        title: 'Lo recogemos',
        text: 'El mismo día, entre la 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-package-export">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12v9" />
                <path d="M12 12l-8 -4.5" />
                <path d="M15 18h7" />
                <path d="M19 15l3 3l-3 3" />
              </svg>`,
        step: 'Paso 3:',
        title: 'Lo entregamos',
        text: 'Durante el día en ruta hasta máximo las 7pm'
      }
    ],
    for: [
      {
        title: 'E-Commerce',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Retail',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-share">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>`
      },
      {
        title: 'Marketplace',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building-store">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                <path d="M5 21l0 -10.15" />
                <path d="M19 21l0 -10.15" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>`
      }
    ],
    benefits: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cube-send flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
                <path d="M11 9.5v5.5l5 3" />
                <path d="M16 12.545l5 -3.03" />
                <path d="M7 9h-5" />
                <path d="M7 12h-3" />
                <path d="M7 15h-1" />
              </svg>`,
        title: 'Entrega rápida',
        description: 'Entrega el mismo día garantizada.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-automation flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17 22l5 -3l-5 -3z" />
              </svg>`,
        title: 'Procesos eficientes',
        description: 'Procesos optimizados para urgencias.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-clock-shield flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 12a9 9 0 1 0 -8.98 9" />
                <path d="M12 7v5l1 1" />
                <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
              </svg>`,
        title: 'Envíos seguros',
        description: 'Manejo seguro de documentos y paquetes.'
      }
    ],
    recomended: [
      {
        title: 'Ropa',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shirt-sport w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                <path d="M10.5 11h2.5l-1.5 5" />
              </svg>`
      },
      {
        title: 'Calzado',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shoe w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
                <path d="M14 13l1 -2" />
                <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
                <path d="M10 12l1.5 -3" />
              </svg>`
      },
      {
        title: 'Tecnología',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
              </svg>`
      },
      {
        title: 'Documentos',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>`
      },
      {
        title: 'Accesorios',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-headset w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
              </svg>`
      },
      {
        title: 'Mas',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Bebida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bottle w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                <path
                  d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" />
                <path
                  d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" />
              </svg>`
      },
      {
        title: 'Comida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cheese w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
                <path
                  d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
                <path d="M15 13v.01" />
                <path d="M8 13v.01" />
                <path d="M11 16v.01" />
              </svg>`
      },
      {
        title: 'Armas',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-flame w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>`
      },
    ]
  },
  {
    id: 'expres',
    imageSrc: '/src/assets/images/servicios/servicio-expres.svg',
    title: 'Exprés',
    subtitle: 'Entregas rápidas y prioritarias para envíos urgentes',
    subtitleParagraph: '¿Buscas la máxima rapidez en tus envíos? Este servicio ofrece entregas prioritarias en el menor tiempo posible, sin comprometer la seguridad ni la eficiencia.',
    steps: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
              </svg>`,
        step: 'Paso 1:',
        title: 'Programa',
        text: 'De Lunes a Viernes de 9am y 12am'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-truck">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              </svg>`,
        step: 'Paso 2:',
        title: 'Lo recogemos',
        text: 'El mismo día, entre la 9am y 11am'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-package-export">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12v9" />
                <path d="M12 12l-8 -4.5" />
                <path d="M15 18h7" />
                <path d="M19 15l3 3l-3 3" />
              </svg>`,
        step: 'Paso 3:',
        title: 'Lo entregamos',
        text: 'De forma prioritaria, hasta máximo las 18pm'
      }
    ],
    for: [
      {
        title: 'E-Commerce',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Retail',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-share">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>`
      },
      {
        title: 'Marketplace',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building-store">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                <path d="M5 21l0 -10.15" />
                <path d="M19 21l0 -10.15" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>`
      },
      {
        title: 'Empresas y negocios',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M9 8l1 0" />
                <path d="M9 12l1 0" />
                <path d="M9 16l1 0" />
                <path d="M14 8l1 0" />
                <path d="M14 12l1 0" />
                <path d="M14 16l1 0" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
              </svg>`
      }
    ],
    benefits: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 8a3 3 0 0 1 0 6" />
                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
                <path
                  d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
              </svg>`,
        title: 'Máxima prioridad',
        description: 'Envíos tratados con máxima urgencia.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cube-send flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
                <path d="M11 9.5v5.5l5 3" />
                <path d="M16 12.545l5 -3.03" />
                <path d="M7 9h-5" />
                <path d="M7 12h-3" />
                <path d="M7 15h-1" />
              </svg>`,
        title: 'Entrega veloz',
        description: 'Entregas en tiempo récord.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                <path
                  d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
                <path d="M12.5 15.5l2 2" />
                <path d="M15 13l2 2" />
              </svg>`,
        title: 'Servicio confiable',
        description: 'Servicio rápido y seguro.'
      }
    ],
    recomended: [
      {
        title: 'Ropa',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shirt-sport w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                <path d="M10.5 11h2.5l-1.5 5" />
              </svg>`
      },
      {
        title: 'Calzado',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shoe w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
                <path d="M14 13l1 -2" />
                <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
                <path d="M10 12l1.5 -3" />
              </svg>`
      },
      {
        title: 'Tecnología',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
              </svg>`
      },
      {
        title: 'Documentos',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>`
      },
      {
        title: 'Accesorios',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-headset w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
              </svg>`
      },
      {
        title: 'Mas',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Bebida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bottle w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                <path
                  d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" />
                <path
                  d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" />
              </svg>`
      },
      {
        title: 'Comida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cheese w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
                <path
                  d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
                <path d="M15 13v.01" />
                <path d="M8 13v.01" />
                <path d="M11 16v.01" />
              </svg>`
      },
      {
        title: 'Armas',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-flame w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>`
      },
    ]
  },
  {
    id: 'inhouse',
    imageSrc: '/src/assets/images/servicios/servicio-inhouse.svg',
    title: 'Inhouse',
    subtitle: 'Cuenta con un rider dedicado 100% a tu empresa',
    subtitleParagraph: 'Servicio part-time y full-time de riders para el envío de tus productos y documentos.',
    steps: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bike">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" />
                <path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>`,
        step: 'Paso 1:',
        title: 'Beneficio',
        text: 'Rider dedicado 100% a tus requerimientos'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-packages">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
                <path d="M2 13.5v5.5l5 3" />
                <path d="M7 16.545l5 -3.03" />
                <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
                <path d="M12 19l5 3" />
                <path d="M17 16.5l5 -3" />
                <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
                <path d="M7 5.03v5.455" />
                <path d="M12 8l5 -3" />
              </svg>`,
        step: 'Paso 2:',
        title: 'Beneficio',
        text: 'Garantía y respaldo de IGO COURIER'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-lock-square">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              </svg>`,
        step: 'Paso 3:',
        title: 'Beneficio',
        text: 'Riders capacitados y comprometidos'
      }
    ],
    for: [
      {
        title: 'Empresas y negocios',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M9 8l1 0" />
                <path d="M9 12l1 0" />
                <path d="M9 16l1 0" />
                <path d="M14 8l1 0" />
                <path d="M14 12l1 0" />
                <path d="M14 16l1 0" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
              </svg>`
      }
    ],
    benefits: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                <path d="M3 9l4 0" />
              </svg>`,
        title: 'Mensajero dedicado',
        description: 'Envíos tratados con máxima urgencia.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-automation flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M13 20.693c-.905 .628 -2.36 .292 -2.675 -1.01a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492 .362 1.716 2.219 .674 3.03" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17 22l5 -3l-5 -3z" />
              </svg>`,
        title: 'Operación eficiente',
        description: 'Integración perfecta con tus operaciones.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-components flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12l3 3l3 -3l-3 -3z" />
              <path d="M15 12l3 3l3 -3l-3 -3z" />
              <path d="M9 6l3 3l3 -3l-3 -3z" />
              <path d="M9 18l3 3l3 -3l-3 -3z" />
            </svg>`,
        title: 'Control total',
        description: 'Mayor control sobre los envíos.'
      }
    ],
    recomended: [
      {
        title: 'Ropa',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shirt-sport w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                <path d="M10.5 11h2.5l-1.5 5" />
              </svg>`
      },
      {
        title: 'Calzado',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shoe w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
                <path d="M14 13l1 -2" />
                <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
                <path d="M10 12l1.5 -3" />
              </svg>`
      },
      {
        title: 'Tecnología',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
              </svg>`
      },
      {
        title: 'Documentos',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>`
      },
      {
        title: 'Accesorios',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-headset w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
              </svg>`
      },
      {
        title: 'Mas',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Bebida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bottle w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                <path
                  d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" />
                <path
                  d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" />
              </svg>`
      },
      {
        title: 'Comida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cheese w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
                <path
                  d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
                <path d="M15 13v.01" />
                <path d="M8 13v.01" />
                <path d="M11 16v.01" />
              </svg>`
      },
      {
        title: 'Armas',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-flame w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>`
      },
    ]
  },
  {
    id: 'mensajeria',
    imageSrc: '/src/assets/images/servicios/servicio-mensajeria.svg',
    title: 'Mensajería',
    subtitle: 'Perfecto para documentos y pequeños paquetes en la ciudad',
    subtitleParagraph: 'Este servicio asegura la entrega rápida y segura, garantizando la confiabilidad y eficiencia en cada entrega.',
    steps: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
              </svg>`,
        step: 'Paso 1:',
        title: 'Programa',
        text: 'De Lunes a Viernes de 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-truck">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              </svg>`,
        step: 'Paso 2:',
        title: 'Lo recogemos',
        text: 'El mismo día, entre la 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-package-export">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12v9" />
                <path d="M12 12l-8 -4.5" />
                <path d="M15 18h7" />
                <path d="M19 15l3 3l-3 3" />
              </svg>`,
        step: 'Paso 3:',
        title: 'Lo entregamos',
        text: 'Durante el día en ruta hasta máximo las 7pm'
      }
    ],
    for: [
      {
        title: 'Retail',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-share">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>`
      },
      {
        title: 'Personas naturales',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>`
      },
      {
        title: 'Empresas y negocios',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M9 8l1 0" />
                <path d="M9 12l1 0" />
                <path d="M9 16l1 0" />
                <path d="M14 8l1 0" />
                <path d="M14 12l1 0" />
                <path d="M14 16l1 0" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
              </svg>`
      }
    ],
    benefits: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail-fast flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7h3" />
                <path d="M3 11h2" />
                <path
                  d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z" />
                <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" />
              </svg>`,
        title: 'Rápido y local',
        description: 'Entregas rápidas en la ciudad.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-map-search flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                <path d="M9 4v13" />
                <path d="M15 7v5" />
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M20.2 20.2l1.8 1.8" />
              </svg>`,
        title: 'Seguimiento fácil',
        description: 'Monitorea tus envíos en tiempo real.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shield-check flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                <path d="M15 19l2 2l4 -4" />
              </svg>`,
        title: 'Entrega segura',
        description: 'Manejo seguro de documentos.'
      }
    ],
    recomended: [
      {
        title: 'Ropa',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shirt-sport w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                <path d="M10.5 11h2.5l-1.5 5" />
              </svg>`
      },
      {
        title: 'Calzado',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shoe w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
                <path d="M14 13l1 -2" />
                <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
                <path d="M10 12l1.5 -3" />
              </svg>`
      },
      {
        title: 'Tecnología',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
              </svg>`
      },
      {
        title: 'Documentos',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>`
      },
      {
        title: 'Accesorios',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-headset w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
              </svg>`
      },
      {
        title: 'Mas',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Bebida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bottle w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                <path
                  d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" />
                <path
                  d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" />
              </svg>`
      },
      {
        title: 'Comida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cheese w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
                <path
                  d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
                <path d="M15 13v.01" />
                <path d="M8 13v.01" />
                <path d="M11 16v.01" />
              </svg>`
      },
      {
        title: 'Armas',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-flame w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>`
      },
    ]
  },
  {
    id: 'ecommerce',
    imageSrc: '/src/assets/images/servicios/servicio-ecommerce.svg',
    title: 'E-commerce',
    subtitle: 'Diseñado para tiendas en línea, con envíos rápidos y seguros',
    subtitleParagraph: 'Garantizamos que tus productos lleguen a tus clientes puntualmente, mejorando la experiencia de compra.',
    steps: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
                <path d="M18 16.496v1.504l1 1" />
              </svg>`,
        step: 'Paso 1:',
        title: 'Programa',
        text: 'De Lunes a Viernes de 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-truck">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              </svg>`,
        step: 'Paso 2:',
        title: 'Lo recogemos',
        text: 'Desde el mismo día de programación, entre la 9am y 1pm'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-package-export">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12v9" />
                <path d="M12 12l-8 -4.5" />
                <path d="M15 18h7" />
                <path d="M19 15l3 3l-3 3" />
              </svg>`,
        step: 'Paso 3:',
        title: 'Lo entregamos',
        text: 'En un rango de 3 días como máximo, a elección, hasta máximo las 7pm'
      }
    ],
    for: [
      {
        title: 'E-Commerce',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Retail',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-user-share">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>`
      },
      {
        title: 'Marketplace',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-building-store">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                <path d="M5 21l0 -10.15" />
                <path d="M19 21l0 -10.15" />
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>`
      },
      {
        title: 'Personas naturales',
        svg: `<svg xmlns="http://www.w3.org/2000/svg"  width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>`
      }
    ],
    benefits: [
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-settings flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              </svg>`,
        title: 'Fácil integración',
        description: 'Compatible con plataformas de comercio.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-gps flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 17l-1 -4l-4 -1l9 -4z" />
              </svg>`,
        title: 'Rastreo constante',
        description: 'Rastreo en tiempo real.'
      },
      {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-user-star flex justify-center items-center my-4 w-28 h-28 rounded-full text-igo-light-icon mx-auto">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
              <path
                d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>`,
        title: 'Clientes satisfechos',
        description: 'Mejora la experiencia del cliente.'
      }
    ],
    recomended: [
      {
        title: 'Ropa',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shirt-sport w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                <path d="M10.5 11h2.5l-1.5 5" />
              </svg>`
      },
      {
        title: 'Calzado',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shoe w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
                <path d="M14 13l1 -2" />
                <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
                <path d="M10 12l1.5 -3" />
              </svg>`
      },
      {
        title: 'Tecnología',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
              </svg>`
      },
      {
        title: 'Documentos',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>`
      },
      {
        title: 'Accesorios',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-headset w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
              </svg>`
      },
      {
        title: 'Mas',
        ok: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>`
      },
      {
        title: 'Bebida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-bottle w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" />
                <path
                  d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" />
                <path
                  d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" />
              </svg>`
      },
      {
        title: 'Comida',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cheese w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
                <path
                  d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
                <path d="M15 13v.01" />
                <path d="M8 13v.01" />
                <path d="M11 16v.01" />
              </svg>`
      },
      {
        title: 'Armas',
        ok: false,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-flame w-20 h-20 mx-auto text-igo-dark-bg dark:text-igo-light-icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
              </svg>`
      },
    ]
  }
];
