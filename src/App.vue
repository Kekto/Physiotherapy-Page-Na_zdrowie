<template>
  <nav>
    <NavBar/>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0px
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: 0.3s;

    &:hover{
      color: #0e9156;
    }

    &.router-link-exact-active {
      color: #0e9156;
    }
  }
}
</style>
