<template>
    <figure className="highcharts-figure">
      <div id="containerSeason"></div>
      <p class="highcharts-description">
        blabla
      </p>
    </figure>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'


export default {
  name: "SightsPerMonth",
  props: ['data'],
  data() {
    return {
      dataC: []
    }
  },
  created() {
    this.dataC = this.data
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      Highchart.chart('containerSeason', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'In welchen Monaten werden UFOs meistens beobachtet?'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Sightings (millions)'
          }
        },
        tooltip: {
          pointFormat: 'UFO Sichtungen: <b>{point.y}</b>'
        },
        series: [{
          name: 'UFO Sichtungen',
          /**
           * [
           *  [monat, anz],
           *  [monat, anz],
           *  [monat, anz],
           *  [monat, anz],
           *  ...
           * ]
           */
          data: this.dataC,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        }]
      });
    }
  }
}
</script>
<style>
#containerSeason {
  height: 400px;
}
</style>