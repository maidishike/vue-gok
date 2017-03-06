<!-- 推荐 -->
<template lang="html">
  <section id="recom">
    <home-header v-bind:title="title"></home-header>
    <nav-bar></nav-bar>
    <div class="slide-box">
      <div class="slide-bar">

      </div>
    </div>
  </section>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import NavBar from '@/components/NavBar'
export default {
  name: 'recom',
  data () {
    return {
      title: "推荐"
    }
  },
  components: {
    HomeHeader,
    NavBar
  }
}
</script>

<style lang="css">
</style>
