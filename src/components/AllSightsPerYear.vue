<template>
  <figure className="highcharts-figure">
    <div id="AllSightsPerYear"></div>
    <p className="highcharts-description">

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

        subtitle: {
          text: 'Quelle: https://github.com/planetsig/ufo-reports/blob/master/csv-data/ufo-complete-geocoded-time-standardized.csv'
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