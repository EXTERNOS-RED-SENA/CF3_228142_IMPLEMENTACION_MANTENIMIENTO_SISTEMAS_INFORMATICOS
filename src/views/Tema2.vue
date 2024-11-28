<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diseño de infraestructura
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        img.img-fluid.img-a(src='@/assets/curso/temas/tema2/img1.svg')
      .col-lg-7
        p El diseño de infraestructura en redes de telecomunicaciones es un proceso integral que abarca la planificación, implementación y mantenimiento de los componentes físicos y lógicos necesarios para soportar una red eficiente y escalable. Este diseño incluye la selección y configuración de equipos, la disposición de los cables y la organización de los espacios físicos donde se alojan los equipos de red.
      .col-lg-3
        img.img-fluid.img-a(src='@/assets/curso/temas/tema2/img2.png')
    Separador
    #t_2_1.titulo-segundo.color-acento-botones.mt-5
      h2 2.1 Subsistemas de cableado estructurado
    p.mb-4 El cableado estructurado es una infraestructura de telecomunicaciones que consiste en una serie de estándares que especifican cómo se deben instalar los cables en un edificio o campus para soportar una amplia gama de servicios de telecomunicaciones. Este tipo de cableado es importante para la implementación de redes de datos, voz y video, y se diseña para ser flexible y escalable, permitiendo la fácil adición, movimiento o cambio de dispositivos y servicios.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Clases de subsistemas de cableado estructurado
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        h5 Subsistema de cableado horizontal
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg6.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')
        p
          b Descripción: 
          | este subsistema incluye los cables que conectan los dispositivos de usuario final, como computadoras y teléfonos, con los puntos de distribución en el cuarto de telecomunicaciones.
      .col-md.tarjeta.bg1.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')
        p
          b Componentes: 
          | cables de par trenzado no apantallado (UTP), cables de fibra óptica, conectores RJ-45, paneles de parcheo.
      .col-md.tarjeta.bg9.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')
        p
          b Funciones: 
          | proporciona conectividad a los usuarios finales y dispositivos de red, permitiendo la transmisión de datos, voz y video.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        h5 Subsistema de cableado vertical
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg6.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')
        p
          b Descripción: 
          | este subsistema incluye los cables que conectan los cuartos de telecomunicaciones en diferentes pisos o edificios.
      .col-md.tarjeta.bg1.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')
        p
          b Componentes: 
          | cables de fibra óptica, cables de par trenzado apantallado (STP), conductos de cableado, paneles de parcheo.
      .col-md.tarjeta.bg9.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')
        p
          b Funciones: 
          | proporciona interconexión entre los cuartos de telecomunicaciones, permitiendo la transmisión de datos entre diferentes áreas de la red.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        h5 Subsistema de cableado de campus
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg6.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')
        p
          b Descripción: 
          | este subsistema incluye los cables que conectan los edificios en un campus o área geográfica amplia.
      .col-md.tarjeta.bg1.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')
        p
          b Componentes: 
          | cables de fibra óptica, cables de par trenzado apantallado (STP), conductos de cableado, paneles de parcheo.
      .col-md.tarjeta.bg9.p-5
        .row.mb-4
          .col-2
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')
        p
          b Funciones: 
          | proporciona interconexión entre los edificios, permitiendo la transmisión de datos, voz y video a largas distancias.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Características de los subsistemas de cableado estructurado
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img6.png", alt="alt")
          .crd_hover_txt--body
            h4.text-white.mb-3 Flexibilidad
            p.text-white.mb-0 Los subsistemas de cableado estructurado están diseñados para ser flexibles, permitiendo la fácil adición, movimiento o cambio de dispositivos y servicios sin necesidad de reconfigurar toda la red.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img7.png", alt="alt")
          .crd_hover_txt--body
            h4.text-white.mb-3 Escalabilidad
            p.text-white.mb-0 La infraestructura de cableado estructurado es escalable, lo que significa que puede adaptarse a cambios en la demanda y crecer junto con la red sin una pérdida significativa de rendimiento.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img8.png", alt="alt")
          .crd_hover_txt--body
            h4.text-white.mb-3 Estándares
            p.text-white.mb-0 Los subsistemas de cableado estructurado se basan en estándares internacionales, como TIA/EIA-568 y ISO/IEC 11801, que especifican los tipos de cables, conectores y métodos de instalación.

    Separador
    #t_2_2.titulo-segundo.color-acento-botones.mt-5
      h2 2.2 Cuartos de telecomunicaciones
    
    p.mb-4 Los cuartos de telecomunicaciones son espacios físicos dentro de un edificio o campus donde se alojan los equipos de red, como #[i switches], #[i routers], servidores y paneles de parcheo. Estos cuartos sirven para la gestión y mantenimiento de la red, y deben estar diseñados para proporcionar un entorno seguro y eficiente para los equipos de red.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Clases de cuartos de telecomunicaciones
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          div(titulo="Cuarto de telecomunicaciones principal")
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt")
              .col-lg-11
                p
                  b Descripción: 
                  | este cuarto aloja los equipos de red principales, como los #[i switches] de núcleo y los #[i routers] de borde.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt")
              .col-lg-11
                p
                  b Componentes: 
                  | #[i switches] de núcleo, #[i routers] de borde, servidores, paneles de parcheo, sistemas de alimentación ininterrumpida (UPS).
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt")
              .col-lg-11
                p 
                  b Funciones: 
                  | proporciona la interconexión principal de la red, gestionando el tráfico de datos entre diferentes partes de la red y conectando la red con el mundo exterior.
          div(titulo="Cuarto de telecomunicaciones intermedio")
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt")
              .col-lg-11
                p
                  b Descripción: 
                  | este cuarto aloja los equipos de red intermedios, como los #[i switches] de distribución y los #[i routers] de acceso.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt")
              .col-lg-11
                p
                  b Componentes: 
                  | #[i switches] de distribución, #[i routers] de acceso, paneles de parcheo, sistemas de alimentación ininterrumpida (UPS).
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt")
              .col-lg-11
                p 
                  b Funciones: 
                  | proporciona la interconexión intermedia de la red, gestionando el tráfico de datos entre los cuartos de telecomunicaciones principales y los cuartos de telecomunicaciones de acceso.
             
          div(titulo="Cuarto de telecomunicaciones de acceso")
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt")
              .col-lg-11
                p
                  b Descripción: 
                  | este cuarto aloja los equipos de red de acceso, como los #[i switches] de acceso y los puntos de acceso inalámbricos.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt")
              .col-lg-11
                p
                  b Componentes: 
                  | #[i switches] de acceso, puntos de acceso inalámbricos, paneles de parcheo, sistemas de alimentación ininterrumpida (UPS).
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt")
              .col-lg-11
                p 
                  b Funciones: 
                  | proporciona la conectividad de acceso a los usuarios finales y dispositivos de red, gestionando el tráfico de datos en el nivel de acceso.
             
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Características de los cuartos de telecomunicaciones
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-4
            .col-3
              figure
                img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen')
          h5 Control ambiental
          p Los cuartos de telecomunicaciones deben estar equipados con sistemas de control ambiental, como aire acondicionado y sistemas de ventilación, para mantener una temperatura y humedad adecuadas para los equipos de red.
      .col-lg-4
        .tarjeta.bg4.p-4.h-100
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen')
          h5 Control ambiental
          p Los cuartos de telecomunicaciones deben estar equipados con sistemas de control ambiental, como aire acondicionado y sistemas de ventilación, para mantener una temperatura y humedad adecuadas para los equipos de red.
      .col-lg-4
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-4
            .col-3
              figure
                img(src='@/assets/curso/temas/tema2/img12.svg', alt='Texto que describa la imagen')
          h5 Alimentación ininterrumpida
          p Los cuartos de telecomunicaciones deben estar equipados con sistemas de alimentación ininterrumpida (UPS) para asegurar que los equipos de red sigan funcionando en caso de fallos en la alimentación eléctrica.

    Separador
    #t_2_3.titulo-segundo.color-acento-botones.mt-5
      h2 2.3 Distribución y rutas de cableado
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 La distribución y las rutas de cableado son aspectos del diseño de infraestructura de red. La distribución de cableado se refiere a la disposición física de los cables en el edificio o campus, mientras que las rutas de cableado se refieren a las rutas específicas que siguen los cables para conectar los dispositivos de red.
        TabsA.color-acento-botones.mb-5
          .tarjeta.brad.p-4(titulo="Distribución horizontal")
            h5 Distribución horizontal
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt")
              .col-lg-11
                p
                  b Descripción: 
                  | la distribución horizontal incluye los cables que conectan los dispositivos de usuario final con los puntos de distribución en el cuarto de telecomunicaciones.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt")
              .col-lg-11
                p
                  b Componentes: 
                  | cables de par trenzado no apantallado (UTP), cables de fibra óptica, conectores RJ-45, paneles de parcheo.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt")
              .col-lg-11
                p 
                  b Funciones: 
                  | proporciona conectividad a los usuarios finales y dispositivos de red, permitiendo la transmisión de datos, voz y video.
          .tarjeta.brad.p-4(titulo="Distribución vertical")
            h5 Distribución vertical
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt")
              .col-lg-11
                p
                  b Descripción: 
                  | la distribución vertical incluye los cables que conectan los cuartos de telecomunicaciones en diferentes pisos o edificios.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt")
              .col-lg-11
                p
                  b Componentes: 
                  | cables de fibra óptica, cables de par trenzado apantallado (STP), conductos de cableado, paneles de parcheo.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt")
              .col-lg-11
                p 
                  b Funciones: 
                  | proporciona interconexión entre los cuartos de telecomunicaciones, permitiendo la transmisión de datos entre diferentes áreas de la red.
          .tarjeta.brad.p-4(titulo="Distribución de campus")
            h5 Distribución de campus
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img21.svg", alt="alt")
              .col-lg-11
                p
                  b Descripción: 
                  | la distribución de campus incluye los cables que conectan los edificios en un campus o área geográfica amplia.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img22.svg", alt="alt")
              .col-lg-11
                p
                  b Componentes: 
                  | cables de fibra óptica, cables de par trenzado apantallado (STP), conductos de cableado, paneles de parcheo.
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-1
                img(src="@/assets/curso/temas/tema2/img23.svg", alt="alt")
              .col-lg-11
                p 
                  b Funciones: 
                  | proporciona interconexión entre los edificios, permitiendo la transmisión de datos, voz y video a largas distancias.
      .col-lg-4
        img(src='@/assets/curso/temas/tema2/img16.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
          .tarjeta.tarjeta--tres.bg4.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema2/img17.svg' alt='AvatarTop')
            h5 Organización
            p La distribución y las rutas de cableado deben estar organizadas de manera lógica y estructurada para facilitar la gestión y el mantenimiento de la red.

          .tarjeta.tarjeta--tres.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema2/img18.svg' alt='AvatarTop')
            h5 Protección
            p Los cables deben estar protegidos contra daños físicos y ambientales, utilizando conductos de cableado, bandejas de cableado y otros métodos de protección.

          .tarjeta.tarjeta--tres.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema2/img19.svg' alt='AvatarTop')
            h5 Etiquetado
            p Los cables y los puntos de distribución deben estar claramente etiquetados para facilitar la identificación y la gestión de la red.

          .tarjeta.tarjeta--tres.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema2/img20.svg' alt='AvatarTop')
            h5 Documentación
            p La distribución y las rutas de cableado deben estar documentadas de manera detallada, incluyendo diagramas de cableado, listas de equipos y registros de mantenimiento.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
