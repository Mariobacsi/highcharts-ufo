<template>
    <figure className="highcharts-figure">
      <div id="containerSeason"></div>
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
            text: 'Sichtungen'
          }
        },
        tooltip: {
          pointFormat: 'UFO Sichtungen: <b>{point.y}</b>'
        },
        series: [{
          name: 'UFO Sichtungen',
          data: [
            ["Januar", this.dataC[0][1]],
            ["Februar", this.dataC[1][1]],
            ["März", this.dataC[2][1]],
            ["April", this.dataC[3][1]],
            ["Mai", this.dataC[4][1]],
            ["Juni", this.dataC[5][1]],
            ["Juli", this.dataC[6][1]],
            ["August", this.dataC[7][1]],
            ["September", this.dataC[8][1]],
            ["Oktober", this.dataC[9][1]],
            ["November", this.dataC[10][1]],
            ["Dezember", this.dataC[11][1]]
          ],
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