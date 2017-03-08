<!-- 搜索 -->
<template lang="html">
  <section id="rank_list">
    <home-header v-bind:title="title"></home-header>
    <div class="search-bar">
      <input type="text" name="" v-model.trim="heroId" class="search-input" placeholder="搜索英雄">
      <button @click="searchHero(heroId)" class="search-btn">搜索</button>
    </div>
    <spinner v-show="showSpinner"></spinner>
    <section class="hero-box">
      <div class="hero-left">
        <img v-bind:src="searchData.img_src" alt="">
      </div>
      <div class="hero-left">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </section>
    <nav-bar></nav-bar>
  </section>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import NavBar from '@/components/NavBar'
import Spinner from '@/components/Spinner'
import api from '@/api'
import axios from 'axios'
const TOKEN = api.TOKEN
export default {
  name: 'Search',
  data () {
    return {
      isloading: true,
      title: "搜索",
      heroId: "",
      data: [],
      searchData: {},
      showSpinner: false
    }
  },
  created (){
    this.getList()
  },
  computed: {

  },
  methods: {
    getList () {
      axios.get(api.getAllHero(), {
        headers: TOKEN
      }).then((res) => {
        this.data = res.data.data
      })
    },
    searchHero (heroId){
      this.data.forEach(function(item){
        if(item.hero_id == heroId){
          this.searchData.hero_img_id = item.hero_img_id
          this.searchData.hero_id = item.hero_id
          this.searchData.hero_desc = item.hero_desc
          this.searchData.hero_title = item.hero_title
          this.searchData.atk_range = item.atk_range
          this.searchData.img_src = api.getCommonUseResource('heroPortrait')+'/'+item.hero_img_id+'.png'
        }
      })
    }
  },
  components: {
    HomeHeader,
    NavBar,
    Spinner
  }
}
</script>

<style lang="css">
</style>
