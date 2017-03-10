<template lang="html">
  <section class="home">
    <p class="home-title">王者荣耀助手-Vue2.0</p>
    <img src="../../static/img/1.jpg" alt="" />
    <img src="../../static/img/2.jpg" alt="" />
    <img src="../../static/img/3.jpg" alt="" />
    <div class="toEquip" @click="toHome">
      <button type="button" name="button">Go!!!</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Index",
  created(){
    this.init()
  },
  mounted(){
    document.getElementById('app').classList.add('index')
  },
  methods: {
    init(){
      document.getElementsByTagName('html')[0].style.height = "100%";
      document.body.style.height = "100%";
    },
    toHome(){
      let url = "#/equip"
      document.getElementsByTagName('html')[0].style.height = "auto";
      document.body.style.height = "auto";
      document.getElementById('app').classList.remove('index');
      window.location.href = url;
    }
  }
}
</script>

<style lang="css">

</style>
