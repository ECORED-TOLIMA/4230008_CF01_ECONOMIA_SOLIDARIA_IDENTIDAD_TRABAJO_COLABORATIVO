export default {
  global: {
    Name: 'Fundamentos de la economía solidaria y cultura organizacional',
    Description:
      'El componente formativo aborda los fundamentos de la economía solidaria y su relación con la cultura organizacional, permitiendo comprender sus principios, valores, modelos de gestión y dinámica interna. Asimismo, fortalece el análisis del talento humano, el emprendimiento y el entorno productivo, facilitando la toma de decisiones y la construcción de iniciativas sostenibles en contextos territoriales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.svg',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Economía solidaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto del modelo solidario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelos organizativos del sector',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principios orientadores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Valores solidarios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normatividad aplicable en Colombia',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Oportunidades y riesgos del modelo asociativo',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cultura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de cultura en las organizaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelos de gestión institucional',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sentido de pertenencia en las organizaciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Elementos de la cultura organizacional',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Metodologías de diagnóstico organizacional',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Gestión del cambio en la organización',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Talento humano en organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Necesidades del talento humano',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Liderazgo en organizaciones solidarias',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Emprendimiento solidario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de emprendimiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características del emprendedor',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Competencias emprendedoras ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sector productivo y análisis de actores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Identificación del sector productivo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Mapa de actores',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Mapa de empatía',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Cultura organizacional',
      significado:
        'conjunto de valores, creencias, normas y prácticas que orientan el comportamiento de las personas dentro de una organización.',
    },
    {
      termino: 'Economía solidaria',
      significado:
        'modelo económico y social basado en la cooperación, la equidad y el bienestar colectivo, en el que se prioriza a las personas sobre el capital.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'proceso de creación y desarrollo de iniciativas que generan valor económico, social o comunitario.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'capacidad de orientar, motivar y acompañar a un grupo para alcanzar objetivos comunes.',
    },
    {
      termino: 'Mapa de actores',
      significado:
        'herramienta que permite identificar y analizar personas, organizaciones o entidades que influyen en una iniciativa, comunidad o sector productivo.',
    },
    {
      termino: 'Mapa de empatía',
      significado:
        'herramienta que permite comprender necesidades, intereses, emociones y comportamientos de los actores relacionados con una iniciativa o comunidad.',
    },
    {
      termino: 'Principios solidarios',
      significado:
        'lineamientos que orientan el funcionamiento de las organizaciones solidarias, como la participación democrática, la cooperación, la autonomía y el compromiso con la comunidad.',
    },
    {
      termino: 'Sector productivo',
      significado:
        'conjunto de actividades económicas que producen bienes o prestan servicios en un territorio.',
    },
    {
      termino: 'Talento humano',
      significado:
        'conjunto de capacidades, habilidades, conocimientos y actitudes de las personas que integran una organización.',
    },
    {
      termino: 'Valores organizacionales',
      significado:
        'creencias y criterios compartidos que guían las acciones, decisiones y relaciones dentro de una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2009). Comportamiento organizacional: La dinámica del éxito en las organizaciones (2.ª ed.). México: McGraw-Hill.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1988). Ley 79 de 1988: Por la cual se actualiza la legislación cooperativa.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1998). Ley 454 de 1998: Por la cual se determina el marco conceptual que regula la economía solidaria.',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia.',
    },
    {
      referencia:
        'Coraggio, J. L. (2011). Economía social y solidaria: El trabajo antes que el capital. Quito: Abya-Yala.',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de la Economía Solidaria (DANSOCIAL). (2010). Manual para la promoción, creación y fortalecimiento de organizaciones de economía solidaria.',
    },
    {
      referencia:
        'Kliksberg, B. (2003). Hacia una economía con rostro humano. Buenos Aires: Fondo de Cultura Económica.',
    },
    {
      referencia:
        'Pinzón, J. (2012). Manual para la promoción, creación y gestión de empresas de economía solidaria. Bogotá: Ecoe Ediciones.',
    },
    {
      referencia:
        'Razeto, L. (1997). Los caminos de la economía de solidaridad. Santiago de Chile: Vivarium.',
    },
    {
      referencia:
        'Robbins, S. P., & Judge, T. A. (2017). Comportamiento organizacional (17.ª ed.). México: Pearson.',
    },
    {
      referencia:
        'Singer, P. (2002). Introducción a la economía solidaria. São Paulo: Fundación Perseu Abramo.',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2023). Informe del sector solidario en Colombia.',
      link: 'https://www.supersolidaria.gov.co',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
