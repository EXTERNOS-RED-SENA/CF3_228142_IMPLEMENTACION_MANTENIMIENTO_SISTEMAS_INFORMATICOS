<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Implementación de redes físicas
    
    Separador
    #t_3_1.titulo-segundo.color-acento-botones.mt-5
      h2 3.1 Diagramas y documentación técnica
    
    Separador
    #t_3_2.titulo-segundo.color-acento-botones.mt-5
      h2 3.2 Métodos de implementación

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
