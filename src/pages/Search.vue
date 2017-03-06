<!-- 搜索 -->
<template lang="html">
  <section id="rank_list">
    <home-header v-bind:title="title"></home-header>
    <div class="search-bar">
      <input type="text" name="" v-model.trim="userId" class="search-input" placeholder="搜索玩家">
      <button @click="searchHero(userId)" class="search-btn">搜索</button>
    </div>
    <nav-bar></nav-bar>
  </section>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import NavBar from '@/components/NavBar'
import api from '@/api'
import axios from 'axios'
const TOKEN = {
  "DAIWAN-API-TOKEN": "EEF78-F1DD4-158DD-59D89"
}
export default {
  name: 'Search',
  data () {
    return {
      isloading: true,
      title: "搜索",
      userId: ""
    }
  },
  components: {
    HomeHeader,
    NavBar
  },
  methods: {
    searchHero (userId){
      axios.get(
        api.getUserArea(userId),
        {headers: TOKEN}
      ).then((res) => {
        
      })
    }
  }
}
</script>

<style lang="css">
</style>
