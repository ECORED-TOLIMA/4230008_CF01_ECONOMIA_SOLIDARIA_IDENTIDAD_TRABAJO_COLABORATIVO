<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.BG01.justify-content-center.px-md-5.px-4.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img-01.png', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") El presente componente formativo orienta la comprensión de los fundamentos del modelo solidario y su relación con la cultura organizacional. Desde el contexto colombiano, se abordan principios, valores, modelos organizativos y normativa aplicable, con el fin de reconocer cómo las cooperativas, asociaciones, fondos de empleados, mutuales, fundaciones y demás formas asociativas pueden estructurarse, tomar decisiones y generar bienestar colectivo en sus territorios.
        .row.mb-0
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
          .col-lg-10.col-12
            p.mb-0 A partir de este recorrido, se analiza la cultura organizacional como eje para fortalecer la identidad colectiva, el sentido de pertenencia, la participación y la gestión del cambio en organizaciones solidarias. También se reconoce el papel del talento humano y del liderazgo en la conformación de equipos colaborativos, capaces de responder a necesidades comunitarias, aprovechar recursos locales y orientar sus acciones hacia iniciativas sostenibles.
    
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0 De manera complementaria, el componente integra el emprendimiento solidario, la identificación del sector productivo y el análisis de actores mediante herramientas como el mapa de actores y el mapa de empatía. Estos elementos favorecen el aprendizaje activo, la reflexión sobre casos cercanos al contexto colombiano y la toma de decisiones informadas, para que el aprendiz relacione los contenidos con situaciones reales de una organización comunitaria, asociatividad y desarrollo territorial.

    p.mb-4 Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la gestión de iniciativas solidarias, se recomienda acceder al recurso audiovisual que acompaña esta sección.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/hevOY20HzsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
