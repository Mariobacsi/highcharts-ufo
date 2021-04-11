<template>
  <div>
    <figure className="highcharts-figure">
      <div id="containerSeason"></div>
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
          data: this.dataC,
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
#containerSeason {
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