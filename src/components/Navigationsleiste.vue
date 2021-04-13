<template>
  <nav id="nav">
    <div id="logo">
      <router-link to="/"><img src="../../src/assets/ufo-logo.png" height="50px"></router-link>
    </div>
    <div id="links">
      <router-link to="/">Home</router-link>
      <router-link to="/statistics">Statistiken</router-link>
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
  box-shadow: 0 2px 4px #cccccc;
  position:fixed;
  left: 0;
  top: 0;
  z-index:10;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    padding-left: 20px;

    &.router-link-exact-active {
      color: #2d2e83;
    }
  }
}

#links{

}
</style>