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
  name: "ChartByState",
  props: ['data'], //[country, UFO-Ansichten]
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
          text: 'Quelle: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
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
            data: [
              {
                name: "USA",
                y: 6200
              },
              {
                name: "Australien",
                y: 4000
              },
              {
                name: "Kroatien",
                y: 1500
              },
              {
                name: "Kristianland",
                y: 10000
              },
              {
                name: "Frankreich",
                y: 4000
              },
              {
                name: "Österreich",
                y: 1000
              },
              {
                name: "Zimbabwe",
                y: 500
              }
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