<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta los fundamentos de la economía solidaria como modelo organizativo, social y productivo, basado en la cooperación, la participación democrática, la ayuda mutua y el bienestar colectivo. A partir de este enfoque, se abordan sus conceptos, modelos organizativos, principios, valores, normativa aplicable en Colombia, oportunidades y riesgos, con el fin de comprender cómo las organizaciones solidarias aportan al desarrollo de las comunidades y al fortalecimiento de las relaciones de cooperación, confianza y apoyo entre sus integrantes.
    p El recorrido también integra la cultura organizacional, el talento humano, el liderazgo, el emprendimiento solidario y el análisis del sector productivo como elementos necesarios para consolidar iniciativas sostenibles. De esta manera, el componente permite reconocer la importancia de la identidad colectiva, el sentido de pertenencia, la gestión del cambio y el uso de herramientas como el mapa de actores y el mapa de empatía para analizar necesidades, recursos y oportunidades del contexto colombiano.
    p.mb-4 A continuación, se presenta el mapa conceptual que organiza de manera visual los ejes temáticos del componente formativo y las relaciones que los articulan:

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Fundamentos de la economía solidaria y cultura organizacional” organiza el componente formativo en cinco ejes principales: economía solidaria, cultura organizacional, talento humano, emprendimiento solidario y sector productivo y análisis de actores. Cada eje presenta subtemas asociados, desde el concepto del modelo solidario, sus principios, valores y normativa, hasta la cultura organizacional, el liderazgo, las competencias emprendedoras, el mapa de actores y el mapa de empatía. Esta organización permite comprender la relación entre el modelo solidario, la gestión de las organizaciones y el análisis del contexto colombiano.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
