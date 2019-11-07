'use strict'
<template>
  <div class="hello">
    <img src="../assets/logo.png">

    <h1>{{ msg }}</h1>
    <h2>
      <span>{{ author }}</span>
      <span style="color: red">{{ authorName }}</span>
    </h2>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <hr>
    <div class="router-box">
      <router-link to="/vueQr">查看二维码</router-link>
      <router-link to="/mockData">mock模拟数据</router-link>
      <router-link to="/imageUse">图片的使用</router-link>
      <router-link to="/es6">es6语法</router-link>
      <router-link to="/baiduMap">百度地图API</router-link>
      <router-link to="/slider">滑屏效果</router-link>
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
    commen.name('feifei');
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
