<template>
  <div class="header_middle">
    <div class="container">
      <div class="middle_box">
        <h1 class="logo"><a href="#">샵풀무원</a></h1>
        <div class="seacrh_box">
          <input type="text" placeholder="#풀무원, 나와 지구를 위한 바른먹거리 마켓" maxlength="20" :value="text">
          <button v-on:click="ClickBtn" type="submit" href="#" class="seacrh_btn">검색</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderMiddle',
    data() {
      return {
        text : '',
        input : '나와 지구를 위한 바른먹거리 마켓, #풀무원',
      }
    },
    methods : {
      ClickBtn(){
        this.text =this.input
      }
    }
  }
</script>

<style>
  .header_middle{
    padding: 20px 0;
  }

  .middle_box {
    display: flex;
  }

  .logo {
    width: 167px;
    height: 44px;
  }

  .logo a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(../assets/img/pulmuone-shop.svg) no-repeat 50%/100%;
    font-size: 0;
  }

  .seacrh_box {
    width: 460px;
    height: 48px;
    padding: 0 20px;
    border: 1px solid #80c342;
    border-radius: 50px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-left: 20px;
  }

  .seacrh_box input {
    border: none;
    outline: none;
    width: 300px;
  }

  .seacrh_box input::placeholder {
    color: #80c342;
  }

  .seacrh_btn {
    display: block;
    width: 34px;
    height: 34px;
    background: url(../assets/img/search-line.svg) no-repeat 50%;
    font-size: 0;
    border: none;
    outline: none;
    cursor:pointer;
  }
</style>