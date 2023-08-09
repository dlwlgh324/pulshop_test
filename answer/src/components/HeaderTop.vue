<template>
    <div class="header_top">
      <div class="container">
        <div class="login_box">
          <a v-for="item in list" :key="item" href="#">{{ item }}</a>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'HeaderTop',
    data() {
      return {
        list: ['로그인', '회원가입', '고객기쁨센터', '배송안내']
      }
    },
  }
</script>

<style>
  .header_top {
    background-color: #f5f5f5;
  }

  .login_box {
    text-align: right;
  }

  .login_box a {
    color: #adadad;
    font-size: 12px;
    line-height: 32px;
  }

  .login_box a::after {
    position: relative;
    display: inline-block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #d4d4d4;
    margin: 0 10px;
    vertical-align: middle;
  }

  .login_box a:last-child::after {
    display: none;
  }
</style>