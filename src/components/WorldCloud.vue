<template>
  <figure class="highcharts-figure">
    <div id="worldCloud"></div>
    <p class="highcharts-description">
      Word clouds are used to visualize how often each word in a
      text occurs. This example uses an excerpt from the popular
      "Lorem Ipsum" text. Words that appear often will appear
      larger.
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
          name: 'Occurrences'
        }],
        title: {
          text: 'Wortwolke der Beschreibung, 1906 - 2017'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>