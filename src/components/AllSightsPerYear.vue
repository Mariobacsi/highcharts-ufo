<template>
  <figure className="highcharts-figure">
    <div id="AllSightsPerYear"></div>
    <p class="highcharts-description">
      Die Anzahl der UFO Sichtungen in der Zeitspanne von 1906-2014 ist sehr unregelmäßig. Bis vor 1972 gab es nur
      wenige Sichtungen. Mit dem Aufkommen von leicht zugänglichen Fotoapparaten und modernen Handys nahmen die
      Sichtungen stark zu. Dies zeigt sich in den letzten 10-20 Jahren am stärksten.
    </p>
  </figure>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'


export default {
  name: "AllSightsPerYear",
  props: ['data'],
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      Highchart.chart('AllSightsPerYear', {

        title: {
          text: 'UFO Sichtungen in der Zeitspanne von 1906-2014'
        },

        yAxis: {
          title: {
            text: 'Anzahl der UFO Sichtungen'
          }
        },

        xAxis: {
          accessibility: {
            rangeDescription: 'Range: 1906 to 2017'
          }
        },

        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 1906
          }
        },

        series: [{
          name: 'UFO Sichtungen pro Jahr',
          data: this.data
        }],

        responsive: {
          rules: [{
            condition: {
              maxWidth: 1000
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }

      });
    }
  }
}
</script>

<style>
</style>