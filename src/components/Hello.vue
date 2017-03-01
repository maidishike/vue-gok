<template>
  <div class="hello">
    <home-header></home-header>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      HomeHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
