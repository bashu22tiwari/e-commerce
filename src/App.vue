<template>
  <Navbar />
  <!-- <PhotoSlider /> -->
  <!-- <HomePage /> -->
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import PhotoSlider from './components/PhotoSlider.vue'
// import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // PhotoSlider
    // HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  background-color: rgb(236, 211, 236);
}
</style>
