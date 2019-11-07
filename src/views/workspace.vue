<template>
  <div>
    <p>new work space</p>
    <ul>
      <li v-for="(item,index) in apiUrl">
        <a :href="item.url" rel="noopener noreferrer">{{index+1}}、{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "workspace",
    data(){
      return{
        me:'',
        urlHeader:'http://139.9.251.177/work/',
        apiUrl:[
          {
            url:'lianxi.html',
            name:'练习'
          },
          {
            url:'bdmap.html',
            name:'百度地图接口调用'
          },
          {
            url:'calendar.html',
            name:'日历'
          },
          {
            url:'camera.html',
            name:'调用摄像头'
          },
          {
            url:'citylist.html',
            name:'城市列表'
          },
          {
            url:'fenping.html',
            name:'分屏'
          },
          {
            url:'filelimit.html',
            name:'文件上传限制'
          },
          {
            url:'gundong.html',
            name:'滚动'
          },
          {
            url:'history.html',
            name:'查询历史记录'
          },
          {
            url:'huaping1.html',
            name:'滑屏1'
          },
          {
            url:'huaping2.html',
            name:'滑屏2'
          },
          {
            url:'lunpan.html',
            name:'时间轮盘'
          },
          {
            url:'qrcode.html',
            name:'生成二维码'
          },
          {
            url:'timer.html',
            name:'定时器倒数一分钟计时'
          },
          {
            url:'zfbapi.html',
            name:'调用支付宝接口'
          },
        ]
      }
    },
    created(){
      this.apiUrl.forEach(item =>{
        item.url=this.urlHeader+item.url;
      })
    },
    mounted(){

    }
  }
</script>

<style scoped>
  ul,li{
    margin: 0px;
    padding: 0px;
    text-align: left;
  }
  ul{
    padding: 10px;
  }
</style>

