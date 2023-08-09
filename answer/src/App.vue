<template>
  <ShopHeader />
  <OrderView />
</template>

<script>
  import ShopHeader from './components/ShopHeader.vue'
  import OrderView from './components/OrderView.vue'
  
  export default {
    name: 'App',
    components: {
      ShopHeader,
      OrderView
    }
  }
</script>

<style scoped>
  @import url(./assets/css/global.css);
  #app {}
</style>