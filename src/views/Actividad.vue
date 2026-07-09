<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reto solidario: cooperar para construir comunidad.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los fundamentos de la economía solidaria, la cultura organizacional, el talento humano, el emprendimiento solidario y el análisis de actores.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el enfoque principal de la economía solidaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar utilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar bienestar colectivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La economía solidaria prioriza el bienestar colectivo, la cooperación y la participación de las personas por encima del beneficio individual.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a las organizaciones de economía solidaria?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centralización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Competencia interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Participación democrática.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Individualismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las organizaciones de economía solidaria se caracterizan por la participación democrática de sus integrantes en la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es un principio de la economía solidaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rentabilidad máxima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Adhesión voluntaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control externo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La adhesión voluntaria permite que las personas se vinculen libremente a una organización solidaria, de acuerdo con sus intereses y necesidades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La cultura organizacional está compuesta por:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equipos y tecnología.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Recursos financieros',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Valores, normas y creencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La cultura organizacional está conformada por valores, normas y creencias que orientan el comportamiento de los integrantes de una organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué elemento fortalece el sentido de pertenencia?',
          imagen: '@/assets/actividad/imagen5v.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Jerarquía rígida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Control estricto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'El liderazgo en economía solidaria es:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Autoritario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impositivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Participativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Individual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una característica del talento humano en este modelo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Individualismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Competencia interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabajo colaborativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El trabajo colaborativo fortalece el talento humano, porque permite unir capacidades, experiencias y esfuerzos para alcanzar objetivos comunes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué herramienta permite analizar fortalezas y debilidades?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mapa mental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'DOFA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuadro sinóptico',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La matriz DOFA permite analizar fortalezas, debilidades, oportunidades y amenazas de una organización o iniciativa solidaria.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué permite el diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El diagnóstico organizacional permite analizar la situación de una organización para identificar necesidades, recursos y oportunidades de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué promueve la gestión del cambio?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Adaptación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Estabilidad absoluta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rigidez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La gestión del cambio promueve la adaptación de la organización frente a nuevas condiciones del entorno.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué caracteriza al emprendimiento solidario?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Individualismo..',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lucro exclusivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impacto social.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El emprendimiento solidario se caracteriza por generar impacto social y aportar al bienestar de la comunidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué habilidad es clave en el emprendedor?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Creatividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rigidez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La creatividad es una habilidad clave del emprendedor, porque permite proponer soluciones nuevas frente a necesidades del contexto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué competencia es necesaria en emprendimiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Improvisación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Planificación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Desorganización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La planificación permite organizar recursos, acciones y tiempos para desarrollar iniciativas emprendedoras de manera ordenada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué sector incluye la agricultura?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Primario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Secundario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Terciario',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuaternario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La agricultura pertenece al sector primario, porque se relaciona con el aprovechamiento directo de los recursos naturales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué es un mapa de actores?',
          imagen: '@/assets/actividad/imagen5v.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lista de tareas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificación de participantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cronograma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El mapa de actores permite identificar personas, organizaciones o entidades que influyen en una iniciativa o territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué analiza el mapa de empatía?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finanzas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pensamientos y emociones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El mapa de empatía ayuda a comprender pensamientos, emociones, necesidades e intereses de los actores relacionados con una iniciativa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué valor es clave en la economía solidaria?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solidaridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Individualismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La solidaridad es un valor esencial de la economía solidaria, porque impulsa el apoyo mutuo y el bienestar colectivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué norma regula la economía solidaria en Colombia?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 80.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 30.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 454.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La Ley 454 de 1998 establece el marco conceptual que regula la economía solidaria en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué fortalece la cultura organizacional?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Desorden.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Improvisación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La comunicación fortalece la cultura organizacional, porque facilita la participación, la confianza y la coordinación entre los integrantes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué busca la economía solidaria?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dominio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bienestar colectivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La economía solidaria busca el bienestar colectivo mediante la cooperación, la participación democrática y la ayuda mutua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad. Sus respuestas demuestran comprensión de los fundamentos de la economía solidaria, la cultura organizacional y el análisis de actores en el contexto colombiano.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
