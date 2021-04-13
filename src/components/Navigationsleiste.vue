<template>
  <nav id="nav">
    <div id="logo">
      <img src="../../src/assets/ufo-logo.png" height="50px">
    </div>
    <div id="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/">Statistiken</router-link>
    </div>

  </nav>
</template>

<script>
export default {
name: "Navigationsleiste"
}
</script>

<style scoped lang="scss">
#nav {
  box-shadow: 2px 2px 40px 0;
  margin-bottom: 30px;
  position:fixed;
  z-index:10;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#links{

}
</style>