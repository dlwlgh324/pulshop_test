<template>
  <div class="header_bottom">
    <div class="container">
      <div class="nav_box">
        <div  class="category">
          <button @click="show = !show" type="button" href="#" class="category_btn">전체 카테고리</button>
          <CatergoryMenu v-if="show" />
        </div>
        <nav class="nav">
          <a v-for="item in menu" :key="item" href="#">{{ item }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import CatergoryMenu from './CatergoryMenu.vue'

  export default {
    name: 'HeaderBottom',
    components: {
      CatergoryMenu
    },
    data() {
      return {
        menu: ['베스트', '일일배송', '매장배송', '지금세일', '신상품', '기획전/이벤트'],
        show: false,
      }
    },
  }
</script>

<style>
  .header_bottom {
    position: relative;
    height: 47px;
    border-bottom: 1px solid #f5f5f5;
  }

  .nav_box {
    display: flex;
    align-items: center;
  }

  .category_btn {
    display: flex;
    align-items: center;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .category_btn::before {
    content: '';
    position: relative;
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 6px;
    background: url(../assets/img/menu-line.svg);
  }

  .nav {
    padding-left: 60px;
  }

  .nav a {
    font-size: 16px;
    font-weight: 500;
    margin-right: 30px;
  }
</style>