<template>
  <div id="grid">
    <all-sights-per-year class="card span-2" :data="allSightsPerYear()"></all-sights-per-year>
    <sights-map class="card span-3 span-3" :data="sightsMap()"></sights-map>
  </div>
</template>

<script>
import AllSightsPerYear from "@/components/AllSightsPerYear";
import SightsMap from "@/components/SightsMap";

export default {
  name: "Root",
  components: {SightsMap, AllSightsPerYear},
  data(){
    return {
      data: []
    }
  },
  created() {
    this.data = this.$store.getters.getdata
    console.debug("created",this.data)
  },
  methods: {
    allSightsPerYear() {
      let result = []
      let year = []
      let count = []
      console.debug("createdAllSights",this.data)

      this.data.forEach(d => {
        if (!year.includes(d.Jahr)) {
          year.push(d.Jahr)
          count.push(0)
        }
        count[year.indexOf(d.Jahr)] ++
      })

      for(let i = 0; i < year.length; i++){
        result.push([year[i], count[i]])
      }
      result.sort()
      console.debug("AllSightsPerYear", result)
      return result
    },
    sightsMap() {
      let result = []
      let year = []
      let count = []
      console.debug("createdAllSights",this.data)

      this.data.forEach(d => {
        if (!year.includes(d.Jahr)) {
          year.push(d.Jahr)
          count.push(0)
        }
        count[year.indexOf(d.Jahr)] ++
      })

      for(let i = 0; i < year.length; i++){
        result.push([year[i], count[i]])
      }
      result.sort()
      console.debug("AllSightsPerYear", result)
      return result
    }
  }
}
</script>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.span-2 {
  grid-column: span 2;
}

.span-3 {
  grid-column: span 3;
}
</style>