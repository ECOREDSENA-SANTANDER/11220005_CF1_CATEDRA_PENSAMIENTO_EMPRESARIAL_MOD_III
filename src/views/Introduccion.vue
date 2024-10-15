<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el competitivo entorno empresarial actual, las organizaciones deben operar con agilidad y eficiencia para mantenerse y prosperar. La gestión de riesgos es una herramienta clave en este proceso, pues permite a las empresas identificar, analizar y mitigar los posibles impactos tanto positivos como negativos que puedan afectar sus operaciones. A través de este enfoque sistemático que se soporta en la NTC-ISO 31000, las organizaciones no solo manejan la incertidumbre, sino que también crean valor de forma sostenible.
          br
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-9
        p Establecer una estructura gerencial adecuada es fundamental para garantizar una posición competitiva. Esta estructura debe basarse en la innovación, la creatividad, la búsqueda de alternativas y la sensibilización frente a posibles problemas, protegiendo los intereses de la empresa mediante una gestión del riesgo efectiva. Este enfoque no solo permite la identificación de amenazas, sino que también abre oportunidades de mejora, logrando una toma de decisiones más acertada.
        p El análisis de riesgos permite a la gerencia prever eventos críticos, ya sean desastres naturales, fallos en infraestructura o riesgos causados por el personal. Además, la conformación de comunidades de talento y la adecuada gerencia de recursos humanos son esenciales para identificar estos riesgos y gestionar sus consecuencias. Este enfoque debe estar alineado con los objetivos corporativos, asegurando que la empresa pueda implementar un plan de mejoramiento continuo. Así, se subraya la importancia de la gestión de recursos humanos en la mitigación y manejo efectivo de los riesgos, logrando una mayor estabilidad organizacional y el cumplimiento de las metas.
        p Este enfoque, aplicado de manera integral permite que las organizaciones puedan anticipar desafíos y aplicar soluciones efectivas, asegurando así el cumplimiento de sus objetivos en un entorno cada vez más incierto.
      .col-lg-3.col-7
        img(src='@/assets/curso/portada/img02.png', alt='')
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
