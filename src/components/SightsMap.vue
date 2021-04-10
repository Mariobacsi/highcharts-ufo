<template>
  <div>
    <figure className="highcharts-figure">
      <div id="container"></div>
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

      Highcharts.mapChart('container', {
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
#container {
  height: 400px;
}

.highcharts-figure, .highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #EBEBEB;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>