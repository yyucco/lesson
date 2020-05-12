<template>
  <div id="app">
    <vue-header></vue-header>
    <vue-form></vue-form>
    <router-view></router-view>
  </div>
</template>

<script>
import VueHeader from './components/header.vue'
import VueForm from './components/form1.vue'

export default {
  components: {
    VueHeader,
    VueForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>