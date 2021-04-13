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
  box-shadow: 2px 2px 10px 0;
  margin-bottom: 30px;
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