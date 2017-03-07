<template lang="html">
  <section id="detail">
    <home-header v-bind:title="title"></home-header>
    <div class="detail-box">
      <img class="detail-banner" :src="resource">
    </div>
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
    "DAIWAN-API-TOKEN": "BB929-56B2B-F6A99-B926D"
  }
  export default {
    data () {
      return {
        title: "",
        resource: api.getCommonUseResource('heroCard')+'/'+this.$route.params.id+'.jpg',
        data: []
      }
    },
    created () {
      this.getDetail()
    },
    methods: {
      getDetail (){
        let id = this.$route.params.id;
        axios.get(api.getChampionDetail(id),{
          headers: TOKEN
        }).then((res) => {
          this.title = res.data.data[0].name
          this.data = res.data.data[0]
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
