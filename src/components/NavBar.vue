<template lang="html">
  <nav class="nav">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="recom">
          <!-- <img slot="icon" src="../assets/100x100.png"> -->
          推荐
        </mt-tab-item>
        <mt-tab-item id="search">
          <!-- <img slot="icon" src="../assets/100x100.png"> -->
          搜索
        </mt-tab-item>
        <mt-tab-item>
          <!-- <img slot="icon" src="../assets/100x100.png"> -->
          tab3
        </mt-tab-item>
        <mt-tab-item id="list">
          <!-- <img slot="icon" src="../assets/100x100.png"> -->
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
        case 'Recom':
            this.selected = 'recom'
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
