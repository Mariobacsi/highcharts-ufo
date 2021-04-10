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
  props: ['data'], //[country, percentage]
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
          text: 'Quelle: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
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
          data: [{
            name: 'USA',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Australien',
            y: 11.84
          }, {
            name: 'Marco',
            y: 10.85
          }, {
            name: 'Kroatien',
            y: 4.67
          }, {
            name: 'Österreich',
            y: 4.18
          }, {
            name: 'Deutschland',
            y: 7.05
          }]
        }]
      });
    }
  }
}
</script>

<style scoped>

</style>