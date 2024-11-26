<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'La gestión del riesgo en la empresa',
      titulo: 'Cuestionario',
      introduccion:
        'Apropiarse de los conocimientos asociados al proceso de gestión del riesgo en la empresa.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal propósito de la gestión del riesgo según la NTC-ISO 31000 (2018)? ',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asegurar el cumplimiento normativo ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Maximizar la rentabilidad ', esCorrecta: false },
            { id: 'c', texto: 'Crear y proteger valor ', esCorrecta: true },
            {
              id: 'd',
              texto: 'Minimizar los riesgos de inversión ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El liderazgo y compromiso de la alta dirección son esenciales para garantizar la asignación de recursos necesarios en la gestión del riesgo. ',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes factores NO pertenece al análisis del contexto externo en la gestión del riesgo? ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Factores financieros ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Expectativas de las partes interesadas ',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Cultura de la organización ', esCorrecta: true },
            { id: 'd', texto: 'Regulaciones legales ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué componente del marco de gestión del riesgo asegura que este proceso no se trate como un componente aislado dentro de la organización? ',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Implementación', esCorrecta: false },
            {
              id: 'b',
              texto: 'Integración ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Valoración ', esCorrecta: false },
            { id: 'd', texto: 'Mejora continua ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El proceso de gestión del riesgo es lineal y debe seguir una secuencia estricta. ',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué elemento es fundamental para establecer los criterios del riesgo dentro de una organización? ',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Las capacidades tecnológicas ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La misión y visión ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La medición de las consecuencias y la probabilidad ',
              esCorrecta: true,
            },
            { id: 'd', texto: 'El contexto externo ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué es esencial para que la formulación de una estrategia empresarial sea efectiva? ',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La identificación de la ventaja competitiva deseada. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar la planificación a largo plazo. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Centrarse únicamente en los productos existentes. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar los cambios en el entorno. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'La probabilidad de un riesgo puede medirse únicamente por su frecuencia de ocurrencia. ',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué se entiende por "exposición" en el contexto del plan de mejoramiento de la gestión de riesgo? ',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'El grado de transparencia en la empresa ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La medida del riesgo inevitable asociado a una acción planificada ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La frecuencia con la que se revisan los riesgos ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número total de riesgos identificados ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la finalidad principal de asignar una probabilidad y un impacto a cada riesgo identificado? ',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar los riesgos de mayor a menor según su impacto financiero ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar la prioridad de las acciones a tomar para mitigar el riesgo ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Identificar qué riesgos eliminar de la evaluación ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer un registro de todos los posibles riesgos sin priorización ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
