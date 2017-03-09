<template lang="html">
  <section class="home">
    <p class="home-title">王者荣耀助手-Vue2.0</p>
    <img src="../../static/img/1.jpg" alt="" />
    <img src="../../static/img/2.jpg" alt="" />
    <img src="../../static/img/3.jpg" alt="" />
    <router-link class="toEquip" to="/equip">
      <button type="button" name="button">Go!!!</button>
    </router-link>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
  html, body, .wrapper{
    height: 100%;
  }
  body{
    overflow-x: hidden;
    overflow-y: auto;
  }
  .wrapper{
    padding-bottom: 0;
  }
  .wrapper img {
    max-width: 100%;
    width: 100%;
    height: 33.33%;
    display: block;
    margin: 0 auto;
  }
</style>
