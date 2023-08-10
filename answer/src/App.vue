<template>
  <ShopHeader />
</template>

<script>
  import ShopHeader from './components/ShopHeader.vue'
  
  export default {
    name: 'App',
    components: {
      ShopHeader,
    }
  }
</script>

<style scoped>
  @import url(./assets/css/global.css);
</style>