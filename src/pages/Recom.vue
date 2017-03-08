<!-- 推荐 -->
<template lang="html">
  <section id="world">
    <home-header v-bind:title="title"></home-header>
    <nav-bar></nav-bar>
    <spinner v-show="showSpinner"></spinner>
    <div class="world-box">
      <mt-navbar v-model="type">
        <mt-tab-item id="0">全部</mt-tab-item>
        <mt-tab-item id="1">攻击</mt-tab-item>
        <mt-tab-item id="2">法术</mt-tab-item>
        <mt-tab-item id="3">防御</mt-tab-item>
        <mt-tab-item id="4">移动</mt-tab-item>
        <mt-tab-item id="5">打野</mt-tab-item>
      </mt-navbar>
      <ul class="equip-list">
        <li v-for="item in filterData">
          <img v-lazy="icon_url+'/'+item.item_id+'.jpg'" alt="">
          <p class="equip-name">{{item.item_name}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import NavBar from '@/components/NavBar'
import api from '@/api'
import axios from 'axios'
import Spinner from '@/components/Spinner'

const TOKEN = api.TOKEN
export default {
  name: 'recom',
  data () {
    return {
      title: "装备",
      showSpinner: true,
      items: [],
      type: '0',
      // icon_url: api.getCommonUseResource('equipment')
      icon_url: "http://game.gtimg.cn/images/yxzj/img201606/itemimg"
    }
  },
  created(){
    this.getWorldData()
  },
  methods: {
    getWorldData(){
      axios.get(api.getWorld(),{
        headers: TOKEN
      }).then((res) => {
        this.showSpinner = false
        this.items = res.data
      })
    },


  },
  computed: {
    filterData(){
      let items = this.items
      let self = this
      return items.filter(function(item){
        if(self.type == 0){
          return items
        }
        return item.item_type == self.type
      })
    }
  },
  watch: {
    // type: function(val){
    // }
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
