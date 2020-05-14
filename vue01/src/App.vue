<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VueHeader from './components/header.vue'


export default {
  components: {
    VueHeader
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
form {
  width: 60%;;
  display: inline-block;
  margin: 40px auto;
}
form #formWrap {
  border: 1px solid #42b983;
  margin-bottom: 20px;
}
form #formTitle {
  background-color: #c3e4d5;
  border-bottom: 1px solid #42b983;
  position: relative;
  padding: 20px;
}
form #step {
  background-color: #8cdce8;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
}  
form #formContent {
  padding: 20px ;
}
p {
  margin: 0;
}
form  textarea {
  width:100%;
  height:50px;
}
</style>