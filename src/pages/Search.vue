<!-- 搜索 -->
<template lang="html">
  <section id="rank_list">
    <home-header v-bind:title="title"></home-header>
    <div class="search-bar">
      <input type="text" name="" v-model.trim="heroId" class="search-input" placeholder="搜索英雄">
      <button @click="searchHero(heroId)" class="search-btn">搜索</button>
    </div>
    <spinner v-show="showSpinner"></spinner>
    <section class="hero-box" v-show="showHero">
      <p class="hero-title">英雄介绍：{{searchData.hero_name}}</p>
      <div class="hero-block">
        <div class="hero-left hero-img">
          <img v-bind:src="searchData.img_src" alt="">
        </div>
        <div class="hero-left hero-content">
          <p class="hero-detail">{{searchData.hero_title}}</p>
          <p class="hero-detail">{{searchData.atk_range}}</p>
          <p class="hero-detail">{{searchData.hero_desc}}</p>
        </div>
      </div>
      <router-link :to="{name: 'detail', params: { id: searchData.hero_id ,imgId: searchData.hero_img_id }}">
        <div class="btn-detail">查看英雄详情</div>
      </router-link>
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
      showSpinner: false,
      showHero: false
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
      let _self = this
      this.data.forEach(function(item){
        if(item.hero_name === heroId){
          _self.searchData = item
          _self.searchData.img_src = api.getCommonUseResource('heroPortrait')+'/'+item.hero_img_id+'.png'
          _self.showHero = true
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
