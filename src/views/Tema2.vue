<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diseño de infraestructura
    
    Separador
    #t_2_1.titulo-segundo.color-acento-botones.mt-5
      h2 2.1 Subsistemas de cableado estructurado
    
    Separador
    #t_2_2.titulo-segundo.color-acento-botones.mt-5
      h2 2.2 Cuartos de telecomunicaciones
    
    Separador
    #t_2_3.titulo-segundo.color-acento-botones.mt-5
      h2 2.3 Distribución y rutas de cableado

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
