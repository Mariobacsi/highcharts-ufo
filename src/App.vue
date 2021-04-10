<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      data: undefined,
      schmutz1: "hallo"
    }
  },
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
            this.data = result.data
          })
    }

  }
}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
