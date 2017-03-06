<template>
  <div class="hello">
    <home-header></home-header>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import NavBar from './NavBar'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      HomeHeader,
      NavBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
