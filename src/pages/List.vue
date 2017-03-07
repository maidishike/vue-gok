<template lang="html">
  <section>
    <ul v-for= "item in raceList">
      <li>{{item.recap_title}}</li>
    </ul>
  </section>
</template>
<script>
import api from '../api'
const header = {'DAIWAN-API-TOKEN': 'BB929-56B2B-F6A99-B926D'}
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
