<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Optimización y mejores prácticas
    
    Separador
    #t_4_1.titulo-segundo.color-acento-botones.mt-5
      h2 4.1 Estándares de calidad
    
    Separador
    #t_4_2.titulo-segundo.color-acento-botones.mt-5
      h2 4.2 Documentación y entregables
    
    Separador
    #t_4_3.titulo-segundo.color-acento-botones.mt-5
      h2 4.3 Gestión de proyectos
    
    Separador
    #t_4_4.titulo-segundo.color-acento-botones.mt-5
      h2 4.4 Conclusiones

</template>

<script>
export default {
  name: 'Tema4',
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
