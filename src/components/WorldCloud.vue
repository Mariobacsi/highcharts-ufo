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
  data() {
    return {}
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
      let lines = text.split(/[,\\. ]+/g),
          data = Highchart.reduce(lines, function (arr, word) {
            let obj = Highchart.find(arr, function (obj) {
              return obj.name === word;
            });
            if (obj) {
              obj.weight += 1;
            } else {
              obj = {
                name: word,
                weight: 1
              };
              arr.push(obj);
            }
            return arr;
          }, []);


      Highchart.chart('worldCloud', {
        series: [{
          type: 'wordcloud',
          data: data,
          name: 'Occurrences'
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

</style>