<template>
  <div class="hello">
    <home-header></home-header>
    <nav-header></nav-header>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import NavHeader from './Nav'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      HomeHeader,
      NavHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
