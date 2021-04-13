<template>
  <div id="grid">
    <all-sights-per-year class="card span-6" :data="allSightsPerYear()"></all-sights-per-year>
    <sights-map class="card span-6" :data="sightsMap"></sights-map>
    <chart-absolute-by-country class="card span-3" :data="sightsCountry"></chart-absolute-by-country>
    <chart-by-country class="card span-3" :data="sightsCountry"></chart-by-country>
    <sights-per-month class="card span-6" :data="sightsPerMonth()"></sights-per-month>
    <chart-by-time class="card span-6" :data="sightsPerTime()"></chart-by-time>
    <world-cloud class="card span-6" :data="allShapes()" ></world-cloud>
  </div>
</template>

<script>
import AllSightsPerYear from "@/components/AllSightsPerYear";
import SightsMap from "@/components/SightsMap";
import SightsPerMonth from "@/components/SightsPerMonth-Season";
import WorldCloud from "@/components/WorldCloud";
import ChartByCountry from "@/components/ChartByCountry";
import ChartAbsoluteByCountry from "@/components/ChartAbsoluteByCountry";
import ChartByTime from "@/components/ChartByTime";

export default {
  name: "Root",
  components: {
    ChartByTime,
    ChartAbsoluteByCountry, ChartByCountry, WorldCloud, SightsPerMonth, SightsMap, AllSightsPerYear},
  data() {
    return {
      data: [],
      sightsMap: [],
      sightsCountry: []
    }
  },
  created() {
    this.data = this.$store.getters.getdata
    console.debug("created", this.data)
    this.sightsPerCountry()
  },
  methods: {
    allSightsPerYear() {
      let result = []
      let year = []
      let count = []

      this.data.forEach(d => {
        if (!year.includes(d.Jahr)) {
          year.push(d.Jahr)
          count.push(0)
        }
        count[year.indexOf(d.Jahr)]++
      })

      for (let i = 0; i < year.length; i++) {
        result.push([year[i], count[i]])
      }

      result.sort()
      console.debug("AllSightsPerYear", result)
      return result
    },
    allWords() {
      let result = []
      let words = []
      let count = []

      let wordsData = []

      this.data.forEach(d => {
        try {
          if (d.Beschreibung && d.Beschreibung !== "") {
            let arr = d.Beschreibung.split(/[,\\. ]+/g)
            wordsData = wordsData.concat(arr)
          }
        } catch (err) {
          console.debug(d.Beschreibung)
        }
      })

      wordsData.forEach(word => {
        if (!words.includes(word)) {
          words.push(word)
          count.push(0)
        }
        count[words.indexOf(word)]++
      })

      for (let i = 0; i < words.length; i++) {
        result.push({
          weight: count[i],
          name: words[i]
        })
      }
      console.debug("AllWords", result)
      return result
    },
    allShapes(){
      let result = []
      let shape = []
      let count = []

      this.data.forEach(d => {
        if (!shape.includes(d.Form)) {
          shape.push(d.Form)
          count.push(0)
        }
        count[shape.indexOf(d.Form)]++
      })

      for (let i = 0; i < shape.length; i++) {
        result.push({
          weight: count[i],
          name: shape[i]
        })
      }
      console.debug("AllShapes", result)
      return result
    },
    sightsPerCountry() {
      let code = []
      let count = []

      this.data.forEach(d => {
        if (!code.includes(d.Land)) {
          code.push(d.Land)
          count.push(0)
        }
        count[code.indexOf(d.Land)]++
      })


      for (let i = 0; i < code.length; i++) {
        this.sightsMap.push({
          z: count[i],
          code: code[i].toUpperCase()
        })
      }
      console.debug("SightsMap", this.sightsMap)

      for (let i = 0; i < code.length; i++) {
        let c = "Unbekannt"
        if (code[i]) c = code[i].toUpperCase()
        this.sightsCountry.push([c, count[i]])
      }
      console.debug("SightsCountry", this.sightsCountry)
    },
    sightsPerMonth: function () {
      let result = []
      let month = []
      let count = []

      this.data.forEach(d => {
        let m = parseInt(d.Monat)
        if (!month.includes(m)) {
          month.push(m)
          count.push(0)
        }
        count[month.indexOf(m)]++
      })

      for (let i = 0; i < month.length; i++) {
        result.push([month[i], count[i]])
      }

      result.sort((a, b) => {
        return a[0] < b[0]
      })

      console.debug("SightsPerMonth", result)
      return result
    },
    sightsPerTime(){
      let result = []
      let time = []
      let count = []

      this.data.forEach(d => {
        let m = parseInt(d.Stunde)
        if (!time.includes(m)) {
          time.push(m)
          count.push(0)
        }
        count[time.indexOf(m)]++
      })

      for (let i = 0; i < time.length; i++) {
        result.push([time[i], count[i]])
      }

      result.sort((a, b) => {
        return a[0] < b[0]
      })

      let obj24 = result.splice(result.indexOf(24), 1)
      result[result.indexOf(0)] += obj24[1]

      console.debug("SightsPerHour", result)
      return result
    }
  }
}
</script>

<style scoped lang="scss">



#grid {
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: .5em;
}

.span-last {
  grid-column: 2 / span 3;
}

.span-2 {
  grid-column: span 2;
}

.span-3 {
  grid-column: span 3;
}

.span-4 {
  grid-column: span 4;
}

.span-5 {
  grid-column: span 5;
}

.span-6 {
  grid-column: span 6;
}

.highcharts-figure, .highcharts-data-table table {
  margin: 1em auto;
}
</style>