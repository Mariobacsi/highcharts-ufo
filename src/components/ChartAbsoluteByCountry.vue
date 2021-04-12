<template>
  <figure class="highcharts-figure">
    <div id="absoluteByState"></div>
    <p class="highcharts-description">
      Dieses Balkendiagramm zeigt die Anzahl der UFO-Ansichten pro Land. Dabei wird besonders der Unterschied zwischen
      der USA und den anderen Ländern bemerkbar gemacht und lässt auf einen eingeschränkten Datenzugang schließen.
    </p>
  </figure>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'

export default {
  name: "ChartAbsoluteByCountry",
  props: ['data'], //[Land, UFO-Ansichten insgesamt pro Land]
  data() {
    return {}
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      Highchart.chart('absoluteByState', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Ufo-Ansichten pro Land, 1906 - 2017'
        },
        subtitle: {
          text: 'Quelle: <a href="https://raw.githubusercontent.com/planetsig/ufo-reports/master/csv-data/ufo-scrubbed-geocoded-time-standardized.csv" target="_blank">githubusercontent.com</a>'
        },
        accessibility: {
          announceNewData: {
            enabled: true
          }
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: 'UFO-Ansichten'
          }

        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y}'
            }
          }
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}<br/>'
        },

        series: [
          {
            name: "Länder",
            colorByPoint: true,
            data: this.data
          }
        ]
      });
    }
  }
}

</script>

<style scoped>
.highcharts-description{
  text-align: left;
  font-size: 18px;
}
</style>