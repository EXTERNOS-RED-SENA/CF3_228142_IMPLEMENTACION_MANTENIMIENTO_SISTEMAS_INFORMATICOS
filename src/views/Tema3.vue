<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Implementación de redes físicas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img1.svg')
      .col-lg-7
        p La implementación de redes físicas es un proceso complejo que involucra la planificación, diseño, instalación y configuración de componentes de #[i hardware] y #[i software] para crear una infraestructura de red funcional. Este proceso garantiza que los dispositivos de una organización puedan comunicarse de manera eficiente y segura.
      .col-lg-3
        img.img-fluid.img-a(src='@/assets/curso/temas/tema3/img2.png')
    Separador
    #t_3_1.titulo-segundo.color-acento-botones.mt-5
      h2 3.1 Diagramas y documentación técnica
    
    p.mb-4 La documentación técnica y los diagramas son herramientas en la implementación de redes físicas. Estos documentos proporcionan una representación visual y escrita de la infraestructura de red, facilitando la comprensión y el mantenimiento de esta.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .titulovi.mb-4
              h5.order-2.mb-0.p-1 Diagramas físicos
              .imgicon.order-1
                img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
        p Los diagramas físicos muestran la disposición física de los componentes de red, como #[i routers], #[i switches], servidores y cables. Estos diagramas son útiles para la instalación y el mantenimiento físico de la red. Proporcionan una representación visual de cómo están conectados los dispositivos y dónde se encuentran físicamente.
      .col-lg-5
        img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')

    .titulo-segundo.titseg
      h4 Componentes de un diagrama físico
    
    .row.mb-5
      .col-lg-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p
                b #[i Routers] y #[i switches]: 
                | estos dispositivos son representados mediante iconos específicos que indican su ubicación y conexiones.
      .col-lg-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p
                b Servidores: 
                | los servidores son mostrados con iconos que indican su tipo y función, como servidores de archivos, servidores de correo electrónico, etc.
      .col-lg-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p
                b Cables y conexiones: 
                | los cables y conexiones son representados mediante líneas que conectan los diferentes dispositivos. Estas líneas pueden incluir etiquetas que indiquen el tipo de cable (por ejemplo, Ethernet, fibra óptica) y la longitud del cable.

    .titulo-segundo.titseg
      h4 Utilidad de los diagramas físicos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src="@/assets/curso/temas/tema3/img7.svg", alt="alt")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          div(titulo="Instalación")
            p Los diagramas físicos se necesitan durante la fase de instalación de la red. Proporcionan una guía visual para los técnicos sobre cómo y dónde instalar los dispositivos y cables.
          div(titulo="Mantenimiento")
            p Durante el mantenimiento de la red, los diagramas físicos ayudan a los técnicos a localizar rápidamente los dispositivos y conexiones que necesitan ser reparados o reemplazados.

          div(titulo="Documentación")
            p Los diagramas físicos hacen parte de la documentación técnica de la red. Proporcionan una referencia visual que puede ser utilizada por los técnicos y administradores de red para entender la estructura física de la red.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .titulovi.mb-4
              h5.order-2.mb-0.p-1 Diagramas lógicos
              .imgicon.order-1
                img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
        p Los diagramas lógicos representan la estructura lógica de la red, incluyendo direcciones IP, subredes y VLANs. Estos diagramas son requeridos para la configuración y la resolución de problemas de la red. Proporcionan una visión detallada de cómo están configurados los dispositivos y cómo se comunican entre sí.
      .col-lg-5
        img(src="@/assets/curso/temas/tema3/img8.png", alt="alt")
    
    .titulo-segundo.titseg
      h4 Componentes de un diagrama lógico
    
    
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.w-100
            .p-4
              h5.text-center Direcciones IP
              p Las direcciones IP de los dispositivos son mostradas en el diagrama, lo que permite a los administradores de red ver rápidamente cómo están asignadas las direcciones IP.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.w-100
            .p-4
              h5.text-center Subredes
              p Las subredes son representadas mediante bloques que indican el rango de direcciones IP asignadas a cada subred.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.w-100
            .p-4
              h5.text-center VLANs
              p Las VLANs son mostradas mediante líneas o bloques que indican cómo están segmentadas las redes lógicas.
    
    .titulo-segundo.titseg
      h4 Utilidad de los diagramas lógicos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.brad.p-4(titulo="Configuración")
            p Los diagramas lógicos son importantes durante la fase de configuración de la red. Proporcionan una guía visual para los administradores de red sobre cómo configurar las direcciones IP, subredes y VLANs.
          .tarjeta.brad.p-4(titulo="Resolución de problemas")
            h5 Resolución de problemas
            p Durante la resolución de problemas, los diagramas lógicos ayudan a los administradores de red a identificar rápidamente los problemas de configuración y comunicación entre los dispositivos.
          .tarjeta.brad.p-4(titulo="Documentación")
            p Los diagramas lógicos son una parte importante de la documentación técnica de la red. Proporcionan una referencia visual que puede ser utilizada por los administradores de red para entender la estructura lógica de la red.
      .col-lg-3
        img(src='@/assets/curso/temas/tema3/img12.png' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Documentación técnica
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')

    p.mb-4 La documentación técnica incluye manuales, guías de configuración y procedimientos operativos. Esta documentación es importante para la instalación, configuración y mantenimiento de la red. 

    .titulo-segundo.titseg
      h4 Manuales de instalación
    p.mb-4 Los manuales de instalación son documentos que proporcionan instrucciones detalladas sobre cómo instalar y configurar los componentes de red. Estos manuales son base para garantizar que los dispositivos de red se instalen correctamente y funcionen de manera óptima.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src="@/assets/curso/temas/tema3/img13.svg", alt="alt")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          div(titulo="Contenido de un manual de instalación")
            p La Lista de componentes incluye una lista detallada de todos los componentes necesarios para la instalación, como #[i routers], #[i switches], cables, adaptadores de red, etc.
          div(titulo="Requisitos previos")
            p Describe los requisitos previos necesarios antes de la instalación, como la preparación del sitio, la disponibilidad de energía eléctrica y la conectividad a internet.

          div(titulo="Pasos de instalación")
            p Proporciona una guía paso a paso para la instalación de cada componente de red. Esto puede incluir instrucciones sobre cómo conectar los cables, instalar el #[i hardware] y configurar el #[i software] inicial.

          div(titulo="Diagramas y esquemas")
            p Incluye diagramas y esquemas que muestran la disposición física de los componentes de red y cómo deben conectarse entre sí.

          div(titulo="Configuración inicial")
            p Ofrece instrucciones sobre cómo realizar la configuración inicial de los dispositivos de red, como la asignación de direcciones IP, la configuración de VLANs y la configuración de enrutamiento.

          div(titulo="Pruebas de funcionamiento")
            p Describe las pruebas que deben realizarse después de la instalación para verificar que todos los componentes de red están funcionando correctamente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-segundo.titseg
          h4 Utilidad de los manuales de instalación
      
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img(src="@/assets/curso/temas/tema3/img15.svg", alt="alt")
          .col-lg-10
            p Los manuales de instalación facilitan el proceso de instalación al proporcionar instrucciones claras y detalladas. Esto reduce el riesgo de errores y asegura que los dispositivos de red se instalen correctamente.
        p Por otra parte, reducen el tiempo de instalación al seguir las instrucciones del manual de instalación, los técnicos pueden completar la instalación de manera más rápida y eficiente, garantizando la consistencia ya que los manuales de instalación aseguran que todos los componentes de red se instalen de manera consistente, lo que facilita el mantenimiento y la resolución de problemas.
      .col-lg-4
        img(src="@/assets/curso/temas/tema3/img14.png", alt="alt")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Guías de configuración
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    p.mb-3 Las guías de configuración son documentos que ofrecen información detallada sobre cómo configurar dispositivos de red, como #[i routers] y #[i switches], para que funcionen de manera óptima. Estas guías son para garantizar que los dispositivos de red estén configurados correctamente y cumplan con los requisitos específicos de la organización.

    .titulo-segundo.titseg
      h4 Contenido de una guía de configuración
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src="@/assets/curso/temas/tema3/img16.png", alt="alt")
      .col-lg-9.bg10
        .px-lg-4.px-4
          .bgw.brad.p-5.my-5
            SlyderA
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema3/img17.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Configuración de direcciones IP
                  p Proporciona instrucciones sobre cómo asignar direcciones IP a los dispositivos de red y configurar las subredes.
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema3/img18.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Configuración de VLANs
                  p Describe cómo configurar VLANs para segmentar la red y mejorar la seguridad y el rendimiento.
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema3/img19.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Configuración de enrutamiento
                  p Ofrece instrucciones sobre cómo configurar las tablas de enrutamiento y las políticas de enrutamiento para garantizar que el tráfico de red se dirija correctamente.
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema3/img20.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Configuración de seguridad
                  p Proporciona información sobre cómo configurar las políticas de seguridad, como #[i firewalls], listas de control de acceso (ACL) y autenticación de usuarios.
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema3/img21.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Configuración de calidad de servicio (QoS)
                  p Describe cómo configurar las políticas de QoS para priorizar el tráfico de red y garantizar el rendimiento de las aplicaciones críticas.
              .row.justify-content-center.align-items-center.mb-5
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema3/img22.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h5 Configuración de redundancia
                  p Ofrece instrucciones sobre cómo configurar la redundancia de red, como la configuración de enlaces redundantes y la configuración de protocolos de redundancia.

    .titulo-segundo.titseg
      h4 Utilidad de las guías de configuración
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.bg4.p-4.h-100
          .row.justify-content-center.mb-5
            .col-3
              figure
                img(src='@/assets/curso/temas/tema3/img27.svg', alt='Texto que describa la imagen')
          .text-center
            h5 Mejoran el rendimiento
            p Las guías de configuración ayudan a mejorar el rendimiento de la red al proporcionar instrucciones detalladas sobre cómo configurar los dispositivos de red para que funcionen de manera óptima.
      .col-lg-4
        .tarjeta.bg4.p-4.h-100
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/img28.svg', alt='Texto que describa la imagen')
          .text-center
            h5 Aumentan la seguridad
            p Al seguir las instrucciones de las guías de configuración, los administradores de red pueden implementar políticas de seguridad que protejan la red contra amenazas externas e internas.
      .col-lg-4
        .tarjeta.bg4.p-4.h-100
          .row.justify-content-center.mb-5
            .col-3
              figure
                img(src='@/assets/curso/temas/tema3/img29.svg', alt='Texto que describa la imagen')
          .text-center
            h5 Facilitan la gestión
            p Las guías de configuración facilitan la gestión de la red al proporcionar una referencia detallada sobre cómo configurar los dispositivos de red.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulovi.mb-4
          h5.order-2.mb-0.p-1 Procedimientos operativos
          .imgicon.order-1
            img(src='@/assets/curso/temas/tema1/imgicono.png', alt='Imagen decorativa')
    p.mb-4 Los procedimientos operativos son documentos que describen los pasos necesarios para realizar tareas específicas, como la resolución de problemas o la actualización de #[i software]. Estos procedimientos son necesarios para garantizar que las tareas se realicen de manera consistente y eficiente.
    
    .titulo-sexto.color-acento-contenido.offset-0
      h5 Tabla 3. 
      span Contenido de un procedimiento operativo

    .tabla-a.color-acento-contenido.text-center.mb-5
      table
        caption Fuente: OIT, 2024.
        thead
          tr(style="background-color:#E0D4F0")
            th Tipo de contenido
            th Consideraciones clave
            th Utilidades
        tbody
          tr
            td.bg7.fast-bold.h5 Resolución de problemas
            td 
              p Proporciona una guía paso a paso para la resolución de problemas comunes de red, como problemas de conectividad, problemas de rendimiento y problemas de seguridad.
            td(rowspan="5")
              p 
                b Garantizan la consistencia:
                | los procedimientos operativos aseguran que las tareas se realicen de manera consistente, lo que facilita la gestión y el mantenimiento de la red.
              p
                b Reducen el tiempo de resolución: 
                | al seguir los procedimientos operativos, los técnicos pueden resolver problemas de manera más rápida y eficiente.
              p
                b Mejoran la seguridad: 
                | los procedimientos operativos ayudan a mejorar la seguridad de la red al proporcionar instrucciones detalladas sobre cómo realizar tareas críticas, como la actualización de #[i software] y la recuperación de desastres.
          tr
            td.bg7.fast-bold.h5 Actualización de #[i software]
            td 
              p Describe los pasos necesarios para actualizar el #[i software] de los dispositivos de red, como el firmware de #[i routers] y #[i switches] y el #[i software] de los servidores.
          tr
            td.bg7.fast-bold.h5 Mantenimiento preventivo 
            td 
              p Ofrece instrucciones sobre cómo realizar tareas de mantenimiento preventivo, como la limpieza de los dispositivos de red, la verificación de las conexiones y la revisión de los registros de eventos.
          tr
            td.bg7.fast-bold.h5 Recuperación de desastres 
            td 
              p Proporciona una guía detallada sobre cómo recuperar la red en caso de un desastre, como un fallo de #[i hardware] o un ataque de seguridad.
          tr
            td.bg7.fast-bold.h5 Configuración de nuevos dispositivos
            td 
              p Describe los pasos necesarios para configurar nuevos dispositivos de red, como nuevos #[i routers], #[i switches] y servidores.

    Separador
    #t_3_2.titulo-segundo.color-acento-botones.mt-5
      h2 3.2 Métodos de implementación
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p La implementación de redes físicas puede llevarse a cabo utilizando varios métodos, cada uno con sus propias ventajas y desventajas. La elección del método de implementación depende de factores como el tamaño de la red, el presupuesto y los requisitos específicos de la organización. Las fases en las que se desarrolla, un método que divide el proceso de implementación en etapas manejables. Este enfoque permite a las organizaciones implementar la red de manera gradual, lo que puede reducir el riesgo y facilitar la gestión del proyecto. Cada fase puede incluir la planificación, diseño, instalación y prueba de una parte específica de la red.
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/img23.png', alt='Texto que describa la imagen')
  

    .row.justify-content-center.mb-5
      .col-lg-5
        .tarjeta--verde.p-4.h-100
          .row.mb-3
            .col-2
              figure
                img(src='@/assets/curso/temas/tema3/img24.svg', alt='Texto que describa la imagen')
          h5 Implementación completa
          p La implementación completa es un método que implica la instalación y configuración de toda la red de una sola vez. Este enfoque puede ser más rápido, pero también puede ser más riesgoso y costoso. La implementación completa es más adecuada para redes pequeñas o para proyectos con plazos ajustados.
      .col-lg-5
        .tarjeta.bg6.p-4.h-100
          .row.mb-3
            .col-2
              figure
                img(src='@/assets/curso/temas/tema3/img25.svg', alt='Texto que describa la imagen')
          h5 Implementación modular
          p La implementación modular es un método que divide la red en módulos independientes, cada uno con su propia funcionalidad. Este enfoque permite a las organizaciones implementar y probar cada módulo de manera independiente antes de integrarlos en la red completa. La implementación modular es útil para redes grandes y complejas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          div(titulo="Pruebas y verificación")
            p Las pruebas y la verificación son pasos en la implementación de redes físicas. Estos procesos aseguran que la red funcione correctamente y cumpla con los requisitos especificados.
          div(titulo="Pruebas de conectividad")
            p Las pruebas de conectividad verifican que los dispositivos de la red puedan comunicarse entre sí. Estas pruebas incluyen la verificación de la conectividad física, como la integridad de los cables y las conexiones, y la conectividad lógica, como la configuración de direcciones IP y enrutamiento.

          div(titulo="Pruebas de rendimiento")
            p Las pruebas de rendimiento evalúan la capacidad de la red para manejar el tráfico de datos. Estas pruebas incluyen la medición de la velocidad de transmisión, la latencia y la capacidad de la red para manejar múltiples conexiones simultáneas. Las pruebas de rendimiento garantizan que la red pueda soportar las demandas de la organización.
          div(titulo="Pruebas de seguridad")
            p Las pruebas de seguridad verifican que la red esté protegida contra amenazas externas e internas. Estas pruebas incluyen la evaluación de la configuración de #[i firewalls], la detección de intrusiones y la implementación de políticas de seguridad. Las pruebas de seguridad protegen la información sensible y garantizar la integridad de la red.
          div(titulo="Verificación de configuración")
            p La verificación de configuración asegura que todos los dispositivos de la red estén configurados correctamente. Este proceso incluye la revisión de las configuraciones de #[i routers], #[i switches] y otros dispositivos de red para garantizar que cumplan con los estándares y las mejores prácticas. La verificación de configuración asegura que la red funcione de manera óptima.
      .col-lg-4
        img(src="@/assets/curso/temas/tema3/img26.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Tema3',
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
