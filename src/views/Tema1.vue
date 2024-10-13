<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación de la gestión de riesgo
    
    
    p.mb-4 Según la NTC-ISO 31000 (2018), la gestión del riesgo se define como aquellas “actividades coordinadas para dirigir y controlar la organización con relación al riesgo”. 	Además define su principal propósito como la creación y la protección del valor, enmarcada en una serie de principios que se presentan en la siguiente figura:
 
    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Principios
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/infograma.svg', alt='Texto que describa la imagen')
           

          .tarjeta.color-acento-botones.p-3(x="62%" y="13%" numero="+")
            .h5.mb-2 Integrada 
            p Es transversal en todas las actividades de la empresa.


          .tarjeta.color-acento-botones.p-3(x="81%" y="30%" numero="+")
            .h5.mb-2 Estructurada y exhaustiva
            p Este enfoque permite la obtención de los resultados esperados.


          .tarjeta.color-acento-botones.p-3(x="81%" y="56%" numero="+")
            .h5.mb-2 Adaptada 
            p Se alinea según los contextos interno y externo, así como a los objetivos propuestos.
          
          .tarjeta.color-acento-botones.p-3(x="62%" y="75%" numero="+")
            .h5.mb-2 Inclusiva
            p Propicia la participación de las partes interesadas, resultando en un proceso de gestión informado.
          
          .tarjeta.color-acento-botones.p-3(x="36%" y="75%" numero="+")
            .h5.mb-2 Dinámica 
            p Pese al dinamismo de los riesgos, gestionarlos correctamente permite responder apropiada y oportunamente
          
          .tarjeta.color-acento-botones.p-3(x="18%" y="56%" numero="+")
            .h5.mb-2 Mejor información disponible
            p Permite oportunidad, claridad y disponibilidad de la información. 
          
          .tarjeta.color-acento-botones.p-3(x="18%" y="28%" numero="+")
            .h5.mb-2 Factores humanos y culturales
            p Influencia del comportamiento humano y de la cultura en el proceso de gestión.
          
          .tarjeta.color-acento-botones.p-3(x="38%" y="13%" numero="+")
            .h5.mb-2 Mejora continua
            p Propicia mejoras a través de aprendizajes y experiencias.
      
      p.text-center Nota. Adaptada de NTC-ISO 31000 (2018). https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=74790
      p Por su parte, el marco de referencia de la gestión del riesgo tiene como propósito asistir a la empresa u organización a integrar el proceso mismo de manera transversal en actividades, funciones y demás procedimientos, calificándose como una gestión del riesgo eficaz, dependiendo de la manera en que sea integrada desde las directivas organizacionales aportando valor al proceso de toma de decisiones.
      p En el marco definido por la NTC-ISO 31000 se consideran los siguientes componentes que actúan en función del liderazgo y compromiso organizacional: 

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade')
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Marco de referencia
        img(src='@/assets/curso/temas/t1/img01.svg', alt='')
        .py-2
      p.text-center Nota. Adaptada de NTC-ISO 31000 (2018). https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=74790
    
    .row.align-items-center.subt.mb-4(data-aos="fade-left")
      .col-2.col-md-auto
        img(src='@/assets/curso/temas/t3/subt.svg', alt='')
      .col-10.col-md-auto.ps-0
        h3.mb-0 Liderazgo y compromiso

    p El liderazgo y compromiso de la alta dirección son esenciales para integrar la gestión de riesgos en todas las actividades de la organización. La dirección debe garantizar que los recursos necesarios estén disponibles, establecer políticas claras y asignar responsabilidades en todos los niveles. Esto alinea la gestión del riesgo con los objetivos y cultura organizacional, promoviendo un monitoreo constante de los riesgos y asegurando que el marco de gestión se adapte al contexto empresarial. Además, los órganos de supervisión deben asegurar que los riesgos se gestionen adecuadamente y se comuniquen de manera eficaz, y para lograr esto, debe soportarse en los componentes que se describen a continuación:
    
    TabsB.color-primario
      .py-4.py-md-5(titulo="Integración" :icono="require('@/assets/curso/temas/t1/ico1.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Integración
            p La integración de la gestión de riesgos en una organización implica comprender su estructura y contexto. Cada miembro es responsable de gestionar riesgos, adaptando este proceso a:
            p • Los objetivos
            p • La gobernanza
            p • Y la cultura de la empresa 
            p Las estructuras de gestión convierten las directrices administrativas, en estrategias sostenibles a largo plazo. Este proceso dinámico y continuo asegura que la gestión de riesgos esté alineada con los propósitos, operaciones y liderazgo de la organización, evitando que se trate como un componente aislado del funcionamiento global de la entidad.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/img02.svg', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Diseño" :icono="require('@/assets/curso/temas/t1/ico2.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Diseño
            p Para diseñar un marco de referencia adecuado para la gestión del riesgo, es esencial que la organización entienda tanto su contexto interno como externo, considerando factores sociales, políticos, económicos y culturales. La alta dirección debe demostrar su compromiso con la gestión de riesgos a través de políticas claras, la asignación de roles y recursos adecuados, y el establecimiento de canales efectivos de comunicación y consulta. Estos elementos permiten integrar la gestión del riesgo en todas las áreas de la organización, asegurando que cada miembro tenga una responsabilidad activa en su implementación y seguimiento.
          
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/img03.svg', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Implementación" :icono="require('@/assets/curso/temas/t1/ico3.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Implementación
            p Para implementar eficazmente un marco de gestión del riesgo, la organización debe desarrollar un plan con plazos y recursos definidos, clarificar quién toma decisiones y ajustar los procesos de toma de decisiones cuando sea necesario. La correcta implementación requiere el compromiso de las partes interesadas, permitiendo a la organización abordar la incertidumbre en sus decisiones y adaptarse a cambios en su entorno interno y externo, asegurando que la gestión del riesgo esté integrada en todas las actividades organizacionales.
          
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/img04.svg', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Valoración" :icono="require('@/assets/curso/temas/t1/ico4.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Valoración
            p Para valorar la eficacia del marco de gestión del riesgo, una organización debe realizar evaluaciones periódicas del desempeño de dicho marco en relación con sus objetivos y expectativas. Este proceso implica analizar si el marco sigue siendo adecuado para apoyar el cumplimiento de los objetivos de la organización, lo que puede incluir ajustes según sea necesario. Además, es fundamental medir cómo se está implementando, los indicadores clave y el comportamiento esperado, asegurando que continúe alineado con los propósitos organizacionales y el entorno cambiante.
      
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/img05.svg', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Mejora" :icono="require('@/assets/curso/temas/t1/ico5.png')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Mejora
            p Para mejorar el marco de gestión del riesgo, una organización debe adaptarlo continuamente a los cambios internos y externos, asegurando así su relevancia y efectividad. Esto incluye el monitoreo constante y el ajuste del marco para maximizar su valor. Además, se debe promover una mejora continua mediante la identificación de brechas y oportunidades, asignando responsabilidades y desarrollando planes de acción. Implementar estas mejoras fortalece el proceso de gestión del riesgo, garantizando que esté alineado con los objetivos estratégicos y operativos de la organización.
    
          .col-md-4
            figure
              img(src='@/assets/curso/temas/t1/img06.svg', alt='Texto que describa la imagen')                                             
      
    
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
