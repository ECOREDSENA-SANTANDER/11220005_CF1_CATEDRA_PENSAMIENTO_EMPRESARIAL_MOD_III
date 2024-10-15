export default {
  global: {
    componenteFormativo: 'La gestión del riesgo en la empresa.',
    descripcionCurso:
      'Este componente formativo aborda la gestión de riesgos como herramienta clave para mitigar incertidumbres y crear valor en las empresas, destacando la importancia de una estructura gerencial adecuada. Se explora el proceso de la gestión del riesgo de manera integral y su impacto la toma de decisiones gerenciales, incluyendo también una profundización en el análisis y plan de mejoramiento de la gestión del riesgo, así como la relevancia de la gerencia de recursos humanos en la consecución de los objetivos corporativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Principios y marco de referencia de la gestión del riesgo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso de la gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: ' Comunicación y consulta',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Alcance, contexto y criterios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Evaluación y tratamiento del riesgo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Seguimiento, revisión, registro e informe',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La gerencia y la dirección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'El directivo como elemento dinámico de la empresa',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'La gerencia del mercadeo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: ' La gerencia de los recursos humanos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis de la gestión del riesgo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de mejoramiento de la gestión de riesgo',
        desarrolloContenidos: true,
        subMenu: [],
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Gestión del riesgo',
      referencia: '',
      tipo: 'Norma',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=74790 ',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  referencias: [
    {
      referencia: '',
      link:
        'https://calidadengestiondeproyectos.com/2019/06/02/el-analisis-riesgo-de-octave-allegro/',
    },
    {
      referencia: '',
      link:
        'https://www.pdcahome.com/8293/gestion-de-riesgos-por-que-debemos-gestionar-los-riesgos/',
    },
    {
      referencia: '',
      link:
        'https://www.ins.gov.co/Direcciones/RedesSaludPublica/GestiondeCalidadLaboratorios/Lineamientos%20Calidad/lineamiento%20de%20gesti%C3%B3n%20del%20riesgo.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Cuellar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder línea de producción',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor Pedagógica',
          centro:
            'Centro Industrial de Mantenimiento Integral - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
