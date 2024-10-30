<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis de la gestión del riesgo
  
    p.mb-4 El Análisis de Gestión del Riesgo, también conocido como ciclo PHA (Análisis Preliminar de Riesgos de Procesos o por sus siglas en inglés #[em Process Hazard Analysis]), se refiere al estudio de las causas de posibles amenazas, los daños que pueden generar en la organización y sus consecuencias. Este proceso permite calificar y evaluar los riesgos, proporcionando información clave para determinar el nivel de riesgo y las acciones que se implementarán. La calidad del análisis depende de la información recogida en los formatos de identificación de riesgos, la disponibilidad de datos históricos y las contribuciones del personal de la entidad.
    p.mb-4 Este análisis es ampliamente utilizado en la gestión financiera y de seguridad para:
    
    .row.align-items-center.justify-content-center.mb-4(data-aos='fade')
      .col-lg-12.col-md-12.col-12 
        .tarjeta--container.row.mb-2
          .col-md.tarjeta.bgimg3
            .row.align-items-center.justify-content-center.mb-3.p-4
              .col-lg-4.my-4
                figure
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/t4/img01.png', alt='Texto que describa la imagen')
              .col-lg-7
                p.text-white Identificar riesgos mediante métodos cualitativos.
    
          .col-md.tarjeta.bgimg4
            .row.align-items-center.justify-content-center.mb-3.p-4
              .col-lg-4.my-4
                figure
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/t4/img02.png', alt='Texto que describa la imagen')
              .col-lg-7
                p.text-white Evaluar riesgos utilizando generalmente métodos cuantitativos.           
    p Se han establecido dos aspectos para tener en cuenta en el análisis de los riesgos identificados:  
    
    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.bg2.p-4(titulo="a) Probabilidad")
        .row.align-items-center.justify-content-evenly
          .col-lg-7
            h4 Probabilidad
            p Se refiere a la posibilidad de que un riesgo se materialice. Puede medirse por:
            ul.lista-ul.fa-ul
              li.mb-1
                i.lista-ul__vineta
                | #[b Frecuencia:] número de veces que ha ocurrido en un periodo determinado.
              li.mb-1
                i.lista-ul__vineta
                | #[b Factibilidad:] consideración de factores internos y externos que puedan propiciar su ocurrencia, incluso si no se ha manifestado.

          .col-lg-5.col-md-7
            img(src='@/assets/curso/temas/t4/img03.png', alt='')
      
      .tarjeta.bg2.p-4(titulo="b) Impacto")
        .row.align-items-center.justify-content-evenly
          .col-lg-7
            h4 Impacto
            p Define las consecuencias que la materialización del riesgo puede ocasionar en la organización. 

          .col-lg-5.col-md-7
            img(src='@/assets/curso/temas/t4/img04.png', alt='')

    p.mb-4 Aspectos esenciales en el análisis de riesgos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
        .row.px-2.pt-2
          .col-12.m-0.nav-holder2.align-items-center.px-0
            img(src="@/assets/curso/temas/t4/img05.png", alt="")
            .text.p-2
              .row.text-center.px-1.pt-1.mt-md-2.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-3.mb-3 Calificación del riesgo
                p.px-4 Involucra la estimación de la probabilidad de ocurrencia y el impacto que puede generar la materialización del riesgo. La probabilidad refleja el número de veces que el riesgo ha ocurrido o podría ocurrir, mientras que el impacto describe la magnitud de los efectos.
      
      .col-lg-4.col-md-6.col-11.mb-3.mb-lg-0
        .row.px-2.pt-2
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador2 = false")
            .indicador--hover(v-if="mostrarIndicador2")
            img(src="@/assets/curso/temas/t4/img06.png", alt="")
            .text.p-1
              .row.text-center.px-1.pt-1.mt-md-2.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-3.mb-3 Evaluación del riesgo
                p.px-4 Permite comparar los resultados de la calificación con criterios predefinidos, clasificando el nivel de exposición de la organización al riesgo en categorías como aceptable, tolerable, moderado, importante o inaceptable. Esto facilita la priorización de las acciones necesarias para mitigar el riesgo. 

    p Una opción para evaluar riesgos de seguridad presenta ocho pasos a seguir. El uso de este modelo o de otros similares se caracteriza por su aplicación diagnóstica de tipo preventivo, con el fin de anticipar las amenazas que han sido previamente identificadas:


    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span   Pasos para una evaluación de riesgos.
        img(src='@/assets/curso/temas/t4/img07.svg', alt='')
        .py-2
      p.text-center Nota. Adaptado de Mendoza (2014).

    p En el paso 7 del análisis de riesgo, se mide el grado en el que la organización es afectada por una amenaza y se calcula una puntuación para cada riesgo de cada activo de información. Para ello, se comparan las áreas de impacto de cada categoría según los criterios del paso 1, con el escenario de amenaza (Mendoza, 2014).
    p Se debe entender una puntuación para cada situación de riesgo producido. Para este escenario, se ve como una ocurrencia de seguridad que se conoce claramente, por lo que el efecto se estima alto, llegando a una calificación de 3. Por cada ejemplo, puede haber más de un territorio de impacto, por lo que el cálculo se puede determinar el que tenga el mayor estimativo. Posteriormente, se debe multiplicar el estimado de impacto de la zona, con la prioridad que se caracteriza en el paso 1:

    .row(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Evaluación de riesgos.
        .tabla-a.tabla1.color-acento-contenido.mb-3 
          table
            caption.bg9 Referencia Tabla - Norma APA
            thead
              tr.bg9
                th Criterio de evaluación
                th Prioridad
                th Valor de área de impacto
                th Puntuación
            tbody.text-center
              tr
                td Reputación y confianza del cliente
                td 5
                td Alto (3)
                td 15
              tr
                td Financiera
                td 4
                td Medio (2)
                td 8
              tr
                td Productividad
                td 3
                td Bajo (1)
                td 3
              tr
                td Seguridad y salud
                td 2
                td Bajo (1)
                td 2
              tr
                td Multas y penas legales
                td 1
                  td Alto (3)
                td 3
              tr
                td 
                td 
                td #[b Puntaje total]
                td #[b 31]
        p Nota. Adaptada de https://www.welivesecurity.com/la-es/2022/12/13/8-pasos-evaluacion-de-riesgos-2/

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        p El último resultado o marcador global, corresponde a la totalidad de los resultados de la puntuación. Este hace referencia a una estimación cuantitativa que puede oscilar entre 0 y 45, con un impacto más grande, el efecto será más notable en los beneficios de la organización.
        p A continuación, se presenta una nueva matriz, que da una investigación subjetiva, incluyendo la utilización de la participación de enfoques para visualizar el tamaño de los resultados potenciales (impacto) y la viabilidad de evento (probabilidad). 
        p Es fundamental evaluar cada riesgo de manera individual, utilizando esta matriz, y teniendo en cuenta tanto la frecuencia con la que se ha manifestado como sus posibles consecuencias. El impacto y la probabilidad se combinan para determinar la prioridad de las acciones a tomar, y la evaluación del riesgo.
    
    .row(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Matriz de riesgos
        .tabla-a.tabla1.color-acento-contenido.mb-3 
          table
            caption.bg9 Referencia Tabla - Norma APA
            thead
              tr.bg9
                th Probabilidad
                th Valor
                th 
                th
                th
            tbody
              tr
                td.text-center Alta
                td.text-center 3
                td 15 
                  p Zona de riesgo moderado 
                  p - Evitar el riesgo
                td 30 
                  p Zona de riesgo Importante
                  p - Reducir el riesgo
                  p - Evitar el riesgo
                  p - Compartir o transferir
                td 60
                  p Zona de riesgo inaceptable
                  p - Evitar el riesgo
                  p - Reducir el riesgo
                  p - Compartir o transferir
              tr
                td.text-center Media
                td.text-center 2
                td 10
                  p Zona de riesgo Tolerable
                  p -  Asumir el riesgo
                  p -  Evitar el riesgo
                td 20 
                  p Zona de riesgo Moderado
                  p - Reducir el riesgo
                  p - Evitar el riesgo
                  p - Compartir y transferir

                td 40
                  p Zona de riesgo importante
                  p - Reducir el riesgo
                  p - Evitar el riesgo
                  p - Compartir y transferir
              tr
                td.text-center Baja
                td.text-center 1
                td 20
                  p Zona de riesgo moderado 
                  p - Reducir el riesgo
                  p - Evitar el riesgo
                  p - Compartir y transferir

                td 20
                  p Zona de riesgo moderado 
                  p - Reducir el riesgo
                  p - Evitar el riesgo
                  p - Compartir y transferir
                td 20
                  p Zona de riesgo inaceptable
                  p - Evitar el riesgo
                  p - Compartir o transferir

              tr
                td 
                td Impacto
                td Leve
                td Moderado
                td Catastrófica
              tr
                td 
                td Valor
                td 5
                td 10
                td 20
        p Nota. Adaptada de Guía administración del riesgo.

    p Hay que tener en cuenta, que se debe evaluar los riesgos uno por uno. El análisis que permite realizar esta matriz ayuda a visualizar tanto el impacto potencial como la probabilidad de que el riesgo ocurra. Las clasificaciones utilizadas son las siguientes:
    p #[b • Impacto:] Leve (5), Moderado (10), Catastrófico (20).
    p #[b • Probabilidad:] Alta (3), Media (2), Baja (1).




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
