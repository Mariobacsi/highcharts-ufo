<template>
  <figure class="highcharts-figure">
    <div id="worldCloud"></div>
    <p class="highcharts-description">
      In dieser Wortwolke wurden alle Wörter, die zur Beschreibung des Aussehens des UFOs benutzt wurden, beschrieben.
      Desto öfter das Wort vorkam, desto größer wird das Wort hier angezeigt. Besonder oft kamen die Wörter "light" oder
      "fireball" vor, die wahrscheinlich wegen der hauptsächlichen nächtlichen Sichtungen einen starken Kontrast
      lieferten, weshalb
      diese Beschreibung besonders oft vorkam.
    </p>
  </figure>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'
import Wordcloud from 'highcharts/modules/wordcloud';

Wordcloud(Highchart);

export default {
  name: "WorldCloud",
  props: ['data'], //[text mit allen Beschreibungen]
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {

      Highchart.chart('worldCloud', {
        series: [{
          type: 'wordcloud',
          data: this.data,
          name: 'Beschreibungen'
        }],
        title: {
          text: 'Wortwolke der Beschreibung, 1906 - 2017'
        },
        subtitle: {
          text: 'Quelle: <a href="https://raw.githubusercontent.com/planetsig/ufo-reports/master/csv-data/ufo-scrubbed-geocoded-time-standardized.csv" target="_blank">githubusercontent.com</a>'
        }
      })
    }
  }
}
</script>

<style scoped>
.highcharts-description {
  text-align: left;
  font-size: 18px;
}
</style>