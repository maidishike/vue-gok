<template lang="html">
  <nav class="nav">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="equip">
          <img slot="icon" src="../../static/img/icon_01.jpg">
          装备
        </mt-tab-item>
        <mt-tab-item id="search">
          <img slot="icon" src="../../static/img/icon_02.jpg">
          搜索
        </mt-tab-item>
        <mt-tab-item id="list">
          <img slot="icon" src="../../static/img/icon_03.png">
          英雄
        </mt-tab-item>
      </mt-tabbar>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        selected : ''
      }
    },
    created (){
      var name = this.$route.name
      console.log(name);
      switch(name) {
        case 'HeroList':
            this.selected = 'list'
            break
        case 'Equip':
            this.selected = 'equip'
            break
        case 'Search':
            this.selected = 'search'
            break

      }
    },

    watch:{
      selected : function(val, oldVal){
        this.$router.replace('/'+val)
      }
    }
  }
</script>

<style lang="css">

</style>
