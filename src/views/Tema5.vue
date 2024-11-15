<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de mejoramiento de la gestión de riesgo
    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-7
        p Es fundamental que cada empresa cuente con su propio plan de gestión de riesgos, ya que esta herramienta le permitirá organizarse y tomar medidas preventivas y reactivas frente a diversas situaciones que puedan presentarse, enfocándose en la reducción de riesgos.
        p El plan de gestión de riesgos se define como un conjunto de actividades cuyo objetivo es dar a conocer y aplicar estrategias, conceptos y metodologías para reducir riesgos, prevenir situaciones adversas y responder a posibles problemas dentro del entorno organizacional. 
        P A continuación, se abordará la administración de riesgos desde la perspectiva de la planificación en situaciones adversas:
        P La primera sección de este proceso se aborda desde el análisis y evaluación de riesgos, así:
      .col-lg-5.col-sm-9.col-9
        img(src='@/assets/curso/temas/t5/img01.png', alt='')

    h5 1. Comprender cómo funciona la administración de riesgos. 
    P El riesgo, manifestado de forma positiva o negativa, tiene una alta probabilidad de surgir en diferentes contextos. Esto permite calcular su incidencia tomando como referencia la eventualidad de ocurrencia. El objetivo es visualizar el riesgo desde la perspectiva de "problema", cuantificando y evaluando su impacto de manera anticipada para orientar la toma de decisiones correctivas.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 7. 
          span  Cómo funciona la administración de riesgos.
        img(src='@/assets/curso/temas/t5/img02.svg', alt='La figura representa cómo funciona la administración de riesgos, en dónde tras una serie de cuestionamientos, se concluye con la obtención de la medida del riesgo inevitable que se denomina "exposición".')

    p Tras responder las preguntas pertinentes, se obtiene lo que se denomina "exposición", que es la medida del riesgo inevitable. La exposición puede referirse también como el riesgo, obligación o gravedad, y se utiliza para determinar si la acción planificada tiene probabilidades de ocurrir.
    p Este análisis frecuentemente se balancea con los costos y beneficios. En esta evaluación, se decide si el riesgo de realizar un cambio es mayor o menor que el de no hacerlo.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-12
        .cajon.color-primario.p-4.mb-4
          p #[b Riesgo asumido:] en caso de que se opte por continuar con una acción (a veces no hay otra opción, como en situaciones de cambios gubernamentales), la exposición se convierte en riesgo asumido. Este riesgo asumido puede cuantificarse en términos monetarios, lo que posteriormente permite estimar el valor de la rentabilidad del producto final.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-7
        h5 2. Definir el proyecto. 
        p Se ejemplifica bajo el supuesto de que la persona a cargo de la dirección de recursos tecnológicos está gestionando un sistema informático que contiene datos importantes de una amplia población. El sistema es obsoleto y necesita ser reemplazado. La tarea consiste en crear un plan de gestión de riesgos para llevar a cabo este reemplazo. En este caso, el riesgo y su impacto se clasifican como alto, medio o bajo, lo cual es común en la gestión de riesgos.

        h5 3. Buscar apoyo de otros.
        p Es recomendable realizar una lluvia de ideas sobre los riesgos potenciales. Se debe formar un grupo de personas que conozcan el proyecto para obtener información sobre lo que podría suceder, cómo prevenirlo y qué hacer en caso de que ocurra. Es importante tomar nota de todas las ideas, ya que este grupo será de ayuda en etapas posteriores. Mantener una actitud abierta a las ideas es esencial, aunque es necesario preservar el control y el enfoque en los objetivos del proyecto.
      .col-lg-5.col-sm-9.col-9
        img(src='@/assets/curso/temas/t5/img03.png', alt='')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.col-sm-9.mb-2.col-9
        img(src='@/assets/curso/temas/t5/img04.png', alt='')
      .col-lg-7
        h5 4. Identificar las consecuencias de cada riesgo.
        p Basándose en las ideas generadas, se debe relacionar cada riesgo con los resultados posibles. Especificar las consecuencias de forma detallada es clave para una gestión efectiva. En lugar de mencionar un retraso en términos generales, es preferible cuantificar el retraso en días. Si las consecuencias son monetarias, es importante especificar el valor en cifras concretas.
        h5 5. Eliminar los problemas irrelevantes. 
        p Es crucial identificar y eliminar riesgos que sean irrelevantes o improbables. Por ejemplo, factores como un terremoto inminente o una epidemia, aunque posibles, pueden considerarse improbables en el contexto de un sistema informático. En estos casos, no se puede hacer nada para mitigar su impacto, por lo que no deben incluirse en el plan de riesgos.
    
    p En una segunda fase se da continuidad a la identificación y cuantificación de riesgos, considerando los siguientes aspectos:
    h5 6. Enlistar todos los elementos de riesgo identificados. 
    p No es necesario clasificar los riesgos de inmediato. Primero, es importante identificarlos y listarlos, uno por uno.

    h5 7. Asignar probabilidades. 
    p A cada riesgo identificado se le debe asignar una probabilidad de ocurrencia: alta, media o baja. Si se utiliza un valor numérico, la escala va de 0.00 a 1.00, con los siguientes rangos:

    p • Baja: 0.01 a 0.33
    p • Media: 0.34 a 0.66
    p • Alta: 0.67 a 1.00

    p Nota: Si la probabilidad de ocurrencia es cero, el riesgo debe eliminarse de la evaluación.
    
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 8. 
        span  Probabilidad
      .col-lg-2.col-sm-5.col-7
        img(src='@/assets/curso/temas/t5/img05.svg', alt='La figura presenta una escala de probabilidad, que clasifica los riesgos en tres niveles: alta (0,67 a 1,00), media (0,34 a 0,66) y baja (0,01 a 0,33), representados en colores rojo, naranja y verde, respectivamente.')
    
    
    h5 8. Asignar el impacto. 
    p De manera similar a las probabilidades, se debe asignar un impacto (alto, medio o bajo) para cada riesgo. Si es necesario, se puede utilizar una escala numérica como la mencionada en el punto anterior.
    p Nota: Si el impacto es nulo, no es necesario incluir el riesgo en el listado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 9. 
        span  Asignación de impacto
      .col-lg-6.col-sm-9.col-10
        img(src='@/assets/curso/temas/t5/img06.svg', alt='La figura presenta una matriz de probabilidad e impacto. Los riesgos se clasifican según su probabilidad (baja, media, alta) y su impacto (bajo, medio, alto), representados por colores que varían desde verde (riesgo bajo) hasta rojo (riesgo alto).')
    
    h5 9. Determinar el riesgo para el elemento. 
    p Para combinar la probabilidad y el impacto, se puede utilizar una relación entre valores altos, medios y bajos. En casos más complejos, es importante utilizar una categorización basada en valores numéricos. Es fundamental recordar que no existe una fórmula única para combinar estos factores, ya que varían según el proyecto y los individuos involucrados. Es recomendable ser flexible en el análisis y adaptar las combinaciones de probabilidad e impacto a cada situación específica.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 10. 
        span  Tablas para análisis de riesgo
      .col-lg-6.col-sm-9.col-10
        img(src='@/assets/curso/temas/t5/img07.svg', alt='La figura presenta un ejemplo de diseño de tablas para realizar el análisis de riesgo. Se presenta la tabla 1 con valores: 1.2 y 3, y la tabla 2 con valores 4, 5 y 6.')
    
    
    h5 10. Clasificar los riesgos: 
    p Una vez determinados, se deben listar los riesgos en orden de mayor a menor impacto.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 11. 
        span  Listado para clasificación de riesgos
      .col-lg-4.col-sm-6.col-8
        img(src='@/assets/curso/temas/t5/img08.svg', alt='La figura presenta un ejemplo de listado para la realizar la clasificación de los riesgos. El listado tiene dos columnas con encabezados: riesgos (en esta columna se detalla cada riesgo) y rango (en esta columna se marca el rango al que se debe asociar cada riesgo).')
    
    
    p En la siguiente sección del proceso y atendiendo la respectiva trazabilidad, se realizan los cálculos del riesgo y planificación de respuesta:
    h5 11. calcular el riesgo total: 
    p Aquí la numeración es una ayuda importante, por ejemplo, si se tiene 7 riesgos determinados, como A, A, M, M, M, B y B. Esto se puede llevar a 0.8, 0.8, 0.5, 0.5, 0.5, 0.2 y 0.2. El riesgo promedio total es 0,5 y esto se determina en Medio.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 12. 
        span  Cálculo del riesgo promedio total
      .col-lg-6.col-sm-9.col-10
        img(src='@/assets/curso/temas/t5/img09.svg', alt='La figura representa el cálculo del riesgo promedio total descrito en el texto previo.')
    
    h5 12. Desarrollar estrategias de mitigación.  
    p Estas estrategias buscan reducir la probabilidad de que un riesgo se materialice, enfocándose en los componentes de riesgo alto y medio. El objetivo es reducir esos riesgos a niveles bajos. Por ejemplo, si existe riesgo de retraso en la entrega de áreas críticas, una estrategia sería reorganizar las entregas para priorizar esas áreas desde el inicio del proyecto.

    h5 13. Desarrollar planes de contingencia. 
    p Los planes de contingencia están destinados a reducir el impacto si el riesgo llega a ocurrir. Generalmente, solo se desarrollan para los riesgos altos y medios. Por ejemplo, si los materiales necesarios para un proceso no llegan a tiempo, se debe recurrir a los recursos disponibles hasta que los nuevos lleguen.

    p Finalmente, el proceso concluye en un ciclo de monitoreo y ajuste, atendiendo los siguientes pasos:

    h5 14. Evaluar la efectividad de las estrategias. 
    p Una vez implementadas las estrategias de mitigación y contingencia, es necesario analizar su efectividad en la reducción del riesgo.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 13. 
        span  Análisis y evaluación de efectividad.
      .col-lg-8.col-sm-9.col-10
        img(src='@/assets/curso/temas/t5/img10.svg', alt='La figura describe el análisis y evaluación de efectividad de las estrategias, dónde es clave cuestionarse ¿qué cantidad han disminuido la probabilidad y el impacto?, evaluando la contingencia y probabilidades de mitigación, inclusive, dando una nueva valoración que sea moderada y pertinente a los riesgos.')
    
    h5 15. Calcular el riesgo eficaz. 
    p Tras la implementación de las estrategias, es importante recalcular el riesgo promedio. Se tiene que los riesgos son siete y estos son: M, M, M, B, B, B y B, que se convierte en 0,5, 0,5, 0,5, 0,2, 0,2, 0,2 y 0,2. Esto le da un riesgo medial de 0,329, lo que indica que el riesgo general es bajo. Inicialmente, el riesgo fue medio (0,5). Con posterioridad a la inclusión de tácticas de manejo, la exposición es baja (0.329). Lo que deduce que se ha logrado una disminución del 34,2 % en peligro a través de la mitigación y contingencia, algo que es productivo.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 14. 
        span  Cálculo del riesgo
      .col-lg-6.col-sm-9.col-10
        img(src='@/assets/curso/temas/t5/img11.svg', alt='La figura representa gráficamente, el cálculo realizado para estimar el riesgo eficaz, explicado en el texto previo, que concluye en el logro de una disminución del 34,2% en peligro a través de la mitigación y contingencia, considerándose productivo.')
    
    h5 16. Monitorear los riesgos.
    p Una vez identificados los riesgos, es necesario definir cómo y cuándo se evaluará su materialización. Esto se hace mediante el seguimiento de indicadores clave de riesgo. Este monitoreo debe realizarse especialmente en los riesgos altos y medios, para poder activar los planes de contingencia en caso de que sea necesario.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 15. 
        span Monitoreo de riesgo.
      .col-lg-12
        img(src='@/assets/curso/temas/t5/img12.png', alt='La figura presenta cómo el proceso de monitoreo de riesgos integra los diferentes procesos, desde el diagnóstico, pasando por la estructura preventiva, la gestión que involucra la mejora continua, seguido de la evaluación del sistema y concluye en el mejoramiento del sistema.')
    
  

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
