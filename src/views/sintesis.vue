<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de las temáticas abordadas en el componente formativo, dónde se enfatiza como eje central la gestión del riesgo en la empresa abordada desde cinco componentes fundamentales que trabajan de manera integrada. Primero, los principios y el marco de referencia, seguido de la definición del proceso de gestión del riesgo. Se incluyen temáticas asociadas a la gerencia y dirección, cuyo entendimiento resulta esencial en la adecuada gestión de riesgos. Además, se profundiza en el análisis de riesgo, que permite calificar y determinar acciones. Finalmente, el plan de mejoramiento que se centra en medidas preventivas y correctivas para reducir riesgos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
