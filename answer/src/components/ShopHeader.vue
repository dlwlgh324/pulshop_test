<template>
  <header class="header">
    <HeaderTop />
    <HeaderMiddle />
    <HeaderBottom />
  </header>
</template>

<script>
  import HeaderTop from './HeaderTop.vue'
  import HeaderMiddle from './HeaderMiddle.vue'
  import HeaderBottom from './HeaderBottom.vue'

  export default {
    name: 'ShopHeader',
    components: {
      HeaderTop,
      HeaderMiddle,
      HeaderBottom,
    },
  }
</script>

<style>
  .header {
    position: relative;
    display: block;
    max-width: 1920px;
    min-width: 1168px;
    margin: 0 auto;
  }

</style>