'use strict'
<template>
  <div class="hello">
    <img src="../assets/logo.png">

    <h1>{{ msg }}</h1>
    <h2>
      <span>{{ author }}</span>
      <span style="color: red">{{ authorName }}</span>
    </h2>
    <h4>
      <a href="https://www.cnblogs.com/bushan/" target="_blank">查看我的博客</a>
    </h4>
    <hr>
    <div class="router-box">
      <router-link to="/vueQr">查看二维码</router-link>
      <router-link to="/mockData">mock模拟数据</router-link>
      <router-link to="/imageUse">图片的使用</router-link>
      <router-link to="/es6">es6语法</router-link>
      <router-link to="/baiduMap">百度地图API</router-link>
      <router-link to="/slider">滑屏效果</router-link>
      <router-link to="/videoRecord">录制视频</router-link>
    </div>

  </div>
</template>

<script>
  import commen from "../js/commen.js"
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App!',
        author:'author:',
        authorName:'jiangzi',

      }
    },
    mounted(){
      commen.hello();
      commen.name('fei');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .router-box{
    margin: 5px;
    text-align: left;
  }
  .router-box a{
    color: blue;
    display: inline-block;
    text-decoration: none;
    margin: 5px;
    padding: 3px;
    border-radius: 5px;
    border: 1px solid #8E8E8E;
  }
</style>

