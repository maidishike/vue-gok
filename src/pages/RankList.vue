<!-- 排行榜 -->
<template lang="html">
  <section id="rank_list">
    <public-header></public-header>
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
