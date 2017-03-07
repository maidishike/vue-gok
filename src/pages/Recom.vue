<!-- 推荐 -->
<template lang="html">
  <section id="world">
    <home-header v-bind:title="title"></home-header>
    <nav-bar></nav-bar>
    <spinner v-show="showSpinner"></spinner>
    <div class="world-box">
      <ul class="world-list">
        <li v-for="world in data ">
          <mt-badge class="badge" type="primary" v-if="world.plat_name == 'IOS'">{{world.plat_name}}</mt-badge>
          <mt-badge class="badge" type="success" v-if="world.plat_name == '安卓'">{{world.plat_name}}</mt-badge>
          <p class="zone-name">{{world.zone_name}}</p>
          <p class="world-name">{{world.world_name}}</p>
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
const TOKEN = {
  "DAIWAN-API-TOKEN": "BB929-56B2B-F6A99-B926D"
}
export default {
  name: 'recom',
  data () {
    return {
      title: "推荐",
      showSpinner: true,
      data: []
    }
  },
  created(){
    this.getWorldData()
  },
  methods: {
    getWorldData(){
      axios.get(api.getWorld('World'),{
        headers: TOKEN
      }).then((res) => {
        this.showSpinner = false
        this.data = res.data.data;
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
