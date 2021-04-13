<template>
  <figure className="highcharts-figure">
    <div id="containerMaps"></div>
    <p class="highcharts-description">
      Auf dieser Weltkarte ist dargestellt, wo UFOs gesichtet wurden. Es ist zu sehen, dass in den USA die UFOs vermerkt
      wurden. Der Grund dafür kann sein, dass die USA als einer der freisten und fortschrittlichsten Länder gilt und man
      deshalb auch alle Unbekannte Flugobjekte aufzeichnet.
    </p>
  </figure>
</template>

<script>

export default {
  name: "SightsMap",
  props: ['data'],
  data() {
    return {}
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      var Highcharts = require('highcharts/highmaps.js'),
          map = require('@highcharts/map-collection/custom/world.geo.json');
      const getCountryISO3 = require("country-iso-2-to-3");

      this.data.forEach(element =>
          element.code3 = getCountryISO3(element.code)
      )
      ;

      Highcharts.mapChart('containerMaps', {
        chart: {
          borderWidth: 1,
          map: map
        },

        title: {
          text: 'Orte der Ufo Sichtungen'
        },

        legend: {
          enabled: false
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        series: [{
          name: 'Countries',
          color: '#E0E0E0',
          enableMouseTracking: false
        }, {
          type: 'mapbubble',
          name: 'Population 2016',
          joinBy: ['iso-a3', 'code3'],
          data: this.data,
          minSize: 4,
          maxSize: '12%',
          tooltip: {
            pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
          }
        }]
      });
      // });
    }
  }
}
</script>
<style>
#containerMaps {
  height: 400px;
}

</style>