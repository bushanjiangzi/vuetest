<template>
  <div>
    <tab-nav title="二维码专页"></tab-nav>
    <url-nav :url="urlName"></url-nav>
    <div>{{ why }}</div>
    <qrcode :url="data.url" :iconurl="data.logo" :wid="300" :hei="300" :imgwid="54" :imghei="54"></qrcode>
    <hr>
    <div>带logo下载二维码的</div>
    <hr>
    <qrcode-vue
      :size="size"
      :value="qrUrl"
      :logo="logo"
      :bgColor="bgColor"
      :fgColor="fgColor"
    ></qrcode-vue>
  </div>

</template>

<script>
    import tabNav from '../commen/tab-nav.vue'
    import urlNav from '../commen/url-nav.vue'
    import qrcode from 'vue_qrcodes'
    import qrcodeVue from 'qrcode-vue'
    export default {
      name: "vue-qr",
      data() {
          return{
            urlName: "https://baidu.com",
            why:"这是二维码页",
            data: {
                url:"https://www.cnblogs.com/bushan/",
                logo:"http://www.sceneray.com/images/index/logo.png"
            },
          size: 900,
          bgColor: '#fff',
          fgColor: '#000',
          qrUrl: 'https://weixin.sceneray.com/jobs/index',
          logo: require('@/assets/jobs_logo.png')
        // logo: 'https://avatars3.githubusercontent.com/u/7104141?v=3&s=80',
          }
      },
      components: {
        qrcode,
        qrcodeVue,
        tabNav,
        urlNav
      }
    }
</script>

<style scoped>

</style>
