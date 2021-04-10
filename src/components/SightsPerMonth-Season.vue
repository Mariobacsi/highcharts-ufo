<template>
  <div>
    <figure className="highcharts-figure">
      <div id="container"></div>
    </figure>
  </div>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'


export default {
  name: "SightsPerMonth",
  props: ['data'],
  data() {
    return {
      input: undefined
    }
  },
  created() {
    this.data.forEach(e => {
      switch (e[0]) {
        case 1:
          e[0] = "Januar"
          break;
        case 2:
          e[0] = "Februar"
          break;
        case 3:
          e[0] = "März"
          break;
        case 4:
          e[0] = "April"
          break;
        case 5:
          e[0] = "Mai"
          break;
        case 6:
          e[0] = "Juni"
          break;
        case 7:
          e[0] = "Juli"
          break;
        case 8:
          e[0] = "August"
          break;
        case 9:
          e[0] = "September"
          break;
        case 10:
          e[0] = "Oktober"
          break;
        case 11:
          e[0] = "November"
          break;
        case 12:
          e[0] = "Dezember"
          break;
      }
    })
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      Highchart.chart('container', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'In welchen Monaten werden UFOs meistens beobachtet?'
        },
        xAxis: {
          type: 'category',
          labels: {
            rotation: -45,
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Sightings (millions)'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          pointFormat: 'Sightings: <b>{point.y:.1f} millions</b>'
        },
        series: [{
          name: 'Sightings',
          /**
           * [
           *  [monat, anz],
           *  [monat, anz],
           *  [monat, anz],
           *  [monat, anz],
           *  ...
           * ]
           */
          data: this.data,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
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
#container {
  height: 400px;
}

.highcharts-figure, .highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #EBEBEB;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>