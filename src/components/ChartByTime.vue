<template>
  <figure class="highcharts-figure">
    <div id="chartByTime"></div>
    <p class="highcharts-description">
      blabla
    </p>
  </figure>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'

export default {
  name: "ChartByTime",
  props: ['data'], //[Uhrzeit, UFO-Ansichten pro Uhrzeit]
  data() {
    return {}
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      Highchart.chart('chartByTime', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Anzahl der Ufo-Ansichten pro Stunde'
        },
        subtitle: {
          text: 'Quelle: <a href="https://raw.githubusercontent.com/planetsig/ufo-reports/master/csv-data/ufo-scrubbed-geocoded-time-standardized.csv" target="_blank">githubusercontent.com</a>'
        },
        xAxis: {
        },
        yAxis: {
          title: {
            text: 'Anzahl der Ufo-Ansichten'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: [{
          name: 'UFO Sichtungen pro Stunde',
          /**
           * [Uhrzeit, Anzahl]
           */
          data: this.data,
        }]
      });
    }
  }
}
</script>

<style scoped>

</style>