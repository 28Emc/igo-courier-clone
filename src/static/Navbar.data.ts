export interface Navbar {
  logoSrc: string;
  textLogo?: string;
  enlaces: EnlacesDirectos[];
  acciones: Acciones[];
};

export interface EnlacesDirectos {
  texto: string;
  href?: string;
  children?: EnlacesDirectos[];
};

export interface Acciones {
  texto: string;
  href: string;
  svg?: string;
  target: '_blank' | '_self';
  cssClasses?: string;
};


export const NAVBAR_DATA: Navbar = {
  logoSrc: '/src/assets/images/logotipo-sin-fondo.svg',
  textLogo: 'Igo Courier',
  enlaces: [
    { texto: 'Inicio', href: '/' },
    {
      texto: 'Servicios', children: [
        { texto: 'Programado', href: '/servicios/programado' },
        { texto: 'SameDay', href: '/servicios/sameday' },
        { texto: 'Exprés', href: '/servicios/expres' },
        { texto: 'Inhouse', href: '/servicios/inhouse' },
        { texto: 'Mensajería', href: '/servicios/mensajeria' },
        { texto: 'E-commerce', href: '/servicios/ecommerce' }
      ]
    },
    { texto: 'Nosotros', href: '/nosotros' },
    { texto: 'Contacto', href: '/contacto' }
  ],
  acciones: [
    {
      texto: 'Cotizador',
      href: '/cotizador',
      target: '_blank',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-math-symbols">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12l18 0" />
        <path d="M12 3l0 18" />
        <path d="M16.5 4.5l3 3" />
        <path d="M19.5 4.5l-3 3" />
        <path d="M6 4l0 4" />
        <path d="M4 6l4 0" />
        <path d="M18 16l.01 0" />
        <path d="M18 20l.01 0" />
        <path d="M4 18l4 0" />
      </svg>
      `,
      cssClasses: 'text-igo-light-text bg-igo-light-bg-button hover:bg-igo-hover-bg-button hover:text-igo-light-bg'
    },
    {
      texto: 'Zona clientes',
      href: 'https://fontend.igo.pe',
      target: '_blank',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
      </svg>
      `,
      cssClasses: 'text-white bg-igo-dark-bg dark:text-black dark:bg-igo-light-bg'
    },
    {
      texto: 'Registro',
      href: 'https://fontend.igo.pe/pages/authentication/register-v2',
      target: '_blank',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-user-plus">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
      </svg>
      `,
      cssClasses: 'text-white bg-igo-dark-bg dark:text-black dark:bg-igo-light-bg'
    }
  ]
};
