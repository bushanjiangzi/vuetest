<template>
  <div id="abc">
    <!-- page集合的容器，里面放多个平行的.page，其他.page作为内联页面由路由控制展示 -->
    <div class="page-group">
      <!-- 单个page ,第一个.page默认被展示-->
      <div class="page">
        <!-- 标题栏 -->
        <header class="bar bar-nav">
          <a class="icon icon-me pull-left open-panel"></a>
          <h1 class="title">嘻嘻哈哈</h1>
        </header>

        <!-- 工具栏 -->
        <nav class="bar bar-tab">
          <router-link class="tab-item external active" :to="{name:'home'}">
            <span class="icon icon-home"></span>
            <span class="tab-label">首页</span>
          </router-link>

          <router-link class="tab-item external" :to="{name:'work'}">
            <span class="icon icon-star"></span>
            <span class="tab-label">工作台</span>
          </router-link>

          <router-link class="tab-item external" :to="{name:'center'}">
            <span class="icon icon-me"></span>
            <span class="tab-label">个人中心</span>
          </router-link>
        </nav>

        <!-- 这里是页面内容区 -->
        <div class="content">
          <router-view></router-view>
        </div>
      </div>

      <!-- 其他的单个page内联页（如果有） -->
      <div class="page">这里在哪啊</div>
    </div>

    <!-- popup, panel 等放在这里 -->
    <div class="panel-overlay"></div>
    <!-- Left Panel with Reveal effect -->
    <div class="panel panel-left panel-reveal">
      <div class="content-block">
        <p>这是一个侧栏</p>
        <p></p>
        <!-- Click on link with "close-panel" class will close panel -->
        <p><a href="javascript:;" class="close-panel">关闭</a></p>
      </div>
    </div>
  </div>
</template>


<script>
  // import com from "./js/commen"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){

  },
  mounted(){
    // let tabItem = document.querySelectorAll('.tab-item');
    // for(let i = 0;i < tabItem.length;i++){
    //   tabItem[i].onclick = function () {
    //     for(let j = 0;j < tabItem.length; j++){
    //       tabItem[j].className = 'tab-item external';
    //     }
    //     tabItem[i].className = 'tab-item external active';
    //   }
    // }
  }

}
</script>

<style scoped>
#abc {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  body{
    margin: 0;
    padding: 0;
  }
  .bar-tab .tab-item.active, .bar-tab .tab-item:active {
    color: #929292;
  }
  .router-link-exact-active{
    color: #0894ec !important;
  }
</style>
