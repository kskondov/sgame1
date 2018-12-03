<template>
  <div id="app">
    <sgame1 msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import sgame1 from './components/sgame1.vue'

export default {
  name: 'app',
  components: {
    sgame1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
