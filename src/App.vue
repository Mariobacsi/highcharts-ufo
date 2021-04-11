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

.card {
  background: #ffffff;
  min-width: 50px;
  min-height: 50px;
  display: grid;
  align-items: center;
  border-radius: .5rem;
  box-shadow: 0 2px 4px #cccccc;
  padding: .5em;
}
</style>
