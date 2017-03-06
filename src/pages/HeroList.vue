<template lang="html">
  <section id="search">
    <home-header v-bind:title="title"></home-header>
    <ul class="hero-ul">
      <li class="hero-list" v-for="item in items">
        <router-link :to="{name: 'detail', params: { id: item.hero_id }}">
          <div class="block">
            <img :src="img_base+item.hero_img_id+'.png'" alt="" />
            <p class="hero-name">{{item.hero_name}}</p>
            <p class="hero-title">{{item.hero_title}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <nav-bar></nav-bar>
  </section>
</template>

<script>
// TODO: 数据loading操作，图片懒加载
  import HomeHeader from '@/components/HomeHeader'
  import NavBar from '@/components/NavBar'
  import api from '@/api'
  import axios from 'axios'
  const TOKEN = {
    "DAIWAN-API-TOKEN": "EEF78-F1DD4-158DD-59D89"
  }
  export default {
    name: 'HeroList',
    created () {
      this.getList()
      this.img_base = api.getCommonUseResource("heroPortrait/")
    },
    data () {
      return {
        title: "英雄列表",
        items: [],
        img_base: ''
      }
    },
    methods: {
      getList () {
        axios.get(api.getAllHero(), {
          headers: TOKEN
        }).then((res) => {
          this.items = res.data.data
        })
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
