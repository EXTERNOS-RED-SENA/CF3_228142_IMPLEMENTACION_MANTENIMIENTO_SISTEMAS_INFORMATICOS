export default {
  global: {
    componenteFormativo:
      'Cableado estructurado: diseño e implementación de redes',
    descripcionCurso:
      'El diseño e implementación de redes de telecomunicaciones es base para la conectividad y eficiencia organizacional. El cableado estructurado, que incluye subsistemas horizontales, vertical y de campus, es importante para soportar servicios de datos, voz y video.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Análisis y planificación de redes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos y especificaciones técnicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Topologías y arquitecturas en red',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Dimensionamiento y escalabilidad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Subsistemas de cableado estructurado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cuartos de telecomunicaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Distribución y rutas de cableado',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Implementación de redes físicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diagramas y documentación técnica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos de implementación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Optimización y mejores prácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estándares de calidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Documentación y entregables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de proyectos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conclusiones',
            hash: 't_4_4',
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
      tema: 'Cable estructurado',
      referencia:
        'Duarte, L. [@LeonardoDuarte]. (n.d.). Cableado estructurado.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9G6fxwp9Ix4',
    },
    {
      tema: 'Diseño de infraestructura',
      referencia:
        'Hernández, W. H. [@williamhernandezhernandez9380]. (n.d.). Cableado estructurado.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y9Od-Tmm688',
    },
    {
      tema: 'Diagrama y documentación técnica',
      referencia:
        'Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (n.d.). Conceptos básicos y componentes de una red.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Rr8POxBrOlo&list=PLkc5n6npRWkhW66Y8rGD6IOF2dZUDiApU&index=3',
    },
    {
      tema: 'Estándares de calidad',
      referencia:
        'Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (n.d.-b). Validación de estándares y normatividad vigente.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=bkxr4xMfNJM&list=PLkc5n6npRWkhW66Y8rGD6IOF2dZUDiApU&index=23',
    },
    {
      tema: 'Gestión de proyectos',
      referencia:
        'Recursos Educativos Digitales SENA, E. [@EcosistemaSENAVirtual]. (n.d.-b). Gestión de dispositivos de red.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=slz86MF43YE&list=PLkc5n6npRWkhW66Y8rGD6IOF2dZUDiApU&index=27',
    },
  ],
  glosario: [
    {
      termino: 'Ancho de banda',
      significado:
        'Capacidad de una red para transferir datos en un período de tiempo determinado.',
    },
    {
      termino: 'Arquitectura de red',
      significado:
        'Estructura general de una red que define la organización y comunicación de sus componentes.',
    },
    {
      termino: 'Cableado estructurado',
      significado:
        'Infraestructura de telecomunicaciones que consiste en una serie de estándares para la instalación de cables en un edificio o campus.',
    },
    {
      termino: 'Cableado horizontal',
      significado:
        'Subsistema de cableado que conecta los dispositivos de usuario final con los puntos de distribución en el cuarto de telecomunicaciones.',
    },
    {
      termino: 'Cableado vertical',
      significado:
        'Subsistema de cableado que conecta los cuartos de telecomunicaciones en diferentes pisos o edificios.',
    },
    {
      termino: 'Cat5e',
      significado:
        'Tipo de cable de par trenzado no apantallado que ofrece una velocidad de transmisión de hasta 1 Gbps.',
    },
    {
      termino: 'Cat6',
      significado:
        'Tipo de cable de par trenzado no apantallado que soporta velocidades de transmisión de hasta 10 Gbps.',
    },
    {
      termino: 'Cat6a',
      significado:
        'Tipo de cable de par trenzado no apantallado que soporta velocidades de transmisión de hasta 10 Gbps y ofrece una mejor protección contra interferencias.',
    },
    {
      termino: 'Conectividad',
      significado:
        'Capacidad de los dispositivos de una red para comunicarse entre sí.',
    },
    {
      termino: 'Dispositivos de red',
      significado:
        'Componentes que aseguran la conectividad y el rendimiento de la red, como <em>switches</em>, <em>routers</em> y puntos de acceso.',
    },
    {
      termino: 'Distancia',
      significado:
        'Longitud del cable entre los dispositivos y los puntos de terminación.',
    },
    {
      termino: 'Documentación técnica',
      significado:
        'Conjunto de documentos que proporcionan una representación visual y escrita de la infraestructura de red.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Capacidad de la red para crecer y adaptarse a cambios en la demanda sin una pérdida significativa de rendimiento.',
    },
    {
      termino: 'Fibra óptica',
      significado:
        'Tipo de cable que utiliza luz para transmitir datos, ofreciendo una mayor capacidad de transmisión y resistencia a interferencias.',
    },
    {
      termino: '<em>Firewall</em>',
      significado:
        'Dispositivo de <em>hardware</em> o <em>software</em> que protege la red contra amenazas externas.',
    },
    {
      termino: 'Interferencias',
      significado:
        'Perturbaciones electromagnéticas que afectan la transmisión de datos en cables de cobre.',
    },
    {
      termino: 'Redundancia',
      significado:
        'Implementación de componentes críticos duplicados para asegurar la continuidad del servicio en caso de fallos.',
    },
    {
      termino: '<em>Router</em>',
      significado:
        'Dispositivo de red que gestiona el tráfico entre diferentes segmentos de la red.',
    },
    {
      termino: '<em>Switch</em>',
      significado:
        'Dispositivo de red que proporciona conectividad y gestión de tráfico en la red.',
    },
    {
      termino: 'Topología de red',
      significado:
        'Disposición física y lógica de los dispositivos en una red.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bates, R., Gregory, J., & Peters, G. (2015). <em>Networking Essentials: A CompTIA Network+ N10-006 Textbook</em>.',
      link: '',
    },
    {
      referencia:
        'Cisco Systems. (2020). <em>Cisco Networking Academy: CCNA Routing and Switching</em>.',
      link: '',
    },
    {
      referencia:
        'Davis, J., & Lewis, T. (2016). <em>Networking for Dummies</em>.',
      link: '',
    },
    {
      referencia:
        'ISO/IEC. (2017). ISO/IEC 11801: <em>Information technology — Generic cabling for customer premises</em>.',
      link: '',
    },
    {
      referencia:
        'Kurose, J. F., & Ross, K. W. (2017). <em>Computer Networking: A Top-Down Approach</em>.',
      link: '',
    },
    {
      referencia:
        'Odom, W. (2017). <em>Cisco CCNA Routing and Switching 200-125 Official Cert Guide Library</em>.',
      link: '',
    },
    {
      referencia:
        'Park, K., & Miller, J. (2016). <em>Network+ Guide to Networks</em>.',
      link: '',
    },
    {
      referencia:
        'TIA/EIA. (2017). TIA/EIA-568: <em>Commercial Building Telecommunications Cabling Standard</em>.',
      link: '',
    },
    {
      referencia: 'Tanenbaum, A. S. (2011). <em>Computer Networks</em>.',
      link: '',
    },
    {
      referencia: 'White, R. (2015). <em>How Computers Work</em>.',
      link: '',
    },
  ],
}
