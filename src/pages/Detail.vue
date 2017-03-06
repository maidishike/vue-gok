<template lang="html">
  <section id="detail">
    <home-header v-bind:title="title"></home-header>
    <div class="detail-box">
      <div class="detail-banner">
        
      </div>
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
    "DAIWAN-API-TOKEN": "EEF78-F1DD4-158DD-59D89"
  }
  export default {
    data () {
      return {
        title: "123"
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
          this.title = res.data.data[0].name;
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
