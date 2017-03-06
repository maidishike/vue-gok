<template lang="html">
  <section>
    <ul v-for= "item in raceList">
      <li>{{item.recap_title}}</li>
    </ul>
  </section>
</template>
<script>
import api from '../api'
const header = {'DAIWAN-API-TOKEN': '78710-B0810-777C7-C9A85'}
export default {
  data () {
    return {
      raceList: {}
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      this.$http.get(api.getNomalRace(), {headers: header}).then((res) => {
        this.raceList = res.result
      })
    }
  }
}
</script>

<style lang="css">
</style>
