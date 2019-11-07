import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueQr from '../components/VueQr.vue'
import mockData from '../components/mockData.vue'
import imageUse from '../components/imageUse.vue'
import es6 from '../components/es6.vue'
import baiduMap from '../components/baiduMap.vue'
import slider from '../views/link/slider'
import work from '../views/work'
import center from '../views/center'
import home from '../views/home'
import workspace from '../views/workspace'
import videoRecord from '../components/videoRecord'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '*',redirect: {name: 'home'}},
    {path: '/',name: 'home',component: home},
    {path: '/home',name: 'home',component: home},
    {
      path: '/work',name: 'work',component: work,
    },
    {path: '/center',name: 'center',component: center},
    {path: '/vueQr',name: 'VueQr',component: VueQr},
    {path: '/mockData',name: 'mockData',component: mockData},
    {path: '/imageUse',name: 'imageUse',component: imageUse},
    {path: '/es6',name: 'es6',component: es6},
    {path: '/baiduMap',name: 'baiduMap',component: baiduMap},
    {path: '/slider',name: 'slider',component: slider},
    {path: '/work/workspace',name: 'workspace',component: workspace},
    {path: '/videoRecord',name: 'videoRecord',component: videoRecord},

  ]
})
