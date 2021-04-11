<template>
  <div>
    <figure className="highcharts-figure">
      <div id="containerMaps"></div>
    </figure>
  </div>
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
          text: 'World population 2013 by country'
        },

        subtitle: {
          text: 'Demo of Highcharts map with bubbles'
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