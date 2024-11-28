<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Optimización y mejores prácticas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-4.mb-4.mb-lg-0
        img.img-fluid.img-a(src='@/assets/curso/temas/tema4/img1.svg')
      .col-lg-7
        p La implementación de cableado estructurado es un proceso complejo que requiere una planificación cuidadosa y la adopción de mejores prácticas para asegurar una instalación eficiente y efectiva. La optimización del cableado estructurado no solo mejora el rendimiento de la red, sino que también facilita el mantenimiento y la expansión futura.
      .col-lg-3
        img.img-fluid.img-a(src='@/assets/curso/temas/tema4/img2.png')
    Separador
    #t_4_1.titulo-segundo.color-acento-botones.mt-5
      h2 4.1 Estándares de calidad
    
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4
        .tarjeta--verde.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.brad
                img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
          p 
            b TIA/EIA-568:
            |  Este estándar, desarrollado por la Telecommunications Industry Association (TIA) y la Electronic Industries Alliance (EIA), define las especificaciones para el cableado de telecomunicaciones en edificios comerciales. Incluye directrices sobre la instalación de cables, conectores y otros componentes de red.
      .col-lg-5.mb-4
        .tarjeta--verde.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.brad
                img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')
          p 
            b SO/IEC 11801:
            |  Este estándar, desarrollado por la Organización Internacional de Normalización (ISO) y la Comisión Electrotécnica Internacional (IEC), proporciona directrices para el diseño y la instalación de sistemas de cableado estructurado. Incluye especificaciones para diferentes tipos de cables, como cables de cobre y fibra óptica.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Beneficios de seguir los estándares de calidad
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')


    .row.mb-5
      .col-lg-4.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p
                b Interoperabilidad: 
                | los estándares de calidad aseguran que los componentes de red de diferentes fabricantes sean compatibles entre sí, lo que facilita la integración y el mantenimiento de la red.
      .col-lg-4.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p
                b Rendimiento: 
                | los estándares de calidad garantizan que los componentes de red cumplan con las especificaciones de rendimiento, lo que asegura un funcionamiento óptimo de la red.
      .col-lg-4.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p
                b Escalabilidad: 
                | los estándares de calidad permiten la expansión futura de la red, ya que proporcionan directrices claras sobre cómo deben instalarse y configurarse los componentes adicionales.

    Separador
    #t_4_2.titulo-segundo.color-acento-botones.mt-5
      h2 4.2 Documentación y entregables
    p.mb-5 La documentación y los entregables son elementos propios en la implementación de cableado estructurado. Proporcionan una referencia detallada de la instalación y facilitan el mantenimiento y la expansión futura de la red.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Tipos de documentación
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/tema4/img8.svg", alt="alt")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          div(titulo="Diagramas de cableado")
            p Los diagramas de cableado son representaciones gráficas de la disposición física de los cables y los componentes de red. Incluyen información sobre la ubicación de los cables, los puntos de terminación y las conexiones entre los dispositivos.
          div(titulo="Listas de materiales")
            p Las listas de materiales enumeran todos los componentes utilizados en la instalación, como cables, conectores, paneles de parcheo y otros accesorios. Incluyen detalles sobre la cantidad, el tipo y las especificaciones de cada componente.

          div(titulo="Manuales de instalación")
            p Los manuales de instalación proporcionan instrucciones detalladas sobre cómo instalar y configurar los componentes de red. Incluyen información sobre los procedimientos de instalación, las herramientas necesarias y las precauciones de seguridad.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Beneficios de la documentación
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg11.w-100
            .p-4
              h5.text-center Facilita el mantenimiento
              p La documentación detallada facilita el mantenimiento y la resolución de problemas de la red, ya que proporciona una referencia clara de la instalación.
      .col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg1.w-100
            .p-4
              h5.text-center Servidores
              p Los servidores son mostrados con iconos que indican su tipo y función, como servidores de archivos, servidores de correo electrónico, etc.
      .col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg1.w-100
            .p-4
              h5.text-center Cables y conexiones
              p Los cables y conexiones son representados mediante líneas que conectan los diferentes dispositivos. Estas líneas pueden incluir etiquetas que indiquen el tipo de cable (por ejemplo, #[i Ethernet], fibra óptica) y la longitud del cable.

    Separador
    #t_4_3.titulo-segundo.color-acento-botones.mt-5
      h2 4.3 Gestión de proyectos
    p.mb-5 La gestión de proyectos es un aspecto primordial en la implementación de cableado estructurado. Implica la planificación, ejecución y control de las actividades del proyecto para asegurar que se cumplan los objetivos y los plazos establecidos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Fases de la gestión de proyectos
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.brad.p-4(titulo="Planificación")
            p En esta fase, se realiza un análisis detallado de los requisitos del proyecto, se define el alcance y se desarrolla un plan de implementación. Incluye la identificación de los recursos necesarios, la definición de los plazos y la asignación de responsabilidades.
          .tarjeta.brad.p-4(titulo="Ejecución")
            p En esta fase, se llevan a cabo las actividades del proyecto según el plan de implementación. Incluye la instalación de los componentes de red, la configuración de los dispositivos y la realización de pruebas
          .tarjeta.brad.p-4(titulo="Control")
            p En esta fase, se monitorean y controlan las actividades del proyecto para asegurar que se cumplan los objetivos y los plazos establecidos. Incluye la identificación de desviaciones, la implementación de medidas correctivas y la evaluación del progreso.
          .tarjeta.brad.p-4(titulo="Cierre")
            p En esta fase, se finaliza el proyecto y se realizan las actividades de cierre, como la documentación final, la entrega de los entregables y la evaluación del proyecto.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img12.png' alt='AvatarTop')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Herramientas de gestión de proyectos
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/tema4/img13.png", alt="alt")
      .col-lg-9.bg10
        .px-lg-4.px-4
          .bgw.brad.p-5.my-5
            SlyderA
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema4/img14.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Diagramas de Gantt
                  p Los diagramas de Gantt son herramientas visuales que muestran el cronograma del proyecto, incluyendo las actividades, los plazos y las dependencias entre las tareas.
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema4/img14.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 #[i Software] de gestión de proyectos
                  p El #[i software] de gestión de proyectos, como Microsoft Project o Asana, proporciona herramientas para la planificación, ejecución y control de las actividades del proyecto.
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema4/img14.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Reuniones de seguimiento
                  p Las reuniones de seguimiento son encuentros regulares en los que se revisa el progreso del proyecto, se identifican los problemas y se toman decisiones para mantener el proyecto en curso.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Beneficios de la gestión de proyectos
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg11.w-100
            .p-4
              h5.text-center Mejora la eficiencia
              p La gestión de proyectos mejora la eficiencia al proporcionar una estructura clara para la planificación, ejecución y control de las actividades del proyecto.
      .col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg1.w-100
            .p-4
              h5.text-center Reduce el riesgo
              p La gestión de proyectos reduce el riesgo al identificar y mitigar los problemas potenciales antes de que se conviertan en problemas mayores.
      .col-lg-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.bg1.w-100
            .p-4
              h5.text-center Asegura el cumplimiento de los plazos
              p La gestión de proyectos asegura que el proyecto se complete dentro de los plazos establecidos al monitorear y controlar las actividades del proyecto.

    
    
    Separador
    #t_4_4.titulo-segundo.color-acento-botones.mt-5
      h2 4.4 Conclusiones
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8     
        .row.justify-content-center.align-items-center.mb-3
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            img(src="@/assets/curso/temas/tema4/img18.svg", alt="alt")
          .col-lg-9.bg1.p-4
            p El análisis y la planificación de redes son etapas propias del diseño de una infraestructura de cableado estructurado. Estas fases permiten identificar los requerimientos específicos, seleccionar las topologías y arquitecturas adecuadas, y garantizar que la red sea escalable y eficiente. Una planificación adecuada asegura que la red cumpla con las necesidades actuales y futuras de la organización, optimizando el rendimiento y minimizando los costos.
        p Los requerimientos y especificaciones técnicas son aspectos que aseguran que la red cumpla con las necesidades de la organización. Estos incluyen la velocidad de transmisión, el tipo de cableado, los dispositivos de red y las medidas de seguridad. La selección adecuada de estos elementos se necesita para soportar aplicaciones críticas y servicios de alta demanda, como videoconferencias, transferencias de archivos grandes y sistemas de gestión empresarial.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/tema4/img19.png", alt="alt")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4
        p Las topologías y arquitecturas de red desempeñan un papel importante en el diseño e implementación de redes eficientes y efectivas. Las topologías como la estrella, el anillo, el bus y la malla, junto con las arquitecturas jerárquicas y planas, ofrecen diferentes niveles de escalabilidad, tolerancia a fallos y facilidad de gestión. La selección adecuada de estas topologías y arquitecturas permite adaptar la red a las necesidades cambiantes de la organización y asegura un rendimiento óptimo.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/tema4/img20.svg", alt="alt")
      .col-lg-5
        p El dimensionamiento y la escalabilidad son aspectos propios del diseño y la planificación de redes. El dimensionamiento vertical y horizontal, junto con la escalabilidad elástica, permiten optimizar el rendimiento de la red asegurando que los recursos estén disponibles cuando y donde se necesiten. Además, la implementación de redundancia y la planificación de contingencias mejoran la disponibilidad de la red, garantizando que los servicios críticos se mantengan operativos incluso en caso de fallos.

</template>

<script>
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
import SlyderF from '../bootstrap/SlyderF'
export default {
  name: 'Tema4',
  components: { TabsC, AcordionA, SlyderA, SlyderF },
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
