<template lang="html">
  <header class="header">
    <mt-header v-bind:title="title">
      <router-link to="/list" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </header>
</template>
<script>
export default {
  props: ["title"]
}
</script>

<style lang="css">
</style>
