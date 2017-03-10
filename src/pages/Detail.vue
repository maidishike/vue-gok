<template lang="html">
  <section id="detail">
    <home-header v-bind:title="title"></home-header>
    <div class="detail-box">
      <img class="detail-banner" :src="resource">
      <div class="tag-box">
        <mt-badge type="primary" v-if="data.tag1">{{data.tag1}}</mt-badge>
        <mt-badge type="success" v-if="data.tag2">{{data.tag2}}</mt-badge>
      </div>
      <mt-navbar v-model="selectedTab">
        <mt-tab-item id="tab1">技能说明</mt-tab-item>
        <mt-tab-item id="tab2">英雄技巧</mt-tab-item>
      </mt-navbar>
      <spinner v-show="showSpinner"></spinner>
      <div class="detail-box">
        <div v-show="selectedTab == 'tab1'" class="flex-box" v-for="skill in skill_list">
          <div class="flex-left">
            <img v-bind:src="skillIcon+'/'+skill.skill_id+'.png'" alt="">
          </div>
          <div class="flex-left2">
            <p class="skill-name">{{skill.skill_name}}</p>
            <p class="skill-des">{{skill.skill_desc}}</p>
          </div>
        </div>
        <div v-show="selectedTab == 'tab2'" class="flex-box">
          <mt-badge class="use-title" type="error">使用技巧</mt-badge>
          <p class="use-skill">{{data.use_skill}}</p>
          <mt-badge class="use-title" type="warning">团战技巧</mt-badge>
          <p class="use-skill">{{data.teamwork_skill}}</p>
        </div>
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
  import Spinner from '@/components/Spinner'
  const TOKEN = api.TOKEN
  export default {
    data () {
      return {
        title: "",
        selectedTab: 'tab1',
        showSpinner: true,
        resource: api.getCommonUseResource('heroCard')+'/'+this.$route.params.id+'.jpg',
        data: [],
        skill_list: [],
        skillIcon: api.getCommonUseResource('skillIcon')
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
          this.showSpinner = false
          this.title = res.data.data[0].name
          this.data = res.data.data[0]
          this.skill_list = res.data.data[0].skill_list
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
