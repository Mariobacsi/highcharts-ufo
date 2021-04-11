<template>
  <figure class="highcharts-figure">
    <div id="chartByCountry"></div>
    <p class="highcharts-description">
      Pie charts are very popular for showing a compact overview of a
      composition or comparison. While they can be harder to read than
      column charts, they remain a popular choice for small datasets.
    </p>
  </figure>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'


export default {
  name: "ChartByCountry",
  props: ['data'], //[Land, UFO-Ansichten insgesamt pro Land]
  data(){
    return{
    }
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      Highchart.chart('chartByCountry', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Ufo-Ansichten pro Land in Prozent, 1906 - 2017'
        },
        subtitle: {
          text: 'Quelle: <a href="https://raw.githubusercontent.com/planetsig/ufo-reports/master/csv-data/ufo-scrubbed-geocoded-time-standardized.csv" target="_blank">githubusercontent.com</a>'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [ //[country, UFO-Ansichten insgesamt pro Land]
              ["ad", 1000],["adsad", 200],["addd", 100],["aasd", 150],["aasd", 150]]
        }]
      });
    }
  }
}
</script>

<style scoped>

</style>