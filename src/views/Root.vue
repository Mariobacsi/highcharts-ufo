<template>
  <div id="grid">
    <all-sights-per-year class="card span-2" :data="[]"></all-sights-per-year>
    <sights-map class="card span-3 span-3" :data="sightsMap()"></sights-map>
  </div>
</template>

<script>
import AllSightsPerYear from "@/components/AllSightsPerYear";
import SightsMap from "@/components/SightsMap";

export default {
  name: "Root",
  components: {SightsMap, AllSightsPerYear},
  created() {
    this.data = this.$store.getters.getdata
  },
  methods: {
    allSightPerYear() {
      let result = []

      this.data.forEach(d => {
        let x = []
        if (result.includes(d.Jahr)) {
          //let tmp = result.indexOf(d.Jahr)
          result[d.Jahr] += 1
        } else {
          x = [d.Jahr, 1]
          result.push[x]
        }
      })
      return "Did it, done it, seens it..."
    },
    sightsMap() {
      let result = []
      let tmp = []

      this.data.forEach(d => {
        tmp.push[d.Land]
      })
      console.debug(tmp)
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