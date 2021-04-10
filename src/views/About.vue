<template>
  <div class="about">
    <h1>This is an about page</h1>
    <chart-by-state></chart-by-state>
  </div>
</template>
<script>
import ChartByState from "@/components/ChartAbsoluteByCountry";
export default {
  components: {ChartByState}
}
</script>