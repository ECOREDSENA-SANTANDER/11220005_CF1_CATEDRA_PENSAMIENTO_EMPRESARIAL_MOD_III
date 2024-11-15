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
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_11220005_DU.zip',
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
      tema:
        '1. Principios y marco de referencia de la gestión del riesgo. <br><br>2. Proceso de la gestión del riesgo. ',
      referencia:
        'Universidad Privada del Valle (2018). NTC-ISO 31000 – Gestión del riesgo. Directrices. ',
      tipo: 'PDF – Norma. ',
      link:
        'https://www.studocu.com/bo/document/universidad-privada-del-valle/gestion-de-la-calidad-y-normativa-internacional/ntc-iso-31000-de-2018/12055552',
    },
    {
      tema:
        '1. Principios y marco de referencia de la gestión del riesgo. <br><br>2. Proceso de la gestión del riesgo. ',
      referencia:
        'Virtual Training Lteam. (4 de junio de 2019). ISO 31000:2018 Gestión del Riesgo. [Video]. YouTube. ',
      tipo: 'Video. ',
      link: 'https://www.youtube.com/watch?v=k5gblbzHeFI ',
    },
  ],
  referencias: [
    {
      referencia:
        'CONDUCE TU EMPRESA. (Agosto de 2014). ¿Qué es la Gestión de Riesgos? Objetivos, Características, Tipos y Etapas.',
      link:
        ' http://blog.conducetuempresa.com/2012/11/existe-la-perfeccion-en-las-empresas.html',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública - DAFP. (2011). Guía para la administración del riesgo',
      link:
        'https://www1.funcionpublica.gov.co/documents/418537/506911/1592.pdf/73e5a159-2d8f-41aa-8182-eb99e8c4f3ba',
    },
    {
      referencia:
        'Empresa COPEC S.A. (Diciembre de 2017). Política de gestión de riesgos.',
      link:
        'https://www.empresascopec.cl/wp-content/uploads/2020/03/Politica-de-Gestion-de-Riesgos.pdf',
    },
    {
      referencia:
        'FREMM. (2007). Manual Prevención de Riesgos Laborales, para Autónomos del Sector Metal de la Región de Murcia.',
      link:
        'http://www.fremm.es/portal/pagina/263/Prevencion_de_Riesgos_Laborales_para_Autonomos_del_Sector_del_Metal.html',
    },
    {
      referencia: 'Galarce, Y. (5 de Agosto de 2009). Gestión de Riesgos.',
      link:
        ' https://www.monografias.com/trabajos73/gestion-riesgos/gestion-riesgos5',
    },
    {
      referencia:
        'Universidad Privada del Valle (2018). NTC-ISO 31000 – Gestión del riesgo. Directrices. ',
      link:
        'https://www.studocu.com/bo/document/universidad-privada-del-valle/gestion-de-la-calidad-y-normativa-internacional/ntc-iso-31000-de-2018/12055552',
    },
    {
      referencia:
        'Luengas Torres, M. E. (2008). Incorporación la gestión del riesgo en instituciones educativas del municipio de patios.  ',
      link: '',
    },
    {
      referencia:
        'Mendoza, M. A. (13 de Diciembre de 2022). 8 pasos para la evaluación de riesgos de ciberseguridad de una empresa (parte I).',
      link:
        'https://www.welivesecurity.com/la-es/2022/12/13/8-pasos-evaluacion-de-riesgos-1/',
    },
    {
      referencia:
        'Mendoza, M. A. (13 de Diciembre de 2022). 8 pasos para la evaluación de riesgos de ciberseguridad de una empresa (parte II).',
      link:
        'https://www.welivesecurity.com/la-es/2022/12/13/8-pasos-evaluacion-de-riesgos-2/',
    },
    {
      referencia:
        'Pinar Quezada, A. (s.f.). Conceptos introductorios de gestión de riesgos. Universidad Técnica Federico Santa María.',
      link:
        'https://www.inf.utfsm.cl/~lhevia/asignaturas/proy_ti/topicos/Memorias/LECTURA_Riesgos-Pinar.doc',
    },
    {
      referencia:
        'Presidencia de la República de Colombia - Oficina de Planeación. (2013). Gestión de riesgos.',
      link:
        'http://wsp.presidencia.gov.co/dapre/sigepre/Documents/Novedades/DAPRE-Gestion-riesgos-SIGEPRE2013.pdf',
    },
    {
      referencia:
        'Tremper, C. (s.f.). Cómo elaborar un plan de gestión de riesgos.',
      link:
        ' http://es.wikihow.com/elaborar-un-plan-de-gesti%C3%B3n-de-riesgos',
    },
  ],
  glosario: [
    {
      termino: 'Capital humano',
      significado:
        'Recurso estratégico de la empresa compuesto por las competencias, habilidades y conocimientos del personal.',
    },
    {
      termino: 'Comunicación y consulta',
      significado:
        'Proceso que facilita la comprensión del riesgo, promoviendo la toma de conciencia y obteniendo retroalimentación que mejora la toma de decisiones en la gestión del riesgo.',
    },
    {
      termino: 'Criterios de riesgo',
      significado:
        'eterminaciones sobre la cantidad y tipo de riesgo que una organización está dispuesta a asumir, alineados con sus objetivos, valores y expectativas de las partes interesadas.',
    },
    {
      termino: 'Estructura gerencial',
      significado:
        'organización de roles y responsabilidades dentro de la empresa, esencial para garantizar una posición competitiva y facilitar la implementación de la gestión del riesgo.',
    },
    {
      termino: 'Evaluación del desempeño',
      significado:
        'proceso de valoración periódica de la eficacia del marco de gestión del riesgo, asegurando que continúe alineado con los objetivos organizacionales y se realicen los ajustes necesarios.',
    },
    {
      termino: 'Incentivos',
      significado:
        'beneficios ofrecidos al personal para motivar su desempeño y productividad. Los incentivos pueden incluir bonificaciones, reconocimientos o programas especiales de desarrollo profesional que favorecen el compromiso del equipo con los objetivos empresariales.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'enfoque que busca adaptar y optimizar el marco de gestión del riesgo de manera constante, aprendiendo de experiencias pasadas y ajustando estrategias para maximizar el valor.',
    },
    {
      termino: 'Retribución',
      significado:
        'compensación económica otorgada a los empleados por su trabajo y desempeño. Esta puede estar compuesta de salario base y adicionales según los resultados y contribuciones al éxito de la empresa. ',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'elemento diferenciador que permite a la empresa sobresalir frente a la competencia. Puede lograrse a través de la innovación, la eficiencia, y una clara identificación de las necesidades del mercado.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
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
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
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
          nombre: 'Laura Paola Gelvez Manosalva',
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
