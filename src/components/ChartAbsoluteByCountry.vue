<template>
  <figure class="highcharts-figure">
    <div id="absoluteByState"></div>
    <p class="highcharts-description">
      blabla
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
            name: "Browsers",
            colorByPoint: true,
            data: [ //[Land, UFO-Ansichten insgesamt pro Land]
              ["ad", 4000],["adsad", 4000],["addd", 1000],["aasd", 2000],["adasd", 500],["aasdd", 4000],["aasdd", 7000]
            ]
          }
        ]
      });
    }
  }
}

</script>

<style scoped>

</style>