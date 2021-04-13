<template>
  <div id="app">
    <navigationsleiste></navigationsleiste>
    <router-view/>
  </div>
</template>

<script>
import Axios from 'axios'
import Navigationsleiste from "@/components/Navigationsleiste";

export default {
  name: 'App',
  components: {Navigationsleiste},
  created() {
    this.loadJSON()
  },
  methods: {
    test(zahl) {
      return zahl
    },
    loadJSON() {
      Axios.get(process.env.BASE_URL + 'daten.json')
          .then(result => {
            let data = result.data
            let regex = new RegExp("(\\d+)\\/(\\d+)\\/(\\d+) (\\d+):(\\d+)")
            data.forEach(e => {
              let match = regex.exec(e.Datum)
              e.Tag = match[2]
              e.Monat = match[1]
              e.Jahr = match[3]
              e.Stunde = match[4]
              e.Minute = match[5]
            })
            this.$store.commit("setData", data)
          })
    }

  }
}
</script>

<style lang="scss">

html{
  width: 100%;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: #eeeeee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.card {
  background: #ffffff;
  min-width: 50px;
  min-height: 50px;
  display: grid;
  align-items: center;
  border-radius: .5rem;
  box-shadow: 0 2px 4px #cccccc;
  padding: .5em;
  width: 95%;
}
.highcharts-description {
  border-top-style: solid;
  border-color: #95CEFF;
  padding-top: 20px;
  text-align: left;
  font-size: 18px;
}
</style>
