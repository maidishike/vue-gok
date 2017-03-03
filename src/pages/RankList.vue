<!-- 排行榜 -->
<template lang="html">
  <section id="rank_list">
    <public-header></public-header>
    <div class="loading-wrapper" v-if="isloading" >
      <div class="loading"></div>
    </div>
    <div class="song-list">
      <h2 class="list-title">电台</h2>
    </div>
  </section>
</template>

<script>
import PublicHeader from '@/components/PublicHeader'
export default {
  name: 'RankList',
  data () {
    return {
      isloading: true
    }
  },
  components: {
    PublicHeader
  }
}
</script>

<style lang="css">
</style>
