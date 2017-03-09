<!-- 推荐 -->
<template lang="html">
  <section id="world">
    <home-header v-bind:title="title"></home-header>
    <nav-bar></nav-bar>
    <div class="world-box">
      <mt-navbar v-model="type">
        <mt-tab-item id="0">全部</mt-tab-item>
        <mt-tab-item id="1">攻击</mt-tab-item>
        <mt-tab-item id="2">法术</mt-tab-item>
        <mt-tab-item id="3">防御</mt-tab-item>
        <mt-tab-item id="4">移动</mt-tab-item>
        <mt-tab-item id="5">打野</mt-tab-item>
      </mt-navbar>
      <spinner v-show="showSpinner"></spinner>
      <ul class="equip-list" @click="getEquipId">
        <li v-bind:id="item.item_id" v-for="item in filterData">
          <img v-bind:src="icon_url+'/'+item.item_id+'.jpg'" alt="">
          <p class="equip-name">{{item.item_name}}</p>
        </li>
      </ul>
      <mt-popup class="equip-popup" closeOnClickModal="true" v-model="popupVisible" popup-transition="popup-fade">
        <div id="itemFromTop">
            <div class="item-title clearfix">
                <img class="popup-img" v-bind:src="icon_url+'/'+equip.item_id+'.jpg'" alt="">
                <div class="cons">
                    <h4 id="Jname">{{equip.item_name}}</h4>
                    <p id="Jprice">售价：{{equip.price}}</p>
                    <p id="Jtprice">总价：{{equip.total_price}}</p>
                </div>
            </div>
            <div class="item-desc">
                <div id="Jitem-desc1" v-html="equip.des1"></div>
                <div id="Jitem-desc2" v-html="equip.des2"></div>
            </div>
        </div>
      </mt-popup>
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
      icon_url: "http://game.gtimg.cn/images/yxzj/img201606/itemimg",
      popupVisible: false,
      equip: {}
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
    getEquipId(e){
      let Target = e.target;
      let items = this.items;
      let targetId = '';
      if(Target.nodeName == "LI"){
        targetId= Target.id;
      }
      if(Target.nodeName.indexOf('LI') === -1){
        let target = Target.parentNode
        targetId= target.id
      }
      this.showEquipDetail(targetId)
    },
    showEquipDetail(id){
      let items = this.items;
      let self = this;
      items.filter(function(item){
        if(item.item_id == id){
          self.equip = item
        }
      })
      this.popupVisible = true;
      console.log(self.equip);
      return self.equip
    }

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
