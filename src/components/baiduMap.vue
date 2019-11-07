<template>
  <div>
    <div>百度地图API接口调用</div>
    <div id="container" ref="allmap"></div>
  </div>

</template>

<script>
  import BMap from 'BMap'
  import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
    export default {
        name: "baiduMap",
        data(){
          return{

          }
        },
      created(){

      },
      mounted() {
        this.initBaiduMap()
      },
      methods:{
        initBaiduMap() {
          //调用百度地图接口
          // 创建地图实例
          var map = new BMap.Map("container");
          // 创建点坐标
          var point = new BMap.Point(116.4039164169,39.9151941743);
          // 初始化地图，设置中心点坐标和地图级别
          map.centerAndZoom(point, 17);
          map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
          var opts1 = {offset: new BMap.Size(100, 5)}
          //var opts2 = { offset: new BMap.Size(260, 100) }
          map.addControl(new BMap.NavigationControl());
          map.addControl(new BMap.ScaleControl(opts1));
          map.addControl(new BMap.GeolocationControl(point));
          //map.addControl(new BMap.OverviewMapControl());
          //map.addControl(new BMap.MapTypeControl());
          //map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
          var marker = new BMap.Marker(point); // 创建标注
          //var label = new BMap.Label("天安门城楼"); // 创建文本
          map.addOverlay(marker);    // 将标注添加到地图中
          //map.addOverlay(label);    // 将文本添加到地图中

          var companyName = {
            width: 60,     // 信息窗口宽度
            height: 40,     // 信息窗口高度
            title: "天安门城楼"  // 信息窗口标题
          }
          var infoWindow = new BMap.InfoWindow("<div style='color:red'>欢迎姜子</div>", companyName);  // 创建信息窗口对象
          map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口

          //浏览器定位
          // var geolocation = new BMap.Geolocation();
          // geolocation.getCurrentPosition(function(r){
          //   if(this.getStatus() == BMAP_STATUS_SUCCESS){
          //     var mk = new BMap.Marker(r.point);
          //     map.addOverlay(mk);
          //     map.panTo(r.point);
          //     alert('您的位置：'+r.point.lng+','+r.point.lat);
          //   }
          //   else {
          //     alert('failed'+this.getStatus());
          //   }
          // });
          //IP定位

          // function myFun(result) {
          //   var cityName = result.name;
          //   map.setCenter(cityName);
          //   console.log("当前定位城市:" + cityName);
          // }
          // var myCity = new BMap.LocalCity();
          // myCity.get(myFun)

          //定位SDK辅助定位
          // var geolocation2 = new BMap.Geolocation();
          // // 开启SDK辅助定位
          // geolocation2.enableSDKLocation();
          // geolocation2.getCurrentPosition(function(r){
          //   if(this.getStatus() == BMAP_STATUS_SUCCESS){
          //     var mk = new BMap.Marker(r.point);
          //     map.addOverlay(mk);
          //     map.panTo(r.point);
          //     alert('您的位置：'+r.point.lng+','+r.point.lat);
          //   }
          //   else {
          //     alert('failed'+this.getStatus());
          //   }
          // });

        }
      }
    }
</script>

<style scoped>
  #container{
    height: 400px;
  }
</style>
